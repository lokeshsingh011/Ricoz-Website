import { useMemo, useState } from "react"
import { Link } from "react-router"
import type { Product } from "@/data/products"
import { products, productCategoryData } from "@/data/products"
import { productCategorySlugMap } from "@/lib/utils"
import ProductCard from "@/components/cards/ProductCard"
import Icon from "@/components/ui/Icon"
import {
  CatalogCta,
  CatalogVisual,
  CategoryLinkCard,
  FilterChips,
  SearchField,
} from "@/components/catalog/CatalogUI"
import { usePageMeta } from "@/lib/seo"

function scoreProduct(product: Product, query: string): number {
  const value = query.toLowerCase().trim()
  if (!value) return 1
  let score = 0
  if (product.name.toLowerCase() === value) score += 10
  else if (product.name.toLowerCase().startsWith(value)) score += 6
  else if (product.name.toLowerCase().includes(value)) score += 4
  if (product.category.toLowerCase().includes(value)) score += 3
  if (product.tagline.toLowerCase().includes(value)) score += 2
  if (product.shortDescription.toLowerCase().includes(value)) score += 1.5
  if (product.overview.toLowerCase().includes(value)) score += 1
  if (product.capabilities.some((item) => item.toLowerCase().includes(value)))
    score += 1
  return score
}

export default function Products() {
  usePageMeta({
    title: "Products — Ricoz Enterprise Technology Platform",
    description:
      "Explore the Ricoz product ecosystem. Browse enterprise-grade capabilities across sales, marketing, operations, data, security, and more.",
    canonical: "/products/",
  })

  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategories, setActiveCategories] = useState<string[]>([])

  const toggleCategory = (name: string) => {
    setActiveCategories((current) =>
      current.includes(name)
        ? current.filter((category) => category !== name)
        : [...current, name],
    )
  }

  const filteredProducts = useMemo(() => {
    const ranked = searchQuery.trim()
      ? products
          .map((product) => ({
            product,
            score: scoreProduct(product, searchQuery),
          }))
          .filter(({ score }) => score > 0)
          .sort((a, b) => b.score - a.score)
          .map(({ product }) => product)
      : products

    return activeCategories.length
      ? ranked.filter((product) => activeCategories.includes(product.category))
      : ranked
  }, [activeCategories, searchQuery])

  const categories = useMemo(
    () =>
      productCategoryData.map((category) => ({
        ...category,
        count: products.filter((product) => product.category === category.name)
          .length,
      })),
    [],
  )
  const featured = products.filter((product) => product.featured).slice(0, 3)
  const hasFilters = searchQuery.trim() || activeCategories.length > 0

  return (
    <>
      <section className="overflow-hidden border-b border-border bg-charcoal py-16 text-background lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
              Ricoz Products
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
              Technology organised around the work that matters.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-background/65 sm:text-lg">
              Search individual capabilities or explore the catalogue by
              category. Each product connects to related services, solutions,
              and practical resources.
            </p>
            <div className="mt-9 max-w-2xl">
              <SearchField
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search products, capabilities, or business needs"
                label="Search Ricoz products"
                inverse
              />
            </div>
            <div className="mt-7 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-3xl">{products.length}</p>
                <p className="text-xs text-background/50">Products</p>
              </div>
              <div>
                <p className="font-display text-3xl">
                  {productCategoryData.length}
                </p>
                <p className="text-xs text-background/50">Capability areas</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <CatalogVisual
              kind="product"
              category="Connected catalogue"
              label="Explore by capability, category, or need"
              inverse
            />
          </div>
        </div>
      </section>

      {!hasFilters && featured.length > 0 && (
        <section className="border-b border-border bg-cream py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  Featured Products
                </p>
                <h2 className="font-display text-4xl text-foreground">
                  Leading capabilities in the ecosystem
                </h2>
              </div>
              <Link
                to="#catalogue"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
              >
                Browse the full catalogue
                <Icon name="arrow" size={15} />
              </Link>
            </div>
            <div className="grid gap-5 lg:grid-cols-12">
              {featured.map((product, index) => (
                <div
                  key={product.id}
                  className={index === 0 ? "lg:col-span-6" : "lg:col-span-3"}
                >
                  <ProductCard product={product} variant="featured" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!hasFilters && (
        <section className="border-b border-border bg-soft-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Browse by Category
              </p>
              <h2 className="font-display text-4xl leading-tight text-foreground">
                Find a focused capability area.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Categories keep related products together while preserving links
                to relevant services and wider solutions.
              </p>
            </div>
            <div className="grid gap-x-8 md:grid-cols-2 lg:col-span-8">
              {categories.map((category) => (
                <CategoryLinkCard
                  key={category.id}
                  name={category.name}
                  description={category.shortDescription}
                  count={category.count}
                  href={`/products/category/${
                    productCategorySlugMap[category.name] ?? category.slug
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        id="catalogue"
        className="scroll-mt-24 bg-background py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  Product Catalogue
                </p>
                <h2 className="font-display text-3xl text-foreground">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                </h2>
              </div>
              {hasFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategories([])
                  }}
                  className="self-start text-sm font-medium text-primary hover:underline sm:self-auto"
                >
                  Reset search and filters
                </button>
              )}
            </div>
            <FilterChips
              items={categories}
              active={activeCategories}
              onToggle={toggleCategory}
              onClear={() => setActiveCategories([])}
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-secondary px-6 py-20 text-center">
              <Icon
                name="search"
                size={28}
                className="mx-auto mb-5 text-primary"
              />
              <h2 className="font-display text-3xl text-foreground">
                No products match this search
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                Clear the current search or filters to return to the complete
                Ricoz product catalogue.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategories([])
                }}
                className="mt-6 text-sm font-semibold text-primary hover:underline"
              >
                Clear everything
              </button>
            </div>
          )}
        </div>
      </section>

      <CatalogCta
        title="Need help identifying the right capability?"
        copy="Share the need you are exploring and Ricoz can help you navigate relevant products, connected services, and broader solutions."
        primaryLabel="Schedule a Consultation"
        primaryTo="/consultation"
        secondaryLabel="Explore Solutions"
        secondaryTo="/solutions"
      />
    </>
  )
}
