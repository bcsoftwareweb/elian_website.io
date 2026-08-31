import { getCategoryBySlug } from './categories.ts'
import type { Product } from './types.ts'

/**
 * Product records are the current static catalog source.
 * A CMS can replace this module without rewriting product components.
 */
export const products: Product[] = [
  {
    id: 'prod-001',
    slug: 'alder-lounge-chair',
    name: 'Alder Lounge Chair',
    description:
      'A low lounge chair with a solid oak frame and a removable linen cushion. Designed for reading corners and quiet rooms.',
    image: {
      src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80',
      alt: 'A wood-framed lounge chair with a light cushion',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1400&q=80',
        alt: 'Front view of the Alder lounge chair',
      },
      {
        src: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1400&q=80',
        alt: 'A wood chair in a sunlit room',
      },
    ],
    categorySlug: 'furniture',
    specifications: [
      { label: 'Materials', value: 'Oak frame, linen cushion' },
      { label: 'Dimensions', value: '31 in W × 32 in D × 30 in H' },
      { label: 'Finish', value: 'Natural oil' },
      { label: 'Lead time', value: '4–6 weeks' },
    ],
    price: '$1,280',
    featured: true,
  },
  {
    id: 'prod-002',
    slug: 'rowan-dining-table',
    name: 'Rowan Dining Table',
    description:
      'A solid ash dining table with eased edges and a quiet, durable finish. Seats six comfortably.',
    image: {
      src: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1200&q=80',
      alt: 'A wood dining table in a bright room',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1400&q=80',
        alt: 'Rowan dining table from above',
      },
    ],
    categorySlug: 'furniture',
    specifications: [
      { label: 'Materials', value: 'Solid ash' },
      { label: 'Dimensions', value: '78 in L × 38 in W × 29 in H' },
      { label: 'Seating', value: 'Six' },
      { label: 'Lead time', value: '6–8 weeks' },
    ],
    price: '$2,450',
    featured: false,
  },
  {
    id: 'prod-003',
    slug: 'kiln-storage-bench',
    name: 'Kiln Storage Bench',
    description:
      'A compact bench with a lift-up lid and interior storage. Useful at an entry or the foot of a bed.',
    image: {
      src: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=80',
      alt: 'A wood storage bench against a plaster wall',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1400&q=80',
        alt: 'Kiln storage bench detail',
      },
    ],
    categorySlug: 'furniture',
    specifications: [
      { label: 'Materials', value: 'Walnut veneer, oak interior' },
      { label: 'Dimensions', value: '48 in W × 16 in D × 18 in H' },
      { label: 'Storage', value: 'Hinged lid' },
      { label: 'Lead time', value: '3–5 weeks' },
    ],
    price: '$890',
    featured: false,
  },
  {
    id: 'prod-004',
    slug: 'ember-table-lamp',
    name: 'Ember Table Lamp',
    description:
      'A ceramic table lamp with a linen shade. The glaze is slightly varied from piece to piece.',
    image: {
      src: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
      alt: 'A sculptural ceramic table lamp',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=80',
        alt: 'Ember table lamp on a wood surface',
      },
    ],
    categorySlug: 'lighting',
    specifications: [
      { label: 'Materials', value: 'Ceramic base, linen shade' },
      { label: 'Height', value: '22 in' },
      { label: 'Bulb', value: 'E26, 60W equivalent' },
      { label: 'Lead time', value: '2–3 weeks' },
    ],
    price: '$240',
    featured: true,
  },
  {
    id: 'prod-005',
    slug: 'brass-dome-pendant',
    name: 'Brass Dome Pendant',
    description:
      'A small dome pendant in unlacquered brass. It warms in tone as it is used.',
    image: {
      src: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=1200&q=80',
      alt: 'A brass pendant light hanging over a table',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=1400&q=80',
        alt: 'Brass dome pendant in a dining room',
      },
    ],
    categorySlug: 'lighting',
    specifications: [
      { label: 'Materials', value: 'Unlacquered brass' },
      { label: 'Diameter', value: '12 in' },
      { label: 'Canopy', value: 'Included' },
      { label: 'Lead time', value: '3–4 weeks' },
    ],
    price: '$380',
    featured: false,
  },
  {
    id: 'prod-006',
    slug: 'willow-floor-lamp',
    name: 'Willow Floor Lamp',
    description:
      'A slender floor lamp with an adjustable linen shade. Intended for sofas and reading chairs.',
    image: {
      src: 'https://images.unsplash.com/photo-1513506001534-1090431450c2?auto=format&fit=crop&w=1200&q=80',
      alt: 'A tall floor lamp beside a sofa',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1513506001534-1090431450c2?auto=format&fit=crop&w=1400&q=80',
        alt: 'Willow floor lamp in a living room',
      },
    ],
    categorySlug: 'lighting',
    specifications: [
      { label: 'Materials', value: 'Powder-coated steel, linen' },
      { label: 'Height', value: '58 in' },
      { label: 'Shade', value: 'Adjustable' },
      { label: 'Lead time', value: '2–4 weeks' },
    ],
    price: '$420',
    featured: false,
  },
  {
    id: 'prod-007',
    slug: 'river-stoneware-set',
    name: 'River Stoneware Set',
    description:
      'A four-person dinner set in speckled stoneware. Each piece is glazed by hand and safe for daily use.',
    image: {
      src: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80',
      alt: 'Stacked handmade ceramic bowls',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1400&q=80',
        alt: 'River stoneware bowls on linen',
      },
    ],
    categorySlug: 'tableware',
    specifications: [
      { label: 'Includes', value: '4 plates, 4 bowls, 4 mugs' },
      { label: 'Materials', value: 'Stoneware' },
      { label: 'Care', value: 'Dishwasher and microwave safe' },
      { label: 'Lead time', value: 'In stock or 2 weeks' },
    ],
    price: '$195',
    featured: true,
  },
  {
    id: 'prod-008',
    slug: 'wide-serving-bowl',
    name: 'Wide Serving Bowl',
    description:
      'A low, wide bowl for salads, fruit, or bread. The interior glaze is a pale ash color.',
    image: {
      src: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=80',
      alt: 'A wide ceramic serving bowl',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1400&q=80',
        alt: 'Wide serving bowl on a table',
      },
    ],
    categorySlug: 'tableware',
    specifications: [
      { label: 'Materials', value: 'Stoneware' },
      { label: 'Diameter', value: '12 in' },
      { label: 'Care', value: 'Dishwasher safe' },
      { label: 'Lead time', value: 'In stock' },
    ],
    price: '$68',
    featured: false,
  },
  {
    id: 'prod-009',
    slug: 'clear-carafe',
    name: 'Clear Carafe',
    description:
      'A blown-glass carafe with a narrow neck and a matching tumbler that doubles as a lid.',
    image: {
      src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80',
      alt: 'A clear glass carafe on a table',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1400&q=80',
        alt: 'Clear carafe detail',
      },
    ],
    categorySlug: 'tableware',
    specifications: [
      { label: 'Materials', value: 'Blown glass' },
      { label: 'Capacity', value: '34 oz' },
      { label: 'Includes', value: 'Carafe and tumbler lid' },
      { label: 'Lead time', value: 'In stock' },
    ],
    price: '$54',
    featured: false,
  },
  {
    id: 'prod-010',
    slug: 'undyed-linen-duvet',
    name: 'Undyed Linen Duvet',
    description:
      'A European linen duvet cover that softens with washing. Offered in a natural undyed tone.',
    image: {
      src: 'https://images.unsplash.com/photo-1615874959474-d39191b8ba8d?auto=format&fit=crop&w=1200&q=80',
      alt: 'An unmade bed dressed in linen',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1615874959474-d39191b8ba8d?auto=format&fit=crop&w=1400&q=80',
        alt: 'Undyed linen bedding',
      },
    ],
    categorySlug: 'textiles',
    specifications: [
      { label: 'Materials', value: '100% European linen' },
      { label: 'Sizes', value: 'Queen and King' },
      { label: 'Care', value: 'Machine wash cold' },
      { label: 'Lead time', value: '1–2 weeks' },
    ],
    price: '$265',
    featured: false,
  },
  {
    id: 'prod-011',
    slug: 'heather-wool-throw',
    name: 'Heather Wool Throw',
    description:
      'A lightweight wool throw with a soft, heathered weave. Useful on a sofa or at the end of a bed.',
    image: {
      src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
      alt: 'A folded wool throw on a bed',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=80',
        alt: 'Heather wool throw folded on linen',
      },
    ],
    categorySlug: 'textiles',
    specifications: [
      { label: 'Materials', value: 'Lambswool' },
      { label: 'Dimensions', value: '50 in × 70 in' },
      { label: 'Care', value: 'Dry clean or gentle hand wash' },
      { label: 'Lead time', value: 'In stock' },
    ],
    price: '$145',
    featured: true,
  },
  {
    id: 'prod-012',
    slug: 'low-wool-rug',
    name: 'Low Wool Rug',
    description:
      'A low-pile wool rug in a warm oatmeal tone. Suitable for living rooms and quieter bedrooms.',
    image: {
      src: 'https://images.unsplash.com/photo-1600166898405-dafc71889168?auto=format&fit=crop&w=1200&q=80',
      alt: 'A wool rug on a wood floor',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600166898405-dafc71889168?auto=format&fit=crop&w=1400&q=80',
        alt: 'Low wool rug in a living room',
      },
    ],
    categorySlug: 'textiles',
    specifications: [
      { label: 'Materials', value: 'Wool' },
      { label: 'Sizes', value: '5×8 ft and 8×10 ft' },
      { label: 'Pile', value: 'Low' },
      { label: 'Lead time', value: '3–5 weeks' },
    ],
    price: 'From $780',
    featured: false,
  },
]

export function getProducts(): Product[] {
  return products
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug)
}

export function getProductCategoryName(product: Product): string {
  return getCategoryBySlug(product.categorySlug)?.name ?? product.categorySlug
}
