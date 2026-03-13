import { Play } from 'lucide-react'
import { useState } from 'react'

type VideoTestimonialCardProps = {
  description: string
  src: string
  title: string
}

export function VideoTestimonialCard({
  description,
  src,
  title,
}: VideoTestimonialCardProps) {
  const [isPlayable, setIsPlayable] = useState(false)
  const [hasError, setHasError] = useState(false)

  const showPlaceholder = !isPlayable || hasError

  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-gradient-to-b from-slate-800 to-slate-950 p-[1px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="relative h-full overflow-hidden rounded-[calc(2rem-1px)] border border-white/10 bg-slate-950">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            showPlaceholder ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.2),transparent_30%),linear-gradient(180deg,rgba(8,15,32,0.98)_0%,rgba(2,6,23,1)_100%)]"></div>
          <div className="absolute left-1/2 top-[18%] h-36 w-36 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl"></div>
          <div className="absolute bottom-16 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="absolute inset-x-5 top-5 flex items-center justify-between">
            <span className="rounded-full border border-amber-400/20 bg-slate-950/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-amber-100 backdrop-blur-md">
              Depoimento em video
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-300 backdrop-blur-md">
              Em breve
            </span>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
              <Play className="ml-1 h-8 w-8 fill-amber-400 text-amber-400" />
            </div>
            <h4 className="mb-3 font-montserrat text-xl font-bold text-white">
              {title}
            </h4>
            <p className="max-w-[18rem] text-sm font-light leading-relaxed text-slate-400">
              {description}
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>

        <video
          controls={isPlayable && !hasError}
          playsInline
          preload="metadata"
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            isPlayable && !hasError ? 'opacity-100' : 'opacity-0'
          }`}
          onCanPlay={() => setIsPlayable(true)}
          onError={() => setHasError(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
