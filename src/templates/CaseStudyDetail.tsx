import { useParams, Link } from "react-router"
import { getCaseStudyBySlug, caseStudies } from "@/data/resources"
import { products } from "@/data/products"
import { services } from "@/data/services"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import ProductCard from "@/components/cards/ProductCard"
import ServiceCard from "@/components/cards/ServiceCard"
import { CaseStudyCard } from "@/components/cards/ResourceCard"
import NotFound from "@/pages/NotFound"
import {
  usePageMeta,
  breadcrumbSchema,
  webPageSchema,
  SITE_BASE,
} from "@/lib/seo"

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>()
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined

  usePageMeta(
    caseStudy
      ? {
          title: caseStudy.seo.title,
          description: caseStudy.seo.description,
          canonical: `/resources/case-studies/${caseStudy.slug}/`,
        }
      : {
          title: "Case Study not found | Ricoz",
          description: "",
          canonical: "/resources/case-studies/",
        },
  )

  if (!caseStudy) return <NotFound />

  const schemaBreadcrumb = breadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Case Studies", href: "/resources/case-studies" },
    {
      label: caseStudy.client,
      href: `/resources/case-studies/${caseStudy.slug}`,
    },
  ])
  const schemaPage = webPageSchema({
    title: caseStudy.seo.title,
    description: caseStudy.seo.description,
    canonical: `/resources/case-studies/${caseStudy.slug}/`,
  })

  const relatedProducts = caseStudy.productsUsed
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products

  const relatedServices = caseStudy.servicesUsed
    .map((s) => services.find((sv) => sv.slug === s))
    .filter(Boolean) as typeof services

  const moreCaseStudies = caseStudies
    .filter((c) => c.slug !== caseStudy.slug)
    .slice(0, 2)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPage) }}
      />
      {/* Hero */}
      <section className="border-b border-border py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Case Studies", href: "/resources/case-studies" },
              { label: caseStudy.client },
            ]}
            className="mb-6"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Badge variant="primary">Case Study</Badge>
                <span className="text-xs text-muted-foreground">
                  {caseStudy.industry}
                </span>
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                {caseStudy.client}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-5">
                {caseStudy.title}
              </h1>
            </div>

            {/* Outcome highlights */}
            <div className="grid grid-cols-2 gap-4">
              {caseStudy.outcomes.map((outcome) => (
                <div
                  key={outcome.metric}
                  className="bg-secondary border border-border p-5 rounded-[var(--radius-md)]"
                >
                  <p className="text-2xl md:text-3xl font-display text-primary mb-1.5">
                    {outcome.metric}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
                The Challenge
              </p>
              <p className="text-base md:text-lg text-foreground leading-[1.75]">
                {caseStudy.challenge}
              </p>
            </div>
            <aside>
              <div className="bg-secondary border border-border p-6 rounded-[var(--radius-md)]">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  About this engagement
                </h3>
                <dl className="flex flex-col gap-4">
                  <div>
                    <dt className="text-xs text-muted-foreground">Client</dt>
                    <dd className="text-sm text-foreground font-medium mt-0.5">
                      {caseStudy.client}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Industry</dt>
                    <dd className="text-sm text-foreground font-medium mt-0.5">
                      {caseStudy.industry}
                    </dd>
                  </div>
                  {relatedProducts.length > 0 && (
                    <div>
                      <dt className="text-xs text-muted-foreground mb-2">
                        Products used
                      </dt>
                      <dd className="flex flex-col gap-1">
                        {relatedProducts.map((p) => (
                          <Link
                            key={p.id}
                            to={`/products/${p.slug}`}
                            className="text-sm text-primary hover:text-[#A50F28] transition-colors"
                          >
                            {p.name}
                          </Link>
                        ))}
                      </dd>
                    </div>
                  )}
                  {relatedServices.length > 0 && (
                    <div>
                      <dt className="text-xs text-muted-foreground mb-2">
                        Services involved
                      </dt>
                      <dd className="flex flex-col gap-1">
                        {relatedServices.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.slug}`}
                            className="text-sm text-primary hover:text-[#A50F28] transition-colors"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-20 border-b border-border bg-secondary">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
              The Approach
            </p>
            <p className="text-base md:text-lg text-foreground leading-[1.75]">
              {caseStudy.approach}
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Outcomes
          </p>
          <h2 className="text-3xl font-display text-foreground mb-12">
            What the organization achieved
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.outcomes.map((outcome) => (
              <div key={outcome.metric} className="border-t border-border pt-6">
                <p className="text-4xl font-display text-primary mb-3">
                  {outcome.metric}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20 border-b border-border bg-secondary">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4 mb-10">
              <h2 className="text-2xl font-display text-foreground">
                Products used in this engagement
              </h2>
              <Link
                to="/products"
                className="text-sm text-primary hover:text-[#A50F28] transition-colors"
              >
                View all products →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-20 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4 mb-10">
              <h2 className="text-2xl font-display text-foreground">
                Services involved
              </h2>
              <Link
                to="/services"
                className="text-sm text-primary hover:text-[#A50F28] transition-colors"
              >
                View all services →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedServices.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More case studies */}
      {moreCaseStudies.length > 0 && (
        <section className="py-16 md:py-20 border-b border-border bg-secondary">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4 mb-10">
              <h2 className="text-2xl font-display text-foreground">
                More case studies
              </h2>
              <Link
                to="/resources/case-studies"
                className="text-sm text-primary hover:text-[#A50F28] transition-colors"
              >
                All case studies →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {moreCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-display text-foreground mb-5">
              Explore a similar approach for your organization
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Schedule a consultation to discuss how Ricoz products and services
              can support your specific challenges and objectives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button as="link" to="/consultation" variant="primary">
                Schedule a Consultation
              </Button>
              <Button as="link" to="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
