import { useEffect } from "react"
import type { FranchiseSlug } from "@/data/franchises/types"

// ─── Site config ──────────────────────────────────────────────────────────────

export const SITE_BASE = "https://ricoz.com"
export const SITE_NAME = "Ricoz"
export const SITE_DEFAULT_IMAGE = `${SITE_BASE}/og-default.png`
export const SITE_LOCALE = "en_IN"

// ─── PageMeta interface ───────────────────────────────────────────────────────

export interface PageMeta {
  title: string
  description: string
  canonical: string
  robots?: string // defaults to "index, follow"
  ogType?: string // defaults to "website"
  ogTitle?: string // defaults to title
  ogDescription?: string // defaults to description
  ogImage?: string // defaults to SITE_DEFAULT_IMAGE
  twitterCard?: string // defaults to "summary_large_image"
}

// ─── Core hook ────────────────────────────────────────────────────────────────

export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    document.title = meta.title

    // Basic meta
    setMeta("name", "description", meta.description)
    setMeta("name", "robots", meta.robots ?? "index, follow")

    // Canonical
    setLink("canonical", `${SITE_BASE}${meta.canonical}`)

    // Open Graph
    setMeta("property", "og:site_name", SITE_NAME)
    setMeta("property", "og:locale", SITE_LOCALE)
    setMeta("property", "og:type", meta.ogType ?? "website")
    setMeta("property", "og:title", meta.ogTitle ?? meta.title)
    setMeta(
      "property",
      "og:description",
      meta.ogDescription ?? meta.description,
    )
    setMeta("property", "og:url", `${SITE_BASE}${meta.canonical}`)
    setMeta("property", "og:image", meta.ogImage ?? SITE_DEFAULT_IMAGE)

    // Twitter / X
    setMeta("name", "twitter:card", meta.twitterCard ?? "summary_large_image")
    setMeta("name", "twitter:title", meta.ogTitle ?? meta.title)
    setMeta(
      "name",
      "twitter:description",
      meta.ogDescription ?? meta.description,
    )
    setMeta("name", "twitter:image", meta.ogImage ?? SITE_DEFAULT_IMAGE)
  }, [
    meta.title,
    meta.description,
    meta.canonical,
    meta.robots,
    meta.ogType,
    meta.ogTitle,
    meta.ogDescription,
    meta.ogImage,
    meta.twitterCard,
  ])
}

/** Marks a page as non-indexable (portal, admin, auth pages). */
export function useNoIndex() {
  useEffect(() => {
    setMeta("name", "robots", "noindex, nofollow")
    // Remove any canonical set by a parent to avoid mixed signals
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.removeAttribute("href")
  }, [])
}

// ─── DOM helpers ─────────────────────────────────────────────────────────────

function setMeta(attr: string, name: string, content: string) {
  let el = document.querySelector(
    `meta[${attr}="${name}"]`,
  ) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

// ─── JSON-LD injection ────────────────────────────────────────────────────────

export function injectJsonLd(id: string, data: unknown) {
  const existing = document.querySelector(`script[data-ld="${id}"]`)
  if (existing) {
    existing.textContent = JSON.stringify(data)
    return
  }
  const el = document.createElement("script")
  el.type = "application/ld+json"
  el.setAttribute("data-ld", id)
  el.textContent = JSON.stringify(data)
  document.head.appendChild(el)
}

export function removeJsonLd(id: string) {
  document.querySelector(`script[data-ld="${id}"]`)?.remove()
}

// ─── Organization schema ──────────────────────────────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ricoz",
    url: SITE_BASE,
    logo: `${SITE_BASE}/favicon.svg`,
    description:
      "A connected digital business ecosystem offering enterprise products, professional services and business solutions.",
    sameAs: [],
  }
}

// ─── WebSite schema ───────────────────────────────────────────────────────────

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ricoz",
    url: SITE_BASE,
  }
}

// ─── WebPage schema ───────────────────────────────────────────────────────────

export function webPageSchema(meta: {
  title: string
  description: string
  canonical: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta.title,
    description: meta.description,
    url: `${SITE_BASE}${meta.canonical}`,
    isPartOf: { "@type": "WebSite", url: SITE_BASE, name: "Ricoz" },
  }
}

