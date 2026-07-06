import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-4 e SESMT: quando é obrigatório | SERMST',
  description:
    'NR-4 define quando o SESMT é obrigatório. Entenda como dimensionar por CNAE, grau de risco e número de empregados — e o que acontece quando a empresa ignora.',
  alternates: { canonical: 'https://sermst.com.br/normas/sesmt' },
  openGraph: {
    title: 'NR-4 e SESMT: quando é obrigatório | SERMST',
    description:
      'Guia prático sobre NR-4 e SESMT: grau de risco, CNAE, número de empregados, composição da equipe e alternativas técnicas para empresas.',
    url: 'https://sermst.com.br/normas/sesmt',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function SesmtPage() {
  return (
    <BlockbusterArticle
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="Voltar para normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/sesmt"
      badgeText="NR-04"
      coverImage={{ src: '/images/site/corporate-team.jpg', alt: 'Equipe técnica de SESMT e saúde ocupacional' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      readingTime="9 min"
      h1="NR-4 e SESMT: obrigatoriedade, dimensionamento e grau de risco"
      intro="A NR-4 determina quando o SESMT — Serviço Especializado em Segurança e Medicina do Trabalho — é obrigatório. O enquadramento depende do grau de risco da atividade (CNAE) cruzado com o número de empregados do estabelecimento."
      quickAnswer={
        <p>
          Para saber se a empresa precisa de SESMT, é necessário cruzar CNAE, grau de risco e quantidade de empregados. Empresas maiores ou de maior risco podem precisar de técnico de segurança, engenheiro, médico do trabalho, enfermeiro ou auxiliar de enfermagem do trabalho.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é SESMT',
          body: (
            <p>
              SESMT é a equipe especializada responsável por apoiar a prevenção de acidentes e doenças ocupacionais dentro da empresa. A composição pode envolver profissionais de segurança e medicina do trabalho, conforme dimensionamento da NR-04.
            </p>
          ),
        },
        {
          title: 'Quando o SESMT é obrigatório',
          body: (
            <>
              <p>
                A obrigatoriedade depende do grau de risco e do número de empregados. O grau de risco vem do CNAE da atividade principal, e o dimensionamento é feito conforme quadros da NR-04.
              </p>
              <p>
                Por isso, empresas com o mesmo número de funcionários podem ter obrigações diferentes se atuam em setores diferentes.
              </p>
            </>
          ),
        },
        {
          title: 'Por que o dimensionamento não deve ser feito no chute',
          body: (
            <>
              <p>
                O erro mais perigoso é olhar apenas para o número total de empregados e concluir que a empresa precisa ou não precisa de SESMT. O dimensionamento depende do enquadramento correto do estabelecimento, grau de risco, atividade principal e regras da NR-04.
              </p>
              <p>
                Uma conclusão sem memória de cálculo deixa a empresa vulnerável. Se houver fiscalização, crescimento, abertura de filial ou alteração de CNAE, o RH precisa conseguir explicar por que chegou àquele enquadramento.
              </p>
            </>
          ),
        },
        {
          title: 'Como CNAE e grau de risco influenciam o SESMT',
          body: (
            <>
              <p>
                O CNAE da atividade principal indica o grau de risco usado como base para várias obrigações de SST. No SESMT, esse grau de risco precisa ser cruzado com o número de empregados para verificar se há necessidade de equipe especializada e qual composição se aplica.
              </p>
              <p>
                Por isso, empresas com a mesma quantidade de empregados podem ter obrigações diferentes. Um escritório e uma operação industrial, por exemplo, não devem ser avaliados apenas pelo tamanho da folha.
              </p>
            </>
          ),
        },
        {
          title: 'Quais profissionais podem compor o SESMT',
          body: (
            <ul>
              <li>Médico do trabalho.</li>
              <li>Engenheiro de segurança do trabalho.</li>
              <li>Técnico de segurança do trabalho.</li>
              <li>Enfermeiro do trabalho.</li>
              <li>Auxiliar ou técnico de enfermagem do trabalho.</li>
            </ul>
          ),
        },
        {
          title: 'SESMT próprio, comum ou apoio técnico externo',
          body: (
            <p>
              A forma de estruturação depende do enquadramento da empresa e das regras aplicáveis. Mesmo quando a empresa não é obrigada a manter SESMT próprio, ela continua precisando cumprir PGR, PCMSO, ASO, treinamentos, CIPA ou designado quando aplicável. Apoio técnico externo pode ajudar a organizar esses requisitos sem confundir obrigação legal com necessidade prática de gestão.
            </p>
          ),
        },
        {
          title: 'Documentos que sustentam a análise de SESMT',
          body: (
            <ul>
              <li>Cartão CNPJ e CNAE principal do estabelecimento.</li>
              <li>Quantidade de empregados por estabelecimento ou operação.</li>
              <li>Grau de risco conforme NR-04.</li>
              <li>Memória de cálculo do dimensionamento.</li>
              <li>PGR, PCMSO, CIPA/designado e treinamentos relacionados.</li>
              <li>Registro de revisão quando houver crescimento, filial ou mudança de atividade.</li>
            </ul>
          ),
        },
        {
          title: 'SESMT, CIPA e PGR são a mesma coisa?',
          body: (
            <>
              <p>
                Não. SESMT é equipe especializada. CIPA é comissão interna com representantes da empresa e empregados. PGR é programa de gerenciamento de riscos. Eles se complementam, mas não se substituem.
              </p>
              <p>
                Uma empresa pode precisar de CIPA/designado, PGR e PCMSO mesmo quando não atinge o porte para SESMT próprio.
              </p>
            </>
          ),
        },
        {
          title: 'O que acontece quando a empresa ignora o SESMT',
          body: (
            <>
              <p>
                Se a empresa era obrigada a manter SESMT e não estruturou a equipe, o problema pode aparecer em fiscalização, acidente grave, doença ocupacional ou processo trabalhista. A falha também compromete a imagem de controle preventivo da operação.
              </p>
              <p>
                Mesmo quando o SESMT próprio não é obrigatório, a falta de apoio técnico pode gerar PGR genérico, PCMSO desconectado, CIPA sem atuação real e treinamentos sem planejamento.
              </p>
            </>
          ),
        },
        {
          title: 'Como calcular sem errar',
          body: (
            <ol>
              <li>Identifique o CNAE principal do estabelecimento.</li>
              <li>Confirme o grau de risco conforme NR-04.</li>
              <li>Some empregados do estabelecimento conforme regra aplicável.</li>
              <li>Cruze grau de risco e quantidade de empregados no quadro de dimensionamento.</li>
              <li>Registre a conclusão e revise quando houver crescimento ou mudança de atividade.</li>
            </ol>
          ),
        },
        {
          title: 'Erros comuns no dimensionamento do SESMT',
          body: (
            <ol>
              <li>Usar CNAE secundário em vez da atividade principal aplicável.</li>
              <li>Não atualizar o enquadramento quando a empresa cresce.</li>
              <li>Confundir CIPA, PGR e SESMT como se fossem a mesma obrigação.</li>
              <li>Ignorar estabelecimentos, filiais ou mudanças na operação.</li>
              <li>Não guardar memória de cálculo e evidência da análise realizada.</li>
            </ol>
          ),
        },
        {
          title: 'Como a SERMST ajuda no enquadramento',
          body: (
            <p>
              A SERMST apoia a empresa na leitura de CNAE, grau de risco, quantidade de empregados, CIPA, PGR, PCMSO e necessidade de equipe técnica. O objetivo é documentar a conclusão e deixar o RH com uma resposta defensável, não apenas uma opinião solta.
            </p>
          ),
        },
      ]}
      faq={[
        {
          q: 'Toda empresa precisa ter SESMT?',
          a: 'Não. A obrigatoriedade depende do grau de risco e do número de empregados conforme a NR-04.',
        },
        {
          q: 'Empresa sem SESMT ainda precisa cumprir SST?',
          a: 'Sim. Mesmo sem SESMT obrigatório, a empresa pode precisar de PGR, PCMSO, ASO, treinamentos, CIPA ou designado.',
        },
        {
          q: 'Como saber o grau de risco?',
          a: 'O grau de risco é definido pelo CNAE da atividade. A calculadora da SERMST ajuda a consultar CNAE, grau de risco, NR-05 e SESMT.',
        },
        {
          q: 'SESMT substitui CIPA?',
          a: 'Não. SESMT é equipe especializada e CIPA é comissão ou designado conforme enquadramento. As obrigações podem coexistir.',
        },
        {
          q: 'SESMT substitui PGR e PCMSO?',
          a: 'Não. PGR e PCMSO continuam sendo programas/documentos próprios da gestão de SST. O SESMT pode apoiar, mas não elimina essas obrigações.',
        },
        {
          q: 'Quando revisar o enquadramento do SESMT?',
          a: 'Sempre que houver mudança de CNAE, crescimento de empregados, abertura de filial, alteração relevante da operação ou dúvida sobre grau de risco.',
        },
      ]}
      maxFaqItems={8}
      sidebarTitle="Quer conferir SESMT pelo CNPJ?"
      sidebarHook="Use a calculadora da SERMST para consultar CNAE, grau de risco, CIPA e indicativos de SESMT antes de tomar decisão."
      sidebarCtaLabel="Abrir calculadora CNAE"
      sidebarCtaHref="/rh/calculadora-cnae-grau-de-risco"
      related={[
        { label: 'Calculadora CNAE, grau de risco e SESMT', href: '/rh/calculadora-cnae-grau-de-risco' },
        { label: 'NR-05 CIPA', href: '/normas/nr-05-cipa' },
        { label: 'Empresa de segurança do trabalho', href: '/servicos/empresa-seguranca-do-trabalho' },
        { label: 'PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
      ]}
    />
  );
}
