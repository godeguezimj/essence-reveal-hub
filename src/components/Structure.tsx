import {
  Check,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Building2,
  Play,
  ArrowRight,
} from "lucide-react";

const points = [
  "Centro cirúrgico hospitalar",
  "Equipe multidisciplinar especializada",
  "Tecnologia e monitoramento",
  "Acompanhamento pré e pós-operatório",
  "Atendimento humanizado",
];

const trustBadges = [
  { icon: Building2, label: "Ambiente Hospitalar" },
  { icon: Stethoscope, label: "Equipe Especializada" },
  { icon: ShieldCheck, label: "Segurança em Todas as Etapas" },
];

interface Props {
  videoSrc?: string;
  posterSrc?: string;
}

export function Structure({ videoSrc, posterSrc }: Props) {
  return (
    <section className="section-royal on-royal relative overflow-hidden py-20 sm:py-28 lg:py-36">
      {/* Ambient cinematic background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-60 animate-spotlight-breathe"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.18 260 / 0.45) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-50 animate-spotlight-breathe-2"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 268 / 0.5) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Trust badges */}
        <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
          {trustBadges.map((b) => (
            <li
              key={b.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md text-[11.5px] sm:text-[12.5px] tracking-wide text-white/90"
            >
              <b.icon size={13} className="text-white/80" strokeWidth={1.8} />
              <span>{b.label}</span>
            </li>
          ))}
        </ul>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Video side */}
          <div className="lg:order-2">
            <div className="relative animate-spotlight-float">
              <div
                aria-hidden
                className="absolute -inset-10 sm:-inset-14 rounded-[3rem] blur-3xl opacity-70 animate-spotlight-glow"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, oklch(0.72 0.18 260 / 0.5), transparent 65%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-x-8 -bottom-8 h-16 rounded-full blur-2xl opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse, oklch(0.85 0.08 260 / 0.45), transparent 70%)",
                }}
              />

              <div className="relative rounded-[1.75rem] sm:rounded-[2.25rem] overflow-hidden border border-white/15 shadow-[0_40px_80px_-30px_oklch(0.18_0.12_265_/_0.7)]">
                {videoSrc ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={posterSrc}
                    className="w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:h-[520px] object-cover"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <div
                    className="relative w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:h-[520px] grid place-items-center overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.28 0.14 265) 0%, oklch(0.18 0.10 265) 60%, oklch(0.14 0.08 265) 100%)",
                    }}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "radial-gradient(oklch(1 0 0 / 0.35) 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                      }}
                    />
                    <div className="relative flex flex-col items-center gap-4 text-center px-6">
                      <span className="grid place-items-center h-16 w-16 rounded-full border border-white/30 bg-white/10 backdrop-blur-md animate-spotlight-breathe">
                        <Play size={22} className="text-white translate-x-0.5" strokeWidth={1.8} />
                      </span>
                      <p className="text-[11px] tracking-[0.32em] uppercase text-white/70">
                        Vídeo institucional
                      </p>
                      <p className="text-white/90 text-sm max-w-[16rem] leading-relaxed">
                        Conheça nossa estrutura hospitalar, centro cirúrgico e equipe
                      </p>
                    </div>
                  </div>
                )}

                {/* Cinematic gradient overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, oklch(0.18 0.12 265 / 0.45) 100%)",
                  }}
                />
                {/* Top sheen */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1/3 pointer-events-none opacity-60"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(1 0 0 / 0.18), transparent)",
                  }}
                />
                {/* Subtle live indicator */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-white/80 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  <span className="text-[10.5px] tracking-[0.25em] uppercase text-white/90">
                    Estrutura Full Plástica
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-5">
              <HeartPulse size={12} className="text-white/80" />
              <p className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-white/90">
                Estrutura &amp; Segurança
              </p>
            </div>

            <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.08] tracking-tight">
              Uma estrutura preparada para cuidar de você em{" "}
              <span className="text-gradient-gold italic">cada etapa</span>
            </h2>
            <div className="divider-gold mt-7 w-24" />

            <p className="mt-7 text-[15.5px] sm:text-[17px] leading-[1.7] max-w-xl text-white/85">
              Os procedimentos são realizados em ambiente hospitalar, com equipe
              especializada, acompanhamento completo e estrutura preparada para
              oferecer mais segurança e tranquilidade.
            </p>

            <ul className="mt-9 grid gap-3 sm:gap-3.5">
              {points.map((p, i) => (
                <li
                  key={p}
                  className="group flex items-center gap-3.5 rounded-2xl px-4 py-3 border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08] hover:border-white/25 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_oklch(0.18_0.12_265_/_0.6)]"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="relative grid place-items-center h-7 w-7 rounded-full bg-gradient-to-br from-white/25 to-white/5 border border-white/30 shrink-0">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{
                        background:
                          "radial-gradient(circle, oklch(0.85 0.1 260 / 0.55), transparent 70%)",
                      }}
                    />
                    <Check size={13} className="relative text-white" strokeWidth={2.5} />
                  </span>
                  <span className="text-[14.5px] sm:text-[15px] font-light tracking-wide text-white/90">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#avaliacao"
                className="group relative btn-gold w-full sm:w-auto min-h-[56px] inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full text-[14.5px] font-medium tracking-wide overflow-hidden"
              >
                <span className="relative z-10">Conhecer a estrutura</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
                />
              </a>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
                <li className="flex items-center gap-2 text-[12.5px] tracking-wide text-white/75">
                  <Building2 size={13} className="opacity-80" />
                  <span>Centro cirúrgico próprio</span>
                </li>
                <li className="flex items-center gap-2 text-[12.5px] tracking-wide text-white/75">
                  <ShieldCheck size={13} className="opacity-80" />
                  <span>Protocolos de segurança</span>
                </li>
                <li className="flex items-center gap-2 text-[12.5px] tracking-wide text-white/75">
                  <HeartPulse size={13} className="opacity-80" />
                  <span>Cuidado humanizado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
