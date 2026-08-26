import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { WeddingConfig } from '../config'
import { formatWeddingDate } from '../lib/utils'
import { Media } from './Media'

export function Hero({ config }: { config: WeddingConfig }) {
  const [accepted, setAccepted] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    if (!config.music) return
    const seen = sessionStorage.getItem('music-welcome-seen')
    if (!seen && /Android/i.test(navigator.userAgent)) setShowWelcome(true)
  }, [config.music])

  const enter = () => {
    sessionStorage.setItem('music-welcome-seen', '1')
    setShowWelcome(false)
    setAccepted(true)
    localStorage.setItem('wedding-music', 'on')
  }

  return <section className="relative min-h-[100svh] overflow-hidden bg-[#4a342c] text-white">
    <div className="absolute inset-0">
      <Media media={config.hero.media} alt={`${config.brideName} and ${config.groomName}`} fallbackClassName="h-full w-full bg-[radial-gradient(circle_at_35%_25%,rgba(232,216,195,.28),transparent_32%),linear-gradient(145deg,#5f4339_0%,#33221e_65%,#1f1714_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0,rgba(21,12,8,.35)_85%)]" />
    </div>
    <motion.div animate={{ y: [0,-8,0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[11%] top-[24%] h-2 w-2 rounded-full bg-[#E8D8C3]/70 blur-[1px]" />
    <motion.div animate={{ y: [0,9,0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute right-[16%] top-[31%] h-1.5 w-1.5 rounded-full bg-[#C79B63]/70 blur-[1px]" />

    <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6 py-28 text-center">
      <div className="max-w-4xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .2 }} className="text-[11px] font-semibold uppercase tracking-[.35em] text-[#f1dec4] md:text-xs">Together with their families</motion.p>
        <motion.h1 initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: .25 }} className="mt-6 font-display text-6xl leading-[.94] tracking-tight md:text-8xl lg:text-9xl">
          {config.brideName} <span className="block text-[#edd8bd] md:inline">&amp;</span> {config.groomName}
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .75 }} className="mx-auto mt-7 max-w-xl">
          <p className="text-sm leading-7 text-white/80 md:text-base">{config.heroSubtitle}</p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[.25em] text-[#f1dec4]"><span>{formatWeddingDate(config.weddingDate)}</span><span className="h-px w-10 bg-[#C79B63]/70" /><span>{config.venueName}</span></div>
        </motion.div>
        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: .98 }} onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })} className="mt-10 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#55382f] shadow-soft">Explore the celebration</motion.button>
      </div>
    </div>
    <button onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })} className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/75" aria-label="Scroll to story"><ChevronDown className="animate-bounce" size={22} /></button>

    {showWelcome && !accepted && <div className="fixed inset-0 z-[70] grid place-items-center bg-[#241713]/75 p-6 backdrop-blur-md">
      <div className="max-w-sm rounded-3xl border border-white/15 bg-[#55382f]/95 p-7 text-center shadow-2xl">
        <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-[#e8d8c3]">A little note</p>
        <h2 className="mt-3 font-display text-3xl text-white">There’s music waiting.</h2>
        <p className="mt-3 text-sm leading-6 text-white/70">Tap enter when you’re ready. Music will stay silent until your first interaction.</p>
        <button onClick={enter} className="mt-6 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#55382f]">Enter the invitation</button>
      </div>
    </div>}
  </section>
}
