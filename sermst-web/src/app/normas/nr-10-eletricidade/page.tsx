import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-10: segurança em eletricidade e nova redação | SERMST',
  description:
    'A NR-10 define requisitos de segurança em instalações e serviços com eletricidade: treinamento, prontuário, supervisão e laudo exigidos em fiscalização.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-10-eletricidade' },
  openGraph: {
    title: 'NR-10: obrigações, treinamentos e nova redação | SERMST',
    description:
      'Guia da NR-10: quem precisa de treinamento, o que a norma exige para instalações elétricas, habilitação de trabalhadores e documentação obrigatória.',
    url: 'https://sermst.com.br/normas/nr-10-eletricidade',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR10Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/safety-equipment.jpg", alt: "Profissional com EPI elétrico em atividade de manutenção conforme NR-10" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-10-eletricidade"
      badgeText="NR-10"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}

      h1="NR-10: Segurança em Instalações e Serviços em Eletricidade"
      intro="A NR-10 estabelece medidas de prevenção para instalações e serviços com eletricidade. A Portaria MTE 737/2026 aprovou uma nova redação, mas ela só entra em vigor em 1º de junho de 2027. Até lá, a empresa deve cumprir o texto atualmente vigente e preparar a transição."
      quickAnswer={
        <p>
          A <strong>NR-10</strong> regula a segurança em instalações e serviços com eletricidade. No texto vigente, trabalhadores autorizados precisam do <strong>treinamento básico de 40 horas</strong> e, quando atuam no Sistema Elétrico de Potência ou em suas proximidades, do <strong>treinamento complementar de 40 horas</strong>. A reciclagem é bienal e também ocorre nas situações previstas pela norma. Estabelecimentos com carga instalada superior a 75 kW devem constituir e manter o <strong>Prontuário das Instalações Elétricas</strong>.
        </p>
      }
      sections={[
        {
          title: 'O que é a NR-10',
          body: (
            <>
              <p>
                A NR-10 estabelece requisitos de <strong>segurança em instalações e serviços com eletricidade</strong>. O texto vigente abrange geração, transmissão, distribuição e consumo, incluindo projeto, construção, montagem, operação e manutenção das instalações elétricas e trabalhos realizados em suas proximidades.
              </p>
              <p>
                A prevenção não depende apenas do curso. Ela envolve análise de risco, procedimentos, medidas coletivas, equipamentos adequados, autorização dos trabalhadores e documentação compatível com a instalação.
              </p>
            </>
          ),
        },
        {
          title: 'Documentos e controles que podem ser exigidos',
          body: (
            <ol>
              <li><strong>Prontuário das Instalações Elétricas:</strong> exigido, no texto vigente, para estabelecimentos com carga instalada superior a 75 kW e composto pelos documentos previstos na norma.</li>
              <li><strong>Esquemas unifilares atualizados:</strong> com especificações do aterramento e dos dispositivos de proteção.</li>
              <li><strong>Análise de risco e procedimentos:</strong> elaborados de acordo com as atividades, as instalações e as medidas de controle.</li>
              <li><strong>Ordens de serviço ou permissões:</strong> usadas conforme a natureza e o risco do trabalho.</li>
              <li><strong>Inspeções e documentação técnica:</strong> incluindo proteção contra descargas atmosféricas, aterramento e outros sistemas quando aplicáveis.</li>
              <li><strong>Registros de capacitação e autorização:</strong> para identificar o que cada trabalhador está autorizado a executar.</li>
            </ol>
          ),
        },
        {
          title: 'Treinamentos exigidos',
          body: (
            <>
              <p>
                A NR-10 estabelece treinamentos diferenciados conforme função:
              </p>
              <ul>
                <li><strong>Treinamento básico, 40 horas:</strong> para trabalhadores autorizados que atuam em instalações elétricas, conforme o campo de aplicação da norma.</li>
                <li><strong>Treinamento complementar SEP, 40 horas:</strong> para trabalhadores envolvidos com o Sistema Elétrico de Potência e suas proximidades.</li>
                <li><strong>Reciclagem bienal:</strong> realizada a cada dois anos e também quando houver troca de função ou mudança de empresa, retorno após afastamento superior a três meses ou modificações significativas nas instalações ou métodos.</li>
                <li><strong>Capacitação compatível com a tarefa:</strong> o certificado não substitui a autorização formal, a aptidão e os procedimentos da organização.</li>
              </ul>
              <p>
                A organização deve verificar conteúdo, responsável, instrutores e atividades práticas necessárias. Modalidades a distância ou semipresenciais também precisam atender às condições da NR-01 e não dispensam a parte prática quando ela for exigida.
              </p>
            </>
          ),
        },
        {
          title: 'Trabalhador qualificado, habilitado, capacitado, autorizado',
          body: (
            <>
              <p>
                A NR-10 diferencia quatro situações. Entender o enquadramento ajuda a definir o que o trabalhador pode executar:
              </p>
              <ul>
                <li><strong>Qualificado:</strong> comprova a conclusão de curso específico na área elétrica reconhecido pelo sistema oficial de ensino.</li>
                <li><strong>Habilitado:</strong> é previamente qualificado e tem registro no conselho de classe competente.</li>
                <li><strong>Capacitado:</strong> recebe capacitação sob orientação e responsabilidade de profissional habilitado e autorizado e trabalha sob essa responsabilidade.</li>
                <li><strong>Autorizado:</strong> é o trabalhador qualificado, capacitado ou habilitado que recebe anuência formal da empresa.</li>
              </ul>
              <p>
                A autorização deve ser compatível com a formação, a capacitação, a aptidão médica e as atividades efetivamente atribuídas.
              </p>
            </>
          ),
        },
        {
          title: 'O que acontece quando há irregularidade',
          body: (
            <ul>
              <li><strong>Fiscalização:</strong> a infração pode gerar auto e multa conforme o item descumprido e os critérios da NR-28.</li>
              <li><strong>Interdição:</strong> situações de grave e iminente risco podem justificar a paralisação da atividade ou instalação.</li>
              <li><strong>Acidentes:</strong> responsabilidades trabalhistas, civis, previdenciárias e penais dependem da conduta, do dano e do nexo apurados no caso concreto.</li>
              <li><strong>Adicional de periculosidade:</strong> não decorre apenas do nome do cargo. O enquadramento depende das atividades e condições previstas na NR-16.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        {
          q: 'Qual a validade do treinamento NR-10 e quando precisa de reciclagem?',
          a: 'No texto vigente, a reciclagem é bienal. Ela também deve ocorrer nas situações específicas da norma, como troca de função ou mudança de empresa, retorno de afastamento superior a três meses e modificações significativas nas instalações ou nos métodos. A autorização formal da empresa precisa permanecer compatível com a capacitação e a aptidão do trabalhador.',
        },
        {
          q: 'NR-10 só vale para alta tensão?',
          a: 'Não. O texto vigente alcança instalações elétricas nas etapas de geração, transmissão, distribuição e consumo. O curso complementar é específico para o Sistema Elétrico de Potência e suas proximidades.',
        },
        {
          q: 'Quem pode dar treinamento NR-10?',
          a: 'A empresa deve observar a responsabilidade e a qualificação previstas na NR-10, além das regras gerais de capacitação da NR-01. O curso precisa ter instrutores com domínio do conteúdo e atividades práticas compatíveis com o programa.',
        },
        {
          q: 'PIE precisa estar no canteiro/local de trabalho?',
          a: 'Quando o PIE é exigido, ele deve ser organizado e mantido atualizado pelo empregador ou por pessoa formalmente designada e permanecer à disposição das pessoas autorizadas e das autoridades competentes.',
        },
        {
          q: 'O que é &quot;sistema desenergizado&quot; conforme NR-10?',
          a: 'Não basta &quot;estar desligado&quot;. A NR-10 define 6 etapas para considerar desenergizado: seccionamento, impedimento de reenergização, constatação de ausência de tensão, instalação de aterramento, proteção dos elementos energizados e sinalização. Pular etapas é causa frequente de acidente fatal.',
        },
        {
          q: 'Eletricista terceirizado sem treinamento: quem responde?',
          a: 'Contratante e contratada têm deveres próprios de prevenção e precisam compartilhar informações sobre os riscos e as medidas de controle. Antes do serviço, a contratante deve verificar autorização, capacitação e documentos aplicáveis, sem presumir que o contrato transfere toda a responsabilidade.',
        },
      ]}
      sidebarTitle="Sua empresa cumpre NR-10?"
      sidebarHook="A revisão deve conferir instalações, riscos, procedimentos, autorizações, treinamentos e o PIE quando ele for exigido. A SERMST ajuda a organizar esse diagnóstico."
      sidebarCtaLabel="Auditar conformidade NR-10"
      related={[
        { label: 'Eletrocardiograma ocupacional e risco elétrico', href: '/saude/eletrocardiograma-ocupacional' },
        { label: 'NR-35: Trabalho em altura', href: '/normas/nr-35-trabalho-em-altura' },
        { label: 'NR-18 para obras e canteiros', href: '/normas/nr-18-construcao-civil' },
        { label: 'NR-16: Periculosidade', href: '/normas/nr-16-periculosidade' },
        { label: 'PGR (NR-01) atualizado', href: '/normas/nr-01-pgr-atualizada' },
      ]}
    />
  );
}
