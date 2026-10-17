import { Outlet, ScrollRestoration } from "react-router"
import { PortalAuthProvider } from "@/auth/PortalAuthContext"

export default function PortalRoot() {
  return (
    <PortalAuthProvider>
      <ScrollRestoration />
      <Outlet />
    </PortalAuthProvider>
  )
}
