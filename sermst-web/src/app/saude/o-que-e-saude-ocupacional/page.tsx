import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'O que é Saúde Ocupacional: Guia para Gestores | SERMST',
  description:
    'Saúde ocupacional reúne exames, programas e ações de prevenção ligados aos riscos do trabalho. Entenda os pilares, as obrigações e como organizar a rotina.',
  alternates: { canonical: 'https://sermst.com.br/saude/o-que-e-saude-ocupacional' },
  openGraph: {
    title: 'O que é saúde ocupacional: conceito, legislação e aplicação prática | SERMST',
    description:
      'Entenda o que é saúde ocupacional, como ela se aplica nas empresas, quais programas são exigidos por lei e por que vai muito além de exames admissionais.',
    url: 'https://sermst.com.br/saude/o-que-e-saude-ocupacional',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function SaúdeOcupacionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/o-que-e-saude-ocupacional"
      coverImage={{ src: "/images/articles/saude-ocupacional.jpg", alt: "Profissional de saúde em ambiente corporativo representando saúde ocupacional" }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}

      h1="O que é Saúde Ocupacional: guia completo para gestores"
      intro="Saúde ocupacional não se resume ao ASO. Ela reúne exames, programas e ações de prevenção para acompanhar os efeitos do trabalho sobre a saúde e orientar medidas na empresa."
      sections={[
        {
          title: 'Saúde Ocupacional em uma frase',
          body: (
            <>
              <p>
                Saúde ocupacional é o conjunto de práticas, exames, programas e registros usados para <strong>prevenir, identificar e acompanhar os impactos do trabalho na saúde</strong>. Vai além do admissional e inclui vigilância médica, conhecimento dos riscos da função, orientação preventiva e análise dos dados de saúde ocupacional.
              </p>
              <p>
                É comum tratar saúde ocupacional como sinônimo de PCMSO ou ASO. Os dois fazem parte do sistema, mas não o esgotam. O trabalho precisa conectar os riscos reconhecidos no PGR ao PCMSO, aos exames indicados e às ações de prevenção.
              </p>
            </>
          ),
        },
        {
          title: 'Os 5 pilares de um sistema de saúde ocupacional',
          body: (
            <ol>
              <li><strong>PCMSO, conforme a NR-07:</strong> programa que organiza o acompanhamento médico a partir dos riscos ocupacionais identificados e classificados pelo PGR.</li>
              <li><strong>Exames ocupacionais:</strong> admissional, periódico, retorno ao trabalho, mudança de riscos ocupacionais e demissional.</li>
              <li><strong>Vigilância da saúde:</strong> análise de dados individuais e coletivos para identificar possíveis agravos relacionados ao trabalho e avaliar a necessidade de intervenção.</li>
              <li><strong>Integração com o PGR:</strong> inventário de riscos, medidas de prevenção e controle médico precisam ser compatíveis entre si.</li>
              <li><strong>Acompanhamento de afastamentos:</strong> inclui o exame de retorno quando exigido, a avaliação da aptidão e as adaptações indicadas para a retomada.</li>
            </ol>
          ),
        },
        {
          title: 'O que muda na rotina da empresa',
          body: (
            <>
              <p>
                Quando a saúde ocupacional acompanha a operação, a empresa consegue agir com informações melhores:
              </p>
              <ul>
                <li><strong>Prevenção orientada por dados.</strong> Alterações recorrentes nos exames podem indicar a necessidade de rever riscos e controles.</li>
                <li><strong>Retorno ao trabalho mais bem planejado.</strong> A avaliação médica ajuda a definir aptidão, restrições e encaminhamentos quando necessários.</li>
                <li><strong>Documentação coerente.</strong> Registros consistentes facilitam fiscalizações e perícias, sem garantir por si só o resultado de uma discussão.</li>
              </ul>
              <p>
                O benefício aparece no cotidiano: menos decisões improvisadas e mais clareza para o RH, para os gestores e para o médico responsável pelo programa.
              </p>
            </>
          ),
        },
        {
          title: 'Os exames mais comuns e quando eles aparecem',
          body: (
            <ul>
              <li><strong>Admissional:</strong> realizado antes de o empregado assumir as atividades.</li>
              <li><strong>Periódico:</strong> realizado durante o contrato. O intervalo segue a NR-07 e o planejamento do PCMSO para cada grupo de trabalhadores.</li>
              <li><strong>Retorno ao trabalho:</strong> realizado antes da retomada após afastamento igual ou superior a 30 dias por doença ou acidente, de natureza ocupacional ou não.</li>
              <li><strong>Mudança de riscos ocupacionais:</strong> realizado antes da mudança quando o trabalhador passa a uma atividade com riscos diferentes.</li>
              <li><strong>Demissional:</strong> realizado em até 10 dias contados do término do contrato, quando não se aplica a dispensa prevista na NR-07.</li>
            </ul>
          ),
        },
        {
          title: 'Falhas que merecem atenção',
          body: (
            <ol>
              <li><strong>PCMSO genérico.</strong> Um programa que não reflete os riscos reais pode indicar exames inadequados e prejudicar o acompanhamento.</li>
              <li><strong>Exames atrasados.</strong> O RH perde o controle do cronograma e deixa de realizar avaliações previstas no programa.</li>
              <li><strong>Retorno sem avaliação quando ela é exigida.</strong> O trabalhador reassume a função sem que a aptidão e eventuais restrições sejam verificadas.</li>
              <li><strong>Sem demissional quando exigido.</strong> A empresa deixa o prazo passar ou aplica a dispensa sem conferir os critérios de 90 ou 135 dias.</li>
              <li><strong>PCMSO desconectado do PGR.</strong> Riscos e controles aparecem de forma diferente nos documentos, o que exige revisão técnica.</li>
              <li><strong>Dados sem análise.</strong> A empresa arquiva ASOs e resultados, mas não verifica tendências que poderiam orientar ações preventivas.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Qual a diferença entre saúde ocupacional e medicina do trabalho?',
          a: 'Medicina do trabalho é a especialidade médica. Saúde ocupacional é um campo mais amplo, que também envolve segurança, ergonomia, higiene ocupacional e prevenção. No uso cotidiano, os termos às vezes aparecem como sinônimos.',
        },
        {
          q: 'Pequena empresa precisa ter saúde ocupacional?',
          a: 'Como regra, empresas com empregado precisam organizar a saúde ocupacional, realizar os exames aplicáveis e emitir ASO. A NR-07 prevê dispensa de elaborar PCMSO para alguns MEI, ME e EPP de grau de risco 1 ou 2 que atendem aos critérios aplicáveis, sem eliminar exames ocupacionais nem ASO.',
        },
        {
          q: 'Quem pode fazer ASO?',
          a: 'O ASO é emitido pelo médico que realiza o exame clínico ocupacional. Quando houver médico responsável pelo PCMSO, o documento também precisa trazer seus dados, conforme a NR-07.',
        },
        {
          q: 'O ASO vale para sempre?',
          a: 'O ASO registra a conclusão de um exame ocupacional específico. O admissional documenta a entrada; depois, o trabalhador segue o cronograma do PCMSO. O periódico ocorre nos intervalos da NR-07 e o demissional segue prazo e hipóteses de dispensa próprios.',
        },
        {
          q: 'Como saber se o PCMSO da minha empresa está bem feito?',
          a: 'Alguns sinais de alerta são riscos que não correspondem à operação, exames sem relação clara com a função, falta de revisão após mudanças e cronograma atrasado. Nesses casos, o programa precisa de uma avaliação técnica.',
        },
      ]}
      sidebarTitle="O PCMSO acompanha a operação da sua empresa?"
      sidebarHook="A SERMST verifica a relação entre riscos, exames, documentos e prazos para indicar os pontos que precisam de ajuste."
      sidebarCtaLabel="Auditar saúde ocupacional"
      sidebarCtaHref="/assinaturas"
      related={[
        { label: 'Empresa de segurança do trabalho em São Paulo', href: '/servicos/empresa-seguranca-do-trabalho/sao-paulo' },
        { label: 'PCMSO (NR-07): programa', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'Exame demissional: o que é e quando fazer', href: '/saude/exame-demissional' },
        { label: 'O que são EPIs', href: '/saude/o-que-sao-epis' },
      ]}
    />
  );
}
