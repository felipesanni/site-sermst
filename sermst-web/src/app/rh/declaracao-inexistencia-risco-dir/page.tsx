import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'DIR: quando a empresa pode usar a declaração | SERMST',
  description:
    'O que é a DIR, quando a Declaração de Inexistência de Riscos pode ser usada e por que nem toda empresa de grau 1 ou 2 está dispensada de análise técnica.',
  keywords: [
    'DIR',
    'Declaração de Inexistência de Riscos',
    'NR-01',
    'ME EPP grau de risco',
    'dispensa PGR',
    'dispensa PCMSO',
    'levantamento preliminar de perigos',
  ],
  alternates: {
    canonical: 'https://sermst.com.br/rh/declaracao-inexistencia-risco-dir',
  },
  openGraph: {
    title: 'DIR: quando a empresa pode usar a declaração | SERMST',
    description:
      'Guia prático sobre DIR para empresas: critérios, limites, relação com PGR, PCMSO e risco de usar a declaração sem enquadramento correto.',
    url: 'https://sermst.com.br/rh/declaracao-inexistencia-risco-dir',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function DeclaracaoInexistenciaRiscoPage() {
  return (
    <BlockbusterArticle
      hubLabel="RH e Departamento Pessoal"
      hubLabelShort="← Hub RH"
      hubHref="/rh"
      badgeText="NR-01 e simplificação"
      pageUrl="https://sermst.com.br/rh/declaracao-inexistencia-risco-dir"
      coverImage={{
        src: '/images/articles/exame-periodico.jpg',
        alt: 'Profissional avaliando conformidade de SST e declaração de inexistência de riscos',
      }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-20',
        dateModified: '2026-06-02',
      }}
      readingTime="6 min"
      h1="DIR: quando a empresa pode usar a Declaração de Inexistência de Riscos"
      intro="A DIR parece simples, mas é justamente aí que muitas empresas erram. Não basta exercer uma atividade administrativa ou ter grau de risco menor: a declaração só faz sentido quando a organização realmente se enquadra nos critérios legais e não identifica determinadas exposições ocupacionais no estabelecimento."
      sections={[
        {
          title: 'O que é a DIR',
          body: (
            <>
              <p>
                A <strong>Declaração de Inexistência de Riscos (DIR)</strong> é uma ferramenta para situações específicas. Dentro dos critérios aplicáveis, a organização declara digitalmente as informações exigidas e não identifica determinadas exposições ocupacionais no levantamento preliminar de perigos.
              </p>
              <p>
                Não é um atalho para abandonar a gestão de SST. É uma declaração de uso condicionado, voltada a cenários bem delimitados e que depende de enquadramento correto.
              </p>
            </>
          ),
        },
        {
          title: 'Quem costuma perguntar sobre DIR',
          body: (
            <ul>
              <li><strong>ME e EPP de grau 1 ou 2</strong> que querem saber se realmente precisam elaborar toda a documentação tradicional.</li>
              <li><strong>MEI com empregado</strong> tentando entender até onde vai a simplificação e quando ela deixa de existir.</li>
              <li><strong>Empresas administrativas</strong> que presumem baixo risco, mas ainda não fizeram leitura técnica do estabelecimento.</li>
            </ul>
          ),
        },
        {
          title: 'Quando a DIR pode fazer sentido',
          body: (
            <>
              <p>
                A NR-01 prevê dispensa de elaboração do PGR para determinados pequenos negócios. Já a NR-07 prevê que MEI, ME e EPP de <strong>grau de risco 1 ou 2</strong> podem ter dispensa de elaborar o PCMSO quando prestam as informações digitais previstas na NR-01 e não identificam exposições ocupacionais a agentes físicos, químicos, biológicos nem riscos relacionados a fatores ergonômicos.
              </p>
              <p>
                Isso significa que a análise não pode se basear apenas no CNAE, na percepção de escritório ou no fato de a empresa nunca ter registrado acidente. O ponto central é o <strong>levantamento real dos perigos e exposições</strong>.
              </p>
              <p>
                Mesmo quando a dispensa de elaborar PCMSO se aplica, a organização continua obrigada a realizar e custear os exames médicos ocupacionais e a emitir o ASO.
              </p>
            </>
          ),
        },
        {
          title: 'DIR, grau de risco 1 ou 2 e empresas de menor porte',
          body: (
            <>
              <p>
                Muitas dúvidas sobre esse tema aparecem em consultas como <strong>empresa grau 1 pode fazer DIR</strong>, <strong>grau 2 precisa de PGR</strong> ou <strong>ME e EPP pode dispensar PCMSO</strong>. As perguntas fazem sentido, mas só o grau de risco não fecha a decisão.
              </p>
              <p>
                A DIR precisa conversar com porte, enquadramento, realidade do estabelecimento e ausência das exposições que afastariam a simplificação. Sem isso, a economia aparente vira risco documental.
              </p>
            </>
          ),
        },
        {
          title: 'O erro mais perigoso: tratar DIR como dispensa automática',
          body: (
            <>
              <p>
                Muitas empresas escutam grau 1 ou 2 e concluem que podem pular etapas. Esse é o erro. A simplificação não vale por suposição genérica. Se houver exposição ou obrigação que afaste o enquadramento, a empresa precisa seguir outro caminho documental.
              </p>
              <p>
                Além disso, mesmo quando a DIR é cabível, a organização continua responsável pela gestão de SST e pela coerência do que informa em seus fluxos trabalhistas e previdenciários.
              </p>
            </>
          ),
        },
        {
          title: 'DIR, PGR e PCMSO: onde as empresas se confundem',
          body: (
            <>
              <p>
                O ponto de confusão mais comum é achar que a DIR resolve sozinha toda a parte de saúde e segurança. Na prática, a empresa precisa entender se a declaração realmente afasta a obrigação de elaborar certos programas naquele caso específico e se o enquadramento continua sustentável diante da realidade do estabelecimento.
              </p>
              <p>
                Quando a operação cresce, muda, adiciona pessoas, expõe trabalhadores a novos riscos ou sai do cenário simplificado, a lógica da DIR pode deixar de se sustentar.
              </p>
            </>
          ),
        },
        {
          title: 'Como a SERMST ajuda nesse tipo de decisão',
          body: (
            <>
              <p>
                A SERMST ajuda a empresa a responder à pergunta certa: <strong>eu realmente me enquadro?</strong> Em vez de assumir dispensa por intuição, a análise parte do CNAE, do porte, do número de empregados e da realidade do estabelecimento.
              </p>
              <p>
                Se a DIR não se sustenta, o diagnóstico já aponta o caminho mais coerente em PGR, PCMSO, exames ocupacionais, eventos de SST e rotina documental.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        { q: 'O que significa DIR em SST?', a: 'DIR significa Declaração de Inexistência de Riscos. Ela é usada em cenários específicos de simplificação previstos nas normas e nas orientações oficiais.' },
        { q: 'Toda empresa de grau de risco 1 ou 2 pode emitir DIR?', a: 'Não automaticamente. O grau de risco ajuda no enquadramento, mas a empresa ainda precisa verificar os demais critérios e confirmar se não há exposições ocupacionais que afastem a simplificação.' },
        { q: 'MEI com empregado pode usar DIR?', a: 'Em cenários simplificados, sim. O enquadramento depende das condições efetivas do estabelecimento e da ausência das exposições aplicáveis. Não é seguro presumir sem análise.' },
        { q: 'DIR dispensa PGR e PCMSO automaticamente?', a: 'Não. A dispensa de elaborar PGR segue os critérios da NR-01. A dispensa de elaborar PCMSO segue os critérios da NR-07 e não elimina exames ocupacionais nem ASO.' },
        { q: 'DIR dispensa toda obrigação de SST?', a: 'Não. A declaração não elimina a responsabilidade da empresa sobre saúde e segurança. Ela trata de situações específicas de simplificação, não do abandono da gestão de riscos ocupacionais.' },
        { q: 'Como saber se minha empresa realmente pode usar DIR?', a: 'A resposta depende do porte, do grau de risco, da existência ou não de exposições ocupacionais e da realidade do estabelecimento. Vale diagnosticar isso antes de assumir uma dispensa.' },
      ]}
      sidebarTitle="Sua empresa quer saber se realmente se enquadra em DIR?"
      sidebarHook="Antes de assumir dispensa de PGR ou PCMSO, vale validar o enquadramento com base no CNAE, no estabelecimento e nas exposições reais. A SERMST ajuda a separar simplificação legítima de risco documental."
      sidebarCtaLabel="Validar meu enquadramento"
      sidebarCtaHref="/rh/calculadora-cnae-grau-de-risco"
      related={[
        { label: 'Calculadora de risco por CNPJ', href: '/rh/calculadora-cnae-grau-de-risco' },
        { label: 'DET: como funciona o Domicílio Eletrônico Trabalhista', href: '/rh/domicilio-eletronico-trabalhista-det' },
        { label: 'Gestão completa de eSocial SST', href: '/servicos/gestao-esocial-s2220-s2240' },
        { label: 'PCMSO: programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
      ]}
      finalCta={{
        title: 'DIR mal enquadrada vira risco, não economia',
        desc: 'Se a empresa quer simplificar com segurança, o primeiro passo é validar se a dispensa realmente se aplica ao seu cenário. A SERMST ajuda a revisar isso antes que a decisão gere problema.',
        label: 'Quero um diagnóstico de enquadramento',
        href: '/contato',
      }}
    />
  );
}
