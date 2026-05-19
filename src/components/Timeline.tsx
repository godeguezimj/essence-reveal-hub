import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", title: "Avaliação individual", text: "Entendimento do seu caso, objetivos, histórico e expectativas." },
  { n: "02", title: "Planejamento personalizado", text: "Definição da melhor abordagem para alcançar um resultado harmônico e seguro." },
  { n: "03", title: "Orientações pré-procedimento", text: "Explicações claras sobre preparação, cuidados e etapas do processo." },
  { n: "04", title: "Procedimento com acompanhamento", text: "Execução com suporte especializado e atenção aos detalhes." },
  { n: "05", title: "Pós-operatório assistido", text: "Acompanhamento durante a recuperação e evolução do resultado." },
];

export function Timeline() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Experiência Full Plástica"
          title={
            <>
              Uma experiência pensada para sua{" "}
              <span className="text-gradient-gold italic">segurança</span>, confiança e resultado
            </>
          }
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="glass rounded-3xl p-7 relative overflow-hidden hover:border-gold/30 transition-all"
            >
              <div className="text-5xl font-display text-gradient-gold mb-4">{s.n}</div>
              <h3 className="text-lg mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#avaliacao" className="btn-outline-gold inline-flex px-7 py-3.5 rounded-full text-sm font-medium">
            Falar com a equipe Full Plástica
          </a>
        </div>
      </div>
    </section>
  );
}
