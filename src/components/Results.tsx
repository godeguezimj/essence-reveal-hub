import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Move, ShieldCheck, Sparkles, Stethoscope, HeartHandshake } from "lucide-react";
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
  description: string;
  cta: string;
  before: string;
  after: string;
}

const results: Result[] = [
  {
    id: "rino",
    label: "Rinoplastia",
    description: "Mais harmonia facial e um perfil equilibrado com naturalidade.",
    cta: "Ver resultados",
    before: rinoAntes,
    after: rinoDepois,
  },
  {
    id: "blefaro",
    label: "Blefaroplastia",
    description: "Olhar mais leve, descansado e rejuvenescido.",
    cta: "Ver transformação",
    before: blefaroAntes,
    after: blefaroDepois,
  },
  {
    id: "harmo",
    label: "Harmonização Facial",
    description: "Equilíbrio, definição e realce dos traços com naturalidade.",
    cta: "Descobrir possibilidades",
    before: harmoAntes,
    after: harmoDepois,
  },
  {
    id: "plan",
    label: "Planejamento Personalizado",
    description: "Análise completa do seu rosto para um plano individual e exclusivo.",
    cta: "Entender meu caso",
    before: planAntes,
    after: planDepois,
  },
];

const trust = [
  { icon: ShieldCheck, label: "Procedimentos seguros e personalizados" },
  { icon: Sparkles, label: "Resultados naturais que respeitam sua essência" },
  { icon: Stethoscope, label: "Tecnologia avançada e técnicas atualizadas" },
  { icon: HeartHandshake, label: "Acompanhamento completo em todas as etapas" },
];

const AUTOPLAY_MS = 6500;

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
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] sm:aspect-[5/4] rounded-[1.25rem] overflow-hidden select-none cursor-ew-resize group/ba"
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
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover/ba:scale-[1.04]"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${alt} — antes`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover/ba:scale-[1.04]"
        />
      </div>

      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-medium bg-black/55 text-white backdrop-blur-sm">
        Antes
      </span>
      <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-medium bg-royal/85 text-white backdrop-blur-sm">
        Depois
      </span>

      <div
        className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_18px_oklch(0.48_0.22_263/0.6)] pointer-events-none"
        style={{ left: `${pos}%` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-white grid place-items-center shadow-[0_8px_24px_-6px_oklch(0.32_0.18_265/0.5),0_0_0_4px_oklch(1_0_0_/0.35)] transition-transform duration-300 group-hover/ba:scale-110"
        style={{ left: `${pos}%` }}
      >
        <Move size={16} className="text-royal" strokeWidth={2.4} />
      </div>
    </div>
  );
}

function Slide({ r }: { r: Result }) {
  return (
    <article className="procedure-card relative rounded-[2rem] p-5 sm:p-6 lg:p-8 grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
      <BeforeAfter before={r.before} after={r.after} alt={r.label} />

      <div className="px-1 sm:px-2 lg:px-4">
        <p className="text-[10px] tracking-[0.28em] uppercase text-royal/70 font-medium">
          {r.label}
        </p>
        <h3 className="mt-3 text-2xl sm:text-3xl lg:text-[2.25rem] leading-[1.12]">
          Resultado <span className="text-gradient-gold italic">natural</span>{" "}
          que valoriza você
        </h3>
        <div className="divider-gold mt-5 w-16" />
        <p className="mt-5 text-sm sm:text-base text-foreground/85 leading-relaxed max-w-md">
          {r.description}
        </p>
        <a
          href="#avaliacao"
          className="group/cta mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-royal-deep border border-royal/20 bg-white/60 rounded-full px-5 py-2.5 transition-all duration-400 hover:bg-royal hover:text-white hover:border-royal hover:shadow-[0_12px_32px_-12px_oklch(0.48_0.22_263/0.55),0_0_28px_-6px_oklch(0.48_0.22_263/0.4)]"
        >
          {r.cta}
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover/cta:translate-x-1"
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

  // Autoplay with progress bar
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

  // Swipe
  const touchStart = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 50) {
      setIndex((i) => (dx < 0 ? (i + 1) % total : (i - 1 + total) % total));
    }
    touchStart.current = null;
  };

  return (
    <section id="resultados" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background glows */}
      <div
        aria-hidden
        className="absolute -z-10 top-[-6rem] right-[-8rem] w-[32rem] h-[32rem] rounded-full blur-3xl opacity-50 animate-pain-float"
        style={{ background: "radial-gradient(circle, oklch(0.48 0.22 263 / 0.16), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -z-10 bottom-[-8rem] left-[-6rem] w-[36rem] h-[36rem] rounded-full blur-3xl opacity-45 animate-pain-float-2"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.18 260 / 0.14), transparent 70%)" }}
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
            <span className="text-gradient-gold italic">realçam</span> o que você
            tem de melhor
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Cada procedimento é planejado de forma individual para valorizar
            seus traços, respeitar sua essência e entregar resultados
            harmoniosos.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="mt-12 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Side fades — hidden on mobile to let cards breathe */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-0 sm:w-20 z-10 hidden sm:block"
            style={{ background: "linear-gradient(90deg, var(--background), transparent)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-0 sm:w-20 z-10 hidden sm:block"
            style={{ background: "linear-gradient(270deg, var(--background), transparent)" }}
          />


          {/* Track — clip horizontally only so card shadows can breathe vertically */}
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
                transition: "transform 1.1s cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            >
              {results.map((r) => (
                <div key={r.id} className="w-full shrink-0 px-1 sm:px-2">
                  <Slide r={r} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls — dots + progress */}
          <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-2.5">
              {results.map((r, i) => (
                <button
                  key={r.id}
                  aria-label={`Ir para ${r.label}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-8 bg-royal shadow-[0_0_18px_oklch(0.48_0.22_263/0.5)]"
                      : "w-2 bg-royal/25 hover:bg-royal/45"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3 flex-1 max-w-[16rem]">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  paused ? "bg-royal/30" : "bg-royal animate-shimmer"
                }`}
              />
              <div className="relative flex-1 h-px bg-royal/15 overflow-hidden rounded-full">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-royal/70 to-royal"
                  style={{
                    width: `${progress * 100}%`,
                    transition: paused ? "none" : "width 80ms linear",
                  }}
                />
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-royal-deep/60 tabular-nums">
                {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
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
          className="mt-12 sm:mt-14 relative overflow-hidden rounded-[1.75rem] p-8 sm:p-12 text-center"
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
            className="btn-gold group mt-7 inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-medium"
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
