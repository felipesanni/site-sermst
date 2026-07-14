import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Carta de recomendação: modelo e cuidados | SERMST',
  description:
    'Veja como escrever uma carta de recomendação profissional, quais informações incluir e quais cuidados tomar ao compartilhar referências.',
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
      hubLabel="RH e Departamento Pessoal"
      hubLabelShort="← RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/carta-recomendacao"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado em Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="Como fazer uma carta de recomendação: o que escrever e o que evitar"
      intro="Uma boa carta de recomendação explica de onde vem a referência, apresenta fatos do trabalho realizado e deixa claro para quais responsabilidades a pessoa está sendo indicada. Não precisa exagerar nem parecer um texto pronto."
      sections={[
        {
          title: 'O que é, e o que não é, uma carta de recomendação',
          body: (
            <>
              <p>
                A carta de recomendação é um relato assinado por alguém que trabalhou com o profissional e pode descrever sua atuação. <strong>Ela não é uma obrigação geral do empregador</strong> e deve ser escrita apenas quando houver informações reais para compartilhar.
              </p>
              <p>
                Diferente de:
              </p>
              <ul>
                <li><strong>Documentos do vínculo:</strong> registros da CTPS e documentos rescisórios comprovam a relação de emprego e não equivalem a uma recomendação.</li>
                <li><strong>PPP:</strong> documento previdenciário obrigatório nas situações previstas em lei, com finalidade própria.</li>
                <li><strong>Referência por telefone ou mensagem:</strong> também envolve dados pessoais e deve se limitar a informações autorizadas e verificáveis.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Quando vale a pena escrever',
          body: (
            <>
              <ol>
                <li><strong>Quando você acompanhou o trabalho de perto.</strong> Isso permite citar responsabilidades e resultados concretos.</li>
                <li><strong>Quando há fatos positivos para registrar.</strong> A carta deve refletir uma experiência profissional real.</li>
                <li><strong>Quando o profissional pediu a referência</strong> e autorizou o compartilhamento das informações necessárias.</li>
              </ol>
              <p>
                Se você não acompanhou o trabalho ou não se sente confortável em recomendar, pode recusar com educação. Uma carta vaga ou exagerada não ajuda quem recebe nem quem está sendo indicado.
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
              <li><strong>Contribuição concreta:</strong> o que a pessoa entregou e qual foi sua participação. Use números somente quando puder confirmá-los.</li>
              <li><strong>Forma de trabalhar:</strong> escolha duas ou três características que você observou e dê contexto.</li>
              <li><strong>Recomendação clara</strong>: para qual tipo de função você indica e por quê.</li>
              <li><strong>Disponibilidade para contato:</strong> informe um canal profissional se estiver disposto a responder perguntas.</li>
              <li><strong>Assinatura</strong>: nome, cargo, empresa, contato.</li>
            </ol>
          ),
        },
        {
          title: 'Os erros que tiram força da carta',
          body: (
            <ul>
              <li><strong>Adjetivo vazio.</strong> &quot;Profissional dedicado, comprometido e proativo&quot; diz pouco. Explique qual comportamento levou a essa avaliação, sem transformar horas extras em prova de desempenho.</li>
              <li><strong>Inflação.</strong> Recomendar para qualquer cargo, prometendo o que o profissional não entrega. Vira problema quando o contratante percebe.</li>
              <li><strong>Contradição interna.</strong> Texto positivo mas com qualificadores que esvaziam (&quot;apesar de algumas dificuldades&quot;, &quot;quando focado&quot;, &quot;com supervisão&quot;).</li>
              <li><strong>Texto genérico.</strong> Uma carta sem fatos, contexto ou responsabilidades poderia servir para qualquer pessoa.</li>
              <li><strong>Sem disponibilidade para validação.</strong> Recomendação séria oferece contato; quem não oferece levanta dúvida.</li>
            </ul>
          ),
        },
        {
          title: 'Cuidados jurídicos',
          body: (
            <>
              <p>
                Ao compartilhar uma recomendação, alguns cuidados evitam problemas desnecessários:
              </p>
              <ul>
                <li><strong>Dados pessoais:</strong> compartilhe apenas informações pertinentes e compatíveis com a autorização dada pelo profissional.</li>
                <li><strong>Comentários ofensivos ou discriminatórios:</strong> não inclua informações sobre saúde, religião, família ou outros aspectos sem relação com o trabalho.</li>
                <li><strong>Fatos não confirmados:</strong> evite acusações, rumores e avaliações que não possam ser explicadas de forma objetiva.</li>
              </ul>
              <p>
                A regra prática é simples: <strong>fale do trabalho que você realmente acompanhou</strong>, use informações pertinentes e não prometa desempenho futuro.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Empresa é obrigada a dar carta de recomendação?',
          a: 'Não existe obrigação legal geral de fornecer carta de recomendação. Ela não se confunde com os registros do vínculo, os documentos rescisórios ou o PPP, quando este for aplicável.',
        },
        {
          q: 'Posso falar mal de ex-funcionário em referência?',
          a: 'Referências negativas podem expor dados pessoais, reproduzir acusações não comprovadas ou gerar alegações de dano. Limite-se a fatos profissionais pertinentes e autorizados; se não puder responder com segurança, recuse o comentário.',
        },
        {
          q: 'Recomendação por LinkedIn vale o mesmo?',
          a: 'Pode ajudar, mas tem formato e contexto diferentes de uma carta assinada. Em qualquer canal, a recomendação deve identificar a relação profissional e trazer informações específicas.',
        },
        {
          q: 'Posso pedir carta para múltiplas pessoas?',
          a: 'Pode. Referências de gestores, colegas, clientes ou parceiros mostram perspectivas diferentes, desde que cada pessoa tenha acompanhado o trabalho descrito.',
        },
        {
          q: 'O que fazer se o ex-empregador se recusa?',
          a: 'A carta não é obrigatória. O profissional pode procurar outras pessoas que tenham acompanhado seu trabalho, como um antigo gestor, colega, cliente ou parceiro.',
        },
      ]}
      sidebarTitle="Sua empresa documenta saídas de funcionários?"
      sidebarHook="Além da comunicação com o profissional, o desligamento exige exame demissional, registros no eSocial e documentos coerentes com o encerramento do vínculo."
      sidebarCtaLabel="Auditar processo de desligamento"
      related={[
        { label: 'Como fazer carta de demissão', href: '/rh/carta-demissao' },
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        { label: 'Exame demissional: o que é e quando fazer', href: '/saude/exame-demissional' },
      ]}
    />
  );
}
