import Button from "@/components/ui/Button"
import { usePageMeta } from "@/lib/seo"

export default function NotFound() {
  usePageMeta({
    title: "Page Not Found — Ricoz",
    description:
      "The page you are looking for does not exist. Explore Ricoz products, services, solutions and resources.",
    canonical: "/404",
    robots: "noindex, follow",
  })
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-md py-20">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-6">
            404
          </p>
          <h1 className="text-4xl font-display text-foreground mb-4">
            Page not found
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            The page you are looking for does not exist or has been moved. Try
            returning to the homepage or exploring our products and services.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button as="link" to="/" variant="primary">
              Return to home
            </Button>
            <Button as="link" to="/products" variant="secondary">
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