// ─── Breadcrumb schema ────────────────────────────────────────────────────────

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_BASE}${item.href}`,
    })),
  }
}

// ─── Product schema ───────────────────────────────────────────────────────────

export function productSchema(p: {
  name: string
  shortDescription: string
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.shortDescription,
    url: `${SITE_BASE}/products/${p.slug}/`,
    brand: { "@type": "Brand", name: "Ricoz" },
  }
}

// ─── Service schema ───────────────────────────────────────────────────────────

export function serviceSchema(s: {
  name: string
  shortDescription: string
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.shortDescription,
    url: `${SITE_BASE}/services/${s.slug}/`,
    provider: { "@type": "Organization", name: "Ricoz" },
  }
}

// ─── Solution schema ──────────────────────────────────────────────────────────

export function solutionSchema(s: {
  name: string
  shortDescription: string
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.shortDescription,
    url: `${SITE_BASE}/solutions/${s.slug}/`,
    provider: { "@type": "Organization", name: "Ricoz" },
    serviceType: "Business Solution",
  }
}

// ─── Article schema ───────────────────────────────────────────────────────────

export function articleSchema(r: {
  title: string
  excerpt: string
  slug: string
  publishedDate: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: r.title,
    description: r.excerpt,
    url: `${SITE_BASE}/resources/${r.slug}/`,
    datePublished: r.publishedDate,
    publisher: { "@type": "Organization", name: "Ricoz" },
  }
}

// ─── FAQ schema ───────────────────────────────────────────────────────────────

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}

// ─── Franchise / local business schema ───────────────────────────────────────

export interface FranchiseLocation {
  city: string
  state?: string
  country: string
  postalCode?: string
  streetAddress?: string
  latitude?: number
  longitude?: number
  phone?: string
  email?: string
}

export function franchiseWebPageSchema(f: {
  name: string
  city: string
  description: string
  slug: FranchiseSlug
  location?: FranchiseLocation | null
}) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: f.name,
    description: f.description,
    url: `${SITE_BASE}/franchise/${f.slug}/`,
    isPartOf: { "@type": "WebSite", url: SITE_BASE, name: "Ricoz" },
    about: {
      "@type": "Organization",
      name: f.name,
      description: f.description,
      parentOrganization: {
        "@type": "Organization",
        name: "Ricoz",
        url: SITE_BASE,
      },
    },
  }

  if (f.location?.streetAddress && f.location?.city) {
    base["@type"] = "LocalBusiness"
    base["address"] = {
      "@type": "PostalAddress",
      streetAddress: f.location.streetAddress,
      addressLocality: f.location.city,
      addressRegion: f.location.state,
      postalCode: f.location.postalCode,
      addressCountry: f.location.country,
    }
    if (f.location.phone) base["telephone"] = f.location.phone
    if (f.location.email) base["email"] = f.location.email
  }

  return base
}

// ─── Sitemap helpers ──────────────────────────────────────────────────────────

export interface SitemapEntry {
  url: string
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority: number
}

export function buildSitemapEntries(
  productSlugs: string[],
  productCategorySlugs: string[],
  serviceSlugs: string[],
  serviceCategorySlugs: string[],
  solutionSlugs: string[],
  resourceSlugs: string[],
  caseStudySlugs: string[],
  activeFranchiseSlugs: string[],
): SitemapEntry[] {
  return [
    // Core pages
    { url: `${SITE_BASE}/`, changefreq: "weekly", priority: 1.0 },
    { url: `${SITE_BASE}/products/`, changefreq: "weekly", priority: 0.9 },
    { url: `${SITE_BASE}/services/`, changefreq: "weekly", priority: 0.9 },
    { url: `${SITE_BASE}/solutions/`, changefreq: "monthly", priority: 0.8 },
    { url: `${SITE_BASE}/resources/`, changefreq: "weekly", priority: 0.8 },
    {
      url: `${SITE_BASE}/resources/case-studies/`,
      changefreq: "weekly",
      priority: 0.8,
    },
    { url: `${SITE_BASE}/about/`, changefreq: "monthly", priority: 0.7 },
    { url: `${SITE_BASE}/leadership/`, changefreq: "monthly", priority: 0.6 },
    { url: `${SITE_BASE}/careers/`, changefreq: "weekly", priority: 0.6 },
    { url: `${SITE_BASE}/contact/`, changefreq: "monthly", priority: 0.7 },
    { url: `${SITE_BASE}/consultation/`, changefreq: "monthly", priority: 0.7 },
    // Franchise network
    { url: `${SITE_BASE}/franchise/`, changefreq: "weekly", priority: 0.8 },
    ...activeFranchiseSlugs.map((slug) => ({
      url: `${SITE_BASE}/franchise/${slug}/`,
      changefreq: "weekly" as const,
      priority: 0.85,
    })),
    // Product categories
    ...productCategorySlugs.map((slug) => ({
      url: `${SITE_BASE}/products/category/${slug}/`,
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
    // Service categories
    ...serviceCategorySlugs.map((slug) => ({
      url: `${SITE_BASE}/services/category/${slug}/`,
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
    // Products
    ...productSlugs.map((slug) => ({
      url: `${SITE_BASE}/products/${slug}/`,
      changefreq: "monthly" as const,
      priority: 0.8,
    })),
    // Services
    ...serviceSlugs.map((slug) => ({
      url: `${SITE_BASE}/services/${slug}/`,
      changefreq: "monthly" as const,
      priority: 0.8,
    })),
    // Solutions
    ...solutionSlugs.map((slug) => ({
      url: `${SITE_BASE}/solutions/${slug}/`,
      changefreq: "monthly" as const,
      priority: 0.75,
    })),
    // Resources
    ...resourceSlugs.map((slug) => ({
      url: `${SITE_BASE}/resources/${slug}/`,
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
    // Case studies
    ...caseStudySlugs.map((slug) => ({
      url: `${SITE_BASE}/resources/case-studies/${slug}/`,
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
