import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainSection } from "@/components/PainSection";
import { Procedures } from "@/components/Procedures";
import { ProcedureSpotlight } from "@/components/ProcedureSpotlight";
import { LeadForm } from "@/components/LeadForm";
import { Timeline } from "@/components/Timeline";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import rinoImg from "@/assets/rinoplastia.jpg";
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
      <ProcedureSpotlight
        image={rinoImg}
        eyebrow="Rinoplastia"
        title={<>Rinoplastia: harmonia facial com <span className="text-gradient-gold italic">naturalidade</span></>}
        text="A rinoplastia é indicada para quem deseja melhorar a estética do nariz, suavizar a giba óssea, corrigir assimetrias, ajustar a ponta nasal ou buscar mais equilíbrio entre os traços do rosto. Em alguns casos, também pode contribuir para melhora respiratória."
        points={[
          "Planejamento individual",
          "Resultado natural",
          "Harmonia com o rosto",
          "Avaliação funcional e estética",
          "Acompanhamento especializado",
        ]}
        cta="Agendar avaliação para rinoplastia"
      />
      <ProcedureSpotlight
        image={blefaroImg}
        eyebrow="Blefaroplastia"
        title={<>Blefaroplastia: um olhar mais <span className="text-gradient-gold italic">leve</span> e descansado</>}
        text="A blefaroplastia pode ajudar pessoas que se incomodam com excesso de pele nas pálpebras, bolsas abaixo dos olhos ou aparência de cansaço. O objetivo é trazer leveza ao olhar, respeitando a naturalidade do rosto."
        points={[
          "Redução do excesso de pele",
          "Melhora da aparência de cansaço",
          "Olhar mais leve",
          "Planejamento personalizado",
          "Acompanhamento no pós-operatório",
        ]}
        cta="Agendar avaliação para blefaroplastia"
        reverse
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
