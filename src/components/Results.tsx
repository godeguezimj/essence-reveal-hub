import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Move, Sparkles, Stethoscope, HeartHandshake, ShieldCheck } from "lucide-react";
import rinoAntes from "@/assets/rino-antes.jpg";
import rinoDepois from "@/assets/rino-depois.jpg";
import blefaroAntes from "@/assets/blefaro-antes.jpg";
import blefaroDepois from "@/assets/blefaro-depois.jpg";
import harmoAntes from "@/assets/harmo-antes.jpg";
import harmoDepois from "@/assets/harmo-depois.jpg";
import planAntes from "@/assets/plan-antes.jpg";
import planDepois from "@/assets/plan-depois.jpg";

interface Result {
  id: string;
  label: string;
  headline: string;
  description: string;
  cta: string;
  before: string;
  after: string;
}

const results: Result[] = [
  {
    id: "rino",
    label: "Rinoplastia",
    headline: "Mais harmonia facial",
    description: "Resultados elegantes que respeitam seus traços, sua expressão e sua essência — com equilíbrio e naturalidade.",
    cta: "Quero entender meu caso",
    before: rinoAntes,
    after: rinoDepois,
  },
  {
    id: "blefaro",
    label: "Blefaroplastia",
    headline: "Um olhar mais leve e descansado",
    description: "Suavizamos os sinais de cansaço preservando sua expressão — para um olhar renovado, natural e sereno.",
    cta: "Ver possibilidades",
    before: blefaroAntes,
    after: blefaroDepois,
  },
  {
    id: "harmo",
    label: "Harmonização Facial",
    headline: "Equilíbrio refinado dos traços",
    description: "Definição sutil, contorno suave e expressão preservada — uma harmonia que realça quem você é.",
    cta: "Descobrir meu procedimento ideal",
    before: harmoAntes,
    after: harmoDepois,
  },
  {
    id: "plan",
    label: "Planejamento Personalizado",
    headline: "Um plano único, pensado para você",
    description: "Análise completa, conversa próxima e um caminho desenhado especialmente para o seu rosto e seus objetivos.",
    cta: "Quero entender meu caso",
    before: planAntes,
    after: planDepois,
  },
];

const microcopy = [
  { icon: Sparkles, label: "Resultados naturais" },
  { icon: Stethoscope, label: "Planejamento personalizado" },
  { icon: HeartHandshake, label: "Acompanhamento completo" },
];

const trust = [
  { icon: ShieldCheck, label: "Procedimentos seguros e personalizados" },
  { icon: Sparkles, label: "Resultados naturais que respeitam sua essência" },
  { icon: Stethoscope, label: "Tecnologia avançada e técnicas atualizadas" },
  { icon: HeartHandshake, label: "Acompanhamento completo em todas as etapas" },
];

const AUTOPLAY_MS = 7500;

function BeforeAfter({ before, after, alt }: { before: string; after: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, x)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const cx = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      setFromClientX(cx);
    };
    const onUp = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div className="relative group/ba">
      {/* Soft outer glow */}
      <div
        aria-hidden
        className="absolute -inset-3 sm:-inset-5 rounded-[1.75rem] blur-2xl opacity-60 transition-opacity duration-700 group-hover/ba:opacity-90 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.48 0.22 263 / 0.28), transparent 70%)",
        }}
      />
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/5] sm:aspect-[5/4] rounded-[1.5rem] overflow-hidden select-none cursor-ew-resize shadow-[0_30px_70px_-30px_oklch(0.18_0.12_265_/_0.55)] ring-1 ring-white/40"
        onMouseDown={(e) => {
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
        onTouchStart={(e) => {
          dragging.current = true;
          setFromClientX(e.touches[0].clientX);
        }}
      >
        <img
          src={after}
          alt={`${alt} — depois`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover animate-ba-zoom transition-transform duration-[1800ms] group-hover/ba:scale-[1.05]"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt={`${alt} — antes`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover animate-ba-zoom transition-transform duration-[1800ms] group-hover/ba:scale-[1.05]"
          />
        </div>

        {/* Cinematic top sheen */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, oklch(1 0 0 / 0.18), transparent)",
          }}
        />
        {/* Bottom vignette for label legibility */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(0deg, oklch(0.18 0.06 265 / 0.35), transparent)",
          }}
        />

        <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-[10px] tracking-[0.26em] uppercase font-medium bg-white/15 text-white backdrop-blur-md border border-white/25">
          Antes
        </span>
        <span className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full text-[10px] tracking-[0.26em] uppercase font-medium bg-royal/80 text-white backdrop-blur-md border border-white/20 shadow-[0_8px_24px_-6px_oklch(0.48_0.22_263/0.6)]">
          Depois
        </span>

        {/* Divider line with breathing glow */}
        <div
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-white to-white/40 pointer-events-none animate-handle-glow"
          style={{ left: `${pos}%`, boxShadow: "0 0 24px oklch(0.48 0.22 263 / 0.7)" }}
        />
        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-white grid place-items-center transition-transform duration-300 group-hover/ba:scale-110 animate-handle-glow"
          style={{
            left: `${pos}%`,
            boxShadow:
              "0 10px 28px -6px oklch(0.32 0.18 265 / 0.55), 0 0 0 5px oklch(1 0 0 / 0.35), 0 0 24px oklch(0.48 0.22 263 / 0.45)",
          }}
        >
          <Move size={16} className="text-royal" strokeWidth={2.4} />
        </div>
      </div>
    </div>
  );
}

