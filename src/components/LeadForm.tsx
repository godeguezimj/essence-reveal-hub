import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { toast } from "sonner";

const procedimentos = ["Rinoplastia", "Blefaroplastia", "Harmonização facial", "Ainda não sei"];
const incomodos = [
  "Estética do nariz",
  "Nariz torto",
  "Ponta caída",
  "Bolsas abaixo dos olhos",
  "Pálpebras caídas",
  "Aparência de cansaço",
  "Quero entender melhor meu caso",
];
const prazos = ["O mais rápido possível", "Nos próximos meses", "Apenas pesquisando"];

export function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    procedimento: "",
    incomodo: "",
    prazo: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.whatsapp) {
      toast.error("Preencha nome e WhatsApp para continuar.");
      return;
    }
    toast.success("Recebemos seus dados. A equipe Full Plástica entrará em contato em breve.");
    setForm({ nome: "", whatsapp: "", procedimento: "", incomodo: "", prazo: "" });
  };

  return (
    <section id="avaliacao" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Pré-avaliação"
          title={
            <>
              Receba uma <span className="text-gradient-gold italic">orientação</span> personalizada
            </>
          }
          subtitle="Preencha os dados abaixo para que a equipe Full Plástica entenda seu caso e entre em contato com as próximas orientações."
        />

        <form onSubmit={submit} className="glass rounded-3xl p-8 lg:p-12 mt-14 space-y-7">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nome">
              <input
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="input-elegant"
                placeholder="Seu nome completo"
              />
            </Field>
            <Field label="WhatsApp">
              <input
                required
                type="tel"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="input-elegant"
                placeholder="(00) 00000-0000"
              />
            </Field>
          </div>

          <Field label="Qual procedimento você tem interesse?">
            <Choices
              options={procedimentos}
              value={form.procedimento}
              onChange={(v) => setForm({ ...form, procedimento: v })}
            />
          </Field>

          <Field label="O que mais te incomoda hoje?">
            <Choices
              options={incomodos}
              value={form.incomodo}
              onChange={(v) => setForm({ ...form, incomodo: v })}
            />
          </Field>

          <Field label="Pretende realizar o procedimento quando?">
            <Choices
              options={prazos}
              value={form.prazo}
              onChange={(v) => setForm({ ...form, prazo: v })}
            />
          </Field>

          <div className="pt-2">
            <button type="submit" className="btn-gold w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium">
              Quero receber minha avaliação
            </button>
            <p className="text-xs text-muted-foreground mt-4">
              Ao enviar, você concorda em receber contato da equipe Full Plástica pelo WhatsApp.
            </p>
          </div>
        </form>
      </div>

      <style>{`
        .input-elegant {
          width: 100%;
          background: oklch(1 0 0 / 0.04);
          border: 1px solid oklch(1 0 0 / 0.12);
          color: var(--color-foreground);
          padding: 0.85rem 1rem;
          border-radius: 0.85rem;
          transition: all 0.3s ease;
        }
        .input-elegant:focus {
          outline: none;
          border-color: var(--gold);
          background: oklch(1 0 0 / 0.07);
        }
        .input-elegant::placeholder { color: oklch(0.65 0.02 240); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm text-foreground/85 mb-3">{label}</label>
      {children}
    </div>
  );
}

function Choices({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={`px-4 py-2.5 rounded-full text-sm border transition-all ${
              active
                ? "bg-gold text-[oklch(0.16_0.04_250)] border-gold"
                : "border-white/15 text-foreground/80 hover:border-gold/50 hover:text-gold"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
