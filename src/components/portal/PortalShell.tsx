import { useState, useRef, useEffect } from "react"
import { Navigate, NavLink, Outlet, Link } from "react-router"
import { usePortalAuth } from "@/auth/PortalAuthContext"

// ─── Nav items ────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { to: "/portal/dashboard", label: "Dashboard" },
  { to: "/portal/enquiries", label: "Enquiries" },
  { to: "/portal/consultations", label: "Consultations" },
  { to: "/portal/products", label: "Products" },
  { to: "/portal/services", label: "Services" },
  { to: "/portal/profile", label: "Profile" },
  { to: "/portal/support", label: "Support" },
]

// ─── Account menu ─────────────────────────────────────────────────────────────

function AccountMenu({
  user,
  onClose,
  onLogout,
}: {
  user: { email: string; displayName: string }
  onClose: () => void
  onLogout: () => void
}) {
  return (
    <div className="absolute top-full right-0 mt-1 w-56 bg-white border border-[#E5E5E0] rounded-[4px] shadow-md z-50 overflow-hidden">
      <div className="px-4 py-3 border-b border-[#F0EDE8]">
        <p className="text-sm font-medium text-[#111110] truncate">
          {user.displayName}
        </p>
        <p className="text-xs text-[#9B9B97] truncate mt-0.5">{user.email}</p>
      </div>
      <div className="p-1">
        <Link
          to="/portal/profile"
          onClick={onClose}
          className="block px-3 py-2 text-sm text-[#3A3A3A] hover:bg-[#F7F5F1] rounded-[2px] transition-colors"
        >
          Profile
        </Link>
        <Link
          to="/portal/support"
          onClick={onClose}
          className="block px-3 py-2 text-sm text-[#3A3A3A] hover:bg-[#F7F5F1] rounded-[2px] transition-colors"
        >
          Support
        </Link>
        <div className="mx-3 my-1 border-t border-[#E5E5E0]" />
        <button
          type="button"
          onClick={() => {
            onLogout()
            onClose()
          }}
          className="w-full text-left px-3 py-2 text-sm text-[#C41230] hover:bg-[#FEF2F4] rounded-[2px] transition-colors"
        >
          Sign out
        </button>
      </div>
    </div>
  )
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({ onLogout }: { onLogout: () => void }) {
  return (
    <aside className="hidden lg:flex flex-col w-60 border-r border-[#E5E5E0] bg-[#FAFAF8] shrink-0">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-[#E5E5E0]">
        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="Ricoz homepage"
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
            className="text-[#111110] text-[16px] leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Ricoz
          </span>
        </Link>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97] mt-1">
          Customer Portal
        </p>
      </div>

      {/* Nav */}
      <nav
        className="flex-1 overflow-y-auto px-3 py-4"
        aria-label="Portal navigation"
      >
        <ul className="flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  [
                    "block px-3 py-2 text-sm rounded-[4px] transition-colors duration-100",
                    isActive
                      ? "bg-[#F0EDE8] text-[#111110] font-medium"
                      : "text-[#6B6B67] hover:text-[#111110] hover:bg-[#F5F3EE]",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom: sign out + platform link */}
      <div className="px-3 py-4 border-t border-[#E5E5E0] flex flex-col gap-1">
        <Link
          to="/"
          className="block px-3 py-2 text-xs text-[#9B9B97] hover:text-[#6B6B67] rounded-[4px] transition-colors"
        >
          ← Ricoz Platform
        </Link>
        <button
          type="button"
          onClick={onLogout}
          className="text-left px-3 py-2 text-sm text-[#6B6B67] hover:text-[#C41230] rounded-[4px] transition-colors"
        >
          Sign out
        </button>
      </div>
    </aside>
  )
}

// ─── Mobile header ────────────────────────────────────────────────────────────

function MobileHeader({
  onMenuOpen,
  user,
}: {
  onMenuOpen: () => void
  user: { email: string; displayName: string }
}) {
  const [accountOpen, setAccountOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { logout } = usePortalAuth()

  useEffect(() => {
    if (!accountOpen) return
    function h(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setAccountOpen(false)
    }
    document.addEventListener("mousedown", h)
    return () => document.removeEventListener("mousedown", h)
  }, [accountOpen])

  return (
    <header className="lg:hidden sticky top-0 z-50 bg-[#FAFAF8] border-b border-[#E5E5E0] flex items-center justify-between px-4 h-14">
      <button
        type="button"
        onClick={onMenuOpen}
        aria-label="Open navigation menu"
        className="p-2 -ml-2 text-[#6B6B67] hover:text-[#111110]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 5h14M3 10h14M3 15h14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className="flex items-center gap-1.5">
        <span
          className="text-[#111110] text-[15px] leading-none"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
        >
          Ricoz
        </span>
        <span className="text-[#9B9B97] text-xs">/ Customer Portal</span>
      </div>
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setAccountOpen((v) => !v)}
          aria-expanded={accountOpen}
          aria-label="Account menu"
          className="w-8 h-8 rounded-full bg-[#E5E5E0] text-[#3A3A3A] text-xs font-semibold flex items-center justify-center hover:bg-[#D9D6D0] transition-colors"
        >
          {user.displayName.charAt(0).toUpperCase()}
        </button>
        {accountOpen && (
          <AccountMenu
            user={user}
            onClose={() => setAccountOpen(false)}
            onLogout={() => {
              logout()
              setAccountOpen(false)
            }}
          />
        )}
      </div>
    </header>
  )
}

