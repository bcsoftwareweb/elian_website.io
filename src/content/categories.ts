import type { Category } from './types.ts'

/**
 * Category records are kept separate from presentation so a CMS
 * can add or edit collections later.
 */
export const categories: Category[] = [
  {
    slug: 'furniture',
    name: 'Furniture',
    description: 'Seating, tables, and storage selected for daily use.',
    image: {
      src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      alt: 'A green velvet sofa in a bright interior',
    },
  },
  {
    slug: 'lighting',
    name: 'Lighting',
    description: 'Lamps and pendants that shape the room after dark.',
    image: {
      src: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
      alt: 'A sculptural table lamp on a wood surface',
    },
  },
  {
    slug: 'tableware',
    name: 'Tableware',
    description: 'Stoneware, glass, and serving pieces for the table.',
    image: {
      src: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80',
      alt: 'Handmade ceramic bowls stacked on a linen cloth',
    },
  },
  {
    slug: 'textiles',
    name: 'Textiles',
    description: 'Linens, throws, and rugs with a quiet, lasting quality.',
    image: {
      src: 'https://images.unsplash.com/photo-1615874959474-d39191b8ba8d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Folded linen textiles on a bed',
    },
  },
]

export function getCategories(): Category[] {
  return categories
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}
