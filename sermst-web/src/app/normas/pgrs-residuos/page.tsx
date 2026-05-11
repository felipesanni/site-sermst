import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'PGRS: Plano de Gerenciamento de Resíduos de Saúde e Indústria | SERMST',
  description:
    'O PGRS é exigido para clínicas, laboratórios, indústrias químicas e farmacêuticas. Gerencia geração, segregação e destinação de resíduos perigosos. Veja regras.',
  alternates: { canonical: 'https://sermst.com.br/normas/pgrs-residuos' },
};

export default function PGRSPage() {
  return (
    <BlockbusterArticle
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas/pgrs-residuos"
      pageUrl="https://sermst.com.br/normas/pgrs-residuos"
      badgeText="PGRS"
      h1="PGRS: Plano de Gerenciamento de Resíduos para empresas"
      intro="O PGRS é exigência ambiental e sanitária para empresas que geram resíduos perigosos: clínicas, laboratórios, hospitais, indústrias químicas, farmacêuticas. Documenta como a empresa gerencia geração, segregação, transporte e destinação."
      sections={[
        {
          title: 'O que é o PGRS',
          body: (
            <>
              <p>
                PGRS significa <strong>Plano de Gerenciamento de Resíduos Sólidos</strong>. Para serviços de saúde, é o PGRSS (Plano de Gerenciamento de Resíduos de Serviços de Saúde). Para construção, PGRCC. A nomenclatura varia por setor; o conceito é o mesmo: documentar como a empresa lida com seus resíduos.
              </p>
              <p>
                A obrigação vem de duas frentes: ambiental (Política Nacional de Resíduos Sólidos) e sanitária (Anvisa para serviços de saúde). Empresa sob qualquer das duas precisa do plano.
              </p>
            </>
          ),
        },
        {
          title: 'Quem é obrigado a ter PGRS',
          body: (
            <ul>
              <li><strong>Serviços de saúde</strong> — clínicas, laboratórios, hospitais, postos de saúde, consultórios médicos e odontológicos, clínicas veterinárias</li>
              <li><strong>Indústrias químicas e farmacêuticas</strong></li>
              <li><strong>Indústrias que geram resíduos perigosos</strong> — metalurgia, galvanoplastia, tintas, solventes</li>
              <li><strong>Construção civil</strong> — PGRCC obrigatório em obras conforme porte</li>
              <li><strong>Estabelecimentos comerciais com resíduos especiais</strong> — postos de combustível, lavanderias industriais, oficinas mecânicas</li>
              <li><strong>Geradores acima de volume crítico</strong> — qualquer empresa com geração relevante de resíduos não-domésticos</li>
            </ul>
          ),
        },
        {
          title: 'Conteúdo mínimo do plano',
          body: (
            <ol>
              <li><strong>Identificação do gerador</strong> — empresa, CNPJ, CNAE, endereço, atividades.</li>
              <li><strong>Caracterização dos resíduos</strong> — classificação conforme NBR 10004 (Classe I perigosos, Classe IIA não inertes, Classe IIB inertes), volume gerado, periodicidade.</li>
              <li><strong>Procedimentos de segregação</strong> — como cada tipo é separado na origem.</li>
              <li><strong>Acondicionamento</strong> — recipientes, identificação, armazenamento temporário.</li>
              <li><strong>Coleta interna</strong> — fluxo dentro do estabelecimento até o ponto de armazenamento.</li>
              <li><strong>Armazenamento externo</strong> — área de armazenamento, conformidade com normas (impermeabilização, ventilação, sinalização).</li>
              <li><strong>Transporte</strong> — empresa licenciada, manifesto de transporte, MTR (Manifesto de Transporte de Resíduos).</li>
              <li><strong>Destinação final</strong> — empresa licenciada para tratamento ou disposição final, conforme classificação.</li>
              <li><strong>Capacitação dos colaboradores</strong> — treinamento sobre o plano.</li>
              <li><strong>Indicadores e melhoria contínua</strong>.</li>
            </ol>
          ),
        },
        {
          title: 'Resíduos de saúde: classificação que importa',
          body: (
            <>
              <p>
                Em serviços de saúde, a RDC 222/2018 da Anvisa classifica resíduos em 5 grupos:
              </p>
              <ul>
                <li><strong>Grupo A</strong> — biológico (potencial infectante): culturas, materiais com sangue ou fluido corporal</li>
                <li><strong>Grupo B</strong> — químico: médicamentos vencidos, produtos químicos, reagentes</li>
                <li><strong>Grupo C</strong> — radioativo</li>
                <li><strong>Grupo D</strong> — comum (resíduo doméstico equivalente)</li>
                <li><strong>Grupo E</strong> — perfurocortantes: agulhas, lâminas, lancetas</li>
              </ul>
              <p>
                Cada grupo tem fluxo, recipiente e destinação específicos. Misturar grupos é uma das infrações mais comuns em fiscalização sanitária — e gera passivo ambiental.
              </p>
            </>
          ),
        },
        {
          title: 'Penalidades e responsabilização',
          body: (
            <>
              <ul>
                <li><strong>Multa ambiental</strong> — pode chegar a milhões em casos graves (descarte irregular de resíduo perigoso). Lei 9.605/98.</li>
                <li><strong>Multa sanitária</strong> — pela Anvisa ou vigilância sanitária local.</li>
                <li><strong>Responsabilidade civil</strong> — passivo ambiental segue a empresa por décadas. Comprador de empresa herda passivo ambiental do vendedor.</li>
                <li><strong>Responsabilização criminal</strong> — em casos graves, crime ambiental.</li>
                <li><strong>Cassação de licenças</strong> — operação sem PGRS pode levar à perda da licença sanitária e ambiental.</li>
              </ul>
              <p>
                Diferente de SST, o passivo ambiental é <strong>permanente</strong> — não prescreve com o tempo. Por isso PGRS é um dos documentos com maior impacto futuro.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Consultório médico precisa de PGRSS?',
          a: 'Sim, conforme RDC 222/2018 da Anvisa, todo serviço de saúde com geração de resíduos dos grupos A, B, C ou E precisa de PGRSS proporcional ao porte. Consultório odontológico, clínica de estética, posto de coleta — todos sob a regra.',
        },
        {
          q: 'Quem assina o PGRS?',
          a: 'Profissional habilitado conforme tipo de empresa: químico/engenheiro químico/sanitarista para indústria; biomédico/farmacêutico/enfermeiro para serviços de saúde; engenheiro ambiental ou civil para construção. ART recolhida quando aplicável.',
        },
        {
          q: 'PGRS precisa ser revisto?',
          a: 'Sim, anualmente em geral, e sempre que houver mudança significativa (nova atividade, novo resíduo, novo equipamento, mudança de operação). Plano antigo desatualizado é evidência fraca em fiscalização.',
        },
        {
          q: 'Empresa pequena pode ter PGRS simplificado?',
          a: 'Sim. O nível de detalhamento é proporcional ao porte e à complexidade dos resíduos. Consultório odontológico tem PGRS muito mais simples que hospital. Mas o plano precisa existir, ser realista e ser cumprido.',
        },
        {
          q: 'MTR é obrigatório para qualquer transporte de resíduo?',
          a: 'Para resíduos perigosos (Classe I) e resíduos de saúde, sim. O MTR (Manifesto de Transporte de Resíduos) acompanha o material da geração até a destinação final, com vias para gerador, transportador e destinador. Sem MTR, qualquer ocorrência no transporte vira responsabilidade.',
        },
      ]}
      sidebarTitle="Sua empresa gera resíduos perigosos?"
      sidebarHook="Passivo ambiental não prescreve. PGRS desatualizado, fluxo errado ou destinação irregular ficam para sempre. A SERMST faz PGRS técnico para clínicas, indústrias e construção."
      sidebarCtaLabel="Solicitar PGRS"
      related={[
        { label: 'PGR (NR-01) atualizado', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'NR-15: Insalubridade', href: '/normas/nr-15-insalubridade' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'NR-13: Caldeiras e vasos', href: '/normas/nr-13-vasos-de-pressao' },
      ]}
    />
  );
}
