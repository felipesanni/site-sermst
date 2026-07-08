import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Acuidade Visual Ocupacional em São Paulo | SERMST',
  description:
    'Exame de acuidade visual ocupacional para motoristas, operadores de máquinas e funções com exigência visual. Teste integrado ao ASO e PCMSO em SP.',
  robots: 'index, follow',
  alternates: { canonical: 'https://sermst.com.br/saude/acuidade-visual-ocupacional' },
  openGraph: {
    title: 'Acuidade Visual Ocupacional em São Paulo | SERMST',
    description:
      'Guia sobre acuidade visual ocupacional: quando é exigida no PCMSO, quais funções precisam, o que o teste mede e onde fazer em São Paulo.',
    url: 'https://sermst.com.br/saude/acuidade-visual-ocupacional',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function AcuidadeVisualOcupacionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="Voltar para saúde"
      hubHref="/saude"
      badgeText="Exame Complementar"
      pageUrl="https://sermst.com.br/saude/acuidade-visual-ocupacional"
      coverImage={{
        src: '/images/site/sermst-estrutura-medicina-ocupacional.png',
        alt: 'Estrutura da SERMST para realização de exame de acuidade visual ocupacional em São Paulo',
      }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-06',
        dateModified: '2026-07-06',
      }}
      readingTime="7 min"
      h1="Acuidade visual ocupacional: quem precisa, o que mede e onde fazer em São Paulo"
      intro="O exame de acuidade visual ocupacional avalia a capacidade de enxergar com clareza em diferentes distâncias e condições. No contexto da medicina do trabalho, ele faz parte do protocolo do PCMSO para funções que dependem da visão como fator direto de segurança: motoristas, operadores de máquinas, trabalhadores em altura e outras atividades de precisão."
      quickAnswer={
        <p>
          O <strong>exame de acuidade visual ocupacional</strong> é indicado para funções em que a
          visão é fator direto de segurança, como motoristas profissionais, operadores de
          empilhadeira, seguranças patrimoniais e trabalhadores em altura. A SERMST realiza o teste
          em São Paulo integrado ao ASO e ao PCMSO da empresa.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é o exame de acuidade visual ocupacional',
          body: (
            <>
              <p>
                A acuidade visual é a medida da capacidade do olho de distinguir detalhes em diferentes distâncias. O exame de acuidade visual ocupacional avalia essa capacidade tanto para longe quanto para perto, em condições que simulam as exigências visuais da função exercida pelo trabalhador.
              </p>
              <p>
                No contexto do PCMSO, o teste não tem como objetivo diagnosticar doenças oculares: esse é o papel do oftalmologista. O objetivo é verificar se o trabalhador tem condição visual mínima compatível com os requisitos de segurança da função, e documentar essa avaliação no ASO.
              </p>
              <p>
                Quando o médico do trabalho identifica acuidade abaixo do mínimo necessário para a função, pode condicionar o ASO ao uso de correção óptica adequada ou recomendar avaliação especializada com oftalmologista antes de emitir a conclusão de apto.
              </p>
            </>
          ),
        },
        {
          title: 'Quando o PCMSO exige acuidade visual',
          body: (
            <>
              <p>
                A inclusão do teste de acuidade visual no protocolo do PCMSO depende da avaliação de risco da função. O médico do trabalho define quais exames complementares são necessários com base nos riscos presentes no ambiente e nas exigências específicas de cada cargo.
              </p>
              <p>
                As situações mais comuns em que a acuidade visual entra no protocolo incluem:
              </p>
              <ul>
                <li>Funções que exigem dirigir veículos como parte do trabalho.</li>
                <li>Operação de empilhadeiras, pontes rolantes ou outros equipamentos de movimentação de carga.</li>
                <li>Trabalho em altura, onde a precisão visual é necessária para avaliar distâncias e pontos de ancoragem.</li>
                <li>Atividades de segurança patrimonial e vigilância.</li>
                <li>Funções com necessidade de leitura contínua de instrumentos, telas ou controles operacionais.</li>
                <li>Trabalho com precisão manual em escala reduzida: microeletrônica, montagem fina, laboratório.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'O que o exame avalia',
          body: (
            <>
              <p>
                O exame de acuidade visual ocupacional pode incluir diferentes componentes dependendo do que o PCMSO define para a função:
              </p>
              <ul>
                <li><strong>Acuidade visual para longe (AVL):</strong> medição da capacidade de enxergar com clareza a distâncias maiores. Fundamental para motoristas e operadores de veículos e máquinas.</li>
                <li><strong>Acuidade visual para perto (AVP):</strong> avaliação da visão de foco curto. Importante para funções com leitura de documentos, instrumentos e telas.</li>
                <li><strong>Teste de visão de cores (Ishihara):</strong> identifica deficiências na percepção de cores. Relevante para funções que dependem de diferenciar sinais coloridos, como eletricistas, operadores de painéis e motoristas.</li>
                <li><strong>Avaliação de campo visual periférico:</strong> em casos específicos, verifica se há limitação na visão lateral que possa comprometer a segurança em operação de veículos ou máquinas.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Acuidade visual para motoristas profissionais',
          body: (
            <>
              <p>
                Para motoristas profissionais com CNH categorias C, D ou E, a avaliação visual segue critérios específicos definidos pelo CONTRAN e pelo Código de Trânsito Brasileiro. O trabalhador precisa atender aos requisitos de acuidade mínima para manutenção da habilitação profissional.
              </p>
              <p>
                No contexto ocupacional, isso significa que o PCMSO do motorista profissional deve incluir avaliação visual com periodicidade adequada ao risco da função. Quando o resultado indica acuidade abaixo do mínimo mesmo com correção óptica, o médico do trabalho precisa avaliar a aptidão para continuar dirigindo no contexto do vínculo empregatício.
              </p>
              <p>
                Empresas que mantêm motoristas sem avaliação visual atualizada no programa assumem risco direto em caso de acidente com nexo causado por limitação visual não documentada.
              </p>
            </>
          ),
        },
        {
          title: 'Como o resultado entra no ASO',
          body: (
            <>
              <p>
                O teste de acuidade visual é um dado que o médico do trabalho usa para fundamentar a conclusão do ASO. Para funções com requisitos visuais definidos no PCMSO, o resultado faz parte dos critérios de aptidão.
              </p>
              <p>
                Quando o trabalhador usa óculos ou lentes de contato, o teste é realizado com a correção em uso. O ASO pode incluir restrição que condiciona a aptidão ao uso contínuo da correção óptica durante o trabalho.
              </p>
              <p>
                Trabalhadores com resultado abaixo do mínimo necessário para a função podem receber ASO com restrição de atividades visuais críticas enquanto aguardam avaliação oftalmológica e adequação da correção. Em casos de incompatibilidade sem solução, o médico pode emitir ASO com inaptidão para a função específica.
              </p>
            </>
          ),
        },
        {
          title: 'O que avaliar ao escolher onde fazer o exame',
          body: (
            <ol>
              <li><strong>Integração ao ASO e ao PCMSO.</strong> O resultado precisa ser interpretado pelo médico do trabalho no contexto da função, não apenas registrado isoladamente.</li>
              <li><strong>Equipamento adequado.</strong> A tabela de Snellen ou optotipos calibrados são o padrão mínimo. Clínicas com tecnologia de acuidade digital entregam resultados mais precisos e reproduzíveis.</li>
              <li><strong>Capacidade de incluir Ishihara quando necessário.</strong> Para funções que exigem discriminação de cores, o teste de percepção cromática precisa estar disponível.</li>
              <li><strong>Agilidade comercial.</strong> Para empresas com alta rotatividade, o tempo entre a realização do exame e a entrega do laudo precisa ser compatível com o fluxo de admissão.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que é acuidade visual ocupacional?',
          a: 'É o teste de visão realizado no contexto da medicina do trabalho para verificar se o trabalhador tem capacidade visual compatível com os requisitos de segurança da função. Avalia visão para longe, para perto e, quando indicado, percepção de cores.',
        },
        {
          q: 'Quais funções precisam de exame de acuidade visual?',
          a: 'Motoristas profissionais, operadores de empilhadeira e máquinas pesadas, trabalhadores em altura, vigilantes e seguranças patrimoniais, e qualquer função em que o PCMSO identifique a visão como fator direto de segurança.',
        },
        {
          q: 'A acuidade visual precisa ser testada na admissão?',
          a: 'Quando o PCMSO define o teste para a função, sim. O resultado admissional serve como referência para os periódicos futuros e documenta a condição visual no início do vínculo.',
        },
        {
          q: 'O trabalhador que usa óculos precisa fazer o exame com a correção?',
          a: 'Sim. O teste é realizado com a correção óptica em uso habitual. O ASO pode condicionar a aptidão ao uso contínuo dos óculos ou lentes durante o trabalho.',
        },
        {
          q: 'Onde fazer exame de acuidade visual ocupacional em São Paulo?',
          a: 'A SERMST realiza o exame de acuidade visual ocupacional em São Paulo Centro, integrado ao fluxo do ASO e ao PCMSO da empresa, no Largo do Paissandu.',
        },
      ]}
      sidebarTitle="Precisa incluir acuidade visual no PCMSO?"
      sidebarHook="A SERMST realiza teste de acuidade visual integrado ao ASO para funções com requisito visual no PCMSO. Para orçamento corporativo ou dúvida sobre o protocolo da sua empresa, fale com a equipe."
      sidebarCtaLabel="Solicitar orçamento"
      sidebarCtaHref="/servicos/exame-admissional-expresso/sao-paulo"
      related={[
        { label: 'Exames complementares e laboratoriais', href: '/servicos/exames-complementares-laboratoriais' },
        { label: 'Tabela de exames admissionais por função e cargo', href: '/saude/tabela-exames-admissionais-por-funcao' },
        { label: 'Exame toxicológico para motoristas profissionais CNH C, D e E', href: '/servicos/exame-toxicologico-clt' },
        { label: 'Treinamento NR-11: operador de empilhadeira', href: '/treinamentos/nr-11-transporte-movimentacao' },
      ]}
      finalCta={{
        title: 'Acuidade visual ocupacional integrada ao PCMSO e ao ASO.',
        desc: 'A SERMST realiza o exame de acuidade visual em São Paulo Centro para motoristas, operadores e funções com requisito visual no PCMSO, com resultado integrado ao fluxo de admissão e periódico.',
        label: 'Falar com a SERMST',
        href: '/contato',
      }}
    />
  );
}
