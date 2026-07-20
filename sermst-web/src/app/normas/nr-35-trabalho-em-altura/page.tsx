import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-35: validade de 2 anos e treinamento de 8h | SERMST',
  description:
    'Veja o que a NR-35 exige acima de 2 metros: treinamento inicial de 8 horas, reciclagem a cada 2 anos, análise de risco, PT e aptidão no ASO.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-35-trabalho-em-altura' },
  openGraph: {
    title: 'NR-35: validade de 2 anos e treinamento de 8h | SERMST',
    description:
      'Veja o que a NR-35 exige: definição de trabalho em altura, treinamento obrigatório, análise de risco, permissão de trabalho e responsabilidades do empregador.',
    url: 'https://sermst.com.br/normas/nr-35-trabalho-em-altura',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR35Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/safety-equipment.jpg", alt: "Trabalhador com equipamento de proteção contra quedas em trabalho em altura NR-35" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-35-trabalho-em-altura"
      badgeText="NR-35"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-20',
      }}

      readingTime="8 min"
      h1="NR-35: trabalho em altura, validade do treinamento e exigências"
      intro="A NR-35 se aplica à atividade com diferença de nível acima de 2 metros do nível inferior e risco de queda. O treinamento inicial tem carga mínima de 8 horas e o periódico ocorre a cada 2 anos, mas a conformidade também depende de análise de risco, autorização, aptidão e resposta a emergências."
      quickAnswer={
        <p>
          A <strong>NR-35</strong> abrange atividades com diferença de nível acima de <strong>2 metros</strong> e risco de queda. Exige treinamento inicial teórico e prático de no mínimo 8 horas, treinamento periódico de 8 horas a cada dois anos, aptidão consignada no ASO, Análise de Risco e autorização formal. A Permissão de Trabalho é exigida para atividades não rotineiras.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é considerado trabalho em altura na NR-35',
          body: (
            <>
              <p>
                A NR-35 define trabalho em altura como a atividade com <strong>diferença de nível acima de 2 metros do nível inferior e risco de queda</strong>. Troca de luminárias, manutenção em telhados, montagem de andaimes, limpeza de fachadas e instalação de antenas podem se enquadrar, conforme a altura e as condições da tarefa.
              </p>
            </>
          ),
        },
        {
          title: 'O que a norma exige da empresa',
          body: (
            <ol>
              <li><strong>Análise de Risco:</strong> todo trabalho em altura deve ser precedido de AR. Nas atividades rotineiras, ela pode estar contemplada no procedimento operacional.</li>
              <li><strong>Permissão de Trabalho:</strong> exigida para atividades não rotineiras e limitada à duração, ao turno ou à jornada, conforme a norma.</li>
              <li><strong>Treinamento:</strong> 8 horas no treinamento inicial e 8 horas no periódico, realizado a cada dois anos, além do eventual quando aplicável.</li>
              <li><strong>Aptidão clínica:</strong> o PCMSO deve considerar condições que possam causar mal súbito e queda, além dos fatores psicossociais. A aptidão é registrada no ASO.</li>
              <li><strong>Sistemas de proteção contra quedas:</strong> selecionados a partir da AR, com prioridade para a proteção coletiva e uso de proteção individual nas hipóteses previstas.</li>
              <li><strong>Supervisão:</strong> todo trabalho em altura deve ser supervisionado na forma definida pela AR.</li>
              <li><strong>Emergência e salvamento:</strong> a empresa deve manter procedimentos, recursos e pessoas capacitadas de acordo com os cenários identificados.</li>
            </ol>
          ),
        },
        {
          title: 'Treinamento obrigatório na NR-35',
          body: (
            <>
              <p>
                O treinamento faz parte do processo de capacitação e deve combinar teoria e prática. A norma exige:
              </p>
              <ul>
                <li><strong>Carga horária mínima de 8 horas</strong> para o treinamento inicial.</li>
                <li><strong>Treinamento periódico a cada 2 anos:</strong> carga mínima de 8 horas e conteúdo definido pelo empregador.</li>
                <li><strong>Treinamento eventual:</strong> realizado nas situações previstas pela NR-01, de acordo com as mudanças e necessidades identificadas.</li>
                <li><strong>Conteúdo específico:</strong> normas, análise de riscos, condições impeditivas, proteção coletiva e individual, acidentes típicos, emergência e noções de resgate.</li>
                <li><strong>Instrutores com proficiência:</strong> sob responsabilidade de profissional qualificado ou legalmente habilitado em segurança do trabalho.</li>
              </ul>
              <p>
                Na construção civil, a NR-35 e a NR-18 podem se aplicar à mesma atividade. A capacitação necessária deve ser definida conforme a tarefa, o equipamento, os riscos e os requisitos específicos de cada norma.
                Se a sua dúvida envolve organização do canteiro, PGR, áreas de vivência, proteção coletiva e rotina documental da obra, vale ler também o guia da{' '}
                <Link href="/normas/nr-18-construcao-civil" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  NR-18 na construção civil
                </Link>.
              </p>
            </>
          ),
        },
        {
          title: 'Validade e reciclagem da NR-35: o que a empresa precisa controlar',
          body: (
            <>
              <p>
                Quando a empresa pergunta sobre validade da NR-35, geralmente está se referindo ao prazo do treinamento periódico. Ele deve ocorrer <strong>a cada dois anos</strong>, sem prejuízo do treinamento eventual quando aplicável.
              </p>
              <p>
                O certificado inicial é apenas uma parte do controle. A empresa também precisa acompanhar aptidão, autorização, escopo das atividades e treinamento periódico.
              </p>
              <ul>
                <li><strong>Treinamento periódico:</strong> a cada 2 anos, com carga mínima de 8 horas.</li>
                <li><strong>Treinamento eventual:</strong> quando ocorrer uma das situações previstas na NR-01 e houver necessidade de nova capacitação.</li>
                <li><strong>ASO específico:</strong> segue a periodicidade do PCMSO e não substitui a reciclagem do treinamento.</li>
                <li><strong>Controle documental:</strong> certificado, lista nominal, conteúdo programático e evidência de avaliação precisam estar organizados e acessíveis.</li>
              </ul>
              <p>
                O erro mais comum é tratar a NR-35 como um curso isolado. A autorização só faz sentido quando treinamento, aptidão, tarefa e medidas de prevenção continuam compatíveis.
              </p>
            </>
          ),
        },
        {
          title: 'Fiscalização e responsabilidades',
          body: (
            <>
              <p>
                Falhas no planejamento ou na proteção podem expor trabalhadores a quedas graves. As consequências dependem da infração e do caso concreto.
              </p>
              <ul>
                <li><strong>Autuação administrativa:</strong> o valor depende do item descumprido e dos critérios da NR-28.</li>
                <li><strong>Embargo ou interdição:</strong> podem ocorrer quando a situação caracterizar grave e iminente risco.</li>
                <li><strong>Acidente:</strong> a apuração pode envolver responsabilidades trabalhistas, civis, previdenciárias e penais, conforme conduta, dano e nexo.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Erros comuns no trabalho em altura',
          body: (
            <ul>
              <li><strong>Ignorar tarefas curtas:</strong> a duração não afasta o enquadramento quando existe diferença de nível acima de 2 metros e risco de queda.</li>
              <li><strong>Reduzir a carga do treinamento:</strong> os treinamentos inicial e periódico têm carga mínima de 8 horas.</li>
              <li><strong>Não inspecionar o sistema individual:</strong> há inspeções inicial, rotineira e periódica, com descarte de componentes defeituosos ou submetidos a impacto de queda.</li>
              <li><strong>Deixar o treinamento periódico atrasar:</strong> a empresa perde a base para manter a autorização do trabalhador.</li>
              <li><strong>ASO sem consignar aptidão para altura:</strong> a NR-35 exige esse registro.</li>
              <li><strong>Depender apenas de socorro externo:</strong> os procedimentos e recursos de resposta precisam considerar o tempo de resgate e os cenários da empresa.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        {
          q: 'A NR-35 vale por quanto tempo?',
          a: 'O treinamento periódico da NR-35 deve ocorrer a cada dois anos e ter carga mínima de 8 horas. Também pode ser necessário treinamento eventual nas situações previstas pela NR-01. Aptidão no ASO, autorização e condições da tarefa precisam permanecer válidas durante todo o período.',
        },
        {
          q: 'Quem pode dar treinamento NR-35?',
          a: 'Os instrutores devem ter proficiência comprovada no assunto, e o treinamento deve ocorrer sob responsabilidade de profissional qualificado ou legalmente habilitado em segurança do trabalho. A proficiência pode ser demonstrada por formação, experiência e outros registros compatíveis.',
        },
        {
          q: 'O empregado precisa renovar o ASO antes da reciclagem?',
          a: 'O exame ocupacional segue a NR-07 e o PCMSO, enquanto o treinamento periódico da NR-35 ocorre a cada dois anos. A empresa precisa verificar se a aptidão consignada no ASO e a autorização permanecem válidas antes da atividade.',
        },
        {
          q: 'NR-35 e NR-18 podem se aplicar juntas?',
          a: 'Sim. Na construção, a atividade pode estar sujeita aos requisitos gerais da NR-18 e aos requisitos de trabalho em altura da NR-35. Isso não significa que toda tarefa exija dois cursos idênticos; a capacitação deve seguir o conteúdo previsto para a atividade e os equipamentos utilizados.',
        },
        {
          q: 'O que acontece se um trabalhador se recusa a usar EPI?',
          a: 'A empresa deve interromper a exposição, verificar as causas da recusa, orientar novamente e aplicar suas regras internas de forma proporcional. O trabalhador deve cumprir os procedimentos e usar os equipamentos fornecidos, enquanto a organização mantém os deveres de seleção, fornecimento, orientação e supervisão.',
        },
        {
          q: 'Tem como reduzir custo da NR-35?',
          a: 'O planejamento deve primeiro buscar uma forma de evitar o trabalho em altura. Quando isso não for possível, entram medidas para eliminar o risco de queda e, por último, para reduzir suas consequências. A melhor solução depende da frequência, do acesso e da tarefa.',
        },
      ]}
      sidebarTitle="Sua empresa tem trabalho em altura?"
      sidebarHook="Treinamento, aptidão, autorização, análise de risco e resposta a emergências precisam funcionar juntos. A SERMST verifica esses pontos na operação."
      sidebarCtaLabel="Auditar conformidade NR-35"
      related={[
        { label: 'Avaliação psicossocial ocupacional para trabalho em altura', href: '/saude/avaliacao-psicossocial-ocupacional' },
        { label: 'Guia da NR-18 na construção civil', href: '/normas/nr-18-construcao-civil' },
        { label: 'NR-10: Eletricidade', href: '/normas/nr-10-eletricidade' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'Treinamentos NR / CIPA / brigada', href: '/servicos/treinamentos-nrs-cipa-brigada/sao-paulo' },
      ]}
    />
  );
}
