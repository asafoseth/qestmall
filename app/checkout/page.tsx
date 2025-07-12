"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutView } from "@/components/checkout-view"

export default function CheckoutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <CheckoutView />
      </main>
      <Footer />
    </div>
  )
}
