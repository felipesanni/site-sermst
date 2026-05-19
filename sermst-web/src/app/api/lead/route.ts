import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ── Rate limiting simples em memória (5 req/IP/minuto) ─────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;

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
  utm_source_first?: string;
  utm_medium_first?: string;
  utm_campaign_first?: string;
  utm_content_first?: string;
  utm_term_first?: string;
  gclid_first?: string;
  fbclid_first?: string;
  attribution_first_captured_at?: string;
  attribution_last_captured_at?: string;
}

const REQUIRED = ['nome', 'empresa', 'email', 'telefone', 'porte', 'dor'] as const;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildEmailText(lead: ReturnType<typeof buildLead>): string {
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
    `  GCLID:           ${lead.attribution.lastTouch.gclid || "(vazio)"}\n` +
    `  FBCLID:          ${lead.attribution.lastTouch.fbclid || "(vazio)"}\n\n` +
    `Primeiro toque\n` +
    `  UTM source:      ${lead.attribution.firstTouch.utm_source || "(vazio)"}\n` +
    `  UTM medium:      ${lead.attribution.firstTouch.utm_medium || "(vazio)"}\n` +
    `  UTM campaign:    ${lead.attribution.firstTouch.utm_campaign || "(vazio)"}\n` +
    `  GCLID:           ${lead.attribution.firstTouch.gclid || "(vazio)"}\n\n` +
    `Recebido em:       ${lead.receivedAt}\n`
  );
}

function buildEmailHtml(lead: ReturnType<typeof buildLead>): string {
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
        ${row("GCLID", lead.attribution.lastTouch.gclid)}
        ${row("1º UTM source", lead.attribution.firstTouch.utm_source)}
        ${row("1º UTM medium", lead.attribution.firstTouch.utm_medium)}
      </table>
    </td></tr>

    <tr><td style="background:#f1f5f9;padding:16px 32px;border-radius:0 0 12px 12px">
      <p style="margin:0;font-size:12px;color:#94a3b8">Enviado automaticamente pelo site sermst.com.br</p>
    </td></tr>
  </table>
</body></html>`;
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
        capturedAt: data.attribution_first_captured_at ? String(data.attribution_first_captured_at).trim() : '',
      },
    },
    receivedAt: new Date().toISOString(),
    userAgent: req.headers.get('user-agent') ?? '',
    referer: req.headers.get('referer') ?? '',
  };
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Muitas requisições. Tente novamente em alguns instantes.' },
      { status: 429 }
    );
  }

  let data: LeadPayload;
  try {
    data = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: 'Payload invalido.' }, { status: 400 });
  }

  // Honeypot
  if (data.website && data.website.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  for (const field of REQUIRED) {
    if (!data[field] || String(data[field]).trim() === '') {
      return NextResponse.json(
        { error: `Campo obrigatório ausente: ${field}` },
        { status: 400 }
      );
    }
  }

  if (!isEmail(String(data.email))) {
    return NextResponse.json({ error: 'E-mail invalido.' }, { status: 400 });
  }

  const lead = buildLead(data, req);
  console.log('[LEAD]', JSON.stringify(lead));

  // ── Webhook ────────────────────────────────────────────────────────────────
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
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
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,   // true para SSL/465, false para TLS/587
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: notifyTo,
        subject: `Novo lead SERMST: ${lead.empresa} — ${lead.dor}`,
        text: buildEmailText(lead),
        html: buildEmailHtml(lead),
      });
    } catch (err) {
      console.error('[LEAD] SMTP falhou:', err);
    }
  }

  return NextResponse.json({ ok: true });
}
