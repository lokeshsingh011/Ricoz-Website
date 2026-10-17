import { useEffect } from "react"
import { useNoIndex } from "@/lib/seo"
import { Link } from "react-router"
import { products } from "@/data/products"

const FEATURED = products.slice(0, 9)

export default function PortalProducts() {
  useNoIndex()
  useEffect(() => {
    document.title = "Products — Ricoz Customer Portal"
  }, [])

  return (
    <div className="max-w-4xl">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="font-display font-semibold text-2xl lg:text-3xl text-[#111110] mb-1">
            Products
          </h1>
          <p className="text-sm text-[#6B6B67]">
            Explore Ricoz products and enquire about ones relevant to your
            business.
          </p>
        </div>
        <Link
          to="/products"
          className="text-sm text-[#6B6B67] hover:text-[#111110] transition-colors shrink-0"
        >
          View all products →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURED.map((product) => (
          <div
            key={product.id}
            className="border border-[#E5E5E0] rounded-[4px] bg-white p-5 flex flex-col gap-3 hover:border-[#C41230]/40 transition-colors"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97] mb-1.5">
                {product.category}
              </p>
              <h2 className="text-sm font-medium text-[#111110] mb-1">
                {product.name}
              </h2>
              <p className="text-xs text-[#6B6B67] leading-relaxed line-clamp-2">
                {product.tagline}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-auto pt-2 border-t border-[#F0EDE8]">
              <Link
                to={`/products/${product.slug}`}
                className="text-xs text-[#6B6B67] hover:text-[#111110] transition-colors"
              >
                Learn more
              </Link>
              <Link
                to={`/contact?product=${product.slug}`}
                className="ml-auto text-xs font-medium text-[#C41230] hover:text-[#A50F28] transition-colors"
              >
                Enquire →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
