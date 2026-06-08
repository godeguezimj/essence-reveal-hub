import { useState } from "react";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import lipoHdProof from "@/assets/lipo-hd-proof.mp4.asset.json";

type VideoItem = {
  id: string;
  thumbnail: string;
  videoUrl: string;
};

const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const videos: VideoItem[] = [
  { id: "lipo-hd", thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80", videoUrl: lipoHdProof.url },
  { id: "v1", thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80", videoUrl: SAMPLE_VIDEO },
  { id: "v2", thumbnail: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80", videoUrl: SAMPLE_VIDEO },
  { id: "v3", thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80", videoUrl: SAMPLE_VIDEO },
  { id: "v4", thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80", videoUrl: SAMPLE_VIDEO },
  { id: "v5", thumbnail: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80", videoUrl: SAMPLE_VIDEO },
  { id: "v6", thumbnail: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=900&q=80", videoUrl: SAMPLE_VIDEO },
  { id: "v7", thumbnail: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80", videoUrl: SAMPLE_VIDEO },
  { id: "v8", thumbnail: "https://images.unsplash.com/photo-1614308457932-e16d85c3f7b0?auto=format&fit=crop&w=900&q=80", videoUrl: SAMPLE_VIDEO },
];

function VideoTile({ video, onOpen }: { video: VideoItem; onOpen: (v: VideoItem) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(video)}
      className="group relative block aspect-[9/16] h-full w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1 hover:border-[oklch(0.78_0.13_85_/_0.55)] hover:shadow-[0_40px_100px_-30px_oklch(0.55_0.18_265_/_0.55)]"
    >
      <img
        src={video.thumbnail}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(60% 50% at 50% 50%, oklch(0.55 0.2 265 / 0.32), transparent 70%)" }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="relative flex items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-[oklch(0.78_0.13_85_/_0.25)] blur-xl transition-all duration-500 group-hover:bg-[oklch(0.78_0.13_85_/_0.5)]" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[oklch(0.85_0.13_85)]">
            <Play className="h-6 w-6 fill-white text-white" strokeWidth={1.5} />
          </span>
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-5 flex justify-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
        <span className="rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white/90 backdrop-blur-md">
          Assistir resultado
        </span>
      </div>
    </button>
  );
}

export function VideoProof() {
  const [active, setActive] = useState<VideoItem | null>(null);
  const loop = [...videos, ...videos];

  return (
    <section
      id="video-proof"
      className="relative overflow-hidden bg-[oklch(0.14_0.02_265)] py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.48 0.22 263 / 0.22), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.13 85 / 0.1), transparent 70%)" }}
      />

      <div className="relative">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[oklch(0.78_0.13_85)]">
              Prova Real
            </p>
            <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl">
              Resultados reais.{" "}
              <span className="text-gradient-gold">Naturalidade que aparece em cada detalhe.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Conheça alguns dos resultados alcançados por pacientes da Full Plástica
              e veja como cada procedimento é planejado para respeitar a individualidade
              de cada pessoa.
            </p>
          </div>
        </div>

        {/* Marquee carousel */}
        <div
          className="vp-marquee group/marquee relative mt-16 w-full overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="vp-track flex w-max gap-6 px-6 md:gap-8">
            {loop.map((v, i) => (
              <div
                key={`${v.id}-${i}`}
                className="h-[460px] w-[260px] flex-shrink-0 md:h-[560px] md:w-[315px]"
              >
                <VideoTile video={v} onOpen={setActive} />
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="mx-auto mt-16 max-w-2xl text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
            <p className="font-serif text-xl text-white md:text-2xl">
              Seu caso também pode ser avaliado por nossa equipe especializada.
            </p>
            <a
              href="#lead-form"
              className="btn-gold mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em]"
            >
              Quero entender meu caso
            </a>
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-[420px] border-white/10 bg-black/95 p-0 backdrop-blur-2xl [&>button]:hidden">
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
          {active && (
            <div className="overflow-hidden rounded-lg">
              <video
                key={active.id}
                src={active.videoUrl}
                poster={active.thumbnail}
                controls
                autoPlay
                playsInline
                className="aspect-[9/16] w-full bg-black"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default VideoProof;
