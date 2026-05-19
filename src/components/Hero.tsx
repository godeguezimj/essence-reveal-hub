import heroImg from "@/assets/hero-woman.jpg";
import { Sparkles, ShieldCheck, HeartHandshake, Stethoscope } from "lucide-react";

const trust = [
  { icon: Sparkles, label: "Planejamento individual" },
  { icon: Stethoscope, label: "Atendimento especializado" },
  { icon: HeartHandshake, label: "Resultado natural" },
  { icon: ShieldCheck, label: "Acompanhamento completo" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-shimmer" />
            <span className="text-xs tracking-widest uppercase text-gold-soft">
              Clínica de cirurgia plástica
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Realce sua beleza com{" "}
            <span className="text-gradient-gold italic">naturalidade</span>, segurança e planejamento personalizado
          </h1>

          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Procedimentos faciais planejados de forma individual para valorizar seus traços,
            respeitar sua essência e trazer mais confiança em cada detalhe.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#avaliacao" className="btn-gold px-7 py-3.5 rounded-full text-sm font-medium">
              Quero agendar minha avaliação
            </a>
            <a href="#procedimentos" className="btn-outline-gold px-7 py-3.5 rounded-full text-sm font-medium">
              Conhecer procedimentos
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {trust.map((t) => (
              <div key={t.label} className="glass rounded-2xl p-4 flex flex-col items-start gap-2">
                <t.icon size={18} className="text-gold" />
                <span className="text-xs text-foreground/80 leading-snug">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/20 to-transparent blur-2xl" />
          <div className="relative glass rounded-[2rem] p-3 overflow-hidden">
            <img
              src={heroImg}
              alt="Paciente em ambiente clínico premium da Full Plástica"
              width={1024}
              height={1280}
              className="rounded-[1.5rem] w-full h-[520px] lg:h-[600px] object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 glass-gold rounded-2xl px-5 py-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gold/20 grid place-items-center">
                <ShieldCheck size={18} className="text-gold" />
              </div>
              <div>
                <p className="text-xs text-gold-soft uppercase tracking-widest">Compromisso</p>
                <p className="text-sm text-foreground">Segurança em cada etapa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
