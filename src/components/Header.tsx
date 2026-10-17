import { useState, useEffect, useRef } from "react"
import { Link, NavLink, useLocation } from "react-router"
import { products } from "@/data/products"
import { services } from "@/data/services"
import { solutions } from "@/data/solutions"
import { productCategorySlugMap, serviceCategorySlugMap } from "@/lib/utils"
import { getAllFranchises } from "@/data/franchises/registry"

interface HeaderProps {
  onSearchOpen: () => void
}

// ─── Static nav data ─────────────────────────────────────────────────────────

const PRODUCT_CATEGORIES = Object.entries(productCategorySlugMap)
const SERVICE_CATEGORIES = Object.entries(serviceCategorySlugMap)
const FEATURED_PRODUCTS = products.slice(0, 3)
const FEATURED_SERVICES = services.slice(0, 3)

type MenuId = "products" | "services" | "solutions" | "resources" | "company" | "franchises"

// ─── Desktop dropdown panels ─────────────────────────────────────────────────

function ProductsPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute top-full left-0 w-[672px] bg-background border border-border border-t-0 shadow-[0_8px_32px_-4px_rgba(17,17,16,0.12)] overflow-hidden"
      style={{ zIndex: 60, borderTop: "2px solid var(--color-primary)" }}
    >
      <div className="grid grid-cols-3 divide-x divide-border">
        {/* Explore */}
        <div className="p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Explore
          </p>
          <Link to="/products" onClick={onClose} className="group block mb-5">
            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              All Products
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              View the complete product ecosystem.
            </p>
          </Link>
          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">
              125+ enterprise products across 6 categories.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Categories
          </p>
          <ul className="flex flex-col">
            {PRODUCT_CATEGORIES.map(([name, slug]) => (
              <li key={slug}>
                <Link
                  to={`/products/category/${slug}`}
                  onClick={onClose}
                  className="block text-sm text-muted-foreground hover:text-foreground py-1.5 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured */}
        <div className="p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Featured
          </p>
          <ul className="flex flex-col gap-4">
            {FEATURED_PRODUCTS.map((p) => (
              <li key={p.id}>
                <Link
                  to={`/products/${p.slug}`}
                  onClick={onClose}
                  className="group block"
                >
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {p.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {p.tagline}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-3 bg-secondary">
        <Link
          to="/products"
          onClick={onClose}
          className="text-xs font-medium text-primary hover:text-[#A50F28] transition-colors"
        >
          Explore all 125+ products →
        </Link>
      </div>
    </div>
  )
}

function ServicesPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute top-full left-0 w-[640px] bg-background border border-border border-t-0 shadow-[0_8px_32px_-4px_rgba(17,17,16,0.12)] overflow-hidden"
      style={{ zIndex: 60, borderTop: "2px solid var(--color-primary)" }}
    >
      <div className="grid grid-cols-3 divide-x divide-border">
        {/* Explore */}
        <div className="p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Explore
          </p>
          <Link to="/services" onClick={onClose} className="group block mb-5">
            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              All Services
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Expert advisory and delivery for complex challenges.
            </p>
          </Link>
          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">
              50+ services across 5 practice areas.
            </p>
          </div>
        </div>

        {/* Practice Areas */}
        <div className="p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Practice Areas
          </p>
          <ul className="flex flex-col">
            {SERVICE_CATEGORIES.map(([name, slug]) => (
              <li key={slug}>
                <Link
                  to={`/services/category/${slug}`}
                  onClick={onClose}
                  className="block text-sm text-muted-foreground hover:text-foreground py-1.5 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured */}
        <div className="p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Featured
          </p>
          <ul className="flex flex-col gap-4">
            {FEATURED_SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/services/${s.slug}`}
                  onClick={onClose}
                  className="group block"
                >
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {s.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {s.tagline}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-3 bg-secondary">
        <Link
          to="/services"
          onClick={onClose}
          className="text-xs font-medium text-primary hover:text-[#A50F28] transition-colors"
        >
          Explore all 50+ professional services →
        </Link>
      </div>
    </div>
  )
}

const FEATURED_SOLUTIONS = solutions.slice(0, 4)

function SolutionsPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 w-[340px] bg-background border border-border border-t-0 shadow-[0_8px_32px_-4px_rgba(17,17,16,0.12)] overflow-hidden"
      style={{ zIndex: 60, borderTop: "2px solid var(--color-primary)" }}
    >
      <div className="p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Solutions
        </p>
        <Link to="/solutions" onClick={onClose} className="group block mb-4">
          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
            All Solutions
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Explore capabilities by business objective.
          </p>
        </Link>
        <div className="border-t border-border pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Featured
          </p>
          <ul className="flex flex-col">
            {FEATURED_SOLUTIONS.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/solutions/${s.slug}`}
                  onClick={onClose}
                  className="block text-sm text-muted-foreground hover:text-foreground py-1.5 transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-5 py-3 bg-secondary">
        <Link
          to="/solutions"
          onClick={onClose}
          className="text-xs font-medium text-primary hover:text-[#A50F28] transition-colors"
        >
          Explore all solutions →
        </Link>
      </div>
    </div>
  )
}

function ResourcesPanel({ onClose }: { onClose: () => void }) {
  const resourceTypeLinks = [
    { label: "Insights", href: "/resources/type/insight" },
    { label: "Guides", href: "/resources/type/guide" },
    { label: "Articles", href: "/resources/type/article" },
    { label: "FAQs", href: "/resources/type/faq" },
    { label: "Knowledge", href: "/resources/type/knowledge" },
  ]

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] bg-background border border-border border-t-0 shadow-[0_8px_32px_-4px_rgba(17,17,16,0.12)] overflow-hidden"
      style={{ zIndex: 60, borderTop: "2px solid var(--color-primary)" }}
    >
      <div className="p-5 border-b border-border">
        <Link to="/resources" onClick={onClose} className="group block mb-1">
          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
            All Resources
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Insights, guides, articles, and knowledge resources.
          </p>
        </Link>
      </div>
      <div className="p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Browse by type
        </p>
        <ul className="flex flex-col gap-0.5">
          {resourceTypeLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                onClick={onClose}
                className="block text-sm text-muted-foreground hover:text-foreground py-1.5 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-border px-5 py-3 bg-secondary">
        <Link
          to="/resources/case-studies"
          onClick={onClose}
          className="text-xs font-medium text-primary hover:text-[#A50F28] transition-colors"
        >
          Case Studies →
        </Link>
      </div>
    </div>
  )
}

function CompanyPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute top-full right-0 w-[220px] bg-background border border-border border-t-0 shadow-[0_8px_32px_-4px_rgba(17,17,16,0.12)] p-5"
      style={{ zIndex: 60, borderTop: "2px solid var(--color-primary)" }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
        Company
      </p>
      <ul className="flex flex-col">
        {[
          { label: "About Ricoz", href: "/about" },
          { label: "Leadership", href: "/leadership" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ].map((item) => (
          <li key={item.label}>
            <Link
              to={item.href}
              onClick={onClose}
              className="block text-sm text-muted-foreground hover:text-foreground py-1.5 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FranchisesPanel({ onClose }: { onClose: () => void }) {
  const franchises = getAllFranchises()
  return (
    <div
      className="absolute top-full right-0 w-[280px] bg-background border border-border border-t-0 shadow-[0_8px_32px_-4px_rgba(17,17,16,0.12)] overflow-hidden"
      style={{ zIndex: 60, borderTop: "2px solid var(--color-primary)" }}
    >
      <div className="p-5 border-b border-border">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">
          Franchises
        </p>
        <Link to="/franchise" onClick={onClose} className="group block">
          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-0.5">
            All Franchises
          </p>
          <p className="text-xs text-muted-foreground">
            Explore the Ricoz franchise network.
          </p>
        </Link>
      </div>
      <div className="p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Locations
        </p>
        <ul className="flex flex-col">
          {franchises.map((f) => (
            <li key={f.slug}>
              <Link
                to={`/franchise/${f.slug}`}
                onClick={onClose}
                className="flex items-center justify-between py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span>{f.city}</span>
                {f.status === "coming-soon" && (
                  <span className="text-[10px] font-medium text-muted-foreground/60">
                    Coming soon
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ─── Desktop NavItem wrapper ──────────────────────────────────────────────────

interface NavItemProps {
  label: string
  menuId: MenuId
  isActive: boolean
  openMenu: MenuId | null
  onEnter: (id: MenuId) => void
  onLeave: () => void
  onToggle: (id: MenuId) => void
  panel: React.ReactNode
}

function DesktopNavItem({
  label,
  menuId,
  isActive,
  openMenu,
  onEnter,
  onLeave,
  onToggle,
  panel,
}: NavItemProps) {
  const isOpen = openMenu === menuId
  const highlighted = isOpen || isActive
  return (
    <div
      className="relative flex flex-col"
      onMouseEnter={() => onEnter(menuId)}
      onMouseLeave={onLeave}
    >
      <button
        type="button"
        onClick={() => onToggle(menuId)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={`nav-panel-${menuId}`}
        className={[
          "flex items-center gap-1 px-3 py-2 text-[13px] tracking-[-0.01em] transition-colors duration-150 select-none",
          highlighted
            ? "text-primary font-medium"
            : "text-foreground/80 hover:text-foreground",
        ].join(" ")}
      >
        {label}
        <svg
          className={[
            "transition-transform duration-200 opacity-60",
            isOpen ? "rotate-180" : "",
          ].join(" ")}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 3.5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Red underline accent on active */}
      <span
        className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-200"
        style={{ background: highlighted ? "var(--color-primary)" : "transparent" }}
        aria-hidden="true"
      />

      {isOpen && (
        <div
          id={`nav-panel-${menuId}`}
          role="region"
          aria-label={`${label} navigation`}
          onMouseEnter={() => onEnter(menuId)}
          className="nav-dropdown"
        >
          {panel}
        </div>
      )}
    </div>
  )
}

// ─── Mobile accordion section ─────────────────────────────────────────────────

interface MobileSectionProps {
  label: string
  sectionId: string
  expanded: string | null
  onToggle: (id: string) => void
  onClose: () => void
  children: React.ReactNode
}

function MobileSection({
  label,
  sectionId,
  expanded,
  onToggle,
  onClose,
  children,
}: MobileSectionProps) {
  const isOpen = expanded === sectionId
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => onToggle(sectionId)}
        aria-expanded={isOpen}
        aria-controls={`mobile-section-${sectionId}`}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span
          className={[
            "text-xl font-display transition-colors",
            isOpen ? "text-primary" : "text-foreground",
          ].join(" ")}
        >
          {label}
        </span>
        <svg
          className={[
            "transition-transform duration-200 text-muted-foreground",
            isOpen ? "rotate-180" : "",
          ].join(" ")}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6.5l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id={`mobile-section-${sectionId}`}
          className="pb-4 flex flex-col gap-0.5"
        >
          {children}
        </div>
      )}
    </div>
  )
}

function MobileLink({
  to,
  label,
  onClose,
  muted = true,
}: {
  to: string
  label: string
  onClose: () => void
  muted?: boolean
}) {
  return (
    <Link
      to={to}
      onClick={onClose}
      className={[
        "text-sm py-2 pl-2 transition-colors hover:text-primary",
        muted ? "text-muted-foreground" : "text-foreground font-medium",
      ].join(" ")}
    >
      {label}
    </Link>
  )
}

function MobileSubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mt-3 mb-1 pl-2">
      {children}
    </p>
  )
}

// ─── Header ──────────────────────────────────────────────────────────────────

export default function Header({ onSearchOpen }: HeaderProps) {
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  const pathname = location.pathname

  // Close everything on navigation
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [pathname])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  // Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  // Click outside to close desktop dropdowns
  useEffect(() => {
    if (!openMenu) return
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [openMenu])

  function handleMenuEnter(id: MenuId) {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(id)
  }

  function handleMenuLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160)
  }

  function handleMenuToggle(id: MenuId) {
    setOpenMenu((prev) => (prev === id ? null : id))
  }

  function handleMobileSection(id: string) {
    setMobileExpanded((prev) => (prev === id ? null : id))
  }

  function closeMobile() {
    setMobileOpen(false)
  }

  const isActive = (prefix: string) =>
    pathname === prefix || pathname.startsWith(prefix + "/")

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[70] focus:top-4 focus:left-4 focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:border focus:border-border focus:rounded-[var(--radius)]"
      >
        Skip to main content
      </a>

      <header
        ref={headerRef}
        className={[
          "fixed top-0 left-0 right-0 z-50 bg-background border-b border-border transition-shadow duration-200",
          scrolled ? "shadow-[0_1px_8px_0_rgba(0,0,0,0.06)]" : "",
        ].join(" ")}
      >
        {/* Responsive container — tighter on fold/mobile, comfortable on desktop */}
        <div className="max-w-[1280px] mx-auto px-3 sm:px-5 lg:px-8">
          {/* Height: compact on fold (<360px) → normal mobile → desktop */}
          <div className="flex items-center h-12 sm:h-14 lg:h-[60px] gap-0 min-w-0">
            {/* ── Logo ──────────────────────────────────────────────────────── */}
            <Link
              to="/"
              className="shrink-0 flex items-center gap-0 sm:gap-2 pr-0 sm:pr-4 sm:mr-3 lg:pr-5 lg:mr-4 sm:border-r sm:border-border"
              aria-label="Ricoz — Return to homepage"
            >
              {/* Mark: smaller on fold (<360), normal on mobile+ */}
              <img
                src="/src/imports/RICOZ_rZ.png"
                alt="Ricoz mark"
                className="rounded-[4px] sm:rounded-[5px] shrink-0 w-[24px] h-[24px] sm:w-[27px] sm:h-[27px] lg:w-[28px] lg:h-[28px]"
              />
              {/* Wordmark: hidden on fold (<360px), visible from sm (360px+) */}
              <span
                className="hidden xs:inline-block sm:inline-block text-foreground text-[17px] sm:text-[18px] lg:text-[19px] leading-none select-none ml-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                }}
              >
                Ricoz
              </span>
            </Link>

            {/* ── Desktop nav (≥1024px) ─────────────────────────────────────── */}
            <nav
              className="hidden lg:flex items-stretch flex-1 min-w-0 gap-0"
              aria-label="Primary navigation"
            >
              <DesktopNavItem
                label="Products"
                menuId="products"
                isActive={isActive("/products")}
                openMenu={openMenu}
                onEnter={handleMenuEnter}
                onLeave={handleMenuLeave}
                onToggle={handleMenuToggle}
                panel={<ProductsPanel onClose={() => setOpenMenu(null)} />}
              />
              <DesktopNavItem
                label="Services"
                menuId="services"
                isActive={isActive("/services")}
                openMenu={openMenu}
                onEnter={handleMenuEnter}
                onLeave={handleMenuLeave}
                onToggle={handleMenuToggle}
                panel={<ServicesPanel onClose={() => setOpenMenu(null)} />}
              />
              <DesktopNavItem
                label="Solutions"
                menuId="solutions"
                isActive={isActive("/solutions")}
                openMenu={openMenu}
                onEnter={handleMenuEnter}
                onLeave={handleMenuLeave}
                onToggle={handleMenuToggle}
                panel={<SolutionsPanel onClose={() => setOpenMenu(null)} />}
              />
              <DesktopNavItem
                label="Resources"
                menuId="resources"
                isActive={isActive("/resources")}
                openMenu={openMenu}
                onEnter={handleMenuEnter}
                onLeave={handleMenuLeave}
                onToggle={handleMenuToggle}
                panel={<ResourcesPanel onClose={() => setOpenMenu(null)} />}
              />
              <DesktopNavItem
                label="Company"
                menuId="company"
                isActive={
                  isActive("/about") ||
                  isActive("/leadership") ||
                  isActive("/careers")
                }
                openMenu={openMenu}
                onEnter={handleMenuEnter}
                onLeave={handleMenuLeave}
                onToggle={handleMenuToggle}
                panel={<CompanyPanel onClose={() => setOpenMenu(null)} />}
              />
              <DesktopNavItem
                label="Franchises"
                menuId="franchises"
                isActive={isActive("/franchise")}
                openMenu={openMenu}
                onEnter={handleMenuEnter}
                onLeave={handleMenuLeave}
                onToggle={handleMenuToggle}
                panel={<FranchisesPanel onClose={() => setOpenMenu(null)} />}
              />
            </nav>

            {/* ── Desktop actions (≥1024px) ─────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-1 ml-auto pl-4 border-l border-border shrink-0">
              {/* Search */}
              <button
                type="button"
                onClick={onSearchOpen}
                aria-label="Open site search"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-150 rounded-[var(--radius)]"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="4.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M10.5 10.5l3 3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <span
                className="w-px h-4 bg-border mx-0.5"
                aria-hidden="true"
              />
              {/* Login */}
              <Link
                to="/portal"
                className="text-[12.5px] text-foreground/80 hover:text-foreground transition-colors px-2.5 py-2"
              >
                Login
              </Link>
              {/* Contact — shown on xl+ only (≥1280px) */}
              <Link
                to="/contact"
                className="hidden xl:inline-flex text-[12.5px] font-medium border border-border/80 text-foreground/90 hover:border-primary hover:text-primary transition-colors px-3 py-1.5 rounded-[3px]"
              >
                Contact Us
              </Link>
              {/* CTA */}
              <Link
                to="/consultation"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold bg-primary text-white px-3.5 py-1.5 rounded-[3px] hover:bg-[#A50F28] transition-colors"
              >
                Get Started
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6h8M7 3l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* ── Tablet compact actions (640–1023px) ───────────────────────── */}
            <div className="hidden sm:flex lg:hidden items-center gap-1 ml-auto shrink-0">
              <button
                type="button"
                onClick={onSearchOpen}
                aria-label="Open site search"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-[var(--radius)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="4.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M10.5 10.5l3 3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {/* Get Started shown on md+ tablet */}
              <Link
                to="/consultation"
                className="hidden md:inline-flex items-center text-[12px] font-semibold bg-primary text-white px-3 py-1.5 rounded-[3px] hover:bg-[#A50F28] transition-colors"
              >
                Get Started
              </Link>
              {/* Hamburger */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="p-2 text-foreground rounded-[var(--radius)]"
              >
                {mobileOpen ? (
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 4l12 12M16 4L4 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3 5h14M3 10h14M3 15h14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* ── Mobile / fold actions (<640px) ───────────────────────────── */}
            <div className="flex sm:hidden items-center gap-0.5 ml-auto shrink-0">
              <button
                type="button"
                onClick={onSearchOpen}
                aria-label="Open site search"
                className="p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-[var(--radius)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="4.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M10.5 10.5l3 3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="p-1.5 text-foreground rounded-[var(--radius)]"
              >
                {mobileOpen ? (
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 4l12 12M16 4L4 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3 5h14M3 10h14M3 15h14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={[
          "fixed inset-0 z-40 bg-background flex flex-col lg:hidden transition-opacity duration-200",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        {/* Spacer for header height */}
        <div className="h-12 sm:h-14 border-b border-border shrink-0" />

        <nav
          className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 sm:py-6"
          aria-label="Mobile navigation"
        >
          {/* Products accordion */}
          <MobileSection
            label="Products"
            sectionId="products"
            expanded={mobileExpanded}
            onToggle={handleMobileSection}
            onClose={closeMobile}
          >
            <MobileLink
              to="/products"
              label="Explore All Products"
              onClose={closeMobile}
              muted={false}
            />
            <MobileSubLabel>Categories</MobileSubLabel>
            {PRODUCT_CATEGORIES.map(([name, slug]) => (
              <MobileLink
                key={slug}
                to={`/products/category/${slug}`}
                label={name}
                onClose={closeMobile}
              />
            ))}
            <MobileSubLabel>Featured</MobileSubLabel>
            {FEATURED_PRODUCTS.map((p) => (
              <MobileLink
                key={p.id}
                to={`/products/${p.slug}`}
                label={p.name}
                onClose={closeMobile}
              />
            ))}
          </MobileSection>

          {/* Services accordion */}
          <MobileSection
            label="Services"
            sectionId="services"
            expanded={mobileExpanded}
            onToggle={handleMobileSection}
            onClose={closeMobile}
          >
            <MobileLink
              to="/services"
              label="Explore All Services"
              onClose={closeMobile}
              muted={false}
            />
            <MobileSubLabel>Practice Areas</MobileSubLabel>
            {SERVICE_CATEGORIES.map(([name, slug]) => (
              <MobileLink
                key={slug}
                to={`/services/category/${slug}`}
                label={name}
                onClose={closeMobile}
              />
            ))}
            <MobileSubLabel>Featured</MobileSubLabel>
            {FEATURED_SERVICES.map((s) => (
              <MobileLink
                key={s.id}
                to={`/services/${s.slug}`}
                label={s.name}
                onClose={closeMobile}
              />
            ))}
          </MobileSection>

          {/* Solutions accordion */}
          <MobileSection
            label="Solutions"
            sectionId="solutions"
            expanded={mobileExpanded}
            onToggle={handleMobileSection}
            onClose={closeMobile}
          >
            <MobileLink
              to="/solutions"
              label="Explore Solutions"
              onClose={closeMobile}
              muted={false}
            />
            <MobileSubLabel>Featured</MobileSubLabel>
            {FEATURED_SOLUTIONS.map((s) => (
              <MobileLink
                key={s.slug}
                to={`/solutions/${s.slug}`}
                label={s.name}
                onClose={closeMobile}
              />
            ))}
          </MobileSection>

          {/* Resources accordion */}
          <MobileSection
            label="Resources"
            sectionId="resources"
            expanded={mobileExpanded}
            onToggle={handleMobileSection}
            onClose={closeMobile}
          >
            <MobileLink
              to="/resources"
              label="All Resources"
              onClose={closeMobile}
              muted={false}
            />
            <MobileSubLabel>Browse by type</MobileSubLabel>
            <MobileLink
              to="/resources/type/insight"
              label="Insights"
              onClose={closeMobile}
            />
            <MobileLink
              to="/resources/type/guide"
              label="Guides"
              onClose={closeMobile}
            />
            <MobileLink
              to="/resources/type/article"
              label="Articles"
              onClose={closeMobile}
            />
            <MobileLink
              to="/resources/type/faq"
              label="FAQs"
              onClose={closeMobile}
            />
            <MobileLink
              to="/resources/type/knowledge"
              label="Knowledge"
              onClose={closeMobile}
            />
            <MobileLink
              to="/resources/case-studies"
              label="Case Studies"
              onClose={closeMobile}
            />
          </MobileSection>

          {/* Company accordion */}
          <MobileSection
            label="Company"
            sectionId="company"
            expanded={mobileExpanded}
            onToggle={handleMobileSection}
            onClose={closeMobile}
          >
            <MobileLink
              to="/about"
              label="About Ricoz"
              onClose={closeMobile}
              muted={false}
            />
            <MobileLink
              to="/leadership"
              label="Leadership"
              onClose={closeMobile}
            />
            <MobileLink to="/careers" label="Careers" onClose={closeMobile} />
            <MobileLink to="/contact" label="Contact" onClose={closeMobile} />
          </MobileSection>

          {/* Franchises accordion */}
          <MobileSection
            label="Franchises"
            sectionId="franchises"
            expanded={mobileExpanded}
            onToggle={handleMobileSection}
            onClose={closeMobile}
          >
            <MobileLink
              to="/franchise"
              label="All Franchises"
              onClose={closeMobile}
              muted={false}
            />
            <MobileSubLabel>Locations</MobileSubLabel>
            {getAllFranchises().map((f) => (
              <MobileLink
                key={f.slug}
                to={`/franchise/${f.slug}`}
                label={
                  f.status === "coming-soon"
                    ? `${f.city} — Coming Soon`
                    : f.city
                }
                onClose={closeMobile}
              />
            ))}
          </MobileSection>

          {/* CTA block */}
          <div className="flex flex-col gap-3 mt-8">
            <Link
              to="/portal"
              onClick={closeMobile}
              className="w-full text-center py-3.5 border border-border text-muted-foreground text-sm font-medium rounded-[var(--radius)] hover:border-foreground hover:text-foreground transition-colors duration-150"
            >
              Login
            </Link>
            <Link
              to="/contact"
              onClick={closeMobile}
              className="w-full text-center py-3.5 border border-foreground text-foreground text-sm font-medium rounded-[var(--radius)] hover:bg-foreground hover:text-background transition-colors duration-150"
            >
              Contact Us
            </Link>
            <Link
              to="/consultation"
              onClick={closeMobile}
              className="w-full text-center py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-[var(--radius)] hover:bg-[#A50F28] transition-colors duration-150"
            >
              Schedule a Consultation
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
