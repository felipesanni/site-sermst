import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Tabela de Exames Admissionais por Função e Cargo | SERMST',
  description:
    'Quais exames admissionais são obrigatórios para cada função e cargo? Veja a tabela completa, entenda como o PCMSO define os exames e saiba quando complementares são exigidos.',
  alternates: { canonical: 'https://sermst.com.br/saude/tabela-exames-admissionais-por-funcao' },
  openGraph: {
    title: 'Tabela de Exames Admissionais por Função',
    description:
      'Os exames admissionais variam conforme os riscos do cargo definidos no PCMSO. Veja os exames mais comuns por tipo de função e como montar o protocolo correto.',
    url: 'https://sermst.com.br/saude/tabela-exames-admissionais-por-funcao',
    type: 'article',
    locale: 'pt_BR',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quais exames são obrigatórios no exame admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O único exame obrigatório para todos os cargos é o exame clínico (consulta com médico do trabalho). Os exames complementares — sangue, audiometria, espirometria, raio-X e outros — são obrigatórios apenas quando o PCMSO da empresa os prevê para aquela função, com base nos riscos identificados.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quem define quais exames fazer no admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O médico do trabalho coordenador do PCMSO da empresa define os exames complementares exigidos para cada função, com base nos riscos do cargo identificados no PGR. Sem PCMSO, a empresa não tem protocolo técnico para orientar o exame admissional.',
      },
    },
    {
      '@type': 'Question',
      name: 'Motorista precisa de quais exames no admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Motoristas profissionais (CLT) geralmente precisam de exame clínico, acuidade visual, audiometria, hemograma, glicemia e exame toxicológico de longa janela de detecção (obrigatório por lei para motoristas de carga e passageiros). O PCMSO pode incluir outros conforme o risco da rota e da carga.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cargo administrativo precisa de exame complementar no admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geralmente não. Funções administrativas sem exposição a agentes físicos, químicos ou biológicos costumam ter apenas o exame clínico no admissional. O PCMSO pode incluir exame de acuidade visual para quem usa computador por longos períodos, conforme NR-17.',
      },
    },
  ],
};

const tabelaExames = [
  {
    funcao: 'Administrativo / Escritório',
    risco: 'Baixo (Grau 1–2)',
    examesObrigatorios: 'Exame clínico',
    examesComuns: 'Acuidade visual (NR-17 — uso intenso de monitor)',
    observacao: 'Sem exposição a agentes nocivos — exame clínico geralmente suficiente.',
  },
  {
    funcao: 'Motorista de Carga / Transporte',
    risco: 'Médio-Alto (Grau 3)',
    examesObrigatorios: 'Exame clínico + Toxicológico (lei CLT)',
    examesComuns: 'Audiometria, acuidade visual, hemograma, glicemia, eletrocardiograma',
    observacao: 'Exame toxicológico de longa janela é obrigatório por lei para motoristas profissionais CLT.',
  },
  {
    funcao: 'Operador de Produção / Linha Industrial',
    risco: 'Alto (Grau 3–4)',
    examesObrigatorios: 'Exame clínico + Audiometria (exposição a ruído)',
    examesComuns: 'Hemograma, espirometria, acuidade visual, função hepática e renal',
    observacao: 'Depende dos agentes físicos e químicos do ambiente. PCMSO define quais exames conforme o cargo.',
  },
  {
    funcao: 'Construção Civil',
    risco: 'Alto (Grau 3–4)',
    examesObrigatorios: 'Exame clínico + Audiometria',
    examesComuns: 'Espirometria, raio-X de tórax (exposição a poeira), hemograma, acuidade visual',
    observacao: 'NR-18 impõe requisitos específicos. Trabalho em altura exige avaliação de aptidão para NR-35.',
  },
  {
    funcao: 'Saúde (hospitalar, laboratório, clínica)',
    risco: 'Alto (Grau 3)',
    examesObrigatorios: 'Exame clínico + Sorologias (HBsAg, Anti-HCV, Anti-HIV)',
    examesComuns: 'Hemograma, carteira de vacinação atualizada, PPD (tuberculose)',
    observacao: 'Risco biológico determina sorologias e vacinação como parte do admissional.',
  },
  {
    funcao: 'Serviços de Limpeza / Zeladoria',
    risco: 'Médio (Grau 2–3)',
    examesObrigatorios: 'Exame clínico',
    examesComuns: 'Hemograma, função renal, acuidade visual',
    observacao: 'Contato com produtos químicos de limpeza pode exigir avaliação adicional conforme o PCMSO.',
  },
  {
    funcao: 'Trabalho em Altura',
    risco: 'Alto (Grau 3–4)',
    examesObrigatorios: 'Exame clínico + Aptidão específica para NR-35',
    examesComuns: 'Eletrocardiograma, glicemia, acuidade visual, avaliação vestibular',
    observacao: 'NR-35 exige que o trabalhador seja declarado apto especificamente para trabalho em altura.',
  },
  {
    funcao: 'Espaço Confinado',
    risco: 'Crítico (Grau 4)',
    examesObrigatorios: 'Exame clínico + Aptidão para NR-33',
    examesComuns: 'Espirometria, eletrocardiograma, hemograma, glicemia',
    observacao: 'NR-33 exige avaliação de aptidão específica. Cargo com riscos severos exige protocolo robusto.',
  },
];

