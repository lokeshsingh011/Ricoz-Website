import { useState, useEffect } from "react"
import { useLocation, Navigate } from "react-router"
import { useAuth } from "@/auth/AuthContext"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function AdminLogin() {
  const { status, login, error } = useAuth()
  const location = useLocation()
  const from =
    (location.state as { from?: { pathname: string } })?.from?.pathname ??
    "/admin"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string
    password?: string
  }>({})

  // Already authenticated — redirect
  if (status === "authenticated") {
    return <Navigate to={from} replace />
  }

  useEffect(() => {
    document.title = "Sign In — Ricoz Admin"
    // noindex
    let meta = document.querySelector<HTMLMetaElement>("meta[name='robots']")
    if (!meta) {
      meta = document.createElement("meta")
      meta.name = "robots"
      document.head.appendChild(meta)
    }
    meta.content = "noindex,nofollow"
    return () => {
      if (meta) meta.content = ""
    }
  }, [])

  function validate(): boolean {
    const errors: typeof fieldErrors = {}
    if (!email.trim()) errors.email = "Email is required"
    else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address"
    if (!password) errors.password = "Password is required"
    setFieldErrors(errors)
    const firstKey = Object.keys(errors)[0]
    if (firstKey)
      setTimeout(() => document.getElementById(`login-${firstKey}`)?.focus(), 0)
    return Object.keys(errors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === "authenticating") return
    if (!validate()) return
    await login(email, password)
  }

  const isLoading = status === "authenticating"

  const inputClass = (hasError: boolean) =>
    [
      "w-full px-3 py-2.5 text-sm bg-background border rounded-[var(--radius)] transition-colors duration-150",
      "placeholder:text-muted-foreground/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
      hasError ? "border-primary" : "border-border hover:border-foreground/20",
    ].join(" ")

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="font-semibold text-lg tracking-[0.1em] uppercase text-foreground mb-1">
            RICOZ
          </p>
          <p className="text-xs text-muted-foreground tracking-wide">
            Operations Console
          </p>
        </div>

        <div className="bg-background border border-border rounded-[var(--radius-md)] p-8">
          <h1 className="text-xl font-display text-foreground mb-1">Sign in</h1>
          <p className="text-xs text-muted-foreground mb-6">
            Access the Ricoz internal operations system.
          </p>

          {/* Auth error */}
          {error && (
            <div
              role="alert"
              aria-live="assertive"
              className="mb-5 flex items-start gap-2.5 p-3 border border-border rounded-[var(--radius)] bg-secondary"
            >
              <span
                className="shrink-0 size-1.5 rounded-full bg-primary mt-1"
                aria-hidden="true"
              />
              <p className="text-sm text-foreground">{error}</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="login-email"
                className="block text-xs font-medium text-foreground mb-1.5"
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass(!!fieldErrors.email)}
                placeholder="you@organisation.com"
                aria-describedby={
                  fieldErrors.email ? "login-email-error" : undefined
                }
                aria-invalid={!!fieldErrors.email}
                disabled={isLoading}
              />
              {fieldErrors.email && (
                <p
                  id="login-email-error"
                  role="alert"
                  className="mt-1 text-xs text-primary"
                >
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="block text-xs font-medium text-foreground mb-1.5"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass(!!fieldErrors.password)}
                placeholder="••••••••"
                aria-describedby={
                  fieldErrors.password ? "login-password-error" : undefined
                }
                aria-invalid={!!fieldErrors.password}
                disabled={isLoading}
              />
              {fieldErrors.password && (
                <p
                  id="login-password-error"
                  role="alert"
                  className="mt-1 text-xs text-primary"
                >
                  {fieldErrors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              aria-disabled={isLoading}
              className="w-full mt-1 bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-[var(--radius)] hover:bg-[#A50F28] transition-colors duration-150 disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {isLoading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        {/* Prototype notice */}
        <div className="mt-5 px-4 py-3 border border-border rounded-[var(--radius)] bg-background">
          <p className="text-[11px] text-muted-foreground text-center">
            <span className="font-semibold text-foreground">
              Prototype mode
            </span>{" "}
            — any valid email and any password are accepted. No real
            authentication is in place.
          </p>
        </div>
      </div>
    </div>
  )
}
