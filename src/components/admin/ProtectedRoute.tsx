import { Navigate, useLocation } from "react-router"
import { useAuth } from "@/auth/AuthContext"
import type { ReactNode } from "react"

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { status } = useAuth()
  const location = useLocation()

  if (status === "unauthenticated") {
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  // While authenticating (e.g. restoring session), render nothing briefly.
  if (status === "authenticating") {
    return null
  }

  return <>{children}</>
}
