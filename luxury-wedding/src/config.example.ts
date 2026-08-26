// Copy this shape into src/config.ts for another couple.
export const exampleConfig = {
  brideName: 'Bride',
  groomName: 'Groom',
  weddingDate: 'DD-MM-YYYY',
  heroSubtitle: 'A line about the couple and their celebration.',
  venueName: 'Venue Name',
  venueAddress: 'Venue address',
  googleMapsUrl: 'https://maps.app.goo.gl/your-link',
  colors: {
    primary: '#8D5B4C',
    secondary: '#E8D8C3',
    accent: '#C79B63',
  },
  hero: {
    // media: { type: 'image', src: '/assets/hero.jpg', alt: '...' },
    fallbackPrompt: 'Ultra realistic Indian bride and groom during golden hour, premium editorial wedding photography, soft bokeh, luxury styling, 8K.',
  },
  music: {
    src: '/assets/wedding-song.mp3',
    title: 'Your chosen song',
  },
  gallery: [],
  family: [],
  timeline: [],
  venue: {
    // image: { type: 'image', src: '/assets/venue.jpg', alt: '...' },
    fallbackPrompt: 'Luxury floral mandap with warm fairy lights, elegant décor, cinematic wedding venue.',
  },
  rsvp: {
    enabled: false,
    label: 'RSVP',
    url: '',
    type: 'url',
  },
  seo: {
    title: 'Wedding Invitation',
    description: 'A cinematic wedding invitation.',
  },
}
