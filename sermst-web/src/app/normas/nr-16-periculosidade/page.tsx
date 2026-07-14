import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-16: Periculosidade - adicional de 30% e laudo | SERMST',
  description:
    'A NR-16 define o adicional de periculosidade de 30%. Veja quem pode ter direito, como caracterizar por laudo e o risco de pagar sem base técnica.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-16-periculosidade' },
  openGraph: {
    title: 'NR-16: periculosidade, atividades e como documentar | SERMST',
    description:
      'Guia da NR-16 sobre atividades perigosas, adicional de periculosidade, laudo técnico e responsabilidades do empregador.',
    url: 'https://sermst.com.br/normas/nr-16-periculosidade',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR16Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: '/images/site/safety-equipment.jpg', alt: 'Área de risco com sinalização de periculosidade conforme NR-16' }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-16-periculosidade"
      badgeText="NR-16"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado - Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}
      h1="NR-16: quando há periculosidade e como documentar o enquadramento"
      intro="A NR-16 define quem pode ter direito ao adicional de periculosidade de 30%. Eletricidade, inflamáveis, explosivos, radiações e segurança patrimonial são exemplos clássicos. O enquadramento correto depende de análise técnica."
      quickAnswer={
        <p>
          A <strong>NR-16</strong> define quais atividades são consideradas perigosas e podem gerar
          <strong> adicional de periculosidade de 30% sobre o salário-base</strong>. Entre os casos mais conhecidos estão
          eletricidade, inflamáveis, explosivos, radiações ionizantes, segurança patrimonial e motociclismo profissional.
          O enquadramento e a descaracterização exigem <strong>laudo técnico assinado por profissional habilitado</strong>.
        </p>
      }
      sections={[
        {
          title: 'O que é a NR-16',
          body: (
            <>
              <p>
                A NR-16 estabelece quais atividades e operações são consideradas perigosas, ou seja, situações em que o
                trabalhador fica exposto a risco acentuado por causa da própria natureza da função.
              </p>
              <p>
                O adicional é de 30% sobre o salário-base do trabalhador. Diferentemente da insalubridade, a lógica aqui
                não gira em torno de grau mínimo, médio ou máximo, mas da caracterização do risco perigoso.
              </p>
            </>
          ),
        },
        {
          title: 'Atividades que costumam gerar direito ao adicional',
          body: (
            <ul>
              <li><strong>Inflamáveis e explosivos.</strong> Armazenamento, transporte ou manuseio dentro das hipóteses previstas em norma.</li>
              <li><strong>Radiações ionizantes.</strong> Atividades com fontes radioativas ou exposição típica do setor.</li>
              <li><strong>Energia elétrica.</strong> Atuação em sistemas elétricos de potência e situações equivalentes.</li>
              <li><strong>Segurança pessoal ou patrimonial.</strong> Vigilância, transporte de valores e funções correlatas.</li>
              <li><strong>Motociclismo profissional.</strong> Quando a motocicleta é meio de trabalho e não uso eventual.</li>
            </ul>
          ),
        },
        {
          title: 'O que precisa estar documentado para pagar ou para não pagar',
          body: (
            <>
              <ol>
                <li><strong>Laudo técnico de periculosidade</strong> assinado por engenheiro de segurança ou médico do trabalho habilitado.</li>
                <li><strong>PGR e PCMSO coerentes</strong> com a realidade operacional e com os riscos informados.</li>
                <li><strong>eSocial alinhado</strong>, especialmente quando a exposição interfere em eventos ocupacionais e previdenciários.</li>
                <li><strong>Descrição real da função</strong> e dos procedimentos de trabalho.</li>
                <li><strong>Folha de pagamento correta</strong>, quando o adicional for devido.</li>
              </ol>
              <p>
                Quando a empresa entende que não há periculosidade, o caminho também é técnico: laudo bem fundamentado,
                evidências objetivas e coerência documental.
              </p>
            </>
          ),
        },
        {
          title: 'Atenção especial aos motociclistas',
          body: (
            <>
              <p>
                Depois da regulamentação específica, muitas empresas passaram a errar no enquadramento de quem usa moto.
                O ponto principal é simples: <strong>não basta o empregado possuir moto; ela precisa ser instrumento de trabalho</strong>.
              </p>
              <p>Alguns cenários exigem análise fina:</p>
              <ul>
                <li>Vendedor externo que usa moto por escolha própria.</li>
                <li>Funcionário interno que usa a moto apenas ocasionalmente.</li>
                <li>Entregador, vistoriador ou técnico externo cuja rotina depende da motocicleta.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Erros comuns no enquadramento',
          body: (
            <ol>
              <li><strong>Não pagar quando a atividade é claramente enquadrável.</strong></li>
              <li><strong>Pagar sem laudo e sem critério.</strong> Isso dificulta explicar o enquadramento e manter coerência entre funções semelhantes.</li>
              <li><strong>Calcular sobre base incorreta.</strong></li>
              <li><strong>Desalinhamento entre laudo, folha, PGR, PPP e eSocial.</strong></li>
              <li><strong>Confundir insalubridade com periculosidade.</strong> As lógicas são diferentes e não podem ser tratadas como se fossem a mesma coisa.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Periculosidade pode ser cumulativa com insalubridade?',
          a: 'Em regra, não. O trabalhador normalmente opta pelo adicional mais vantajoso, salvo exceções específicas discutidas juridicamente.',
        },
        {
          q: 'O adicional de periculosidade incide sobre o quê?',
          a: 'Em regra, sobre o salário-base do trabalhador. Convenções coletivas podem trazer particularidades.',
        },
        {
          q: 'Empresa pode neutralizar periculosidade com EPI?',
          a: 'Na maior parte dos casos, não da mesma forma que se discute insalubridade. Muitas vezes a periculosidade decorre da própria atividade ou do contexto de exposição.',
        },
        {
          q: 'Quem assina o laudo de periculosidade?',
          a: 'Profissional legalmente habilitado, como engenheiro de segurança do trabalho ou médico do trabalho, conforme o caso.',
        },
        {
          q: 'Periculosidade sempre gera aposentadoria especial?',
          a: 'Não automaticamente. A análise previdenciária tem critérios próprios e precisa conversar com PPP, LTCAT e demais documentos.',
        },
        {
          q: 'Periculosidade e LTCAT são a mesma coisa?',
          a: 'Não. A periculosidade da NR-16 trata do adicional trabalhista de 30% em atividades perigosas. O LTCAT faz parte da base técnica previdenciária usada para sustentar PPP, S-2240 e análises ligadas à aposentadoria especial.',
        },
      ]}
      sidebarTitle="Sua empresa enquadra periculosidade do jeito certo?"
      sidebarHook="O laudo ajuda a verificar se o adicional é devido e a manter folha, PGR, PPP e eSocial coerentes com a operação."
      sidebarCtaLabel="Solicitar laudo NR-16"
      related={[
        { label: 'NR-15: Insalubridade', href: '/normas/nr-15-insalubridade' },
        { label: 'NR-10: Eletricidade', href: '/normas/nr-10-eletricidade' },
        { label: 'O que significa LTCAT', href: '/dicionario/o-que-e-ltcat' },
        { label: 'Serviço de LTCAT previdenciário', href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo' },
        { label: 'PPP eletrônico (S-2240)', href: '/normas/ppp-eletronico' },
      ]}
    />
  );
}
