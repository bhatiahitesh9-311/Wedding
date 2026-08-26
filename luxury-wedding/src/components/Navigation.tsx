import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cx } from '../lib/utils'

const links = [
  { id: 'story', label: 'Story' },
  { id: 'events', label: 'Events' },
  { id: 'family', label: 'Family' },
  { id: 'venue', label: 'Venue' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={cx('fixed inset-x-0 top-0 z-50 transition-all duration-500', scrolled ? 'px-3 pt-3 md:px-6' : 'px-0 pt-0')}>
      <nav aria-label="Primary navigation" className={cx('mx-auto flex max-w-6xl items-center justify-between border-white/15 px-5 py-4 transition-all duration-500 md:px-7', scrolled ? 'glass rounded-2xl border shadow-soft' : 'bg-transparent')}>
        <button className="font-display text-lg tracking-wide text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          C<span className="text-[#E8D8C3]">&</span>H
        </button>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="text-sm font-medium text-white/85 transition hover:text-white">{link.label}</button>
          ))}
        </div>
        <button className="rounded-full border border-white/25 p-2 text-white md:hidden" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close navigation' : 'Open navigation'}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <AnimatePresence>
          {open && (
            <motion.div id="mobile-nav" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute left-3 right-3 top-[72px] rounded-2xl border border-white/20 bg-[#4a342c]/90 p-3 shadow-2xl backdrop-blur-2xl md:hidden">
              {links.map(link => (
                <button key={link.id} onClick={() => scrollTo(link.id)} className="block w-full rounded-xl px-4 py-3 text-left text-sm text-white/90 hover:bg-white/10">{link.label}</button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
