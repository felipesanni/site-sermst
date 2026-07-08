import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ── Helper: JSON com charset UTF-8 explícito ───────────────────────────────
const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' } as const;
function jsonResponse(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: JSON_HEADERS });
}


// ── Rate limiting simples em memória (5 req/IP/minuto) ─────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;
const MIN_SUBMIT_MS = 4_000;
const MAX_MESSAGE_LENGTH = 4000;
const MAX_GENERIC_FIELD_LENGTH = 240;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

/**
 * POST /api/lead
 *
 * Recebe submissoes do formulario de lead (/contato) e:
 * 1. Valida campos obrigatórios e honeypot anti-spam
 * 2. Loga no console do servidor (todos os leads ficam no log)
 * 3. Envia email via SMTP para LEAD_NOTIFY_EMAIL se configurado
 * 4. Posta em LEAD_WEBHOOK_URL se configurado (CRM, Make, Zapier, n8n)
 *
 * Variaveis de ambiente:
 * - SMTP_HOST          - servidor SMTP (ex.: smtp.hostinger.com)
 * - SMTP_PORT          - porta (ex.: 587 para TLS, 465 para SSL)
 * - SMTP_USER          - usuario SMTP (ex.: site@sermst.com.br)
 * - SMTP_PASS          - senha do SMTP
 * - SMTP_FROM          - remetente (ex.: "SERMST Site <site@sermst.com.br>")
 * - LEAD_NOTIFY_EMAIL  - destinatario (ex.: comercial@sermst.com.br)
 * - LEAD_WEBHOOK_URL   - URL para POST do payload (CRM/Zapier/n8n)
 */

interface LeadPayload {
  nome?: string;
  empresa?: string;
  email?: string;
  telefone?: string;
  porte?: string;
  dor?: string;
  mensagem?: string;
  website?: string;
  landing_page?: string;
  conversion_page?: string;
  original_referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  utm_id?: string;
  utm_source_first?: string;
  utm_medium_first?: string;
  utm_campaign_first?: string;
  utm_content_first?: string;
  utm_term_first?: string;
  gclid_first?: string;
  fbclid_first?: string;
  utm_id_first?: string;
  attribution_first_captured_at?: string;
  attribution_last_captured_at?: string;
  form_started_at?: string;
  turnstile_token?: string;
  'cf-turnstile-response'?: string;
  lead_type?: string;
  assinatura?: SubscriptionLeadData;
  cargo?: string;
  cpf_responsavel?: string;
  rg_responsavel?: string;
  indicador_nome?: string;
  indicador_telefone?: string;
  dia_pagamento?: string;
  email_financeiro?: string;
  contador_nome?: string;
  contador_email?: string;
  contador_telefone?: string;
  plano_assinatura?: string;
  funcionarios?: string;
  valor_mensal?: string;
  valor_anual?: string;
  ciclo_pagamento?: string;
  cnpj?: string;
  cnae?: string;
  grau_risco?: string;
  unidades_adicionais?: string;
}

interface AddressData {
  cep?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
}

interface SubscriptionLeadData {
  plano?: {
    id?: string;
    nome?: string;
    funcionarios?: number | string;
    ciclo_pagamento?: string;
    valor_mensal?: string;
    valor_anual_pix?: string;
    itens_inclusos?: string[];
  };
  responsavel?: {
    nome?: string;
    email?: string;
    telefone?: string;
    cargo?: string;
    cpf?: string;
    rg?: string;
  };
  financeiro?: {
    diaPagamento?: string;
    email?: string;
  };
  contabilidade?: {
    nome?: string;
    email?: string;
    telefone?: string;
  };
  indicacao?: {
    nome?: string;
    telefone?: string;
  };
  empresa?: {
    cnpj?: string;
    razao_social?: string;
    cnae?: string;
    cnae_descricao?: string;
    grau_risco?: string;
    grau_risco_label?: string;
    nr05?: string;
    endereco_principal?: AddressData;
    status_endereco_principal?: string;
    filiais?: Array<{
      identificacao?: string;
      cnpj?: string;
      razao_social?: string;
      endereco?: AddressData;
      status_endereco?: string;
    }>;
  };
}