function Slide({ r }: { r: Result }) {
  return (
    <article
      className="relative rounded-[2rem] p-5 sm:p-8 lg:p-10 grid lg:grid-cols-[1.05fr_1fr] gap-7 lg:gap-12 items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(1 0 0 / 0.78) 0%, oklch(0.97 0.015 255 / 0.55) 100%)",
        border: "1px solid oklch(0.48 0.22 263 / 0.14)",
        backdropFilter: "blur(18px)",
        boxShadow:
          "0 30px 80px -40px oklch(0.18 0.12 265 / 0.4), 0 1px 0 oklch(1 0 0 / 0.6) inset",
      }}
    >
      {/* Ambient inner glow */}
      <div
        aria-hidden
        className="absolute -z-10 -top-32 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.48 0.22 263 / 0.22), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -z-10 -bottom-28 -left-24 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.12 70 / 0.16), transparent 70%)",
        }}
      />

      <BeforeAfter before={r.before} after={r.after} alt={r.label} />

      <div className="px-1 sm:px-2 lg:px-4">
        <div className="inline-flex items-center gap-2 glass-gold rounded-full px-3.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-shimmer" />
          <span className="text-[10px] tracking-[0.26em] uppercase text-gold-soft font-medium">
            {r.label}
          </span>
        </div>

        <h3 className="mt-5 text-[1.6rem] sm:text-3xl lg:text-[2.25rem] leading-[1.12]">
          {r.headline.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="text-gradient-gold italic">
            {r.headline.split(" ").slice(-2).join(" ")}
          </span>
        </h3>
        <div className="divider-gold mt-5 w-16" />
        <p className="mt-5 text-[15px] sm:text-base text-foreground/85 leading-relaxed max-w-md">
          {r.description}
        </p>

        <a
          href="#avaliacao"
          className="btn-gold group/cta mt-8 inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[52px] px-7 py-3.5 rounded-full text-sm font-medium"
        >
          {r.cta}
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover/cta:translate-x-1.5"
          />
        </a>
      </div>
    </article>
  );
}

