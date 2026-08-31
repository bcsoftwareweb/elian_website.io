import type { BusinessInfo, NavLink } from './types.ts'

/**
 * Static business content. A future CMS can replace this module
 * without changing presentation components.
 */
export const business: BusinessInfo = {
  name: 'Elian',
  legalName: 'Elian Home Goods',
  tagline: 'Thoughtful furnishings for everyday living.',
  summary:
    'Elian is a curated collection of furniture, lighting, tableware, and textiles. Visit our catalog, then call to inquire or purchase.',
  phone: '+15550102400',
  phoneDisplay: '(555) 010-2400',
  email: 'hello@elian.example',
  addressLines: ['1840 Market Street', 'Suite 210', 'Portland, OR 97205'],
  hours: [
    'Monday–Friday: 9:00 AM – 6:00 PM',
    'Saturday: 10:00 AM – 4:00 PM',
    'Sunday: Closed',
  ],
  socialLinks: [
    { id: 'instagram', name: 'Instagram', href: 'https://instagram.com' },
    { id: 'facebook', name: 'Facebook', href: 'https://facebook.com' },
    { id: 'pinterest', name: 'Pinterest', href: 'https://pinterest.com' },
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
