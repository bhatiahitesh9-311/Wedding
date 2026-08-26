import { ExternalLink, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import type { WeddingConfig } from '../config'
import { SectionTitle } from './SectionTitle'

export function Venue({ config }: { config: WeddingConfig }) {
  const embedUrl = config.venue?.mapEmbedUrl || `https://www.google.com/maps?q=${encodeURIComponent(config.venueAddress)}&output=embed`
  return <section id="venue" className="bg-[#e7d7c4] px-6 py-24 md:py-32">
    <SectionTitle eyebrow="The setting" title="Meet us at the venue" description="Save the address, open directions, and let the rest of the evening take care of itself." />
    <div className="mx-auto mt-16 grid max-w-5xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 shadow-soft lg:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative min-h-[360px] overflow-hidden lg:min-h-[480px]">
        {config.venue?.image ? <img src={config.venue.image.src} alt={config.venue.image.alt || config.venueName} className="absolute inset-0 h-full w-full object-cover" loading="lazy" /> : <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(255,255,255,.7),transparent_20%),linear-gradient(145deg,#b78c70,#604438)]" aria-label={config.venue?.fallbackPrompt || config.venueName} role="img" />}
        <div className="absolute left-6 top-6 rounded-full bg-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.22em] text-white backdrop-blur">{config.venueName}</div>
      </motion.div>
      <div className="p-7 md:p-10">
        <div className="flex items-start gap-3"><div className="mt-1 rounded-full bg-[#8D5B4C]/10 p-2 text-[#8D5B4C]"><MapPin size={18} /></div><div><h3 className="font-display text-3xl text-[#4b352c]">{config.venueName}</h3><p className="mt-2 text-sm leading-6 text-[#735f55]">{config.venueAddress}</p></div></div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#d9c7b1] bg-white"><iframe title={`Map showing ${config.venueName}`} src={embedUrl} className="h-60 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        <a href={config.googleMapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#5f4136] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.01]">Open directions <ExternalLink size={15} /></a>
      </div>
    </div>
  </section>
}
