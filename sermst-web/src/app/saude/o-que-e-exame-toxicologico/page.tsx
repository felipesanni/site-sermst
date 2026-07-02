import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'O que é exame toxicológico: como funciona e quem precisa | SERMST',
  description:
    'Exame toxicológico detecta uso de drogas por análise de cabelo ou pelo. Obrigatório para CNH C, D e E e para motoristas contratados. Entenda como funciona e o que detecta.',
  alternates: { canonical: 'https://sermst.com.br/saude/o-que-e-exame-toxicologico' },
  openGraph: {
    title: 'O que é exame toxicológico: como funciona e quem precisa | SERMST',
    description:
      'Entenda o que é o exame toxicológico, como é feito, o que detecta, janela de detecção, quem é obrigado e a diferença entre o exame para CNH e para admissão.',
    url: 'https://sermst.com.br/saude/o-que-e-exame-toxicologico',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function OQueEExameToxicologicoPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/o-que-e-exame-toxicologico"
      badgeText="Exame"
      coverImage={{ src: '/images/articles/exame-periodico.jpg', alt: 'Coleta de amostra para exame toxicológico em clínica ocupacional' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      readingTime="9 min"
      h1="O que é exame toxicológico: como funciona, o que detecta e quem precisa fazer"
      intro="O exame toxicológico é um teste laboratorial que identifica o uso de substâncias psicoativas — como maconha, cocaína, crack, anfetaminas e opiáceos — por meio da análise de cabelo ou pelo. Diferente do bafômetro ou do exame de sangue, ele tem uma janela de detecção longa: de 90 dias a até 180 dias, dependendo do comprimento da amostra coletada."
      quickAnswer={
        <p>
          O <strong>exame toxicológico</strong> analisa cabelo ou pelo para detectar uso de drogas com janela de até 90–180 dias. É <strong>obrigatório para CNH C, D e E</strong> (renovação e primeira habilitação) e para <strong>motoristas profissionais</strong> na admissão e demissão. O resultado é emitido por laboratório credenciado pelo DENATRAN e tem validade específica por finalidade.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'Como o exame toxicológico funciona',
          body: (
            <>
              <p>
                O exame analisa uma amostra de cabelo ou pelo — normalmente coletada da nuca — com comprimento mínimo de 3 cm. Cada centímetro de cabelo corresponde a aproximadamente um mês de histórico. Por isso, com uma amostra de 3 a 6 cm, é possível rastrear o uso de substâncias nos últimos 90 a 180 dias.
              </p>
              <p>
                A análise é feita em laboratório credenciado. O processo envolve triagem inicial e, quando positivo, confirmação por método mais preciso (cromatografia). O laudo emitido tem validade legal e deve especificar o período retrospectivo coberto pela amostra.
              </p>
            </>
          ),
        },
        {
          title: 'O que o exame toxicológico detecta',
          body: (
            <>
              <p>O painel padrão exigido pela legislação brasileira para motoristas inclui:</p>
              <ul>
                <li><strong>Canabinoides</strong> (maconha, haxixe).</li>
                <li><strong>Cocaína e metabólitos</strong> (incluindo crack e merla).</li>
                <li><strong>Anfetaminas e metanfetaminas</strong> (incluindo ecstasy).</li>
                <li><strong>Opiáceos</strong> (morfina, codeína, heroína).</li>
              </ul>
              <p>
                O exame <strong>não detecta álcool</strong> — o álcool é metabolizado rapidamente e não fica registrado na matriz capilar da mesma forma que outras substâncias. Para detecção de álcool, existem testes específicos (etilômetro, exame de sangue ou análise de EtG/EtS, que é diferente do toxicológico padrão).
              </p>
            </>
          ),
        },
        {
          title: 'Quem é obrigado a fazer o exame toxicológico',
          body: (
            <>
              <p>A legislação brasileira exige o exame toxicológico em dois contextos principais:</p>
              <ul>
                <li>
                  <strong>CNH C, D e E:</strong> obrigatório na obtenção e renovação da habilitação nas categorias C, D e E. A validade do exame para fins de habilitação é de 60 dias.
                </li>
                <li>
                  <strong>Motoristas profissionais (CLT):</strong> obrigatório na admissão e na demissão de motoristas de veículos automotores de carga com peso bruto total acima de 4,5 toneladas ou de passageiros. Previsto na Lei 13.103/2015.
                </li>
              </ul>
              <p>
                Empresas de outros segmentos também podem exigir o exame como parte de sua política interna de SST, especialmente quando a atividade envolve operação de máquinas, trabalho em altura ou outros riscos que aumentam com o uso de substâncias psicoativas.
              </p>
            </>
          ),
        },
        {
          title: 'Diferença entre exame toxicológico para CNH e para admissão de motorista',
          body: (
            <ul>
              <li>
                <strong>Para CNH (DETRAN):</strong> exigido pelo Código de Trânsito Brasileiro para habilitação C, D e E. O exame é feito pelo candidato/habilitado por conta própria, em laboratório credenciado pelo DENATRAN. Validade de 60 dias para o processo de habilitação.
              </li>
              <li>
                <strong>Para admissão/demissão de motorista profissional (CLT):</strong> exigido pela Lei 13.103/2015. Deve ser custeado pelo empregador. Integra o exame ocupacional (ASO). O período retrospectivo mínimo exigido é de 90 dias.
              </li>
            </ul>
          ),
        },
        {
          title: 'Como é feita a coleta',
          body: (
            <ol>
              <li>O examinando vai à clínica ou laboratório credenciado.</li>
              <li>É coletada uma mecha de cabelo da nuca, com comprimento de pelo menos 3 cm. Quando não há cabelo suficiente, pode ser usado pelo corporal (axilar, por exemplo), com janela de detecção equivalente.</li>
              <li>A amostra é lacrada, identificada e enviada ao laboratório analítico.</li>
              <li>O resultado é emitido em prazo que varia conforme o laboratório — geralmente de 5 a 15 dias úteis.</li>
              <li>O laudo com resultado negativo ou positivo (com confirmação) é entregue ao solicitante.</li>
            </ol>
          ),
        },
        {
          title: 'O exame toxicológico precisa de jejum?',
          body: (
            <p>
              Não. O exame toxicológico de cabelo não exige jejum. A coleta é simples — uma mecha de cabelo da nuca — e não envolve coleta de sangue nem restrição alimentar. O examinando pode se alimentar normalmente antes do atendimento.
            </p>
          ),
        },
        {
          title: 'O que acontece quando o resultado é positivo',
          body: (
            <>
              <p>
                Um resultado positivo no exame toxicológico indica uso da substância detectada no período retrospectivo coberto pela amostra. Para fins de CNH, o resultado positivo impede a habilitação ou renovação. Para fins de admissão de motorista, pode inviabilizar a contratação, dependendo da política da empresa.
              </p>
              <p>
                É importante distinguir: o exame detecta <strong>uso</strong> da substância, não impairment (estado de prejuízo no momento do exame). Resultado positivo não confirma automaticamente que o trabalhador estava sob efeito no trabalho — mas tem implicações legais e trabalhistas que precisam ser avaliadas com cuidado.
              </p>
            </>
          ),
        },
        {
          title: 'Exame toxicológico no contexto do PCMSO e SST',
          body: (
            <>
              <p>
                Para motoristas profissionais, o exame toxicológico integra o conjunto de exames ocupacionais previstos no PCMSO. O médico coordenador do PCMSO deve incluir o toxicológico nos protocolos de admissão e demissão de funções obrigadas por lei.
              </p>
              <p>
                Empresas que operam frotas ou têm funções de risco envolvendo operação de veículos pesados, máquinas ou equipamentos também podem incluir o exame toxicológico em sua política de SST, mesmo quando não obrigatório, como medida preventiva documentada no PGR.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que é o exame toxicológico?',
          a: 'É um exame laboratorial que analisa cabelo ou pelo para detectar uso de substâncias psicoativas (maconha, cocaína, anfetaminas, opiáceos) em um período retrospectivo de 90 a 180 dias. Diferente do bafômetro ou exame de sangue, ele tem janela de detecção longa.',
        },
        {
          q: 'O exame toxicológico detecta álcool?',
          a: 'Não no formato padrão. O álcool é metabolizado rapidamente e não fica registrado na matriz capilar da mesma forma. Para detectar uso de álcool, são usados testes específicos (etilômetro, EtG/EtS), que são diferentes do exame toxicológico padrão.',
        },
        {
          q: 'Quem é obrigado a fazer o exame toxicológico?',
          a: 'Quem busca ou renova CNH C, D ou E, e motoristas profissionais (veículos acima de 4,5 toneladas ou de passageiros) na admissão e demissão, conforme a Lei 13.103/2015. Outras empresas podem exigir voluntariamente como parte da política de SST.',
        },
        {
          q: 'O exame toxicológico precisa de jejum?',
          a: 'Não. A coleta é feita por mecha de cabelo da nuca e não envolve restrição alimentar. O examinando pode se alimentar normalmente.',
        },
        {
          q: 'Quanto tempo dura o exame toxicológico para CNH?',
          a: 'O resultado tem validade de 60 dias para fins de habilitação no DETRAN. Para admissão de motorista profissional pela CLT, o exame cobre um período retrospectivo mínimo de 90 dias.',
        },
        {
          q: 'Quem paga o exame toxicológico na admissão de motorista?',
          a: 'O empregador, conforme determina a Lei 13.103/2015. Na demissão, o custo também é do empregador. Para fins de CNH, o custo é do próprio habilitando.',
        },
        {
          q: 'Qual a diferença entre exame toxicológico e exame admissional?',
          a: 'O exame admissional (ASO) é o conjunto de avaliações médicas que habilitam o trabalhador para a função. O exame toxicológico é um dos exames que pode — e em algumas funções deve — integrar esse conjunto. Para motoristas profissionais, o toxicológico faz parte do exame admissional por obrigação legal.',
        },
      ]}
      maxFaqItems={8}
      sidebarTitle="Precisa de exame toxicológico em São Paulo?"
      sidebarHook="A SERMST realiza exame toxicológico para empresa e pessoa física, inclusive para CNH C, D e E, no centro de São Paulo. Atendimento ágil e laudo com validade nacional."
      sidebarCtaLabel="Ver atendimento e valor"
      sidebarCtaHref="/servicos/exame-toxicologico-clt/sao-paulo"
      related={[
        { label: 'Onde fazer exame toxicológico em São Paulo', href: '/saude/onde-fazer-exame-toxicologico-sao-paulo' },
        { label: 'Valor do exame toxicológico CNH', href: '/saude/valor-exame-toxicologico-cnh' },
        { label: 'PCMSO: programa de controle médico de saúde ocupacional', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'ASO: atestado de saúde ocupacional', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'Exame demissional', href: '/saude/exame-demissional' },
      ]}
    />
  );
}
