export type SocialLink = {
  id: string
  name: string
  href: string
}

export type BusinessInfo = {
  name: string
  legalName: string
  tagline: string
  summary: string
  phone: string
  phoneDisplay: string
  email: string
  addressLines: string[]
  hours: string[]
  socialLinks: SocialLink[]
}

export type NavLink = {
  label: string
  to: string
}

export type ContentImage = {
  src: string
  alt: string
}

export type ProductSpecification = {
  label: string
  value: string
}

export type Category = {
  slug: string
  name: string
  description: string
  image: ContentImage
}

export type Product = {
  id: string
  slug: string
  name: string
  description: string
  image: ContentImage
  images: ContentImage[]
  categorySlug: string
  specifications: ProductSpecification[]
  price: string | null
  featured: boolean
}
