import { useParams, Link } from "react-router"
import {
  getResourceBySlug,
  getRelatedResources,
  resourceTypeMeta,
} from "@/data/resources"
import { products } from "@/data/products"
import { services } from "@/data/services"
import { solutions } from "@/data/solutions"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import ProductCard from "@/components/cards/ProductCard"
import ServiceCard from "@/components/cards/ServiceCard"
import { ResourceCard } from "@/components/cards/ResourceCard"
import NotFound from "@/pages/NotFound"
import { usePageMeta, articleSchema, breadcrumbSchema } from "@/lib/seo"

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ResourceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const resource = slug ? getResourceBySlug(slug) : undefined

  usePageMeta(
    resource
      ? {
          title: resource.seo.title,
          description: resource.seo.description,
          canonical: `/resources/${resource.slug}/`,
        }
      : {
          title: "Resource not found | Ricoz",
          description: "",
          canonical: "/resources/",
        },
  )

  if (!resource) return <NotFound />

  const typeMeta = resourceTypeMeta[resource.type]

  const schemaBreadcrumb = breadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: typeMeta.plural, href: `/resources/type/${resource.type}` },
    { label: resource.title, href: `/resources/${resource.slug}` },
  ])

  const schemaData = articleSchema({
    title: resource.title,
    excerpt: resource.excerpt,
    slug: resource.slug,
    publishedDate: resource.publishedDate,
  })

  const relatedProducts = (resource.relatedProducts ?? [])
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products

  const relatedServices = (resource.relatedServices ?? [])
    .map((s) => services.find((sv) => sv.slug === s))
    .filter(Boolean) as typeof services

  const relatedSolutions = (resource.relatedSolutions ?? [])
    .map((s) => solutions.find((sv) => sv.slug === s))
    .filter(Boolean) as typeof solutions

  const continueExploring = getRelatedResources(resource, 3)

  // Primary context for consultation/contact CTA — prefer service, then solution, then product
  const consultationHref = resource.relatedServices?.[0]
    ? `/consultation?service=${resource.relatedServices[0]}`
    : resource.relatedSolutions?.[0]
      ? `/consultation?solution=${resource.relatedSolutions[0]}`
      : resource.relatedProducts?.[0]
        ? `/consultation?product=${resource.relatedProducts[0]}`
        : "/consultation"

  const contactHref = resource.relatedServices?.[0]
    ? `/contact?service=${resource.relatedServices[0]}`
    : resource.relatedProducts?.[0]
      ? `/contact?product=${resource.relatedProducts[0]}`
      : resource.relatedSolutions?.[0]
        ? `/contact?solution=${resource.relatedSolutions[0]}`
        : "/contact"

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      {/* ── Hero ── */}
      <section className="border-b border-border py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              {
                label: typeMeta.plural,
                href: `/resources/type/${resource.type}`,
              },
              { label: resource.title },
            ]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="outline">{typeMeta.label}</Badge>
              <span className="text-xs text-muted-foreground">
                {resource.readingTime} read
              </span>
              <span className="text-border">·</span>
              <span className="text-xs text-muted-foreground">
                {resource.publishedDate}
              </span>
              {resource.updatedAt && (
                <>
                  <span className="text-border">·</span>
                  <span className="text-xs text-muted-foreground">
                    Updated {resource.updatedAt}
                  </span>
                </>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-[1.1] mb-5">
              {resource.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              {resource.excerpt}
            </p>
            {resource.author && (
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  {resource.author.name}
                </span>
                {" · "}
                {resource.author.role}
              </p>
            )}
            {resource.topics.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-5">
                {resource.topics.map((topic) => (
                  <Link
                    key={topic}
                    to={`/resources?topic=${encodeURIComponent(topic)}`}
                    className="text-[10px] font-medium px-2.5 py-1 bg-secondary border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <article className="lg:col-span-2">
              <div className="space-y-6 text-base text-foreground leading-[1.75] max-w-[68ch]">
                <p>{resource.excerpt}</p>
                <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-0">
                  Why this matters for enterprise organisations
                </h2>
                <p className="text-muted-foreground">
                  Large organisations face a unique set of challenges that
                  smaller, faster-moving businesses do not encounter in the same
                  way. Scale creates complexity, and complexity creates inertia.
                  The organisations that navigate this successfully are those
                  that invest in the right capabilities at the right time — with
                  clarity about what they are trying to achieve and the
                  discipline to execute against it.
                </p>
                <p className="text-muted-foreground">
                  This resource explores the key dimensions of the topic and
                  offers a structured perspective on how enterprise
                  organisations can build the understanding and capability
                  needed to make meaningful progress.
                </p>
                <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-0">
                  Key considerations
                </h2>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {[
                    "Strategic alignment between leadership and operational teams",
                    "Capability and infrastructure readiness for change at scale",
                    "Governance and oversight mechanisms appropriate to complexity",
                    "Sustained commitment beyond initial programme phases",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2.5 size-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-0">
                  What to do next
                </h2>
                <p className="text-muted-foreground">
                  If this resource has raised questions relevant to your
                  organisation, the most productive next step is a structured
                  conversation with our team. We can help you translate the
                  themes explored here into specific actions, products or
                  services appropriate to your context.
                </p>
              </div>

              {/* Inline CTA */}
              <div className="border-t border-border mt-12 pt-8">
                <p className="text-sm font-medium text-foreground mb-1">
                  Discuss how this applies to your organisation
                </p>
                <p className="text-sm text-muted-foreground mb-5">
                  A Ricoz consultant can help you translate this thinking into a
                  specific plan.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button as="link" to={consultationHref} variant="primary">
                    Schedule a Consultation
                  </Button>
                  <Button as="link" to={contactHref} variant="secondary">
                    Contact Us
                  </Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-5">
              <div className="bg-secondary border border-border p-6 rounded-[var(--radius-md)]">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  About this resource
                </h3>
                <dl className="flex flex-col gap-3">
                  <div>
                    <dt className="text-xs text-muted-foreground">Type</dt>
                    <dd className="text-sm font-medium text-foreground mt-0.5">
                      {typeMeta.label}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Category</dt>
                    <dd className="text-sm font-medium text-foreground mt-0.5">
                      {resource.category}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Published</dt>
                    <dd className="text-sm font-medium text-foreground mt-0.5">
                      {resource.publishedDate}
                    </dd>
                  </div>
                  {resource.updatedAt && (
                    <div>
                      <dt className="text-xs text-muted-foreground">Updated</dt>
                      <dd className="text-sm font-medium text-foreground mt-0.5">
                        {resource.updatedAt}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs text-muted-foreground">
                      Reading time
                    </dt>
                    <dd className="text-sm font-medium text-foreground mt-0.5">
                      {resource.readingTime}
                    </dd>
                  </div>
                  {resource.author && (
                    <div>
                      <dt className="text-xs text-muted-foreground">Author</dt>
                      <dd className="text-sm font-medium text-foreground mt-0.5">
                        {resource.author.name}
                        <span className="block text-xs font-normal text-muted-foreground">
                          {resource.author.role}
                        </span>
                      </dd>
                    </div>
                  )}
                </dl>
                {resource.topics.length > 0 && (
                  <div className="mt-5 pt-5 border-t border-border">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2.5">
                      Topics
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {resource.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] px-2 py-0.5 bg-muted rounded-sm text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="border border-border rounded-[var(--radius-md)] p-6">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Have a related challenge?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Our team can help you translate this thinking into specific
                  actions for your organisation.
                </p>
                <Button
                  as="link"
                  to={consultationHref}
                  variant="primary"
                  fullWidth
                >
                  Schedule a Consultation
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Solutions ── */}
      {relatedSolutions.length > 0 && (
        <section className="py-12 md:py-16 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  Related Solutions
                </p>
                <h2 className="text-2xl text-foreground">
                  Put this thinking into practice
                </h2>
              </div>
              <Link
                to="/solutions"
                className="hidden sm:flex items-center gap-1.5 text-sm text-primary hover:text-[#A50F28] transition-colors shrink-0"
              >
                All solutions <ArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedSolutions.map((s) => (
                <Link
                  key={s.slug}
                  to={`/solutions/${s.slug}`}
                  className="group flex items-center justify-between gap-4 p-5 bg-background border border-border rounded-[var(--radius-md)] hover:border-foreground/20 hover:bg-secondary transition-colors"
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                      {s.category}
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {s.name}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {s.tagline}
                    </p>
                  </div>
                  <ArrowRight className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Products ── */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 border-b border-border bg-secondary">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="text-2xl text-foreground">
                Products related to this resource
              </h2>
              <Link
                to="/products"
                className="text-sm text-primary hover:text-[#A50F28] transition-colors shrink-0"
              >
                All products →
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

      {/* ── Related Services ── */}
      {relatedServices.length > 0 && (
        <section className="py-12 md:py-16 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="text-2xl text-foreground">
                Services related to this resource
              </h2>
              <Link
                to="/services"
                className="text-sm text-primary hover:text-[#A50F28] transition-colors shrink-0"
              >
                All services →
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

      {/* ── Continue exploring ── */}
      {continueExploring.length > 0 && (
        <section className="py-12 md:py-16 border-b border-border bg-secondary">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  Continue exploring
                </p>
                <h2 className="text-2xl text-foreground">Related resources</h2>
              </div>
              <Link
                to="/resources"
                className="text-sm text-primary hover:text-[#A50F28] transition-colors shrink-0"
              >
                All resources →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {continueExploring.map((r) => (
                <ResourceCard key={r.id} resource={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl text-foreground mb-4">
              Ready to move from reading to doing?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Book a consultation to explore how Ricoz can help with the
              specific challenges your organisation is facing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                as="link"
                to={consultationHref}
                variant="primary"
                size="lg"
              >
                Schedule a Consultation
              </Button>
              <Button as="link" to={contactHref} variant="secondary" size="lg">
                Discuss with us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
