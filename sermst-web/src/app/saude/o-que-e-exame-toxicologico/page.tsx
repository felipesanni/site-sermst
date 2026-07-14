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
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
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
      intro="O exame toxicológico de larga janela analisa amostras queratínicas, como cabelo ou pelo, para identificar o uso de determinadas substâncias psicoativas. Para as finalidades legais relacionadas a motoristas, a análise retrospectiva mínima é de 90 dias."
      quickAnswer={
        <p>
          O <strong>exame toxicológico de larga janela</strong> usa cabelo ou pelo e deve cobrir, no mínimo, os 90 dias anteriores à coleta nas hipóteses previstas em lei. Ele é exigido para condutores das categorias C, D e E e para motoristas profissionais nas situações trabalhistas regulamentadas. A análise deve ser feita por laboratório credenciado.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'Como o exame toxicológico funciona',
          body: (
            <>
              <p>
                A coleta usa cabelo ou pelo corporal e segue critérios próprios de identificação, lacre e cadeia de custódia. A matriz e a quantidade necessárias são definidas pelo procedimento do laboratório para assegurar a janela mínima exigida.
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
                O painel legal desse exame <strong>não é um teste de alcoolemia</strong>. Etilômetro, exame de sangue e outros marcadores de álcool têm finalidades e critérios diferentes.
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
                  <strong>CNH C, D e E:</strong> exigido nos procedimentos definidos pelo Código de Trânsito Brasileiro, inclusive obtenção e renovação. O prazo de aproveitamento do resultado deve ser conferido conforme a finalidade do exame.
                </li>
                <li>
                  <strong>Motoristas profissionais empregados:</strong> exigido previamente à admissão, periodicamente e por ocasião do desligamento, nos termos da CLT e da regulamentação do Ministério do Trabalho e Emprego.
                </li>
              </ul>
              <p>
                Fora das hipóteses legais, a adoção de testes toxicológicos exige cautela. A empresa deve avaliar necessidade, proporcionalidade, confidencialidade e riscos de discriminação e proteção de dados antes de criar uma política interna.
              </p>
            </>
          ),
        },
        {
          title: 'Diferença entre exame toxicológico para CNH e para admissão de motorista',
          body: (
            <ul>
              <li>
                <strong>Para CNH:</strong> segue o Código de Trânsito Brasileiro e as regras da Senatran. O condutor realiza o exame em laboratório credenciado, e o prazo de validade ou aproveitamento depende do procedimento em que o resultado será usado.
              </li>
              <li>
                <strong>Para motoristas profissionais empregados:</strong> o exame é custeado pelo empregador e tem janela retrospectiva mínima de 90 dias. Ele <strong>não integra o PCMSO, não consta no ASO e não define a aptidão ocupacional</strong>. O resultado é tratado de forma confidencial, com direito à contraprova quando positivo.
              </li>
            </ul>
          ),
        },
        {
          title: 'Como é feita a coleta',
          body: (
            <ol>
              <li>O examinando vai à clínica ou laboratório credenciado.</li>
              <li>É coletada uma amostra de cabelo ou pelo conforme o protocolo do laboratório. Situações sem amostra disponível seguem as regras específicas da autoridade competente.</li>
              <li>A amostra é lacrada, identificada e enviada ao laboratório analítico.</li>
              <li>O prazo do resultado varia conforme o laboratório e a necessidade de análise confirmatória.</li>
              <li>O laudo com resultado negativo ou positivo (com confirmação) é entregue ao solicitante.</li>
            </ol>
          ),
        },
        {
          title: 'O exame toxicológico precisa de jejum?',
          body: (
            <p>
               Não. A coleta de cabelo ou pelo não exige jejum nem restrição alimentar.
            </p>
          ),
        },
        {
          title: 'O que acontece quando o resultado é positivo',
          body: (
            <>
              <p>
                Um resultado positivo indica a presença de substância ou metabólito dentro da janela analisada. As consequências dependem da finalidade do exame e do procedimento aplicável. No âmbito trabalhista, a confidencialidade e o direito à contraprova devem ser respeitados.
              </p>
              <p>
                O exame aponta <strong>uso dentro de um período retrospectivo</strong>; ele não demonstra, sozinho, que a pessoa estava sob efeito da substância durante o trabalho ou no momento da coleta.
              </p>
            </>
          ),
        },
        {
          title: 'Exame toxicológico e saúde ocupacional',
          body: (
            <>
              <p>
                Para motoristas profissionais empregados, o toxicológico trabalhista é uma obrigação própria e separada do exame clínico ocupacional. A regulamentação determina que ele não seja incluído no PCMSO nem no ASO e que não seja usado para definir aptidão.
              </p>
              <p>
                O RH precisa organizar os dois fluxos sem misturar os documentos: de um lado, o exame toxicológico e seu tratamento confidencial; de outro, o exame ocupacional, o ASO e as informações do eSocial.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que é o exame toxicológico?',
          a: 'É um exame laboratorial de larga janela que analisa cabelo ou pelo para identificar determinadas substâncias psicoativas. Nas hipóteses legais relacionadas a motoristas, a análise retrospectiva mínima é de 90 dias.',
        },
        {
          q: 'O exame toxicológico detecta álcool?',
          a: 'O painel legal do toxicológico de larga janela para motoristas não é um teste de alcoolemia. A verificação de álcool usa outros métodos e critérios.',
        },
        {
          q: 'Quem é obrigado a fazer o exame toxicológico?',
          a: 'Condutores das categorias C, D e E nas hipóteses previstas no Código de Trânsito e motoristas profissionais empregados nos momentos definidos pela CLT e pela regulamentação do MTE.',
        },
        {
          q: 'O exame toxicológico precisa de jejum?',
          a: 'Não. A coleta é feita por mecha de cabelo da nuca e não envolve restrição alimentar. O examinando pode se alimentar normalmente.',
        },
        {
          q: 'Quanto tempo dura o exame toxicológico para CNH?',
          a: 'O prazo de validade ou aproveitamento depende da finalidade. Para o exame trabalhista, a análise retrospectiva mínima é de 90 dias, e um exame realizado para fins de trânsito pode ser aproveitado nas condições e no prazo previstos pela regulamentação.',
        },
        {
          q: 'Quem paga o exame toxicológico na admissão de motorista?',
          a: 'O empregador, conforme determina a Lei 13.103/2015. Na demissão, o custo também é do empregador. Para fins de CNH, o custo é do próprio habilitando.',
        },
        {
          q: 'Qual a diferença entre exame toxicológico e exame admissional?',
          a: 'O exame admissional avalia a aptidão para a função e gera o ASO. O toxicológico trabalhista do motorista profissional é uma obrigação separada: não integra o PCMSO, não aparece no ASO e não define aptidão ocupacional.',
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
