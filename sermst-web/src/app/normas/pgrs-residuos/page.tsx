import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'PGRS: Gerenciamento de Resíduos de Saúde | SERMST',
  description:
    'Entenda quando o PGRS ou o PGRSS é exigido, quais informações o plano deve conter e como organizar a segregação, o transporte e a destinação dos resíduos.',
  alternates: { canonical: 'https://sermst.com.br/normas/pgrs-residuos' },
  openGraph: {
    title: 'PGRS: obrigações e estrutura do plano | SERMST',
    description:
      'Quando o PGRS é obrigatório, o que deve conter, diferença do PGRSS para saúde e como implementar o Plano de Gerenciamento de Resíduos Sólidos.',
    url: 'https://sermst.com.br/normas/pgrs-residuos',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function PGRSPage() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/articles/normas-nr.jpg", alt: "Gestão e segregação de resíduos sólidos em ambiente industrial conforme PGRS" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/pgrs-residuos"
      badgeText="PGRS"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}

      h1="PGRS: Plano de Gerenciamento de Resíduos para empresas"
      intro="O PGRS descreve como a organização identifica, separa, armazena, transporta e destina seus resíduos. A obrigação depende da atividade, do tipo de resíduo, do licenciamento e das normas ambientais, sanitárias e locais aplicáveis."
      sections={[
        {
          title: 'O que é o PGRS',
          body: (
            <>
              <p>
                PGRS significa <strong>Plano de Gerenciamento de Resíduos Sólidos</strong>. Nos serviços de saúde, o documento é chamado de PGRSS. Na construção civil, é comum a denominação PGRCC. Cada setor tem requisitos próprios, mas o objetivo é registrar como os resíduos são gerenciados desde a geração até a destinação.
              </p>
              <p>
                A Política Nacional de Resíduos Sólidos define os geradores sujeitos ao PGRS. Serviços de saúde também precisam observar a RDC 222/2018 da Anvisa e as regras da vigilância sanitária e do órgão ambiental local.
              </p>
            </>
          ),
        },
        {
          title: 'Quem é obrigado a ter PGRS',
          body: (
            <ul>
              <li><strong>Serviços de saúde:</strong> clínicas, laboratórios, hospitais, consultórios e outros geradores de resíduos de serviços de saúde. Se houver somente resíduos do Grupo D, a RDC 222/2018 admite notificação ao órgão sanitário no lugar do PGRSS para o licenciamento sanitário.</li>
              <li><strong>Indústrias químicas e farmacêuticas</strong></li>
              <li><strong>Geradores de resíduos perigosos:</strong> atividades que produzam resíduos com características que exijam controle específico.</li>
              <li><strong>Construção civil:</strong> geradores de resíduos de construção, conforme a PNRS e as regras do município e do licenciamento.</li>
              <li><strong>Estabelecimentos comerciais e de serviços:</strong> quando geram resíduos perigosos ou resíduos que não sejam equiparados aos domiciliares pelo poder público municipal.</li>
              <li><strong>Outros setores do artigo 20 da Lei 12.305/2010:</strong> mineração, serviços de transporte, atividades agrossilvopastoris e empreendimentos sujeitos a licenciamento, nas hipóteses legais.</li>
            </ul>
          ),
        },
        {
          title: 'Conteúdo mínimo do plano',
          body: (
            <ol>
              <li><strong>Identificação do gerador:</strong> empresa, atividades, responsáveis e localização.</li>
              <li><strong>Caracterização dos resíduos:</strong> origem, classificação técnica, quantidade estimada e frequência de geração.</li>
              <li><strong>Segregação:</strong> como cada tipo de resíduo é separado no local onde surge.</li>
              <li><strong>Acondicionamento e identificação:</strong> recipientes, rótulos e condições de armazenamento.</li>
              <li><strong>Coleta e movimentação interna:</strong> rotas e procedimentos até o armazenamento temporário.</li>
              <li><strong>Armazenamento externo:</strong> condições da área e medidas de segurança aplicáveis.</li>
              <li><strong>Transporte:</strong> transportador autorizado e documentos exigidos, incluindo MTR quando aplicável.</li>
              <li><strong>Tratamento e destinação:</strong> solução compatível com cada resíduo e comprovantes do destinador.</li>
              <li><strong>Capacitação:</strong> orientação das pessoas envolvidas no gerenciamento.</li>
              <li><strong>Indicadores e melhoria contínua</strong>.</li>
            </ol>
          ),
        },
        {
          title: 'Resíduos de saúde: classificação que importa',
          body: (
            <>
              <p>
                Em serviços de saúde, a RDC 222/2018 da Anvisa classifica resíduos em 5 grupos:
              </p>
              <ul>
                <li><strong>Grupo A:</strong> resíduos com possível presença de agentes biológicos.</li>
                <li><strong>Grupo B:</strong> resíduos que contêm produtos químicos com características de risco.</li>
                <li><strong>Grupo C:</strong> rejeitos radioativos sujeitos às normas da CNEN.</li>
                <li><strong>Grupo D:</strong> resíduos sem risco biológico, químico ou radiológico, equiparáveis aos domiciliares.</li>
                <li><strong>Grupo E:</strong> materiais perfurocortantes, como agulhas e lâminas.</li>
              </ul>
              <p>
                Cada grupo exige procedimentos compatíveis com seus riscos. A segregação incorreta aumenta a exposição de trabalhadores, dificulta o tratamento e pode levar a medidas sanitárias ou ambientais.
              </p>
            </>
          ),
        },
        {
          title: 'Responsabilidade do gerador',
          body: (
            <>
              <ul>
                <li><strong>Implementação do plano:</strong> o gerador continua responsável pela operação mesmo quando contrata consultoria, transporte ou destinação.</li>
                <li><strong>Comprovação da destinação:</strong> contratos, manifestos e certificados precisam corresponder ao resíduo e aos prestadores utilizados.</li>
                <li><strong>Fiscalização:</strong> o descumprimento pode resultar em advertências, multas, exigências de adequação e outras medidas previstas na legislação aplicável.</li>
                <li><strong>Danos ambientais:</strong> a contratação de terceiros não afasta a responsabilidade do gerador por danos causados pelo gerenciamento inadequado.</li>
              </ul>
              <p>
                As consequências dependem do fato, do dano, da esfera de responsabilidade e da atuação do órgão competente. Por isso, o plano deve refletir o fluxo real e permanecer atualizado e disponível para consulta.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Consultório médico precisa de PGRSS?',
          a: 'Em regra, o serviço gerador deve elaborar, implantar e monitorar o PGRSS. Quando gera exclusivamente resíduos do Grupo D, a RDC 222/2018 admite a substituição do plano por uma notificação dessa condição ao órgão de vigilância sanitária para fins de licenciamento sanitário. Regras locais também precisam ser verificadas.',
        },
        {
          q: 'Quem assina o PGRS?',
          a: 'A exigência depende do tipo de plano, do licenciamento e das regras do órgão competente. Para PGRSS, a RDC 222/2018 atribui ao serviço gerador a indicação do responsável e não impõe, por si só, uma formação ou inscrição específica. O órgão ambiental ou sanitário local pode estabelecer requisitos adicionais.',
        },
        {
          q: 'PGRS precisa ser revisto?',
          a: 'O plano e as informações sobre sua implementação precisam permanecer atualizados. A revisão é necessária quando mudam atividades, resíduos, quantidades, prestadores, instalações ou regras aplicáveis. A licença e o órgão local podem definir uma periodicidade específica.',
        },
        {
          q: 'Empresa pequena pode ter PGRS simplificado?',
          a: 'A PNRS admite critérios e procedimentos simplificados para microempresas e empresas de pequeno porte que não gerem resíduos perigosos. A possibilidade concreta depende da atividade, dos resíduos e das regras do órgão responsável.',
        },
        {
          q: 'Todo transporte de resíduo precisa de MTR?',
          a: 'O MTR é exigido para as movimentações abrangidas pela regulamentação nacional e pelos sistemas estaduais integrados ao SINIR. A empresa deve conferir o enquadramento do resíduo e as regras do estado onde opera antes da coleta.',
        },
      ]}
      sidebarTitle="Sua empresa gera resíduos perigosos?"
      sidebarHook="Um PGRS útil descreve o que acontece na operação e deixa rastros da coleta, do transporte e da destinação. A SERMST ajuda a organizar esse fluxo para clínicas, indústrias e construção."
      sidebarCtaLabel="Solicitar PGRS"
      related={[
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'NR-15: Insalubridade', href: '/normas/nr-15-insalubridade' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'NR-13: Caldeiras e vasos', href: '/normas/nr-13-vasos-de-pressao' },
      ]}
    />
  );
}