// ─── Mobile drawer ────────────────────────────────────────────────────────────

function MobileDrawer({
  open,
  onClose,
  onLogout,
}: {
  open: boolean
  onClose: () => void
  onLogout: () => void
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function h(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", h)
    return () => document.removeEventListener("keydown", h)
  }, [open, onClose])

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          aria-hidden="true"
          onClick={onClose}
        />
      )}
      {/* Drawer */}
      <div
        className={[
          "fixed inset-y-0 left-0 z-50 w-72 bg-[#FAFAF8] border-r border-[#E5E5E0] flex flex-col lg:hidden transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="px-5 py-5 border-b border-[#E5E5E0] flex items-center justify-between">
          <div>
            <Link to="/" onClick={onClose} className="flex items-center gap-2">
              <span
                className="text-[#111110] text-[15px] leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                }}
              >
                Ricoz
              </span>
            </Link>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97] mt-1">
              Customer Portal
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-1 text-[#9B9B97] hover:text-[#111110]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav
          className="flex-1 overflow-y-auto px-3 py-4"
          aria-label="Mobile portal navigation"
        >
          <ul className="flex flex-col gap-0.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [
                      "block px-3 py-2.5 text-sm rounded-[4px] transition-colors duration-100",
                      isActive
                        ? "bg-[#F0EDE8] text-[#111110] font-medium"
                        : "text-[#6B6B67] hover:text-[#111110] hover:bg-[#F5F3EE]",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-[#E5E5E0] flex flex-col gap-1">
            <Link
              to="/"
              onClick={onClose}
              className="block px-3 py-2 text-xs text-[#9B9B97] hover:text-[#6B6B67] rounded-[4px] transition-colors"
            >
              ← Ricoz Platform
            </Link>
            <button
              type="button"
              onClick={() => {
                onLogout()
                onClose()
              }}
              className="text-left px-3 py-2.5 text-sm text-[#6B6B67] hover:text-[#C41230] rounded-[4px] transition-colors"
            >
              Sign out
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}

// ─── Desktop header ───────────────────────────────────────────────────────────

function DesktopHeader({
  user,
}: {
  user: { email: string; displayName: string }
}) {
  const [accountOpen, setAccountOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { logout } = usePortalAuth()

  useEffect(() => {
    if (!accountOpen) return
    function h(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setAccountOpen(false)
    }
    document.addEventListener("mousedown", h)
    return () => document.removeEventListener("mousedown", h)
  }, [accountOpen])

  return (
    <header className="hidden lg:flex h-14 border-b border-[#E5E5E0] bg-white items-center justify-end px-6 shrink-0">
      <div ref={ref} className="relative flex items-center gap-2">
        <span className="text-sm text-[#6B6B67]">{user.displayName}</span>
        <button
          type="button"
          onClick={() => setAccountOpen((v) => !v)}
          aria-expanded={accountOpen}
          aria-label="Account menu"
          className="w-8 h-8 rounded-full bg-[#E5E5E0] text-[#3A3A3A] text-xs font-semibold flex items-center justify-center hover:bg-[#D9D6D0] transition-colors"
        >
          {user.displayName.charAt(0).toUpperCase()}
        </button>
        {accountOpen && (
          <AccountMenu
            user={user}
            onClose={() => setAccountOpen(false)}
            onLogout={() => {
              logout()
              setAccountOpen(false)
            }}
          />
        )}
      </div>
    </header>
  )
}

// ─── Portal Shell ─────────────────────────────────────────────────────────────

export default function PortalShell() {
  const { status, user, logout } = usePortalAuth()
  const [drawerOpen, setDrawerOpen] = useState(false)

  if (status === "unauthenticated")
    return <Navigate to="/portal/login" replace />
  if (status === "authenticating" || !user) {
    return (
      <div className="min-h-screen bg-[#F7F5F1] flex items-center justify-center">
        <p className="text-sm text-[#9B9B97]">Signing you in…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F7F5F1] flex flex-col lg:flex-row">
      {/* Desktop sidebar */}
      <Sidebar onLogout={logout} />

      {/* Mobile header */}
      <MobileHeader onMenuOpen={() => setDrawerOpen(true)} user={user} />

      {/* Mobile drawer */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onLogout={logout}
      />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        <DesktopHeader user={user} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
