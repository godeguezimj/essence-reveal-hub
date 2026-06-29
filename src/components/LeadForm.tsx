import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { toast } from "sonner";
import {
  Sparkles,
  Eye,
  Wand2,
  Heart,
  Search,
  Zap,
  CalendarClock,
  CalendarRange,
  User,
  Phone,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Check,
  ShieldCheck,
  MessageCircle,
  Droplet,
  Activity,
  Smile,
  Leaf,
  Baby,
  MoreHorizontal,
  Loader2,
} from "lucide-react";

// ============================================================================
// CONFIGURAÇÃO — ajuste estas constantes quando o webhook/WhatsApp forem definidos
// ============================================================================
const WEBHOOK_URL = "https://webhook.exemplo.com/full-plastica-leads"; // TODO: substituir pela URL real
const WHATSAPP_REDIRECT_URL = "https://wa.me/?text=" + encodeURIComponent(
  "Olá! Acabei de preencher a pré-avaliação no site da Full Plástica e gostaria de falar com um especialista."
);
const PAGINA_ORIGEM = "Landing Page Full Plástica";
// ============================================================================

type Option = { value: string; label: string; icon: React.ComponentType<{ className?: string }> };

type LeadFormState = {
  nome: string;
  whatsapp: string;
  cidade: string;
  procedimento: string;
  objetivo: string;
  prazo: string;
};

const procedimentos: Option[] = [
  { value: "Rinoplastia", label: "Rinoplastia", icon: Sparkles },
  { value: "Lipo HD", label: "Lipo HD", icon: Activity },
  { value: "Lipoescultura", label: "Lipoescultura", icon: Wand2 },
  { value: "Prótese de Mama", label: "Prótese de Mama", icon: Droplet },
  { value: "Blefaroplastia", label: "Blefaroplastia", icon: Eye },
  { value: "Outro procedimento", label: "Outro procedimento", icon: MoreHorizontal },
];

const objetivos: Option[] = [
  { value: "Melhorar minha autoestima", label: "Melhorar minha autoestima", icon: Heart },
  { value: "Corrigir uma característica que me incomoda", label: "Corrigir uma característica que me incomoda", icon: Smile },
  { value: "Recuperar minha aparência após gestação ou emagrecimento", label: "Recuperar minha aparência após gestação ou emagrecimento", icon: Baby },
  { value: "Quero um resultado mais natural", label: "Quero um resultado mais natural", icon: Leaf },
  { value: "Ainda estou pesquisando", label: "Ainda estou pesquisando", icon: Search },
];

const prazos: Option[] = [
  { value: "O quanto antes", label: "O quanto antes", icon: Zap },
  { value: "Nos próximos 3 meses", label: "Nos próximos 3 meses", icon: CalendarClock },
  { value: "Entre 3 e 6 meses", label: "Entre 3 e 6 meses", icon: CalendarRange },
  { value: "Ainda estou pesquisando", label: "Ainda estou pesquisando", icon: Search },
];

function formatWhatsapp(raw: string) {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function getUrlParam(name: string): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  return params.get(name) ?? "";
}

const STEPS = [
  { key: "procedimento", label: "Procedimento" },
  { key: "objetivo", label: "Objetivo" },
  { key: "prazo", label: "Prazo" },
  { key: "contato", label: "Contato" },
] as const;

const initialForm: LeadFormState = {
  nome: "",
  whatsapp: "",
  cidade: "",
  procedimento: "",
  objetivo: "",
  prazo: "",
};

