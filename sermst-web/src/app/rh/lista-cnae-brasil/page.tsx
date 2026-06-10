import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';
import { cnaeData } from '@/lib/data/cnae-data';
import { CnaeTable } from '@/components/cnae/CnaeTable';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Consulta CNAE: Tabela Completa e Grau de Risco | SERMST',
  description:
    'Consulte a tabela CNAE por código, atividade ou setor. Pesquise o grau de risco NR-04 e entenda como confirmar o CNAE principal da empresa pelo CNPJ.',
  keywords: [
    'consulta CNAE',
    'consultar CNAE',
    'CNAE consulta',
    'pesquisa CNAE',
    'código CNAE',
    'lista CNAE',
    'tabela CNAE',
    'grau de risco CNAE',
    'RAT por CNAE',
  ],
  alternates: { canonical: 'https://sermst.com.br/rh/lista-cnae-brasil' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Consulta CNAE: código, atividade e grau de risco | SERMST',
    description:
      'Pesquise a lista CNAE por código, atividade ou setor e consulte o grau de risco NR-04. Depois confirme o CNAE principal oficial pelo CNPJ.',
    url: 'https://sermst.com.br/rh/lista-cnae-brasil',
    siteName: 'SERMST',
    type: 'article',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/site/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Consulta CNAE por código, atividade e grau de risco | SERMST',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulta CNAE: código, atividade e grau de risco | SERMST',
    description:
      'Pesquise a tabela CNAE e consulte o grau de risco NR-04. Depois confirme o CNAE principal oficial pelo CNPJ.',
    images: ['/images/site/og-cover.jpg'],
  },
};

