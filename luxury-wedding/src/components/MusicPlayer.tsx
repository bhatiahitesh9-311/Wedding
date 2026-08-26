import { Pause, Play, Volume2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { WeddingConfig } from '../config'

export function MusicPlayer({ music }: { music: WeddingConfig['music'] }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!music) return
    const stored = localStorage.getItem('wedding-music') === 'on'
    if (!stored) return
    const audio = audioRef.current
    if (!audio) return
    audio.muted = true
    audio.play().then(() => {
      window.setTimeout(() => {
        audio.muted = false
        setPlaying(true)
      }, 1500)
    }).catch(() => undefined)
  }, [music])

  if (!music) return null

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.volume = 0
      try {
        await audio.play()
        setPlaying(true)
        localStorage.setItem('wedding-music', 'on')
        const start = performance.now()
        const fade = (now: number) => {
          const progress = Math.min((now - start) / 1500, 1)
          audio.volume = progress
          if (progress < 1 && !audio.paused) requestAnimationFrame(fade)
        }
        requestAnimationFrame(fade)
      } catch { /* browser blocked playback */ }
    } else {
      audio.pause()
      setPlaying(false)
      localStorage.setItem('wedding-music', 'off')
    }
  }

  return (
    <>
      <audio ref={audioRef} src={music.src} loop preload="none" aria-hidden="true" />
      <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: .98 }} onClick={toggle} className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-white/30 bg-[#6c463b]/85 px-4 py-3 text-white shadow-2xl backdrop-blur-xl" aria-label={playing ? 'Pause music' : 'Play music'}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">{playing ? <Pause size={16} /> : <Play size={16} />}</span>
        <span className="hidden pr-1 text-left sm:block"><span className="block text-[11px] uppercase tracking-[.2em] text-white/60">Now playing</span><span className="text-xs font-medium">{music.title}</span></span>
        <Volume2 size={15} className="text-white/70" />
      </motion.button>
    </>
  )
}
