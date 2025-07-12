"use client"

import { useState } from "react"
import { Search, User, ShoppingCart, Menu, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const [cartCount] = useState(3)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-[#1E5B54] text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              All of Ghana
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Help Center</span>
            <span>Track My Order</span>
            <span>Sell on Qest Mall</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
            <Menu className="w-6 h-6" />
          </Button>

          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="cursor-pointer">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Qest Mall"
                width={120}
                height={40}
                className="h-10 w-auto hover:opacity-80 transition-opacity"
              />
            </a>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for products, brands and categories..."
                className="w-full pl-4 pr-12 py-2 border-2 border-gray-200 rounded-lg focus:border-[#1E5B54]"
              />
              <Button size="sm" className="absolute right-1 top-1 bg-[#1E5B54] hover:bg-[#1E5B54]/90">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex items-center gap-2"
              onClick={() => (window.location.href = "/account")}
            >
              <User className="w-5 h-5" />
              <span className="hidden lg:inline">Account</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex items-center gap-2"
              onClick={() => (window.location.href = "/wishlist")}
            >
              <Heart className="w-5 h-5" />
              <span className="hidden lg:inline">Wishlist</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="relative flex items-center gap-2"
              onClick={() => (window.location.href = "/cart")}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden lg:inline">Cart</span>
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
