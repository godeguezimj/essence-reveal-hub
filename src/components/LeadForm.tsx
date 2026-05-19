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
    <section id="avaliacao" className="py-24 lg:py-32 relative section-tint">
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

        <form onSubmit={submit} className="bg-white rounded-3xl p-8 lg:p-12 mt-14 space-y-7 shadow-[0_20px_60px_-20px_oklch(0.32_0.18_265/0.25)] border border-royal/10">
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
            <Choices options={procedimentos} value={form.procedimento} onChange={(v) => setForm({ ...form, procedimento: v })} />
          </Field>

          <Field label="O que mais te incomoda hoje?">
            <Choices options={incomodos} value={form.incomodo} onChange={(v) => setForm({ ...form, incomodo: v })} />
          </Field>

          <Field label="Pretende realizar o procedimento quando?">
            <Choices options={prazos} value={form.prazo} onChange={(v) => setForm({ ...form, prazo: v })} />
          </Field>

          <div className="pt-2">
            <button type="submit" className="btn-gold w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium">
              Quero falar com a Full Plástica
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
          background: oklch(0.98 0.01 250);
          border: 1px solid oklch(0.48 0.22 263 / 0.18);
          color: var(--color-foreground);
          padding: 0.95rem 1.1rem;
          border-radius: 0.85rem;
          transition: all 0.3s ease;
        }
        .input-elegant:focus {
          outline: none;
          border-color: var(--royal);
          background: #fff;
          box-shadow: 0 0 0 4px oklch(0.48 0.22 263 / 0.10);
        }
        .input-elegant::placeholder { color: oklch(0.6 0.03 255); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm text-foreground/85 mb-3 font-medium">{label}</label>
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
                ? "bg-royal text-white border-royal shadow-[0_8px_20px_-8px_oklch(0.48_0.22_263/0.5)]"
                : "border-royal/20 text-foreground/75 hover:border-royal hover:text-royal bg-white"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
