import { SectionHeading } from "./SectionHeading";
import { Eye, User2, Sparkles } from "lucide-react";

const cards = [
  {
    icon: User2,
    title: "Nariz em desarmonia com o rosto",
    text: "Para quem sente que o formato do nariz não combina com seus traços ou chama mais atenção do que gostaria.",
  },
  {
    icon: Eye,
    title: "Olhar cansado ou pesado",
    text: "Para quem se incomoda com excesso de pele nas pálpebras, bolsas abaixo dos olhos ou aparência de cansaço.",
  },
  {
    icon: Sparkles,
    title: "Desejo de mudança com naturalidade",
    text: "Para quem busca melhorar a autoestima sem perder sua identidade ou transformar demais a própria aparência.",
  },
];

export function PainSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Por que tantas pessoas buscam"
          title={
            <>
              O detalhe que te incomoda pode estar afetando sua{" "}
              <span className="text-gradient-gold italic">autoestima</span> todos os dias
            </>
          }
          subtitle="Muitas pessoas evitam fotos, se incomodam ao olhar no espelho ou sentem que alguns traços não transmitem como realmente se sentem. Na Full Plástica, cada procedimento é pensado para trazer mais harmonia, confiança e naturalidade."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {cards.map((c) => (
            <div
              key={c.title}
              className="glass rounded-3xl p-8 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-2xl glass-gold grid place-items-center mb-6">
                <c.icon size={20} className="text-gold" />
              </div>
              <h3 className="text-2xl mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#avaliacao" className="btn-gold inline-flex px-7 py-3.5 rounded-full text-sm font-medium">
            Quero entender meu caso
          </a>
        </div>
      </div>
    </section>
  );
}