export function LeadForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [form, setForm] = useState<LeadFormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const total = STEPS.length;
  const progress = ((step + 1) / total) * 100;

  const goNext = () => {
    if (step === 0 && !form.procedimento) return toast.error("Escolha um procedimento para continuar.");
    if (step === 1 && !form.objetivo) return toast.error("Selecione o que mais motivou você.");
    if (step === 2 && !form.prazo) return toast.error("Indique quando pretende realizar.");
    setDirection(1);
    setStep((s) => Math.min(s + 1, total - 1));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim() || !form.cidade.trim()) {
      toast.error("Preencha nome, WhatsApp e cidade para continuar.");
      return;
    }
    if (submitting) return;

    const payload = {
      procedimento: form.procedimento,
      objetivo: form.objetivo,
      prazo: form.prazo,
      nome: form.nome.trim(),
      whatsapp: form.whatsapp.trim(),
      cidade: form.cidade.trim(),
      pagina: PAGINA_ORIGEM,
      dataHora: new Date().toISOString(),
      utm_source: getUrlParam("utm_source"),
      utm_medium: getUrlParam("utm_medium"),
      utm_campaign: getUrlParam("utm_campaign"),
      utm_content: getUrlParam("utm_content"),
      utm_term: getUrlParam("utm_term"),
      fbclid: getUrlParam("fbclid"),
      gclid: getUrlParam("gclid"),
    };

    setSubmitting(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      toast.success("Recebemos seus dados. Você será redirecionado ao WhatsApp.");
      setForm(initialForm);
      setStep(0);
      // pequena pausa para o usuário ver o toast antes do redirect
      setTimeout(() => {
        window.location.href = WHATSAPP_REDIRECT_URL;
      }, 900);
    } catch (err) {
      console.error("Erro ao enviar lead:", err);
      toast.error("Não conseguimos enviar seus dados. Tente novamente em instantes.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="avaliacao" className="py-20 sm:py-24 lg:py-32 relative section-tint overflow-hidden">
      {/* soft glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-[420px] w-[420px] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(closest-side, oklch(0.62 0.18 260 / 0.18), transparent)" }} />
        <div className="absolute -bottom-40 right-1/4 h-[460px] w-[460px] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(closest-side, oklch(0.48 0.22 263 / 0.14), transparent)" }} />
      </div>

      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 relative">
        <SectionHeading
          eyebrow="Pré-avaliação"
          title={
            <>
              Uma <span className="text-gradient-gold italic">conversa</span> antes do procedimento
            </>
          }
          subtitle="Responda quatro perguntas rápidas. A equipe Full Plástica entra em contato com uma orientação personalizada para o seu caso."
        />

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-foreground/70">
          {[
            { icon: ShieldCheck, text: "Atendimento individual" },
            { icon: Sparkles, text: "Avaliação personalizada" },
            { icon: MessageCircle, text: "Resposta rápida no WhatsApp" },
          ].map((m) => (
            <li key={m.text} className="inline-flex items-center gap-2">
              <m.icon className="h-4 w-4 text-royal" />
              <span>{m.text}</span>
            </li>
          ))}
        </ul>

        {/* Card */}
        <div className="mt-10 sm:mt-12 relative">
          <div aria-hidden className="absolute -inset-px rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-b from-royal/15 via-transparent to-royal/10 blur-[1px]" />
          <div className="relative bg-white rounded-[1.4rem] sm:rounded-[1.85rem] border border-royal/10 shadow-[0_30px_80px_-30px_oklch(0.32_0.18_265/0.30)] p-5 sm:p-10 lg:p-12">

            {/* Progress */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs uppercase tracking-[0.22em] text-royal/80">
                Etapa {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>
              <div className="text-xs text-muted-foreground hidden sm:block">{STEPS[step].label}</div>
            </div>

            <div className="relative h-[3px] w-full rounded-full bg-royal/10 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-royal to-royal-soft transition-[width] duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Steps indicators */}
            <ol className="mt-5 grid grid-cols-4 gap-2">
              {STEPS.map((s, i) => {
                const done = i < step;
                const active = i === step;
                return (
                  <li key={s.key} className="flex items-center gap-2 min-w-0">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-medium transition-all duration-500 ${
                        done
                          ? "bg-royal text-white"
                          : active
                          ? "bg-royal text-white shadow-[0_0_0_6px_oklch(0.48_0.22_263/0.12)]"
                          : "bg-royal/10 text-royal/60"
                      }`}
                    >
                      {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                    </span>
                    <span
                      className={`text-[11px] sm:text-xs truncate transition-colors ${
                        active ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {s.label}
                    </span>
                  </li>
                );
              })}
            </ol>

            {/* Step content */}
            <form onSubmit={submit} className="mt-9">
              <div key={step} className={direction === 1 ? "animate-step-in" : "animate-step-in-back"}>
                {step === 0 && (
                  <StepQuestion title="Qual procedimento você deseja avaliar?" hint="Você pode mudar essa escolha depois.">
                    <ChoicesGrid options={procedimentos} value={form.procedimento}
                      onChange={(v) => setForm((current) => ({ ...current, procedimento: v }))} />
                  </StepQuestion>
                )}

                {step === 1 && (
                  <StepQuestion title="O que mais motivou você a buscar esse procedimento?" hint="Sua resposta nos ajuda a personalizar a orientação.">
                    <ChoicesGrid options={objetivos} value={form.objetivo} columns={1}
                      onChange={(v) => setForm((current) => ({ ...current, objetivo: v }))} />
                  </StepQuestion>
                )}

                {step === 2 && (
                  <StepQuestion title="Quando pretende realizar o procedimento?" hint="Sem compromisso — apenas para entendermos o seu momento.">
                    <ChoicesGrid options={prazos} value={form.prazo} columns={1}
                      onChange={(v) => setForm((current) => ({ ...current, prazo: v }))} />
                  </StepQuestion>
                )}

                {step === 3 && (
                  <StepQuestion title="Para onde enviamos sua orientação?" hint="Resposta direta no WhatsApp, sem ligações inesperadas.">
                    <div className="grid sm:grid-cols-2 gap-4 mt-2">
                      <InputField
                        icon={User}
                        label="Nome"
                        value={form.nome}
                        onChange={(v) => setForm({ ...form, nome: v })}
                        placeholder="Seu nome completo"
                        autoComplete="name"
                      />
                      <InputField
                        icon={Phone}
                        label="WhatsApp"
                        type="tel"
                        value={form.whatsapp}
                        onChange={(v) => setForm({ ...form, whatsapp: formatWhatsapp(v) })}
                        placeholder="(00) 00000-0000"
                        autoComplete="tel"
                      />
                      <div className="sm:col-span-2">
                        <InputField
                          icon={MapPin}
                          label="Cidade"
                          value={form.cidade}
                          onChange={(v) => setForm({ ...form, cidade: v })}
                          placeholder="Sua cidade"
                          autoComplete="address-level2"
                        />
                      </div>
                    </div>
                  </StepQuestion>
                )}
              </div>

              {/* Nav */}
              <div className="mt-8 sm:mt-10 flex flex-col-reverse sm:flex-row items-stretch sm:items-center sm:justify-between gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0 || submitting}
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm text-foreground/70 hover:text-royal disabled:opacity-0 transition-all min-h-[44px]"
                >
                  <ArrowLeft className="h-4 w-4" /> Voltar
                </button>

                {step < total - 1 ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="btn-gold inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[54px] px-7 py-3.5 rounded-full text-sm font-medium"
                  >
                    Continuar <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[54px] px-7 py-3.5 rounded-full text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                      </>
                    ) : (
                      <>
                        Quero falar com um especialista <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </div>


              {step === total - 1 && (
                <p className="text-xs text-muted-foreground mt-5 text-center sm:text-left">
                  Ao enviar, você concorda em receber contato da equipe Full Plástica pelo WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .input-elegant {
          width: 100%;
          background: oklch(0.985 0.008 250);
          border: 1px solid oklch(0.48 0.22 263 / 0.16);
          color: var(--color-foreground);
          padding: 1.05rem 1.1rem 1.05rem 2.85rem;
          border-radius: 1rem;
          font-size: 16px;
          transition: all 0.35s cubic-bezier(.2,.7,.2,1);
        }
        .input-elegant:focus {
          outline: none;
          border-color: var(--royal);
          background: #fff;
          box-shadow: 0 0 0 6px oklch(0.48 0.22 263 / 0.10);
        }
        .input-elegant::placeholder { color: oklch(0.62 0.03 255); }


        @keyframes step-in {
          from { opacity: 0; transform: translateX(14px); filter: blur(2px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes step-in-back {
          from { opacity: 0; transform: translateX(-14px); filter: blur(2px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        .animate-step-in { animation: step-in .55s cubic-bezier(.2,.7,.2,1) both; }
        .animate-step-in-back { animation: step-in-back .55s cubic-bezier(.2,.7,.2,1) both; }

        @keyframes soft-pulse {
          0%, 100% { box-shadow: 0 10px 30px -12px oklch(0.48 0.22 263 / 0.45), 0 0 0 0 oklch(0.48 0.22 263 / 0.25); }
          50% { box-shadow: 0 14px 36px -10px oklch(0.48 0.22 263 / 0.55), 0 0 0 8px oklch(0.48 0.22 263 / 0); }
        }
        .choice-active { animation: soft-pulse 2.4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function StepQuestion({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-display leading-snug text-foreground">{title}</h3>
      {hint && <p className="mt-2 text-sm text-muted-foreground">{hint}</p>}
      <div className="mt-7">{children}</div>
    </div>
  );
}

function ChoicesGrid({
  options,
  value,
  onChange,
  columns = 2,
}: {
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  columns?: 1 | 2;
}) {
  return (
    <div className={`grid gap-3 ${columns === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
      {options.map((o) => {
        const Icon = o.icon;
        const active = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`group relative flex items-center gap-3.5 text-left px-5 py-4 sm:py-[1.1rem] rounded-2xl border transition-all duration-300 ease-out ${
              active
                ? "bg-royal text-white border-royal choice-active"
                : "bg-white border-royal/15 text-foreground/85 hover:border-royal/50 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-18px_oklch(0.48_0.22_263/0.45)]"
            }`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                active ? "bg-white/15 text-white" : "bg-royal/8 text-royal group-hover:bg-royal/12"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <span className="text-[15px] font-medium leading-snug">{o.label}</span>
            {active && (
              <span className="ml-auto inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <Check className="h-3.5 w-3.5 text-white" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function InputField({
  icon: Icon,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-foreground/80 mb-2 font-medium">{label}</span>
      <span className="relative block">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-royal/70" />
        <input
          required
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          className="input-elegant"
          placeholder={placeholder}
        />
      </span>
    </label>
  );
}
