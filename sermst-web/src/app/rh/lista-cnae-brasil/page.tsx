import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Lista CNAE Brasil: guia completo para empresas e empreendedores | SERMST',
  description:
    'O CNAE define enquadramento da empresa nos órgãos públicos. Errar o CNAE muda alíquota tributária, muda obrigação SST e muda risco de fiscalização. Veja como escolher e revisar.',
  alternates: { canonical: 'https://sermst.com.br/rh/lista-cnae-brasil' },
  openGraph: {
    title: 'Lista CNAE Brasil: como identificar o grau de risco da sua empresa | SERMST',
    description:
      'Entenda o código CNAE, como ele determina o grau de risco da atividade econômica e quais obrigações SST mudam conforme o enquadramento.',
    url: 'https://sermst.com.br/rh/lista-cnae-brasil',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function ListaCNAEPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub de RH e Departamento Pessoal"
      hubLabelShort="← Hub de RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/lista-cnae-brasil"
      h1="Lista CNAE Brasil: o guia para empresas e empreendedores"
      intro="O CNAE define o enquadramento da empresa em todos os órgãos públicos. Errar o CNAE muda alíquota, muda obrigação trabalhista, muda obrigação de SST. Saber escolher e revisar é decisão estratégica, não burocracia."
      sections={[
        {
          title: 'O que é o CNAE',
          body: (
            <>
              <p>
                CNAE significa <strong>Classificação Nacional de Atividades Econômicas</strong>. É o código padrão usado por Receita Federal, Previdência, Ministério do Trabalho, IBGE, prefeitura e demais órgãos para enquadrar a atividade que a empresa exerce.
              </p>
              <p>
                A versão atual (CNAE 2.3) tem mais de 1.300 códigos organizados em 5 níveis: seção, divisão, grupo, classe e subclasse. Cada empresa tem um CNAE principal (o que define enquadramento tributário e de risco) e pode ter CNAEs secundários para atividades complementares.
              </p>
            </>
          ),
        },
        {
          title: 'Por que o CNAE importa muito mais do que parece',
          body: (
            <ul>
              <li><strong>Define o regime tributário possível.</strong> Algumas atividades não podem ser Simples Nacional. Outras estão sujeitas a Lucro Presumido limitado. Errar pode pagar imposto a mais por anos.</li>
              <li><strong>Define o grau de risco SST</strong> (1, 2, 3 ou 4) — que define alíquota de RAT, obrigação de SESMT, regime do PGR e periodicidade de exames.</li>
              <li><strong>Define obrigação de PCMAT</strong> em construção, NR específica em indústria química, regime trabalhista especial em alguns setores.</li>
              <li><strong>Define a CNAE-Subclasse usada no eSocial</strong> — campos S-1000 da empresa, S-2200 do trabalhador.</li>
              <li><strong>Define as obrigações sindicais</strong> e o sindicato de enquadramento — categoria sindical errada gera passivo trabalhista.</li>
              <li><strong>Define alíquota de FAP</strong> (Fator Acidentário de Prevenção) — empresa em setor de alto risco paga mais GIIL-RAT.</li>
            </ul>
          ),
        },
        {
          title: 'Como o CNAE afeta SST especificamente',
          body: (
            <>
              <p>
                Cada subclasse tem um <strong>grau de risco</strong> de 1 a 4. Esse grau determina:
              </p>
              <ul>
                <li>A periodicidade obrigatória de revisão do PGR (1 ou 2 anos)</li>
                <li>A periodicidade do exame médico ocupacional</li>
                <li>A obrigatoriedade de SESMT próprio (Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho) conforme o número de empregados</li>
                <li>A alíquota de RAT (1%, 2% ou 3%) que a empresa paga sobre folha de pagamento</li>
                <li>A obrigatoriedade de CIPA</li>
              </ul>
              <p>
                Empresa com CNAE de baixo risco em operação que na prática é de alto risco está pagando RAT a menor — e exposta a auditoria da Receita que enquadra retroativamente, com multa.
              </p>
              <p>
                Empresa com CNAE de alto risco em operação que na prática é de baixo risco está pagando mais imposto do que deveria — pode pedir revisão e recuperação.
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
              <li><strong>Confirme com consultor de SST</strong>. CNAE define obrigação de PGR, PCMSO, treinamento, SESMT, CIPA — escolha errada cria obrigação que sua estrutura não está preparada para cumprir.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Posso ter mais de um CNAE?',
          a: 'Sim. A empresa tem um CNAE principal (o que define enquadramento tributário e de risco) e pode ter quantos CNAEs secundários precisar — cada um para atividade complementar real. Mas atenção: CNAE secundário não dispensa de cumprir as obrigações do CNAE principal.',
        },
        {
          q: 'Como mudar o CNAE da empresa?',
          a: 'Para empresa LTDA ou EIRELI, é alteração contratual via Junta Comercial. Para MEI, alteração no Portal do Empreendedor. A mudança reflete automáticamente em CNPJ, alvará e demais cadastros. Em geral, contador faz junto com a próxima alteração contratual.',
        },
        {
          q: 'Trocar CNAE muda imposto pago no passado?',
          a: 'Não retroativamente. A mudança de CNAE vale a partir da data da alteração. Mas se a Receita auditar e concluir que o CNAE estava errado durante anos, pode haver enquadramento retroativo com cobrança de diferença e multa.',
        },
        {
          q: 'CNAE define o sindicato?',
          a: 'Sim. O sindicato de enquadramento é determinado pela atividade preponderante (CNAE principal). Errar leva a contribuir para sindicato errado, aplicar convenção coletiva errada — passivo trabalhista que aparece em rescisão ou ação.',
        },
        {
          q: 'CNAE muda o que precisa ter de SST?',
          a: 'Sim, e bastante. CNAE de risco 4 exige PGR revisado anualmente, PCMSO mais robusto, SESMT acima de certo número de funcionários, CIPA obrigatória. CNAE de risco 1 tem regime simplificado. Empresa que muda CNAE precisa revisar toda a estrutura de SST junto.',
        },
      ]}
      sidebarTitle="Seu CNAE bate com a operação real?"
      sidebarHook="CNAE errado é exposição em três frentes: tributária, trabalhista e SST. A SERMST faz revisão técnica do enquadramento e aponta inconsistências antes que virem autuação."
      sidebarCtaLabel="Revisar enquadramento"
      related={[
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        { label: 'PGR (NR-01) atualizado', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
      ]}
    />
  );
}
