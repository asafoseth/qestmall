"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { ProductDetailView } from "@/components/product-detail-view"
import { Footer } from "@/components/footer"

export default function ProductDetailPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const params = useParams()
  const productId = params.id as string

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(true)} />

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-[256px_1fr] lg:gap-0">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="bg-white">
          <ProductDetailView productId={productId} />
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="flex-1">
            <ProductDetailView productId={productId} />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}
