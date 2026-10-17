import { useEffect } from "react"
import { useNoIndex } from "@/lib/seo"
import { Link } from "react-router"
import { services, serviceCategories } from "@/data/services"

export default function PortalServices() {
  useNoIndex()
  useEffect(() => {
    document.title = "Services — Ricoz Customer Portal"
  }, [])

  return (
    <div className="max-w-4xl">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="font-display font-semibold text-2xl lg:text-3xl text-[#111110] mb-1">
            Services
          </h1>
          <p className="text-sm text-[#6B6B67]">
            Ricoz services across strategy, technology, operations and growth.
          </p>
        </div>
        <Link
          to="/services"
          className="text-sm text-[#6B6B67] hover:text-[#111110] transition-colors shrink-0"
        >
          View all services →
        </Link>
      </div>

      <div className="flex flex-col gap-8">
        {serviceCategories.map((category) => {
          const categoryServices = services
            .filter((s) => s.category === category)
            .slice(0, 4)
          if (categoryServices.length === 0) return null
          return (
            <section key={category} aria-labelledby={`category-${category}`}>
              <h2
                id={`category-${category}`}
                className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97] mb-3"
              >
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categoryServices.map((service) => (
                  <div
                    key={service.id}
                    className="border border-[#E5E5E0] rounded-[4px] bg-white px-5 py-4 flex flex-col gap-2 hover:border-[#C41230]/40 transition-colors"
                  >
                    <h3 className="text-sm font-medium text-[#111110]">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#6B6B67] leading-relaxed line-clamp-2">
                      {service.tagline}
                    </p>
                    <div className="flex items-center gap-4 pt-1">
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-xs text-[#6B6B67] hover:text-[#111110] transition-colors"
                      >
                        Learn more
                      </Link>
                      <Link
                        to={`/contact?service=${service.slug}`}
                        className="ml-auto text-xs font-medium text-[#C41230] hover:text-[#A50F28] transition-colors"
                      >
                        Discuss →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
