export type MediaAsset = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
}

export type TimelineItem = {
  id: string;
  date: string;
  title: string;
  description: string;
  time?: string;
  location?: string;
  image?: MediaAsset;
  fallbackPrompt?: string;
}

export type FamilyMember = {
  id: string;
  name: string;
  relation: string;
  image?: MediaAsset;
  fallbackPrompt?: string;
}

export type GalleryItem = {
  id: string;
  image: MediaAsset;
}

export type WeddingConfig = {
  brideName: string;
  groomName: string;
  weddingDate: string;
  heroSubtitle: string;
  venueName: string;
  venueAddress: string;
  googleMapsUrl: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  hero: {
  media: {
    type: 'image',
    src: '/assets/CH.jpg',
    alt: 'Charu and Hitesh',
  },
  fallbackPrompt: 'Ultra realistic Indian bride and groom during golden hour, premium editorial wedding photography, soft bokeh, luxury styling, 8K.',
},
  music?: {
    src: string;
    title: string;
    artist?: string;
  };
  gallery: GalleryItem[];
  family: FamilyMember[];
  timeline: TimelineItem[];
  venue?: {
    image?: MediaAsset;
    fallbackPrompt: string;
    mapEmbedUrl?: string;
  };
  rsvp?: {
    enabled: boolean;
    label: string;
    url: string;
    type: 'whatsapp' | 'google-form' | 'url';
  };
  seo?: {
    title: string;
    description: string;
    ogImage?: string;
  };
}

export const weddingConfig: WeddingConfig = {
  brideName: 'Charu',
  groomName: 'Hitesh',
  weddingDate: '21-11-2026',
  heroSubtitle: 'Together with their families, they invite you to celebrate their forever.',
  venueName: 'AgraVatika',
  venueAddress: 'Sarai Azamabad, Masani Road, Masani, Mathura-281003, Uttar Pradesh',
  googleMapsUrl: 'https://maps.app.goo.gl/Eeyw5AdNEAUpjCeU9',
  colors: {
    primary: '#8D5B4C',
    secondary: '#E8D8C3',
    accent: '#C79B63',
  },
  hero: {
    fallbackPrompt: 'Ultra realistic Indian bride and groom during golden hour, premium editorial wedding photography, soft bokeh, luxury styling, 8K.',
  },
  gallery: [],
  family: [],
  timeline: [],
  venue: {
    fallbackPrompt: 'Luxury floral mandap with warm fairy lights, elegant décor, cinematic wedding venue.',
  },
  rsvp: {
    enabled: false,
    label: 'RSVP',
    url: '',
    type: 'url',
  },
  seo: {
    title: 'Charu & Hitesh — Wedding Invitation',
    description: 'A cinematic invitation for Charu and Hitesh.',
  },
}
