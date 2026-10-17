import { Outlet, ScrollRestoration } from "react-router"
import ProtectedRoute from "@/components/admin/ProtectedRoute"
import AdminShell from "@/components/admin/AdminShell"

export default function AdminRoot() {
  return (
    <ProtectedRoute>
      <ScrollRestoration />
      <AdminShell>
        <Outlet />
      </AdminShell>
    </ProtectedRoute>
  )
}
