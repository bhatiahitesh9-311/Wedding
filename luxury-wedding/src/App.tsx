import { useEffect, type CSSProperties } from 'react'
import { Footer } from './components/Footer'
import { Family } from './components/Family'
import { Hero } from './components/Hero'
import { MusicPlayer } from './components/MusicPlayer'
import { Navigation } from './components/Navigation'
import { RSVP } from './components/RSVP'
import { Story } from './components/Story'
import { Timeline } from './components/Timeline'
import { Venue } from './components/Venue'
import { weddingConfig } from './config'
import { formatWeddingDate } from './lib/utils'

export function App() {
  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) root.classList.add('reduced-motion')

    document.title = weddingConfig.seo?.title || `${weddingConfig.brideName} & ${weddingConfig.groomName} — Wedding Invitation`
    const description = weddingConfig.seo?.description || `${weddingConfig.brideName} and ${weddingConfig.groomName}'s wedding invitation.`
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let meta = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attr, name)
        document.head.appendChild(meta)
      }
      meta.content = content
    }
    setMeta('description', description)
    setMeta('og:title', document.title, true)
    setMeta('og:description', description, true)
    setMeta('og:type', 'website', true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', document.title)
    setMeta('twitter:description', description)
    if (weddingConfig.seo?.ogImage) {
      setMeta('og:image', weddingConfig.seo.ogImage, true)
      setMeta('twitter:image', weddingConfig.seo.ogImage)
    }

    const existingSchema = document.getElementById('wedding-schema')
    existingSchema?.remove()
    const schema = document.createElement('script')
    schema.id = 'wedding-schema'
    schema.type = 'application/ld+json'
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: `${weddingConfig.brideName} & ${weddingConfig.groomName}'s Wedding`,
      startDate: new Date(weddingConfig.weddingDate.split('-').reverse().join('-')).toISOString(),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: weddingConfig.venueName,
        address: weddingConfig.venueAddress,
      },
      description: description,
      url: window.location.href,
    })
    document.head.appendChild(schema)
  }, [])

  return <div style={{ '--primary': weddingConfig.colors.primary, '--secondary': weddingConfig.colors.secondary, '--accent': weddingConfig.colors.accent } as CSSProperties}>
    <Navigation />
    <main>
      <Hero config={weddingConfig} />
      <Story config={weddingConfig} />
      <Timeline items={weddingConfig.timeline} />
      <Family members={weddingConfig.family} />
      <Venue config={weddingConfig} />
      <RSVP config={weddingConfig} />
      <section className="bg-[#f7f1e8] px-6 pb-14 pt-2 text-center"><p className="text-[11px] uppercase tracking-[.22em] text-[#9b755e]">{formatWeddingDate(weddingConfig.weddingDate)} · {weddingConfig.venueName}</p></section>
    </main>
    <Footer config={weddingConfig} />
    <MusicPlayer music={weddingConfig.music} />
  </div>
}