export default function TabelaExamesFuncaoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlockbusterArticle
        coverImage={{ src: '/images/site/sermst-estrutura-medicina-ocupacional.png', alt: 'Tabela de exames admissionais por função e cargo' }}
        hubLabel="Hub de Saúde Ocupacional"
        hubLabelShort="← Saúde Ocupacional"
        hubHref="/saude"
        pageUrl="https://sermst.com.br/saude/tabela-exames-admissionais-por-funcao"
        author={{
          name: 'Luiz César Sannino',
          jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
          url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
          datePublished: '2026-06-01',
          dateModified: '2026-06-01',
        }}
        h1="Tabela de exames admissionais por função e cargo"
        intro="Os exames admissionais variam conforme os riscos do cargo — não são iguais para todas as funções. O exame clínico é obrigatório para todos. Os exames complementares (audiometria, sangue, espirometria, toxicológico etc.) dependem do que o PCMSO da empresa prevê para cada cargo. Veja os protocolos mais comuns por tipo de função."
        sections={[
          {
            title: 'Regra fundamental: quem define os exames é o PCMSO',
            body: (
              <>
                <p>
                  Não existe uma lista nacional única de &quot;exames obrigatórios por cargo&quot;. O que existe é o <strong>PCMSO (Programa de Controle Médico de Saúde Ocupacional)</strong>, elaborado pelo médico responsável, que define quais exames complementares cada função da empresa precisa realizar com base nos riscos identificados no PGR.
                </p>
                <p>
                  A tabela abaixo é uma referência dos exames mais praticados por tipo de função — não substitui o PCMSO da sua empresa. Cargos com exposição a agentes específicos (ruído, produtos químicos, vibração, risco biológico) podem ter exigências adicionais.
                </p>
              </>
            ),
          },
          {
            title: 'Tabela de exames por tipo de função',
            body: (
              <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider">Função</th>
                      <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider whitespace-nowrap">Grau de Risco</th>
                      <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider">Exames Obrigatórios</th>
                      <th className="hidden px-4 py-3 text-left text-xs font-black uppercase tracking-wider lg:table-cell">Complementares Comuns</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabelaExames.map((row, i) => (
                      <tr key={row.funcao} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-4 py-3 font-bold text-slate-800">{row.funcao}</td>
                        <td className="px-4 py-3 text-slate-600 whitespace-nowrap text-xs">{row.risco}</td>
                        <td className="px-4 py-3 text-slate-700">{row.examesObrigatorios}</td>
                        <td className="hidden px-4 py-3 text-slate-500 text-xs lg:table-cell">{row.examesComuns}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="px-4 py-3 text-xs text-slate-400 border-t border-slate-100">
                  Tabela de referência. Os exames reais dependem do PCMSO da empresa e dos riscos identificados no PGR para cada cargo.
                </p>
              </div>
            ),
          },
          {
            title: 'Exames especiais que merecem atenção',
            body: (
              <ul>
                <li><strong>Toxicológico de longa janela</strong> — obrigatório por lei (art. 168 CLT) para motoristas profissionais de carga e passageiros. Não é opcional e não pode ser substituído por outro exame.</li>
                <li><strong>Audiometria ocupacional</strong> — obrigatória quando o cargo tem exposição habitual a ruído acima do nível de ação (85 dB). Exigida pela NR-07 e serve de baseline para comparação nos exames periódicos.</li>
                <li><strong>Espirometria</strong> — exigida quando há exposição a poeiras, fumaças ou gases que afetam a função pulmonar (construção civil, fundições, indústria química).</li>
                <li><strong>Sorologias</strong> — obrigatórias para profissionais de saúde com risco biológico (HBsAg, Anti-HCV, Anti-HIV, vacinação contra Hepatite B).</li>
                <li><strong>Aptidão específica NR-35</strong> — trabalho em altura exige declaração de aptidão específica, além do exame clínico padrão.</li>
              </ul>
            ),
          },
          {
            title: 'O que acontece sem PCMSO',
            body: (
              <>
                <p>
                  Empresa sem PCMSO não tem protocolo técnico para orientar o exame admissional. O RH improvisa — pede exames genéricos que não se aplicam ao cargo, ou não pede nenhum exame complementar quando deveria. Os dois erros têm custo:
                </p>
                <ul>
                  <li>Exames desnecessários encarecem o processo sem proteger a empresa.</li>
                  <li>Exames ausentes que deveriam ser feitos configuram não conformidade com a NR-07 e geram passivo em eventual autuação ou ação trabalhista.</li>
                </ul>
              </>
            ),
          },
        ]}
        faq={[
          {
            q: 'Quais exames são obrigatórios no admissional?',
            a: 'O exame clínico é obrigatório para todos os cargos. Os exames complementares dependem do PCMSO da empresa para cada função.',
          },
          {
            q: 'Quem define os exames do admissional?',
            a: 'O médico do trabalho coordenador do PCMSO, com base nos riscos do cargo identificados no PGR.',
          },
          {
            q: 'Motorista precisa de toxicológico no admissional?',
            a: 'Sim. O exame toxicológico de longa janela é obrigatório por lei para motoristas profissionais CLT de carga e passageiros.',
          },
          {
            q: 'Cargo administrativo precisa de exame complementar?',
            a: 'Geralmente não. Funções sem exposição a agentes nocivos costumam ter apenas o exame clínico. O PCMSO pode incluir acuidade visual para uso intenso de monitor.',
          },
        ]}
        sidebarTitle="Precisa montar o protocolo de exames da sua empresa?"
        sidebarHook="A SERMST elabora o PCMSO e define os exames corretos para cada função — sem exames desnecessários e sem lacunas que viram multa."
        sidebarCtaLabel="Montar meu PCMSO"
        related={[
          { label: 'Exame admissional: o que é e como funciona', href: '/exames/como-funciona-o-exame-admissional' },
          { label: 'Valor do exame admissional', href: '/saude/valor-exame-admissional' },
          { label: 'Exame admissional precisa de jejum?', href: '/saude/exame-admissional-precisa-de-jejum' },
          { label: 'PCMSO: o que é e quem precisa', href: '/saude/pcmso-programa-controle-medico' },
          { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
        ]}
      />
    </>
  );
}
