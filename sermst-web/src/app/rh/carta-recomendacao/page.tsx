import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Como fazer uma carta de recomendação: modelo e cuidados | SERMST',
  description:
    'A carta de recomendação é uma escolha de gestão. Honestidade controlada é o equilíbrio. Veja como redigir, modelos por contexto e o erro de inflar avaliação.',
  alternates: { canonical: 'https://sermst.com.br/rh/carta-recomendacao' },
  robots: 'index, follow',
  openGraph: {
    title: 'Como escrever uma carta de recomendação profissional: estrutura e exemplos | SERMST',
    description:
      'Guia prático para escrever uma carta de recomendação profissional eficaz: estrutura, o que incluir, tom adequado e exemplos para diferentes cargos.',
    url: 'https://sermst.com.br/rh/carta-recomendacao',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function CartaRecomendacaoPage() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/b2b-partnership.jpg", alt: "Profissional recebendo carta de recomendação em contexto corporativo" }}
      hubLabel="Hub de RH e Departamento Pessoal"
      hubLabelShort="← Hub de RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/carta-recomendacao"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="Como fazer uma carta de recomendação: o que escrever é o que evitar"
      intro="A carta de recomendação é uma escolha de gestão — quem você indica diz mais sobre você do que sobre o profissional. Honestidade controlada é o equilíbrio. Veja como redigir, modelos por contexto e cuidados jurídicos."
      sections={[
        {
          title: 'O que é (é o que não é) carta de recomendação',
          body: (
            <>
              <p>
                Carta de recomendação é um documento em que um gestor, ex-empregador ou contato profissional descreve a experiência de trabalho com um profissional e endossa sua candidatura para nova oportunidade. <strong>Não é obrigatória</strong>; é cortesia profissional.
              </p>
              <p>
                Diferente de:
              </p>
              <ul>
                <li><strong>Atestado de trabalho</strong> — documento formal exigido pelo trabalhador, comprova vínculo, função e período. Empresa é obrigada a emitir.</li>
                <li><strong>PPP</strong> — documento previdenciário com agentes nocivos. Obrigatório.</li>
                <li><strong>Referência informal</strong> — quando outro empregador liga e pergunta. Sem documento.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Quando vale a pena escrever',
          body: (
            <>
              <ol>
                <li><strong>Quando a saída foi positiva.</strong> Empresa cresceu, função reduziu, mudança natural — é momento de reconhecer o que o profissional entregou.</li>
                <li><strong>Quando há reciprocidade futura.</strong> Profissional bom volta como cliente, parceiro, fornecedor. Carta gera goodwill.</li>
                <li><strong>Quando você foi pedido pelo profissional</strong> e tem coisa boa para falar.</li>
              </ol>
              <p>
                Não escrever quando: a saída foi conflituosa; você tem reservas técnicas ou de comportamento; a recomendação seria desonesta. Em caso de dúvida, é melhor se recusar educadamente do que escrever algo morno e contraditório.
              </p>
            </>
          ),
        },
        {
          title: 'Estrutura que funciona',
          body: (
            <ol>
              <li><strong>Cabeçalho</strong>: dados de quem escreve, dados de quem está sendo recomendado, data.</li>
              <li><strong>Contexto</strong>: período de trabalho, função, em qual empresa, sob qual estrutura. &quot;Trabalhei com X de 2022 a 2025 como Gerente de Operações na empresa Y, onde eu era diretor.&quot;</li>
              <li><strong>Contribuição mensurável</strong>: o que o profissional entregou, com fato. &quot;Liderou a implementação do sistema novo de produção que reduziu retrabalho em 30%.&quot;</li>
              <li><strong>Qualidades comportamentais reais</strong>: 2-3, com exemplo. Não vale lista de adjetivos vazios.</li>
              <li><strong>Recomendação clara</strong>: para qual tipo de função você indica e por quê.</li>
              <li><strong>Disponibilidade para contato</strong>: e-mail e telefone para a empresa contratanté válidar.</li>
              <li><strong>Assinatura</strong>: nome, cargo, empresa, contato.</li>
            </ol>
          ),
        },
        {
          title: 'Os erros que tiram força da carta',
          body: (
            <ul>
              <li><strong>Adjetivo vazio.</strong> &quot;Profissional dedicado, comprometido e proativo.&quot; Diz nada. Substitua por fato: &quot;Permaneceu até as 22h em três sextas seguidas para entregar o projeto X.&quot;</li>
              <li><strong>Inflação.</strong> Recomendar para qualquer cargo, prometendo o que o profissional não entrega. Vira problema quando o contratante percebe.</li>
              <li><strong>Contradição interna.</strong> Texto positivo mas com qualificadores que esvaziam (&quot;apesar de algumas dificuldades&quot;, &quot;quando focado&quot;, &quot;com supervisão&quot;).</li>
              <li><strong>Generalismo.</strong> Carta que serviria para qualquer um — sem fato, sem contexto, sem nome de projeto.</li>
              <li><strong>Sem disponibilidade para validação.</strong> Recomendação séria oferece contato; quem não oferece levanta dúvida.</li>
            </ul>
          ),
        },
        {
          title: 'Cuidados jurídicos',
          body: (
            <>
              <p>
                Empresa pode ter risco jurídico ao recomendar:
              </p>
              <ul>
                <li><strong>Recomendação enganosa.</strong> Se o profissional comete falha grave na nova empresa e a recomendação é peça de prova de que a empresa anterior &quot;sabia&quot;, pode haver responsabilização.</li>
                <li><strong>Recusa que vira difamação.</strong> Falar mal de profissional em referência informal pode virar ação por dano moral. Limite-se a fatos verificáveis ou recuse-se a comentar.</li>
                <li><strong>Conflito com termo de rescisão.</strong> Se houve acordo formal de saída com cláusula de neutralidade, recomendar (positiva ou negativamente) pode violar contrato.</li>
              </ul>
              <p>
                A regra simples: <strong>fale apenas o que você consegue provar com fato</strong>. Não exagere, não diminua. Em dúvida, recuse-se com cortesia.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Empresa é obrigada a dar carta de recomendação?',
          a: 'Não. Não há obrigação legal. Empresa é obrigada a dar atestado de trabalho (que é diferente — apenas comprova vínculo) e PPP. Recomendação é cortesia profissional.',
        },
        {
          q: 'Posso falar mal de ex-funcionário em referência?',
          a: 'É arriscado. Limite-se a fatos verificáveis (atribuídos a documentos, não a opinião). Falar de comportamento subjetivo pode virar ação por dano moral. Em geral, é mais seguro recusar comentário do que opinar negativamente.',
        },
        {
          q: 'Recomendação por LinkedIn vale o mesmo?',
          a: 'Tem peso parecido em mercado, mas formal continua sendo carta assinada. Em processos seletivos sérios, RH costuma pedir contato direto para validação por telefone — recomendação assinada com contato é melhor.',
        },
        {
          q: 'Posso pedir carta para múltiplas pessoas?',
          a: 'Pode. Profissional em transição costuma juntar 2-3 cartas de gestores, pares ou subordinados — cada um traz uma perspectiva. Importante variar contexto: chefe direto + colega de outra área + cliente ou parceiro externo.',
        },
        {
          q: 'O que fazer se o ex-empregador se recusa?',
          a: 'Aceitar com naturalidade. Não tem obrigação. Buscar referências em outras pessoas que trabalharam com o profissional (gerente direto que saiu, colega que migrou, cliente externo). Múltiplas referências fracas valém mais que insistir em uma negativa.',
        },
      ]}
      sidebarTitle="Sua empresa documenta saídas de funcionários?"
      sidebarHook="Carta de recomendação é a parte visível do desligamento. A parte invisível — exame demissional, S-2299, paper trail — é o que protege a empresa em ação posterior."
      sidebarCtaLabel="Auditar processo de desligamento"
      related={[
        { label: 'Como fazer carta de demissão', href: '/rh/carta-demissao' },
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionário' },
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        { label: 'Exame demissional: guia completo', href: '/saude/exame-demissional-guia' },
      ]}
    />
  );
}
