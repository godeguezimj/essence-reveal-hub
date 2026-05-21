import { ShieldCheck } from "lucide-react";
import specialistImg from "@/assets/specialist-implant.png";

/**
 * Premium hero composition — specialist holding a silicone implant.
 * Editorial framing with cinematic glow, soft feather edges and
 * a glass trust badge anchored at the bottom.
 */
export function FaceComposition() {
  return (
    <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[640px] select-none">
      {/* Ambient cinematic halos */}
      <div
        aria-hidden
        className="absolute -inset-12 rounded-[3rem] blur-3xl opacity-80 animate-face-glow pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 35% 30%, oklch(0.48 0.22 263 / 0.42), transparent 60%), radial-gradient(ellipse at 70% 78%, oklch(0.62 0.18 260 / 0.28), transparent 65%)",
        }}
      />

      {/* Glass canvas */}
      <div
        className="relative h-full w-full glass rounded-[2rem] overflow-hidden"
        style={{
          boxShadow:
            "0 40px 90px -30px oklch(0.32 0.18 265 / 0.45), 0 0 0 1px oklch(0.48 0.22 263 / 0.08), 0 0 60px -10px oklch(0.48 0.22 263 / 0.22)",
          background:
            "linear-gradient(160deg, oklch(0.98 0.012 255 / 0.7), oklch(0.94 0.025 260 / 0.5) 55%, oklch(0.88 0.045 263 / 0.4))",
        }}
      >
        {/* Inner soft light layers */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, oklch(1 0 0 / 0.55), transparent 50%), radial-gradient(circle at 78% 88%, oklch(0.48 0.22 263 / 0.18), transparent 55%)",
          }}
        />

        {/* Editorial radial focus behind the specialist */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none animate-face-glow"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 50% 45%, oklch(0.62 0.18 260 / 0.30), transparent 70%)",
          }}
        />

        {/* Subtle grid wash */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="gridw" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M28 0H0V28" fill="none" stroke="oklch(0.32 0.18 265)" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridw)" />
        </svg>

        {/* Specialist image — feathered, floating */}
        <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
          <img
            src={specialistImg}
            alt="Especialista da Full Plástica segurando uma prótese de silicone"
            className="relative h-[108%] sm:h-[112%] w-auto max-w-none object-contain object-bottom animate-face-float"
            style={{
              filter:
                "drop-shadow(0 30px 50px oklch(0.32 0.18 265 / 0.35)) drop-shadow(0 8px 18px oklch(0.32 0.18 265 / 0.22))",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 92% at 50% 48%, #000 70%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 80% 92% at 50% 48%, #000 70%, transparent 100%)",
            }}
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Floating premium particles */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {[
            { left: "10%", top: "20%", d: 0 },
            { left: "85%", top: "24%", d: 1.4 },
            { left: "18%", top: "72%", d: 2.6 },
            { left: "78%", top: "66%", d: 3.2 },
            { left: "52%", top: "10%", d: 4.1 },
            { left: "8%", top: "50%", d: 6.2 },
            { left: "92%", top: "46%", d: 7.0 },
          ].map((p, i) => (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full animate-face-particle"
              style={{
                left: p.left,
                top: p.top,
                background:
                  "radial-gradient(circle, oklch(0.62 0.18 260 / 0.75), oklch(0.48 0.22 263 / 0) 70%)",
                boxShadow: "0 0 12px oklch(0.48 0.22 263 / 0.55)",
                animationDelay: `${p.d}s`,
              }}
            />
          ))}
        </div>

        {/* Sweeping cinematic light */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none mix-blend-screen animate-face-sweep"
          style={{
            background:
              "linear-gradient(115deg, transparent 38%, oklch(1 0 0 / 0.16) 50%, transparent 62%)",
          }}
        />

        {/* Bottom premium fade for badge contrast */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, oklch(0.98 0.012 255 / 0.85), transparent)",
          }}
        />

        {/* Inner ring */}
        <div className="absolute inset-3 rounded-[1.6rem] pointer-events-none ring-1 ring-white/25" />

        {/* Premium badge */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-white/80 backdrop-blur-xl border border-royal/15 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-[0_18px_40px_-15px_oklch(0.32_0.18_265/0.45)]">
          <div className="h-10 w-10 rounded-full bg-royal/10 grid place-items-center shrink-0">
            <ShieldCheck size={18} className="text-royal" />
          </div>
          <div>
            <p className="text-[10px] text-royal uppercase tracking-[0.22em] font-medium">
              Experiência premium
            </p>
            <p className="text-sm text-royal-deep">
              Naturalidade, segurança e acompanhamento próximo
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes face-float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-8px) }
        }
        @keyframes face-glow {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 0.95; transform: scale(1.04); }
        }
        @keyframes face-particle {
          0% { opacity: 0; transform: translateY(0) scale(0.8); }
          20% { opacity: 1; }
          80% { opacity: 0.8; }
          100% { opacity: 0; transform: translateY(-32px) scale(1.15); }
        }
        @keyframes face-sweep {
          0% { transform: translateX(-30%); opacity: 0; }
          40% { opacity: 0.55; }
          100% { transform: translateX(30%); opacity: 0; }
        }
        .animate-face-float { animation: face-float 9s ease-in-out infinite; }
        .animate-face-glow { animation: face-glow 8s ease-in-out infinite; }
        .animate-face-particle { animation: face-particle 7s ease-in-out infinite; }
        .animate-face-sweep { animation: face-sweep 11s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-face-float,
          .animate-face-glow,
          .animate-face-particle,
          .animate-face-sweep { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
