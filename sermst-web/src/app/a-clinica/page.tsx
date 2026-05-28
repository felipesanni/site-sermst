import { Metadata } from 'next';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/fade-in';
import { ShieldCheck, Zap, Users, MapPin, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { siteImages } from '@/lib/site-images';

export const metadata: Metadata = {
  title: 'A Clínica SERMST | Medicina do Trabalho em São Paulo',
  description: 'Há décadas cuidando da saúde ocupacional e segurança do trabalho. Conheça nossa estrutura centralizada no Largo do Paissandú, nosso corpo clínico e nosso compromisso com o compliance SST.',

  alternates: {
    canonical: 'https://sermst.com.br/a-clinica',
  },
  openGraph: {
    title: 'A Clínica SERMST | Medicina do Trabalho em São Paulo',
    description:
      'Há décadas cuidando da saúde ocupacional e segurança do trabalho. Conheça nossa estrutura no Largo do Paissandú, nosso corpo clínico e nosso compromisso com o compliance SST.',
    url: 'https://sermst.com.br/a-clinica',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function AClínicaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO INSTITUCIONAL */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-brand-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={siteImages.institutional.corporateHealthHero.src}
            alt={siteImages.institutional.corporateHealthHero.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-900/80"></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <span className="bg-accent-pink text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block shadow-lg shadow-accent-pink/20">
                Tradição & Inovação SST
              </span>
              <h1 className="h1-standard mb-10 text-white tracking-tighter">
                Mais que uma clínica, <br/>
                <span className="text-accent-pink italic font-serif">sua parceira estratégica.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed border-l-4 border-accent-pink pl-6 mb-12">
                Na SERMST, unimos a senioridade da medicina tradicional à agilidade do compliance digital. Cuidamos do seu maior ativo — as pessoas — enquanto protegemos seu CNPJ.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. NOSSO DIFERENCIAL - FOCO CORPORATIVO */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <Image
                  src={siteImages.institutional.operationTeam.src}
                  alt={siteImages.institutional.operationTeam.alt}
                  width={640}
                  height={480}
                  className="rounded-[4rem] shadow-3xl w-full h-auto"
                />
                <div className="absolute -bottom-10 -right-10 bg-brand-900 p-12 rounded-[3.5rem] shadow-2xl text-white hidden md:block">
                  <h4 className="text-4xl font-black mb-2 leading-none tracking-tighter">Referência</h4>
                  <p className="font-black text-white leading-tight">Em Medicina e Segurança do Trabalho</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <span className="text-brand-900/60 font-black text-xs uppercase tracking-widest mb-6 block">Sobre a Instituição</span>
              <h2 className="text-4xl md:text-6xl font-black text-brand-900 mb-8 leading-[0.9] tracking-tighter">Senioridade e Tecnologia a serviço do seu negócio.</h2>
              <div className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed">
                <p>
                  A SERMST é uma instituição com mais de 40 anos de história dedicada à excelência em medicina ocupacional e engenharia de segurança. Nossa trajetória é marcada pela entrega de soluções de blindagem patrimonial que protegem empresas e valorizam a vida.
                </p>
                <p>
                  Operamos com processos padronizados e tecnologia de ponta para garantir que cada ASO, laudo e envio ao eSocial seja executado com precisão cirúrgica e total segurança jurídica.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col gap-3">
                  <ShieldCheck className="w-10 h-10 text-brand-900" />
                  <span className="text-lg font-black text-brand-900 uppercase">Compliance Total</span>
                </div>
                <div className="flex flex-col gap-3">
                  <Zap className="w-10 h-10 text-accent-pink" />
                  <span className="text-lg font-black text-brand-900 uppercase">Ágilidade Digital</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. ESTRUTURA CENTRAL - LARGO DO PAISSANDÚ */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-brand-900 tracking-tighter leading-none mb-6">
              Infraestrutura de <br/> <span className="text-accent-pink italic font-serif">Alto Desempenho</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
              Nossa Unidade Central estrategicamente localizada no Largo do Paissandú oferece capacidade para atendimentos em massa com laboratório e exames complementares integrados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 group hover:border-brand-900 transition-all">
                <Building2 className="w-12 h-12 text-brand-900 mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-black text-brand-900 mb-4 uppercase tracking-tighter">Laboratório Integrado</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Realizamos exames laboratoriais, audiometria, ECG e EEG no mesmo local, eliminando o deslocamento e otimizando o tempo do funcionário.
                </p>
            </div>
            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 group hover:border-brand-900 transition-all">
                <Users className="w-12 h-12 text-brand-900 mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-black text-brand-900 mb-4 uppercase tracking-tighter">Corpo Técnico Especializado</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Equipe multidisciplinar com médicos, engenheiros e especialistas em eSocial trabalhando de forma síncrona.
                </p>
            </div>
            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 group hover:border-brand-900 transition-all">
                <MapPin className="w-12 h-12 text-brand-900 mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-black text-brand-900 mb-4 uppercase tracking-tighter">Atendimento Centralizado</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Localização facilitada no coração de São Paulo, conectando empresas de toda a região metropolitana em um único hub de saúde.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE CORPORATIVA - VALORES SERMST */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-brand-900 rounded-[5rem] p-12 md:p-24 text-white shadow-3xl">
            <div className="max-w-3xl">
               <span className="bg-accent-pink text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block shadow-lg shadow-accent-pink/20">
                 Nossa Visão
               </span>
               <h3 className="text-4xl md:text-6xl font-black mb-10 leading-none tracking-tighter">Foco Absoluto em Segurança Jurídica e Saúde Ocupacional.</h3>
               <div className="space-y-8 text-xl text-slate-300 font-medium leading-relaxed">
                 <p>
                   Acreditamos que a gestão de SST deve ser invisível e eficiente para a empresa, mas presente e protetora para o trabalhador. Nossa missão é desmistificar o complexo cenário regulatório brasileiro.
                 </p>
                 <div className="grid sm:grid-cols-2 gap-8 pt-6">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                       <CheckCircle className="w-8 h-8 text-accent-pink mb-4" />
                       <h5 className="text-white font-black uppercase text-sm mb-2">Padrão de Exames</h5>
                       <p className="text-slate-400 text-sm">Protocolos clínicos rigorosos é precisos.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                       <CheckCircle className="w-8 h-8 text-accent-pink mb-4" />
                       <h5 className="text-white font-black uppercase text-sm mb-2">Engenharia de Risco</h5>
                       <p className="text-slate-400 text-sm">Laudos técnicos com validade plena.</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL - PARCERIA ESTRATÉGICA */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <FadeIn>
            <Zap className="w-16 h-16 text-brand-900 mx-auto mb-10" />
            <h2 className="text-5xl md:text-7xl font-black text-brand-900 tracking-tighter leading-none mb-10">
              Pronto para elevar o <br/> <span className="text-accent-pink italic font-serif">padrão do seu SST?</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
               <a href="https://wa.me/5511915146447?text=Quero conhecer os benefícios de ser parceiro SERMST" className="btn-dark-safe w-full gap-4 rounded-[2.5rem] px-16 py-8 text-2xl md:w-auto">
                 Seja Parceiro SERMST <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
               </a>
            </div>
            <p className="mt-12 text-slate-400 font-bold uppercase tracking-widest">
              Atendimento Corporativo • Grande São Paulo • ABC Paulista
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
