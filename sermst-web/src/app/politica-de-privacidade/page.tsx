import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Política de Privacidade | SERMST',
  description:
    'Entenda como a SERMST coleta, utiliza, compartilha e protege dados pessoais em seus canais digitais e serviços ocupacionais.',
  alternates: {
    canonical: 'https://sermst.com.br/politica-de-privacidade',
  },
  openGraph: {
    title: 'Política de Privacidade | SERMST',
    description:
      'Informações claras sobre o tratamento de dados pessoais pela SERMST, seus direitos e o canal de privacidade.',
    url: 'https://sermst.com.br/politica-de-privacidade',
    type: 'website',
    locale: 'pt_BR',
  },
};

const navigationItems = [
  { id: 'visao-geral', label: 'Visão geral' },
  { id: 'dados-coletados', label: 'Dados tratados' },
  { id: 'finalidades-bases', label: 'Finalidades e bases legais' },
  { id: 'cookies', label: 'Cookies e tecnologias' },
  { id: 'compartilhamento', label: 'Compartilhamento' },
  { id: 'retencao', label: 'Retenção e segurança' },
  { id: 'direitos', label: 'Seus direitos' },
  { id: 'atualizacoes', label: 'Atualizações' },
];

const basisRows = [
  {
    purpose: 'Atender contatos, pedidos de orçamento e diagnósticos',
    detail: 'Responder sua solicitação, entender o cenário da empresa, indicar soluções e organizar o retorno comercial.',
    basis: 'Procedimentos preliminares de contrato, execução de contrato ou consentimento, conforme o caso.',
  },
  {
    purpose: 'Prestar serviços ocupacionais e manter a relação com clientes',
    detail: 'Agendar atendimentos, emitir documentos, acompanhar exames, entregar serviços e cumprir rotinas administrativas.',
    basis: 'Execução de contrato e cumprimento de obrigações legais ou regulatórias.',
  },
  {
    purpose: 'Tratar dados necessários à saúde ocupacional',
    detail: 'Quando aplicável à prestação de serviços de saúde, segurança e medicina do trabalho, com acesso restrito e finalidade específica.',
    basis: 'Tutela da saúde, obrigação legal ou regulatória e outras hipóteses previstas para dados sensíveis.',
  },
  {
    purpose: 'Proteger o site, os formulários e os canais',
    detail: 'Prevenir spam, fraude, abuso, acessos indevidos e incidentes de segurança, além de manter a disponibilidade do serviço.',
    basis: 'Legítimo interesse, segurança e cumprimento de obrigação legal, com respeito aos direitos do titular.',
  },
  {
    purpose: 'Medir desempenho e campanhas',
    detail: 'Entender como as pessoas chegam ao site, quais páginas ajudam na decisão e como melhorar a experiência e a comunicação.',
    basis: 'Consentimento quando exigido ou legítimo interesse, sempre com os controles aplicáveis ao tratamento.',
  },
];

const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://sermst.com.br/politica-de-privacidade',
  url: 'https://sermst.com.br/politica-de-privacidade',
  name: 'Política de Privacidade | SERMST',
  description:
    'Informações sobre o tratamento de dados pessoais realizado pela SERMST em seus canais digitais e serviços ocupacionais.',
  isPartOf: { '@id': 'https://sermst.com.br/#website' },
  about: { '@id': 'https://sermst.com.br/#organization' },
  inLanguage: 'pt-BR',
};

