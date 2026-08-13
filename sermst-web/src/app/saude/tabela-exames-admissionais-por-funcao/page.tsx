import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Tabela de Exames Admissionais por Função e Cargo | SERMST',
  description:
    'Veja como o PCMSO define os exames admissionais de cada função e em quais situações avaliações complementares podem ser indicadas.',
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
        text: 'O exame admissional inclui avaliação clínica. Exames complementares são definidos no PCMSO conforme os riscos ocupacionais, os critérios da NR-07 e a avaliação médica. Não existe uma lista nacional fixa por nome de cargo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quem define quais exames fazer no admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O médico responsável pelo PCMSO planeja os exames a partir dos riscos identificados no PGR e dos critérios da NR-07. Empresas dispensadas de elaborar PCMSO ainda precisam cumprir as regras aplicáveis aos exames ocupacionais.',
      },
    },
    {
      '@type': 'Question',
      name: 'Motorista precisa de quais exames no admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O motorista empregado realiza o exame clínico ocupacional e os complementares definidos pelo PCMSO. Para as categorias profissionais abrangidas pela legislação, o exame toxicológico é uma obrigação separada e não integra o PCMSO nem o ASO.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cargo administrativo precisa de exame complementar no admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A necessidade depende dos riscos reais e do PCMSO. Trabalho em escritório, por si só, não cria uma lista automática de exames complementares. A avaliação clínica continua obrigatória.',
      },
    },
  ],
};

const tabelaExames = [
  {
    funcao: 'Administrativo / Escritório',
    risco: 'Postura, organização e visão',
    examesObrigatorios: 'Avaliação clínica ocupacional',
    examesComuns: 'Somente quando houver indicação no PCMSO',
    observacao: 'O uso de computador não torna a acuidade visual automaticamente obrigatória.',
  },
  {
    funcao: 'Motorista de Carga / Transporte',
    risco: 'Trânsito, jornada, ruído e carga',
    examesObrigatorios: 'Avaliação clínica ocupacional',
    examesComuns: 'Conforme PCMSO; toxicológico em fluxo separado quando exigido',
    observacao: 'O toxicológico trabalhista não integra o PCMSO nem o ASO.',
  },
  {
    funcao: 'Operador de Produção / Linha Industrial',
    risco: 'Ruído, químicos e máquinas',
    examesObrigatorios: 'Avaliação clínica ocupacional',
    examesComuns: 'Audiometria e outros, se os critérios técnicos se aplicarem',
    observacao: 'Depende dos agentes físicos e químicos do ambiente. PCMSO define quais exames conforme o cargo.',
  },
  {
    funcao: 'Construção Civil',
    risco: 'Ruído, poeira, altura e máquinas',
    examesObrigatorios: 'Avaliação clínica ocupacional',
    examesComuns: 'Definidos pela exposição e pelos anexos da NR-07',
    observacao: 'Atividades em altura exigem avaliação de saúde compatível com os riscos e registro da aptidão no ASO.',
  },
  {
    funcao: 'Saúde (hospitalar, laboratório, clínica)',
    risco: 'Agentes biológicos e perfurocortantes',
    examesObrigatorios: 'Avaliação clínica ocupacional',
    examesComuns: 'Conforme exposição, PCMSO e critérios médicos',
    observacao: 'Vacinação e vigilância da saúde devem seguir a NR-32 e o PCMSO; sorologias não são automáticas para todo cargo.',
  },
  {
    funcao: 'Serviços de Limpeza / Zeladoria',
    risco: 'Produtos químicos, esforço e biológicos',
    examesObrigatorios: 'Avaliação clínica ocupacional',
    examesComuns: 'Somente quando indicados pelos riscos e pelo PCMSO',
    observacao: 'Contato com produtos químicos de limpeza pode exigir avaliação adicional conforme o PCMSO.',
  },
  {
    funcao: 'Trabalho em Altura',
    risco: 'Condições que podem causar mal súbito ou queda',
    examesObrigatorios: 'Avaliação clínica e aptidão registrada no ASO',
    examesComuns: 'Definidos pelo PCMSO e pelo julgamento médico',
    observacao: 'A NR-35 não cria uma bateria universal de exames complementares.',
  },
  {
    funcao: 'Espaço Confinado',
    risco: 'Atmosfera, resgate e exigência física',
    examesObrigatorios: 'Avaliação clínica e aptidão registrada no ASO',
    examesComuns: 'Definidos pelo PCMSO e pelo julgamento médico',
    observacao: 'A avaliação deve considerar os riscos específicos do espaço confinado.',
  },
];

