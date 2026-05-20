import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Exame Demissional: como funciona, prazo e por que ele protege a empresa | SERMST',
  description:
    'O exame demissional fecha o ciclo ocupacional do trabalhador e protege a empresa de ação trabalhista por doença ocupacional. Veja prazo, regras e o erro de pular.',
  alternates: { canonical: 'https://sermst.com.br/saude/exame-demissional-guia' },
  openGraph: {
    title: 'Exame demissional: o que é, quando fazer e como protege a empresa | SERMST',
    description:
      'Tudo sobre o exame demissional: quando é obrigatório, prazo para realização, o que acontece sem ele e como o ASO demissional reduz risco trabalhista.',
    url: 'https://sermst.com.br/saude/exame-demissional-guia',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function ExameDemissionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/exame-demissional-guia"
      coverImage={{ src: "/images/articles/exame-demissional.jpg", alt: "Consulta médica ocupacional para exame demissional" }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="Exame Demissional: como funciona e por que ele protege a empresa"
      intro="O exame demissional é a última oportunidade da empresa documentar o estado de saúde do trabalhador antes da rescisão. Sem ele, qualquer doença futura pode ser atribuída ao período trabalhado. Veja regras, prazos e como fazer certo."
      sections={[
        {
          title: 'O que é o exame demissional',
          body: (
            <>
              <p>
                O exame demissional é a avaliação médica feita <strong>antes do término do contrato de trabalho</strong>, com objetivo de atestar o estado de saúde do trabalhador no momento da rescisão. É exigência da NR-07 e fica registrado no eSocial via evento S-2299.
              </p>
              <p>
                A função do demissional é dupla: protege o trabalhador (recebe documento da sua condição na saída) e protege a empresa (cria evidência objetiva para defesa em ação trabalhista posterior por doença ocupacional).
              </p>
            </>
          ),
        },
        {
          title: 'Quando ele é obrigatório',
          body: (
            <>
              <p>
                A obrigatoriedade depende de duas situações:
              </p>
              <ol>
                <li><strong>Sempre que houver rescisão</strong> — exceto se o último exame periódico ou de mudança de função tiver sido feito há menos de 135 dias (em empresa grau de risco 1 ou 2) ou 90 dias (grau de risco 3 ou 4).</li>
                <li><strong>Independentemente do motivo da rescisão</strong> — dispensa imotivada, justa causa, pedido de demissão, fim de contrato a prazo, todos exigem demissional na regra geral.</li>
              </ol>
              <p>
                A &quot;dispensa&quot; do exame quando há periódico recente vale apenas se o periódico anterior cobriu efetivamente os riscos da função. Se a função mudou ou novo risco apareceu, o demissional é obrigatório.
              </p>
            </>
          ),
        },
        {
          title: 'O prazo crítico que muita empresa erra',
          body: (
            <>
              <p>
                O exame demissional tem que ser feito <strong>até a data do efetivo afastamento</strong>. O ideal é antes da comunicação da rescisão ou na sequência imediata, para que o ASO esteja pronto para a homologação.
              </p>
              <p>
                Quando o aviso é trabalhado, há mais tempo. Quando é indenizado, a empresa precisa correr — fazer demissional, receber o ASO, formalizar a rescisão. Atrasar significa:
              </p>
              <ul>
                <li>Atraso na homologação no sindicato (se aplicável)</li>
                <li>Verbas rescisórias além do prazo (multa do art. 477 da CLT)</li>
                <li>Evento S-2299 fora do prazo no eSocial — multa automática</li>
              </ul>
            </>
          ),
        },
        {
          title: 'O que é avaliado no exame',
          body: (
            <>
              <p>
                O exame demissional inclui:
              </p>
              <ul>
                <li><strong>Anamnese ocupacional</strong> — histórico de exposições durante o contrato</li>
                <li><strong>Exame clínico geral</strong> — avaliação física</li>
                <li><strong>Exames complementares</strong> conforme PCMSO e função (audiometria, espirometria, ECG, hemograma, exame toxicológico, etc.)</li>
                <li><strong>Comparação com exames anteriores</strong> — admissional, periódicos. Identifica alterações que aconteceram durante o contrato</li>
                <li><strong>Conclusão sobre aptidão</strong> e registros eventualmente encontrados</li>
              </ul>
              <p>
                A profundidade do demissional depende do PCMSO da empresa e dos riscos da função. Cargo administrativo de baixo risco tem demissional mais simples. Cargo operacional em ambiente com ruído, químicos ou ergonômicos tem bateria mais robusta.
              </p>
            </>
          ),
        },
        {
          title: 'O que acontece quando o demissional aponta problema',
          body: (
            <>
              <p>
                Pode acontecer do exame identificar uma condição preexistente, uma alteração leve, ou — mais raramente — uma doença ocupacional. Cada cenário tem caminho:
              </p>
              <ol>
                <li><strong>Condição não relacionada ao trabalho</strong> (ex.: pressão alta, diabetes não controlado): registra no ASO, recomenda acompanhamento médico, segue rescisão.</li>
                <li><strong>Alteração leve relacionada ao trabalho</strong> (ex.: alteração auditiva inicial em ambiente com ruído): registra no ASO, abre caminho para a empresa tomar medidas preventivas com os demais trabalhadores na mesma função, segue rescisão.</li>
                <li><strong>Doença ocupacional confirmada</strong> (ex.: PAIR, LER/DORT, pneumoconiose): pode haver necessidade de emitir CAT, comunicar INSS, e a rescisão pode ficar suspensa por estabilidade. Caso para análise jurídica imediata.</li>
              </ol>
              <p>
                Em qualquer dos casos, o demissional <strong>protege a empresa</strong> ao documentar objetivamente o estado de saúde no momento da saída — em vez de deixar o trabalhador alegar anos depois sem prova contrária.
              </p>
            </>
          ),
        },
        {
          title: 'O custo de pular o demissional',
          body: (
            <ul>
              <li><strong>Multa automática no eSocial</strong> por S-2299 incompleto ou fora do prazo.</li>
              <li><strong>Defesa frágil em ação por doença ocupacional</strong> — sem ASO de saída, qualquer quadro futuro pode ser atribuído ao período da empresa.</li>
              <li><strong>Reabertura técnica do processo de rescisão</strong> — ficou tecnicamente irregular.</li>
              <li><strong>Indenização ampliada em caso de processo</strong> — falha documental costuma ser usada para majorar indenização.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quem paga o exame demissional?',
          a: 'A empresa, sempre. Não há hipótese legal de cobrar do trabalhador. O custo do demissional é parte do custo de rescisão e está implícito na NR-07.',
        },
        {
          q: 'Demissional pode ser feito após a saída do trabalhador?',
          a: 'Não. Tem que ser feito até a data efetiva do afastamento. Demissional realizado posteriormente é tecnicamente inválido — embora algumas empresas façam para regularizar, isso não cobre o vácuo entre a saída e a realização.',
        },
        {
          q: 'Trabalhador se recusa a fazer demissional. O que fazer?',
          a: 'Documentar a recusa formalmente, com testemunhas e por escrito. Empresa cumpriu sua obrigação ao oferecer e marcar — a recusa do trabalhador desonera. Mas tem que existir registro objetivo da convocação e da recusa, idealmente assinado.',
        },
        {
          q: 'Quanto custa um exame demissional?',
          a: 'Em São Paulo, exame demissional simples (cargo administrativo) fica entre R$ 80 e R$ 150. Cargo operacional com bateria de complementares pode chegar a R$ 250-400. Empresa que tem volume normalmente negocia pacote com clínica fixa.',
        },
        {
          q: 'Onde fazer o exame demissional?',
          a: 'Em clínica de saúde ocupacional credenciada que faça o ASO oficialmente. Médico pode ser o coordenador do PCMSO da empresa ou outro médico do trabalho da clínica credenciada. Não vale exame feito por médico clínico geral em consultório comum.',
        },
      ]}
      sidebarTitle="Sua empresa demite com exame em dia?"
      sidebarHook="Pular o demissional é passivo aberto por anos. A SERMST tem fluxo expresso para exames demissional em São Paulo e Grande SP — atende sem agendamento."
      sidebarCtaLabel="Agendar exame demissional"
      related={[
        { label: 'Exame admissional expresso', href: '/servicos/exame-admissional-expresso/sao-paulo' },
        { label: 'Como fazer carta de demissão', href: '/rh/carta-demissao' },
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
      ]}
    />
  );
}
