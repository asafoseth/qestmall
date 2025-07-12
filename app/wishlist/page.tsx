"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WishlistView } from "@/components/wishlist-view"

export default function WishlistPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <WishlistView />
      </main>
      <Footer />
    </div>
  )
}
