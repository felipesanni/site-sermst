import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Validade do ASO admissional | SERMST',
  description:
    'O ASO admissional não tem validade como certidão — vale para o momento da contratação. Veja quando refazer exames e a periodicidade correta do PCMSO.',
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
        text: 'O exame periódico é realizado conforme o cronograma do PCMSO da empresa, que varia conforme o grau de risco da atividade (NR-04) e os riscos do cargo. Para grau de risco 1, o periódico é geralmente bienal para trabalhadores até 45 anos. Para graus 3 e 4, é anual.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que acontece se o ASO periódico vencer sem ser renovado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O colaborador fica em situação irregular no eSocial (evento S-2220 desatualizado), expondo a empresa a multa por descumprimento da NR-07. O Ministério do Trabalho pode autuar por cada trabalhador com exame vencido.',
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
        hubLabel="Hub de Saúde Ocupacional"
        hubLabelShort="← Saúde Ocupacional"
        hubHref="/saude"
        pageUrl="https://sermst.com.br/saude/validade-aso-admissional"
        disableFaqSchema
        author={{
          name: 'Luiz César Sannino',
          jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
          url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
          datePublished: '2026-06-01',
          dateModified: '2026-06-01',
        }}
        h1="Validade do ASO admissional: por quanto tempo é válido?"
        intro="O ASO admissional não tem 'validade' no sentido de prazo de expiração. Ele atesta a aptidão do trabalhador no momento da contratação. Depois da admissão, entra em cena o exame periódico — com periodicidade definida pelo PCMSO conforme o grau de risco da função."
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
                <li><strong>ASO Admissional</strong> — antes do início das atividades, obrigatório pela NR-07.</li>
                <li><strong>ASO Periódico</strong> — durante o vínculo, conforme cronograma do PCMSO. Periodicidade varia pelo grau de risco e pela idade do trabalhador.</li>
                <li><strong>ASO de Retorno ao Trabalho</strong> — após afastamento por acidente, doença ou parto.</li>
                <li><strong>ASO de Mudança de Função</strong> — quando o colaborador muda de cargo com risco diferente.</li>
                <li><strong>ASO demissional</strong> — exame clínico em até 10 dias contados do término do contrato, observadas as hipóteses de dispensa previstas na NR-07.</li>
              </ul>
            ),
          },
          {
            title: 'Periodicidade do exame periódico: a regra real da NR-07',
            body: (
              <>
                <p>
                  A periodicidade do exame periódico (NR-07 item 7.4.3.2) não é definida pelo grau de risco da empresa — é definida pela <strong>combinação de dois critérios: tipo de exposição e idade do trabalhador</strong>.
                </p>
                <ul>
                  <li><strong>Trabalhadores expostos a agentes nocivos específicos</strong> (ruído, produtos químicos, radiação, agentes listados no Anexo da NR-07): periodicidade anual ou semestral, conforme o agente — independentemente da idade.</li>
                  <li><strong>Trabalhadores sem exposição a agente nocivo específico, mas com risco de agravamento de doença:</strong> anual ou com intervalo menor, a critério do médico coordenador do PCMSO.</li>
                  <li><strong>Demais trabalhadores (sem exposição específica e sem condição de saúde especial):</strong> bienal (a cada 2 anos) para a faixa de 18 a 45 anos; anual para menores de 18 e maiores de 45 anos.</li>
                </ul>
                <p>
                  Na prática, empresas de GR3 e GR4 costumam ter trabalhadores expostos a agentes específicos (ruído, químicos, poeiras), o que torna o exame anual — mas pela natureza da exposição, não pelo grau de risco em si. O médico coordenador do PCMSO é quem define a periodicidade de cada função, e pode ser mais restritivo do que a NR-07 exige, nunca menos.
                </p>
              </>
            ),
          },
          {
            title: 'O ASO de outra empresa vale para admissão?',
            body: (
              <>
                <p>
                  Não. Cada admissão exige um ASO admissional novo. O exame é vinculado à função, aos riscos do cargo e ao PCMSO da empresa contratante — que podem ser completamente diferentes do emprego anterior.
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
                  O exame periódico vencido é uma das infrações mais comuns autuadas pelo Ministério do Trabalho. Cada colaborador sem ASO dentro do prazo é uma infração separada — para empresa com 20 funcionários e dois anos sem exame periódico, o passivo pode chegar a dezenas de milhares de reais em multa.
                </p>
                <p>
                  Além da multa administrativa, o eSocial fica desatualizado: o evento S-2220 (monitoramento da saúde do trabalhador) precisa ser disparado após cada ASO emitido. ASO vencido = S-2220 em atraso = inconsistência no eSocial.
                </p>
              </>
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
            a: 'A NR-07 usa dois critérios: tipo de exposição e idade. Trabalhadores expostos a agentes nocivos específicos (ruído, químicos, radiação): anual ou semestral. Trabalhadores sem exposição específica: bienal para a faixa de 18 a 45 anos; anual para menores de 18 e maiores de 45 anos. O médico coordenador do PCMSO pode definir periodicidade mais curta quando necessário.',
          },
          {
            q: 'O que acontece se o exame periódico vencer?',
            a: 'A empresa fica em não conformidade com a NR-07, exposta a autuação do Ministério do Trabalho e com o eSocial desatualizado (evento S-2220 em atraso).',
          },
        ]}
        sidebarTitle="PCMSO e exames em dia?"
        sidebarHook="A SERMST organiza o cronograma de exames ocupacionais da sua empresa, integra com o eSocial e garante que nenhum colaborador fique com ASO vencido."
        sidebarCtaLabel="Organizar meu PCMSO"
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
