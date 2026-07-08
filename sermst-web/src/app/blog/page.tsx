import type { Metadata } from 'next';
import { FadeIn } from '@/components/ui/fade-in';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conteúdo SST para Empresas | SERMST',
  description:
    'Guias práticos de medicina e segurança do trabalho organizados por tema: Saúde Ocupacional, RH e DP, Normas Regulamentadoras e Dicionário SST.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://sermst.com.br/blog',
  },
  openGraph: {
    title: 'Blog SERMST | Saúde e Segurança do Trabalho',
    description:
      'Artigos, guias e análises sobre medicina do trabalho, normas regulamentadoras, eSocial e gestão SST para empresas.',
    url: 'https://sermst.com.br/blog',
    type: 'website',
    locale: 'pt_BR',
  },
};

const hubs = [
  {
    href: '/empresario',
    label: 'Hub Empresario',
    description:
      'Conteudo para empresarios que ja operam, contratam e precisam entender regularizacao, documentos, rotina de equipe e riscos que acabam levando a RH, eSocial e SST.',
  },
  {
    href: '/saude',
    label: 'Hub Saúde Ocupacional',
    description:
      'Guias técnicos sobre medicina do trabalho, PCMSO, ASO, exames admissionais, exame demissional, EPIs e gestão de SST. Conteúdo voltado para médicos do trabalho, gestores de RH e responsáveis pelo DP.',
  },
  {
    href: '/rh',
    label: 'Hub RH e Departamento Pessoal',
    description:
      'Calculadora CNAE × Grau de Risco, guias sobre carta de demissão, responsabilidades do gerente em SST, como evitar processos trabalhistas, e tudo o que o DP precisa saber sobre obrigações de SST e eSocial.',
  },
  {
    href: '/normas',
    label: 'Normas Regulamentadoras',
    description:
      'Explicações objetivas das principais NRs — NR-01 (PGR), NR-07 (PCMSO), NR-10, NR-15, NR-16, NR-17, NR-18 e NR-35 — com foco no que a empresa precisa documentar e quais as penalidades pelo descumprimento.',
  },
  {
    href: '/dicionario',
    label: 'Dicionário SST',
    description:
      'Glossário completo de termos de Saúde e Segurança do Trabalho: ASO, LTCAT, PPP, PCMSO, PGR, CAT, SESMT, NR e dezenas de outros termos usados em laudos, documentos e fiscalizações do Ministério do Trabalho.',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn direction="up">
          <h1 className="h1-standard mb-4 text-brand-900">
            Conteúdo SST para empresas
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 leading-relaxed mb-4">
            A SERMST produz conteúdo técnico em Saúde e Segurança do Trabalho voltado para gestores, RH e DP
            de empresas que precisam entender obrigações legais sem depender de jargão jurídico.
          </p>
          <p className="max-w-2xl text-slate-600 leading-relaxed mb-12">
            O conteúdo está organizado em cinco hubs temáticos — cada um com guias práticos, calculadoras e
            referências legais atualizadas. Escolha o tema que mais se aplica à sua necessidade.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="mb-12 rounded-[2rem] border border-brand-900/10 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-black text-brand-900">Como usar este hub de conteúdo</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Este espaço funciona como uma porta de entrada para empresas que precisam entender saúde e segurança do
                trabalho com clareza prática. Em vez de reunir textos genéricos, a SERMST organiza o conteúdo por intenção
                real de busca: universo do empresário, saúde ocupacional, rotina de RH e departamento pessoal, normas
                regulamentadoras e conceitos técnicos que aparecem em laudos, eventos do eSocial e fiscalizações.
              </p>
              <p>
                Se a sua dúvida começa antes mesmo de SST aparecer no radar, o hub de Empresário é a melhor porta de
                entrada. Ele fala com quem já tem empresa em operação e precisa entender regularização, primeiro
                funcionário, documentos e riscos invisíveis.
              </p>
              <p>
                Se a sua dúvida está ligada a exames, ASO, PCMSO, PGR, EPIs ou obrigações clínicas, o hub de Saúde
                Ocupacional é o melhor caminho. Se o problema envolve carta de demissão, função de encarregado, treinamento
                de gerentes, DET, DIR, eSocial SST ou estrutura documental da empresa, o hub de RH e DP concentra os
                materiais mais úteis para decisão.
              </p>
              <p>
                A ideia é simples: ajudar o gestor a entender o risco, o documento exigido, a obrigação aplicável e o que
                costuma gerar multa ou passivo quando a operação segue sem critério técnico. Assim, cada página do site deixa
                de ser só conteúdo informativo e passa a funcionar como apoio real para tomada de decisão em SST.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {hubs.map((hub, i) => (
            <FadeIn key={hub.href} delay={i * 0.1}>
              <Link
                href={hub.href}
                className="group flex flex-col bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-accent-pink/30 transition-all duration-300"
              >
                <h2 className="text-xl font-black text-brand-900 mb-3 group-hover:text-accent-pink transition-colors">
                  {hub.label}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">{hub.description}</p>
                <span className="mt-6 text-xs font-black uppercase tracking-widest text-accent-pink">
                  Acessar hub →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
