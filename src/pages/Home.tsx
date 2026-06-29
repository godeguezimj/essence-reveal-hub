import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";

const VideoProof = lazy(() => import("@/components/VideoProof").then(m => ({ default: m.VideoProof })));
const Procedures = lazy(() => import("@/components/Procedures").then(m => ({ default: m.Procedures })));
const Results = lazy(() => import("@/components/Results").then(m => ({ default: m.Results })));
const Structure = lazy(() => import("@/components/Structure").then(m => ({ default: m.Structure })));
const Timeline = lazy(() => import("@/components/Timeline").then(m => ({ default: m.Timeline })));
const Faq = lazy(() => import("@/components/Faq").then(m => ({ default: m.Faq })));
const FinalCta = lazy(() => import("@/components/FinalCta").then(m => ({ default: m.FinalCta })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const Placeholder = () => <div style={{ minHeight: 400 }} aria-hidden />;

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<Placeholder />}>
        <VideoProof />
        <Procedures />
        <Results />
        <Structure />
      </Suspense>
      <LeadForm />
      <Suspense fallback={<Placeholder />}>
        <Timeline />
        <Faq />
        <FinalCta />
        <Footer />
      </Suspense>
      <Toaster position="top-center" />
    </main>
  );
}
