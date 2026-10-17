import { useEffect } from "react"
import type { Franchise } from "@/data/franchises/types"
import {
  usePageMeta,
  injectJsonLd,
  removeJsonLd,
  breadcrumbSchema,
  franchiseWebPageSchema,
  SITE_DEFAULT_IMAGE,
} from "@/lib/seo"
import FranchiseHeader from "./FranchiseHeader"
import FranchiseHero from "./FranchiseHero"
import FranchiseSectionRenderer from "./FranchiseSectionRenderer"
import FranchiseFooter from "./FranchiseFooter"

interface Props {
  franchise: Franchise
}

export default function FranchisePage({ franchise }: Props) {
  const { seo, slug, city, name, shortDescription } = franchise

  usePageMeta({
    title: seo.title,
    description: seo.description,
    canonical: seo.canonical,
    ogTitle: seo.ogTitle,
    ogDescription: seo.ogDescription,
    ogImage: seo.ogImage ?? SITE_DEFAULT_IMAGE,
  })

  useEffect(() => {
    const breadcrumb = breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Franchise Network", href: "/franchise" },
      { label: city, href: `/franchise/${slug}` },
    ])
    const webpage = franchiseWebPageSchema({
      name,
      city,
      description: seo.ogDescription ?? shortDescription,
      slug,
    })
    injectJsonLd(`franchise-breadcrumb-${slug}`, breadcrumb)
    injectJsonLd(`franchise-webpage-${slug}`, webpage)
    return () => {
      removeJsonLd(`franchise-breadcrumb-${slug}`)
      removeJsonLd(`franchise-webpage-${slug}`)
    }
  }, [slug, city, name, shortDescription, seo.ogDescription])

  return (
    <div className="min-h-screen flex flex-col">
      <FranchiseHeader franchise={franchise} />
      <main className="flex-1">
        <FranchiseHero franchise={franchise} />
        <FranchiseSectionRenderer
          sections={franchise.sections}
          franchise={franchise}
        />
      </main>
      <FranchiseFooter franchise={franchise} />
    </div>
  )
}
