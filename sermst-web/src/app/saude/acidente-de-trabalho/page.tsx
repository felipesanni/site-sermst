import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Acidente de trabalho: tipos e riscos | SERMST',
  description:
    'Acidente de trabalho é todo evento que causa lesão ou morte ao trabalhador no exercício da atividade. Entenda o conceito legal, tipos, nexo causal e o que muda para a empresa.',
  alternates: { canonical: 'https://sermst.com.br/saude/acidente-de-trabalho' },
  openGraph: {
    title: 'Acidente de trabalho: tipos e riscos | SERMST',
    description:
      'Conceito legal de acidente de trabalho, tipos (típico, de trajeto, doença ocupacional), nexo causal, estabilidade acidentária e como a empresa deve agir.',
    url: 'https://sermst.com.br/saude/acidente-de-trabalho',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function AcidenteDeTrabalhoPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/acidente-de-trabalho"
      badgeText="SST"
      coverImage={{ src: '/images/site/safety-equipment.jpg', alt: 'Ambiente de trabalho com riscos — prevenção de acidente de trabalho' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      readingTime="10 min"
      h1="Acidente de trabalho: o que é, tipos e o que muda para a empresa"
      intro="Acidente de trabalho é todo evento que ocorre no exercício da atividade laboral e causa lesão corporal, perturbação funcional ou morte ao trabalhador. A definição parece simples, mas as consequências para a empresa dependem de como o caso é investigado, documentado e conduzido — do momento do evento até eventual processo previdenciário ou trabalhista."
      quickAnswer={
        <p>
          Acidente de trabalho é, legalmente, o evento que ocorre pelo exercício do trabalho e causa lesão corporal, perturbação funcional ou morte. Inclui acidente típico (durante a atividade), acidente de trajeto (no percurso casa–trabalho) e doenças ocupacionais (causadas ou agravadas pelo trabalho). A ocorrência deve ser comunicada ao INSS por meio da <strong>CAT — Comunicação de Acidente de Trabalho</strong> — até o primeiro dia útil seguinte ao evento.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'Conceito legal de acidente de trabalho',
          body: (
            <>
              <p>
                A Lei 8.213/91 define acidente de trabalho como o evento que ocorre pelo exercício do trabalho a serviço da empresa — ou pelo exercício do trabalho dos segurados especiais — e que provoca lesão corporal ou perturbação funcional que cause a morte, a perda ou redução da capacidade para o trabalho, permanente ou temporária.
              </p>
              <p>
                O conceito é propositalmente amplo. Ele abrange não só o acidente físico imediato, mas também situações em que o trabalho <strong>concorre</strong> para o resultado — mesmo que não seja a causa exclusiva.
              </p>
            </>
          ),
        },
        {
          title: 'Tipos de acidente de trabalho',
          body: (
            <>
              <p>A legislação reconhece três tipos principais:</p>
              <ul>
                <li>
                  <strong>Acidente típico:</strong> evento abrupto e imediato ligado ao exercício da atividade. Exemplos: queda, corte, esmagamento, choque elétrico, queimadura, colisão. É o tipo mais comum e o mais fácil de identificar.
                </li>
                <li>
                  <strong>Acidente de trajeto:</strong> ocorre no percurso entre a residência e o local de trabalho, ou no retorno. A avaliação do nexo com o trabalho depende do caso concreto, especialmente após mudanças na legislação previdenciária.
                </li>
                <li>
                  <strong>Doença ocupacional (acidente por equiparação):</strong> inclui doença profissional — causada pelo tipo de trabalho — e doença do trabalho — adquirida ou agravada pelas condições do ambiente laboral. São equiparadas ao acidente de trabalho para fins legais.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: 'O que é nexo causal e por que ele define tudo',
          body: (
            <>
              <p>
                Nexo causal é a relação entre o trabalho e o dano sofrido pelo trabalhador. Sem nexo demonstrado, não há reconhecimento de acidente de trabalho. Com nexo estabelecido, surgem obrigações previdenciárias, trabalhistas e documentais.
              </p>
              <p>
                O nexo pode ser técnico (laudo médico, perícia, histórico de exposição) ou previdenciário — via <strong>Nexo Técnico Epidemiológico (NTEP)</strong>, que vincula automaticamente certas doenças a determinados CNAEs. Quando o NTEP se aplica, a empresa precisa contestar ativamente para não assumir o nexo automaticamente.
              </p>
            </>
          ),
        },
        {
          title: 'Acidente típico vs. doença ocupacional: diferenças práticas',
          body: (
            <ul>
              <li><strong>Acidente típico:</strong> evento datado, testemunhas, local identificável, sequência clara entre evento e lesão. CAT imediata. Investigação concentrada no fato.</li>
              <li><strong>Doença ocupacional:</strong> surgimento gradual, diagnóstico tardio, nexo construído ao longo do tempo. Investigação envolve histórico de exposição, laudos, PCMSO, PGR e histórico funcional. CAT pode ser emitida a qualquer momento após confirmação ou suspeita de nexo.</li>
            </ul>
          ),
        },
        {
          title: 'O que acontece depois de um acidente: o fluxo do lado da empresa',
          body: (
            <ol>
              <li><strong>Atendimento imediato ao trabalhador</strong> e acionamento de socorro quando necessário.</li>
              <li><strong>Registro da ocorrência</strong> com data, horário, local, atividade, testemunhas e condição do ambiente.</li>
              <li><strong>Avaliação da obrigação de emitir CAT</strong> e cumprimento do prazo: primeiro dia útil seguinte (imediato em caso de morte).</li>
              <li><strong>Investigação de causa imediata e causa raiz</strong> do acidente.</li>
              <li><strong>Revisão de PGR, PCMSO, ASO, EPI e treinamentos</strong> ligados à função do trabalhador.</li>
              <li><strong>Adoção de medidas corretivas</strong> documentadas para evitar repetição.</li>
              <li><strong>Acompanhamento médico e previdenciário</strong> do trabalhador quando houver afastamento.</li>
            </ol>
          ),
        },
        {
          title: 'Estabilidade acidentária: quando ela se aplica',
          body: (
            <>
              <p>
                O trabalhador que sofre acidente de trabalho e recebe auxílio-doença acidentário (B91) tem <strong>estabilidade de 12 meses</strong> após a alta previdenciária. Durante esse período, a demissão sem justa causa é vedada — e, se ocorrer, gera direito à reintegração ou indenização correspondente.
              </p>
              <p>
                A estabilidade não depende da CAT em si, mas do reconhecimento do benefício acidentário pelo INSS. Por isso, a empresa que não emite CAT e não organiza a documentação pode se ver diante de um nexo estabelecido pelo próprio INSS — e da estabilidade decorrente — sem ter participado da construção técnica do caso.
              </p>
            </>
          ),
        },
        {
          title: 'Acidente de trabalho e eSocial',
          body: (
            <>
              <p>
                O acidente de trabalho tem reflexos no eSocial — especialmente nos eventos S-2210 (CAT) e S-2230 (afastamento). Registros inconsistentes entre a CAT, o atestado médico, o ASO e o histórico do PGR podem gerar contradições que aparecem depois em fiscalizações ou processos trabalhistas.
              </p>
              <p>
                O RH e a área de SST precisam trabalhar com a mesma versão documentada dos fatos desde o início.
              </p>
            </>
          ),
        },
        {
          title: 'Quando o acidente de trabalho vira processo trabalhista',
          body: (
            <>
              <p>
                O processo trabalhista relacionado a acidente costuma envolver: culpa da empresa por falta de EPI, ausência de treinamento, equipamento sem proteção, ambiente inseguro ou doença causada ou agravada pelo trabalho.
              </p>
              <p>
                A defesa da empresa fica mais sólida quando ela demonstra <strong>prevenção anterior ao acidente</strong> — PGR atualizado, PCMSO adequado, treinamentos registrados, EPI fornecido com evidência — e <strong>resposta técnica posterior</strong> — investigação documentada, medidas corretivas, acompanhamento médico.
              </p>
            </>
          ),
        },
        {
          title: 'Documentos que a empresa deve manter organizados',
          body: (
            <ul>
              <li>PGR atualizado com os riscos da função envolvida.</li>
              <li>PCMSO com histórico de exames do trabalhador.</li>
              <li>ASO vigente (admissional, periódico ou de retorno, conforme o caso).</li>
              <li>Ficha de EPI com assinatura e CA válido.</li>
              <li>Registros de treinamento relacionados à atividade.</li>
              <li>Relato da ocorrência, investigação de causa raiz e medidas corretivas adotadas.</li>
              <li>CAT emitida no prazo, quando obrigatória.</li>
            </ul>
          ),
        },
        {
          title: 'Causas mais comuns de acidente de trabalho no Brasil',
          body: (
            <ul>
              <li>Quedas de nível (construção civil, logística, limpeza).</li>
              <li>Contato com máquinas e equipamentos sem proteção adequada.</li>
              <li>Sobresforço e postura inadequada (ergonomia).</li>
              <li>Exposição a agentes químicos, biológicos ou físicos sem controle.</li>
              <li>Falta de treinamento para atividades de risco (altura, espaço confinado, eletricidade).</li>
              <li>Acidente de trajeto envolvendo veículos.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que caracteriza um acidente de trabalho?',
          a: 'O acidente de trabalho é caracterizado pela ocorrência no exercício da atividade laboral (ou em trajeto, quando aplicável) que causa lesão, perturbação funcional ou morte ao trabalhador. O elemento central é o nexo causal entre o trabalho e o dano sofrido.',
        },
        {
          q: 'Doença ocupacional é considerada acidente de trabalho?',
          a: 'Sim. A doença profissional e a doença do trabalho são equiparadas ao acidente de trabalho pela Lei 8.213/91. Isso implica as mesmas obrigações de comunicação, os mesmos efeitos previdenciários e a mesma estabilidade acidentária quando o INSS reconhece o benefício acidentário.',
        },
        {
          q: 'Acidente de trajeto ainda é acidente de trabalho?',
          a: 'Depende do caso. O acidente de trajeto — ocorrido no percurso entre residência e local de trabalho — pode ser equiparado ao acidente de trabalho, mas a avaliação do nexo com o trabalho depende do contexto e da legislação vigente aplicável à situação.',
        },
        {
          q: 'Toda lesão no trabalho precisa de CAT?',
          a: 'A emissão de CAT é obrigatória quando há acidente de trabalho, doença ocupacional confirmada ou suspeita, ou ocorrência que resulte em afastamento, lesão ou morte. Situações limítrofes devem ser avaliadas caso a caso, mas a omissão gera risco maior do que a comunicação.',
        },
        {
          q: 'Quanto tempo dura a estabilidade após acidente de trabalho?',
          a: 'O trabalhador que recebe auxílio-doença acidentário (B91) tem estabilidade de 12 meses após a alta previdenciária. A estabilidade não depende da CAT em si, mas do reconhecimento do benefício acidentário pelo INSS.',
        },
        {
          q: 'Empresa que não emite CAT pode ser prejudicada?',
          a: 'Sim. Quando a empresa não emite, o trabalhador, dependentes, sindicato, médico ou autoridade pública podem registrar a CAT — e a narrativa inicial do caso fica fora do controle da empresa. Além disso, a omissão pode gerar multa e fragilizar a defesa em eventual processo trabalhista.',
        },
        {
          q: 'Qual a diferença entre acidente típico e doença ocupacional?',
          a: 'Acidente típico é o evento imediato e datado: queda, corte, choque, colisão. Doença ocupacional é o dano gradual causado ou agravado pelas condições ou organização do trabalho. Ambos são considerados acidentes de trabalho para fins legais, mas a investigação e a documentação de defesa têm dinâmicas diferentes.',
        },
      ]}
      maxFaqItems={8}
      sidebarTitle="Sua empresa está preparada para um acidente?"
      sidebarHook="PGR atualizado, PCMSO adequado, treinamentos registrados e CAT no prazo são a base da defesa técnica da empresa. A SERMST apoia desde a prevenção até a investigação após o evento."
      sidebarCtaLabel="Falar com a SERMST"
      sidebarCtaHref="/contato"
      related={[
        { label: 'CAT: quando emitir e quais os riscos para a empresa', href: '/rh/cat-acidente-de-trabalho' },
        { label: 'Doenças ocupacionais', href: '/saude/doencas-ocupacionais' },
        { label: 'PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
        { label: 'PCMSO NR-07', href: '/servicos/pcmso-nr07-programa' },
        { label: 'Perícia trabalhista e assistente técnico', href: '/servicos/pericia-trabalhista-assistente-tecnico' },
      ]}
    />
  );
}
