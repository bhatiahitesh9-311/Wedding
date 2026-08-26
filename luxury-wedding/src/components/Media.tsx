import type { MediaAsset } from '../config'

type Props = { media?: MediaAsset; fallbackClassName?: string; alt: string }

export function Media({ media, fallbackClassName = '', alt }: Props) {
  if (!media) return <div className={fallbackClassName} role="img" aria-label={alt} />
  if (media.type === 'video') return <video src={media.src} poster={media.poster} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" aria-label={alt} />
  return <img src={media.src} alt={media.alt || alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
}
