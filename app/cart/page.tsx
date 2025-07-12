"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartView } from "@/components/cart-view"

export default function CartPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <CartView />
      </main>
      <Footer />
    </div>
  )
}
