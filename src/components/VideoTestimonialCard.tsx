import { Play } from 'lucide-react'
import { useState } from 'react'

type VideoTestimonialCardProps = {
  description: string
  poster: string
  src: string
  title: string
}

export function VideoTestimonialCard({
  description,
  poster,
  src,
  title,
}: VideoTestimonialCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-gradient-to-b from-slate-800 to-slate-950 p-[1px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="relative h-full overflow-hidden rounded-[calc(2rem-1px)] border border-white/10 bg-slate-950">
        <video
          controls
          playsInline
          poster={poster}
          preload="metadata"
          className="h-full w-full object-cover bg-black"
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        >
          <source src={src} type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-x-5 top-5 z-20 flex items-center justify-start">
          <span className="rounded-full border border-amber-400/20 bg-slate-950/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-amber-100 backdrop-blur-md">
            Depoimento em video
          </span>
        </div>

        {!isLoaded && !hasError ? (
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.2),transparent_32%),linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.32)_52%,rgba(2,6,23,0.82)_100%)] transition-opacity duration-500">
            <div className="absolute inset-0 flex flex-col items-center justify-end px-8 pb-10 pt-28 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-slate-950/45 backdrop-blur-sm">
                <Play className="ml-1 h-8 w-8 fill-amber-400 text-amber-400" />
              </div>
              <h4 className="mb-3 font-montserrat text-xl font-bold text-white drop-shadow-[0_8px_18px_rgba(2,6,23,0.9)]">
                {title}
              </h4>
              <p className="max-w-[18rem] text-sm font-light leading-relaxed text-slate-200">
                {description}
              </p>
            </div>
          </div>
        ) : null}

        {hasError ? (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_28%),linear-gradient(180deg,rgba(8,15,32,0.98)_0%,rgba(2,6,23,1)_100%)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <Play className="ml-1 h-8 w-8 fill-amber-400 text-amber-400" />
              </div>
              <h4 className="mb-3 font-montserrat text-xl font-bold text-white">
                {title}
              </h4>
              <p className="max-w-[18rem] text-sm font-light leading-relaxed text-slate-400">
                Nao foi possivel carregar este video no momento.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
