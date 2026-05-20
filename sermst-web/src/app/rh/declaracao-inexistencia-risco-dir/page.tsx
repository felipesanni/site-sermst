import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'DIR: quando a empresa pode emitir Declaracao de Inexistencia de Risco | SERMST',
  description:
    'Entenda o que e a DIR, quando a Declaracao de Inexistencia de Risco pode ser usada, quem se enquadra e por que nem toda empresa de grau 1 ou 2 esta dispensada de analise tecnica.',
  alternates: {
    canonical: 'https://sermst.com.br/rh/declaracao-inexistencia-risco-dir',
  },
  openGraph: {
    title: 'DIR: quando a empresa pode emitir Declaracao de Inexistencia de Risco | SERMST',
    description:
      'Guia pratico sobre DIR para empresas: criterios, limites, relacao com PGR, PCMSO e risco de usar a declaracao sem enquadramento correto.',
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
      badgeText="NR-01 e simplificacao"
      pageUrl="https://sermst.com.br/rh/declaracao-inexistencia-risco-dir"
      coverImage={{
        src: '/images/articles/exame-periodico.jpg',
        alt: 'Profissional avaliando conformidade de SST e declaracao de inexistencia de risco',
      }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional · Tecnico em Seguranca do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-20',
        dateModified: '2026-05-20',
      }}
      h1="DIR: quando a empresa pode usar a Declaracao de Inexistencia de Risco"
      intro="A DIR parece simples, mas e justamente ai que muitas empresas erram. Nao basta estar em atividade administrativa ou ter grau de risco menor: a declaracao so faz sentido quando a organizacao realmente se enquadra nos criterios legais e nao identifica determinadas exposicoes ocupacionais no estabelecimento."
      sections={[
        {
          title: 'O que e a DIR',
          body: (
            <>
              <p>
                A <strong>Declaracao de Inexistencia de Risco (DIR)</strong> e uma ferramenta criada para situacoes especificas em que a organizacao, dentro dos criterios da NR-01 e da orientacao oficial do governo, nao identifica determinadas exposicoes ocupacionais no seu levantamento preliminar de perigos.
              </p>
              <p>
                Em outras palavras, nao e um atalho para dispensar SST. E uma declaracao com uso condicionado, voltada a cenarios bem delimitados, e que depende de enquadramento correto.
              </p>
            </>
          ),
        },
        {
          title: 'Quem costuma perguntar sobre DIR',
          body: (
            <ul>
              <li><strong>ME e EPP de grau 1 ou 2</strong> que querem saber se realmente precisam elaborar toda a documentacao tradicional.</li>
              <li><strong>MEI com empregado</strong> tentando entender ate onde vai a simplificacao e quando ela deixa de existir.</li>
              <li><strong>Empresas administrativas</strong> que presumem baixo risco, mas ainda nao fizeram leitura tecnica do estabelecimento.</li>
            </ul>
          ),
        },
        {
          title: 'Quando a DIR pode fazer sentido',
          body: (
            <>
              <p>
                Pela orientacao oficial, a DIR aparece em cenarios de simplificacao para empresas de menor porte e menor risco, desde que o levantamento preliminar nao identifique exposicoes ocupacionais a agentes fisicos, quimicos e biologicos dentro dos criterios aplicaveis.
              </p>
              <p>
                Isso significa que a analise nao pode ser baseada so no CNAE, na percepcao de escritorio ou em achar que a empresa nunca teve acidente. O ponto central e o <strong>levantamento real dos perigos e exposicoes</strong>.
              </p>
            </>
          ),
        },
        {
          title: 'O erro mais perigoso: tratar DIR como dispensa automatica',
          body: (
            <>
              <p>
                Muitas empresas escutam grau 1 ou 2 e concluem que podem pular etapas. Esse e o erro. A simplificacao nao vale por suposicao generica. Se houver exposicao ou obrigacao que afaste o enquadramento, a empresa precisa seguir outro caminho documental.
              </p>
              <p>
                Alem disso, mesmo quando a DIR e cabivel, a organizacao continua responsavel pela gestao de SST e pela coerencia do que informa em seus fluxos trabalhistas e previdenciarios.
              </p>
            </>
          ),
        },
        {
          title: 'DIR, PGR e PCMSO: onde as empresas se confundem',
          body: (
            <>
              <p>
                O ponto de confusao mais comum e achar que a DIR resolve sozinha toda a parte de saude e seguranca. Na pratica, a empresa precisa entender se a declaracao realmente afasta a obrigacao de elaborar certos programas naquele caso especifico e se o enquadramento continua sustentavel diante da realidade do estabelecimento.
              </p>
              <p>
                Quando a operacao cresce, muda, adiciona pessoas, expoe trabalhadores a novos riscos ou sai do cenario simplificado, a logica da DIR pode deixar de se sustentar.
              </p>
            </>
          ),
        },
        {
          title: 'Como a SERMST ajuda nesse tipo de decisao',
          body: (
            <>
              <p>
                A SERMST ajuda a empresa a responder a pergunta certa: <strong>eu realmente me enquadro?</strong> Em vez de assumir dispensa por intuicao, a analise parte do CNAE, do porte, do numero de empregados e da realidade do estabelecimento.
              </p>
              <p>
                Se a DIR nao se sustenta, o diagnostico ja aponta o caminho mais coerente em PGR, PCMSO, exames ocupacionais, eventos de SST e rotina documental.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        { q: 'O que significa DIR em SST?', a: 'DIR significa Declaracao de Inexistencia de Risco, usada em cenarios especificos de simplificacao previstos na NR-01 e na orientacao oficial do governo.' },
        { q: 'Toda empresa de grau de risco 1 ou 2 pode emitir DIR?', a: 'Nao automaticamente. O grau de risco ajuda no enquadramento, mas a empresa ainda precisa verificar se realmente se enquadra nos criterios e se nao ha exposicoes ocupacionais que afastem essa simplificacao.' },
        { q: 'MEI com empregado pode usar DIR?', a: 'Em alguns cenarios simplificados, sim, mas isso depende das condicoes efetivas do estabelecimento e das orientacoes oficiais aplicaveis. Nao e seguro presumir sem analise.' },
        { q: 'DIR dispensa toda obrigacao de SST?', a: 'Nao. A declaracao nao elimina a responsabilidade da empresa sobre saude e seguranca. Ela trata de uma situacao especifica de simplificacao, e nao de abandono da gestao de riscos ocupacionais.' },
        { q: 'Como saber se minha empresa realmente pode usar DIR?', a: 'A resposta depende do porte, grau de risco, existencia ou nao de exposicoes ocupacionais e da leitura real do estabelecimento. E exatamente o tipo de ponto que vale diagnosticar antes de assumir uma dispensa.' },
      ]}
      sidebarTitle="Sua empresa quer saber se realmente se enquadra em DIR?"
      sidebarHook="Antes de assumir dispensa de PGR ou PCMSO, vale validar o enquadramento com base no CNAE, no estabelecimento e nas exposicoes reais. A SERMST ajuda a separar simplificacao legitima de risco documental."
      sidebarCtaLabel="Validar meu enquadramento"
      sidebarCtaHref="/rh/calculadora-cnae-grau-de-risco"
      related={[
        { label: 'Calculadora de risco por CNPJ', href: '/rh/calculadora-cnae-grau-de-risco' },
        { label: 'DET: como funciona o Domicilio Eletronico Trabalhista', href: '/rh/domicilio-eletronico-trabalhista-det' },
        { label: 'Gestao completa de eSocial SST', href: '/servicos/gestao-esocial-s2220-s2240' },
        { label: 'PCMSO: programa de controle medico', href: '/saude/pcmso-programa-controle-medico' },
      ]}
      finalCta={{
        title: 'DIR mal enquadrada vira risco, nao economia',
        desc: 'Se a empresa quer simplificar com seguranca, o primeiro passo e validar se a dispensa realmente se aplica ao seu cenario. A SERMST ajuda a revisar isso antes que a decisao gere problema.',
        label: 'Quero um diagnostico de enquadramento',
        href: '/contato',
      }}
    />
  );
}
