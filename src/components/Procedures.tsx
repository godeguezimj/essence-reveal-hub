import { SectionHeading } from "./SectionHeading";
import { ArrowRight } from "lucide-react";

const items = [
  {
    title: "Rinoplastia",
    text: "Indicada para quem deseja harmonizar o formato do nariz, melhorar proporções faciais e, em alguns casos, auxiliar na função respiratória.",
    cta: "Quero saber sobre rinoplastia",
  },
  {
    title: "Blefaroplastia",
    text: "Indicada para quem se incomoda com pálpebras caídas, excesso de pele, bolsas abaixo dos olhos ou aparência constante de cansaço.",
    cta: "Quero saber sobre blefaroplastia",
  },
  {
    title: "Harmonização Facial",
    text: "Procedimentos planejados para equilibrar traços faciais, valorizar contornos e preservar a naturalidade.",
    cta: "Quero saber mais",
  },
  {
    title: "Planejamento Personalizado",
    text: "Uma avaliação individual para entender o que faz sentido para o seu caso, seus objetivos e sua segurança.",
    cta: "Quero minha avaliação",
  },
];

export function Procedures() {
  return (
    <section id="procedimentos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Procedimentos"
          title={
            <>
              Procedimentos planejados para valorizar sua{" "}
              <span className="text-gradient-gold italic">beleza natural</span>
            </>
          }
          subtitle="Cada caso é avaliado de forma individual, respeitando sua anatomia, seus objetivos e a harmonia do seu rosto."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="glass rounded-3xl p-8 flex flex-col group hover:border-gold/40 transition-all duration-500 hover:-translate-y-1.5"
            >
              <span className="text-xs text-gold tracking-widest">0{i + 1}</span>
              <h3 className="text-2xl mt-4 mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.text}</p>
              <a
                href="#avaliacao"
                className="mt-7 inline-flex items-center gap-2 text-sm text-gold group-hover:gap-3 transition-all"
              >
                {item.cta} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
