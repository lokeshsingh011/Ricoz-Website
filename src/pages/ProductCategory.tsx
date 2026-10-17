import { useMemo, useState } from "react"
import { Link, useParams } from "react-router"
import { products, productCategoryData } from "@/data/products"
import ProductCard from "@/components/cards/ProductCard"
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
import { productSlugCategoryMap, productCategorySlugMap } from "@/lib/utils"

export default function ProductCategory() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const [searchQuery, setSearchQuery] = useState("")
  const categoryName = categorySlug
    ? productSlugCategoryMap[categorySlug]
    : undefined
  const categoryData = productCategoryData.find(
    (category) => category.name === categoryName,
  )
  const categoryProducts = products.filter(
    (product) => product.category === categoryName,
  )
  const filteredProducts = useMemo(() => {
    const value = searchQuery.toLowerCase().trim()
    if (!value) return categoryProducts
    return categoryProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(value) ||
        product.tagline.toLowerCase().includes(value) ||
        product.shortDescription.toLowerCase().includes(value) ||
        product.capabilities.some((item) => item.toLowerCase().includes(value)),
    )
  }, [categoryProducts, searchQuery])

  usePageMeta(
    categoryName
      ? {
          title:
            categoryData?.seoTitle ??
            `${categoryName} Products — Ricoz Product Ecosystem`,
          description:
            categoryData?.seoDescription ??
            `Explore Ricoz ${categoryName.toLowerCase()} products.`,
          canonical: `/products/category/${categorySlug}/`,
        }
      : {
          title: "Category not found | Ricoz",
          description: "",
          canonical: "/products/",
        },
  )

  if (!categoryName) return <NotFound />

  const featured =
    categoryProducts.find((product) => product.featured) ?? categoryProducts[0]
  const remaining = filteredProducts.filter(
    (product) => product.slug !== featured?.slug,
  )
  const relatedCategories = productCategoryData
    .filter((category) => category.name !== categoryName)
    .slice(0, 6)

  const schemaBreadcrumb = breadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: categoryName, href: `/products/category/${categorySlug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      <section className="border-b border-border bg-cream py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: categoryName },
            ]}
            className="mb-10"
          />
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                Product Category · {categoryProducts.length} products
              </p>
              <h1 className="font-display text-5xl leading-none text-foreground sm:text-6xl">
                {categoryName}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {categoryData?.description ??
                  `Explore the Ricoz products currently organised within ${categoryName}.`}
              </p>
              <div className="mt-8 max-w-xl">
                <SearchField
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder={`Search ${categoryName.toLowerCase()} products`}
                  label={`Search ${categoryName} products`}
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <CatalogVisual
                kind="product"
                category={categoryName}
                label={categoryData?.shortDescription ?? categoryName}
              />
            </div>
          </div>
        </div>
      </section>

      {featured && !searchQuery && (
        <section className="border-b border-border bg-soft-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
            <div className="lg:col-span-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Featured in {categoryName}
              </p>
              <h2 className="font-display text-4xl leading-tight text-foreground">
                A focused place to begin.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Review this product in detail, or continue through every
                capability currently available in the category.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ProductCard product={featured} variant="featured" />
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Category Catalogue
              </p>
              <h2 className="font-display text-3xl text-foreground">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
            >
              View the complete catalogue
              <Icon name="arrow" size={15} />
            </Link>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {(searchQuery ? filteredProducts : remaining).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-secondary py-16 text-center">
              <p className="font-display text-2xl text-foreground">
                No products match this search
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
              Continue Exploring
            </p>
            <h2 className="font-display text-4xl leading-tight text-foreground">
              Related capability areas
            </h2>
          </div>
          <div className="grid gap-x-8 md:grid-cols-2 lg:col-span-8">
            {relatedCategories.map((category) => {
              const count = products.filter(
                (product) => product.category === category.name,
              ).length
              return (
                <CategoryLinkCard
                  key={category.id}
                  name={category.name}
                  description={category.shortDescription}
                  count={count}
                  href={`/products/category/${
                    productCategorySlugMap[category.name] ?? category.slug
                  }`}
                />
              )
            })}
          </div>
        </div>
      </section>

      <CatalogCta
        title={`Discuss your ${categoryName.toLowerCase()} requirements.`}
        copy="Share the capability you are considering and the context around it. Ricoz can help you navigate the available product and service relationships."
        primaryLabel="Schedule a Consultation"
        primaryTo="/consultation"
        secondaryLabel="Browse All Products"
        secondaryTo="/products"
      />
    </>
  )
}
