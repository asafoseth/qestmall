"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { ComingSoonModal } from "@/components/coming-soon-modal"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCategories } from "@/components/featured-categories"
import { FlashDeals } from "@/components/flash-deals"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { TrendingProducts } from "@/components/trending-products"
import { TopDeals } from "@/components/top-deals"
import { ProductAds } from "@/components/product-ads"
import { SidebarContent } from "@/components/sidebar-content"

export default function HomePage() {
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    // Show coming soon modal on first visit
    const hasVisited = localStorage.getItem("qest-mall-visited")
    if (!hasVisited) {
      setShowComingSoon(true)
      localStorage.setItem("qest-mall-visited", "true")
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(true)} />

      {/* Desktop Layout - Two Column Grid */}
      <div className="hidden lg:grid lg:grid-cols-[auto_1fr] lg:gap-0 lg:items-start">
        <div className="w-64">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <SidebarContent />
        </div>

        <main className="bg-white min-h-screen">
          {/* Hero and Top Deals Side by Side */}
          <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-0 min-h-[500px]">
            <HeroSection />
            <TopDeals />
          </div>

          {/* Rest of the content */}
          <div className="bg-gray-50">
            <FeaturedCategories />
            <ProductAds />
            <FlashDeals />
            <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 px-4 py-8">
              <ProductGrid />
              <TrendingProducts />
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="flex-1">
            <HeroSection />
            <FeaturedCategories />
            <FlashDeals />
            <ProductGrid />
            <TrendingProducts />
          </main>
        </div>
      </div>

      <Footer />
      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </div>
  )
}
