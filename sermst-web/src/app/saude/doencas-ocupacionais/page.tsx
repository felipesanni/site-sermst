import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Doencas ocupacionais: exemplos e prevencao | SERMST',
  description:
    'Entenda o que sao doencas ocupacionais, exemplos comuns, responsabilidade da empresa, relacao com PCMSO, PGR, CAT e pericia trabalhista.',
  alternates: { canonical: 'https://sermst.com.br/saude/doencas-ocupacionais' },
  openGraph: {
    title: 'Doencas ocupacionais: exemplos e prevencao | SERMST',
    description:
      'Guia para empresas sobre doencas ocupacionais: LER/DORT, perda auditiva, dermatites, transtornos mentais, CAT, PCMSO e prevencao.',
    url: 'https://sermst.com.br/saude/doencas-ocupacionais',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function DoencasOcupacionaisPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saude Ocupacional"
      hubLabelShort="Voltar para saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/doencas-ocupacionais"
      badgeText="Saude Ocupacional"
      coverImage={{ src: '/images/site/corporate-team.jpg', alt: 'Equipe analisando prevencao de doencas ocupacionais na empresa' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Tecnico em Seguranca do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      h1="Doencas ocupacionais: exemplos, responsabilidade e prevencao"
      intro="Doenca ocupacional e aquela causada ou agravada pelas condicoes de trabalho. Para a empresa, o risco aparece quando PGR, PCMSO, exames, treinamentos e registros nao conseguem demonstrar prevencao real."
      quickAnswer={
        <p>
          Doencas ocupacionais incluem problemas como LER/DORT, perda auditiva induzida por ruido, dermatites, transtornos mentais relacionados ao trabalho, doencas respiratorias e agravamentos provocados por exposicoes ocupacionais.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que sao doencas ocupacionais',
          body: (
            <>
              <p>
                Doencas ocupacionais sao condicoes de saude relacionadas ao trabalho. Podem ser causadas diretamente pela atividade ou agravadas por exposicoes, ritmo, postura, agentes fisicos, quimicos, biologicos, ergonomicos ou psicossociais.
              </p>
              <p>
                A discussao raramente fica apenas na medicina. Quando ha suspeita de nexo com o trabalho, entram PCMSO, PGR, CAT, afastamento, estabilidade, pericia e eventual responsabilidade trabalhista.
              </p>
            </>
          ),
        },
        {
          title: 'Exemplos comuns',
          body: (
            <ul>
              <li><strong>LER/DORT:</strong> lesoes por esforco repetitivo e disturbios osteomusculares.</li>
              <li><strong>PAIR:</strong> perda auditiva induzida por ruido ocupacional.</li>
              <li><strong>Dermatites ocupacionais:</strong> contato com produtos quimicos, luvas, solventes ou agentes irritantes.</li>
              <li><strong>Doencas respiratorias:</strong> poeiras, fumos, vapores ou agentes biologicos.</li>
              <li><strong>Transtornos mentais relacionados ao trabalho:</strong> quando fatores psicossociais estao presentes na organizacao do trabalho.</li>
            </ul>
          ),
        },
        {
          title: 'Quando a empresa pode ser responsabilizada',
          body: (
            <>
              <p>
                A responsabilidade pode surgir quando existe nexo entre a doenca e o trabalho, especialmente se a empresa nao demonstrar controle de risco, acompanhamento medico, treinamento, EPI adequado e medidas preventivas.
              </p>
              <p>
                A defesa fica mais forte quando os documentos conversam: PGR identifica risco, PCMSO monitora saude, ASO registra aptidao, exames complementares acompanham exposicoes e a empresa age diante de sinais de agravamento.
              </p>
            </>
          ),
        },
        {
          title: 'Papel do PCMSO e dos exames',
          body: (
            <>
              <p>
                O PCMSO deve definir quais exames ocupacionais sao necessarios conforme os riscos da funcao. Em ambientes com ruido, por exemplo, audiometria periodica pode ser essencial. Em exposicoes quimicas, exames complementares podem ser definidos pelo medico responsavel.
              </p>
              <p>
                PCMSO generico e exame padrao para todo mundo deixam lacuna tecnica. A vigilancia medica precisa seguir os riscos reais da empresa.
              </p>
            </>
          ),
        },
        {
          title: 'CAT em caso de doenca ocupacional',
          body: (
            <>
              <p>
                Quando ha suspeita ou confirmacao de doenca relacionada ao trabalho, pode haver necessidade de CAT. A omissao da CAT nao elimina o problema; muitas vezes apenas transfere a narrativa para trabalhador, sindicato, medico ou INSS.
              </p>
              <p>
                O caminho mais seguro e avaliar tecnicamente, documentar a decisao e corrigir o risco de origem quando houver relacao com a atividade.
              </p>
            </>
          ),
        },
        {
          title: 'Como prevenir doencas ocupacionais',
          body: (
            <ol>
              <li>Manter PGR atualizado e coerente com a operacao real.</li>
              <li>Revisar PCMSO e exames por funcao, nao por modelo generico.</li>
              <li>Controlar EPI, EPC, treinamentos e orientacoes.</li>
              <li>Investigar queixas recorrentes antes de virar afastamento.</li>
              <li>Registrar medidas corretivas e evidencias de acompanhamento.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Toda doenca do trabalhador e ocupacional?',
          a: 'Nao. E preciso avaliar se ha relacao causal ou concausal com o trabalho, exposicao, organizacao da atividade ou agravamento pelo ambiente laboral.',
        },
        {
          q: 'LER/DORT pode gerar processo trabalhista?',
          a: 'Sim, especialmente quando ha repetitividade, ergonomia inadequada, falta de pausa, ausencia de AET ou falha de acompanhamento medico.',
        },
        {
          q: 'Doenca ocupacional exige CAT?',
          a: 'Pode exigir quando ha suspeita ou confirmacao de relacao com o trabalho. O caso precisa ser avaliado tecnicamente.',
        },
        {
          q: 'Como a empresa prova que preveniu?',
          a: 'Com PGR, PCMSO, ASO, exames, treinamentos, controle de EPI/EPC, registros de orientacao e evidencia de medidas corretivas.',
        },
      ]}
      sidebarTitle="Quer reduzir risco de doenca ocupacional?"
      sidebarHook="A SERMST integra PCMSO, PGR, exames e leitura tecnica para prevenir afastamentos, CAT mal conduzida e passivo trabalhista."
      sidebarCtaLabel="Revisar PCMSO e PGR"
      related={[
        { label: 'PCMSO NR-07', href: '/servicos/pcmso-nr07-programa' },
        { label: 'PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
        { label: 'CAT: acidente de trabalho', href: '/rh/cat-acidente-de-trabalho' },
        { label: 'Pericia trabalhista', href: '/servicos/pericia-trabalhista-assistente-tecnico' },
        { label: 'Medico do trabalho', href: '/saude/medico-do-trabalho' },
      ]}
    />
  );
}
