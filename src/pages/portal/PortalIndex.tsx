import { Navigate } from "react-router"
import { usePortalAuth } from "@/auth/PortalAuthContext"
import { useNoIndex } from "@/lib/seo"

export default function PortalIndex() {
  useNoIndex()
  const { status } = usePortalAuth()
  if (status === "authenticated")
    return <Navigate to="/portal/dashboard" replace />
  return <Navigate to="/portal/login" replace />
}
