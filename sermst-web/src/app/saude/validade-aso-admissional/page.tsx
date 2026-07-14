import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Validade do ASO admissional | SERMST',
  description:
    'O ASO admissional registra a aptidão no momento da contratação. Veja quando refazer exames e como a NR-07 define a periodicidade do acompanhamento.',
  alternates: { canonical: 'https://sermst.com.br/saude/validade-aso-admissional' },
  openGraph: {
    title: 'Validade do ASO admissional | SERMST',
    description:
      'O ASO admissional vale para a admissão. Depois, o colaborador segue o cronograma de exames periódicos do PCMSO. Entenda a diferença e como funciona cada tipo de ASO.',
    url: 'https://sermst.com.br/saude/validade-aso-admissional',
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
      name: 'Por quanto tempo o ASO admissional é válido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O ASO admissional não tem prazo de validade fixo como um documento de identidade. Ele é emitido para atestar a aptidão do trabalhador no momento da admissão. Após a contratação, o colaborador passa a seguir o cronograma de exames periódicos definido no PCMSO da empresa.',
      },
    },
    {
      '@type': 'Question',
      name: 'O ASO de uma empresa anterior vale para outra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Cada admissão exige um ASO admissional novo, pois ele é vinculado à função, aos riscos do cargo e ao PCMSO da empresa contratante. Um ASO de emprego anterior não substitui o exame admissional na nova empresa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quando o colaborador precisa fazer novo exame após admitido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O exame periódico segue o PCMSO. Pela NR-07, ocorre anualmente ou em intervalo menor para trabalhadores expostos a riscos identificados e classificados no PGR e para pessoas com doenças crônicas que aumentem a suscetibilidade. Para os demais, a regra geral é bienal.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que acontece se o ASO periódico vencer sem ser renovado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O atraso deixa o monitoramento em desacordo com o cronograma do PCMSO, cria lacuna no histórico clínico ocupacional e pode gerar inconsistência entre a documentação mantida pela empresa e os eventos S-2220 enviados ao eSocial.',
      },
    },
  ],
};

