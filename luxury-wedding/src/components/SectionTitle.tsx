import { motion } from 'framer-motion'

export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} className="mx-auto max-w-2xl text-center">
    <p className="text-[11px] font-semibold uppercase tracking-[.28em] text-[#A97957]">{eyebrow}</p>
    <h2 className="mt-3 font-display text-4xl tracking-tight text-[#3f2e28] md:text-5xl">{title}</h2>
    {description && <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#725e54] md:text-base">{description}</p>}
  </motion.div>
}