function PolicySection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10"
    >
      <span className="mb-3 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
        {eyebrow}
      </span>
      <h2 className="mb-5 text-2xl font-black leading-tight text-brand-900 md:text-3xl">
        {title}
      </h2>
      <div className="space-y-5 text-[1.02rem] leading-8 text-slate-600 [&_a]:font-semibold [&_a]:text-brand-900 [&_a]:underline [&_a]:decoration-accent-pink/40 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a]:hover:text-accent-pink [&_strong]:font-bold [&_strong]:text-brand-900">
        {children}
      </div>
    </section>
  );
}

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', item: 'https://sermst.com.br' },
          { name: 'Política de Privacidade' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />

      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent-pink/20 blur-[100px]" />
        <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-brand-500/25 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-pink/30 bg-accent-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Transparência e confiança
            </span>
            <h1 className="h1-standard mb-6 text-white md:text-6xl">
              Política de Privacidade
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-2xl">
              Explicamos, de forma direta, como a SERMST trata dados pessoais em
              seu site, formulários, canais de atendimento e serviços de saúde
              ocupacional e segurança do trabalho.
            </p>

            <div className="mt-10 flex flex-col gap-4 text-sm font-semibold text-slate-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <span className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4 text-accent-pink" aria-hidden="true" />
                Última atualização: 14 de setembro de 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <LockKeyhole className="h-4 w-4 text-accent-pink" aria-hidden="true" />
                Canal de privacidade disponível
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Finalidade clara',
                text: 'Tratamos somente o que é necessário para atender, operar e proteger nossos canais.',
              },
              {
                title: 'Dados sob controle',
                text: 'Você pode pedir acesso, correção, informação e outras providências previstas na LGPD.',
              },
              {
                title: 'Canal direto',
                text: 'Nossa equipe recebe solicitações de titulares pelo e-mail de privacidade informado nesta página.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm"
              >
                <CheckCircle2 className="mb-4 h-5 w-5 text-accent-pink" aria-hidden="true" />
                <h2 className="mb-2 text-lg font-black text-white">{item.title}</h2>
                <p className="text-sm leading-relaxed text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8 lg:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Nesta página
              </p>
              <nav aria-label="Seções da Política de Privacidade">
                <ol className="space-y-1">
                  {navigationItems.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="group flex items-start gap-3 rounded-lg px-3 py-2 text-sm font-semibold leading-snug text-slate-500 transition-colors hover:bg-slate-50 hover:text-brand-900"
                      >
                        <span className="mt-0.5 text-xs font-black text-accent-pink/70 group-hover:text-accent-pink">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="mt-5 border-t border-slate-100 pt-5">
                <a
                  href="mailto:comercial@sermst.com.br?subject=Solicita%C3%A7%C3%A3o%20LGPD"
                  className="flex items-center gap-2 text-sm font-bold text-brand-900 transition-colors hover:text-accent-pink"
                >
                  <Mail className="h-4 w-4 text-accent-pink" aria-hidden="true" />
                  Falar sobre meus dados
                </a>
              </div>
            </div>
          </aside>

          <article className="min-w-0 space-y-8">
            <PolicySection id="visao-geral" eyebrow="01 · Contexto" title="Quem somos e a que esta política se aplica">
              <p>
                Esta Política de Privacidade se aplica ao site <strong>sermst.com.br</strong>,
                às páginas, formulários, ferramentas e canais digitais da SERMST,
                incluindo contatos realizados por e-mail, WhatsApp e outros meios
                indicados no site.
              </p>
              <p>
                A responsável pelo tratamento, nos limites em que toma as decisões
                sobre o uso dos dados, é a <strong>SERMST Gestão Ocupacional Ltda.</strong>,
                CNPJ <strong>28.125.178/0001-88</strong>, com endereço no Largo do
                Paissandu, 72, 3º Andar, Conjunto 301, Centro Histórico, São Paulo/SP,
                CEP 01034-901.
              </p>
              <p>
                Em alguns serviços prestados para empresas, a SERMST pode atuar como
                operadora seguindo instruções do cliente, que será o controlador de
                determinado tratamento. Quando isso acontecer, o pedido do titular
                poderá precisar ser direcionado à empresa que definiu a finalidade
                daquele tratamento.
              </p>
            </PolicySection>

            <PolicySection id="dados-coletados" eyebrow="02 · Transparência" title="Quais dados pessoais podemos tratar">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="mb-3 text-lg font-black text-brand-900">Dados fornecidos por você</h3>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-7">
                    <li>nome, e-mail, telefone ou WhatsApp;</li>
                    <li>empresa, cargo, segmento e porte da operação;</li>
                    <li>CNPJ, quando informado em uma ferramenta ou atendimento;</li>
                    <li>demanda, mensagem, preferências e informações enviadas no contato;</li>
                    <li>dados necessários para proposta, contratação, agendamento ou atendimento.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="mb-3 text-lg font-black text-brand-900">Dados de navegação e origem</h3>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-7">
                    <li>IP, navegador, dispositivo, páginas acessadas e horários;</li>
                    <li>referência de origem e parâmetros de campanha, como UTM, gclid e fbclid;</li>
                    <li>interações com formulários, páginas e eventos de conversão;</li>
                    <li>informações armazenadas em tecnologias locais de sessão ou atribuição.</li>
                  </ul>
                </div>
              </div>
              <p>
                <strong>Dados de saúde</strong> podem ser tratados quando forem
                necessários para a prestação de serviços de medicina e saúde
                ocupacional. Esse tratamento ocorre em contexto específico, com
                acesso restrito e controles compatíveis com a natureza sensível da
                informação. Evite enviar dados clínicos ou documentos de saúde em
                formulários gerais de orçamento se eles não forem solicitados.
              </p>
            </PolicySection>

            <PolicySection id="finalidades-bases" eyebrow="03 · Tratamento" title="Para que usamos os dados e quais são as bases legais">
              <p>
                A SERMST utiliza dados pessoais para finalidades determinadas e
                compatíveis com o contexto em que foram coletados. A base legal pode
                variar conforme o tipo de dado, o canal, o serviço e a relação com o
                titular.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[720px] w-full border-collapse text-left text-sm">
                  <thead className="bg-brand-900 text-white">
                    <tr>
                      <th scope="col" className="w-[26%] p-4 font-black">Finalidade</th>
                      <th scope="col" className="w-[42%] p-4 font-black">Como acontece</th>
                      <th scope="col" className="w-[32%] p-4 font-black">Base legal possível</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {basisRows.map((row) => (
                      <tr key={row.purpose} className="align-top even:bg-slate-50">
                        <th scope="row" className="p-4 font-bold leading-6 text-brand-900">{row.purpose}</th>
                        <td className="p-4 leading-6 text-slate-600">{row.detail}</td>
                        <td className="p-4 leading-6 text-slate-600">{row.basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm leading-7 text-slate-500">
                A indicação acima é informativa e não transforma consentimento em
                requisito para todos os tratamentos. A LGPD prevê hipóteses como
                execução de contrato, obrigação legal, tutela da saúde, segurança e
                legítimo interesse, além do consentimento quando aplicável.
              </p>
            </PolicySection>

            <PolicySection id="cookies" eyebrow="04 · Navegação" title="Cookies, armazenamento local e tecnologias semelhantes">
              <p>
                O site pode utilizar cookies, armazenamento local ou de sessão,
                pixels e tags para operar páginas, proteger formulários, medir
                desempenho, registrar a origem de uma oportunidade e entender a
                efetividade das campanhas.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ['Essenciais', 'Recursos necessários para funcionamento, segurança, prevenção de abuso e envio de formulários.'],
                  ['Medição', 'Informações agregadas ou associadas à navegação para analisar desempenho e melhorar conteúdo.'],
                  ['Marketing', 'Medição de conversões e campanhas, quando as tecnologias correspondentes estiverem habilitadas.'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="mb-2 font-black text-brand-900">{title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
              <p>
                O navegador permite bloquear ou apagar cookies e dados locais. Essa
                escolha pode afetar recursos do site. Tecnologias de terceiros, como
                ferramentas de análise, publicidade e proteção contra spam, também
                podem aplicar suas próprias políticas e configurações.
              </p>
            </PolicySection>

            <PolicySection id="compartilhamento" eyebrow="05 · Destinatários" title="Com quem podemos compartilhar dados">
              <p>
                Compartilhamos somente os dados necessários para cada finalidade,
                com prestadores e parceiros que apoiam a operação, sempre observando
                as obrigações de confidencialidade e segurança aplicáveis.
              </p>
              <ul className="grid gap-3 md:grid-cols-2">
                {[
                  'provedores de hospedagem, infraestrutura, e-mail, CRM e suporte operacional;',
                  'serviços de segurança e prevenção de spam, como soluções de validação de formulários;',
                  'ferramentas de análise, publicidade e mensuração, quando habilitadas no ambiente do site;',
                  'profissionais, clínicas, laboratórios e parceiros necessários à execução de serviços contratados;',
                  'autoridades públicas, órgãos reguladores e terceiros quando houver obrigação legal ou exercício regular de direitos.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-base leading-7">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent-pink" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                A SERMST <strong>não comercializa dados pessoais</strong>. Alguns
                fornecedores de tecnologia podem processar dados fora do Brasil. Quando
                houver transferência internacional, adotaremos as medidas e garantias
                exigidas pela legislação e pelas regras aplicáveis da ANPD.
              </p>
            </PolicySection>

            <PolicySection id="retencao" eyebrow="06 · Proteção" title="Retenção, segurança e incidentes">
              <p>
                Os dados são mantidos pelo tempo necessário para cumprir a finalidade
                da coleta, atender obrigações legais e regulatórias, executar
                contratos, resolver disputas, prevenir fraude e exercer direitos.
                Depois disso, quando tecnicamente possível e juridicamente adequado,
                os dados são eliminados ou anonimizados.
              </p>
              <p>
                O prazo pode variar conforme a natureza do dado. Registros de
                atendimento e contratação podem precisar ser conservados para
                obrigações administrativas, fiscais, regulatórias ou de defesa de
                direitos. Registros técnicos e de campanha tendem a seguir períodos
                compatíveis com segurança, análise e configuração dos respectivos
                serviços.
              </p>
              <div className="rounded-2xl border border-brand-900/10 bg-brand-900/[0.04] p-5">
                <div className="flex items-start gap-4">
                  <LockKeyhole className="mt-1 h-6 w-6 shrink-0 text-brand-500" aria-hidden="true" />
                  <p className="text-base leading-7 text-slate-700">
                    Adotamos medidas técnicas e administrativas proporcionais ao
                    risco, como controle de acesso, limitação de dados, comunicação
                    segura, validações antiabuso e orientação das pessoas que atuam
                    no tratamento. Nenhum ambiente é absolutamente livre de riscos;
                    por isso, também mantemos procedimentos para avaliar e tratar
                    incidentes de segurança.
                  </p>
                </div>
              </div>
            </PolicySection>

            <PolicySection id="direitos" eyebrow="07 · Titulares" title="Seus direitos e como fazer uma solicitação">
              <p>
                Nos termos da LGPD, você pode solicitar, conforme o caso e os limites
                legais aplicáveis:
              </p>
              <ul className="grid gap-3 md:grid-cols-2">
                {[
                  'confirmação da existência de tratamento e acesso aos dados;',
                  'correção de dados incompletos, inexatos ou desatualizados;',
                  'anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;',
                  'portabilidade, observados os segredos comercial e industrial e a regulamentação aplicável;',
                  'informação sobre compartilhamentos e sobre a possibilidade de não fornecer consentimento;',
                  'revogação do consentimento e oposição quando cabível;',
                  'revisão de decisões tomadas unicamente com base em tratamento automatizado, quando aplicável.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-base leading-7">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent-pink" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-accent-pink/20 bg-accent-pink/[0.05] p-6">
                <h3 className="mb-2 text-xl font-black text-brand-900">Canal de privacidade</h3>
                <p className="mb-4 text-base leading-7 text-slate-700">
                  Envie sua solicitação para{' '}
                  <a href="mailto:comercial@sermst.com.br?subject=Solicita%C3%A7%C3%A3o%20LGPD">
                    comercial@sermst.com.br
                  </a>{' '}
                  com o assunto “Solicitação LGPD”. Para proteger você, podemos
                  pedir informações adicionais para confirmar sua identidade e
                  localizar o tratamento solicitado. O atendimento é gratuito,
                  observados os prazos e requisitos legais aplicáveis.
                </p>
                <a
                  href="mailto:comercial@sermst.com.br?subject=Solicita%C3%A7%C3%A3o%20LGPD"
                  className="btn-primary-safe inline-flex"
                >
                  Enviar solicitação
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="text-sm leading-7 text-slate-500">
                Se o tratamento foi realizado em nome de uma empresa cliente, ela
                poderá ser o canal adequado para o exercício dos direitos. Se você
                entender que houve violação de seus direitos, também pode procurar a
                Autoridade Nacional de Proteção de Dados (ANPD), conforme os canais
                oficiais disponíveis.
              </p>
            </PolicySection>

            <PolicySection id="atualizacoes" eyebrow="08 · Governança" title="Atualizações desta política">
              <p>
                Esta política pode ser atualizada para refletir mudanças nos serviços,
                tecnologias utilizadas, processos internos ou requisitos legais. A
                versão vigente ficará disponível nesta página com a data de revisão.
              </p>
              <p>
                Para referência, consulte também o{' '}
                <a
                  href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
                >
                  texto atualizado da LGPD no Planalto
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>{' '}
                e os materiais da{' '}
                <a
                  href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
                >
                  ANPD para titulares
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>.
              </p>
            </PolicySection>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1000px] flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center lg:px-8">
          <div>
            <span className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Ainda ficou com dúvida?
            </span>
            <h2 className="text-2xl font-black text-brand-900 md:text-3xl">
              Fale com a equipe da SERMST.
            </h2>
            <p className="mt-2 text-slate-600">
              Para dúvidas sobre seus dados ou sobre um atendimento, use nosso canal oficial.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="mailto:comercial@sermst.com.br?subject=Privacidade%20e%20dados%20pessoais"
              className="btn-primary-safe w-full sm:w-auto"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Enviar e-mail
            </a>
            <Link href="/contato" className="btn-outline-safe w-full sm:w-auto">
              Ir para contato
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
