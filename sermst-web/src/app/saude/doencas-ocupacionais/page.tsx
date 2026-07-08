import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Doenças ocupacionais: exemplos e prevenção | SERMST',
  description:
    'Entenda o que são doenças ocupacionais, exemplos comuns, responsabilidade da empresa, relação com PCMSO, PGR, CAT e perícia trabalhista.',
  alternates: { canonical: 'https://sermst.com.br/saude/doencas-ocupacionais' },
  openGraph: {
    title: 'Doenças ocupacionais: exemplos e prevenção | SERMST',
    description:
      'Guia para empresas sobre doenças ocupacionais: LER/DORT, perda auditiva, dermatites, transtornos mentais, CAT, PCMSO e prevenção.',
    url: 'https://sermst.com.br/saude/doencas-ocupacionais',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function DoencasOcupacionaisPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="Voltar para saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/doencas-ocupacionais"
      badgeText="Saúde Ocupacional"
      coverImage={{ src: '/images/site/corporate-team.jpg', alt: 'Equipe analisando prevenção de doenças ocupacionais na empresa' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      readingTime="10 min"
      h1="Doenças ocupacionais: exemplos, responsabilidade e prevenção"
      intro="Doença ocupacional é aquela causada ou agravada pelas condições de trabalho. Para a empresa, o risco aparece quando PGR, PCMSO, exames, treinamentos e registros não conseguem demonstrar prevenção real."
      quickAnswer={
        <p>
          Doenças ocupacionais incluem problemas como LER/DORT, perda auditiva induzida por ruído, dermatites, transtornos mentais relacionados ao trabalho, doenças respiratórias e agravamentos provocados por exposições ocupacionais.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que são doenças ocupacionais',
          body: (
            <>
              <p>
                Doenças ocupacionais são condições de saúde relacionadas ao trabalho. Podem ser causadas diretamente pela atividade ou agravadas por exposições, ritmo, postura, agentes físicos, químicos, biológicos, ergonômicos ou psicossociais.
              </p>
              <p>
                A discussão raramente fica apenas na medicina. Quando há suspeita de nexo com o trabalho, entram PCMSO, PGR, CAT, afastamento, estabilidade, perícia e eventual responsabilidade trabalhista.
              </p>
            </>
          ),
        },
        {
          title: 'Exemplos comuns',
          body: (
            <ul>
              <li><strong>LER/DORT:</strong> lesões por esforço repetitivo e distúrbios osteomusculares.</li>
              <li><strong>PAIR:</strong> perda auditiva induzida por ruído ocupacional.</li>
              <li><strong>Dermatites ocupacionais:</strong> contato com produtos químicos, luvas, solventes ou agentes irritantes.</li>
              <li><strong>Doenças respiratórias:</strong> poeiras, fumos, vapores ou agentes biológicos.</li>
              <li><strong>Transtornos mentais relacionados ao trabalho:</strong> quando fatores psicossociais estão presentes na organização do trabalho.</li>
            </ul>
          ),
        },
        {
          title: 'Principais causas dentro das empresas',
          body: (
            <ul>
              <li><strong>Riscos ergonômicos:</strong> repetitividade, postura forçada, levantamento de peso e ritmo intenso.</li>
              <li><strong>Riscos físicos:</strong> ruído, calor, vibração, radiação e pressão anormal.</li>
              <li><strong>Riscos químicos:</strong> poeiras, fumos, vapores, solventes e produtos irritantes.</li>
              <li><strong>Riscos biológicos:</strong> contato com materiais contaminados, pacientes, resíduos ou ambientes insalubres.</li>
              <li><strong>Riscos psicossociais:</strong> assédio, sobrecarga, conflito, pressão excessiva e falhas na organização do trabalho.</li>
            </ul>
          ),
        },
        {
          title: 'Doença profissional e doença do trabalho: qual a diferença?',
          body: (
            <>
              <p>
                Doença profissional é aquela ligada diretamente ao exercício de determinada atividade. Doença do trabalho é aquela adquirida ou agravada pelas condições especiais em que o trabalho é realizado. Na prática empresarial, as duas exigem atenção porque podem gerar discussão sobre nexo, CAT, afastamento, estabilidade e indenização.
              </p>
              <p>
                Para o RH, a pergunta mais importante é: a empresa consegue demonstrar que avaliou riscos, monitorou saúde, adotou medidas preventivas e reagiu quando surgiram sinais de adoecimento?
              </p>
            </>
          ),
        },
        {
          title: 'Quando a empresa pode ser responsabilizada',
          body: (
            <>
              <p>
                A responsabilidade pode surgir quando existe nexo entre a doença e o trabalho, especialmente se a empresa não demonstrar controle de risco, acompanhamento médico, treinamento, EPI adequado e medidas preventivas.
              </p>
              <p>
                A defesa fica mais forte quando os documentos conversam: PGR identifica risco, PCMSO monitora saúde, ASO registra aptidão, exames complementares acompanham exposições e a empresa age diante de sinais de agravamento.
              </p>
            </>
          ),
        },
        {
          title: 'Papel do PCMSO e dos exames',
          body: (
            <>
              <p>
                O PCMSO deve definir quais exames ocupacionais são necessários conforme os riscos da função. Em ambientes com ruído, por exemplo, audiometria periódica pode ser essencial. Em exposições químicas, exames complementares podem ser definidos pelo médico responsável.
              </p>
              <p>
                PCMSO genérico e exame padrão para todo mundo deixam lacuna técnica. A vigilância médica precisa seguir os riscos reais da empresa.
              </p>
            </>
          ),
        },
        {
          title: 'Como o exame periódico ajuda a detectar sinais cedo',
          body: (
            <>
              <p>
                O exame periódico não deve ser visto como burocracia. Ele é uma forma de acompanhar se a saúde do trabalhador está sendo afetada pela função, pelo ambiente ou pelo ritmo de trabalho.
              </p>
              <p>
                Quando o PCMSO é bem feito, exames como audiometria, avaliação clínica, exames laboratoriais ou avaliação direcionada ajudam a perceber alterações antes que o problema vire afastamento, CAT ou ação trabalhista.
              </p>
            </>
          ),
        },
        {
          title: 'Sinais de alerta que o RH não deve ignorar',
          body: (
            <ul>
              <li>Queixas repetidas da mesma função, setor ou atividade.</li>
              <li>Aumento de atestados, afastamentos ou restrições médicas.</li>
              <li>Resultados alterados em exames periódicos ou complementares.</li>
              <li>Relatos de dor, fadiga, ansiedade, perda auditiva, irritações ou sintomas respiratórios.</li>
              <li>Acidentes leves ou quase acidentes ligados ao mesmo risco.</li>
            </ul>
          ),
        },
        {
          title: 'CAT em caso de doenca ocupacional',
          body: (
            <>
              <p>
                Quando há suspeita ou confirmação de doença relacionada ao trabalho, pode haver necessidade de CAT. A omissão da CAT não elimina o problema; muitas vezes apenas transfere a narrativa para trabalhador, sindicato, médico ou INSS.
              </p>
              <p>
                O caminho mais seguro é avaliar tecnicamente, documentar a decisão e corrigir o risco de origem quando houver relação com a atividade.
              </p>
            </>
          ),
        },
        {
          title: 'Doença ocupacional em perícia trabalhista',
          body: (
            <>
              <p>
                Em perícia, o ponto central é o nexo entre doença e trabalho. O perito avalia documentos, histórico ocupacional, exames, riscos da função, medidas de prevenção, uso de EPI, ergonomia e coerência entre PGR e PCMSO.
              </p>
              <p>
                Por isso, a empresa que só organiza documentos depois que recebe a reclamação trabalhista começa em desvantagem. A prova mais forte é aquela produzida antes do conflito, na rotina normal de prevenção.
              </p>
            </>
          ),
        },
        {
          title: 'Como prevenir doencas ocupacionais',
          body: (
            <ol>
              <li>Manter PGR atualizado e coerente com a operação real.</li>
              <li>Revisar PCMSO e exames por função, não por modelo genérico.</li>
              <li>Controlar EPI, EPC, treinamentos e orientações.</li>
              <li>Investigar queixas recorrentes antes de virar afastamento.</li>
              <li>Registrar medidas corretivas e evidências de acompanhamento.</li>
            </ol>
          ),
        },
        {
          title: 'Documentos que ajudam na defesa da empresa',
          body: (
            <p>
              A defesa técnica costuma depender de coerência documental. PGR, PCMSO, ASO, exames complementares, prontuários ocupacionais, treinamentos, EPI/EPC, avaliação ergonômica, registros de orientação e medidas corretivas precisam contar a mesma história. Quando cada documento aponta para um lado, a empresa perde força em perícia.
            </p>
          ),
        },
        {
          title: 'Como a SERMST atua na prevenção',
          body: (
            <p>
              A SERMST integra medicina ocupacional, segurança do trabalho e leitura pericial para que a empresa não trate doença ocupacional apenas quando o problema já virou afastamento ou processo. O trabalho envolve revisar riscos, exames, documentos, sinais de alerta e medidas corretivas com foco em prevenção e defesa técnica.
            </p>
          ),
        },
      ]}
      faq={[
        {
          q: 'Toda doença do trabalhador é ocupacional?',
          a: 'Não. É preciso avaliar se há relação causal ou concausal com o trabalho, exposição, organização da atividade ou agravamento pelo ambiente laboral.',
        },
        {
          q: 'LER/DORT pode gerar processo trabalhista?',
          a: 'Sim, especialmente quando há repetitividade, ergonomia inadequada, falta de pausa, ausência de AET ou falha de acompanhamento médico.',
        },
        {
          q: 'Doença ocupacional exige CAT?',
          a: 'Pode exigir quando há suspeita ou confirmação de relação com o trabalho. O caso precisa ser avaliado tecnicamente.',
        },
        {
          q: 'Como a empresa prova que preveniu?',
          a: 'Com PGR, PCMSO, ASO, exames, treinamentos, controle de EPI/EPC, registros de orientação e evidência de medidas corretivas.',
        },
        {
          q: 'Risco psicossocial pode virar doença ocupacional?',
          a: 'Pode haver discussão quando fatores da organização do trabalho contribuem para adoecimento. Por isso riscos psicossociais precisam ser avaliados na gestão de SST.',
        },
        {
          q: 'Exame periódico ajuda a prevenir doença ocupacional?',
          a: 'Sim. Ele permite acompanhar sinais de agravamento e orientar medidas antes que o problema vire afastamento, CAT ou processo.',
        },
        {
          q: 'Doença ocupacional sempre gera estabilidade?',
          a: 'Não automaticamente. A estabilidade depende do conjunto do caso, incluindo nexo com o trabalho e benefício previdenciário quando aplicável.',
        },
      ]}
      maxFaqItems={8}
      sidebarTitle="Quer reduzir risco de doença ocupacional?"
      sidebarHook="A SERMST integra PCMSO, PGR, exames e leitura técnica para prevenir afastamentos, CAT mal conduzida e passivo trabalhista."
      sidebarCtaLabel="Revisar PCMSO e PGR"
      sidebarCtaHref="/servicos/pcmso-nr07-programa/sao-paulo"
      related={[
        { label: 'PCMSO NR-07', href: '/servicos/pcmso-nr07-programa' },
        { label: 'PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
        { label: 'Calculadora CNAE: grau de risco e obrigações SST', href: '/rh/calculadora-cnae-grau-de-risco' },
        { label: 'CAT: acidente de trabalho', href: '/rh/cat-acidente-de-trabalho' },
        { label: 'Perícia trabalhista', href: '/servicos/pericia-trabalhista-assistente-tecnico' },
      ]}
    />
  );
}
