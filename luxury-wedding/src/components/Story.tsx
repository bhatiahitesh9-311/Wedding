import { motion } from 'framer-motion'
import type { WeddingConfig } from '../config'
import { SectionTitle } from './SectionTitle'

export function Story({ config }: { config: WeddingConfig }) {
  return <section id="story" className="paper-texture bg-[#f7f1e8] px-6 py-24 md:py-32">
    <SectionTitle eyebrow="The beginning" title="A story worth celebrating" description={`${config.brideName} and ${config.groomName} are gathering their favourite people for a day that feels entirely theirs.`} />
    <div className="mx-auto mt-16 grid max-w-5xl items-center gap-10 md:grid-cols-[1.1fr_.9fr] md:gap-16">
      <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[2rem] bg-white/70 p-8 shadow-soft md:p-12">
        <p className="font-display text-3xl leading-tight text-[#533c33] md:text-4xl">Two people, one shared rhythm, and a lifetime of little moments still to come.</p>
        <div className="my-8 gold-rule" />
        <p className="text-sm leading-7 text-[#735f55]">This space is intentionally simple: a place to write the couple’s story, a favourite memory, or a note about the moment they knew this was home. Everything here can be changed from the configuration file.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#e8d8c3] shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.75),transparent_24%),linear-gradient(160deg,#dfc9ac,#f5eee3_52%,#c99e7a)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(141,91,76,.25),transparent_28%)]" />
        <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/50 bg-white/30 p-5 backdrop-blur-xl">
          <p className="font-display text-2xl text-[#49332a]">“Forever looks good on us.”</p>
        </div>
      </motion.div>
    </div>
  </section>
}
