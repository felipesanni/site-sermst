import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-01 atualizada: PGR, riscos psicossociais é o que sua empresa precisa fazer | SERMST',
  description:
    'A NR-01 foi atualizada e agora exige inclusão de riscos psicossociais no PGR. Guia direto sobré o que mudou, o que sua empresa precisa fazer e os prazos que estão correndo. Por SERMST, 40 anos em medicina e segurança do trabalho.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-01-pgr-atualizada' },
};

export default function NR01Page() {
  return (
    <BlockbusterArticle
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas/nr-01-pgr-atualizada"
      pageUrl="https://sermst.com.br/normas/nr-01-pgr-atualizada"
      badgeText="NR-01"
      h1="NR-01 atualizada: o que mudou é o que a sua empresa precisa fazer"
      intro="A NR-01 é o documento-mãe da segurança do trabalho. A atualização recente trouxe a obrigação de incluir riscos psicossociais no PGR — e prazos que já estão correndo. Veja o que isso significa na prática."
      sections={[
        {
          title: 'O que é a NR-01 (em uma frase)',
          body: (
            <>
              <p>
                A NR-01 estabelece as disposições gerais sobre Segurança e Saúde no Trabalho e exige que toda empresa elabore o <strong>PGR — Programa de Gerenciamento de Riscos</strong>. É o documento que identifica, avalia e define como controlar os riscos ocupacionais da operação. Sem PGR válido, a empresa fica exposta a multa, autuação e responsabilização em caso de acidente.
              </p>
            </>
          ),
        },
        {
          title: 'O que mudou na atualização',
          body: (
            <>
              <p>
                A grande mudança é a inclusão obrigatória dos <strong>riscos psicossociais</strong> no PGR. Até a atualização, o PGR cobria principalmente riscos físicos, químicos, biológicos, ergonômicos e de acidente. A nova redação exige que a empresa também identifique e gerencie:
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
                Toda empresa com pelo menos um empregado regido pela CLT precisa ter PGR atualizado. Empresas grau de risco 1 ou 2 com até 20 funcionários têm um regime simplificado, mas não estão dispensadas. Microempresas e MEIs sem empregados continuam fora.
              </p>
              <p>
                Sobre os riscos psicossociais especificamente, a obrigação entrou em vigor a partir de maio de 2025. <strong>Empresas que não revisaram o PGR depois disso estão tecnicamente desconformes.</strong> A fiscalização do MTE ainda está ramping up, mas em ação trabalhista a desconformidade já é argumento utilizado.
              </p>
            </>
          ),
        },
        {
          title: 'O que fazer agora (passo a passo)',
          body: (
            <ol>
              <li><strong>Auditar o PGR atual.</strong> Verificar a data da última revisão e se ele inclui riscos psicossociais. Se for anterior a maio/2025, está desatualizado.</li>
              <li><strong>Mapear os riscos psicossociais reais.</strong> Por área, por função, por turno. Pesquisa anônima com a equipe ajuda muito — e a falta dela já é evidência fraca.</li>
              <li><strong>Definir plano de ação.</strong> Para cada risco identificado, qual é a medida de controle, quem é o responsável e qual o prazo.</li>
              <li><strong>Atualizar PCMSO em paralelo.</strong> O PCMSO precisa refletir os mesmos riscos do PGR. Se um menciona risco psicossocial e outro não, há inconsistência técnica.</li>
              <li><strong>Documentar e treinar lideranças.</strong> Gerentes e supervisores precisam entender o que mudou — e ter evidência formal disso.</li>
              <li><strong>Cronograma de revisão</strong>. PGR não é &quot;feito uma vez&quot;. Tem que ser revisado anualmente e sempre que houver mudança significativa na operação.</li>
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
                <li><strong>Multa automática no eSocial</strong> via S-2240 incoerente.</li>
                <li><strong>Responsabilização em ação trabalhista</strong> — falta de PGR é prova quase automática de descumprimento da obrigação de cuidado (caput do art. 157, CLT).</li>
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
          a: 'Tem que ser revisado a cada 2 anos no mínimo (1 ano para empresas grau de risco 3 ou 4) e sempre que houver mudança significativa na operação — nova máquina, mudança de layout, nova função. PGR antigo desatualizado vale menos do que não ter PGR para fins de defesa em ação.',
        },
      ]}
      sidebarTitle="PGR atualizado, com riscos psicossociais?"
      sidebarHook="A SERMST faz auditoria gratuita do seu PGR atual. Se estiver desatualizado, mostramos exatamenté o que precisa ser revisto — sem compromisso."
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
