import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-13: Caldeiras e Vasos de Pressão — Inspeção | SERMST',
  description:
    'A NR-13 obriga inspeção periódica em caldeiras e vasos de pressão. Sem laudo válido, equipamento não pode operar. Veja categorias, prazos e requisitos.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-13-vasos-de-pressao' },
  openGraph: {
    title: 'NR-13: vasos de pressão, caldeiras e riscos — o que a empresa precisa saber | SERMST',
    description:
      'O que a NR-13 exige para caldeiras e vasos de pressão: inspeções, habilitação de operadores, prontuário e responsabilidades do empregador.',
    url: 'https://sermst.com.br/normas/nr-13-vasos-de-pressao',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR13Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/safety-equipment.jpg", alt: "Inspeção técnica de vasos de pressão e caldeiras conforme NR-13" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-13-vasos-de-pressao"
      badgeText="NR-13"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="NR-13: Caldeiras, Vasos de Pressão, Tubulações e Tanques"
      intro="A NR-13 obriga inspeção técnica periódica em equipamentos sob pressão. Sem laudo válido, a empresa não pode operar — risco de interdição imediata, acidente catastrófico e responsabilização. Veja como cumprir."
      quickAnswer={
        <p>
          A <strong>NR-13</strong> obriga inspeção periódica em <strong>caldeiras, vasos de pressão, tubulações e tanques metálicos de armazenamento</strong>. Sem laudo válido assinado por <strong>PLH — Profissional Legalmente Habilitado</strong>, o equipamento está irregular e pode ser interditado. O <strong>operador de caldeira precisa de treinamento mínimo de 40 horas</strong> (NR-13 Anexo I). Cada equipamento deve ter prontuário individual com projeto, histórico de inspeções e laudos.
        </p>
      }
      sections={[
        {
          title: 'O que abrange a NR-13',
          body: (
            <>
              <p>
                A NR-13 cobre quatro famílias de equipamentos:
              </p>
              <ul>
                <li><strong>Caldeiras</strong> — geradoras de vapor, classificadas em A, B e C conforme pressão e capacidade</li>
                <li><strong>Vasos de pressão</strong> — categorizados em I, II, III, IV e V (do mais ao menos crítico) conforme produto entre pressão de operação e volume</li>
                <li><strong>Tubulações</strong> — sistemas pressurizados de transporte de fluidos perigosos</li>
                <li><strong>Tanques metálicos de armazenamento</strong> — em produtos inflamáveis e combustíveis</li>
              </ul>
              <p>
                A norma é uma das mais técnicas do conjunto. Acidente com equipamento sob pressão tem potencial catastrófico — explosão de caldeira mal mantida pode destruir parte da fábrica e matar dezenas.
              </p>
            </>
          ),
        },
        {
          title: 'Documentação obrigatória',
          body: (
            <ol>
              <li><strong>Prontuário</strong> de cada equipamento — projeto, especificação, fabricante, dados técnicos.</li>
              <li><strong>Registro de Segurança</strong> — toda intervenção, inspeção, alteração, manutenção registrada.</li>
              <li><strong>Projeto de Instalação</strong> — atendimento aos requisitos de segurança do local.</li>
              <li><strong>Projeto de Alteração ou Reparo</strong> — quando aplicável.</li>
              <li><strong>Relatórios de Inspeção</strong> — extraordinária, periódica, preliminar (no caso de novos).</li>
              <li><strong>Certificação dos operadores</strong> — operador de caldeira tem treinamento específico de no mínimo 40 horas, com reciclagem periódica.</li>
            </ol>
          ),
        },
        {
          title: 'Inspeção periódica: prazos críticos',
          body: (
            <>
              <p>
                A periodicidade depende da categoria do equipamento e do tipo de inspeção (interna, externa, segurança):
              </p>
              <ul>
                <li><strong>Caldeira categoria A</strong> (mais crítica): inspeção externa anual, interna a cada 12 meses (pode ser estendido com SPIE).</li>
                <li><strong>Caldeira categoria B e C</strong>: prazos progressivamente maiores, conforme regime e SPIE.</li>
                <li><strong>Vasos de pressão</strong>: prazos variam por categoria (I a V), tipo de fluido, tipo de inspeção. Casos críticos: anual; casos menos críticos: até 8 anos.</li>
                <li><strong>Tubulações</strong>: prazos próprios definidos no PIE.</li>
              </ul>
              <p>
                Equipamento com inspeção vencida não pode operar. A empresa que opera com vencimento vencido está em descumprimento direto e em caso de acidente, responsabilidade práticamente certa.
              </p>
            </>
          ),
        },
        {
          title: 'Quem pode inspecionar e operar',
          body: (
            <>
              <p>
                A NR-13 estabelece <strong>profissional habilitado</strong> para cada papel:
              </p>
              <ul>
                <li><strong>Profissional Habilitado (PH)</strong> — engenheiro com habilitação no CREA específica para a área. Faz projeto, inspeção, parecer técnico.</li>
                <li><strong>Operador certificado</strong> — completou treinamento de operação de caldeira (NR-13 Anexo I), com carga horária e conteúdo programático específicos.</li>
                <li><strong>Encarregado de manutenção</strong> — qualificação para serviços de manutenção dos equipamentos.</li>
              </ul>
              <p>
                Operação de caldeira sem operador certificado é uma das infrações mais comuns em fiscalização. Custa caro: multa pesada e responsabilização adicional em caso de acidente.
              </p>
            </>
          ),
        },
        {
          title: 'O que muda com SPIE',
          body: (
            <>
              <p>
                SPIE (Serviço Próprio de Inspeção de Equipamentos) é uma estrutura interna de inspeção que, quando reconhecida formalmente, permite extensão de prazos de inspeção. É opção para empresas com volume grande de equipamentos sob pressão (refinarias, indústrias químicas, termelétricas).
              </p>
              <p>
                Para empresa pequena ou média, SPIE não compensa — o caminho é contratação de empresa especializada para inspeção periódica externa.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Compressor de ar comum (oficina, padaria) entra na NR-13?',
          a: 'Depende do produto entre pressão e volume. Compressor pequeno geralmente fica abaixo do limite e não exige inspeção formal. Acima do limite, sim. Em dúvida, consultar profissional habilitado.',
        },
        {
          q: 'Caldeira pequena de padaria precisa de operador certificado?',
          a: 'Sim, na maioria dos casos. A NR-13 não tem isenção por porte da empresa. Operador precisa do treinamento da Anexo I — empresa que coloca um padeiro qualquer para operar caldeira está em descumprimento.',
        },
        {
          q: 'Quanto custa inspeção periódica?',
          a: 'Varia muito. Para vaso categoria V simples: poucos milhares. Para caldeira categoria A: dezenas de milhares por inspeção. O custo do não-cumprimento é múltiplo — multa, embargo, acidente.',
        },
        {
          q: 'Equipamento alugado — quem responde?',
          a: 'Em regra, o operador do equipamento (a empresa que o usa) é responsável pelo cumprimento da NR-13 durante a operação. Locador pode ter responsabilidade pela documentação inicial. Contrato deve detalhar.',
        },
        {
          q: 'Vaso de pressão importado — vale a documentação do fabricante?',
          a: 'Documentação do fabricante é insumo. O equipamento ainda precisa de prontuário, projeto de instalação, inspeção pré-operacional e atendimento a normas brasileiras. Importado entra na NR-13 igual ao nacional.',
        },
      ]}
      sidebarTitle="Sua empresa opera caldeira, vaso ou tanque?"
      sidebarHook="Inspeção vencida é interdição certa em fiscalização e responsabilidade total em caso de acidente. A SERMST tem rede de profissionais habilitados para inspeção NR-13 em São Paulo e ABC."
      sidebarCtaLabel="Solicitar inspeção NR-13"
      related={[
        { label: 'NR-10: Eletricidade', href: '/normas/nr-10-eletricidade' },
        { label: 'Norma Regulamentadora 18 na construção civil', href: '/normas/nr-18-construcao-civil' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'NR-16: Periculosidade', href: '/normas/nr-16-periculosidade' },
      ]}
    />
  );
}
