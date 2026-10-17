import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router"
import { useAuth } from "@/auth/AuthContext"

interface NavItem {
  label: string
  href: string
  icon: string
}

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: "dashboard" },
  { label: "Products", href: "/admin/products", icon: "products" },
  { label: "Services", href: "/admin/services", icon: "services" },
  { label: "Resources", href: "/admin/resources", icon: "resources" },
  { label: "Leads", href: "/admin/leads", icon: "leads" },
  {
    label: "Consultations",
    href: "/admin/consultations",
    icon: "consultations",
  },
  { label: "Customers", href: "/admin/customers", icon: "customers" },
]

function NavIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    dashboard:
      "M3 5a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm8 0a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5zM3 13a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4zm8 0a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4z",
    products: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    services:
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    resources:
      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    leads:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    consultations:
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    customers:
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  }
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[type] ?? ""} />
    </svg>
  )
}

export default function AdminShell({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  function isActive(href: string) {
    if (href === "/admin") return location.pathname === "/admin"
    return location.pathname.startsWith(href)
  }

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-border">
        <Link
          to="/admin"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src="/src/imports/RICOZ_rZ.png"
            alt=""
            width={20}
            height={20}
            className="rounded-[3px] shrink-0"
            aria-hidden="true"
          />
          <span
            className="text-foreground text-[16px] leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Ricoz
          </span>
          <span className="text-[10px] font-medium text-muted-foreground bg-secondary border border-border px-1.5 py-0.5 rounded tracking-wide">
            Admin
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav
        className="flex-1 px-3 py-4 overflow-y-auto"
        aria-label="Admin navigation"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground px-2 mb-2">
          Operations
        </p>
        <ul className="flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === "/admin"}
                className={[
                  "flex items-center gap-2.5 px-2 py-2 rounded-[var(--radius)] text-sm transition-colors duration-150",
                  isActive(item.href)
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                ].join(" ")}
              >
                <NavIcon type={item.icon} />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground px-2 mb-2">
            Platform
          </p>
          <Link
            to="/"
            className="flex items-center gap-2.5 px-2 py-2 rounded-[var(--radius)] text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors duration-150"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View public site
          </Link>
        </div>
      </nav>

      {/* User */}
      {user && (
        <div className="px-3 py-4 border-t border-border">
          <div className="flex items-center justify-between gap-2 px-2">
            <div className="min-w-0">
              <p className="text-xs font-medium text-foreground truncate">
                {user.displayName}
              </p>
              <p className="text-[11px] text-muted-foreground truncate">
                {user.email}
              </p>
            </div>
            <button
              type="button"
              onClick={logout}
              className="shrink-0 text-xs text-muted-foreground hover:text-foreground transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
              title="Sign out"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="Sign out"
              >
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen flex bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-56 border-r border-border bg-background shrink-0 fixed inset-y-0 left-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-foreground/20"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
          <aside className="relative flex flex-col w-64 bg-background border-r border-border shadow-lg">
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-56">
        {/* Mobile top bar */}
        <header className="md:hidden flex items-center gap-3 h-14 px-4 border-b border-border bg-background">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
            className="p-1.5 text-muted-foreground hover:text-foreground"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span
            className="text-foreground text-[15px] leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Ricoz
          </span>
          <span className="text-muted-foreground text-xs">/ Admin</span>
        </header>

        <main className="flex-1 p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}