const REQUIRED = ['nome', 'empresa', 'email', 'telefone', 'porte', 'dor'] as const;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function countLinks(value: string) {
  return (value.match(/https?:\/\/|www\./gi) || []).length;
}

function containsSpamPattern(value: string) {
  return /(casino|viagra|loan|forex|crypto|telegram|seo service|backlink)/i.test(value);
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return; // Turnstile não configurado — passa direto

  try {
    const body = new URLSearchParams();
    body.set('secret', secret);
    body.set('response', token);
    if (ip && ip !== 'unknown') body.set('remoteip', ip);

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    if (!response.ok) {
      console.warn('[LEAD] Turnstile HTTP erro:', response.status, '— permitindo envio');
      return;
    }
    const result = (await response.json()) as { success?: boolean; 'error-codes'?: string[] };
    if (!result.success) {
      console.warn('[LEAD] Turnstile recusou token:', result['error-codes'], '— permitindo envio');
    }
  } catch (error) {
    console.error('[LEAD] Turnstile falha de rede — permitindo envio:', error);
  }
  // Em todos os casos, não bloqueia: honeypot + rate limit + filtro de texto já protegem
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function emptyHtml() {
  return "<em style='color:#94a3b8;font-style:italic'>vazio</em>";
}

function textOrEmpty(value: unknown) {
  const text = String(value ?? '').trim();
  return text || '(vazio)';
}

function htmlValue(value: unknown) {
  const text = String(value ?? '').trim();
  return text ? escapeHtml(text) : emptyHtml();
}

function mailto(email: unknown) {
  const value = String(email ?? '').trim();
  if (!value) return emptyHtml();
  const safe = escapeHtml(value);
  return `<a href="mailto:${safe}" style="color:#0f172a;text-decoration:underline">${safe}</a>`;
}

function tel(phone: unknown) {
  const value = String(phone ?? '').trim();
  if (!value) return emptyHtml();
  const safe = escapeHtml(value);
  return `<a href="tel:${safe.replace(/\D/g, '')}" style="color:#0f172a;text-decoration:underline">${safe}</a>`;
}

function formatAddress(address?: AddressData) {
  if (!address) return '';

  const street = [
    address.logradouro,
    address.numero ? `nº ${address.numero}` : '',
    address.complemento,
  ]
    .filter(Boolean)
    .join(', ');
  const region = [
    address.bairro,
    address.cidade || address.estado ? `${address.cidade || ''}${address.estado ? `/${address.estado}` : ''}` : '',
    address.cep ? `CEP ${address.cep}` : '',
  ]
    .filter(Boolean)
    .join(' - ');

  return [street, region].filter(Boolean).join(' | ');
}

function tableRows(rows: Array<[string, string]>) {
  return rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 14px;font-weight:800;color:#1e293b;white-space:nowrap;width:190px;border-bottom:1px solid #e2e8f0;vertical-align:top">${escapeHtml(label)}</td>` +
        `<td style="padding:10px 14px;color:#334155;border-bottom:1px solid #e2e8f0;vertical-align:top">${value || emptyHtml()}</td></tr>`,
    )
    .join('');
}

function infoTable(rows: Array<[string, string]>) {
  return `<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;background:#ffffff">${tableRows(rows)}</table>`;
}

function section(title: string, content: string, subtitle = '') {
  return `<tr><td style="background:#ffffff;padding:24px 32px;border-top:1px solid #e2e8f0">
    <p style="margin:0 0 6px;font-size:14px;font-weight:900;text-transform:uppercase;letter-spacing:.08em;color:#e11d48">${escapeHtml(title)}</p>
    ${subtitle ? `<p style="margin:0 0 16px;color:#64748b;font-size:14px;line-height:1.5">${escapeHtml(subtitle)}</p>` : ''}
    ${content}
  </td></tr>`;
}

