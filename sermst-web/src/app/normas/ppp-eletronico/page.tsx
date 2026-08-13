import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'PPP Eletrônico: Perfil Profissiográfico | SERMST',
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
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/ppp-eletronico"
      badgeText="PPP eletrônico"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado em Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}

      h1="PPP eletrônico: o que é, como funciona e por que ele importa"
      intro="O PPP eletrônico reúne o histórico laboral e as informações declaradas pela empresa sobre exposição a agentes prejudiciais à saúde. Para períodos trabalhados desde 1º de janeiro de 2023, ele é emitido em meio eletrônico e pode ser consultado pelo segurado no Meu INSS."
      quickAnswer={
        <p>
          O <strong>PPP eletrônico</strong> (Perfil Profissiográfico Previdenciário) é formado a partir dos eventos de SST enviados ao eSocial, com papel central do <strong>S-2240</strong>. Ele registra as condições de trabalho e a exposição a agentes prejudiciais à saúde. Desde 2023, o segurado acessa o documento pelo <strong>Meu INSS</strong>. A empresa continua responsável por manter as informações corretas e atualizadas.
        </p>
      }
      sections={[
        {
          title: 'O que é o PPP',
          body: (
            <>
              <p>
                PPP significa <strong>Perfil Profissiográfico Previdenciário</strong>. É o documento que descreve, ao longo de toda a vida laboral do trabalhador, as atividades exercidas, os agentes nocivos a que esteve exposto, a intensidade dessa exposição e os equipamentos de proteção utilizados.
              </p>
              <p>
                Para períodos trabalhados até 31 de dezembro de 2022, o PPP em papel continua sendo usado. A partir de 1º de janeiro de 2023, o PPP eletrônico substituiu o documento físico para comprovação perante o INSS.
              </p>
            </>
          ),
        },
        {
          title: 'Para que serve',
          body: (
            <ul>
              <li><strong>Aposentadoria especial</strong>: informa os períodos de exposição que serão analisados pelo INSS.</li>
              <li><strong>Reconhecimento de tempo especial</strong>: apoia a análise previdenciária dos períodos trabalhados.</li>
              <li><strong>Conferência do histórico ocupacional</strong>: permite ao segurado verificar o que a empresa declarou.</li>
              <li><strong>Coerência documental</strong>: deve refletir LTCAT e demais registros ambientais que sustentam o S-2240.</li>
            </ul>
          ),
        },
        {
          title: 'Quais informações entram no PPP',
          body: (
            <ol>
              <li><strong>Dados do trabalhador</strong>: identificação e períodos do vínculo.</li>
              <li><strong>Dados da empresa</strong>: identificação do estabelecimento responsável pelas informações.</li>
              <li><strong>Função e descrição da atividade</strong>: o que o trabalhador executa em cada período.</li>
              <li><strong>Agentes prejudiciais à saúde</strong>: fatores físicos, químicos ou biológicos previstos na tabela do eSocial.</li>
              <li><strong>Intensidade ou concentração</strong>: quando a avaliação quantitativa for aplicável.</li>
              <li><strong>Técnica utilizada</strong>: metodologia e critérios que sustentam a avaliação.</li>
              <li><strong>EPI e EPC</strong>: dados solicitados pelo leiaute, incluindo CA e avaliação de eficácia quando aplicável.</li>
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
                O PPP apresenta informações que precisam ter base técnica. Os principais documentos de origem são:
              </p>
              <ul>
                <li><strong>LTCAT</strong> caracteriza tecnicamente a exposição a agentes nocivos.</li>
                <li><strong>PGR</strong> identifica e avalia os riscos da operação.</li>
                <li><strong>PCMSO</strong> define a vigilância médica e os exames específicos.</li>
                <li><strong>Registros de EPI e EPC</strong> sustentam as informações sobre proteção adotada.</li>
                <li><strong>Laudos e avaliações complementares</strong> ajudam a manter coerência entre os registros trabalhistas e previdenciários.</li>
              </ul>
              <p>
                Quando os documentos usam funções, períodos ou exposições diferentes, o PPP fica inconsistente. A correção deve ocorrer na fonte e nos eventos do eSocial, com preservação do histórico.
              </p>
            </>
          ),
        },
        {
          title: 'Erros que exigem correção no eSocial',
          body: (
            <ol>
              <li><strong>S-2240 fora do prazo.</strong> O eSocial recebe a informação, mas o atraso pode caracterizar descumprimento sujeito à fiscalização. Não existe uma multa automática gerada pelo sistema para cada envio tardio.</li>
              <li><strong>S-2240 com agente nocivo errado.</strong> Pode gerar concessão indevida de aposentadoria especial (custo extra para Previdência) ou negação de direito legítimo (gera ação contra a empresa).</li>
              <li><strong>EPI eficaz declarado sem evidência.</strong> A informação precisa ser compatível com seleção, CA, entrega, treinamento, uso e manutenção da proteção.</li>
              <li><strong>Inconsistência entre PPP e LTCAT.</strong> Divergências de período, função ou exposição precisam ser investigadas e corrigidas.</li>
              <li><strong>Ausência de dados no Meu INSS.</strong> Para períodos desde 2023, o trabalhador depende dos eventos enviados pela empresa. Informações ausentes ou incorretas exigem retificação no eSocial.</li>
              <li><strong>Falta de atualização durante o contrato.</strong> Alterações de função, ambiente ou exposição podem exigir um novo S-2240 a partir da data da mudança.</li>
            </ol>
          ),
        },
        {
          title: 'Guarda do PPP e dos documentos de base',
          body: (
            <>
              <p>
                A regulamentação previdenciária prevê a guarda do PPP e do comprovante de entrega pelo prazo de <strong>20 anos</strong>. Os laudos, avaliações e registros que sustentam as informações também devem ser preservados conforme seus prazos legais e a necessidade de comprovar o histórico declarado.
              </p>
              <ul>
                <li>LTCAT e laudos de agentes nocivos</li>
                <li>Fichas de entrega de EPI com assinatura e número de CA</li>
                <li>Registros de avaliações ambientais</li>
                <li>Os próprios eventos S-2240 transmitidos ao eSocial</li>
              </ul>
              <p>
                O trabalhador pode precisar comprovar um período especial muitos anos depois do fim do contrato. Sem documentação contemporânea, a retificação ou reconstrução do histórico fica mais difícil para todas as partes.
              </p>
              <p>
                Em reorganizações, aquisições ou encerramento de atividades, a empresa deve definir formalmente a custódia dos documentos e dos recibos, de acordo com a orientação contábil e jurídica aplicável.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'PPP em papel ainda existe?',
          a: 'Sim, para períodos trabalhados até 31 de dezembro de 2022. Para períodos desde 1º de janeiro de 2023, o PPP eletrônico substitui o documento físico e o segurado baixa o PDF no Meu INSS.',
        },
        {
          q: 'Quem assina o PPP?',
          a: 'No PPP eletrônico, a identificação do responsável pela informação decorre da assinatura eletrônica dos eventos e do cadastro da empresa. Os registros ambientais continuam vinculados aos responsáveis técnicos informados no eSocial.',
        },
        {
          q: 'Trabalhador administrativo precisa de PPP?',
          a: 'Sim. O PPP eletrônico é emitido para os segurados abrangidos, independentemente do ramo da empresa ou da existência de exposição. Para quem não está exposto, o S-2240 deve informar a ausência de fatores de risco conforme as regras do leiaute.',
        },
        {
          q: 'EPI &quot;neutraliza&quot; o agente para fins de aposentadoria especial?',
          a: 'Depende do agente e das evidências. No caso de ruído acima dos limites legais, o STF decidiu que a declaração de eficácia do EPI não descaracteriza, por si só, o tempo especial. Para outros agentes, a análise considera a proteção realmente adotada e a documentação disponível.',
        },
        {
          q: 'A empresa precisa fazer PPP retroativo?',
          a: 'A empresa deve fornecer ou corrigir as informações quando houver obrigação e solicitação válida. Períodos anteriores a 2023 usam o PPP em papel; períodos posteriores dependem da retificação dos eventos do eSocial. A reconstrução deve se apoiar em documentos da época, sem inventar exposição ou medição inexistente.',
        },
        {
          q: 'Por quanto tempo a empresa precisa guardar os documentos do PPP?',
          a: 'A regulamentação previdenciária prevê a guarda do PPP e do comprovante de entrega por 20 anos. LTCAT, avaliações ambientais, registros de EPI e recibos também devem ser preservados conforme os prazos aplicáveis e a necessidade de comprovar as informações declaradas.',
        },
      ]}
      sidebarTitle="Seu PPP/S-2240 está consistente?"
      sidebarHook="O PPP precisa refletir o histórico real de função, ambiente e exposição. A SERMST audita a consistência entre LTCAT, PGR, registros de proteção e S-2240."
      sidebarCtaLabel="Auditar PPP/S-2240"
      related={[
        { label: 'O que significa LTCAT', href: '/dicionario/o-que-e-ltcat' },
        { label: 'Serviço de LTCAT previdenciário', href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo' },
        { label: 'NR-15: Insalubridade', href: '/normas/nr-15-insalubridade' },
        { label: 'NR-16: Periculosidade', href: '/normas/nr-16-periculosidade' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
