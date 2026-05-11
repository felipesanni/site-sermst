import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'O que são EPIs: equipamentos de proteção individual é o que sua empresa precisa documentar | SERMST',
  description:
    'EPI é exigência legal: fornecimento gratuito, treinamento de uso, fiscalização, troca periódica. Falhar em qualquer parte é responsabilidade da empresa. Veja o que NR-06 exige e como documentar.',
  alternates: { canonical: 'https://sermst.com.br/saude/o-que-sao-epis' },
};

export default function EPIsPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/o-que-sao-epis"
      coverImage={{ src: "/images/articles/epis-seguranca.jpg", alt: "Equipamentos de proteção individual EPI dispostos em ambiente de trabalho" }}
      h1="O que são EPIs: o equipamento que protege o trabalhador e o CNPJ da empresa"
      intro="EPI (Equipamento de Proteção Individual) é exigência legal — fornecimento gratuito, treinamento de uso, fiscalização do uso e troca periódica. Falhar em qualquer parte é responsabilidade direta da empresa. Veja como documentar e fiscalizar."
      sections={[
        {
          title: 'O que é EPI (em uma frase)',
          body: (
            <>
              <p>
                EPI é todo equipamento de uso individual que protege o trabalhador contra riscos ocupacionais. Capacete, óculos, luva, máscara, protetor auricular, bota com bico de aço, cinto paraquedista. A NR-06 é a norma que regulamenta — define quando é obrigatório, como fornecer, treinar, fiscalizar e substituir.
              </p>
              <p>
                Diferente do EPC (Equipamento de Proteção Coletiva — guarda-corpo, exaustor, isolamento de máquina), o EPI protege uma pessoa por vez. Por isso a NR-06 manda priorizar o EPC sempre que possível e usar EPI como complemento ou quando o EPC for inviável.
              </p>
            </>
          ),
        },
        {
          title: 'O que a empresa é obrigada a fazer (não negociável)',
          body: (
            <ol>
              <li><strong>Fornecer gratuitamente</strong> o EPI adequado ao risco da atividade. Cobrar do trabalhador é multa direta.</li>
              <li><strong>Verificar o CA (Certificado de Aprovação)</strong> do EPI — sem CA válido, não vale como EPI.</li>
              <li><strong>Treinar o trabalhador</strong> no uso correto, conservação e limitações do equipamento.</li>
              <li><strong>Fiscalizar o uso</strong> efetivo durante a jornada — não basta entregar.</li>
              <li><strong>Substituir imediatamente</strong> EPI danificado, vencido ou inadequado.</li>
              <li><strong>Manter ficha de entrega</strong> assinada pelo trabalhador a cada substituição — peça-chave de defesa em ação trabalhista.</li>
              <li><strong>Higienizar e armazenar</strong> EPI de uso compartilhado (raros casos — preferência sempre é uso individual).</li>
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
                <li><strong>Proteção contra quedas</strong>: cinto paraquedista, talabarte, trava-quedas, ponto de ancoragem</li>
              </ul>
            </>
          ),
        },
        {
          title: 'O ponto mais cobrado em fiscalização: ficha de entrega',
          body: (
            <>
              <p>
                A ficha de entrega de EPI é o documento mais cobrado em fiscalização do MTE e mais usado em defesa de ação trabalhista. Sem ela, a empresa não consegue provar que forneceu o equipamento — e isso vira responsabilidade direta em qualquer acidente.
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
              <p>
                Ficha pode ser em papel ou eletrônica. O importante é existir, estar atualizada e ser localizável.
              </p>
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
                <li><strong>Repetir o treinamento</strong>. Se for ignorância, treinamento resolve. Se for resistência, vira indisciplina.</li>
                <li><strong>Em caso de reincidência</strong>, escalar para suspensão. Em caso de risco grave, justa causa por descumprimento de obrigação contratual e norma de segurança.</li>
              </ol>
              <p>
                Sem evidência da fiscalização e da reação da empresa, em qualquer acidente posterior a defesa cai — mesmo se o trabalhador estava se recusando a usar o EPI.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O EPI tem validade?',
          a: 'O CA (Certificado de Aprovação) tem prazo dé válidade — 5 anos, renovável. Quando o CA está vencido ou cancelado, o EPI perdé válidade legal mesmo se ainda estiver em condição física boa. Empresa precisa monitorar a base do MTE e substituir quando necessário.',
        },
        {
          q: 'Quem escolhe o EPI adequado?',
          a: 'A escolha técnica do EPI é responsabilidade do SESMT (próprio ou terceirizado) com base no PGR. Não é decisão administrativa nem do trabalhador. EPI errado para o risco é tão grave quanto a falta dele.',
        },
        {
          q: 'EPI pode ser cobrado do trabalhador?',
          a: 'Não, em hipótese alguma na operação normal. A única situação em que se desconta é em caso de dolo (perda intencional ou dano deliberado) e mesmo assim com formalização prévia em regulamento interno. Cobrar EPI do salário sem isso é descumprimento direto da NR-06.',
        },
        {
          q: 'Trabalhador terceirizado — quem fornece o EPI?',
          a: 'A empresa contratada (empregadora direta) é responsável primária. Mas a contratante (tomadora do serviço) tem responsabilidade solidária por SST do terceirizado dentro de suas instalações. Boa prática é exigir contratualmente que a contratada apresente fichas de entrega.',
        },
        {
          q: 'EPI vence ou estraga, quando substituir?',
          a: 'Imediatamente quando: o CA expirou, o equipamento sofreu impacto/dano, mostra desgaste que comprometa a função, ou venceu a vida útil indicada pelo fabricante. Capacete que sofreu impacto não pode mais ser usado mesmo aparentemente íntegro.',
        },
      ]}
      sidebarTitle="Sua empresa documenta a entrega de EPI?"
      sidebarHook="Sem ficha de entrega assinada, a empresa não tem como provar que cumpriu a NR-06. Em fiscalização ou em acidente, é o primeiro documento pedido. A SERMST audita e organiza o processo."
      sidebarCtaLabel="Auditar gestão de EPI"
      related={[
        { label: 'NR-35: Trabalho em altura', href: '/normas/nr-35-trabalho-em-altura' },
        { label: 'NR-18: Construção civil', href: '/normas/nr-18-construcao-civil' },
        { label: 'PGR (NR-01) atualizado', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
      ]}
    />
  );
}
