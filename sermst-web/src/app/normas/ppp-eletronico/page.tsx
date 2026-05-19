import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'PPP eletrônico: Perfil Profissiográfico Previdenciário no eSocial | SERMST',
  description:
    'O PPP eletrônico via S-2240 é base para aposentadoria especial e previdenciária. Erro no documento gera passivo. Veja regras, prazos e responsabilidades.',
  alternates: { canonical: 'https://sermst.com.br/normas/ppp-eletronico' },
  openGraph: {
    title: 'PPP Eletrônico: o que é, como gerar e obrigações no eSocial | SERMST',
    description:
      'Guia completo sobre o Perfil Profissiográfico Previdenciário eletrônico: quem precisa emitir, como gerar no eSocial e o que acontece sem o PPP no desligamento.',
    url: 'https://sermst.com.br/normas/ppp-eletronico',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function PPPPage() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/articles/normas-nr.jpg", alt: "Perfil Profissiográfico Previdenciário eletrônico PPP-e em sistema de SST" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas/ppp-eletronico"
      pageUrl="https://sermst.com.br/normas/ppp-eletronico"
      badgeText="PPP eletrônico"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="PPP eletrônico: o que é, como funciona e por que ele importa"
      intro="O PPP eletrônico é o documento que descreve as condições ambientais do trabalho de cada colaborador para fins previdenciários. Obrigatório no eSocial via evento S-2240, é base para aposentadoria especial e responsabilidade direta da empresa."
      sections={[
        {
          title: 'O que é o PPP',
          body: (
            <>
              <p>
                PPP significa <strong>Perfil Profissiográfico Previdenciário</strong>. É o documento que descreve, ao longo de toda a vida laboral do trabalhador, as atividades exercidas, os agentes nocivos a que esteve exposto, a intensidade dessa exposição e os equipamentos de proteção utilizados.
              </p>
              <p>
                Até 2022, o PPP era em papel — entregue ao trabalhador no fim do contrato. Hoje é predominantemente eletrônico, transmitido pelo evento <strong>S-2240</strong> do eSocial. O documento físico continua obrigatório em alguns casos, mas a base de informação migrou para a estrutura eletrônica.
              </p>
            </>
          ),
        },
        {
          title: 'Para que serve',
          body: (
            <ul>
              <li><strong>Aposentadoria especial</strong> — base para concessão de aposentadoria com tempo reduzido para quem trabalhou exposto a agentes nocivos.</li>
              <li><strong>Aposentadoria por tempo de contribuição</strong> — comprova períodos especiais para somar.</li>
              <li><strong>Auxílio-doença e auxílio-acidente</strong> — caracteriza a relação entre a doença e o trabalho.</li>
              <li><strong>Defesa em ação trabalhista</strong> por doença ocupacional ou adicional retroativo.</li>
              <li><strong>Cálculo do FAP</strong> da empresa — empresa com PPP consistente paga o que deve, nem mais nem menos.</li>
            </ul>
          ),
        },
        {
          title: 'Quais informações entram no PPP',
          body: (
            <ol>
              <li><strong>Dados do trabalhador</strong> — CPF, NIT, nome, datas.</li>
              <li><strong>Dados da empresa</strong> — CNPJ, razão social, CNAE, grau de risco.</li>
              <li><strong>Função e descrição da atividade</strong> — o que o trabalhador realmente faz no posto.</li>
              <li><strong>Agentes nocivos</strong> — químicos, físicos (ruído, calor, vibração, radiação), biológicos, ergonômicos.</li>
              <li><strong>Intensidade da exposição</strong> — quantitativa quando aplicável (decibéis para ruído, ppm para químicos, etc.).</li>
              <li><strong>Habitualidade e permanência</strong> — exposição habitual e permanente é o que vale para aposentadoria especial.</li>
              <li><strong>EPI e EPC fornecidos</strong> — descrição, número de CA, eficácia.</li>
              <li><strong>Responsável técnico</strong> pelo registro ambiental (engenheiro/médico do trabalho).</li>
              <li><strong>Registro de monitorações biológicas</strong> em algumas exposições.</li>
            </ol>
          ),
        },
        {
          title: 'O que liga PPP a LTCAT, PGR e PCMSO',
          body: (
            <>
              <p>
                O PPP é o &quot;resultado&quot; — o documento que junta tudo. Os insumos vêm de outros documentos:
              </p>
              <ul>
                <li><strong>LTCAT</strong> caracteriza tecnicamente a exposição a agentes nocivos.</li>
                <li><strong>PGR</strong> identifica e avalia os riscos da operação.</li>
                <li><strong>PCMSO</strong> define a vigilância médica e os exames específicos.</li>
                <li><strong>AET (NR-17)</strong> caracteriza riscos ergonômicos.</li>
                <li><strong>Laudos NR-15 e NR-16</strong> caracterizam insalubridade e periculosidade.</li>
              </ul>
              <p>
                Quando esses documentos não conversam entre si, o PPP fica inconsistente. Em perícia previdenciária ou trabalhista, a inconsistência aparece — e desmonta defesa.
              </p>
            </>
          ),
        },
        {
          title: 'Os erros que viram passivo',
          body: (
            <ol>
              <li><strong>S-2240 fora do prazo.</strong> Multa automática no eSocial.</li>
              <li><strong>S-2240 com agente nocivo errado.</strong> Pode gerar concessão indevida de aposentadoria especial (custo extra para Previdência) ou negação de direito legítimo (gera ação contra a empresa).</li>
              <li><strong>EPI eficaz declarado sem evidência.</strong> Empresa diz no S-2240 que EPI &quot;neutraliza&quot; o agente, mas não tem ficha de entrega nem fiscalização. Em perícia, declaração cai.</li>
              <li><strong>Inconsistência entre PPP e LTCAT.</strong> Documentos contam histórias diferentes. Perito identifica imediatamente.</li>
              <li><strong>Não emissão na rescisão.</strong> Ex-trabalhador procura o INSS, descobre que não há PPP. Ação contra a empresa para emitir + indenização por atraso.</li>
              <li><strong>Não atualização durante o contrato.</strong> Mudança de função, mudança de operação, mudança de risco. PPP não atualizado é evidência de descumprimento.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'PPP em papel ainda existe?',
          a: 'Sim, em algumas situações. A migração para eletrônico via S-2240 é o padrão, mas o trabalhador pode pedir versão impressa para uso em pedido de aposentadoria. Empresa precisa estar preparada para emitir o PPP em PDF a partir das informações do eSocial.',
        },
        {
          q: 'Quem assina o PPP?',
          a: 'Representante legal da empresa (administrador, sócio, ou procurador). Os dados ambientais são de responsabilidade técnica do profissional habilitado (engenheiro ou médico do trabalho) que faz o LTCAT. A empresa responde pela transmissão correta no eSocial.',
        },
        {
          q: 'Trabalhador administrativo precisa de PPP?',
          a: 'Sim. Todo trabalhador CLT tem direito ao PPP, independente de exposição a agente nocivo. Para administrativo sem exposição, o PPP indica isso — ausência de agente. O documento existe; o conteúdo varia.',
        },
        {
          q: 'EPI &quot;neutraliza&quot; o agente para fins de aposentadoria especial?',
          a: 'É controverso e juridicamente decidido caso a caso. STF estabeleceu que EPI eficaz pode descaracterizar exposição para aposentadoria especial em alguns agentes (especialmente ruído). Mas exige evidência robusta: CA do EPI, ficha de entrega, fiscalização do uso, treinamento. Sem isso, a alegação cai.',
        },
        {
          q: 'PPP retroativo — empresa precisa fazer?',
          a: 'Para trabalhadores que já saíram, sim, se solicitado. Empresa precisa reconstituir o PPP com base em documentos da época (LTCAT, registros, ASO). Pode ser trabalhoso para períodos antigos — por isso documentação contemporânea é o melhor caminho.',
        },
      ]}
      sidebarTitle="Seu PPP/S-2240 está consistente?"
      sidebarHook="PPP errado é passivo dobrado: na Previdência (FAP, aposentadoria especial) e na Justiça do Trabalho. A SERMST audita a consistência entre LTCAT, PGR, PCMSO e PPP."
      sidebarCtaLabel="Auditar PPP/S-2240"
      related={[
        { label: 'LTCAT — laudo técnico previdenciário', href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo' },
        { label: 'NR-15: Insalubridade', href: '/normas/nr-15-insalubridade' },
        { label: 'NR-16: Periculosidade', href: '/normas/nr-16-periculosidade' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
