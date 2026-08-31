import type { BusinessInfo, NavLink } from './types.ts'

/**
 * Static business content. A future CMS can replace this module
 * without changing presentation components.
 */
export const business: BusinessInfo = {
  name: 'ELIAN',
  legalName: 'Elian NYC Street Wear',
  tagline: 'NYC street wear. Black, red, and built for the block.',
  summary:
    'Elian is an NYC street wear catalog: heavyweight hoodies, tees, outerwear, and caps. Browse the drop, then call to cop. There is no online checkout.',
  phone: '+15550102400',
  phoneDisplay: '(555) 010-2400',
  email: 'shop@elian.example',
  addressLines: ['88 Orchard Street', 'Lower East Side', 'New York, NY 10002'],
  hours: [
    'Tuesday–Saturday: 12:00 PM – 8:00 PM',
    'Sunday: 12:00 PM – 6:00 PM',
    'Monday: Closed',
  ],
  socialLinks: [
    { id: 'instagram', name: 'Instagram', href: 'https://instagram.com' },
    { id: 'tiktok', name: 'TikTok', href: 'https://tiktok.com' },
    { id: 'youtube', name: 'YouTube', href: 'https://youtube.com' },
  ],
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const phoneHref = `tel:${business.phone}`
