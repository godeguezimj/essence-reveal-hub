import { Sparkles, ShieldCheck, HeartHandshake, Stethoscope, ArrowRight, Check } from "lucide-react";

const trust = [
  { icon: Sparkles, label: "Planejamento exclusivo" },
  { icon: HeartHandshake, label: "Atendimento humanizado" },
  { icon: Stethoscope, label: "Resultado natural" },
  { icon: ShieldCheck, label: "Acompanhamento completo" },
];

const microcopy = [
  "Avaliação personalizada",
  "Atendimento premium",
  "Procedimentos planejados individualmente",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* Organic background glows */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />
      <div
        aria-hidden
        className="absolute -z-10 top-[-8rem] right-[-6rem] w-[28rem] h-[28rem] rounded-full blur-3xl opacity-50 animate-hero-float"
        style={{ background: "radial-gradient(circle, oklch(0.48 0.22 263 / 0.18), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -z-10 bottom-[-6rem] left-[-4rem] w-[24rem] h-[24rem] rounded-full blur-3xl opacity-50 animate-hero-float-2"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.18 260 / 0.14), transparent 70%)" }}
      />

      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10 text-center">
        <div className="animate-fade-up flex flex-col items-center">
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-shimmer" />
            <span className="text-[10px] sm:text-xs tracking-[0.22em] uppercase text-gold-soft font-medium">
              Clínica de cirurgia plástica
            </span>
          </div>

          <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.75rem] leading-[1.02] tracking-tight">
            Sinta-se mais confortável com a sua imagem,{" "}
            <span className="text-gradient-gold italic">sem perder</span> sua
            naturalidade
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Cada procedimento é planejado para valorizar seus traços com
            equilíbrio, sofisticação e naturalidade.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a
              href="#avaliacao"
              className="btn-gold group px-7 py-4 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2"
            >
              Quero entender meu caso
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#procedimentos"
              className="btn-outline-gold px-7 py-4 rounded-full text-sm font-medium text-center"
            >
              Ver possibilidades para meu caso
            </a>
          </div>

          {/* Microcopy — reassurance under CTAs */}
          <ul className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-y-2 gap-x-5">
            {microcopy.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs sm:text-[13px] text-foreground/75"
              >
                <Check size={14} className="text-royal shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Trust badges — horizontal scroll on mobile, grid on desktop */}
          <div className="mt-10 -mx-5 sm:mx-0">
            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 overflow-x-auto sm:overflow-visible px-5 sm:px-0 py-2 snap-x snap-mandatory scroll-px-5 scrollbar-none">

              {trust.map((t) => (
                <div
                  key={t.label}
                  className="trust-badge group shrink-0 snap-start min-w-[12rem] sm:min-w-0 rounded-2xl p-4 flex flex-col items-start gap-2.5"
                >
                  <div className="h-9 w-9 rounded-xl grid place-items-center bg-royal/10 border border-royal/15 transition-all duration-500 group-hover:bg-royal/15 group-hover:border-royal/30 group-hover:scale-110">
                    <t.icon size={18} className="text-royal" />
                  </div>
                  <span className="text-xs text-foreground/85 leading-snug font-medium">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
