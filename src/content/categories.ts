import type { Category } from './types.ts'

/**
 * Category records are kept separate from presentation so a CMS
 * can add or edit collections later.
 */
export const categories: Category[] = [
  {
    slug: 'hoodies',
    name: 'Hoodies',
    description: 'Heavyweight fleece cut for cold platforms and late nights.',
    image: {
      src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80',
      alt: 'A black hoodie hanging against a dark wall',
    },
  },
  {
    slug: 'tees',
    name: 'Tees',
    description: 'Boxy cuts, faded blacks, and graphics that do not peel off in a week.',
    image: {
      src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
      alt: 'A folded white t-shirt on a dark surface',
    },
  },
  {
    slug: 'outerwear',
    name: 'Outerwear',
    description: 'Bombers, coaches, and chore coats built to scuff.',
    image: {
      src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80',
      alt: 'A bomber jacket on a hanger',
    },
  },
  {
    slug: 'caps',
    name: 'Caps',
    description: 'Six-panels and camps that sit right with a hoodie.',
    image: {
      src: '/images/six-panel-black.jpg',
      alt: 'A black baseball cap',
    },
  },
]

export function getCategories(): Category[] {
  return categories
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}
