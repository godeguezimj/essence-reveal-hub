import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAzul from "@/assets/logo-full-plastica-azul.png";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#avaliacao", label: "Avaliação" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-royal/10 shadow-[0_4px_20px_-12px_oklch(0.32_0.18_265/0.25)]"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-24 md:h-28">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Full Plástica">
          <img
            src={logoAzul}
            alt="Full Plástica"
            className="h-16 md:h-20 lg:h-24 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-royal-deep/80 hover:text-royal transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#avaliacao"
          className="hidden lg:inline-flex btn-gold px-5 py-2.5 rounded-full text-sm font-medium"
        >
          Falar com especialista
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-royal-deep p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-white/10 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-foreground/90 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#avaliacao"
            onClick={() => setOpen(false)}
            className="btn-gold inline-flex px-5 py-2.5 rounded-full text-sm font-medium"
          >
            Falar com especialista
          </a>
        </div>
      )}
    </header>
  );
}
