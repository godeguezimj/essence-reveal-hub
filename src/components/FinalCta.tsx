import { MessageCircle, CalendarCheck } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="relative glass rounded-[2.5rem] p-12 lg:p-20 text-center overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">Comece agora</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mx-auto">
              Dê o primeiro passo para uma{" "}
              <span className="text-gradient-gold italic">transformação</span> segura e natural
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Fale com a equipe Full Plástica e descubra qual procedimento combina com seu momento,
              seus objetivos e sua autoestima.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#avaliacao" className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium">
                <CalendarCheck size={16} /> Quero agendar minha avaliação
              </a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="btn-outline-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium">
                <MessageCircle size={16} /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
