// ─── Franchise System — Type Definitions ───────────────────────────────────

export type FranchiseSlug = "mumbai" | "nagpur" | "delhi" | "kalyan" | "kolkata"
export type FranchiseStatus = "active" | "coming-soon" | "planned"
export type HeroStyle = "asymmetric" | "split" | "editorial" | "centered" | "immersive"
export type SectionVariant = "editorial" | "cards" | "split" | "statement" | "grid" | "feature" | "timeline" | "quote" | "showcase"

export interface ImageReference {
  src: string | null
  alt: string
  aspectRatio?: string
}

export interface SocialLink {
  platform: "linkedin" | "twitter" | "instagram"
  url: string
}

export interface FranchiseDirectorData {
  name: string | null
  designation: string
  portrait: ImageReference
  shortBio: string | null
  statement: string | null
  socialLinks?: SocialLink[]
  email: string | null
  phone: string | null
}

export interface FranchiseCTAConfig {
  label: string
  href: string
}

export interface FranchiseContact {
  email: string | null
  phone: string | null
  address: string | null
  city: string
  region: string
}

export interface FranchiseHeroConfig {
  eyebrow: string
  headline: string
  statement: string
  primaryCta: FranchiseCTAConfig
  secondaryCta: FranchiseCTAConfig
  style: HeroStyle
  image?: ImageReference
}

export interface FranchiseTheme {
  primaryAccent: string
  background: string
  surface: string
  text: string
  mutedText: string
  border: string
  navigationStyle: "light" | "dark"
  cardStyle: "bordered" | "filled" | "minimal"
  typographyTreatment: "editorial" | "modern" | "classic"
  imageTreatment: "full" | "contained" | "offset"
  buttonTreatment: "solid" | "outline"
  footerStyle: "dark" | "light" | "brand"
}

export interface FranchiseNavConfig {
  primary: { label: string; href: string }[]
  cta: FranchiseCTAConfig
}

// ─── Section discriminated union ────────────────────────────────────────────

export type FranchiseSection = {
  type: "local-introduction"
  eyebrow: string
  headline: string
  body: string
} | {
  type: "challenges"
  headline: string
  subheadline: string
  items: { title: string; body: string }[]
} | {
  type: "capabilities"
  headline: string
  pillars: { title: string; description: string; cta: FranchiseCTAConfig }[]
} | {
  type: "products"
  headline: string
  statement: string
  productSlugs: string[]
  cta: FranchiseCTAConfig
} | {
  type: "services"
  headline: string
  statement: string
  serviceSlugs: string[]
  cta: FranchiseCTAConfig
} | {
  type: "solutions"
  headline: string
  statement: string
  solutionSlugs: string[]
  cta: FranchiseCTAConfig
} | {
  type: "industries"
  headline: string
  statement: string
  industries: { name: string; description?: string }[]
} | {
  type: "how-we-work"
  headline: string
  steps: { number: string; title: string; body: string }[]
} | {
  type: "director"
  headline: string
} | {
  type: "ecosystem"
  headline: string
  links: { label: string; href: string }[]
} | {
  type: "conversion"
  eyebrow: string
  headline: string
  statement: string
  primaryCta: FranchiseCTAConfig
  secondaryCta: FranchiseCTAConfig
} | {
  type: "franchise-network"
  headline: string
  statement?: string
  currentSlug: FranchiseSlug
}

export interface FranchiseSEO {
  title: string
  description: string
  canonical: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string | null
}

// ─── Root franchise model ────────────────────────────────────────────────────

export interface Franchise {
  slug: FranchiseSlug
  name: string
  city: string
  region: string
  status: FranchiseStatus
  shortDescription: string
  positioning: string
  director: FranchiseDirectorData
  contact: FranchiseContact
  navigation: FranchiseNavConfig
  theme: FranchiseTheme
  hero: FranchiseHeroConfig
  sections: FranchiseSection[]
  seo: FranchiseSEO
}
