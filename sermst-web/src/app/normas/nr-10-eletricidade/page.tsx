import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-10: Segurança em Eletricidade — Obrigações | SERMST',
  description:
    'A NR-10 define requisitos de segurança em instalações e serviços com eletricidade: treinamento, prontuário, supervisão e laudo exigidos em fiscalização.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-10-eletricidade' },
  openGraph: {
    title: 'NR-10: segurança em instalações elétricas — obrigações e treinamentos | SERMST',
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
        dateModified: '2026-05-01',
      }}

      h1="NR-10: Segurança em Instalações e Serviços em Eletricidade"
      intro="A NR-10 trata de uma das atividades de maior risco fatal do país. Define os requisitos para projeto, instalação, manutenção e operação de sistemas elétricos. Treinamento e laudo são obrigatórios — falha aqui é responsabilidade civil e criminal direta."
      quickAnswer={
        <p>
          A <strong>NR-10</strong> regula segurança em instalações e serviços em eletricidade. Trabalhadores que intervêm ou operam próximo a sistemas elétricos devem ter <strong>Curso Básico de Segurança de no mínimo 40 horas</strong>. Para quem atua em <strong>Sistemas Elétricos de Potência (SEP — alta tensão)</strong>, são necessárias mais 40 horas de curso complementar. A <strong>reciclagem é obrigatória a cada 2 anos</strong>. A empresa também deve manter o <strong>Prontuário das Instalações Elétricas (PIE)</strong> atualizado — sem ele, a fiscalização autua mesmo que os treinamentos estejam em dia.
        </p>
      }
      sections={[
        {
          title: 'O que é a NR-10',
          body: (
            <>
              <p>
                A NR-10 estabelece os requisitos mínimos de <strong>segurança em instalações e serviços em eletricidade</strong>. Aplica-se a quem trabalha com geração, transmissão, distribuição, instalação, manutenção, operação ou consumo — incluindo trabalho próximo a sistemas elétricos energizados.
              </p>
              <p>
                Eletricidade é uma das principais causas de acidente fatal no trabalho no Brasil. Por isso a NR-10 é robusta, com treinamentos específicos, prontuário das instalações e supervisão técnica obrigatória.
              </p>
            </>
          ),
        },
        {
          title: 'Documentação obrigatória',
          body: (
            <ol>
              <li><strong>Prontuário das Instalações Elétricas (PIE)</strong> — conjunto de documentos sobre o sistema elétrico: diagramas, especificações, procedimentos, registro de inspeções, laudos.</li>
              <li><strong>Análise de Risco</strong> antes de qualquer intervenção em sistema energizado.</li>
              <li><strong>Permissão de Trabalho (PT)</strong> para intervenções específicas, com responsável técnico assinando.</li>
              <li><strong>Procedimentos de trabalho</strong> escritos para cada tipo de atividade, com sequência de bloqueio, etiquetagem e teste.</li>
              <li><strong>Laudo SPDA</strong> (Sistema de Proteção contra Descargas Atmosféricas) atualizado conforme NBR 5419.</li>
              <li><strong>Laudo de aterramento</strong> e medições periódicas.</li>
              <li><strong>Registro de treinamentos</strong> de todos os trabalhadores que interagem com eletricidade.</li>
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
                <li><strong>Curso Básico (40h)</strong> — para trabalhadores autorizados que executam atividades em instalações elétricas. Conteúdo programático específico.</li>
                <li><strong>Curso Complementar SEP (40h adicionais)</strong> — para quem trabalha em Sistemas Elétricos de Potência (alta tensão). Total mínimo de 80 horas com o básico.</li>
                <li><strong>Reciclagem bienal (a cada 2 anos)</strong> — todo trabalhador autorizado precisa renovar o treinamento a cada 2 anos para manter a autorização válida. Carga horária mínima definida no programa de treinamento da empresa. Treinamento vencido equivale a trabalhador não autorizado.</li>
                <li><strong>Reciclagem extraordinária</strong> — obrigatória após retorno de afastamento longo, mudança de função, evento de quase-acidente ou alteração significativa nas instalações elétricas.</li>
              </ul>
              <p>
                Treinamento de NR-10 é caro e crítico — não pode ser cópia barata, nem feito por instrutor sem habilitação. A consequência de um acidente fatal por treinamento inadequado vai muito além da multa.
              </p>
            </>
          ),
        },
        {
          title: 'Trabalhador qualificado, habilitado, capacitado, autorizado',
          body: (
            <>
              <p>
                A NR-10 estabelece 4 categorias com responsabilidades crescentes — entender qual se aplica ao seu trabalhador definé o que ele pode ou não fazer:
              </p>
              <ul>
                <li><strong>Qualificado</strong> — comprovação de conclusão de curso específico reconhecido oficialmente.</li>
                <li><strong>Habilitado</strong> — qualificado + registro no conselho profissional (CREA).</li>
                <li><strong>Capacitado</strong> — recebeu treinamento sob orientação de qualificado/habilitado e atua sob responsabilidade de qualificado/habilitado.</li>
                <li><strong>Autorizado</strong> — qualificado, habilitado ou capacitado mais autorização formal pela empresa para executar atividades específicas.</li>
              </ul>
              <p>
                Empresa que coloca um capacitado para fazer atividade que exige habilitado está expondo o trabalhador e a si mesma. Em fiscalização, é um dos primeiros pontos verificados.
              </p>
            </>
          ),
        },
        {
          title: 'Penalidades e responsabilidade',
          body: (
            <ul>
              <li><strong>Multa do MTE</strong> — varia conforme infração, número de trabalhadores e gravidade. Acidente fatal por descumprimento gera multa máxima.</li>
              <li><strong>Embargo da atividade</strong> — fiscal pode parar a operação na hora.</li>
              <li><strong>Responsabilização criminal</strong> em caso de acidente fatal — homicídio culposo da empresa, do gestor responsável e do supervisor (art. 121, §3º, CP).</li>
              <li><strong>Indenização cível</strong> — em fatalidade por choque elétrico, valores costumam ultrapassar R$ 500 mil para a família, fora pensão por morte, dano moral coletivo, etc.</li>
              <li><strong>Aumento do FAP</strong> — empresa paga mais GIIL-RAT por anos depois do acidente.</li>
              <li><strong>Periculosidade NR-16</strong> — eletricistas têm direito a 30% sobre salário; empresa que não paga gera passivo trabalhista.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        {
          q: 'Qual a validade do treinamento NR-10 e quando precisa de reciclagem?',
          a: 'O treinamento NR-10 tem validade de 2 anos. Após esse período, o trabalhador precisa fazer a reciclagem bienal para continuar autorizado. Além do prazo regular, a reciclagem é obrigatória também em casos extraordinários: retorno de afastamento prolongado, mudança de função, envolvimento em quase-acidente elétrico ou alteração significativa nas instalações. Trabalhador com treinamento vencido não pode ser considerado autorizado — é infração direta.',
        },
        {
          q: 'NR-10 só vale para alta tensão?',
          a: 'Não. A NR-10 vale para qualquer instalação elétrica — baixa, média ou alta tensão. O Curso Complementar SEP é específico para Sistemas Elétricos de Potência, mas o Curso Básico (40h) cobre baixa tensão e é exigência para qualquer trabalhador autorizado.',
        },
        {
          q: 'Quem pode dar treinamento NR-10?',
          a: 'Profissional qualificado e habilitado em eletricidade, com formação técnica reconhecida. Empresas costumam contratar instrutor externo certificado. Treinamento online unicamente é controverso — a parte prática precisa ser presencial.',
        },
        {
          q: 'PIE precisa estar no canteiro/local de trabalho?',
          a: 'Sim. O Prontuário das Instalações Elétricas precisa ficar disponível no estabelecimento, acessível a quem trabalha com a instalação. Em fiscalização é um dos primeiros documentos pedidos.',
        },
        {
          q: 'O que é &quot;sistema desenergizado&quot; conforme NR-10?',
          a: 'Não basta &quot;estar desligado&quot;. A NR-10 define 6 etapas para considerar desenergizado: seccionamento, impedimento de reenergização, constatação de ausência de tensão, instalação de aterramento, proteção dos elementos energizados e sinalização. Pular etapas é causa frequente de acidente fatal.',
        },
        {
          q: 'Eletricista terceirizado sem treinamento — quem responde?',
          a: 'A empresa contratada (empregadora direta) é responsável primária. Mas a contratante tem responsabilidade solidária se o trabalho ocorre em suas instalações ou serviço. Boa prática é exigir contratualmente apresentação dos certificados antes do início.',
        },
      ]}
      sidebarTitle="Sua empresa cumpre NR-10?"
      sidebarHook="Acidente elétrico fatal é uma das maiores fontes de responsabilização criminal de gestor. PIE atualizado, treinamentos em dia e laudo SPDA são obrigatórios. A SERMST audita."
      sidebarCtaLabel="Auditar conformidade NR-10"
      related={[
        { label: 'NR-35: Trabalho em altura', href: '/normas/nr-35-trabalho-em-altura' },
        { label: 'NR-18 para obras e canteiros', href: '/normas/nr-18-construcao-civil' },
        { label: 'NR-16: Periculosidade', href: '/normas/nr-16-periculosidade' },
        { label: 'PGR (NR-01) atualizado', href: '/normas/nr-01-pgr-atualizada' },
      ]}
    />
  );
}
