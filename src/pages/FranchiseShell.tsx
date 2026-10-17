import { Outlet, ScrollRestoration } from "react-router"

export default function FranchiseShell() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}
