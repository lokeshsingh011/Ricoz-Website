import { Link } from "react-router"
import { getAllFranchises } from "@/data/franchises/registry"

const footerColumns = [
  {
    heading: "Products",
    links: [
      { label: "All Products", href: "/products" },
      {
        label: "Analytics & Intelligence",
        href: "/products?category=analytics",
      },
      {
        label: "Automation & Operations",
        href: "/products?category=automation",
      },
      { label: "Security & Compliance", href: "/products?category=security" },
      { label: "Data & Integration", href: "/products?category=data" },
      { label: "Customer Experience", href: "/products?category=cx" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "All Services", href: "/services" },
      {
        label: "Digital Transformation",
        href: "/services/digital-transformation-consulting",
      },
      {
        label: "Technology Strategy",
        href: "/services/technology-strategy-roadmap",
      },
      {
        label: "Systems Integration",
        href: "/services/enterprise-systems-integration",
      },
      { label: "Data & Analytics", href: "/services/data-analytics-services" },
      {
        label: "Cybersecurity Advisory",
        href: "/services/cybersecurity-advisory",
      },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "All Solutions", href: "/solutions" },
      { label: "Enterprise Operations", href: "/solutions" },
      { label: "Data & Intelligence", href: "/solutions" },
      { label: "Security & Compliance", href: "/solutions" },
      { label: "Digital Transformation", href: "/solutions" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "All Resources", href: "/resources" },
      { label: "Reports & Guides", href: "/resources" },
      { label: "Articles", href: "/resources" },
      { label: "Case Studies", href: "/resources" },
      { label: "Insights", href: "/resources" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Ricoz", href: "/company" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

export default function Footer() {
  const franchises = getAllFranchises()

  return (
    <footer className="bg-foreground text-background" aria-label="Site footer">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Franchise network discovery strip */}
        <div className="py-6 sm:py-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-1">
              RICOZ / FRANCHISE NETWORK
            </p>
            <p className="text-sm text-background/70">
              Find Ricoz closer to your business.{" "}
              <span className="text-background/50">
                Explore our growing network of locally led Ricoz franchises.
              </span>
            </p>
          </div>
          <Link
            to="/franchise"
            className="shrink-0 text-sm font-medium border border-white/20 text-background/80 hover:text-background hover:border-white/50 px-4 py-2 rounded-[4px] transition-colors duration-150"
          >
            Explore Franchises →
          </Link>
        </div>

        {/* Main footer content */}
        <div className="py-10 sm:py-16 md:py-20 border-b border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 sm:gap-8">
            {/* Brand column */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <Link
                to="/"
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity duration-150"
                aria-label="Ricoz — Return to homepage"
              >
                <img
                  src="/src/imports/RICOZ_rZ.png"
                  alt=""
                  width={24}
                  height={24}
                  className="rounded-[4px] shrink-0 opacity-90"
                  aria-hidden="true"
                />
                <span
                  className="text-background text-[18px] leading-none select-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                  }}
                >
                  Ricoz
                </span>
              </Link>
              <p className="mt-4 text-sm text-background/50 leading-relaxed max-w-[200px]">
                Building the ecosystem your business needs to move forward.
              </p>
            </div>

            {/* Navigation columns */}
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-background/60 hover:text-background transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Franchises column — driven by registry */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">
                Franchises
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    to="/franchise"
                    className="text-sm text-background/60 hover:text-background transition-colors duration-150"
                  >
                    All Franchises
                  </Link>
                </li>
                {franchises.map((f) => (
                  <li key={f.slug}>
                    <Link
                      to={`/franchise/${f.slug}`}
                      className="text-sm text-background/60 hover:text-background transition-colors duration-150 flex items-center gap-1.5"
                    >
                      {f.city}
                      {f.status === "coming-soon" && (
                        <span className="text-[10px] text-background/30">
                          Soon
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Ricoz. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="text-xs text-background/40 hover:text-background/80 transition-colors duration-150"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="text-xs text-background/40 hover:text-background/80 transition-colors duration-150"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-background/40 hover:text-background/80 transition-colors duration-150"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
