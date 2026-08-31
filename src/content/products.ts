import { getCategoryBySlug } from './categories.ts'
import type { Product } from './types.ts'

/**
 * Product records are the current static catalog source.
 * A CMS can replace this module without rewriting product components.
 */
export const products: Product[] = [
  {
    id: 'prod-001',
    slug: 'ironbound-hoodie',
    name: 'Ironbound Hoodie',
    description:
      'A 14 oz black hoodie with a raw hem and a red interior drawcord. Cut oversized so it sits right over a tee or a work jacket.',
    image: {
      src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80',
      alt: 'A black hoodie against a dark background',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1400&q=80',
        alt: 'Ironbound hoodie front',
      },
      {
        src: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=80',
        alt: 'Streetwear hoodie worn in the city',
      },
    ],
    categorySlug: 'hoodies',
    specifications: [
      { label: 'Fabric', value: '14 oz cotton fleece' },
      { label: 'Colorway', value: 'Black / red cord' },
      { label: 'Fit', value: 'Oversized' },
      { label: 'Sizes', value: 'S–XXL' },
    ],
    price: '$128',
    featured: true,
  },
  {
    id: 'prod-002',
    slug: 'canal-zip-hoodie',
    name: 'Canal Zip Hoodie',
    description:
      'A full-zip with metal hardware that is meant to scuff. Heavy enough for a windy platform.',
    image: {
      src: 'https://images.unsplash.com/photo-1578768079052-aa76e52d8382?auto=format&fit=crop&w=1200&q=80',
      alt: 'A dark zip-up hoodie',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1578768079052-aa76e52d8382?auto=format&fit=crop&w=1400&q=80',
        alt: 'Canal zip hoodie',
      },
    ],
    categorySlug: 'hoodies',
    specifications: [
      { label: 'Fabric', value: 'Cotton-poly fleece' },
      { label: 'Colorway', value: 'Charcoal' },
      { label: 'Fit', value: 'Regular' },
      { label: 'Sizes', value: 'S–XL' },
    ],
    price: '$142',
    featured: false,
  },
  {
    id: 'prod-003',
    slug: 'redline-hoodie',
    name: 'Redline Hoodie',
    description:
      'Black body, red rib. Named after the train, not a logo dump. Rib cuffs that hold their shape.',
    image: {
      src: 'https://images.unsplash.com/photo-1548883354-94bcfe323ff1?auto=format&fit=crop&w=1200&q=80',
      alt: 'A person wearing a dark hoodie',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1548883354-94bcfe323ff1?auto=format&fit=crop&w=1400&q=80',
        alt: 'Redline hoodie on body',
      },
    ],
    categorySlug: 'hoodies',
    specifications: [
      { label: 'Fabric', value: '13 oz cotton fleece' },
      { label: 'Colorway', value: 'Black / red rib' },
      { label: 'Fit', value: 'Slightly cropped' },
      { label: 'Sizes', value: 'S–XL' },
    ],
    price: '$136',
    featured: false,
  },
  {
    id: 'prod-004',
    slug: 'bowery-box-tee',
    name: 'Bowery Box Tee',
    description:
      'A heavy box tee with a dropped shoulder. Fades to a dull black instead of going shiny.',
    image: {
      src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
      alt: 'A folded t-shirt',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80',
        alt: 'Bowery box tee folded',
      },
    ],
    categorySlug: 'tees',
    specifications: [
      { label: 'Fabric', value: '7 oz ring-spun cotton' },
      { label: 'Colorway', value: 'Faded black' },
      { label: 'Fit', value: 'Boxy' },
      { label: 'Sizes', value: 'S–XXL' },
    ],
    price: '$48',
    featured: true,
  },
  {
    id: 'prod-005',
    slug: 'block-graphic-tee',
    name: 'Block Graphic Tee',
    description:
      'A cracked block print on the chest. The ink is meant to wear, not peel as a sheet.',
    image: {
      src: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80',
      alt: 'A black graphic t-shirt',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1400&q=80',
        alt: 'Block graphic tee',
      },
    ],
    categorySlug: 'tees',
    specifications: [
      { label: 'Fabric', value: 'Cotton jersey' },
      { label: 'Print', value: 'Discharge / cracked black' },
      { label: 'Fit', value: 'Regular' },
      { label: 'Sizes', value: 'S–XL' },
    ],
    price: '$54',
    featured: false,
  },
  {
    id: 'prod-006',
    slug: 'city-limit-longsleeve',
    name: 'City Limit Longsleeve',
    description:
      'A dense longsleeve with rib at the cuff. Sits clean under a bomber without ballooning.',
    image: {
      src: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a99b?auto=format&fit=crop&w=1200&q=80',
      alt: 'A black long sleeve shirt',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a99b?auto=format&fit=crop&w=1400&q=80',
        alt: 'City Limit longsleeve',
      },
    ],
    categorySlug: 'tees',
    specifications: [
      { label: 'Fabric', value: 'Cotton jersey' },
      { label: 'Colorway', value: 'Black' },
      { label: 'Fit', value: 'Slim through the body' },
      { label: 'Sizes', value: 'S–XL' },
    ],
    price: '$62',
    featured: false,
  },
  {
    id: 'prod-007',
    slug: 'night-shift-bomber',
    name: 'Night Shift Bomber',
    description:
      'A black bomber with red lining. Hardware is uncoated so it dulls with use.',
    image: {
      src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80',
      alt: 'A bomber jacket on a hanger',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1400&q=80',
        alt: 'Night Shift bomber',
      },
    ],
    categorySlug: 'outerwear',
    specifications: [
      { label: 'Shell', value: 'Nylon / cotton blend' },
      { label: 'Lining', value: 'Red satin' },
      { label: 'Fit', value: 'Classic bomber' },
      { label: 'Sizes', value: 'S–XL' },
    ],
    price: '$240',
    featured: true,
  },
  {
    id: 'prod-008',
    slug: 'work-coach-jacket',
    name: 'Work Coach Jacket',
    description:
      'A snap-front coach with a matte finish. Pockets big enough for a phone, keys, and a folded beanie.',
    image: {
      src: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=80',
      alt: 'A dark coach jacket',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1400&q=80',
        alt: 'Work coach jacket',
      },
    ],
    categorySlug: 'outerwear',
    specifications: [
      { label: 'Shell', value: 'Water-resistant nylon' },
      { label: 'Colorway', value: 'Black' },
      { label: 'Closure', value: 'Snaps' },
      { label: 'Sizes', value: 'S–XXL' },
    ],
    price: '$165',
    featured: false,
  },
  {
    id: 'prod-009',
    slug: 'denim-chore-coat',
    name: 'Denim Chore Coat',
    description:
      'Rigid black denim that breaks in at the elbows. Patch pockets, no branding on the chest.',
    image: {
      src: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Black denim fabric',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1400&q=80',
        alt: 'Denim chore coat fabric',
      },
    ],
    categorySlug: 'outerwear',
    specifications: [
      { label: 'Fabric', value: '14 oz black denim' },
      { label: 'Wash', value: 'Unwashed' },
      { label: 'Fit', value: 'Workwear' },
      { label: 'Sizes', value: 'S–XL' },
    ],
    price: '$198',
    featured: false,
  },
  {
    id: 'prod-010',
    slug: 'six-panel-black',
    name: 'Six Panel Black',
    description:
      'A low-profile six-panel with a red undervisor. Structured front, unstructured back.',
    image: {
      src: 'https://images.unsplash.com/photo-1588850561407-42e62b481bba?auto=format&fit=crop&w=1200&q=80',
      alt: 'A black baseball cap',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1588850561407-42e62b481bba?auto=format&fit=crop&w=1400&q=80',
        alt: 'Six panel black cap',
      },
    ],
    categorySlug: 'caps',
    specifications: [
      { label: 'Fabric', value: 'Cotton twill' },
      { label: 'Colorway', value: 'Black / red visor' },
      { label: 'Closure', value: 'Adjustable strap' },
      { label: 'Fit', value: 'One size' },
    ],
    price: '$42',
    featured: true,
  },
  {
    id: 'prod-011',
    slug: 'red-brim-camp',
    name: 'Red Brim Camp',
    description:
      'An unstructured camp cap. Black crown, red brim. Sits further back than the six-panel.',
    image: {
      src: 'https://images.unsplash.com/photo-1575428652377-a25b653e0a1b?auto=format&fit=crop&w=1200&q=80',
      alt: 'A camp cap',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1575428652377-a25b653e0a1b?auto=format&fit=crop&w=1400&q=80',
        alt: 'Red brim camp cap',
      },
    ],
    categorySlug: 'caps',
    specifications: [
      { label: 'Fabric', value: 'Cotton canvas' },
      { label: 'Colorway', value: 'Black / red brim' },
      { label: 'Closure', value: 'Strapback' },
      { label: 'Fit', value: 'One size' },
    ],
    price: '$38',
    featured: false,
  },
  {
    id: 'prod-012',
    slug: 'cord-dad-hat',
    name: 'Cord Dad Hat',
    description:
      'Washed black corduroy with a low crown. Soft from day one, not a costume vintage wash.',
    image: {
      src: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=80',
      alt: 'A black dad hat',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1400&q=80',
        alt: 'Cord dad hat',
      },
    ],
    categorySlug: 'caps',
    specifications: [
      { label: 'Fabric', value: 'Cotton corduroy' },
      { label: 'Colorway', value: 'Washed black' },
      { label: 'Closure', value: 'Adjustable' },
      { label: 'Fit', value: 'One size' },
    ],
    price: '$36',
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
