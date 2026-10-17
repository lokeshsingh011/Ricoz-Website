import { useState } from "react"
import { Outlet, ScrollRestoration } from "react-router"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Search from "@/components/Search"

export default function Root() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollRestoration />
      <Search isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <main id="main-content" className="flex-1 pt-12 sm:pt-14 lg:pt-[60px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
