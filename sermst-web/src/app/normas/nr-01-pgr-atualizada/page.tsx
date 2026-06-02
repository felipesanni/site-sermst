import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Norma Regulamentadora 01 (NR-01): PGR e GRO | SERMST',
  description:
    'Entenda a Norma Regulamentadora 01 (NR-01): GRO, PGR, fatores de risco psicossociais, dispensas para pequenos negócios e o que sua empresa precisa revisar.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-01-pgr-atualizada' },
  openGraph: {
    title: 'Norma Regulamentadora 01 (NR-01): PGR, GRO e obrigações | SERMST',
    description:
      'Entenda a NR-1 atualizada e o Programa de Gerenciamento de Riscos (PGR): quem precisa, o que exige e como estruturar o GRO para ficar em conformidade.',
    url: 'https://sermst.com.br/normas/nr-01-pgr-atualizada',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR01Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/articles/normas-nr.jpg", alt: "Documentação do Programa de Gerenciamento de Riscos PGR conforme NR-01 atualizada" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-01-pgr-atualizada"
      badgeText="NR-01"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-06-02',
      }}

      h1="Norma Regulamentadora 01 (NR-01): PGR, GRO e riscos psicossociais"
      intro="A Norma Regulamentadora 01 organiza as disposições gerais de SST e o Gerenciamento de Riscos Ocupacionais (GRO). Desde 26 de maio de 2026, os fatores de risco psicossociais relacionados ao trabalho precisam entrar expressamente nessa leitura. Veja como revisar a rotina da empresa sem confundir obrigação com checklist genérico."
      sections={[
        {
          title: 'O que é a Norma Regulamentadora 01 (NR-01)',
          body: (
            <>
              <p>
                A NR-01 estabelece as disposições gerais sobre Segurança e Saúde no Trabalho e estrutura o <strong>GRO — Gerenciamento de Riscos Ocupacionais</strong>. Como regra, esse gerenciamento precisa ser materializado em um <strong>PGR — Programa de Gerenciamento de Riscos</strong>, com inventário de riscos e plano de ação coerentes com a operação.
              </p>
            </>
          ),
        },
        {
          title: 'O que mudou na atualização',
          body: (
            <>
              <p>
                A mudança mais recente é a inclusão expressa dos <strong>fatores de risco psicossociais relacionados ao trabalho</strong> no GRO. A análise precisa considerar fatores que possam afetar a saúde mental dos trabalhadores, como:
              </p>
              <ul>
                <li>Carga mental excessiva</li>
                <li>Pressão por produtividade fora do razoável</li>
                <li>Assédio moral e sexual</li>
                <li>Conflitos crônicos não resolvidos</li>
                <li>Insegurança quanto ao vínculo (terceirização agressiva, contratos precários)</li>
                <li>Falta de autonomia ou de clareza no papel</li>
              </ul>
              <p>
                Tudo isso passa a ser fator que precisa estar mapeado no inventário de riscos, com plano de ação e acompanhamento.
              </p>
            </>
          ),
        },
        {
          title: 'Quem precisa cumprir e a partir de quando',
          body: (
            <>
              <p>
                Como regra, organizações com empregados precisam manter o gerenciamento de riscos ocupacionais coerente com a operação. A NR-01 prevê tratamentos simplificados e hipóteses específicas de dispensa de elaboração do PGR: o MEI é dispensado de elaborar o programa, e determinadas ME e EPP de grau de risco 1 ou 2 também podem ser dispensadas quando prestam as informações digitais e não identificam exposições ocupacionais a agentes físicos, químicos e biológicos.
              </p>
              <p>
                Essas dispensas não significam ausência de responsabilidade em SST. Sobre os fatores psicossociais especificamente, a nova redação entrou em vigor em <strong>26 de maio de 2026</strong>. A empresa deve avaliar se o GRO e, quando aplicável, o PGR identificam fatores relacionados ao trabalho e se o plano de ação precisa ser atualizado.
              </p>
            </>
          ),
        },
        {
          title: 'O que fazer agora (passo a passo)',
          body: (
            <ol>
              <li><strong>Auditar o PGR atual.</strong> Verificar se o inventário de riscos considera fatores psicossociais relacionados ao trabalho e se o plano de ação precisa ser atualizado após a vigência de 26 de maio de 2026.</li>
              <li><strong>Mapear os riscos psicossociais reais.</strong> Por área, por função, por turno. Pesquisa anônima com a equipe ajuda muito — e a falta dela já é evidência fraca.</li>
              <li><strong>Definir plano de ação.</strong> Para cada risco identificado, qual é a medida de controle, quem é o responsável e qual o prazo.</li>
              <li><strong>Atualizar PCMSO em paralelo.</strong> O PCMSO precisa refletir os mesmos riscos do PGR. Se um menciona risco psicossocial e outro não, há inconsistência técnica.</li>
              <li><strong>Documentar e treinar lideranças.</strong> Gerentes e supervisores precisam entender o que mudou — e ter evidência formal disso.</li>
              <li><strong>Cronograma de revisão.</strong> PGR não é &quot;feito uma vez&quot;. A avaliação de riscos deve ser revista no máximo a cada 2 anos, ou antes quando ocorrerem as situações previstas na NR-01.</li>
            </ol>
          ),
        },
        {
          title: 'Custo de não fazer',
          body: (
            <>
              <p>
                Empresa sem PGR atualizado responde em três frentes ao mesmo tempo:
              </p>
              <ul>
                <li><strong>Multa direta do MTE</strong> — pode chegar a R$ 6 mil por infração, multiplicada por trabalhador exposto.</li>
                <li><strong>Inconsistência no eSocial</strong> quando o evento S-2240 não reflete corretamente os riscos ocupacionais.</li>
                <li><strong>Responsabilização em ação trabalhista</strong> quando a documentação e as medidas de prevenção não demonstram o cumprimento do dever de cuidado.</li>
              </ul>
              <p>
                Em qualquer dos três, o custo do passivo é múltiplo do que custaria atualizar o documento.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quem assina o PGR?',
          a: 'O PGR é elaborado por profissional legalmente habilitado (engenheiro de segurança, médico do trabalho ou técnico em segurança, dependendo do escopo) e assinado pela empresa. A responsabilidade técnica é do profissional; a responsabilidade do conteúdo refletir a realidade é da empresa.',
        },
        {
          q: 'PGR e PPRA são a mesma coisa?',
          a: 'Não. O PPRA foi extinto em 2022. O PGR é o substituto, mais amplo (vai além de riscos físicos, químicos e biológicos). Empresa que ainda chama de PPRA e tem o documento antigo está desatualizada.',
        },
        {
          q: 'Como gerenciar risco psicossocial sem virar terapia coletiva?',
          a: 'A NR-01 não exige terapia. Exige identificação, avaliação e medidas de controle organizacional — clareza de papel, distribuição de carga, canal de denúncia, treinamento de liderança. É gestão, não psicologia.',
        },
        {
          q: 'Quanto tempo leva para fazer um PGR completo?',
          a: 'Empresa com até 50 funcionários: 2 a 4 semanas. Empresa de médio porte: 6 a 10 semanas. O prazo depende mais da disponibilidade da liderança em participar da elaboração do que da consultoria.',
        },
        {
          q: 'PGR feito uma vez vale por quanto tempo?',
          a: 'A avaliação de riscos deve ser revista no máximo a cada 2 anos e também quando ocorrerem mudanças relevantes na operação, acidentes, doenças relacionadas ao trabalho ou outras situações previstas na NR-01. Organizações certificadas em sistema de gestão de SST podem ter prazo de até 3 anos.',
        },
      ]}
      sidebarTitle="PGR atualizado, com riscos psicossociais?"
      sidebarHook="A SERMST faz auditoria gratuita do seu PGR atual. Se estiver desatualizado, mostramos exatamente o que precisa ser revisto — sem compromisso."
      sidebarCtaLabel="Auditar meu PGR"
      sidebarCtaHref="/contato"
      related={[
        { label: 'Serviço completo de PGR (NR-01)', href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo' },
        { label: 'NR-15: Insalubridade', href: '/normas/nr-15-insalubridade' },
        { label: 'NR-16: Periculosidade', href: '/normas/nr-16-periculosidade' },
        { label: 'PCMSO NR-07: programa', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
      ]}
    />
  );
}
