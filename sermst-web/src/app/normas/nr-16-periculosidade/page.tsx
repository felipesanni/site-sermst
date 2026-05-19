import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-16: Periculosidade — adicional de 30%, laudo e atividades enquadradas | SERMST',
  description:
    'A NR-16 define o adicional de periculosidade de 30%. Veja quem tem direito (eletricidade, inflamáveis, explosivos, segurança), como caracterizar e o erro de pagar sem laudo.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-16-periculosidade' },
  openGraph: {
    title: 'NR-16: periculosidade — adicional, atividades e como documentar | SERMST',
    description:
      'Guia da NR-16: quais atividades geram adicional de periculosidade, como o laudo técnico comprova ou afasta o risco e responsabilidades do empregador.',
    url: 'https://sermst.com.br/normas/nr-16-periculosidade',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR16Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/safety-equipment.jpg", alt: "Área de risco com sinalização de periculosidade conforme NR-16" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas/nr-16-periculosidade"
      pageUrl="https://sermst.com.br/normas/nr-16-periculosidade"
      badgeText="NR-16"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="NR-16: Periculosidade — quando é devida e como blindar a empresa"
      intro="A NR-16 define quem tem direito ao adicional de periculosidade de 30%. Eletricidade, inflamáveis, explosivos, radiações, segurança patrimonial. Cada atividade exige laudo que enquadra a função, sob pena de pagar adicional indevido por anos."
      sections={[
        {
          title: 'O que é a NR-16',
          body: (
            <>
              <p>
                A NR-16 estabelece quais atividades e operações são consideradas <strong>perigosas</strong> — aquelas que, por sua natureza, expõem o trabalhador a risco acentuado em razão de exposição permanente ou intermitente. O adicional é fixo: <strong>30% sobre o salário base</strong> do trabalhador (não sobre o salário mínimo, ao contrário da insalubridade).
              </p>
            </>
          ),
        },
        {
          title: 'Atividades com direito ao adicional',
          body: (
            <ul>
              <li><strong>Inflamáveis e explosivos</strong> — armazenamento, transporte, manuseio acima de quantidades fixadas em regulamento.</li>
              <li><strong>Radiações ionizantes</strong> — radioscopia, radiografia, gamagrafia, atividades com fontes radioativas.</li>
              <li><strong>Energia elétrica</strong> — atividades em sistemas elétricos de potência, instalações em alta tensão, eletricistas em redes.</li>
              <li><strong>Segurança pessoal ou patrimonial</strong> — vigilantes, segurança privada, transporte de valores.</li>
              <li><strong>Motociclistas</strong> — uso de motocicleta como meio de trabalho (entrega, vistoria, atendimento).</li>
              <li><strong>Trabalhadores rurais</strong> — em algumas atividades específicas com agentes biológicos ou explosivos.</li>
            </ul>
          ),
        },
        {
          title: 'O que precisa estar documentado para pagar (ou para NÃO pagar)',
          body: (
            <>
              <ol>
                <li><strong>Laudo Técnico de Periculosidade</strong> assinado por engenheiro de segurança ou médico do trabalho — caracteriza a função, descreve a exposição, conclui sobre o enquadramento.</li>
                <li><strong>PGR e PCMSO</strong> alinhados — riscos consistentes em todos os documentos.</li>
                <li><strong>S-2240 no eSocial</strong> refletindo a exposição.</li>
                <li><strong>Folha pagamento</strong> com adicional separado e identificável.</li>
                <li><strong>Procedimentos de trabalho</strong> que descrevem como a função interage com o agente perigoso.</li>
              </ol>
              <p>
                Para descaracterizar quando a empresa entende que não há periculosidade real, o caminho é o oposto: laudo técnico atestando a não exposição, com metodologia e evidências objetivas.
              </p>
            </>
          ),
        },
        {
          title: 'Atenção especial: motociclistas',
          body: (
            <>
              <p>
                Após a Lei 12.997/2014, motoboy/motofretista que usa motocicleta como meio de trabalho tem direito a periculosidade. <strong>Não basta ser empregado e ter moto</strong> — é a moto como ferramenta de trabalho que caracteriza. Empresa que tem motociclistas (entregador, oficial de manutenção, vistoriador, atendente externo) precisa avaliar.
              </p>
              <p>
                Casos comuns onde empresas erram:
              </p>
              <ul>
                <li>Vendedor externo que ESCOLHEU usar moto para visitas — depende da convenção e da formalização. Pode ou não ser devido.</li>
                <li>Funcionário interno que usa moto pessoal eventualmente — em regra, não caracteriza.</li>
                <li>Funcionário CLT em entregador de aplicativo — caracteriza, é meio de trabalho.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Os 5 erros que viram processo',
          body: (
            <ol>
              <li><strong>Vigilante sem adicional.</strong> Empresa de segurança patrimonial que não paga periculosidade para todos os vigilantes acumula passivo enorme — categoria fortemente sindicalizada.</li>
              <li><strong>Eletricista terceirizado sem documentação.</strong> Mesmo sendo terceirizado, a contratante responde solidariamente. Sem laudo, indenização sobre o valor pleno.</li>
              <li><strong>Motociclista sem adicional.</strong> Caso mais litigado da última década. Empresa de delivery que não paga acumula ações em escala.</li>
              <li><strong>Pagamento sobre salário mínimo.</strong> Periculosidade incide sobre o salário base, não sobre mínimo. Empresa que paga mal calculado gera diferença retroativa.</li>
              <li><strong>Insalubridade + periculosidade pagas juntas.</strong> Trabalhador escolhe a mais favorável, recebe uma só. Empresa que paga os dois cria passivo de dobro.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Periculosidade pode ser cumulativa com insalubridade?',
          a: 'Não. O trabalhador escolhe o adicional mais favorável (Súmula 47 do TST). Pagar ambos simultaneamente é desperdício e cria expectativa que vira passivo se um dia a empresa quiser ajustar.',
        },
        {
          q: 'Adicional de periculosidade incide sobré o que?',
          a: '30% sobre o salário base do trabalhador, sem incluir gratificações, prêmios ou outros adicionais — em regra. Norma coletiva da categoria pode estabelecer base mais ampla.',
        },
        {
          q: 'Empresa pode neutralizar periculosidade?',
          a: 'Diferente da insalubridade, a periculosidade na maior parte dos casos não pode ser neutralizada via EPI — o risco é da atividade em si. Eletricista com EPI continua exposto à eletricidade. Vigilante com colete continua exposto a risco patrimonial. Para descaracterizar, o caminho é eliminar a atividade ou retirar o trabalhador da função.',
        },
        {
          q: 'Quem assina o laudo de periculosidade?',
          a: 'Engenheiro de segurança do trabalho ou médico do trabalho legalmente habilitado, com ART recolhida quando aplicável. Sem profissional habilitado o documento não vale em fiscalização nem em ação.',
        },
        {
          q: 'Periculosidade gera direito a aposentadoria especial?',
          a: 'Sim, em geral, para algumas atividades — mas é necessário enquadramento previdenciário específico via PPP e LTCAT. Periculosidade trabalhista (NR-16) e periculosidade previdenciária têm critérios distintos. Empresa precisa cuidar dos dois lados.',
        },
      ]}
      sidebarTitle="Sua empresa enquadra periculosidade certo?"
      sidebarHook="Pagar adicional sem laudo é admissão de fato em ação. Não pagar quando devido é passivo retroativo de 5 anos. A SERMST faz laudo técnico que sustenta a decisão."
      sidebarCtaLabel="Solicitar laudo NR-16"
      related={[
        { label: 'NR-15: Insalubridade', href: '/normas/nr-15-insalubridade' },
        { label: 'NR-10: Eletricidade', href: '/normas/nr-10-eletricidade' },
        { label: 'LTCAT — laudo técnico previdenciário', href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo' },
        { label: 'PPP eletrônico (S-2240)', href: '/normas/ppp-eletronico' },
      ]}
    />
  );
}
