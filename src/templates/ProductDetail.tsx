import { Link, useParams } from "react-router"
import { getProductBySlug, products } from "@/data/products"
import { services } from "@/data/services"
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
  productSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo"
import { productCategorySlugMap } from "@/lib/utils"

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined

  usePageMeta(
    product
      ? {
          title: product.seo.title,
          description: product.seo.description,
          canonical: `/products/${product.slug}/`,
        }
      : {
          title: "Product not found | Ricoz",
          description: "",
          canonical: "/products/",
        },
  )

  if (!product) return <NotFound />

  const categorySlug = productCategorySlugMap[product.category] ?? ""
  const relatedProducts = product.relatedProducts
    .map((item) => products.find((candidate) => candidate.slug === item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .filter((item) => item.slug !== product.slug)
  const relatedServices = product.relatedServices
    .map((item) => services.find((candidate) => candidate.slug === item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
  const relatedResources = resources
    .filter(
      (resource) =>
        product.relatedResources?.includes(resource.slug) ||
        resource.relatedProducts?.includes(product.slug),
    )
    .slice(0, 3)
  const relatedCaseStudies = caseStudies
    .filter((study) => study.productsUsed.includes(product.slug))
    .slice(0, 2)

  const schemas = [
    productSchema({
      name: product.name,
      shortDescription: product.shortDescription,
      slug: product.slug,
    }),
    faqSchema(product.faqs),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: product.category, href: `/products/category/${categorySlug}` },
      { label: product.name, href: `/products/${product.slug}` },
    ]),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <section className="border-b border-border bg-soft-white py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              {
                label: product.category,
                href: `/products/category/${categorySlug}`,
              },
              { label: product.name },
            ]}
            className="mb-10"
          />
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Link
                to={`/products/category/${categorySlug}`}
                className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:underline"
              >
                <Icon name={getCategoryIcon(product.category)} size={16} />
                {product.category}
              </Link>
              <h1 className="font-display text-5xl leading-none text-foreground sm:text-6xl lg:text-7xl">
                {product.name}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground">
                {product.heroStatement}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {product.shortDescription}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  as="link"
                  to={`/consultation?product=${product.slug}`}
                  variant="primary"
                  size="lg"
                >
                  Schedule a Consultation
                </Button>
                <Button
                  as="link"
                  to={`/contact?product=${product.slug}`}
                  variant="secondary"
                  size="lg"
                >
                  Contact Ricoz
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <CatalogVisual
                kind="product"
                category={product.category}
                label={product.name}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Product Overview
            </p>
            <h2 className="font-display text-4xl leading-tight text-foreground">
              Where {product.name} fits.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-3xl text-lg leading-relaxed text-foreground">
              {product.overview}
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-secondary p-5">
                <p className="text-xs text-muted-foreground">Category</p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {product.category}
                </p>
              </div>
              <div className="rounded-lg bg-secondary p-5">
                <p className="text-xs text-muted-foreground">Capabilities</p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {product.capabilities.length} documented areas
                </p>
              </div>
              <div className="rounded-lg bg-secondary p-5">
                <p className="text-xs text-muted-foreground">Explore next</p>
                <Link
                  to={`/products/category/${categorySlug}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Category catalogue
                  <Icon name="arrow" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-charcoal py-16 text-background lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Capabilities
              </p>
              <h2 className="font-display text-4xl leading-tight">
                What {product.name} is designed to enable.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-background/60 lg:col-span-5 lg:col-start-8">
              These capabilities are taken directly from the product record and
              provide a concise view of its documented scope.
            </p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
            {product.capabilities.map((capability, index) => (
              <NumberedFeature
                key={capability}
                number={String(index + 1).padStart(2, "0")}
                title={capability}
                icon={getCategoryIcon(product.category)}
                inverse
              >
                <span>{product.tagline}</span>
              </NumberedFeature>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Benefits
            </p>
            <h2 className="font-display text-4xl leading-tight text-foreground">
              The value described in the product record.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {product.benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <span className="text-xs font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 mt-8 text-base font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Product Features
            </p>
            <h2 className="font-display text-4xl leading-tight text-foreground">
              A closer look at what is included.
            </h2>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2 lg:col-span-8">
            {product.features.map((feature, index) => (
              <NumberedFeature
                key={feature.name}
                number={String(index + 1).padStart(2, "0")}
                title={feature.name}
                icon="product"
              >
                <p>{feature.description}</p>
              </NumberedFeature>
            ))}
          </div>
        </div>
      </section>

      {product.useCases.length > 0 && (
        <section className="border-b border-border bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Use Cases
              </p>
              <h2 className="font-display text-4xl leading-tight text-foreground">
                Documented ways to apply {product.name}.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {product.useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="rounded-lg bg-card p-7 shadow-sm"
                >
                  <Icon
                    name="compass"
                    size={21}
                    className="mb-8 text-primary"
                  />
                  <h3 className="mb-3 text-base font-semibold text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {product.faqs.length > 0 && (
        <section className="border-b border-border bg-soft-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Product FAQ
              </p>
              <h2 className="font-display text-4xl leading-tight text-foreground">
                Questions about {product.name}.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <DetailFaq items={product.faqs} />
            </div>
          </div>
        </section>
      )}

      {(relatedProducts.length > 0 || relatedServices.length > 0) && (
        <section className="border-b border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Connected Ecosystem
              </p>
              <h2 className="font-display text-4xl text-foreground">
                Related offerings
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
                Resources connected to {product.name}
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
        title={`Explore ${product.name} in your context.`}
        copy={`Share the requirements, constraints, and existing environment around ${product.name}. The next step is a conversation, not an assumed implementation plan.`}
        primaryLabel="Schedule a Consultation"
        primaryTo={`/consultation?product=${product.slug}`}
        secondaryLabel="Contact Ricoz"
        secondaryTo={`/contact?product=${product.slug}`}
      />
    </>
  )
}