function buildEmailText(lead: ReturnType<typeof buildLead>): string {
  if (lead.subscription) return buildSubscriptionEmailText(lead);

  return (
    `Novo lead recebido pelo formulário do site SERMST\n` +
    `${"=".repeat(50)}\n\n` +
    `Nome:              ${lead.nome}\n` +
    `Empresa:           ${lead.empresa}\n` +
    `E-mail:            ${lead.email}\n` +
    `Telefone:          ${lead.telefone}\n` +
    `Porte:             ${lead.porte}\n` +
    `Demanda:           ${lead.dor}\n` +
    `Mensagem:          ${lead.mensagem || "(vazio)"}\n\n` +
    `${"─".repeat(50)}\n` +
    `ATRIBUIÇÃO\n` +
    `${"─".repeat(50)}\n` +
    `Landing page:      ${lead.attribution.landingPage || "(vazio)"}\n` +
    `Pág. conversão:    ${lead.attribution.conversionPage || "(vazio)"}\n` +
    `Referrer original: ${lead.attribution.originalReferrer || "(vazio)"}\n\n` +
    `Último toque\n` +
    `  UTM source:      ${lead.attribution.lastTouch.utm_source || "(vazio)"}\n` +
    `  UTM medium:      ${lead.attribution.lastTouch.utm_medium || "(vazio)"}\n` +
    `  UTM campaign:    ${lead.attribution.lastTouch.utm_campaign || "(vazio)"}\n` +
    `  UTM content:     ${lead.attribution.lastTouch.utm_content || "(vazio)"}\n` +
    `  UTM term:        ${lead.attribution.lastTouch.utm_term || "(vazio)"}\n` +
    `  UTM ID:          ${lead.attribution.lastTouch.utm_id || "(vazio)"}\n` +
    `  GCLID:           ${lead.attribution.lastTouch.gclid || "(vazio)"}\n` +
    `  FBCLID:          ${lead.attribution.lastTouch.fbclid || "(vazio)"}\n\n` +
    `Primeiro toque\n` +
    `  UTM source:      ${lead.attribution.firstTouch.utm_source || "(vazio)"}\n` +
    `  UTM medium:      ${lead.attribution.firstTouch.utm_medium || "(vazio)"}\n` +
    `  UTM campaign:    ${lead.attribution.firstTouch.utm_campaign || "(vazio)"}\n` +
    `  UTM content:     ${lead.attribution.firstTouch.utm_content || "(vazio)"}\n` +
    `  UTM term:        ${lead.attribution.firstTouch.utm_term || "(vazio)"}\n` +
    `  UTM ID:          ${lead.attribution.firstTouch.utm_id || "(vazio)"}\n` +
    `  GCLID:           ${lead.attribution.firstTouch.gclid || "(vazio)"}\n\n` +
    `Recebido em:       ${lead.receivedAt}\n`
  );
}

