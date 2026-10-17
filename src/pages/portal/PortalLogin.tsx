import { useState, useEffect } from "react"
import { Navigate, Link } from "react-router"
import { usePortalAuth } from "@/auth/PortalAuthContext"
import { useNoIndex } from "@/lib/seo"

export default function PortalLogin() {
  useNoIndex()
  const { status, error, login } = usePortalAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string
    password?: string
  }>({})

  useEffect(() => {
    document.title = "Login — Ricoz Customer Portal"
  }, [])

  if (status === "authenticated") {
    return <Navigate to="/portal/dashboard" replace />
  }

  function validate() {
    const errs: { email?: string; password?: string } = {}
    if (!email) errs.email = "Email is required."
    else if (!/^\S+@\S+\.\S+$/.test(email))
      errs.email = "Enter a valid email address."
    if (!password) errs.password = "Password is required."
    return errs
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs)
      return
    }
    setFieldErrors({})
    await login(email, password)
  }

  const isLoading = status === "authenticating"

  return (
    <div className="min-h-screen bg-[#F7F5F1] flex flex-col">
      {/* Minimal header */}
      <header className="border-b border-[#E5E5E0] bg-[#F7F5F1]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label="Ricoz homepage"
          >
            <span className="font-display font-semibold text-sm tracking-tight text-[#111110]">
              RICOZ
            </span>
          </Link>
          <Link
            to="/"
            className="text-[13px] text-[#6B6B67] hover:text-[#111110] transition-colors"
          >
            ← Back to Ricoz
          </Link>
        </div>
      </header>

      {/* Login form */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          {/* Identity */}
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C41230] mb-6">
            Ricoz Customer Portal
          </p>
          <h1 className="font-display font-semibold text-2xl lg:text-3xl leading-[1.15] tracking-tight text-[#111110] mb-2">
            Welcome back.
          </h1>
          <p className="text-sm text-[#6B6B67] mb-8">
            Sign in to access your Ricoz customer workspace.
          </p>

          {/* Auth error */}
          {error && (
            <div
              role="alert"
              className="mb-6 px-4 py-3 border border-[#C41230]/30 bg-[#C41230]/5 rounded-[4px] text-sm text-[#C41230]"
            >
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="portal-email"
                className="block text-[13px] font-medium text-[#3A3A3A] mb-1.5"
              >
                Email
              </label>
              <input
                id="portal-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                aria-invalid={!!fieldErrors.email}
                aria-describedby={
                  fieldErrors.email ? "portal-email-error" : undefined
                }
                className={[
                  "w-full px-3.5 py-3 text-sm text-[#111110] bg-white border rounded-[4px] outline-none transition-colors duration-150",
                  "focus:ring-2 focus:ring-[#C41230]/20 focus:border-[#C41230]",
                  "placeholder:text-[#B0ADA8]",
                  fieldErrors.email ? "border-[#C41230]" : "border-[#D9D6D0]",
                  isLoading ? "opacity-60 cursor-not-allowed" : "",
                ].join(" ")}
                placeholder="you@company.com"
              />
              {fieldErrors.email && (
                <p
                  id="portal-email-error"
                  className="mt-1.5 text-xs text-[#C41230]"
                >
                  {fieldErrors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="portal-password"
                className="block text-[13px] font-medium text-[#3A3A3A] mb-1.5"
              >
                Password
              </label>
              <input
                id="portal-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                aria-invalid={!!fieldErrors.password}
                aria-describedby={
                  fieldErrors.password ? "portal-password-error" : undefined
                }
                className={[
                  "w-full px-3.5 py-3 text-sm text-[#111110] bg-white border rounded-[4px] outline-none transition-colors duration-150",
                  "focus:ring-2 focus:ring-[#C41230]/20 focus:border-[#C41230]",
                  fieldErrors.password
                    ? "border-[#C41230]"
                    : "border-[#D9D6D0]",
                  isLoading ? "opacity-60 cursor-not-allowed" : "",
                ].join(" ")}
              />
              {fieldErrors.password && (
                <p
                  id="portal-password-error"
                  className="mt-1.5 text-xs text-[#C41230]"
                >
                  {fieldErrors.password}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className={[
                "w-full py-3 text-sm font-medium bg-[#C41230] text-white rounded-[4px] transition-colors duration-150 min-h-[44px]",
                isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-[#A50F28]",
              ].join(" ")}
            >
              {isLoading ? "Signing you in…" : "Sign in"}
            </button>
          </form>

          {/* Separator */}
          <div className="mt-8 pt-6 border-t border-[#E5E5E0] flex flex-col gap-4">
            <p className="text-xs text-[#9B9B97] leading-relaxed">
              Not yet a customer?{" "}
              <Link
                to="/contact"
                className="text-[#6B6B67] hover:text-[#111110] underline underline-offset-2 transition-colors"
              >
                Contact Ricoz
              </Link>{" "}
              to discuss how we can help your organisation.
            </p>
            {/* Prototype hint */}
            <div className="border border-[#E5E5E0] rounded-[4px] bg-[#FAFAF8] px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B97] mb-2">
                Prototype — Demo Accounts
              </p>
              <p className="text-xs text-[#6B6B67] mb-2 leading-relaxed">
                Sign in with any of the demo emails below and any password to
                explore the portal with real data.
              </p>
              <ul className="flex flex-col gap-1">
                {[
                  "alex.morgan@example.org",
                  "sam.okafor@horisontech.io",
                  "priya.sharma@novaharbor.com",
                ].map((email) => (
                  <li key={email}>
                    <button
                      type="button"
                      onClick={() => setEmail(email)}
                      className="text-xs text-[#C41230] hover:text-[#A50F28] font-medium transition-colors"
                    >
                      {email}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
