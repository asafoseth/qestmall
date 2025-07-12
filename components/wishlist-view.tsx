"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Heart, ShoppingCart, Trash2, Star, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const initialWishlistItems = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 1250,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    originalPrice: 1399,
    rating: 4.7,
    reviews: 890,
    image: "/placeholder.svg?height=200&width=200",
    badge: "New",
    inStock: true,
  },
  {
    id: 3,
    name: "MacBook Pro 16-inch M3",
    price: 2399,
    originalPrice: 2599,
    rating: 4.9,
    reviews: 650,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Limited Offer",
    inStock: false,
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 349,
    originalPrice: 399,
    rating: 4.6,
    reviews: 1200,
    image: "/placeholder.svg?height=200&width=200",
    badge: "",
    inStock: true,
  },
]

export function WishlistView() {
  const router = useRouter()
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems)

  const removeFromWishlist = (id: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
  }

  const addToCart = (id: number) => {
    const item = wishlistItems.find((item) => item.id === id)
    if (item) {
      console.log("Added to cart:", item.name)
      // Add to cart logic here
      router.push("/cart")
    }
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center py-16">
        <Heart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h2>
        <p className="text-gray-600 mb-6">Save items you love for later</p>
        <Button onClick={() => router.push("/")} className="bg-[#1E5B54] hover:bg-[#1E5B54]/90">
          Continue Shopping
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
        <span className="text-gray-600">({wishlistItems.length} items)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="relative mb-3">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="w-full h-40 object-contain"
                />
                {item.badge && <Badge className="absolute top-2 left-2 bg-[#1E5B54]">{item.badge}</Badge>}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-white hover:bg-gray-100"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <h3 className="font-medium text-sm mb-2 line-clamp-2 min-h-[2.5rem]">{item.name}</h3>

              <div className="flex items-center gap-1 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(item.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-600">({item.reviews})</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#1E5B54]">GH₵{item.price}</span>
                  {item.originalPrice > item.price && (
                    <span className="text-sm text-gray-500 line-through">GH₵{item.originalPrice}</span>
                  )}
                </div>

                <Button
                  className="w-full bg-[#1E5B54] hover:bg-[#1E5B54]/90"
                  disabled={!item.inStock}
                  onClick={() => addToCart(item.id)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {item.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" onClick={() => router.push("/")} className="bg-transparent">
          Continue Shopping
        </Button>
      </div>
    </div>
  )
}
