import { Link } from "react-router"
import type { Product } from "@/data/products"
import Icon, { getCategoryIcon } from "@/components/ui/Icon"

interface ProductCardProps {
  product: Product
  variant?: "default" | "featured"
}

export default function ProductCard({
  product,
  variant = "default",
}: ProductCardProps) {
  if (variant === "featured") {
    return (
      <Link
        to={`/products/${product.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-lg"
        aria-label={`${product.name} — ${product.tagline}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-cream p-7">
          <div className="absolute -right-10 -top-10 size-36 rounded-full border border-primary/20" />
          <div className="absolute -bottom-12 right-10 size-32 rotate-12 rounded-lg border border-foreground/10 bg-soft-white/60" />
          <span className="relative flex size-14 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
            <Icon name={getCategoryIcon(product.category)} size={25} />
          </span>
          <span className="absolute bottom-6 left-7 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {product.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <h3 className="mb-3 font-display text-3xl text-foreground transition-colors group-hover:text-primary">
            {product.name}
          </h3>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
            {product.shortDescription}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-foreground">
            Explore product
            <Icon
              name="arrow"
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:border-foreground/25 hover:bg-soft-white hover:shadow-sm"
      aria-label={`${product.name} — ${product.tagline}`}
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-md bg-rose text-primary">
          <Icon name={getCategoryIcon(product.category)} size={19} />
        </span>
        <Icon
          name="arrow"
          size={14}
          className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
        />
      </div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {product.category}
      </p>
      <h3 className="mb-2 font-display text-xl text-foreground transition-colors group-hover:text-primary">
        {product.name}
      </h3>
      <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {product.shortDescription}
      </p>
    </Link>
  )
}
