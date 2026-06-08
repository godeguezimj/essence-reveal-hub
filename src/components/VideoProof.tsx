import { useState } from "react";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type VideoItem = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
};

const SAMPLE_POSTER =
  "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=80";
const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const videos: VideoItem[] = [
  {
    id: "blefaro",
    title: "Blefaroplastia",
    description: "Resultado natural",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    videoUrl: SAMPLE_VIDEO,
  },
  {
    id: "rino",
    title: "Rinoplastia",
    description: "Harmonia facial",
    thumbnail:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1000&q=80",
    videoUrl: SAMPLE_VIDEO,
  },
  {
    id: "protese",
    title: "Prótese de Silicone",
    description: "Recuperação acompanhada",
    thumbnail:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1000&q=80",
    videoUrl: SAMPLE_VIDEO,
  },
  {
    id: "lipohd",
    title: "Lipo HD",
    description: "Contorno corporal",
    thumbnail:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
    videoUrl: SAMPLE_VIDEO,
  },
  {
    id: "facial",
    title: "Harmonização Facial",
    description: "Traços valorizados",
    thumbnail:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=80",
    videoUrl: SAMPLE_VIDEO,
  },
];

function VideoCard({
  video,
  onOpen,
  featured = false,
}: {
  video: VideoItem;
  onOpen: (v: VideoItem) => void;
  featured?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(video)}
      className={`group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 text-left shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1 hover:border-[oklch(0.78_0.13_85_/_0.55)] hover:shadow-[0_30px_80px_-30px_oklch(0.55_0.18_265_/_0.55)] ${
        featured ? "aspect-[16/9]" : "aspect-[4/5]"
      }`}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, oklch(0.55 0.2 265 / 0.28), transparent 70%)",
        }}
      />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="relative flex items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-[oklch(0.78_0.13_85_/_0.25)] blur-xl transition-all duration-500 group-hover:bg-[oklch(0.78_0.13_85_/_0.45)]" />
          <span className={`relative flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[oklch(0.85_0.13_85)] ${
            featured ? "h-20 w-20" : "h-14 w-14"
          }`}>
            <Play className={`fill-white text-white ${featured ? "h-7 w-7" : "h-5 w-5"}`} strokeWidth={1.5} />
          </span>
        </span>
      </div>

      {/* Caption */}
      <div className={`absolute inset-x-0 bottom-0 p-5 ${featured ? "md:p-7" : ""}`}>
        <p className={`font-serif text-white ${featured ? "text-2xl md:text-3xl" : "text-lg"} tracking-wide`}>
          {video.title}
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">
          {video.description}
        </p>
      </div>
    </button>
  );
}

export function VideoProof() {
  const [active, setActive] = useState<VideoItem | null>(null);
  const [featured, ...rest] = videos;

  return (
    <section
      id="video-proof"
      className="relative overflow-hidden bg-[oklch(0.14_0.02_265)] py-24 md:py-32"
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.48 0.22 263 / 0.25), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.13 85 / 0.12), transparent 70%)" }}
      />

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[oklch(0.78_0.13_85)]">
            Prova Real
          </p>
          <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl">
            Resultados reais.{" "}
            <span className="text-gradient-gold">
              Naturalidade que aparece em cada detalhe.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Conheça alguns dos resultados alcançados por pacientes da Full Plástica
            e veja como cada procedimento é planejado para respeitar a
            individualidade de cada pessoa.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="mt-16 hidden md:block">
          <div className="animate-fade-in" style={{ animationDelay: "120ms" }}>
            <VideoCard video={featured} onOpen={setActive} featured />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {rest.map((v, i) => (
              <div
                key={v.id}
                className="animate-fade-in"
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                <VideoCard video={v} onOpen={setActive} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="mt-12 md:hidden">
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {videos.map((v) => (
              <div key={v.id} className="w-[78%] flex-shrink-0 snap-center">
                <VideoCard video={v} onOpen={setActive} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center animate-fade-in" style={{ animationDelay: "500ms" }}>
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

      {/* Modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="max-w-4xl border-white/10 bg-black/95 p-0 backdrop-blur-2xl [&>button]:hidden"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
          {active && (
            <div className="overflow-hidden rounded-lg">
              <video
                key={active.id}
                src={active.videoUrl}
                poster={active.thumbnail || SAMPLE_POSTER}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full bg-black"
              />
              <div className="px-6 py-5">
                <p className="font-serif text-xl text-white">{active.title}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/60">
                  {active.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default VideoProof;
