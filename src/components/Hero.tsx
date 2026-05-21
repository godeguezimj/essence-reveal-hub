import heroImg from "@/assets/hero-woman.jpg";
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

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
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

        <div className="lg:col-span-5 relative animate-fade-up">
          {/* Cinematic glow halo */}
          <div
            aria-hidden
            className="absolute -inset-10 rounded-[3rem] blur-3xl opacity-70 animate-hero-glow"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, oklch(0.48 0.22 263 / 0.35), transparent 60%), radial-gradient(ellipse at 70% 80%, oklch(0.62 0.18 260 / 0.25), transparent 65%)",
            }}
          />
          <div className="relative animate-hero-float-img">
            <div
              className="relative glass rounded-[2rem] p-3 overflow-hidden"
              style={{
                boxShadow:
                  "0 40px 90px -30px oklch(0.32 0.18 265 / 0.45), 0 0 0 1px oklch(0.48 0.22 263 / 0.08), 0 0 60px -10px oklch(0.48 0.22 263 / 0.2)",
              }}
            >
              <img
                src={heroImg}
                alt="Paciente em ambiente clínico premium da Full Plástica"
                width={1024}
                height={1280}
                className="rounded-[1.5rem] w-full h-[440px] sm:h-[520px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-3 rounded-[1.5rem] pointer-events-none ring-1 ring-white/20" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-md border border-royal/15 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-[0_18px_40px_-15px_oklch(0.32_0.18_265/0.45)]">
                <div className="h-10 w-10 rounded-full bg-royal/10 grid place-items-center">
                  <ShieldCheck size={18} className="text-royal" />
                </div>
                <div>
                  <p className="text-[10px] text-royal uppercase tracking-[0.22em] font-medium">
                    Experiência premium
                  </p>
                  <p className="text-sm text-royal-deep">
                    Naturalidade, segurança e acompanhamento próximo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