function buildSubscriptionEmailText(lead: ReturnType<typeof buildLead>): string {
  const subscription = lead.subscription;
  const plan = subscription?.plano ?? {};
  const responsible = subscription?.responsavel ?? {};
  const financial = subscription?.financeiro ?? {};
  const accounting = subscription?.contabilidade ?? {};
  const referral = subscription?.indicacao ?? {};
  const company = subscription?.empresa ?? {};
  const branches = company.filiais ?? [];
  const includedItems = plan.itens_inclusos ?? [];

  return (
    `Nova contratação de assinatura SERMST\n` +
    `${"=".repeat(50)}\n\n` +
    `Empresa:              ${textOrEmpty(company.razao_social || lead.empresa)}\n` +
    `CNPJ:                 ${textOrEmpty(company.cnpj)}\n` +
    `Plano:                ${textOrEmpty(plan.nome || lead.dor)}\n` +
    `Funcionários:         ${textOrEmpty(plan.funcionarios || lead.porte)}\n` +
    `Pagamento:            ${plan.ciclo_pagamento === 'annual' ? 'Anual à vista via PIX' : 'Mensal recorrente'}\n` +
    `Valor contratado:     ${plan.ciclo_pagamento === 'annual' ? textOrEmpty(plan.valor_anual_pix) : textOrEmpty(plan.valor_mensal)}\n` +
    `Valor mensal (ref.):  ${textOrEmpty(plan.valor_mensal)}\n` +
    `Valor anual PIX (ref.): ${textOrEmpty(plan.valor_anual_pix)}\n\n` +
    `Responsável:          ${textOrEmpty(responsible.nome || lead.nome)}\n` +
    `Cargo:                ${textOrEmpty(responsible.cargo)}\n` +
    `E-mail:               ${textOrEmpty(responsible.email || lead.email)}\n` +
    `Telefone:             ${textOrEmpty(responsible.telefone || lead.telefone)}\n` +
    `CPF/RG:               ${textOrEmpty([responsible.cpf, responsible.rg].filter(Boolean).join(' / '))}\n\n` +
    `Financeiro:           Dia ${textOrEmpty(financial.diaPagamento)} | ${textOrEmpty(financial.email)}\n` +
    `Contabilidade:        ${textOrEmpty([accounting.nome, accounting.email, accounting.telefone].filter(Boolean).join(' | '))}\n` +
    `Indicação/vendedor:   ${textOrEmpty([referral.nome, referral.telefone].filter(Boolean).join(' | '))}\n\n` +
    `CNAE:                 ${textOrEmpty([company.cnae, company.cnae_descricao].filter(Boolean).join(' - '))}\n` +
    `Grau de risco:        ${textOrEmpty(company.grau_risco_label || company.grau_risco)}\n` +
    `NR-05:                ${textOrEmpty(company.nr05)}\n` +
    `Endereço matriz:      ${textOrEmpty(formatAddress(company.endereco_principal))} (${textOrEmpty(company.status_endereco_principal)})\n\n` +
    `Filiais:\n${branches.length ? branches.map((branch, index) => `  ${index + 1}. ${textOrEmpty(branch.identificacao)} | ${textOrEmpty(branch.cnpj)} | ${textOrEmpty(formatAddress(branch.endereco))} (${textOrEmpty(branch.status_endereco)})`).join('\n') : '  Sem filiais adicionais informadas.'}\n\n` +
    `Itens incluídos:\n${includedItems.length ? includedItems.map((item) => `  - ${item}`).join('\n') : '  (vazio)'}\n\n` +
    `Atribuição: ${lead.attribution.conversionPage || '(vazio)'} | ${lead.attribution.lastTouch.utm_source || '(sem UTM source)'} / ${lead.attribution.lastTouch.utm_medium || '(sem UTM medium)'}\n` +
    `Recebido em: ${lead.receivedAt}\n`
  );
}

