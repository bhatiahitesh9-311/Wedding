import { motion } from 'framer-motion'
import type { WeddingConfig } from '../config'
import { SectionTitle } from './SectionTitle'

export function Timeline({ items }: { items: WeddingConfig['timeline'] }) {
  if (!items.length) return null
  return <section id="events" className="bg-[#efe2d1] px-6 py-24 md:py-32">
    <SectionTitle eyebrow="The celebrations" title="Days we’ll remember" description="From the first mehendi stain to the final dance, every gathering gets its own little moment." />
    <div className="mx-auto mt-16 max-w-5xl space-y-5">
      {items.map((item, index) => <motion.article key={item.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: index * .1 }} className="grid overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/55 shadow-soft md:grid-cols-[.8fr_1.2fr]">
        <div className="relative min-h-60 bg-[#dcc1a7]">
          {item.image ? <img src={item.image.src} alt={item.image.alt || item.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /> : <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.65),transparent_20%),linear-gradient(135deg,#d9b695,#a77b61)]" aria-label={item.fallbackPrompt || item.title} role="img" />}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          <p className="absolute bottom-5 left-5 rounded-full bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.2em] text-white backdrop-blur">{item.date}</p>
        </div>
        <div className="p-7 md:p-9">
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[.22em] text-[#9f7358]">
            {item.time && <span>{item.time}</span>}{item.time && item.location && <span>•</span>}{item.location && <span>{item.location}</span>}
          </div>
          <h3 className="mt-3 font-display text-3xl text-[#4d382f]">{item.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[#735f55]">{item.description}</p>
        </div>
      </motion.article>)}
    </div>
  </section>
}
