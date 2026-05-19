"use client";

import { useState, useRef, useCallback } from "react";
import "./guia.css";

const WEBHOOK_URL = "https://n8n.projeto.app.br/webhook/guia";

const EXAMES_OPTIONS = [
  "Audiometria","Acuidade Visual","Raio-X de Tórax",
  "Espirometria","ECG","EEG","Hemograma","Glicemia","Toxicológico",
];

function digits(v: string) { return v.replace(/\D/g, ""); }

function fmtCPF(v: string) {
  const d = digits(v).slice(0, 11);
  return d.length === 11 ? d.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : d;
}

function fmtCNPJ(v: string) {
  const d = digits(v).slice(0, 14);
  return d.length === 14 ? d.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5") : d;
}

function brDate(iso: string) {
  try { const [y, m, d] = iso.split("-"); return `${d}/${m}/${y}`; } catch { return iso; }
}

function genProtocolo() {
  const d = new Date();
  const p2 = (n: number) => String(n).padStart(2, "0");
  const stamp = `${d.getFullYear()}${p2(d.getMonth()+1)}${p2(d.getDate())}-${p2(d.getHours())}${p2(d.getMinutes())}${p2(d.getSeconds())}`;
  return `${stamp}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

interface GuiaData {
  nome: string; funcao: string; setor: string;
  cpf: string; rg: string; nascimento: string; exame: string;
  cnpj: string; empresa: string;
  exames_complementares: string[];
  protocolo: string; emissao_iso: string; enviada: boolean;
}

export default function GuiaPage() {
  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = useState("");
  const [setor, setSetor] = useState("");
  const [exame, setExame] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [cnpj, setCnpj] = useState("");
  // empresa começa readonly (igual ao original)
  const [empresa, setEmpresa] = useState("");
  const [empresaRO, setEmpresaRO] = useState(true);
  const [empresaPlaceholder, setEmpresaPlaceholder] = useState("Será preenchido pela consulta ou manualmente");
  const [examesChecked, setExamesChecked] = useState<Set<string>>(new Set());
  const [exOutro, setExOutro] = useState(false);
  const [exOutroTxt, setExOutroTxt] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [guia, setGuia] = useState<GuiaData | null>(null);
  const [modal, setModal] = useState<{ show: boolean; title: string; msg: string; onClose?: () => void }>({ show: false, title: "", msg: "" });

  const lastCNPJ = useRef("");
  const inFlight = useRef(false);

  const closeModal = useCallback(() => {
    setModal(prev => { prev.onClose?.(); return { show: false, title: "", msg: "" }; });
  }, []);

  const openModal = useCallback((title: string, msg: string, onClose?: () => void) => {
    setModal({ show: true, title, msg, onClose });
  }, []);

  async function lookupCNPJ(raw: string) {
    if (raw.length !== 14 || raw === lastCNPJ.current || inFlight.current) return;
    inFlight.current = true;
    lastCNPJ.current = raw;
    setEmpresa("Consultando CNPJ...");
    setEmpresaRO(true);
    try {
      const r = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${raw}`);
      if (!r.ok) throw new Error();
      const data = await r.json();
      if (data?.razao_social) {
        setEmpresa(data.razao_social);
        setEmpresaRO(true);
      } else {
        setEmpresa("");
        setEmpresaRO(false);
        setEmpresaPlaceholder("Digite a razão social manualmente");
      }
    } catch {
      setEmpresa("");
      setEmpresaRO(false);
      setEmpresaPlaceholder("Digite a razão social manualmente");
    } finally {
      inFlight.current = false;
    }
  }

  function handleCNPJChange(v: string) {
    const formatted = fmtCNPJ(v);
    setCnpj(formatted);
    lookupCNPJ(digits(formatted));
  }

  function toggleExame(val: string) {
    setExamesChecked(prev => {
      const next = new Set(prev);
      next.has(val) ? next.delete(val) : next.add(val);
      return next;
    });
  }

  function handleReset() {
    setNome(""); setFuncao(""); setSetor(""); setExame(""); setNascimento("");
    setCpf(""); setRg(""); setCnpj(""); setEmpresa("");
    setEmpresaRO(true);
    setEmpresaPlaceholder("Será preenchido pela consulta ou manualmente");
    setExamesChecked(new Set()); setExOutro(false); setExOutroTxt("");
    lastCNPJ.current = "";
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!empresa) {
      openModal("CNPJ obrigatório", "Informe a razão social manualmente ou aguarde a consulta automática.");
      return;
    }
    setSubmitting(true);
    const marcados = [...examesChecked];
    if (exOutro && exOutroTxt.trim()) marcados.push(exOutroTxt.trim());
    const protocolo = genProtocolo();
    const emissao_iso = new Date().toISOString();
    const payload = {
      nome: nome.trim(), funcao: funcao.trim(), setor: setor.trim(),
      cpf: digits(cpf), rg: rg.trim(), nascimento,
      exame, cnpj: digits(cnpj), empresa: empresa.trim(),
      exames_complementares: marcados,
      origem: "guia-web", emissao_iso, protocolo,
    };
    let ok = false, statusTxt = "";
    try {
      const r = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      ok = r.ok;
      statusTxt = ok ? "Guia enviada com sucesso à SERMST." : `Falha no envio (${r.status}).`;
    } catch {
      statusTxt = "Falha no envio (rede).";
    }
    setGuia({ ...payload, enviada: ok });
    setSubmitting(false);
    openModal(ok ? "Envio realizado" : "Não foi possível enviar", statusTxt, () => {
      setShowGuide(true);
    });
  }

  return (
    <div className="guia-page">
      <div className="wrap" id="app">
        <div className="page-title">
          <h1>Solicitação de Exame</h1>
        </div>

        {/* FORMULÁRIO */}
        {!showGuide && (
          <section className="card" id="formCard">
            <h2>Preencha os dados para gerar a Guia</h2>
            <p className="subtitle">
              A razão social é obtida automaticamente pela consulta do CNPJ. Caso não seja encontrada, você poderá preencher manualmente.
            </p>
            <form onSubmit={handleSubmit} autoComplete="off">
              <label>Nome do colaborador</label>
              <input type="text" placeholder="Nome completo" value={nome} onChange={e => setNome(e.target.value)} required />

              <div className="grid">
                <div>
                  <label>Função</label>
                  <input type="text" placeholder="Ex.: Auxiliar administrativo" value={funcao} onChange={e => setFuncao(e.target.value)} required />
                </div>
                <div>
                  <label>Setor (opcional)</label>
                  <input type="text" placeholder="Ex.: Financeiro / Produção" value={setor} onChange={e => setSetor(e.target.value)} />
                </div>
              </div>

              <div className="grid">
                <div>
                  <label>Tipo de exame</label>
                  <select value={exame} onChange={e => setExame(e.target.value)} required>
                    <option value="">Selecione</option>
                    {["Admissional","Periódico","Mudança de Função","Retorno ao Trabalho","Demissional"].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Data de nascimento</label>
                  <input type="date" value={nascimento} onChange={e => setNascimento(e.target.value)} required />
                </div>
              </div>

              <div className="grid">
                <div>
                  <label>CPF</label>
                  <input type="text" placeholder="000.000.000-00" maxLength={14} value={cpf} onChange={e => setCpf(fmtCPF(e.target.value))} required />
                </div>
                <div>
                  <label>RG</label>
                  <input type="text" value={rg} onChange={e => setRg(e.target.value)} required />
                </div>
              </div>

              <div className="grid">
                <div>
                  <label>CNPJ (consulta automática)</label>
                  <input type="text" placeholder="00.000.000/0000-00" maxLength={18} value={cnpj} onChange={e => handleCNPJChange(e.target.value)} required />
                </div>
                <div>
                  <label>Razão social</label>
                  <input
                    type="text"
                    placeholder={empresaPlaceholder}
                    value={empresa}
                    readOnly={empresaRO}
                    onChange={e => { if (!empresaRO) setEmpresa(e.target.value); }}
                    required
                  />
                </div>
              </div>

              <div className="divider" />
              <label>Exames complementares (selecione os necessários)</label>
              <div className="checks">
                {EXAMES_OPTIONS.map(opt => (
                  <label key={opt}>
                    <input type="checkbox" checked={examesChecked.has(opt)} onChange={() => toggleExame(opt)} />
                    {opt}
                  </label>
                ))}
                <div className="other">
                  <label style={{ flex: "0 0 auto" }}>
                    <input type="checkbox" checked={exOutro} onChange={e => { setExOutro(e.target.checked); if (!e.target.checked) setExOutroTxt(""); }} />
                    Outros:
                  </label>
                  <input type="text" placeholder="Descreva outros exames" disabled={!exOutro} value={exOutroTxt} onChange={e => setExOutroTxt(e.target.value)} />
                </div>
              </div>

              <div className="divider" />
              <div className="actions">
                <button type="button" className="btn secondary" onClick={handleReset}>Limpar</button>
                <button type="submit" className="btn primary" disabled={submitting}>
                  {submitting ? "Enviando..." : "Enviar guia para a SERMST"}
                </button>
              </div>
            </form>
          </section>
        )}

        {/* GUIA GERADA */}
        {showGuide && guia && (
          <section id="printArea">
            <div className="doc">
              <div className="doc__header">
                <h1 className="doc__title">Guia de Encaminhamento</h1>
                <span
                  className="badge"
                  style={{
                    background: guia.enviada ? "#e8f5ef" : "#fff1f2",
                    color: guia.enviada ? "#0f5132" : "#7f1d1d",
                    borderColor: guia.enviada ? "#b9ebd0" : "#fecaca",
                  }}
                >
                  {guia.enviada ? "Enviada à SERMST" : "Falha no envio"}
                </span>
              </div>
              <table>
                <tbody>
                  <tr><th>Colaborador</th><td>{guia.nome}</td></tr>
                  {guia.setor && <tr><th>Setor</th><td>{guia.setor}</td></tr>}
                  <tr><th>Função</th><td>{guia.funcao}</td></tr>
                  <tr><th>CPF</th><td>{fmtCPF(guia.cpf)}</td></tr>
                  <tr><th>RG</th><td>{guia.rg}</td></tr>
                  <tr><th>Data de nascimento</th><td>{brDate(guia.nascimento)}</td></tr>
                  <tr><th>Tipo de exame</th><td>{guia.exame}</td></tr>
                  <tr><th>CNPJ</th><td>{fmtCNPJ(guia.cnpj)}</td></tr>
                  <tr><th>Razão social</th><td>{guia.empresa || "—"}</td></tr>
                  <tr><th>Exames complementares</th><td>{guia.exames_complementares.length ? guia.exames_complementares.join(", ") : "Nenhum"}</td></tr>
                  <tr><th>Protocolo</th><td>{guia.protocolo}</td></tr>
                  <tr><th>Data de emissão</th><td>{new Date(guia.emissao_iso).toLocaleDateString("pt-BR")}</td></tr>
                </tbody>
              </table>
              <div className="doc__footer">
                <div className="clinic">
                  Endereço da clínica:<br />
                  Largo do Paissandu, 72, 3º Andar, Centro, São Paulo/SP
                </div>
                <div>
                  Horário de atendimento:<br />
                  Segunda a sexta-feira, das 08h30 às 14h30
                </div>
              </div>
              <div className="doc__actions">
                <button className="btn primary" onClick={() => window.print()}>Imprimir guia</button>
                <button className="btn secondary" onClick={() => { setShowGuide(false); handleReset(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  Voltar ao formulário
                </button>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* MODAL */}
      {modal.show && (
        <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="modal" role="dialog" aria-modal="true">
            <header>{modal.title}</header>
            <div className="content">{modal.msg}</div>
            <div className="actions">
              <button className="btn primary" onClick={closeModal}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
