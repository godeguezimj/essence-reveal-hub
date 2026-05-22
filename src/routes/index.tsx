import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainSection } from "@/components/PainSection";
import { Procedures } from "@/components/Procedures";
import { ProcedureSpotlight } from "@/components/ProcedureSpotlight";
import { Results } from "@/components/Results";
import { LeadForm } from "@/components/LeadForm";
import { Timeline } from "@/components/Timeline";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import blefaroImg from "@/assets/blefaroplastia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Full Plástica — Cirurgia Plástica Premium com Naturalidade" },
      { name: "description", content: "Clínica Full Plástica: rinoplastia, blefaroplastia e harmonização facial com planejamento individualizado e resultado natural." },
      { property: "og:title", content: "Full Plástica — Cirurgia Plástica Premium" },
      { property: "og:description", content: "Realce sua beleza com naturalidade, segurança e planejamento personalizado." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PainSection />
      <Procedures />
      <Results />
      <ProcedureSpotlight
        image={blefaroImg}
        eyebrow="Blefaroplastia"
        title={<>Um olhar mais <span className="text-gradient-gold italic">leve</span>, descansado e natural</>}
        text="Um procedimento planejado para devolver leveza ao olhar — suavizando o excesso de pele e as bolsas que carregam expressão de cansaço, sempre respeitando seus traços e sua naturalidade."
        points={[
          "Olhar mais leve e descansado",
          "Resultado natural e elegante",
          "Planejamento individual",
          "Recuperação acompanhada",
          "Acompanhamento próximo",
        ]}
        cta="Quero entender meu caso"
        microcopy={[
          "Atendimento individual",
          "Planejamento personalizado",
          "Resposta rápida no WhatsApp",
        ]}
        reverse
        dark
      />
      <LeadForm />
      <Timeline />
      <About />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
      <Toaster position="top-center" />
    </main>
  );
}
