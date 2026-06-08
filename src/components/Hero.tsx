import { ArrowRight, Stethoscope, Hospital, ClipboardList, HeartHandshake } from "lucide-react";
import teamAsset from "@/assets/team.png.asset.json";

const benefits = [
  { icon: Stethoscope, label: "Equipe especializada" },
  { icon: Hospital, label: "Ambiente hospitalar" },
  { icon: ClipboardList, label: "Planejamento individual" },
  { icon: HeartHandshake, label: "Acompanhamento completo" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Organic background glows */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />
      <div
        aria-hidden
        className="absolute -z-10 top-[-8rem] right-[-6rem] w-[22rem] sm:w-[30rem] h-[22rem] sm:h-[30rem] rounded-full blur-3xl opacity-50 animate-hero-float"
        style={{ background: "radial-gradient(circle, oklch(0.48 0.22 263 / 0.18), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -z-10 bottom-[-6rem] left-[-4rem] w-[20rem] sm:w-[26rem] h-[20rem] sm:h-[26rem] rounded-full blur-3xl opacity-50 animate-hero-float-2"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.18 260 / 0.14), transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="animate-fade-up text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-royal/80 border border-royal/15 bg-white/60 backdrop-blur-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Cirurgia Plástica Premium
            </span>

            <h1 className="text-[2rem] sm:text-5xl lg:text-[3.5rem] leading-[1.08] sm:leading-[1.04] tracking-tight max-w-xl">
              Recupere sua confiança{" "}
              <span className="text-gradient-gold italic">sem perder</span> sua naturalidade
            </h1>

            <p className="mt-5 sm:mt-6 text-[15px] sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Procedimentos planejados de forma individual para valorizar seus
              traços, respeitar sua essência e proporcionar resultados naturais.
            </p>

            <div className="mt-7 sm:mt-9 w-full sm:w-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#avaliacao"
                className="btn-gold group w-full sm:w-auto min-h-[52px] px-7 py-4 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2"
              >
                Quero entender meu caso
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#procedimentos"
                className="btn-outline-gold w-full sm:w-auto min-h-[52px] px-7 py-4 rounded-full text-sm font-medium inline-flex items-center justify-center"
              >
                Conhecer possibilidades
              </a>
            </div>

            {/* Benefits */}
            <ul className="mt-9 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xl">
              {benefits.map((b) => (
                <li
                  key={b.label}
                  className="trust-badge group rounded-2xl p-3.5 sm:p-4 flex items-center gap-3"
                >
                  <span className="h-9 w-9 shrink-0 rounded-xl grid place-items-center bg-royal/10 border border-royal/15 transition-all duration-500 group-hover:bg-royal/15 group-hover:scale-110">
                    <b.icon size={17} className="text-royal" strokeWidth={1.8} />
                  </span>
                  <span className="text-[12.5px] sm:text-[13px] text-foreground/85 leading-snug font-medium text-left">
                    {b.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image column */}
          <div className="relative order-1 lg:order-2 animate-fade-up">
            <div className="relative mx-auto max-w-[28rem] lg:max-w-none">
              {/* Ambient glows behind image */}
              <span
                aria-hidden
                className="absolute -inset-8 sm:-inset-10 rounded-[2.5rem] blur-3xl opacity-70 -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 20%, oklch(0.48 0.22 263 / 0.35), transparent 65%), radial-gradient(ellipse at 80% 80%, oklch(0.78 0.14 85 / 0.18), transparent 65%)",
                }}
              />

              <div
                className="relative rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden"
                style={{
                  border: "1px solid oklch(0.48 0.22 263 / 0.18)",
                  boxShadow:
                    "0 40px 80px -30px oklch(0.32 0.18 265 / 0.45), inset 0 1px 0 oklch(1 0 0 / 0.4)",
                }}
              >
                <img
                  src={teamAsset.url}
                  alt="Equipe médica especializada da Full Plástica"
                  className="block w-full h-auto object-cover aspect-[4/5] sm:aspect-[5/6]"
                  loading="eager"
                  decoding="async"
                />

                {/* Soft gradient overlay for legibility */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.18 0.12 265 / 0.55) 0%, oklch(0.18 0.12 265 / 0.10) 35%, transparent 60%)",
                  }}
                />

                {/* Top-right floating CRM-style badge */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] tracking-wide text-white/95 backdrop-blur-md"
                    style={{
                      background: "oklch(0.18 0.12 265 / 0.45)",
                      border: "1px solid oklch(1 0 0 / 0.18)",
                    }}
                  >
                    <ShieldCheck size={12} strokeWidth={2} className="text-gold" />
                    <span className="font-medium">Atendimento Premium</span>
                  </div>
                </div>

                {/* Bottom seal — Equipe Médica Especializada */}
                <div className="absolute left-3 right-3 bottom-3 sm:left-5 sm:right-5 sm:bottom-5">
                  <div
                    className="flex items-center gap-3 sm:gap-3.5 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 backdrop-blur-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(1 0 0 / 0.78), oklch(0.97 0.015 255 / 0.62))",
                      border: "1px solid oklch(1 0 0 / 0.55)",
                      boxShadow: "0 18px 40px -20px oklch(0.18 0.12 265 / 0.55)",
                    }}
                  >
                    <span
                      className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-full grid place-items-center"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.78 0.14 85), oklch(0.66 0.16 75))",
                        boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.45)",
                      }}
                    >
                      <Award size={17} className="text-white" strokeWidth={2.2} />
                    </span>
                    <div className="min-w-0 text-left">
                      <p className="font-display text-[13px] sm:text-sm text-royal-deep leading-tight tracking-tight">
                        Equipe Médica Especializada
                      </p>
                      <p className="mt-0.5 text-[10.5px] sm:text-[11.5px] text-royal-deep/65 leading-snug">
                        Planejamento individual • Ambiente hospitalar • Acompanhamento completo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