export default function TabelaExamesFuncaoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlockbusterArticle
        coverImage={{ src: '/images/site/sermst-estrutura-medicina-ocupacional.png', alt: 'Tabela de exames admissionais por função e cargo' }}
        hubLabel="Saúde Ocupacional"
        hubLabelShort="← Saúde Ocupacional"
        hubHref="/saude"
        pageUrl="https://sermst.com.br/saude/tabela-exames-admissionais-por-funcao"
        disableFaqSchema
        author={{
          name: 'Luiz César Sannino',
          jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
          url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
          datePublished: '2026-06-01',
          dateModified: '2026-06-01',
        }}
        h1="Tabela de exames admissionais por função e cargo"
        intro="Os exames admissionais variam conforme os riscos da função e o planejamento do PCMSO. A avaliação clínica faz parte do admissional; exames complementares só entram quando há fundamento técnico ou exigência legal específica."
        quickAnswer={
          <p>
            Não existe uma tabela legal que associe cada cargo a uma bateria fixa de exames. O ponto de
            partida é a <strong>avaliação clínica ocupacional</strong>. Audiometria, espirometria, exames
            laboratoriais e outras avaliações dependem dos riscos, dos critérios da NR-07 e do PCMSO.
          </p>
        }
        showTableOfContents
        sections={[
          {
            title: 'Regra fundamental: quem define os exames é o PCMSO',
            body: (
              <>
                <p>
                  Não existe uma lista nacional única de &quot;exames obrigatórios por cargo&quot;. O que existe é o <strong>PCMSO (Programa de Controle Médico de Saúde Ocupacional)</strong>, elaborado pelo médico responsável, que define quais exames complementares cada função da empresa precisa realizar com base nos riscos identificados no PGR.
                </p>
                <p>
                  A tabela abaixo mostra o raciocínio técnico mais comum, não uma prescrição. Funções com o mesmo nome podem ter exposições completamente diferentes em duas empresas.
                </p>
              </>
            ),
          },
          {
            title: 'Tabela de exames por tipo de função',
            body: (
              <>
                <div className="not-prose mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                  Se estiver no celular, comece olhando a coluna de <strong>função</strong> e depois a
                  de <strong>avaliação básica</strong>. Os possíveis complementares aparecem completos no
                  desktop para facilitar a comparação.
                </div>
                <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider">Função</th>
                        <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider whitespace-nowrap">Riscos a considerar</th>
                        <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider">Avaliação básica</th>
                        <th className="hidden px-4 py-3 text-left text-xs font-black uppercase tracking-wider lg:table-cell">Possíveis complementares</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tabelaExames.map((row, i) => (
                        <tr key={row.funcao} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-4 py-3 font-bold text-slate-800">{row.funcao}</td>
                          <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-600">{row.risco}</td>
                          <td className="px-4 py-3 text-slate-700">{row.examesObrigatorios}</td>
                          <td className="hidden px-4 py-3 text-xs text-slate-500 lg:table-cell">{row.examesComuns}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="border-t border-slate-100 px-4 py-3 text-xs text-slate-400">
                    Tabela de referência. Os exames reais dependem do PCMSO da empresa e dos riscos identificados no PGR para cada cargo.
                  </p>
                </div>
              </>
            ),
          },
          {
            title: 'Exames especiais que merecem atenção',
            body: (
              <>
                <ul>
                  <li><strong>Toxicológico de larga janela:</strong> exigido para motoristas profissionais nas hipóteses legais. O fluxo é separado do PCMSO e do ASO.</li>
                  <li><strong>Audiometria ocupacional:</strong> aplica-se a empregados expostos a níveis de pressão sonora acima dos níveis de ação definidos no PGR, conforme os critérios do Anexo II da NR-07.</li>
                  <li><strong>Espirometria:</strong> pode ser indicada conforme o agente respiratório, o nível de exposição e o planejamento médico. Não é automática para todo trabalhador exposto a poeira.</li>
                  <li><strong>Exames laboratoriais:</strong> precisam de finalidade ocupacional definida. Risco biológico não autoriza uma lista indiscriminada de sorologias.</li>
                  <li><strong>NR-35 e NR-33:</strong> a avaliação de saúde deve considerar os riscos da atividade, e a aptidão precisa constar no ASO. As normas não impõem uma bateria universal de exames.</li>
                </ul>
                <p>
                  Quando a função está ligada a obra, canteiro e exposição típica da construção civil, o exame admissional precisa conversar com a lógica da{' '}
                  <Link href="/normas/nr-18-construcao-civil" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                    NR-18
                  </Link>, não apenas com uma lista genérica de exames.
                </p>
              </>
            ),
          },
          {
            title: 'O que acontece sem PCMSO',
            body: (
              <>
                <p>
                  Quando o PCMSO é obrigatório, ele organiza os critérios médicos de cada função. Sem esse planejamento, o RH pode pedir exames sem relação com o risco ou deixar de realizar avaliações indicadas. Há exceções de dispensa de elaboração do programa para algumas organizações, mas os exames ocupacionais aplicáveis continuam sendo exigidos.
                </p>
                <ul>
                  <li>Exames desnecessários encarecem o processo sem proteger a empresa.</li>
                  <li>A ausência de uma avaliação prevista na NR-07 ou no PCMSO pode gerar não conformidade e dificultar o acompanhamento da saúde ocupacional.</li>
                </ul>
              </>
            ),
          },
        ]}
        faq={[
          {
            q: 'Quais exames são obrigatórios no admissional?',
            a: 'O admissional inclui avaliação clínica. Os exames complementares dependem dos riscos ocupacionais, dos critérios da NR-07 e do PCMSO aplicável à função.',
          },
          {
            q: 'Quem define os exames do admissional?',
            a: 'O médico responsável pelo PCMSO, com base nos riscos identificados no PGR e nos critérios da NR-07.',
          },
          {
            q: 'Motorista precisa de toxicológico no admissional?',
            a: 'Para os motoristas profissionais abrangidos pela legislação, sim. O toxicológico é uma obrigação separada e não integra o PCMSO nem o ASO.',
          },
          {
            q: 'Cargo administrativo precisa de exame complementar?',
            a: 'Depende dos riscos reais e do PCMSO. O uso de computador, isoladamente, não torna um exame complementar específico obrigatório.',
          },
        ]}
        sidebarTitle="Precisa montar o protocolo de exames da sua empresa?"
        sidebarHook="A SERMST elabora o PCMSO a partir dos riscos da operação e organiza um protocolo de exames adequado a cada função."
        sidebarCtaLabel="Montar meu PCMSO"
        sidebarCtaHref="/servicos/exame-admissional-expresso/sao-paulo"
        related={[
          { label: 'Exame admissional: o que é e como funciona', href: '/exames/como-funciona-o-exame-admissional' },
          { label: 'Valor do exame admissional', href: '/saude/valor-exame-admissional' },
          { label: 'Espirometria ocupacional: quando o PCMSO exige', href: '/saude/espirometria-ocupacional' },
          { label: 'Acuidade visual ocupacional: motoristas e operadores', href: '/saude/acuidade-visual-ocupacional' },
          { label: 'Eletrocardiograma ocupacional: risco cardíaco e NR-10', href: '/saude/eletrocardiograma-ocupacional' },
          { label: 'Avaliação psicossocial ocupacional: NR-35 e NR-01', href: '/saude/avaliacao-psicossocial-ocupacional' },
          { label: 'PCMSO: o que é e quem precisa', href: '/saude/pcmso-programa-controle-medico' },
          { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
        ]}
      />
    </>
  );
}