export function Results() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const total = results.length;

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / AUTOPLAY_MS);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const t = setTimeout(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [index, paused, total]);

  const touchStart = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 50) {
      setIndex((i) => (dx < 0 ? (i + 1) % total : (i - 1 + total) % total));
    }
    touchStart.current = null;
    setTimeout(() => setPaused(false), 800);
  };

  return (
    <section id="resultados" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Cinematic background glows */}
      <div
        aria-hidden
        className="absolute -z-10 top-[-8rem] right-[-10rem] w-[38rem] h-[38rem] rounded-full blur-3xl opacity-55 animate-spotlight-breathe"
        style={{ background: "radial-gradient(circle, oklch(0.48 0.22 263 / 0.18), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -z-10 bottom-[-10rem] left-[-8rem] w-[42rem] h-[42rem] rounded-full blur-3xl opacity-50 animate-spotlight-breathe-2"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.18 260 / 0.16), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[40rem] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.78 0.12 70 / 0.08), transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-shimmer" />
            <span className="text-[10px] sm:text-xs tracking-[0.22em] uppercase text-gold-soft font-medium">
              Resultados reais
            </span>
          </div>
          <h2 className="text-[1.75rem] sm:text-4xl lg:text-[3rem] leading-[1.12] sm:leading-[1.08]">
            Resultados naturais que{" "}
            <span className="text-gradient-gold italic">realçam</span> sua
            beleza com elegância
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Cada procedimento é planejado de forma individual para valorizar
            seus traços, respeitar sua essência e entregar uma harmonia
            verdadeiramente sua.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="mt-12 sm:mt-14 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-0 sm:w-24 z-10 hidden sm:block"
            style={{ background: "linear-gradient(90deg, var(--background), transparent)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-0 sm:w-24 z-10 hidden sm:block"
            style={{ background: "linear-gradient(270deg, var(--background), transparent)" }}
          />

          <div
            className="rounded-[2rem] py-4"
            style={{ overflowX: "clip", overflowY: "visible" }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(-${index * 100}%)`,
                transition: "transform 1.3s cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            >
              {results.map((r) => (
                <div key={r.id} className="w-full shrink-0 px-1 sm:px-2">
                  <Slide r={r} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
            <div className="flex items-center gap-2.5">
              {results.map((r, i) => (
                <button
                  key={r.id}
                  aria-label={`Ir para ${r.label}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-10 bg-gradient-to-r from-royal to-royal-deep shadow-[0_0_22px_oklch(0.48_0.22_263/0.6)]"
                      : "w-2 bg-royal/25 hover:bg-royal/45"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3 w-full sm:flex-1 sm:max-w-[18rem]">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  paused ? "bg-royal/30" : "bg-royal animate-shimmer"
                }`}
              />
              <div className="relative flex-1 h-[2px] bg-royal/15 overflow-hidden rounded-full">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-royal via-royal-deep to-gold"
                  style={{
                    width: `${progress * 100}%`,
                    transition: paused ? "none" : "width 80ms linear",
                  }}
                />
              </div>
              <span className="text-[10px] tracking-[0.22em] uppercase text-royal-deep/60 tabular-nums font-medium">
                {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Microcopy */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {microcopy.map((m) => (
            <div key={m.label} className="flex items-center gap-2.5">
              <span className="h-7 w-7 rounded-full bg-royal/10 border border-royal/15 grid place-items-center">
                <m.icon size={13} className="text-royal" strokeWidth={2.4} />
              </span>
              <span className="text-[13px] text-foreground/80 font-medium">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-14 sm:mt-16 rounded-[1.5rem] glass p-5 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {trust.map((t) => (
            <div key={t.label} className="flex items-start gap-3">
              <span className="mt-0.5 h-8 w-8 rounded-full bg-royal/10 border border-royal/15 grid place-items-center shrink-0">
                <Check size={14} className="text-royal" strokeWidth={2.6} />
              </span>
              <span className="text-[13px] text-foreground/85 leading-snug">
                {t.label}
              </span>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div
          className="mt-12 sm:mt-14 relative overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] p-7 sm:p-12 text-center"
          style={{
            background:
              "linear-gradient(180deg, oklch(1 0 0 / 0.7) 0%, oklch(0.97 0.015 255 / 0.5) 100%)",
            border: "1px solid oklch(0.48 0.22 263 / 0.14)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 20px 60px -30px oklch(0.32 0.18 265 / 0.25)",
          }}
        >
          <div
            aria-hidden
            className="absolute -z-10 inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, oklch(0.48 0.22 263 / 0.15), transparent 60%)",
            }}
          />
          <h3 className="text-2xl sm:text-3xl lg:text-[2.25rem] leading-[1.15]">
            Vamos entender o que faz{" "}
            <span className="text-gradient-gold italic">sentido</span> para
            você?
          </h3>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed">
            Receba uma avaliação personalizada e descubra as melhores
            possibilidades para o seu caso.
          </p>
          <a
            href="#avaliacao"
            className="btn-gold group mt-7 inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[52px] px-7 py-4 rounded-full text-sm font-medium"
          >
            Quero entender meu caso
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
