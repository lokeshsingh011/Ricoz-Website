import { Link } from "react-router"
import type { Franchise } from "@/data/franchises/types"
import { getAllFranchises } from "@/data/franchises/registry"

interface Props {
  franchise: Franchise
}

export default function FranchiseFooter({ franchise }: Props) {
  const { name, city, shortDescription, director, contact, navigation } =
    franchise
  const slug = franchise.slug
  const allFranchises = getAllFranchises()

  return (
    <footer className="bg-[#0E0E0D] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & identity */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-semibold text-sm tracking-tight text-white leading-none">
                RICOZ
              </span>
              <span className="text-[#C41230] font-semibold text-sm leading-none">
                /
              </span>
              <span className="font-display font-semibold text-sm tracking-tight text-[#C41230] leading-none uppercase">
                {city}
              </span>
            </div>
            <p className="text-sm text-[#7A7A74] leading-relaxed max-w-[38ch] mb-8">
              {shortDescription}
            </p>

            {/* Local contact */}
            <div className="flex flex-col gap-2">
              {director.name && (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#4A4A44] mb-1">
                    Local Leadership
                  </p>
                  <p className="text-sm text-[#C8C8C2]">{director.name}</p>
                  <p className="text-xs text-[#7A7A74]">
                    {director.designation}
                  </p>
                </div>
              )}
              {contact.address && (
                <div className="mt-3">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#4A4A44] mb-1">
                    Location
                  </p>
                  <p className="text-sm text-[#7A7A74]">{contact.address}</p>
                </div>
              )}
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-[#7A7A74] hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              )}
              {contact.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  className="text-sm text-[#7A7A74] hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              )}
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Ecosystem */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#4A4A44] mb-4">
                Ecosystem
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "Products", href: "/products" },
                  { label: "Services", href: "/services" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "Resources", href: "/resources" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-[#7A7A74] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#4A4A44] mb-4">
                Company
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "About", href: "/about" },
                  { label: "Leadership", href: "/leadership" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-[#7A7A74] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Franchise Network */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#4A4A44] mb-4">
                Franchise Network
              </p>
              <ul className="flex flex-col gap-2.5">
                {allFranchises.map((f) => (
                  <li key={f.slug}>
                    <Link
                      to={`/franchise/${f.slug}`}
                      className={[
                        "text-sm transition-colors",
                        f.slug === slug
                          ? "text-[#C8C8C2] font-medium"
                          : "text-[#7A7A74] hover:text-white",
                      ].join(" ")}
                    >
                      {f.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Work with + Customer Portal */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#4A4A44] mb-4">
                Work with {name}
              </p>
              <ul className="flex flex-col gap-2.5 mb-6">
                <li>
                  <Link
                    to={`/contact?franchise=${slug}`}
                    className="text-sm text-[#7A7A74] hover:text-white transition-colors"
                  >
                    Discuss your requirement
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/consultation?franchise=${slug}`}
                    className="text-sm text-[#7A7A74] hover:text-white transition-colors"
                  >
                    Schedule a Consultation
                  </Link>
                </li>
              </ul>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#4A4A44] mb-3">
                Customer Portal
              </p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link
                    to="/portal"
                    className="text-sm text-[#7A7A74] hover:text-white transition-colors"
                  >
                    Customer Login →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-[#4A4A44]">
          &copy; {new Date().getFullYear()} Ricoz. {name} is a franchise of the
          Ricoz ecosystem.
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/about"
            className="text-xs text-[#4A4A44] hover:text-[#7A7A74] transition-colors"
          >
            About Ricoz
          </Link>
          <Link
            to="/contact"
            className="text-xs text-[#4A4A44] hover:text-[#7A7A74] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
