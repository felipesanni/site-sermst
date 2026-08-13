import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'O que são EPIs: Tipos, Obrigações e Documentação | SERMST',
  description:
    'EPI é exigência legal: fornecimento gratuito, treinamento, fiscalização e troca periódica. Veja o que a NR-06 exige e como a empresa deve documentar.',
  alternates: { canonical: 'https://sermst.com.br/saude/o-que-sao-epis' },
  openGraph: {
    title: 'EPIs: o que são, tipos obrigatórios e responsabilidades da empresa | SERMST',
    description:
      'Guia completo sobre Equipamentos de Proteção Individual: tipos, quando são obrigatórios, CA do Ministério do Trabalho, responsabilidade do empregador e documentação.',
    url: 'https://sermst.com.br/saude/o-que-sao-epis',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function EPIsPage() {
  return (
    <BlockbusterArticle
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/o-que-sao-epis"
      coverImage={{ src: "/images/articles/epis-seguranca.jpg", alt: "Equipamentos de proteção individual EPI dispostos em ambiente de trabalho" }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}

      h1="O que são EPIs e como cumprir a NR-06"
      intro="A gestão de EPI começa na seleção do equipamento adequado ao risco e continua com fornecimento gratuito, orientação, registro, acompanhamento do uso, higienização e substituição. A ficha de entrega é importante, mas não resolve o processo sozinha."
      sections={[
        {
          title: 'O que é EPI (em uma frase)',
          body: (
            <>
              <p>
                EPI é o dispositivo ou produto de uso individual concebido e fabricado para proteger contra riscos ocupacionais. Capacete, óculos, luva, respirador, protetor auditivo, calçado de segurança e cinturão contra quedas são exemplos, desde que tenham o Certificado de Aprovação exigido.
              </p>
              <p>
                O EPI protege o usuário. Medidas de proteção coletiva, como guarda-corpo, exaustão e enclausuramento de máquina, alcançam o ambiente ou um grupo de pessoas e devem ser priorizadas conforme a hierarquia de prevenção.
              </p>
            </>
          ),
        },
        {
          title: 'Obrigações da organização',
          body: (
            <ol>
              <li><strong>Fornecer gratuitamente</strong> o EPI adequado ao risco e em perfeito estado de conservação e funcionamento.</li>
              <li><strong>Adquirir equipamento com CA</strong> válido na data da compra e observar as condições de uso e armazenamento do fabricante.</li>
              <li><strong>Orientar e treinar quando aplicável</strong> sobre risco protegido, ajuste, limitações, manutenção, substituição e descarte.</li>
              <li><strong>Exigir o uso</strong> e verificar se o equipamento continua adequado à atividade.</li>
              <li><strong>Substituir imediatamente</strong> EPI danificado, vencido ou inadequado.</li>
              <li><strong>Registrar o fornecimento</strong> em livro, ficha ou sistema eletrônico, inclusive nas substituições.</li>
              <li><strong>Responsabilizar-se pela higienização e manutenção periódica</strong> quando esses procedimentos forem aplicáveis.</li>
            </ol>
          ),
        },
        {
          title: 'O que o trabalhador é obrigado a fazer',
          body: (
            <ul>
              <li>Usar o EPI corretamente durante toda a jornada de trabalho</li>
              <li>Conservar o equipamento sob sua guarda</li>
              <li>Comunicar à empresa qualquer alteração que o torne impróprio (estragou, perdeu, ficou pequeno)</li>
              <li>Cumprir as orientações de uso, higiene e armazenamento</li>
            </ul>

          ),
        },
        {
          title: 'O que conta como EPI por categoria',
          body: (
            <>
              <p>A NR-06 classifica os EPIs por região do corpo protegida:</p>
              <ul>
                <li><strong>Cabeça</strong>: capacete (impacto, perfuração, eletricidade)</li>
                <li><strong>Olhos e face</strong>: óculos de segurança, viseira facial, máscara de solda</li>
                <li><strong>Auditiva</strong>: protetor auricular tipo concha ou tipo plug</li>
                <li><strong>Respiratória</strong>: respirador semifacial, máscara PFF1/PFF2/PFF3, máscara autônoma para químicos</li>
                <li><strong>Tronco</strong>: vestimenta de proteção química, avental, colete refletivo</li>
                <li><strong>Membros superiores</strong>: luva (impermeável, antibacteriana, anticortes, isolante elétrica)</li>
                <li><strong>Membros inferiores</strong>: calçado de segurança com biqueira, perneira, bota PVC</li>
                <li><strong>Corpo inteiro</strong>: vestimenta para trabalho a quente, traje encapsulado, vestimenta antichama</li>
                <li><strong>Proteção contra quedas</strong>: cinturão de segurança, talabarte e trava-quedas; a ancoragem integra o sistema de proteção, mas não é EPI por si só.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Ficha de entrega: o que registrar',
          body: (
            <>
              <p>
                O registro de fornecimento ajuda a demonstrar qual equipamento foi entregue, quando e para qual trabalhador. Ele pode ser físico ou eletrônico. A ausência do registro fragiliza a comprovação, mas a ficha, sozinha, também não prova seleção adequada, treinamento ou uso efetivo.
              </p>
              <p>
                A ficha precisa conter:
              </p>
              <ul>
                <li>Nome, função e matrícula do trabalhador</li>
                <li>Descrição do EPI entregue (tipo, fabricante, número do CA, tamanho)</li>
                <li>Quantidade entregue</li>
                <li>Data da entrega</li>
                <li>Assinatura do trabalhador</li>
                <li>Assinatura do responsável pela entrega</li>
                <li>Espaço para registro de devolução, substituição, perda</li>
              </ul>
              <p>A assinatura pode ser substituída por registro eletrônico que permita identificar o trabalhador e preservar a rastreabilidade.</p>
            </>
          ),
        },
        {
          title: 'O que fazer quando o trabalhador se recusa a usar EPI',
          body: (
            <>
              <ol>
                <li><strong>Documentar a recusa.</strong> Registro escrito com data, hora, testemunhas.</li>
                <li><strong>Aplicar advertência formal</strong>. Carta de advertência por descumprimento de procedimento de segurança.</li>
                <li><strong>Verificar a causa</strong>. Desconforto, tamanho errado, incompatibilidade entre EPIs ou falta de entendimento exigem correção técnica.</li>
                <li><strong>Aplicar as medidas disciplinares cabíveis</strong> de forma proporcional e coerente com o regulamento e a orientação trabalhista da empresa.</li>
              </ol>
              <p>
                A recusa não elimina a obrigação da empresa de corrigir o problema e impedir a continuidade de uma atividade insegura. Registre a orientação, a causa identificada e a providência adotada.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O EPI tem validade?',
          a: 'O CA tem prazo próprio para comercialização. Um EPI adquirido com CA válido pode continuar em uso dentro de sua vida útil, desde que mantenha as condições de proteção e sejam observadas as orientações do fabricante. Cancelamento, alteração do produto ou perda de desempenho exigem análise específica.',
        },
        {
          q: 'Quem escolhe o EPI adequado?',
          a: 'A organização seleciona o EPI com base na atividade, nos perigos, na eficácia necessária e na compatibilidade entre equipamentos. O SESMT participa quando existe, e a seleção deve considerar a escuta dos usuários e da CIPA ou representante nomeado.',
        },
        {
          q: 'EPI pode ser cobrado do trabalhador?',
          a: 'O fornecimento é gratuito. Eventual desconto por dano depende dos limites do art. 462 da CLT, das provas e das condições ajustadas; não deve ser tratado como cobrança automática por perda ou desgaste normal.',
        },
        {
          q: 'Quem fornece o EPI ao trabalhador terceirizado?',
          a: 'A empregadora direta deve fornecer o EPI. A contratante também tem deveres de coordenação e informação sobre os riscos existentes em suas instalações. Contrato, integração, fiscalização e troca de documentos devem definir como as medidas serão verificadas, sem presumir responsabilidade idêntica em todo caso.',
        },
        {
          q: 'EPI vence ou estraga, quando substituir?',
          a: 'Imediatamente quando: o CA expirou, o equipamento sofreu impacto/dano, mostra desgaste que comprometa a função, ou venceu a vida útil indicada pelo fabricante. Capacete que sofreu impacto não pode mais ser usado mesmo aparentemente íntegro.',
        },
      ]}
      sidebarTitle="Sua empresa documenta a entrega de EPI?"
      sidebarHook="A ficha de entrega precisa estar ligada ao PGR, à seleção técnica e à orientação do trabalhador. A SERMST revisa o processo completo e aponta registros ou controles ausentes."
      sidebarCtaLabel="Auditar gestão de EPI"
      related={[
        { label: 'NR-35: Trabalho em altura', href: '/normas/nr-35-trabalho-em-altura' },
        { label: 'Guia da NR-18 para canteiros e obras', href: '/normas/nr-18-construcao-civil' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
      ]}
    />
  );
}
