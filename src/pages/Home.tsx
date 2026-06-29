import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VideoProof } from "@/components/VideoProof";
import { Procedures } from "@/components/Procedures";
import { Structure } from "@/components/Structure";
import { Results } from "@/components/Results";
import { LeadForm } from "@/components/LeadForm";
import { Timeline } from "@/components/Timeline";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <VideoProof />
      <Procedures />
      <Results />
      <Structure />
      <LeadForm />
      <Timeline />
      <Faq />
      <FinalCta />
      <Footer />
      <Toaster position="top-center" />
    </main>
  );
}
