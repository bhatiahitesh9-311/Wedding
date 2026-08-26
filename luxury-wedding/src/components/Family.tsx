import { motion } from 'framer-motion'
import type { WeddingConfig } from '../config'
import { SectionTitle } from './SectionTitle'

export function Family({ members }: { members: WeddingConfig['family'] }) {
  if (!members.length) return null
  return <section id="family" className="paper-texture bg-[#f7f1e8] px-6 py-24 md:py-32">
    <SectionTitle eyebrow="With love" title="The people beside us" description="Because every wedding is also a celebration of the families who made the couple who they are." />
    <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member, index) => <motion.article key={member.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="overflow-hidden rounded-3xl border border-[#decfbd] bg-white/65 shadow-soft">
        <div className="relative aspect-[4/5] bg-[#dcc7af]">
          {member.image ? <img src={member.image.src} alt={member.image.alt || member.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /> : <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,.75),transparent_23%),linear-gradient(140deg,#d8c1aa,#9e7864)]" aria-label={member.fallbackPrompt || member.name} role="img" />}
        </div>
        <div className="p-5"><h3 className="font-display text-2xl text-[#513a31]">{member.name}</h3><p className="mt-1 text-xs uppercase tracking-[.2em] text-[#9c765d]">{member.relation}</p></div>
      </motion.article>)}
    </div>
  </section>
}
