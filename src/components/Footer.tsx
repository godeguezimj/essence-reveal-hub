import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#avaliacao", label: "Avaliação" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="font-display text-2xl">
              Full <span className="text-gradient-gold font-medium">Plástica</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
              Clínica de cirurgia plástica com foco em naturalidade, segurança e
              planejamento individualizado para cada paciente.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium">
                <MessageCircle size={15} /> WhatsApp
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="btn-outline-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium">
                <Instagram size={15} /> Instagram
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Navegação</p>
            <ul className="space-y-3 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/80 hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Contato</p>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-3"><Mail size={15} className="text-gold mt-0.5" /> contato@fullplastica.com.br</li>
              <li className="flex items-start gap-3"><MessageCircle size={15} className="text-gold mt-0.5" /> (00) 00000-0000</li>
              <li className="flex items-start gap-3"><MapPin size={15} className="text-gold mt-0.5" /> Endereço da clínica</li>
            </ul>
          </div>
        </div>

        <div className="divider-gold my-12" />

        <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
          Os resultados podem variar de acordo com cada paciente. A avaliação individual é
          indispensável para indicação do melhor procedimento.
        </p>
        <p className="text-xs text-muted-foreground/70 text-center mt-6">
          © {new Date().getFullYear()} Full Plástica. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