export default function ListaCNAEPage() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/sermst-estrutura-medicina-ocupacional.png", alt: "Classificação de atividade econômica CNAE aplicada à gestão de riscos SST" }}
      hubLabel="Hub de RH e Departamento Pessoal"
      hubLabelShort="← Hub de RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/lista-cnae-brasil"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-06-01',
      }}
      h1="Consulta CNAE: pesquise código, atividade e grau de risco"
      intro="Use a tabela CNAE para pesquisar por código, atividade econômica ou setor e consultar o grau de risco da NR-04. Depois, confirme o CNAE principal oficial da empresa pelo CNPJ antes de avaliar as obrigações reais de SST."
      sections={[
        {
          title: 'Tabela CNAE para consulta por código, atividade ou setor',
          body: (
            <>
              <p>
                Faça sua <strong>consulta CNAE</strong> na tabela abaixo. A busca permite localizar uma atividade pelo código CNAE, por uma palavra da descrição ou pelo setor econômico. O resultado mostra o grau de risco da NR-04 associado à subclasse.
              </p>
              <p>
                A tabela é uma referência para pesquisa. Como uma empresa pode ter CNAEs secundários, use a <Link href="/rh/calculadora-cnae-grau-de-risco" className="font-semibold underline">calculadora CNAE por CNPJ</Link> para confirmar o CNAE principal oficial e descobrir as obrigações aplicáveis ao caso concreto.
              </p>
              <CnaeTable data={cnaeData} />
              <p className="mt-3 text-xs text-slate-500">
                Fonte: Quadro I da NR-04 cruzado com a base oficial de subclasses CNAE do IBGE. Esta tabela já contempla {cnaeData.length} subclasses.
              </p>
            </>
          ),
        },
        {
          title: 'O que é o CNAE',
          body: (
            <>
              <p>
                CNAE significa <strong>Classificação Nacional de Atividades Econômicas</strong>. É o código padrão usado por Receita Federal, Previdência, Ministério do Trabalho, IBGE, prefeitura e demais órgãos para enquadrar a atividade que a empresa exerce.
              </p>
              <p>
                A CNAE-Subclasses 2.3 tem 1.332 categorias organizadas em 5 níveis: seção, divisão, grupo, classe e subclasse. Cada empresa tem um CNAE principal cadastrado no CNPJ e pode ter CNAEs secundários para atividades complementares.
              </p>
            </>
          ),
        },
        {
          title: 'Por que o CNAE importa muito mais do que parece',
          body: (
            <ul>
              <li><strong>Define o regime tributário possível.</strong> Algumas atividades não podem ser Simples Nacional. Outras estão sujeitas a Lucro Presumido limitado. Errar pode pagar imposto a mais por anos.</li>
              <li><strong>Ajuda a identificar o grau de risco da NR-04</strong> (1, 2, 3 ou 4), usado no dimensionamento de SESMT e CIPA.</li>
              <li><strong>Ajuda a mapear NRs relevantes</strong> para a atividade econômica, sem substituir a avaliação dos riscos reais de cada estabelecimento.</li>
              <li><strong>Define a CNAE-Subclasse usada no eSocial</strong> — campos S-1000 da empresa, S-2200 do trabalhador.</li>
              <li><strong>Define as obrigações sindicais</strong> e o sindicato de enquadramento — categoria sindical errada gera passivo trabalhista.</li>
              <li><strong>Ajuda a revisar RAT/GILRAT e FAP.</strong> A conferência tributária deve considerar a atividade preponderante e o histórico da empresa.</li>
            </ul>
          ),
        },
        {
          title: 'Como o CNAE afeta SST especificamente',
          body: (
            <>
              <p>
                Cada subclasse tem um <strong>grau de risco</strong> de 1 a 4 para fins da NR-04. Esse enquadramento ajuda a dimensionar:
              </p>
              <ul>
                <li>A obrigatoriedade de SESMT próprio (Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho) conforme o número de empregados</li>
                <li>A composição do SESMT conforme o grau de risco e o porte</li>
                <li>O dimensionamento da CIPA conforme o grau de risco e o número de empregados</li>
              </ul>
              <p>
                O CNAE não substitui a análise da operação real. PGR, PCMSO, exames e medidas preventivas devem refletir os riscos ocupacionais efetivamente existentes no estabelecimento.
              </p>
              <p>
                Para RAT/GILRAT, a conferência também exige cuidado: a Receita Federal considera a atividade econômica preponderante, isto é, aquela que ocupa o maior número de empregados e trabalhadores avulsos.
              </p>
            </>
          ),
        },
        {
          title: 'Quando revisar o CNAE',
          body: (
            <ol>
              <li><strong>Mudou o que a empresa faz.</strong> Começou a oferecer serviço novo, mudou o produto principal, abriu filial com atividade diferente.</li>
              <li><strong>Cresceu de porte.</strong> Saiu do MEI, do Simples, mudou de regime — hora de revisar CNAE para evitar erro de enquadramento.</li>
              <li><strong>Recebeu autuação ou questionamento.</strong> Receita ou MTE indica que a atividade real não bate com o CNAE — sinal claro de revisão urgente.</li>
              <li><strong>Vai abrir filial.</strong> Cada CNPJ tem seu CNAE — não é herança automática da matriz.</li>
              <li><strong>Há mais de 5 anos sem revisar.</strong> CNAE é tabela viva, sai versão nova periodicamente. Empresa antiga pode estar com classificação que não existe mais.</li>
            </ol>
          ),
        },
        {
          title: 'Como escolher o CNAE certo',
          body: (
            <ol>
              <li><strong>Descreva a atividade real em uma frase.</strong> &quot;Fábrica de embalagem plástica&quot;, &quot;Consultoria em SST&quot;, &quot;Loja de roupa feminina&quot;.</li>
              <li><strong>Procure no site da Receita</strong> ou IBGE pela palavra-chave principal. Geralmente caem 5-10 candidatos.</li>
              <li><strong>Leia a descrição completa de cada candidato</strong> — não só o título. As descrições têm exemplos do que está incluído e do que não está.</li>
              <li><strong>Verifique o grau de risco</strong> de cada candidato — pode mudar substancialmente o custo da operação.</li>
              <li><strong>Confirme com contador</strong>. CNAE tem implicação tributária — a escolha errada pode te tirar do Simples ou aumentar imposto sem você perceber.</li>
              <li><strong>Confirme com consultor de SST</strong>. O enquadramento ajuda a dimensionar SESMT e CIPA, mas PGR, PCMSO e treinamentos também precisam refletir os riscos reais da operação.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Como consultar um código CNAE?',
          a: 'Use a tabela desta página para pesquisar por código, atividade econômica ou setor. Para confirmar o CNAE principal oficial de uma empresa específica, consulte o CNPJ na calculadora vinculada à tabela.',
        },
        {
          q: 'Como consultar o CNAE principal pelo CNPJ?',
          a: 'A consulta pelo CNPJ identifica o CNAE principal cadastrado oficialmente para a empresa. Depois de localizar uma atividade na tabela, use a calculadora CNAE por CNPJ para confirmar o cadastro e obter referências iniciais de grau de risco, CIPA e SESMT.',
        },
        {
          q: 'Posso ter mais de um CNAE?',
          a: 'Sim. A empresa tem um CNAE principal cadastrado no CNPJ e pode ter CNAEs secundários para atividades complementares reais. Para analisar SST com segurança, também é preciso considerar a atividade preponderante no estabelecimento e os riscos ocupacionais efetivamente existentes.',
        },
        {
          q: 'Como mudar o CNAE da empresa?',
          a: 'Para empresa LTDA ou EIRELI, é alteração contratual via Junta Comercial. Para MEI, alteração no Portal do Empreendedor. A mudança reflete automaticamente em CNPJ, alvará e demais cadastros. Em geral, contador faz junto com a próxima alteração contratual.',
        },
        {
          q: 'Trocar CNAE muda imposto pago no passado?',
          a: 'Não retroativamente. A mudança de CNAE vale a partir da data da alteração. Mas se a Receita auditar e concluir que o CNAE estava errado durante anos, pode haver enquadramento retroativo com cobrança de diferença e multa.',
        },
        {
          q: 'CNAE define o sindicato?',
          a: 'A atividade preponderante é uma referência relevante para o enquadramento sindical, mas a análise deve considerar a atividade efetivamente exercida e as regras aplicáveis à categoria. Em caso de dúvida, vale revisar o caso com apoio contábil e jurídico.',
        },
        {
          q: 'CNAE muda o que precisa ter de SST?',
          a: 'Sim. O CNAE ajuda a identificar o grau de risco da NR-04 usado no dimensionamento de SESMT e CIPA. A revisão de PGR, PCMSO e exames deve considerar os riscos reais do estabelecimento, e não apenas o código cadastrado.',
        },
      ]}
      sidebarTitle="Qual é o CNAE principal da empresa?"
      sidebarHook="Uma empresa pode ter vários CNAEs. Consulte o CNPJ para confirmar o CNAE principal oficial e obter referências iniciais de grau de risco, CIPA, SESMT e NRs relevantes para o seu caso."
      sidebarCtaLabel="Consultar meu CNPJ"
      sidebarCtaHref="/rh/calculadora-cnae-grau-de-risco"
      related={[
        { label: 'Calculadora CNAE × Grau de Risco', href: '/rh/calculadora-cnae-grau-de-risco' },
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
