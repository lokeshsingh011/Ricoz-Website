/**
 * Authentication architecture shell — prototype mode.
 *
 * This module establishes the auth state contract that all Admin modules consume.
 * The DemoAuthAdapter below is a placeholder. Replace it with a real auth service
 * (JWT, session cookie, OAuth) without changing the AuthProvider or useAuth hook.
 *
 * Replacement point:
 *   DemoAuthAdapter  →  RealAuthService
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react"

// ─── Auth types ───────────────────────────────────────────────────────────────

export type AuthStatus = "unauthenticated" | "authenticating" | "authenticated"

export interface AuthUser {
  email: string
  displayName: string
}

export interface AuthState {
  status: AuthStatus
  user: AuthUser | null
  error: string | null
}

export interface AuthActions {
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export type AuthContextValue = AuthState & AuthActions

// ─── Demo auth adapter (PROTOTYPE ONLY — not production security) ─────────────

async function demoLogin(email: string, _password: string): Promise<AuthUser> {
  // Simulates a network round-trip. Replace with a real API call.
  await new Promise<void>((r) => setTimeout(r, 800))
  // Demo: any valid email + any non-empty password is accepted.
  // This is not a real credential check.
  return {
    email,
    displayName: email
      .split("@")[0]
      .replace(/[._-]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()),
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    status: "unauthenticated",
    user: null,
    error: null,
  })

  const login = useCallback(async (email: string, password: string) => {
    setState((s) => ({ ...s, status: "authenticating", error: null }))
    try {
      const user = await demoLogin(email, password)
      setState({ status: "authenticated", user, error: null })
    } catch {
      setState({
        status: "unauthenticated",
        user: null,
        error: "Sign in failed. Please try again.",
      })
    }
  }, [])

  const logout = useCallback(() => {
    setState({ status: "unauthenticated", user: null, error: null })
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
