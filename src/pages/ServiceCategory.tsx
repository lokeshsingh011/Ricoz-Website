import { useMemo, useState } from "react"
import { Link, useParams } from "react-router"
import { services, serviceCategories } from "@/data/services"
import ServiceCard from "@/components/cards/ServiceCard"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Icon from "@/components/ui/Icon"
import {
  CatalogCta,
  CatalogVisual,
  CategoryLinkCard,
  SearchField,
} from "@/components/catalog/CatalogUI"
import NotFound from "@/pages/NotFound"
import { usePageMeta, breadcrumbSchema } from "@/lib/seo"
import { serviceSlugCategoryMap, serviceCategorySlugMap } from "@/lib/utils"

export default function ServiceCategory() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const [searchQuery, setSearchQuery] = useState("")
  const categoryName = categorySlug
    ? serviceSlugCategoryMap[categorySlug]
    : undefined
  const categoryServices = services.filter(
    (service) => service.category === categoryName,
  )
  const filteredServices = useMemo(() => {
    const value = searchQuery.toLowerCase().trim()
    if (!value) return categoryServices
    return categoryServices.filter(
      (service) =>
        service.name.toLowerCase().includes(value) ||
        service.tagline.toLowerCase().includes(value) ||
        service.shortDescription.toLowerCase().includes(value) ||
        service.capabilities.some(
          (item) =>
            item.name.toLowerCase().includes(value) ||
            item.description.toLowerCase().includes(value),
        ),
    )
  }, [categoryServices, searchQuery])

  usePageMeta(
    categoryName
      ? {
          title: `${categoryName} Services — Ricoz Professional Services`,
          description: `Explore Ricoz ${categoryName.toLowerCase()} services. Professional services designed for complex enterprise organizations.`,
          canonical: `/services/category/${categorySlug}/`,
        }
      : {
          title: "Category not found | Ricoz",
          description: "",
          canonical: "/services/",
        },
  )

  if (!categoryName) return <NotFound />

  const featured = categoryServices[0]
  const remaining = filteredServices.filter(
    (service) => service.slug !== featured?.slug,
  )
  const relatedCategories = serviceCategories
    .filter((name) => name !== categoryName)
    .slice(0, 6)
  const categorySummary = categoryServices
    .slice(0, 3)
    .map((service) => service.name)
    .join(", ")
  const schemaBreadcrumb = breadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: categoryName, href: `/services/category/${categorySlug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      <section className="border-b border-border bg-rose py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: categoryName },
            ]}
            className="mb-10"
          />
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                Service Practice · {categoryServices.length} services
              </p>
              <h1 className="font-display text-5xl leading-none text-foreground sm:text-6xl">
                {categoryName}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Explore the Ricoz services grouped within {categoryName},
                including {categorySummary}.
              </p>
              <div className="mt-8 max-w-xl">
                <SearchField
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder={`Search ${categoryName.toLowerCase()} services`}
                  label={`Search ${categoryName} services`}
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <CatalogVisual
                kind="service"
                category={categoryName}
                label={featured?.tagline ?? categoryName}
              />
            </div>
          </div>
        </div>
      </section>

      {featured && !searchQuery && (
        <section className="border-b border-border bg-charcoal py-16 text-background lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
            <div className="lg:col-span-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Featured Service
              </p>
              <h2 className="font-display text-4xl leading-tight">
                A focused place to begin.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-background/60">
                Review the scope and approach of a representative service, then
                continue through the complete practice area.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border border-background/15 lg:col-span-8">
              <ServiceCard service={featured} variant="featured" />
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Practice Catalogue
              </p>
              <h2 className="font-display text-3xl text-foreground">
                {filteredServices.length}{" "}
                {filteredServices.length === 1 ? "service" : "services"}
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
            >
              View all services
              <Icon name="arrow" size={15} />
            </Link>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid gap-x-10 md:grid-cols-2">
              {(searchQuery ? filteredServices : remaining).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-secondary py-16 text-center">
              <p className="font-display text-2xl text-foreground">
                No services match this search
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-4 text-sm font-semibold text-primary hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-border bg-secondary py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Other Practice Areas
            </p>
            <h2 className="font-display text-4xl leading-tight text-foreground">
              Continue through the service portfolio.
            </h2>
          </div>
          <div className="lg:col-span-8">
            {relatedCategories.map((name) => {
              const members = services.filter(
                (service) => service.category === name,
              )
              return (
                <CategoryLinkCard
                  key={name}
                  name={name}
                  description={members
                    .slice(0, 2)
                    .map((service) => service.name)
                    .join(" · ")}
                  count={members.length}
                  href={`/services/category/${serviceCategorySlugMap[name]}`}
                />
              )
            })}
          </div>
        </div>
      </section>

      <CatalogCta
        title={`Discuss your ${categoryName.toLowerCase()} needs.`}
        copy="Share the context, constraints, and objectives around the service you are considering. Ricoz can help identify an appropriate next conversation."
        primaryLabel="Schedule a Consultation"
        primaryTo="/consultation"
        secondaryLabel="Browse All Services"
        secondaryTo="/services"
      />
    </>
  )
}
