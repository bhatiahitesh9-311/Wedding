import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { WeddingConfig } from '../config'

export function RSVP({ config }: { config: WeddingConfig }) {
  if (!config.rsvp?.enabled || !config.rsvp.url) return null
  return <section className="px-6 py-24 md:py-32">
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-[#5a3d33] px-7 py-14 text-center shadow-2xl md:px-12">
      <p className="text-[11px] font-semibold uppercase tracking-[.28em] text-[#e8d8c3]">One more thing</p>
      <h2 className="mt-3 font-display text-5xl text-white">Will you join us?</h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">Let us know you’re coming so we can save you a little seat, a little dessert, and a very big hug.</p>
      <a href={config.rsvp.url} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#5a3d33]">{config.rsvp.label} <ArrowUpRight size={16} /></a>
    </motion.div>
  </section>
}
