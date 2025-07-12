"use client"

import { Star, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 1250,
    image: "/placeholder.svg?height=250&width=250",
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 2,
    name: "MacBook Pro 16-inch M3",
    price: 2399,
    originalPrice: 2599,
    rating: 4.9,
    reviews: 890,
    image: "/placeholder.svg?height=250&width=250",
    badge: "New",
    inStock: true,
  },
  {
    id: 3,
    name: "Sony PlayStation 5",
    price: 499,
    originalPrice: 599,
    rating: 4.7,
    reviews: 2100,
    image: "/placeholder.svg?height=250&width=250",
    badge: "Hot Deal",
    inStock: false,
  },
  {
    id: 4,
    name: "Apple AirPods Pro 2nd Gen",
    price: 249,
    originalPrice: 299,
    rating: 4.6,
    reviews: 1800,
    image: "/placeholder.svg?height=250&width=250",
    badge: "",
    inStock: true,
  },
  {
    id: 5,
    name: "LG OLED 65-inch 4K TV",
    price: 1899,
    originalPrice: 2199,
    rating: 4.8,
    reviews: 650,
    image: "/placeholder.svg?height=250&width=250",
    badge: "Limited Offer",
    inStock: true,
  },
  {
    id: 6,
    name: "Canon EOS R6 Mark II",
    price: 2499,
    originalPrice: 2699,
    rating: 4.9,
    reviews: 420,
    image: "/placeholder.svg?height=250&width=250",
    badge: "Professional",
    inStock: true,
  },
]

export function ProductGrid() {
  return (
    <section className="bg-white p-6 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <Button variant="outline">View All Products</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-4">
                <div className="relative mb-3">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="w-full h-40 object-contain"
                  />
                  {product.badge && <Badge className="absolute top-2 left-2 bg-[#1E5B54]">{product.badge}</Badge>}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white hover:bg-gray-100"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <h3 className="font-medium text-sm mb-2 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>

                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({product.reviews})</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#1E5B54]">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>

                  <Button
                    className="w-full bg-[#1E5B54] hover:bg-[#1E5B54]/90"
                    disabled={!product.inStock}
                    onClick={(e) => {
                      e.preventDefault()
                      // Add to cart logic here
                      console.log("Added to cart:", product.name)
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
