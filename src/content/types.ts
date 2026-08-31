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
