import { useState, useRef, useEffect } from "react"
import { Link, NavLink } from "react-router"
import type { Franchise } from "@/data/franchises/types"

interface Props {
  franchise: Franchise
}

const EXPLORE_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
]

function ExplorePanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full right-0 mt-1 w-52 bg-[#FAFAF8] border border-[#E5E5E0] rounded-[4px] shadow-md z-50 overflow-hidden">
      <div className="p-1">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97] px-3 pt-2.5 pb-1.5">
          Explore Ricoz
        </p>
        {EXPLORE_LINKS.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={onClose}
            className="block px-3 py-1.5 text-sm text-[#6B6B67] hover:text-[#111110] hover:bg-[#F0EDE8] rounded-[2px] transition-colors duration-100"
          >
            {item.label}
          </Link>
        ))}
        <div className="mx-3 my-1.5 border-t border-[#E5E5E0]" />
        <Link
          to="/portal"
          onClick={onClose}
          className="block px-3 py-1.5 text-sm font-medium text-[#C41230] hover:text-[#A50F28] hover:bg-[#F0EDE8] rounded-[2px] transition-colors duration-100"
        >
          Login →
        </Link>
      </div>
    </div>
  )
}

export default function FranchiseHeader({ franchise }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false)
  const exploreRef = useRef<HTMLDivElement>(null)
  const { navigation, city } = franchise

  // Close explore on outside click
  useEffect(() => {
    if (!exploreOpen) return
    function handler(e: MouseEvent) {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(e.target as Node)
      ) {
        setExploreOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [exploreOpen])

  // Escape closes menus
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setExploreOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  // Body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  function closeMobile() {
    setMobileOpen(false)
    setMobileExploreOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
        {/* Brand */}
        <Link
          to={`/franchise/${franchise.slug}`}
          className="flex items-center gap-2 group shrink-0"
          aria-label={franchise.name}
        >
          <span className="font-display font-semibold text-sm tracking-tight text-[#111110] leading-none">
            RICOZ
          </span>
          <span className="text-[#C41230] font-semibold text-sm leading-none select-none">
            /
          </span>
          <span className="font-display font-semibold text-sm tracking-tight text-[#C41230] leading-none uppercase">
            {city}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-1 mx-4"
          aria-label="Franchise navigation"
        >
          {navigation.primary.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                [
                  "text-[13px] px-3 py-2 rounded-[4px] transition-colors duration-150",
                  isActive
                    ? "text-[#111110] font-medium"
                    : "text-[#6B6B67] hover:text-[#111110]",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Explore Ricoz dropdown */}
          <div ref={exploreRef} className="relative">
            <button
              type="button"
              onClick={() => setExploreOpen((v) => !v)}
              aria-expanded={exploreOpen}
              aria-haspopup="true"
              aria-label="Explore Ricoz platform"
              className={[
                "text-[13px] px-3 py-2 rounded-[4px] transition-colors duration-150 flex items-center gap-1",
                exploreOpen
                  ? "text-[#111110] bg-[#F0EDE8]"
                  : "text-[#6B6B67] hover:text-[#111110]",
              ].join(" ")}
            >
              Explore Ricoz
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className={[
                  "transition-transform duration-150",
                  exploreOpen ? "rotate-180" : "",
                ].join(" ")}
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {exploreOpen && (
              <ExplorePanel onClose={() => setExploreOpen(false)} />
            )}
          </div>

          {/* Franchise CTA */}
          <Link
            to={navigation.cta.href}
            className="text-[13px] font-medium bg-[#C41230] text-white px-4 py-2 rounded-[4px] hover:bg-[#A50F28] transition-colors duration-150"
          >
            {navigation.cta.label}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-expanded={mobileOpen}
          aria-controls="franchise-mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={[
              "block w-5 h-px bg-[#111110] transition-all duration-200",
              mobileOpen ? "rotate-45 translate-y-[5px]" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block w-5 h-px bg-[#111110] transition-all duration-200",
              mobileOpen ? "opacity-0" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block w-5 h-px bg-[#111110] transition-all duration-200",
              mobileOpen ? "-rotate-45 -translate-y-[9px]" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="franchise-mobile-menu"
        className={[
          "fixed inset-0 z-40 bg-[#FAFAF8] flex flex-col lg:hidden transition-opacity duration-200",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        {/* Header spacer */}
        <div className="h-16 border-b border-[#E5E5E0] shrink-0" />

        <nav
          className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 sm:py-6"
          aria-label="Mobile franchise navigation"
        >
          {/* Franchise links */}
          {navigation.primary.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={closeMobile}
              className="block text-sm text-[#6B6B67] hover:text-[#111110] py-3 border-b border-[#E5E5E0] transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* Explore Ricoz accordion */}
          <div className="mt-2">
            <button
              type="button"
              onClick={() => setMobileExploreOpen((v) => !v)}
              aria-expanded={mobileExploreOpen}
              className="w-full flex items-center justify-between text-sm text-[#6B6B67] hover:text-[#111110] py-3 border-b border-[#E5E5E0] transition-colors"
            >
              Explore Ricoz
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className={[
                  "transition-transform duration-150",
                  mobileExploreOpen ? "rotate-180" : "",
                ].join(" ")}
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {mobileExploreOpen && (
              <div className="pl-4 py-2 flex flex-col gap-1">
                {EXPLORE_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMobile}
                    className="block text-sm text-[#6B6B67] hover:text-[#111110] py-2 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA block */}
          <div className="flex flex-col gap-3 mt-8">
            <Link
              to="/portal"
              onClick={closeMobile}
              className="w-full text-center py-3.5 border border-[#E5E5E0] text-[#6B6B67] text-sm font-medium rounded-[4px] hover:border-[#C41230] hover:text-[#C41230] transition-colors duration-150"
            >
              Login
            </Link>
            <Link
              to={navigation.cta.href}
              onClick={closeMobile}
              className="w-full text-center py-3.5 bg-[#C41230] text-white text-sm font-medium rounded-[4px] hover:bg-[#A50F28] transition-colors duration-150"
            >
              {navigation.cta.label}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
