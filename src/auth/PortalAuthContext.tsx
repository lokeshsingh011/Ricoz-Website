/**
 * Customer Portal authentication — prototype mode.
 *
 * Completely separate from the admin AuthContext.
 * Looks up the signing-in email against existing demo customer records.
 * Replacement point: demoPortalLogin → real customer auth API.
 * Session: stored in sessionStorage (survives page refresh, cleared on tab close).
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react"
import {
  demoCustomers,
  demoEnquiries,
  demoConsultations,
} from "@/data/admin/demoData"
import type {
  Enquiry,
  ConsultationRecord,
  CustomerRelationship,
} from "@/data/admin/types"

// ─── Types ────────────────────────────────────────────────────────────────────

export type PortalAuthStatus = "unauthenticated" | "authenticating" | "authenticated"

export interface PortalUser {
  email: string
  displayName: string
  company?: string
  customerId?: string
}

export interface PortalAuthState {
  status: PortalAuthStatus
  user: PortalUser | null
  error: string | null
  /** Enquiries belonging to the authenticated customer (empty for unknown emails) */
  enquiries: Enquiry[]
  /** Consultations belonging to the authenticated customer (empty for unknown emails) */
  consultations: ConsultationRecord[]
  /** Full customer record when email matches existing demo data */
  customerRecord: CustomerRelationship | null
}

export interface PortalAuthActions {
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export type PortalAuthContextValue = PortalAuthState & PortalAuthActions

// ─── Session persistence (prototype — stores only non-sensitive profile) ──────

const SESSION_KEY = "ricoz_portal_session_prototype"

interface SessionData {
  user: PortalUser
}

function readSession(): PortalUser | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const data = JSON.parse(raw) as SessionData
    return data.user
  } catch {
    return null
  }
}

function writeSession(user: PortalUser | null) {
  if (user) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ user }))
  } else {
    sessionStorage.removeItem(SESSION_KEY)
  }
}

// ─── Customer data lookup ─────────────────────────────────────────────────────

function resolveCustomerData(
  email: string,
): {
  user: PortalUser
  enquiries: Enquiry[]
  consultations: ConsultationRecord[]
  customerRecord: CustomerRelationship | null
} {
  const normalised = email.trim().toLowerCase()
  const customerRecord =
    demoCustomers.find((c) => c.email.toLowerCase() === normalised) ?? null

  const enquiries = customerRecord
    ? demoEnquiries.filter((e) => customerRecord.enquiryIds.includes(e.id))
    : []

  const consultations = customerRecord
    ? demoConsultations.filter((c) =>
        customerRecord.consultationIds.includes(c.id),
      )
    : []

  const user: PortalUser = customerRecord
    ? {
        email: customerRecord.email,
        displayName: customerRecord.name,
        company: customerRecord.company,
        customerId: customerRecord.id,
      }
    : {
        email,
        displayName: email
          .split("@")[0]
          .replace(/[._-]/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      }

  return { user, enquiries, consultations, customerRecord }
}

// ─── Demo auth adapter (PROTOTYPE ONLY — not production security) ─────────────

async function demoPortalLogin(email: string, _password: string) {
  // Simulates a network round-trip.
  await new Promise<void>((r) => setTimeout(r, 700))
  return resolveCustomerData(email)
}

// ─── Context ─────────────────────────────────────────────────────────────────

const PortalAuthContext = createContext<PortalAuthContextValue | null>(null)

export function PortalAuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PortalAuthState>(() => {
    const restored = readSession()
    if (restored) {
      const { enquiries, consultations, customerRecord } = resolveCustomerData(
        restored.email,
      )
      return {
        status: "authenticated",
        user: restored,
        error: null,
        enquiries,
        consultations,
        customerRecord,
      }
    }
    return {
      status: "unauthenticated",
      user: null,
      error: null,
      enquiries: [],
      consultations: [],
      customerRecord: null,
    }
  })

  useEffect(() => {
    writeSession(state.status === "authenticated" ? state.user : null)
  }, [state])

  const login = useCallback(async (email: string, password: string) => {
    if (!email || !password) {
      setState((s) => ({
        ...s,
        error: "Please enter your email and password.",
      }))
      return
    }
    setState((s) => ({ ...s, status: "authenticating", error: null }))
    try {
      const { user, enquiries, consultations, customerRecord } =
        await demoPortalLogin(email, password)
      setState({
        status: "authenticated",
        user,
        error: null,
        enquiries,
        consultations,
        customerRecord,
      })
    } catch {
      setState({
        status: "unauthenticated",
        user: null,
        error: "We couldn't sign you in. Check your details and try again.",
        enquiries: [],
        consultations: [],
        customerRecord: null,
      })
    }
  }, [])

  const logout = useCallback(() => {
    writeSession(null)
    setState({
      status: "unauthenticated",
      user: null,
      error: null,
      enquiries: [],
      consultations: [],
      customerRecord: null,
    })
  }, [])

  return (
    <PortalAuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </PortalAuthContext.Provider>
  )
}

export function usePortalAuth(): PortalAuthContextValue {
  const ctx = useContext(PortalAuthContext)
  if (!ctx)
    throw new Error("usePortalAuth must be used within PortalAuthProvider")
  return ctx
}
