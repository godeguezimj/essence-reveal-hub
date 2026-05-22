import { Check } from "lucide-react";

interface Props {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  points: string[];
  cta: string;
  reverse?: boolean;
  dark?: boolean;
}

export function ProcedureSpotlight({
  image,
  eyebrow,
  title,
  text,
  points,
  cta,
  reverse,
  dark,
}: Props) {
  return (
    <section className={`py-20 sm:py-24 lg:py-32 ${dark ? "section-royal on-royal" : ""}`}>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="relative">
            <div className={`absolute -inset-4 sm:-inset-6 rounded-[2rem] blur-2xl ${dark ? "bg-white/10" : "bg-royal/15"}`} />
            <div className="relative glass rounded-[1.5rem] sm:rounded-[2rem] p-2 sm:p-3 overflow-hidden">
              <img
                src={image}
                alt={typeof title === "string" ? title : eyebrow}
                width={1024}
                height={1024}
                loading="lazy"
                className="rounded-[1.25rem] sm:rounded-[1.5rem] w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:h-[480px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <p className={`text-[10px] sm:text-xs tracking-[0.28em] uppercase mb-4 ${dark ? "text-white" : "text-gold"}`}>{eyebrow}</p>
          <h2 className="text-[1.75rem] sm:text-4xl lg:text-5xl leading-[1.12] sm:leading-[1.1]">{title}</h2>
          <div className="divider-gold mt-6 sm:mt-7 w-24" />
          <p className={`mt-6 sm:mt-7 text-[15px] sm:text-base leading-relaxed ${dark ? "text-white/90" : "text-muted-foreground"}`}>{text}</p>

          <ul className="mt-7 sm:mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 h-5 w-5 rounded-full glass-gold grid place-items-center shrink-0">
                  <Check size={12} className="text-gold" />
                </span>
                <span className={`text-sm ${dark ? "text-white/85" : ""}`}>{p}</span>
              </li>
            ))}
          </ul>

          <a href="#avaliacao" className="btn-gold mt-8 sm:mt-10 w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium">
            {cta}
          </a>
        </div>

      </div>
    </section>
  );
}
