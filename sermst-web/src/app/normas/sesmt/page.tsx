import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'SESMT: quando e obrigatorio e como dimensionar | SERMST',
  description:
    'Entenda o que e SESMT, quando a empresa precisa, como dimensionar por CNAE, grau de risco e numero de funcionarios, e relacao com NR-04.',
  alternates: { canonical: 'https://sermst.com.br/normas/sesmt' },
  openGraph: {
    title: 'SESMT: quando e obrigatorio e como dimensionar | SERMST',
    description:
      'Guia pratico sobre SESMT para empresas: NR-04, grau de risco, CNAE, quantidade de empregados, equipe obrigatoria e alternativas tecnicas.',
    url: 'https://sermst.com.br/normas/sesmt',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function SesmtPage() {
  return (
    <BlockbusterArticle
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="Voltar para normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/sesmt"
      badgeText="NR-04"
      coverImage={{ src: '/images/site/corporate-team.jpg', alt: 'Equipe tecnica de SESMT e saude ocupacional' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Tecnico em Seguranca do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      h1="SESMT: quando e obrigatorio e como dimensionar na empresa"
      intro="SESMT e o Servico Especializado em Seguranca e Medicina do Trabalho. A obrigatoriedade depende do grau de risco da atividade e do numero de empregados, conforme a NR-04."
      quickAnswer={
        <p>
          Para saber se a empresa precisa de SESMT, e necessario cruzar CNAE, grau de risco e quantidade de empregados. Empresas maiores ou de maior risco podem precisar de tecnico de seguranca, engenheiro, medico do trabalho, enfermeiro ou auxiliar de enfermagem do trabalho.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que e SESMT',
          body: (
            <p>
              SESMT e a equipe especializada responsavel por apoiar a prevencao de acidentes e doencas ocupacionais dentro da empresa. A composicao pode envolver profissionais de seguranca e medicina do trabalho, conforme dimensionamento da NR-04.
            </p>
          ),
        },
        {
          title: 'Quando o SESMT e obrigatorio',
          body: (
            <>
              <p>
                A obrigatoriedade depende do grau de risco e do numero de empregados. O grau de risco vem do CNAE da atividade principal, e o dimensionamento e feito conforme quadros da NR-04.
              </p>
              <p>
                Por isso, empresas com o mesmo numero de funcionarios podem ter obrigacoes diferentes se atuam em setores diferentes.
              </p>
            </>
          ),
        },
        {
          title: 'Quais profissionais podem compor o SESMT',
          body: (
            <ul>
              <li>Medico do trabalho.</li>
              <li>Engenheiro de seguranca do trabalho.</li>
              <li>Tecnico de seguranca do trabalho.</li>
              <li>Enfermeiro do trabalho.</li>
              <li>Auxiliar ou tecnico de enfermagem do trabalho.</li>
            </ul>
          ),
        },
        {
          title: 'SESMT, CIPA e PGR sao a mesma coisa?',
          body: (
            <>
              <p>
                Nao. SESMT e equipe especializada. CIPA e comissao interna com representantes da empresa e empregados. PGR e programa de gerenciamento de riscos. Eles se complementam, mas nao se substituem.
              </p>
              <p>
                Uma empresa pode precisar de CIPA/designado, PGR e PCMSO mesmo quando nao atinge o porte para SESMT proprio.
              </p>
            </>
          ),
        },
        {
          title: 'Como calcular sem errar',
          body: (
            <ol>
              <li>Identifique o CNAE principal do estabelecimento.</li>
              <li>Confirme o grau de risco conforme NR-04.</li>
              <li>Some empregados do estabelecimento conforme regra aplicavel.</li>
              <li>Cruze grau de risco e quantidade de empregados no quadro de dimensionamento.</li>
              <li>Registre a conclusao e revise quando houver crescimento ou mudanca de atividade.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Toda empresa precisa ter SESMT?',
          a: 'Nao. A obrigatoriedade depende do grau de risco e do numero de empregados conforme a NR-04.',
        },
        {
          q: 'Empresa sem SESMT ainda precisa cumprir SST?',
          a: 'Sim. Mesmo sem SESMT obrigatorio, a empresa pode precisar de PGR, PCMSO, ASO, treinamentos, CIPA ou designado.',
        },
        {
          q: 'Como saber o grau de risco?',
          a: 'O grau de risco e definido pelo CNAE da atividade. A calculadora da SERMST ajuda a consultar CNAE, grau de risco, NR-05 e SESMT.',
        },
      ]}
      sidebarTitle="Quer conferir SESMT pelo CNPJ?"
      sidebarHook="Use a calculadora da SERMST para consultar CNAE, grau de risco, CIPA e indicativos de SESMT antes de tomar decisao."
      sidebarCtaLabel="Abrir calculadora CNAE"
      sidebarCtaHref="/rh/calculadora-cnae-grau-de-risco"
      related={[
        { label: 'Calculadora CNAE, grau de risco e SESMT', href: '/rh/calculadora-cnae-grau-de-risco' },
        { label: 'NR-05 CIPA', href: '/normas/nr-05-cipa' },
        { label: 'Empresa de seguranca do trabalho', href: '/servicos/empresa-seguranca-do-trabalho' },
        { label: 'PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
      ]}
    />
  );
}
