import { ArrowRight, Stethoscope, Hospital, Sparkles, Users, Star, Building2, ClipboardList, HeartHandshake } from "lucide-react";
import teamAsset from "@/assets/team-couple.png.asset.json";

// WhatsApp glyph — inline SVG to avoid extra deps
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.881.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.881-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.982zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const authorityChips = [
  { icon: Stethoscope, label: "Equipe Especializada" },
  { icon: Hospital, label: "Ambiente Hospitalar" },
  { icon: ClipboardList, label: "Planejamento Individual" },
  { icon: HeartHandshake, label: "Acompanhamento Completo" },
];

const socialProof = [
  { icon: Users, label: "+500 pacientes" },
  { icon: Star, label: "Avaliação personalizada" },
  { icon: Building2, label: "Estrutura hospitalar" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-[88px] sm:pt-32 lg:pt-36 pb-12 sm:pb-24 overflow-hidden"
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
        {/* Mobile-only authority chips — above everything */}
        <ul
          className="lg:hidden flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 mb-4 animate-fade-up"
          style={{ animationDelay: "60ms" }}
        >
          {authorityChips.map((c) => (
            <li
              key={c.label}
              className="inline-flex items-center gap-1.5 text-[10.5px] tracking-wide text-royal-deep/75"
            >
              <c.icon size={12} className="text-royal" strokeWidth={2} />
              <span className="font-medium">{c.label}</span>
            </li>
          ))}
        </ul>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-12 items-center">
          {/* Image column — appears first on mobile, second on desktop */}
          <div className="relative order-1 lg:order-2 animate-fade-up">
            <div className="relative mx-auto w-[78%] max-w-[20rem] sm:max-w-[28rem] lg:w-full lg:max-w-none lg:-mr-10 xl:-mr-16 lg:-mt-8 xl:-mt-12 lg:-mb-16">
              {/* Soft ambient shadow */}
              <div
                aria-hidden
                className="absolute inset-x-4 bottom-4 top-1/3 -z-10 rounded-[40%] blur-3xl opacity-60"
                style={{ background: "radial-gradient(ellipse at center, oklch(0.48 0.22 263 / 0.18), transparent 70%)" }}
              />
              <img
                src={teamAsset.url}
                alt="Equipe médica especializada da Full Plástica"
                className="relative block w-full h-auto object-contain animate-hero-float select-none pointer-events-none hero-team-fade"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Copy column */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            {/* Desktop-only authority chips */}
            <ul
              className="hidden lg:flex flex-wrap items-center gap-x-4 gap-y-2 mb-5 animate-fade-up"
              style={{ animationDelay: "40ms" }}
            >
              {authorityChips.map((c) => (
                <li
                  key={c.label}
                  className="inline-flex items-center gap-1.5 text-[11.5px] tracking-wide text-royal-deep/75"
                >
                  <c.icon size={13} className="text-royal" strokeWidth={2} />
                  <span className="font-medium">{c.label}</span>
                </li>
              ))}
            </ul>

            <h1
              className="text-[1.85rem] sm:text-5xl lg:text-[3.5rem] leading-[1.1] sm:leading-[1.04] tracking-tight max-w-xl animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              Recupere sua confiança com{" "}
              <span className="text-gradient-gold italic">segurança</span> e naturalidade
            </h1>

            <p
              className="mt-3.5 sm:mt-6 text-[14.5px] sm:text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Planejamento individual, equipe especializada e acompanhamento completo em todas as etapas.
            </p>

            {/* CTAs */}
            <div
              className="mt-5 sm:mt-9 w-full sm:w-auto flex flex-col sm:flex-row gap-2.5 sm:gap-4 animate-fade-up"
              style={{ animationDelay: "280ms" }}
            >
              <a
                href="#avaliacao"
                className="btn-gold btn-pulse group w-full sm:w-auto min-h-[54px] px-7 py-4 rounded-full text-[14px] sm:text-sm font-semibold inline-flex items-center justify-center gap-2.5"
              >
                <WhatsAppIcon size={18} />
                Quero falar com um especialista
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#procedimentos"
                className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-full text-[13.5px] sm:text-sm font-medium inline-flex items-center justify-center text-royal-deep/85 hover:text-royal transition-colors"
              >
                Ver possibilidades para meu caso
              </a>
            </div>

            {/* Social proof badges */}
            <ul
              className="mt-5 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2 w-full max-w-xl animate-fade-up"
              style={{ animationDelay: "360ms" }}
            >
              {socialProof.map((s) => (
                <li
                  key={s.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-royal/12 shadow-[0_2px_10px_-6px_oklch(0.32_0.18_265/0.2)]"
                >
                  <s.icon size={13} className="text-royal" strokeWidth={2} />
                  <span className="text-[11.5px] sm:text-[12px] font-medium text-royal-deep/85">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
