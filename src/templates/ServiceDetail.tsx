import { Link, useParams } from "react-router"
import { getServiceBySlug, services } from "@/data/services"
import { products } from "@/data/products"
import { resources, caseStudies } from "@/data/resources"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Button from "@/components/ui/Button"
import Icon, { getCategoryIcon } from "@/components/ui/Icon"
import ProductCard from "@/components/cards/ProductCard"
import ServiceCard from "@/components/cards/ServiceCard"
import { ResourceCard, CaseStudyCard } from "@/components/cards/ResourceCard"
import {
  CatalogCta,
  CatalogVisual,
  DetailFaq,
  NumberedFeature,
} from "@/components/catalog/CatalogUI"
import NotFound from "@/pages/NotFound"
import {
  usePageMeta,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo"
import { serviceCategorySlugMap } from "@/lib/utils"

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  usePageMeta(
    service
      ? {
          title: service.seo.title,
          description: service.seo.description,
          canonical: `/services/${service.slug}/`,
        }
      : {
          title: "Service not found | Ricoz",
          description: "",
          canonical: "/services/",
        },
  )

  if (!service) return <NotFound />

  const categorySlug = serviceCategorySlugMap[service.category] ?? ""
  const relatedProducts = service.relatedProducts
    .map((item) => products.find((candidate) => candidate.slug === item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
  const relatedServices = service.relatedServices
    .map((item) => services.find((candidate) => candidate.slug === item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .filter((item) => item.slug !== service.slug)
  const relatedResources = resources
    .filter((resource) => resource.relatedServices?.includes(service.slug))
    .slice(0, 3)
  const relatedCaseStudies = caseStudies
    .filter((study) => study.servicesUsed.includes(service.slug))
    .slice(0, 2)

  const schemas = [
    serviceSchema({
      name: service.name,
      shortDescription: service.shortDescription,
      slug: service.slug,
    }),
    faqSchema(service.faqs),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: service.category, href: `/services/category/${categorySlug}` },
      { label: service.name, href: `/services/${service.slug}` },
    ]),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <section className="border-b border-border bg-rose py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              {
                label: service.category,
                href: `/services/category/${categorySlug}`,
              },
              { label: service.name },
            ]}
            className="mb-10"
          />
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Link
                to={`/services/category/${categorySlug}`}
                className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:underline"
              >
                <Icon name={getCategoryIcon(service.category)} size={16} />
                {service.category}
              </Link>
              <h1 className="font-display text-5xl leading-none text-foreground sm:text-6xl lg:text-7xl">
                {service.name}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground">
                {service.heroStatement}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {service.shortDescription}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  as="link"
                  to={`/contact?service=${service.slug}`}
                  variant="primary"
                  size="lg"
                >
                  Discuss This Service
                </Button>
                <Button
                  as="link"
                  to={`/consultation?service=${service.slug}`}
                  variant="secondary"
                  size="lg"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <CatalogVisual
                kind="service"
                category={service.category}
                label={service.name}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Service Overview
            </p>
            <h2 className="mb-7 font-display text-4xl leading-tight text-foreground">
              What this service covers.
            </h2>
            <p className="text-lg leading-relaxed text-foreground">
              {service.overview}
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Needs addressed
            </p>
            <div className="rounded-lg bg-secondary p-6">
              {service.problemsAddressed.map((problem, index) => (
                <div
                  key={problem}
                  className="flex gap-4 border-b border-border py-4 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <span className="text-xs font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-charcoal py-16 text-background lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Scope and Capabilities
            </p>
            <h2 className="font-display text-4xl leading-tight">
              The documented scope of {service.name}.
            </h2>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
            {service.capabilities.map((capability, index) => (
              <NumberedFeature
                key={capability.name}
                number={String(index + 1).padStart(2, "0")}
                title={capability.name}
                icon={getCategoryIcon(service.category)}
                inverse
              >
                <p>{capability.description}</p>
              </NumberedFeature>
            ))}
          </div>
        </div>
      </section>

      {service.process.length > 0 && (
        <section className="border-b border-border bg-cream py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  Service Process
                </p>
                <h2 className="font-display text-4xl leading-tight text-foreground">
                  How the engagement is structured.
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">
                The sequence below comes directly from this service record. It
                describes the known approach without adding timelines or
                commitments.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <span className="font-display text-4xl text-primary">
                    {step.step}
                  </span>
                  <h3 className="mb-3 mt-8 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.outcomes.length > 0 && (
        <section className="border-b border-border bg-background py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Intended Outcomes
              </p>
              <h2 className="font-display text-4xl leading-tight text-foreground">
                What the service is designed to support.
              </h2>
            </div>
            <div className="grid gap-x-10 md:grid-cols-2 lg:col-span-8">
              {service.outcomes.map((outcome, index) => (
                <NumberedFeature
                  key={outcome.title}
                  number={String(index + 1).padStart(2, "0")}
                  title={outcome.title}
                  icon="compass"
                >
                  <p>{outcome.description}</p>
                </NumberedFeature>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faqs.length > 0 && (
        <section className="border-b border-border bg-secondary py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Service FAQ
              </p>
              <h2 className="font-display text-4xl leading-tight text-foreground">
                Questions about {service.name}.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <DetailFaq items={service.faqs} />
            </div>
          </div>
        </section>
      )}

      {(relatedProducts.length > 0 || relatedServices.length > 0) && (
        <section className="border-b border-border bg-soft-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Connected Ecosystem
              </p>
              <h2 className="font-display text-4xl text-foreground">
                Related products and services
              </h2>
            </div>
            {relatedProducts.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            )}
            {relatedServices.length > 0 && (
              <div className="mt-10 grid gap-x-10 md:grid-cols-2">
                {relatedServices.map((item) => (
                  <ServiceCard key={item.id} service={item} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {(relatedResources.length > 0 || relatedCaseStudies.length > 0) && (
        <section className="border-b border-border bg-cream py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Further Reading
              </p>
              <h2 className="font-display text-4xl text-foreground">
                Resources connected to this service
              </h2>
            </div>
            {relatedResources.length > 0 && (
              <div className="grid gap-5 md:grid-cols-3">
                {relatedResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            )}
            {relatedCaseStudies.length > 0 && (
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {relatedCaseStudies.map((study) => (
                  <CaseStudyCard key={study.id} caseStudy={study} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <CatalogCta
        title={`Discuss ${service.name} with Ricoz.`}
        copy="Share your context and objectives. The next step is a conversation about fit and scope, without assuming timelines, pricing, or a predefined delivery model."
        primaryLabel="Discuss This Service"
        primaryTo={`/contact?service=${service.slug}`}
        secondaryLabel="Schedule a Consultation"
        secondaryTo={`/consultation?service=${service.slug}`}
      />
    </>
  )
}
