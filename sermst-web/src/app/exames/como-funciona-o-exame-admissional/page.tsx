import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Exame Admissional: o que é, como funciona e quais exames faz | SERMST',
  description:
    'Entenda o que é exame admissional, como funciona, quais exames podem ser solicitados, documentos necessários, ASO, jejum e prazo para empresas.',
  alternates: { canonical: 'https://sermst.com.br/exames/como-funciona-o-exame-admissional/' },
  openGraph: {
    title: 'Exame Admissional: o que é, como funciona e quais exames faz',
    description:
      'Guia completo sobre exame admissional: o que é, quando fazer, quais exames entram no ASO, documentos, jejum, prazo e como empresas devem organizar o fluxo.',
    url: 'https://sermst.com.br/exames/como-funciona-o-exame-admissional/',
    type: 'article',
    locale: 'pt_BR',
  },
};

const comparisonSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Etapas do exame admissional para empresas',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Encaminhamento do candidato pela empresa' },
    { '@type': 'ListItem', position: 2, name: 'Conferência do PCMSO e dos riscos da função' },
    { '@type': 'ListItem', position: 3, name: 'Exame clínico ocupacional' },
    { '@type': 'ListItem', position: 4, name: 'Exames complementares quando aplicáveis' },
    { '@type': 'ListItem', position: 5, name: 'Emissão do ASO admissional' },
    { '@type': 'ListItem', position: 6, name: 'Registro e organização para eSocial S-2220' },
  ],
};

export default function ComoFuncionaExameAdmissionalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <BlockbusterArticle
        coverImage={{ src: '/images/site/sermst-estrutura-medicina-ocupacional.png', alt: 'Exame admissional ocupacional para contratação de colaborador' }}
        hubLabel="Hub de Saúde Ocupacional"
        hubLabelShort="← Saúde Ocupacional"
        hubHref="/saude"
        badgeText="Guia admissional"
        readingTime="10 min"
        pageUrl="https://sermst.com.br/exames/como-funciona-o-exame-admissional/"
        author={{
          name: 'Luiz César Sannino',
          jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
          url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
          datePublished: '2024-03-01',
          dateModified: '2026-06-02',
        }}
        h1="Exame admissional: o que é, como funciona e quais exames podem ser solicitados"
        intro="O exame admissional é a avaliação ocupacional feita antes do início das atividades do colaborador. Ele verifica se a pessoa está apta para a função, considerando os riscos do cargo e o PCMSO da empresa. Ao final, é emitido o ASO admissional."
        sections={[
        {
          title: 'Resumo rápido para quem precisa decidir agora',
          body: (
            <div className="not-prose rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-accent-pink">Para o candidato</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                    <li>O exame admissional não é prova técnica nem entrevista.</li>
                    <li>O exame clínico geralmente não exige jejum.</li>
                    <li>Leve documento com foto, CPF e encaminhamento da empresa.</li>
                    <li>O resultado é apto ou inapto para a função específica.</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-accent-pink">Para o RH/empresa</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                    <li>O admissional deve ocorrer antes do início das atividades.</li>
                    <li>Os complementares dependem do PCMSO e dos riscos da função.</li>
                    <li>A empresa paga o exame, não o candidato.</li>
                    <li>O ASO precisa sustentar o registro ocupacional e o S-2220.</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: 'O que é exame admissional',
          body: (
            <>
              <p>
                O exame admissional é um dos exames ocupacionais previstos na NR-07. Ele deve acontecer antes que o trabalhador comece suas atividades na empresa e serve para avaliar se existe aptidão clínica para a função pretendida.
              </p>
              <p>
                Na prática, ele protege os dois lados: a empresa documenta a condição de saúde ocupacional no momento da contratação, e o trabalhador entra na função com avaliação médica compatível com os riscos do cargo.
              </p>
              <p>
                O resultado do exame é registrado no <strong>ASO admissional</strong>, o Atestado de Saúde Ocupacional. Esse documento informa se o colaborador está apto ou inapto para exercer aquela função.
              </p>
              <p>
                A NR-07 trata o exame admissional como parte do PCMSO, não como uma consulta avulsa. Isso muda tudo: o exame precisa conversar com os riscos reais da função, com o PGR e com o histórico ocupacional que a empresa deve manter.
              </p>
            </>
          ),
        },
        {
          title: 'Como funciona o exame admissional',
          body: (
            <ol>
              <li><strong>A empresa encaminha o candidato.</strong> O RH informa função, dados da empresa e, idealmente, os riscos do cargo previstos no PCMSO.</li>
              <li><strong>A clínica confere o protocolo.</strong> O atendimento verifica se será necessário apenas exame clínico ou também exames complementares.</li>
              <li><strong>O candidato passa pela avaliação clínica.</strong> O médico examinador faz anamnese ocupacional, histórico de saúde e avaliação física compatível com a função.</li>
              <li><strong>Exames complementares são realizados quando aplicável.</strong> Audiometria, acuidade visual, espirometria, exames laboratoriais ou toxicológico dependem do risco ocupacional e do PCMSO.</li>
                <li><strong>O ASO é emitido.</strong> Com as informações clínicas e complementares, o médico registra a conclusão de apto ou inapto para a função.</li>
                <li><strong>O RH arquiva e organiza o evento ocupacional.</strong> O ASO e os dados do atendimento sustentam o monitoramento de saúde ocupacional, incluindo o evento S-2220 quando aplicável.</li>
              </ol>
          ),
        },
        {
          title: 'Quais exames são feitos no admissional',
          body: (
            <>
              <p>
                Não existe uma lista única válida para todas as empresas. O exame clínico é a base do admissional. Os complementares dependem dos riscos da função e do que está previsto no PCMSO.
              </p>
              <ul>
                <li><strong>Exame clínico ocupacional:</strong> avaliação médica, histórico de saúde e anamnese ocupacional.</li>
                <li><strong>Audiometria:</strong> comum em funções com exposição a ruído.</li>
                <li><strong>Acuidade visual:</strong> frequente em motoristas, operadores, vigilantes e funções com demanda visual importante.</li>
                <li><strong>Espirometria:</strong> usada quando há exposição a poeiras, gases ou agentes que afetam a função pulmonar.</li>
                <li><strong>Exames laboratoriais:</strong> solicitados conforme riscos, função e protocolo médico.</li>
                <li><strong>Exame toxicológico:</strong> obrigatório em situações específicas, como motoristas profissionais CLT nas categorias previstas em lei.</li>
              </ul>
              <p>
                Para ver exemplos por cargo, consulte a <Link href="/saude/tabela-exames-admissionais-por-funcao">tabela de exames admissionais por função</Link>.
              </p>
              <p>
                Um erro comum é pedir “pacote padrão” para todos os cargos. Isso pode gerar custo desnecessário em funções simples e, pior, deixar lacunas em funções com risco real. O protocolo certo é função por função.
              </p>
            </>
          ),
        },
        {
          title: 'ASO admissional: o documento que comprova o resultado',
          body: (
            <>
              <p>
                O ASO é o documento que formaliza o resultado do exame. Ele identifica trabalhador, empresa, função, riscos ocupacionais relevantes, exames realizados e conclusão médica.
              </p>
              <p>
                O ASO admissional não é um detalhe burocrático. Ele é a evidência de que a empresa cumpriu a etapa médica antes do início das atividades e sustenta o registro de saúde ocupacional do trabalhador.
              </p>
              <p>
                Depois da contratação, a empresa deve manter o acompanhamento conforme o PCMSO, com exames periódicos e demais exames ocupacionais quando aplicáveis.
              </p>
            </>
          ),
        },
        {
          title: 'O que pode reprovar no exame admissional',
          body: (
            <>
              <p>
                O exame admissional não “reprova” uma pessoa de forma genérica. Ele avalia se há aptidão para uma função específica, com riscos específicos. Uma condição de saúde pode não impedir trabalho administrativo, mas exigir restrição para trabalho em altura, espaço confinado, esforço físico intenso ou exposição a determinado agente.
              </p>
              <p>
                A conclusão deve ser técnica e relacionada ao cargo. O médico não deve usar o exame para discriminar candidato, investigar assuntos sem relação ocupacional ou expor informações clínicas ao empregador.
              </p>
              <p>
                Quando há inaptidão, a empresa deve tratar o caso com cuidado documental e jurídico. O ASO informa apto ou inapto; detalhes clínicos pertencem ao prontuário médico, não ao RH.
              </p>
            </>
          ),
        },
        {
          title: 'O que não pode ser pedido no exame admissional',
          body: (
            <>
              <p>
                O exame admissional não é uma autorização para pedir qualquer exame. A empresa deve solicitar apenas avaliações relacionadas à saúde ocupacional e aos riscos da função.
              </p>
              <ul>
                <li><strong>Teste de gravidez:</strong> não deve ser usado como critério de admissão.</li>
                <li><strong>Teste de HIV:</strong> é vedado em exames ligados à relação de emprego.</li>
                <li><strong>Exames sem relação com o risco ocupacional:</strong> aumentam custo e podem criar problema trabalhista.</li>
                <li><strong>Perguntas discriminatórias:</strong> o foco deve ser aptidão para a função, não vida íntima ou condição sem relação com o trabalho.</li>
              </ul>
              <p>
                Para empresas, a regra prática é simples: se o exame não se conecta ao risco da função ou ao PCMSO, ele provavelmente não deveria entrar no fluxo admissional.
              </p>
            </>
          ),
        },
        {
          title: 'Exame admissional precisa de jejum?',
          body: (
            <>
              <p>
                Na maioria dos casos, não. O exame clínico admissional não exige jejum. O candidato só precisa ficar em jejum quando houver exame complementar específico que peça restrição alimentar, como glicemia em jejum ou lipidograma.
              </p>
              <p>
                Por isso, a orientação correta depende do protocolo do cargo. Antes de enviar o candidato, o RH deve confirmar quais exames serão realizados e se algum deles exige preparo.
              </p>
              <p>
                Veja a explicação completa em <Link href="/saude/exame-admissional-precisa-de-jejum">exame admissional precisa de jejum?</Link>.
              </p>
            </>
          ),
        },
        {
          title: 'Documentos necessários para fazer o exame',
          body: (
            <>
              <p>
                Em geral, o candidato deve levar:
              </p>
              <ul>
                <li>Documento oficial com foto, como RG ou CNH.</li>
                <li>CPF.</li>
                <li>Guia ou encaminhamento da empresa.</li>
                <li>Informação da função para a qual será contratado.</li>
                <li>Exames ou documentos médicos anteriores, quando solicitados.</li>
              </ul>
              <p>
                Para empresas, o mais importante é enviar o candidato com dados corretos de função e riscos. Um encaminhamento incompleto pode gerar ASO inconsistente ou necessidade de refazer o atendimento.
              </p>
            </>
          ),
        },
        {
          title: 'Checklist para o RH não travar a admissão',
          body: (
            <div className="not-prose overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider">Antes de encaminhar</th>
                    <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider">Por que importa</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Função correta do candidato', 'Define quais riscos e exames podem ser aplicáveis.'],
                    ['PCMSO atualizado', 'Evita pacote genérico e sustenta o protocolo médico.'],
                    ['PGR coerente com a função', 'Ajuda a conectar risco ocupacional e exames complementares.'],
                    ['Guia de encaminhamento completa', 'Reduz retrabalho, dúvida da clínica e atraso no ASO.'],
                    ['Orientação de jejum/preparo', 'Evita reagendamento de coleta quando houver laboratório.'],
                    ['Canal claro para receber o ASO', 'Permite fechar a admissão sem procurar documento depois.'],
                  ].map(([item, reason], index) => (
                    <tr key={item} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-4 py-3 font-bold text-slate-800">{item}</td>
                      <td className="px-4 py-3 text-slate-600">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          title: 'Quanto tempo demora para sair o ASO',
          body: (
            <>
              <p>
                Quando o cargo exige apenas exame clínico, o ASO pode ser emitido no mesmo atendimento. Quando há exames complementares, o prazo depende da liberação dos resultados.
              </p>
              <p>
                Em empresas com volume de contratação, o atraso normalmente não vem do exame em si, mas da falta de fluxo: guia incompleta, PCMSO desatualizado, candidato sem orientação de preparo ou complementares solicitados de última hora.
              </p>
              <p>
                Se a sua empresa precisa contratar sem travar o RH, a página de <Link href="/servicos/exame-admissional-expresso/sao-paulo">exame admissional expresso em São Paulo</Link> explica o fluxo comercial da SERMST.
              </p>
            </>
          ),
        },
        {
          title: 'Quanto custa o exame admissional',
          body: (
            <>
              <p>
                O valor varia conforme a clínica, a cidade, o volume de exames da empresa e os complementares exigidos pelo PCMSO. Uma admissão simples tende a custar menos do que uma função com audiometria, laboratório, espirometria ou toxicológico.
              </p>
              <p>
                A regra segura é separar o custo em duas partes: exame clínico com ASO e exames complementares. Para entender os fatores de preço, veja <Link href="/saude/valor-exame-admissional">valor do exame admissional para empresas</Link>.
              </p>
            </>
          ),
        },
        {
          title: 'Exame admissional, PCMSO, PGR e eSocial: como tudo se conecta',
          body: (
            <>
              <p>
                O exame admissional não deveria ser visto como uma etapa solta. O <strong>PGR</strong> identifica perigos e riscos ocupacionais. O <strong>PCMSO</strong> transforma esses riscos em acompanhamento médico. O <strong>exame admissional</strong> aplica esse protocolo ao novo colaborador. O <strong>ASO</strong> documenta a conclusão. E o <strong>eSocial</strong> recebe os eventos de saúde ocupacional quando aplicáveis.
              </p>
              <p>
                Quando essa cadeia está organizada, a admissão anda rápido. Quando está quebrada, o RH descobre o problema no pior momento: com candidato aprovado, gestor cobrando início e ASO pendente.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que é exame admissional?',
          a: 'É o exame ocupacional feito antes do início das atividades do colaborador. Ele avalia se a pessoa está apta para a função, considerando os riscos do cargo e o PCMSO da empresa.',
        },
        {
          q: 'Como é o exame admissional?',
          a: 'Normalmente começa com avaliação clínica e anamnese ocupacional. Dependendo da função, podem ser solicitados exames complementares como audiometria, acuidade visual, espirometria, laboratório ou toxicológico.',
        },
        {
          q: 'Quais exames são feitos no admissional?',
          a: 'O exame clínico é a base. Os complementares variam conforme o PCMSO e os riscos do cargo. Não existe uma lista única para todas as funções.',
        },
        {
          q: 'Exame admissional precisa de jejum?',
          a: 'O exame clínico não precisa de jejum. Jejum só é necessário se houver exame complementar específico, como glicemia em jejum ou lipidograma.',
        },
        {
          q: 'Quem paga o exame admissional?',
          a: 'A empresa contratante. O custo dos exames ocupacionais é responsabilidade do empregador.',
        },
        {
          q: 'O candidato pode começar a trabalhar antes do exame admissional?',
          a: 'Não é recomendado e coloca a empresa em não conformidade. O exame admissional deve ser feito antes do início das atividades.',
        },
        {
          q: 'O exame admissional pode impedir a contratação?',
          a: 'Pode haver conclusão de inaptidão quando a condição de saúde impede o exercício seguro daquela função específica. A decisão deve ser técnica, relacionada aos riscos do cargo e sem caráter discriminatório.',
        },
        {
          q: 'A empresa pode pedir teste de gravidez ou HIV?',
          a: 'Não. Exames discriminatórios ou sem relação com a aptidão ocupacional não devem fazer parte do admissional.',
        },
        {
          q: 'MEI, ME e EPP precisam fazer exame admissional?',
          a: 'Quando possuem empregados, devem realizar e custear exames ocupacionais. Mesmo empresas dispensadas de elaborar PCMSO em situações específicas continuam tendo obrigações de exames médicos ocupacionais.',
        },
      ]}
      sidebarTitle="Precisa fazer exame admissional para sua empresa?"
      sidebarHook="A SERMST atende empresas com fluxo corporativo: exame clínico, complementares quando necessários, ASO e orientação para reduzir retrabalho no RH."
      sidebarCtaLabel="Solicitar exame admissional"
      sidebarCtaHref="/servicos/exame-admissional-expresso/sao-paulo"
      related={[
        { label: 'Exame admissional expresso em São Paulo', href: '/servicos/exame-admissional-expresso/sao-paulo' },
        { label: 'Clínica de exame admissional em São Paulo', href: '/saude/clinica-exame-admissional-sao-paulo' },
        { label: 'Valor do exame admissional', href: '/saude/valor-exame-admissional' },
        { label: 'Exame admissional precisa de jejum?', href: '/saude/exame-admissional-precisa-de-jejum' },
        { label: 'Tabela de exames por função', href: '/saude/tabela-exames-admissionais-por-funcao' },
        { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
      ]}
      finalCta={{
        title: 'Quer transformar a dúvida em contratação sem retrabalho?',
        desc: 'Se a sua empresa precisa admitir com segurança, a SERMST organiza o fluxo admissional, orienta o RH e evita que ASO, exames complementares e PCMSO virem gargalo.',
        label: 'Falar sobre exame admissional',
        href: '/servicos/exame-admissional-expresso/sao-paulo',
      }}
      />
    </>
  );
}
