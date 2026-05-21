import { SectionHeading } from "./SectionHeading";
import { Eye, User2, Sparkles, ShieldCheck, HeartHandshake, Stethoscope, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: User2,
    title: "Nariz em desarmonia",
    text: "Quando o formato não combina com seus traços.",
  },
  {
    icon: Eye,
    title: "Olhar cansado",
    text: "Pálpebras pesadas ou bolsas que envelhecem o olhar.",
  },
  {
    icon: Sparkles,
    title: "Mudança com naturalidade",
    text: "Realçar sua beleza sem perder sua identidade.",
  },
];

const trustSignals = [
  { icon: ShieldCheck, label: "Avaliação individual" },
  { icon: Stethoscope, label: "Equipe especializada" },
  { icon: HeartHandshake, label: "Acolhimento total" },
];

export function PainSection() {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-20 -left-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-60 animate-pain-float"
          style={{ background: "radial-gradient(circle, oklch(0.48 0.22 263 / 0.10), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-10 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-50 animate-pain-float-2"
          style={{ background: "radial-gradient(circle, oklch(0.62 0.18 260 / 0.10), transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[20rem] w-[40rem] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(ellipse, oklch(0.48 0.22 263 / 0.06), transparent 70%)" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Por que tantas pessoas buscam"
          title={
            <>
              O detalhe que te incomoda pode estar afetando sua{" "}
              <span className="text-gradient-gold italic">autoestima</span>
            </>
          }
          subtitle="Cada procedimento é pensado para trazer mais harmonia, confiança e naturalidade."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {cards.map((c) => (
            <div
              key={c.title}
              className="pain-card group relative rounded-[1.75rem] p-9 lg:p-10 overflow-hidden"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "radial-gradient(ellipse at top, oklch(0.48 0.22 263 / 0.16), transparent 70%)",
                }}
              />

              <div className="relative">
                <div
                  className="relative h-16 w-16 rounded-2xl mb-8 grid place-items-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.48 0.22 263 / 0.12), oklch(0.48 0.22 263 / 0.04))",
                    border: "1px solid oklch(0.48 0.22 263 / 0.18)",
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-700"
                    style={{
                      background:
                        "radial-gradient(circle, oklch(0.48 0.22 263 / 0.4), transparent 70%)",
                    }}
                  />
                  <c.icon size={24} className="relative text-royal" strokeWidth={1.4} />
                </div>

                <h3 className="font-display text-2xl lg:text-[1.6rem] leading-tight tracking-tight">
                  {c.title}
                </h3>
                <div className="h-px w-10 bg-royal/25 my-4 transition-all duration-500 group-hover:w-16 group-hover:bg-royal/60" />
                <p className="text-muted-foreground leading-relaxed text-sm">{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-14 lg:mt-16">
          <div
            className="relative rounded-[2rem] p-8 lg:p-10 overflow-hidden text-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(1 0 0 / 0.7), oklch(0.97 0.015 255 / 0.5))",
              border: "1px solid oklch(0.48 0.22 263 / 0.14)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 20px 60px -30px oklch(0.32 0.18 265 / 0.25)",
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[36rem] rounded-full blur-3xl opacity-60"
              style={{
                background: "radial-gradient(ellipse, oklch(0.48 0.22 263 / 0.18), transparent 70%)",
              }}
            />
            <p className="relative text-xs tracking-[0.28em] uppercase text-royal/70 mb-4">
              Próximo passo
            </p>
            <p className="relative font-display text-2xl lg:text-3xl text-royal-deep leading-tight max-w-2xl mx-auto">
              Entenda o que faz sentido para o{" "}
              <span className="italic text-gradient-gold">seu caso</span>
            </p>

            <a
              href="#avaliacao"
              className="btn-gold relative inline-flex items-center gap-2 mt-7 px-8 py-3.5 rounded-full text-sm font-medium"
            >
              Quero entender meu caso
              <ArrowRight size={16} />
            </a>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-royal-deep/70">
              {trustSignals.map((t) => (
                <div key={t.label} className="inline-flex items-center gap-2">
                  <t.icon size={14} className="text-royal" strokeWidth={1.6} />
                  <span className="tracking-wide">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
