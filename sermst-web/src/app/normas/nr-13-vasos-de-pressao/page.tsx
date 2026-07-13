import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-13: caldeiras e vasos de pressão | SERMST',
  description:
    'Entenda o campo de aplicação da NR-13, a documentação, as inspeções e a capacitação para caldeiras, vasos, tubulações e tanques metálicos.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-13-vasos-de-pressao' },
  openGraph: {
    title: 'NR-13: inspeções, documentos e capacitação | SERMST',
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
        dateModified: '2026-07-13',
      }}

      h1="NR-13: Caldeiras, Vasos de Pressão, Tubulações e Tanques"
      intro="A NR-13 define requisitos para a integridade e a operação segura de caldeiras, vasos de pressão, tubulações e determinados tanques metálicos. O enquadramento e os prazos precisam ser definidos a partir dos dados do equipamento e da avaliação de profissional legalmente habilitado."
      quickAnswer={
        <p>
          A <strong>NR-13</strong> exige inspeções de segurança para os equipamentos abrangidos, sob responsabilidade técnica de <strong>Profissional Legalmente Habilitado, PLH</strong>. Caldeiras devem ser operadas por profissional que atenda ao Anexo I, incluindo treinamento de 40 horas e prática profissional supervisionada. Em 4 de julho de 2026, entrou em vigor o enquadramento previsto para os tanques metálicos definidos no item 13.2.1, alínea “f”.
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
                <li><strong>Caldeiras:</strong> equipamentos com pressão de operação superior a 60 kPa, observadas as exclusões da norma, classificados nas categorias A ou B.</li>
                <li><strong>Vasos de pressão:</strong> enquadrados pelo produto entre pressão e volume ou pela classe do fluido e categorizados de I a V.</li>
                <li><strong>Tubulações:</strong> as que contêm fluidos das classes A ou B e estão ligadas a caldeiras ou vasos abrangidos.</li>
                <li><strong>Tanques metálicos de armazenamento:</strong> os que atendem conjuntamente aos critérios de diâmetro, capacidade e classe do fluido previstos na norma.</li>
              </ul>
              <p>
                Nem todo compressor, reservatório ou tanque entra automaticamente no campo de aplicação. O enquadramento deve ser feito com os dados de projeto, o fluido, a pressão, o volume e as exclusões do item 13.2.2.
              </p>
            </>
          ),
        },
        {
          title: 'Documentação obrigatória',
          body: (
            <ol>
              <li><strong>Prontuário:</strong> reúne código de construção, dados de projeto, materiais e informações necessárias ao acompanhamento da vida útil.</li>
              <li><strong>Registro de segurança:</strong> recebe as ocorrências capazes de influir na condição do equipamento e os registros das inspeções.</li>
              <li><strong>Projeto de instalação:</strong> exigido nas hipóteses definidas para cada equipamento.</li>
              <li><strong>Projeto de alteração ou reparo:</strong> elaborado quando a intervenção puder afetar a segurança.</li>
              <li><strong>Relatórios de inspeção:</strong> registram exames, testes, condição operacional, recomendações e a data da próxima inspeção.</li>
              <li><strong>Registros de capacitação:</strong> incluem o treinamento e a prática profissional supervisionada aplicáveis aos operadores.</li>
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
                <li><strong>Caldeiras A e B:</strong> a regra geral é inspeção periódica em até 12 meses, com hipóteses específicas de extensão previstas na NR-13.</li>
                <li><strong>Vasos de pressão:</strong> os prazos máximos de exames externo e interno variam conforme a categoria e a existência de SPIE.</li>
                <li><strong>Tubulações:</strong> seguem programa e plano de inspeção, considerando fluido, pressão, temperatura, mecanismos de dano e consequências de falha.</li>
                <li><strong>Tanques abrangidos:</strong> também exigem inspeções inicial, periódica e extraordinária nos termos do capítulo próprio.</li>
              </ul>
              <p>
                O atraso da inspeção periódica de caldeiras é classificado pela norma como condição de grave e iminente risco. Para outros equipamentos, a situação precisa ser analisada à luz do enquadramento, do relatório vigente e das condições reais de segurança.
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
                <li><strong>Profissional Legalmente Habilitado:</strong> profissional com competência legal para as atividades de projeto, operação, manutenção e inspeção abrangidas pela norma.</li>
                <li><strong>Operador de caldeira:</strong> atende aos requisitos de treinamento e prática profissional supervisionada do Anexo I ou às regras de transição ali previstas.</li>
                <li><strong>Operador de unidade de processo:</strong> exigido para unidades com vasos de categorias I ou II e capacitado conforme o Anexo I.</li>
              </ul>
              <p>
                A empresa também precisa atualizar os conhecimentos dos operadores quando houver modificação no equipamento, acidente ou incidente de alto potencial ou recorrência de incidentes.
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
                A viabilidade de manter um SPIE depende da quantidade e da criticidade dos equipamentos, da estrutura técnica e do programa de inspeção. Empresas sem essa estrutura podem contratar apoio especializado, mas continuam responsáveis pelo cumprimento da norma.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Compressor de ar comum (oficina, padaria) entra na NR-13?',
          a: 'Depende do vaso, da pressão máxima de operação, do volume, do fluido e das exclusões do item 13.2.2. O tamanho aparente do compressor não basta para concluir; os dados da placa e do prontuário devem ser avaliados por profissional competente.',
        },
        {
          q: 'Caldeira pequena de padaria precisa de operador certificado?',
          a: 'Se o equipamento estiver enquadrado como caldeira pela NR-13, ele deve permanecer sob operação e controle de operador que cumpra o Anexo I. O porte da empresa não substitui a análise técnica do equipamento.',
        },
        {
          q: 'Quanto custa inspeção periódica?',
          a: 'Varia conforme o tipo, a categoria, o histórico, o acesso, os exames e testes necessários e as recomendações do PLH. Um orçamento responsável depende dos dados e documentos do equipamento.',
        },
        {
          q: 'Quem responde por equipamento alugado?',
          a: 'Empregador e proprietário têm deveres previstos na norma, e o contrato não elimina obrigações legais. Antes da instalação e da operação, é necessário definir quem fornece o prontuário, quem executa as inspeções e como serão tratadas manutenção e recomendações técnicas.',
        },
        {
          q: 'A documentação do fabricante de um vaso importado é suficiente?',
          a: 'Ela é parte do prontuário, mas o equipamento também precisa atender ao campo de aplicação, à identificação, à instalação e às inspeções previstas na NR-13. Documentos ausentes podem exigir reconstituição sob responsabilidade técnica.',
        },
      ]}
      sidebarTitle="Sua empresa opera caldeira, vaso ou tanque?"
      sidebarHook="A análise começa pela placa, pelo prontuário, pelo fluido e pelo histórico de inspeções. A SERMST ajuda a organizar a avaliação técnica de equipamentos em São Paulo e no ABC."
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