export default function ValidadeAsoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlockbusterArticle
        coverImage={{ src: '/images/site/sermst-estrutura-medicina-ocupacional.png', alt: 'ASO admissional e validade do atestado de saúde ocupacional' }}
        hubLabel="Saúde Ocupacional"
        hubLabelShort="← Saúde Ocupacional"
        hubHref="/saude"
        pageUrl="https://sermst.com.br/saude/validade-aso-admissional"
        disableFaqSchema
        author={{
          name: 'Luiz César Sannino',
          jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
          url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
          datePublished: '2026-06-01',
          dateModified: '2026-07-13',
        }}
        h1="Validade do ASO admissional: por quanto tempo é válido?"
        intro="O ASO admissional não tem 'validade' como uma certidão. Ele registra a aptidão no momento da contratação. Depois da admissão, o trabalhador entra no cronograma do PCMSO. A periodicidade considera os riscos ocupacionais, as condições de saúde e o critério médico, não uma tabela antiga baseada apenas em idade ou grau de risco."
        sections={[
          {
            title: 'O ASO admissional não tem prazo de vencimento',
            body: (
              <>
                <p>
                  O ASO (Atestado de Saúde Ocupacional) admissional é um documento pontual: ele registra que o trabalhador estava apto para aquela função, com aqueles riscos, naquele momento. Não é uma certidão que expira depois de X meses.
                </p>
                <p>
                  Depois que o colaborador é admitido, o ASO admissional cumpriu sua função. A partir daí, o trabalhador passa a ser monitorado pelo <strong>cronograma de exames periódicos</strong> definido no PCMSO da empresa.
                </p>
              </>
            ),
          },
          {
            title: 'Tipos de ASO e quando cada um é exigido',
            body: (
              <ul>
                <li><strong>ASO admissional:</strong> emitido antes de o empregado assumir as atividades.</li>
                <li><strong>ASO periódico:</strong> emitido durante o vínculo, conforme o cronograma definido no PCMSO e na NR-07.</li>
                <li><strong>ASO de retorno ao trabalho:</strong> emitido antes de reassumir a função após afastamento igual ou superior a 30 dias por doença ou acidente.</li>
                <li><strong>ASO de mudança de riscos ocupacionais:</strong> emitido antes da mudança, quando o trabalhador passa a enfrentar riscos diferentes.</li>
                <li><strong>ASO demissional:</strong> exame clínico realizado em até 10 dias contados do término do contrato, observadas as hipóteses de dispensa previstas na NR-07.</li>
              </ul>
            ),
          },
          {
            title: 'Periodicidade do exame periódico: a regra real da NR-07',
            body: (
              <>
                <p>
                  O item 7.5.8 da NR-07 atual divide a periodicidade do exame clínico em dois grupos principais. Idade e grau de risco, isoladamente, não formam a tabela usada pela regra vigente.
                </p>
                <ul>
                  <li><strong>Anual ou em intervalo menor:</strong> trabalhadores expostos a riscos ocupacionais identificados e classificados no PGR e pessoas com doenças crônicas que aumentem a suscetibilidade a esses riscos.</li>
                  <li><strong>Bienal:</strong> os demais trabalhadores.</li>
                </ul>
                <p>
                  O médico responsável pelo PCMSO pode reduzir o intervalo conforme os riscos, o estado de saúde e os critérios dos anexos da norma. A definição precisa aparecer no programa e orientar o cronograma real da empresa.
                </p>
              </>
            ),
          },
          {
            title: 'O ASO de outra empresa vale para admissão?',
            body: (
              <>
                <p>
                  Não. Cada admissão exige um ASO admissional novo. O exame é vinculado à função, aos riscos do cargo e ao PCMSO da empresa contratante, que podem ser completamente diferentes do emprego anterior.
                </p>
                <p>
                  Um candidato que apresenta ASO de outro emprego não está dispensado do exame admissional. A empresa que aceitar isso sem exame próprio está em não conformidade com a NR-07 e exposta a autuação.
                </p>
              </>
            ),
          },
          {
            title: 'O que acontece quando o periódico vence sem renovação',
            body: (
              <>
                <p>
                  Quando o exame periódico não acontece no intervalo definido, a empresa fica com uma lacuna no monitoramento previsto pelo PCMSO. Isso enfraquece a comparação clínica ao longo do vínculo e pode ser apontado em fiscalização.
                </p>
                <p>
                  O S-2220 deve refletir os exames ocupacionais realizados. Se o periódico não foi feito, o problema não se resolve com um envio meramente documental: primeiro é preciso regularizar o acompanhamento médico e depois manter o evento coerente com o ASO efetivamente emitido.
                </p>
              </>
            ),
          },
          {
            title: 'Fonte oficial da periodicidade',
            body: (
              <p>
                A regra foi revisada com base no item 7.5.8 da{' '}
                <a
                  href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-07-atualizada-2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NR-07 publicada pelo Ministério do Trabalho e Emprego
                </a>
                .
              </p>
            ),
          },
        ]}
        faq={[
          {
            q: 'Por quanto tempo o ASO admissional é válido?',
            a: 'O ASO admissional não tem prazo de vencimento. Ele é específico para o momento da admissão. Após a contratação, o colaborador segue o cronograma de exames periódicos do PCMSO da empresa.',
          },
          {
            q: 'O ASO de outra empresa vale para admissão?',
            a: 'Não. Cada admissão exige um ASO novo, vinculado à função e ao PCMSO da empresa contratante.',
          },
          {
            q: 'Com que frequência deve ser feito o exame periódico?',
            a: 'A regra geral é anual ou em intervalo menor para trabalhadores expostos a riscos identificados e classificados no PGR e para pessoas com doenças crônicas que aumentem a suscetibilidade. Para os demais, é bienal. O médico responsável pelo PCMSO pode reduzir o intervalo.',
          },
          {
            q: 'O que acontece se o exame periódico vencer?',
            a: 'A empresa fica com uma lacuna no monitoramento previsto pelo PCMSO, perde continuidade no histórico clínico ocupacional e pode ter inconsistência entre ASO, cronograma e eSocial.',
          },
        ]}
        sidebarTitle="PCMSO e exames em dia?"
        sidebarHook="A SERMST organiza o cronograma de exames ocupacionais, integra as informações com o eSocial e ajuda o RH a acompanhar os vencimentos."
        sidebarCtaLabel="Organizar meu PCMSO"
        sidebarCtaHref="/servicos/exame-admissional-expresso/sao-paulo"
        related={[
          { label: 'Exame admissional: o que é e como funciona', href: '/exames/como-funciona-o-exame-admissional' },
          { label: 'Valor do exame admissional', href: '/saude/valor-exame-admissional' },
          { label: 'Tabela de exames por função', href: '/saude/tabela-exames-admissionais-por-funcao' },
          { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
          { label: 'Como evitar multas do eSocial S-2220', href: '/rh/multa-esocial-s2220' },
        ]}
      />
    </>
  );
}
