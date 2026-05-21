import { ShieldCheck } from "lucide-react";

/**
 * Premium animated abstract facial composition.
 * Pure SVG + CSS — feminine wireframe silhouette with breathing glow,
 * floating particles, cinematic light. No external assets.
 */
export function FaceComposition() {
  return (
    <div className="relative w-full h-[440px] sm:h-[520px] lg:h-[600px] select-none">
      {/* Cinematic ambient halos */}
      <div
        aria-hidden
        className="absolute -inset-12 rounded-[3rem] blur-3xl opacity-80 animate-face-glow pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 25%, oklch(0.48 0.22 263 / 0.40), transparent 60%), radial-gradient(ellipse at 70% 75%, oklch(0.62 0.18 260 / 0.28), transparent 65%)",
        }}
      />

      {/* Glass canvas */}
      <div
        className="relative h-full w-full glass rounded-[2rem] overflow-hidden animate-face-float"
        style={{
          boxShadow:
            "0 40px 90px -30px oklch(0.32 0.18 265 / 0.45), 0 0 0 1px oklch(0.48 0.22 263 / 0.08), 0 0 60px -10px oklch(0.48 0.22 263 / 0.22)",
          background:
            "linear-gradient(160deg, oklch(0.98 0.012 255 / 0.65), oklch(0.94 0.025 260 / 0.45) 60%, oklch(0.88 0.045 263 / 0.35))",
        }}
      >
        {/* Inner soft light */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 18%, oklch(1 0 0 / 0.55), transparent 45%), radial-gradient(circle at 78% 85%, oklch(0.48 0.22 263 / 0.18), transparent 55%)",
          }}
        />

        {/* Subtle grid wash */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="gridw" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M28 0H0V28" fill="none" stroke="oklch(0.32 0.18 265)" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridw)" />
        </svg>

        {/* The face wireframe — centered, breathing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 400 540"
            className="h-[88%] w-auto animate-face-breathe drop-shadow-[0_24px_50px_oklch(0.32_0.18_265/0.25)]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <defs>
              <linearGradient id="silh" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.62 0.18 260)" stopOpacity="0.18" />
                <stop offset="60%" stopColor="oklch(0.48 0.22 263)" stopOpacity="0.10" />
                <stop offset="100%" stopColor="oklch(0.32 0.18 265)" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.62 0.18 260)" />
                <stop offset="100%" stopColor="oklch(0.42 0.22 268)" />
              </linearGradient>
              <radialGradient id="cheek" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="oklch(0.62 0.18 260 / 0.35)" />
                <stop offset="100%" stopColor="oklch(0.62 0.18 260 / 0)" />
              </radialGradient>
              <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.6" />
              </filter>
            </defs>

            {/* Translucent feminine silhouette */}
            <path
              d="M200 38
                 C 268 38 312 92 318 168
                 C 322 218 314 256 304 286
                 C 314 304 320 322 318 340
                 C 314 372 296 392 270 404
                 C 258 446 232 478 200 492
                 C 168 478 142 446 130 404
                 C 104 392 86 372 82 340
                 C 80 322 86 304 96 286
                 C 86 256 78 218 82 168
                 C 88 92 132 38 200 38 Z"
              fill="url(#silh)"
              stroke="url(#line)"
              strokeWidth="1.1"
              strokeOpacity="0.55"
            />

            {/* Soft cheek glows */}
            <circle cx="138" cy="280" r="46" fill="url(#cheek)" />
            <circle cx="262" cy="280" r="46" fill="url(#cheek)" />

            {/* Anatomical contour lines — nose */}
            <path
              d="M200 168 C 196 210 192 248 188 282 C 188 296 196 302 206 302 C 214 302 218 296 216 286"
              stroke="url(#line)"
              strokeWidth="1"
              strokeOpacity="0.7"
              filter="url(#soft)"
            />

            {/* Brow lines */}
            <path d="M132 184 C 156 172 178 172 192 180" stroke="url(#line)" strokeWidth="1.1" strokeOpacity="0.65" />
            <path d="M268 184 C 244 172 222 172 208 180" stroke="url(#line)" strokeWidth="1.1" strokeOpacity="0.65" />

            {/* Eye almonds */}
            <path d="M140 210 C 158 198 184 198 196 212 C 184 222 158 222 140 210 Z" stroke="url(#line)" strokeWidth="0.9" strokeOpacity="0.7" />
            <path d="M204 212 C 216 198 242 198 260 210 C 242 222 216 222 204 212 Z" stroke="url(#line)" strokeWidth="0.9" strokeOpacity="0.7" />
            <circle cx="168" cy="211" r="2.4" fill="oklch(0.42 0.22 268)" opacity="0.55" />
            <circle cx="232" cy="211" r="2.4" fill="oklch(0.42 0.22 268)" opacity="0.55" />

            {/* Lip curves */}
            <path
              d="M168 358 C 184 350 216 350 232 358 C 220 372 180 372 168 358 Z"
              stroke="url(#line)"
              strokeWidth="0.9"
              strokeOpacity="0.7"
            />
            <path d="M168 358 C 184 366 216 366 232 358" stroke="url(#line)" strokeWidth="0.7" strokeOpacity="0.5" />

            {/* Jaw / contour accent */}
            <path
              d="M120 360 C 138 422 168 472 200 488 C 232 472 262 422 280 360"
              stroke="url(#line)"
              strokeWidth="1"
              strokeOpacity="0.45"
              strokeDasharray="2 6"
            />

            {/* Subtle facial mapping arcs */}
            <path
              d="M86 250 C 130 230 270 230 314 250"
              stroke="url(#line)"
              strokeWidth="0.8"
              strokeOpacity="0.35"
              strokeDasharray="1 5"
            />
            <path
              d="M96 320 C 140 305 260 305 304 320"
              stroke="url(#line)"
              strokeWidth="0.8"
              strokeOpacity="0.3"
              strokeDasharray="1 5"
            />

            {/* Reference marker dots */}
            {[
              [200, 168], [188, 282], [200, 358],
              [168, 211], [232, 211], [138, 280], [262, 280],
            ].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2"
                fill="oklch(0.48 0.22 263)"
                opacity="0.55"
                className="animate-face-pulse"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
            ))}
          </svg>
        </div>

        {/* Floating particles */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {[
            { left: "12%", top: "18%", d: 0 },
            { left: "82%", top: "22%", d: 1.4 },
            { left: "20%", top: "78%", d: 2.6 },
            { left: "75%", top: "70%", d: 3.2 },
            { left: "50%", top: "12%", d: 4.1 },
            { left: "60%", top: "86%", d: 5.0 },
            { left: "8%", top: "52%", d: 6.2 },
            { left: "90%", top: "48%", d: 7.0 },
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
              "linear-gradient(115deg, transparent 35%, oklch(1 0 0 / 0.18) 50%, transparent 65%)",
          }}
        />

        {/* Inner ring */}
        <div className="absolute inset-3 rounded-[1.6rem] pointer-events-none ring-1 ring-white/25" />

        {/* Premium badge */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-md border border-royal/15 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-[0_18px_40px_-15px_oklch(0.32_0.18_265/0.45)]">
          <div className="h-10 w-10 rounded-full bg-royal/10 grid place-items-center">
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
          50% { transform: translateY(-10px) }
        }
        @keyframes face-breathe {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 24px 50px oklch(0.32 0.18 265 / 0.22)); }
          50% { transform: scale(1.012); filter: drop-shadow(0 30px 64px oklch(0.32 0.18 265 / 0.30)); }
        }
        @keyframes face-glow {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 0.95; transform: scale(1.04); }
        }
        @keyframes face-pulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.6); }
        }
        @keyframes face-particle {
          0% { opacity: 0; transform: translateY(0) scale(0.8); }
          20% { opacity: 1; }
          80% { opacity: 0.8; }
          100% { opacity: 0; transform: translateY(-32px) scale(1.15); }
        }
        @keyframes face-sweep {
          0% { transform: translateX(-30%); opacity: 0; }
          40% { opacity: 0.6; }
          100% { transform: translateX(30%); opacity: 0; }
        }
        .animate-face-float { animation: face-float 9s ease-in-out infinite; }
        .animate-face-breathe { animation: face-breathe 7s ease-in-out infinite; transform-origin: 50% 50%; }
        .animate-face-glow { animation: face-glow 8s ease-in-out infinite; }
        .animate-face-pulse { animation: face-pulse 3.6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .animate-face-particle { animation: face-particle 7s ease-in-out infinite; }
        .animate-face-sweep { animation: face-sweep 11s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-face-float,
          .animate-face-breathe,
          .animate-face-glow,
          .animate-face-pulse,
          .animate-face-particle,
          .animate-face-sweep { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
