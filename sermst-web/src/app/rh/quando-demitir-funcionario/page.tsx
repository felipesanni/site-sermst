import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Quando demitir um funcionário: guia para gestores | SERMST',
  description:
    'Demissão é decisão técnica, não emocional. Feita certa, protege time e resultado. Feita errada, vira processo e custo escondido. Veja sinais, etapas e cuidados.',
  alternates: { canonical: 'https://sermst.com.br/rh/quando-demitir-funcionario' },
  robots: 'index, follow',
  openGraph: {
    title: 'Quando demitir um funcionário: critérios, riscos e compliance SST | SERMST',
    description:
      'Como tomar a decisão de demissão de forma segura: documentação necessária, exame demissional, justa causa e como reduzir o risco de processo trabalhista.',
    url: 'https://sermst.com.br/rh/quando-demitir-funcionario',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function QuandoDemitirPage() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/corporate-team.jpg", alt: "Gestão de equipe e análise de desempenho para decisão de desligamento" }}
      hubLabel="Hub de RH e Departamento Pessoal"
      hubLabelShort="← Hub de RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/quando-demitir-funcionario"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="Quando demitir um funcionário: o guia que o gestor precisa"
      intro="Demissão é decisão técnica, não emocional. Feita certa, protege o time e o resultado. Feita errada, vira processo trabalhista, queda de moral e custo escondido. Veja os sinais, as etapas e os cuidados."
      sections={[
        {
          title: 'A pergunta que importa antes da pergunta &quot;quando demitir&quot;',
          body: (
            <>
              <p>
                Antes de decidir demitir, o gestor precisa responder honestamente a outra pergunta: <strong>o problema é da pessoa ou é do sistema?</strong>
              </p>
              <p>
                Funcionário com baixo desempenho pode ser efeito de gerente que não dá feedback, processo mal definido, treinamento que nunca aconteceu, ferramenta inadequada, conflito de papel. Demitir nesses casos resolve o sintoma e mantém o problema — o próximo contratado vai produzir o mesmo resultado.
              </p>
              <p>
                Quando o problema é do sistema: ajustar o sistema. Quando o problema é da pessoa (após sistema ajustado): aí sim a demissão vira a decisão correta.
              </p>
            </>
          ),
        },
        {
          title: 'Os 5 sinais reais de que é hora de demitir',
          body: (
            <ol>
              <li><strong>Padrão repetido após feedback formal.</strong> O funcionário foi alertado, recebeu plano de melhoria, teve tempo para mudar — e o padrão continua igual.</li>
              <li><strong>Impacto negativo na equipe.</strong> O comportamento da pessoa está derrubando a moral, gerando conflito recorrente ou afastando outros bons profissionais.</li>
              <li><strong>Quebra de confiança não reparável.</strong> Roubo, fraude, mentira deliberada, ato lesivo à empresa. Isso é justa causa direta — não negocia.</li>
              <li><strong>Inadequação técnica que treinamento não resolve.</strong> A pessoa simplesmente não tem capacidade para a função e mais treino não vai mudar isso.</li>
              <li><strong>Mudança estrutural da empresa.</strong> A função deixou de existir, a área foi reorganizada, a empresa pivotou — não é demérito do funcionário, é mudança de contexto.</li>
            </ol>
          ),
        },
        {
          title: 'O que fazer ANTES de chegar à demissão',
          body: (
            <>
              <p>
                Antes de tomar a decisão e definitivamente antes de comunicar, três etapas blindam a empresa contra ação posterior:
              </p>
              <ol>
                <li><strong>Feedback formal documentado.</strong> Não basta &quot;eu falei&quot;. Precisa ter registro escrito (e-mail, plano de desenvolvimento individual) com data, problema apontado, expectativa, prazo.</li>
                <li><strong>Plano de melhoria com prazo.</strong> 30 a 90 dias é o padrão. Define metas mensuráveis e o gestor acompanha. Documenta evolução ou estagnação.</li>
                <li><strong>Advertências formais quando aplicável.</strong> Para falta disciplinar, tem que haver gradação: verbal → escrita → suspensão → demissão. Pular etapas tira força jurídica.</li>
              </ol>
              <p>
                Sem isso, a demissão pode ser revertida em ação trabalhista por &quot;motivo ilícito&quot; (mesmo sem precisar de justa causa). Em vez de pagar dispensa imotivada, a empresa paga indenização adicional, danos morais e custas.
              </p>
            </>
          ),
        },
        {
          title: 'Os custos invisíveis de adiar uma demissão necessária',
          body: (
            <ul>
              <li><strong>Toxicidade na equipe.</strong> Bons profissionais saem porque o gestor &quot;não toma decisão&quot;.</li>
              <li><strong>Queda de produtividade.</strong> O baixo desempenho de um vira referência implícita para os outros.</li>
              <li><strong>Custo financeiro acumulado.</strong> Salário pago × meses de adiamento + custo de retrabalho + custo de erro do funcionário em questão.</li>
              <li><strong>Risco de SST.</strong> Funcionário desengajado em função operacional aumenta a chance de acidente — e a responsabilidade da empresa não diminui por ele estar &quot;de saída&quot;.</li>
              <li><strong>Drenagem de tempo do gestor.</strong> Cada conversa, cada feedback, cada situação extraordinária consome tempo de liderança que deveria estar no resultado.</li>
            </ul>
          ),
        },
        {
          title: 'Demissão por baixo desempenho NÃO é justa causa',
          body: (
            <>
              <p>
                Erro recorrente: empresa demite por desempenho fraco e tenta enquadrar como justa causa para evitar pagar verbas. Não funciona. <strong>Baixo desempenho não está nas hipóteses do art. 482 da CLT.</strong>
              </p>
              <p>
                A dispensa por baixo desempenho é dispensa imotivada — paga aviso prévio, multa de FGTS, libera seguro-desemprego. Tentar fugir disso vira ação trabalhista certeira.
              </p>
              <p>
                Justa causa só vale para faltas graves específicas: desídia (não confundir com baixo desempenho), abandono de emprego, indisciplina, embriaguez habitual, ato lesivo à empresa. E mesmo nessas, exige documentação robusta.
              </p>
            </>
          ),
        },
        {
          title: 'Checklist do dia da demissão',
          body: (
            <ol>
              <li>Conversa preparada — direta, curta, em local privado, sem terceiros desnecessários.</li>
              <li>Carta de comunicação pronta com tipo de aviso, data de saída e resumo de verbas.</li>
              <li>Devolução de bens organizada (crachá, notebook, EPI, uniforme).</li>
              <li>Acesso a sistemas a ser revogado imediatamente após a comunicação (segurança da informação).</li>
              <li>Exame demissional agendado para até 10 dias antes ou na data da rescisão.</li>
              <li>Comunicação ao financeiro para pagamento de verbas em até 10 dias corridos.</li>
              <li>Comunicação ao DP/eSocial para envio do S-2299 dentro do prazo.</li>
              <li>Plano de comunicação com a equipe — quem soube primeiro, o que vai ser dito, quem assume as funções no curto prazo.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Posso demitir funcionário em experiência?',
          a: 'Sim, mas precisa pagar verbas proporcionais ao período já trabalhado. Se a rescisão for antes do término do contrato de experiência, há indenização específica de metade dos dias restantes do prazo. Empresa que rescinde experiência sem essa indenização paga em ação posterior.',
        },
        {
          q: 'Funcionária grávida pode ser demitida?',
          a: 'Não, sem justa causa. Gestante tem estabilidade desde a concepção até 5 meses após o parto. Demissão nesse período é nula — a empresa é obrigada a reintegrar e pagar todo o período como se estivesse trabalhando. Justa causa é possível mas exige fato grave e documentação rigorosa.',
        },
        {
          q: 'Posso demitir funcionário em férias ou afastamento INSS?',
          a: 'Não. Funcionário em férias está com contrato suspenso parcialmente; em afastamento INSS, contrato totalmente suspenso. Demissão nesses períodos é nula. Tem que aguardar o retorno e formalizar depois — e nesse caso, geralmente é melhor planejar antes do afastamento ou após o retorno.',
        },
        {
          q: 'Quanto tempo de feedback antes de demitir é razoável?',
          a: 'Para baixo desempenho recuperável: 60 a 90 dias com plano de melhoria documentado. Para falta disciplinar leve: gradação completa (verbal, escrita, suspensão). Para falta grave: imediato. Não há regra fixa — o que importa é a empresa conseguir provar que tentou recuperar antes de dispensar.',
        },
        {
          q: 'Como demitir alguém que é parente ou amigo?',
          a: 'Mesmas regras. Eventualmente o lado emocional pesa, mas juridicamente a empresa não pode dar tratamento diferenciado. Em empresa familiar, o conselho é envolver alguém de fora da relação direta (sócio externo, advogado, consultor de RH) para conduzir a comunicação.',
        },
      ]}
      sidebarTitle="Sua empresa demite com SST e DP em ordem?"
      sidebarHook="Cada demissão precisa de exame demissional, S-2299 no prazo e documentação prévia. Falha em um desses três é passivo aberto. A SERMST audita o processo de rescisão completo."
      sidebarCtaLabel="Auditar processo de demissão"
      related={[
        { label: 'Como fazer carta de demissão', href: '/rh/carta-demissao' },
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        { label: 'Exame demissional: guia completo', href: '/saude/exame-demissional-guia' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
