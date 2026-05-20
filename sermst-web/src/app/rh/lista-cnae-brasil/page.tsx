import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';
import { cnaeData } from '@/lib/data/cnae-data';

export const dynamic = 'force-static';

const ratPorGrau: Record<number, string> = { 1: '1%', 2: '2%', 3: '3%', 4: '3% + FAP' };

const grauBadge: Record<number, string> = {
  1: 'bg-emerald-100 text-emerald-800',
  2: 'bg-yellow-100 text-yellow-800',
  3: 'bg-orange-100 text-orange-800',
  4: 'bg-red-100 text-red-800',
};

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
        dateModified: '2026-05-01',
      }}
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
        {
          title: 'Tabela CNAE: grau de risco e alíquota RAT por atividade',
          body: (
            <>
              <p>
                A tabela abaixo lista as principais subclasses CNAE com seus graus de risco conforme o <strong>Quadro I da NR-04</strong> (Portaria MTb nº 3.214/1978). Use para localizar o código da sua empresa, identificar o grau de risco e verificar a alíquota de RAT correspondente. Para busca interativa por código, nome ou CNPJ, use a{' '}
                <Link href="/rh/calculadora-cnae-grau-de-risco" className="font-semibold underline">calculadora CNAE</Link>.
              </p>
              <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider whitespace-nowrap">Código</th>
                      <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider">Atividade econômica</th>
                      <th className="hidden px-4 py-3 text-left text-xs font-black uppercase tracking-wider sm:table-cell">Setor</th>
                      <th className="px-4 py-3 text-center text-xs font-black uppercase tracking-wider whitespace-nowrap">Grau</th>
                      <th className="px-4 py-3 text-center text-xs font-black uppercase tracking-wider whitespace-nowrap">RAT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cnaeData.map((entry, i) => (
                      <tr key={entry.codigo} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-4 py-3 font-mono text-xs font-bold text-slate-700 whitespace-nowrap">{entry.codigo}</td>
                        <td className="px-4 py-3 text-slate-800 leading-snug">{entry.descricao}</td>
                        <td className="hidden px-4 py-3 text-slate-500 sm:table-cell text-xs">{entry.setor}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block rounded-lg px-2.5 py-1 text-xs font-black ${grauBadge[entry.grauRisco]}`}>
                            {entry.grauRisco}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center text-xs font-bold text-slate-700 whitespace-nowrap">{ratPorGrau[entry.grauRisco]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Fonte: Quadro I da NR-04 cruzado com a base oficial de subclasses CNAE do IBGE. Esta tabela já contempla {cnaeData.length} subclasses.
              </p>
            </>
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
          a: 'Para empresa LTDA ou EIRELI, é alteração contratual via Junta Comercial. Para MEI, alteração no Portal do Empreendedor. A mudança reflete automaticamente em CNPJ, alvará e demais cadastros. Em geral, contador faz junto com a próxima alteração contratual.',
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
        { label: 'Calculadora CNAE × Grau de Risco', href: '/rh/calculadora-cnae-grau-de-risco' },
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        { label: 'PGR (NR-01) atualizado', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
