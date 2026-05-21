import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, Move, ShieldCheck, Sparkles, Stethoscope, HeartHandshake } from "lucide-react";
import rinoAntes from "@/assets/rino-antes.jpg";
import rinoDepois from "@/assets/rino-depois.jpg";
import blefaroAntes from "@/assets/blefaro-antes.jpg";
import blefaroDepois from "@/assets/blefaro-depois.jpg";
import harmoAntes from "@/assets/harmo-antes.jpg";
import harmoDepois from "@/assets/harmo-depois.jpg";
import planAntes from "@/assets/plan-antes.jpg";
import planDepois from "@/assets/plan-depois.jpg";

type Category = "todos" | "rinoplastia" | "blefaroplastia" | "harmonizacao" | "planejamento";

interface Result {
  id: string;
  category: Exclude<Category, "todos">;
  label: string;
  description: string;
  cta: string;
  before: string;
  after: string;
}

const results: Result[] = [
  {
    id: "rino",
    category: "rinoplastia",
    label: "Rinoplastia",
    description: "Mais harmonia facial e um perfil equilibrado com naturalidade.",
    cta: "Ver resultados de rinoplastia",
    before: rinoAntes,
    after: rinoDepois,
  },
  {
    id: "blefaro",
    category: "blefaroplastia",
    label: "Blefaroplastia",
    description: "Olhar mais leve, descansado e rejuvenescido.",
    cta: "Ver resultados de blefaroplastia",
    before: blefaroAntes,
    after: blefaroDepois,
  },
  {
    id: "harmo",
    category: "harmonizacao",
    label: "Harmonização Facial",
    description: "Equilíbrio, definição e realce dos traços com naturalidade.",
    cta: "Ver resultados de harmonização",
    before: harmoAntes,
    after: harmoDepois,
  },
  {
    id: "plan",
    category: "planejamento",
    label: "Planejamento Personalizado",
    description: "Análise completa do seu rosto para um plano individual e exclusivo.",
    cta: "Entenda nosso planejamento",
    before: planAntes,
    after: planDepois,
  },
];

const filters: { id: Category; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "rinoplastia", label: "Rinoplastia" },
  { id: "blefaroplastia", label: "Blefaroplastia" },
  { id: "harmonizacao", label: "Harmonização Facial" },
  { id: "planejamento", label: "Planejamento Personalizado" },
];

const trust = [
  { icon: ShieldCheck, label: "Procedimentos seguros e personalizados" },
  { icon: Sparkles, label: "Resultados naturais que respeitam sua essência" },
  { icon: Stethoscope, label: "Tecnologia avançada e técnicas atualizadas" },
  { icon: HeartHandshake, label: "Acompanhamento completo em todas as etapas" },
];

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
      className="relative w-full aspect-[4/5] rounded-[1.25rem] overflow-hidden select-none cursor-ew-resize group/ba"
      onMouseDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        setFromClientX(e.touches[0].clientX);
      }}
    >
      {/* After image (full) */}
      <img
        src={after}
        alt={`${alt} — depois`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover/ba:scale-[1.03]"
      />
      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${alt} — antes`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover/ba:scale-[1.03]"
        />
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-medium bg-black/55 text-white backdrop-blur-sm">
        Antes
      </span>
      <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-medium bg-royal/85 text-white backdrop-blur-sm">
        Depois
      </span>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_18px_oklch(0.48_0.22_263/0.6)] pointer-events-none"
        style={{ left: `${pos}%` }}
      />
      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-white grid place-items-center shadow-[0_8px_24px_-6px_oklch(0.32_0.18_265/0.5),0_0_0_4px_oklch(1_0_0_/0.35)] transition-transform duration-300 group-hover/ba:scale-110"
        style={{ left: `${pos}%` }}
      >
        <Move size={16} className="text-royal" strokeWidth={2.4} />
      </div>
    </div>
  );
}

export function Results() {
  const [active, setActive] = useState<Category>("todos");
  const visible = useMemo(
    () => (active === "todos" ? results : results.filter((r) => r.category === active)),
    [active],
  );

  return (
    <section id="resultados" className="relative py-24 lg:py-32 overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl lg:text-[3rem] leading-[1.08]">
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

        {/* Filters */}
        <div className="mt-10 -mx-5 sm:mx-0">
          <div className="flex sm:flex-wrap gap-2 sm:gap-3 overflow-x-auto px-5 sm:px-0 scrollbar-none">
            {filters.map((f) => {
              const isActive = active === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-400 border ${
                    isActive
                      ? "bg-royal text-white border-royal shadow-[0_10px_30px_-12px_oklch(0.48_0.22_263/0.6),0_0_0_4px_oklch(0.48_0.22_263/0.12)]"
                      : "bg-white/70 text-royal-deep border-royal/15 hover:border-royal/40 hover:bg-white hover:shadow-[0_6px_24px_-10px_oklch(0.48_0.22_263/0.35)]"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-10 sm:mt-12 -mx-5 sm:mx-0">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-7 overflow-x-auto sm:overflow-visible px-5 sm:px-0 snap-x snap-mandatory scrollbar-none pb-2">
            {visible.map((r) => (
              <article
                key={r.id}
                className="procedure-card relative shrink-0 snap-center w-[88vw] sm:w-auto rounded-[1.75rem] p-4 sm:p-5 flex flex-col"
              >
                <BeforeAfter before={r.before} after={r.after} alt={r.label} />

                <div className="px-2 sm:px-3 pt-5 pb-2">
                  <p className="text-[10px] tracking-[0.24em] uppercase text-royal/70 font-medium">
                    {r.label}
                  </p>
                  <p className="mt-2 text-sm sm:text-[15px] text-foreground/85 leading-relaxed">
                    {r.description}
                  </p>
                  <a
                    href="#avaliacao"
                    className="group/cta mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-royal-deep border border-royal/20 bg-white/60 rounded-full px-4 py-2 transition-all duration-400 hover:bg-royal hover:text-white hover:border-royal hover:shadow-[0_10px_28px_-12px_oklch(0.48_0.22_263/0.55)]"
                  >
                    {r.cta}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/cta:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            ))}
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
            Agende sua avaliação personalizada e descubra as melhores
            possibilidades para o seu caso.
          </p>
          <a
            href="#avaliacao"
            className="btn-gold group mt-7 inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-medium"
          >
            Quero agendar minha avaliação
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