function buildSubscriptionEmailHtml(lead: ReturnType<typeof buildLead>): string {
  const subscription = lead.subscription;
  const plan = subscription?.plano ?? {};
  const responsible = subscription?.responsavel ?? {};
  const financial = subscription?.financeiro ?? {};
  const accounting = subscription?.contabilidade ?? {};
  const referral = subscription?.indicacao ?? {};
  const company = subscription?.empresa ?? {};
  const branches = company.filiais ?? [];
  const includedItems = plan.itens_inclusos ?? [];
  const paymentLabel = plan.ciclo_pagamento === 'annual' ? 'Anual à vista via PIX' : 'Mensal recorrente';

  const itemsHtml = includedItems.length
    ? `<ul style="margin:0;padding:0;list-style:none">${includedItems
        .map(
          (item) =>
            `<li style="margin:0 0 8px;padding:10px 12px;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;color:#334155;font-size:14px;line-height:1.45">✓ ${escapeHtml(item)}</li>`,
        )
        .join('')}</ul>`
    : `<p style="margin:0;color:#94a3b8;font-style:italic">Nenhum item informado.</p>`;

  const branchesHtml = branches.length
    ? branches
        .map(
          (branch, index) =>
            `<div style="margin:0 0 10px;padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:#ffffff">
              <p style="margin:0 0 8px;color:#0f172a;font-weight:900">${index + 1}. ${htmlValue(branch.identificacao)}</p>
              ${infoTable([
                ['CNPJ', htmlValue(branch.cnpj)],
                ['Razão social', htmlValue(branch.razao_social)],
                ['Endereço', htmlValue(formatAddress(branch.endereco))],
                ['Status', htmlValue(branch.status_endereco)],
              ])}
            </div>`,
        )
        .join('')
    : `<p style="margin:0;padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:#ffffff;color:#64748b;font-weight:700">Sem filiais adicionais informadas.</p>`;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;color:#334155">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr><td align="center" style="padding:28px 12px">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:760px;border-collapse:collapse;border-radius:18px;overflow:hidden;box-shadow:0 18px 45px rgba(15,23,42,.12)">
        <tr><td style="background:#0f172a;padding:28px 32px">
          <p style="margin:0 0 8px;color:#fb174c;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.14em">Contratação de assinatura</p>
          <h1 style="margin:0;color:#ffffff;font-size:26px;line-height:1.2;font-weight:900">Novo pedido: ${htmlValue(plan.nome || 'Plano SERMST')}</h1>
          <p style="margin:10px 0 0;color:#cbd5e1;font-size:15px;line-height:1.5">${htmlValue(company.razao_social || lead.empresa)} · ${htmlValue(plan.funcionarios || lead.porte)} funcionários</p>
        </td></tr>

        <tr><td style="background:#ffffff;padding:24px 32px">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse">
            <tr>
              <td style="width:33.33%;padding:12px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc">
                <p style="margin:0 0 5px;color:#64748b;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.08em">Plano</p>
                <p style="margin:0;color:#0f172a;font-size:18px;font-weight:900">${htmlValue(plan.nome)}</p>
              </td>
              <td style="width:33.33%;padding:12px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc">
                <p style="margin:0 0 5px;color:#64748b;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.08em">${plan.ciclo_pagamento === 'annual' ? 'Total à vista' : 'Mensal'}</p>
                <p style="margin:0;color:#0f172a;font-size:18px;font-weight:900">${htmlValue(plan.ciclo_pagamento === 'annual' ? plan.valor_anual_pix : plan.valor_mensal)}</p>
              </td>
              <td style="width:33.33%;padding:12px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc">
                <p style="margin:0 0 5px;color:#64748b;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.08em">Pagamento</p>
                <p style="margin:0;color:#0f172a;font-size:18px;font-weight:900">${escapeHtml(paymentLabel)}</p>
              </td>
            </tr>
          </table>
        </td></tr>

        ${section('Dados do responsável', infoTable([
          ['Nome', htmlValue(responsible.nome || lead.nome)],
          ['Cargo', htmlValue(responsible.cargo)],
          ['E-mail', mailto(responsible.email || lead.email)],
          ['Telefone', tel(responsible.telefone || lead.telefone)],
          ['CPF', htmlValue(responsible.cpf)],
          ['RG', htmlValue(responsible.rg)],
        ]))}

        ${section('Plano selecionado', infoTable([
          ['Funcionários', htmlValue(plan.funcionarios)],
          ['Forma de pagamento', escapeHtml(paymentLabel)],
          ['Valor contratado', `<strong style="color:#e11d48">${htmlValue(plan.ciclo_pagamento === 'annual' ? plan.valor_anual_pix : plan.valor_mensal)}</strong>`],
          ['Valor mensal (ref.)', htmlValue(plan.valor_mensal)],
          ['Valor anual PIX (ref.)', htmlValue(plan.valor_anual_pix)],
        ]))}

        ${section('Itens incluídos no contrato', itemsHtml, 'Escopo informado ao cliente no formulário de contratação.')}

        ${section('Financeiro e indicação', infoTable([
          ['Dia de pagamento', htmlValue(financial.diaPagamento)],
          ['E-mail financeiro', mailto(financial.email)],
          ['Contabilidade', htmlValue([accounting.nome, accounting.email, accounting.telefone].filter(Boolean).join(' | '))],
          ['Vendedor/indicação', htmlValue([referral.nome, referral.telefone].filter(Boolean).join(' | '))],
        ]))}

        ${section('Dados da empresa', infoTable([
          ['Razão social', htmlValue(company.razao_social || lead.empresa)],
          ['CNPJ', htmlValue(company.cnpj)],
          ['CNAE', htmlValue([company.cnae, company.cnae_descricao].filter(Boolean).join(' - '))],
          ['Grau de risco', htmlValue(company.grau_risco_label || company.grau_risco)],
          ['NR-05', htmlValue(company.nr05)],
          ['Endereço matriz', htmlValue(formatAddress(company.endereco_principal))],
          ['Status endereço', htmlValue(company.status_endereco_principal)],
        ]))}

        ${section('Filiais adicionais', branchesHtml)}

        ${section('Atribuição', infoTable([
          ['Landing page', htmlValue(lead.attribution.landingPage)],
          ['Pág. conversão', htmlValue(lead.attribution.conversionPage)],
          ['UTM source', htmlValue(lead.attribution.lastTouch.utm_source)],
          ['UTM medium', htmlValue(lead.attribution.lastTouch.utm_medium)],
          ['UTM campaign', htmlValue(lead.attribution.lastTouch.utm_campaign)],
          ['UTM content', htmlValue(lead.attribution.lastTouch.utm_content)],
          ['UTM term', htmlValue(lead.attribution.lastTouch.utm_term)],
          ['GCLID', htmlValue(lead.attribution.lastTouch.gclid)],
        ]))}

        <tr><td style="background:#0f172a;padding:18px 32px">
          <p style="margin:0;color:#cbd5e1;font-size:12px;line-height:1.5">Enviado automaticamente pelo site sermst.com.br em ${escapeHtml(lead.receivedAt)}. Conferir CNAE, grau de risco, unidades, cargos e exames complementares antes da ativação final do plano.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function buildEmailHtml(lead: ReturnType<typeof buildLead>): string {
  if (lead.subscription) return buildSubscriptionEmailHtml(lead);

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px;font-weight:600;color:#1e293b;white-space:nowrap;width:160px">${label}</td>` +
    `<td style="padding:6px 12px;color:#334155">${value || "<em style='color:#94a3b8'>vazio</em>"}</td></tr>`;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:system-ui,-apple-system,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;margin:32px auto">
    <tr><td style="background:#0f172a;padding:24px 32px;border-radius:12px 12px 0 0">
      <p style="margin:0;color:#f8fafc;font-size:20px;font-weight:800">SERMST — Novo Lead</p>
      <p style="margin:4px 0 0;color:#94a3b8;font-size:13px">Formulário do site · ${lead.receivedAt}</p>
    </td></tr>

    <tr><td style="background:#ffffff;padding:24px 32px">
      <p style="margin:0 0 16px;font-size:14px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#e11d48">Dados do contato</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden">
        ${row("Nome", lead.nome)}
        ${row("Empresa", lead.empresa)}
        ${row("E-mail", `<a href="mailto:${lead.email}" style="color:#0f172a">${lead.email}</a>`)}
        ${row("Telefone", `<a href="tel:${lead.telefone}" style="color:#0f172a">${lead.telefone}</a>`)}
        ${row("Porte", lead.porte)}
        ${row("Demanda", `<strong>${lead.dor}</strong>`)}
        ${lead.mensagem ? row("Mensagem", lead.mensagem) : ""}
      </table>
    </td></tr>

    <tr><td style="background:#f8fafc;padding:24px 32px;border-top:1px solid #e2e8f0">
      <p style="margin:0 0 16px;font-size:14px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#64748b">Atribuição</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;background:#fff">
        ${row("Landing page", lead.attribution.landingPage)}
        ${row("Pág. conversão", lead.attribution.conversionPage)}
        ${row("Referrer", lead.attribution.originalReferrer)}
        ${row("UTM source", lead.attribution.lastTouch.utm_source)}
        ${row("UTM medium", lead.attribution.lastTouch.utm_medium)}
        ${row("UTM campaign", lead.attribution.lastTouch.utm_campaign)}
        ${row("UTM content", lead.attribution.lastTouch.utm_content)}
        ${row("UTM term", lead.attribution.lastTouch.utm_term)}
        ${row("UTM ID", lead.attribution.lastTouch.utm_id)}
        ${row("GCLID", lead.attribution.lastTouch.gclid)}
        ${row("1º UTM source", lead.attribution.firstTouch.utm_source)}
        ${row("1º UTM medium", lead.attribution.firstTouch.utm_medium)}
        ${row("1º UTM campaign", lead.attribution.firstTouch.utm_campaign)}
        ${row("1º UTM ID", lead.attribution.firstTouch.utm_id)}
      </table>
    </td></tr>

    <tr><td style="background:#f1f5f9;padding:16px 32px;border-radius:0 0 12px 12px">
      <p style="margin:0;font-size:12px;color:#94a3b8">Enviado automaticamente pelo site sermst.com.br</p>
    </td></tr>
  </table>
</body></html>`;
}

function normalizeSubscription(data: LeadPayload): SubscriptionLeadData | null {
  if (data.dor !== 'assinatura-sst' && data.lead_type !== 'assinatura-sst') return null;

  if (data.assinatura && typeof data.assinatura === 'object') {
    return data.assinatura;
  }

  return {
    plano: {
      nome: data.plano_assinatura || data.dor || '',
      funcionarios: data.funcionarios || data.porte || '',
      ciclo_pagamento: data.ciclo_pagamento || '',
      valor_mensal: data.valor_mensal || '',
      valor_anual_pix: data.valor_anual || '',
      itens_inclusos: [],
    },
    responsavel: {
      nome: data.nome || '',
      email: data.email || '',
      telefone: data.telefone || '',
      cargo: data.cargo || '',
      cpf: data.cpf_responsavel || '',
      rg: data.rg_responsavel || '',
    },
    financeiro: {
      diaPagamento: data.dia_pagamento || '',
      email: data.email_financeiro || '',
    },
    contabilidade: {
      nome: data.contador_nome || '',
      email: data.contador_email || '',
      telefone: data.contador_telefone || '',
    },
    indicacao: {
      nome: data.indicador_nome || '',
      telefone: data.indicador_telefone || '',
    },
    empresa: {
      cnpj: data.cnpj || '',
      razao_social: data.empresa || '',
      cnae: data.cnae || '',
      grau_risco: data.grau_risco || '',
      filiais: [],
    },
  };
}

function buildLead(data: LeadPayload, req: Request) {
  return {
    nome: String(data.nome).trim(),
    empresa: String(data.empresa).trim(),
    email: String(data.email).trim().toLowerCase(),
    telefone: String(data.telefone).trim(),
    porte: String(data.porte).trim(),
    dor: String(data.dor).trim(),
    mensagem: data.mensagem ? String(data.mensagem).trim() : '',
    attribution: {
      landingPage: data.landing_page ? String(data.landing_page).trim() : '',
      conversionPage: data.conversion_page ? String(data.conversion_page).trim() : '',
      originalReferrer: data.original_referrer ? String(data.original_referrer).trim() : '',
      lastTouch: {
        utm_source: data.utm_source ? String(data.utm_source).trim() : '',
        utm_medium: data.utm_medium ? String(data.utm_medium).trim() : '',
        utm_campaign: data.utm_campaign ? String(data.utm_campaign).trim() : '',
        utm_content: data.utm_content ? String(data.utm_content).trim() : '',
        utm_term: data.utm_term ? String(data.utm_term).trim() : '',
        gclid: data.gclid ? String(data.gclid).trim() : '',
        fbclid: data.fbclid ? String(data.fbclid).trim() : '',
        utm_id: data.utm_id ? String(data.utm_id).trim() : '',
        capturedAt: data.attribution_last_captured_at ? String(data.attribution_last_captured_at).trim() : '',
      },
      firstTouch: {
        utm_source: data.utm_source_first ? String(data.utm_source_first).trim() : '',
        utm_medium: data.utm_medium_first ? String(data.utm_medium_first).trim() : '',
        utm_campaign: data.utm_campaign_first ? String(data.utm_campaign_first).trim() : '',
        utm_content: data.utm_content_first ? String(data.utm_content_first).trim() : '',
        utm_term: data.utm_term_first ? String(data.utm_term_first).trim() : '',
        gclid: data.gclid_first ? String(data.gclid_first).trim() : '',
        fbclid: data.fbclid_first ? String(data.fbclid_first).trim() : '',
        utm_id: data.utm_id_first ? String(data.utm_id_first).trim() : '',
        capturedAt: data.attribution_first_captured_at ? String(data.attribution_first_captured_at).trim() : '',
      },
    },
    receivedAt: new Date().toISOString(),
    userAgent: req.headers.get('user-agent') ?? '',
    referer: req.headers.get('referer') ?? '',
    subscription: normalizeSubscription(data),
  };
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';
  if (!checkRateLimit(ip)) {
    return jsonResponse({ error: 'Muitas requisições. Tente novamente em alguns instantes.' }, 429);
  }

  let data: LeadPayload;
  try {
    data = (await req.json()) as LeadPayload;
  } catch {
    return jsonResponse({ error: 'Payload invalido.' }, 400);
  }

  // Honeypot
  if (data.website && data.website.trim() !== '') {
    return jsonResponse({ ok: true });
  }

  for (const field of REQUIRED) {
    if (!data[field] || String(data[field]).trim() === '') {
      return jsonResponse({ error: `Campo obrigatório ausente: ${field}` }, 400);
    }
  }

  if (!isEmail(String(data.email))) {
    return jsonResponse({ error: 'E-mail invalido.' }, 400);
  }

  const formStartedAt = Number(data.form_started_at || 0);
  if (
    !Number.isFinite(formStartedAt) ||
    formStartedAt <= 0 ||
    Date.now() - formStartedAt < MIN_SUBMIT_MS
  ) {
    return jsonResponse({ error: 'Envio invalido. Aguarde alguns segundos e tente novamente.' }, 400);
  }

  const nome = String(data.nome || '').trim();
  const empresa = String(data.empresa || '').trim();
  const email = String(data.email || '').trim();
  const telefone = String(data.telefone || '').trim();
  const mensagem = String(data.mensagem || '').trim();
  const fullText = `${nome} ${empresa} ${email} ${telefone} ${mensagem}`.trim();

  if (
    nome.length > MAX_GENERIC_FIELD_LENGTH ||
    empresa.length > MAX_GENERIC_FIELD_LENGTH ||
    email.length > MAX_GENERIC_FIELD_LENGTH ||
    telefone.length > 40 ||
    mensagem.length > MAX_MESSAGE_LENGTH
  ) {
    return jsonResponse({ error: 'Alguns campos ultrapassam o limite permitido.' }, 400);
  }

  if (countLinks(fullText) > 2 || containsSpamPattern(fullText)) {
    return jsonResponse({ error: 'Nao foi possivel validar o conteudo enviado.' }, 400);
  }

  const turnstileToken = String(
    data.turnstile_token || data['cf-turnstile-response'] || ''
  );
  await verifyTurnstile(turnstileToken, ip);

  const lead = buildLead(data, req);
  console.log(
    '[LEAD]',
    JSON.stringify({
      empresa: lead.empresa,
      dor: lead.dor,
      receivedAt: lead.receivedAt,
      landingPage: lead.attribution.landingPage,
      conversionPage: lead.attribution.conversionPage,
    })
  );

  let deliveryAttempted = false;
  let deliverySucceeded = false;

  // ── Webhook ────────────────────────────────────────────────────────────────
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    deliveryAttempted = true;
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (webhookResponse.ok) {
        deliverySucceeded = true;
      } else {
        console.error('[LEAD] Webhook respondeu com erro:', webhookResponse.status);
      }
    } catch (err) {
      console.error('[LEAD] Webhook falhou:', err);
    }
  }

  // ── Email via SMTP ─────────────────────────────────────────────────────────
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM ?? smtpUser;
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL;

  if (smtpHost && smtpUser && smtpPass && notifyTo) {
    deliveryAttempted = true;
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        // Garante encoding UTF-8 na conexão SMTP
        tls: { rejectUnauthorized: false },   // true para SSL/465, false para TLS/587
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: notifyTo,
        subject: `=?UTF-8?B?${Buffer.from('Novo lead SERMST: ' + lead.empresa + ' — ' + lead.dor).toString('base64')}?=`,
        text: buildEmailText(lead),
        html: buildEmailHtml(lead),
        encoding: 'base64',
      });
      deliverySucceeded = true;
    } catch (err) {
      console.error('[LEAD] SMTP falhou:', err);
    }
  }

  if (deliveryAttempted && !deliverySucceeded) {
    return jsonResponse(
      { error: 'Nao foi possivel concluir o envio agora. Tente novamente em instantes ou fale com a SERMST pelo WhatsApp.' },
      502
    );
  }

  return jsonResponse({ ok: true });
}
