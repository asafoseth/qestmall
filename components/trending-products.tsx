import { TrendingUp, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const trendingProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199,
    rating: 4.9,
    reviews: 2340,
    image: "/placeholder.svg?height=150&width=150",
    trend: "+15%",
    badge: "Hot",
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    price: 1999,
    rating: 4.8,
    reviews: 1890,
    image: "/placeholder.svg?height=150&width=150",
    trend: "+12%",
    badge: "New",
  },
  {
    id: 3,
    name: "Tesla Model Y Charger",
    price: 399,
    rating: 4.7,
    reviews: 567,
    image: "/placeholder.svg?height=150&width=150",
    trend: "+8%",
    badge: "Trending",
  },
  {
    id: 4,
    name: "Meta Quest 3",
    price: 499,
    rating: 4.6,
    reviews: 1234,
    image: "/placeholder.svg?height=150&width=150",
    trend: "+22%",
    badge: "Hot",
  },
]

export function TrendingProducts() {
  return (
    <div className="bg-white">
      <Card className="h-full">
        <CardHeader className="bg-green-50 border-b">
          <CardTitle className="text-lg font-bold text-green-600 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Trending Now
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          {trendingProducts.map((product, index) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="flex gap-3 p-3 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-sm font-bold text-gray-600">
                {index + 1}
              </div>

              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain bg-gray-50 rounded"
                />
                <Badge
                  className={`absolute -top-2 -right-2 text-xs ${
                    product.badge === "Hot" ? "bg-red-500" : product.badge === "New" ? "bg-blue-500" : "bg-green-500"
                  }`}
                >
                  {product.badge}
                </Badge>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>

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

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-bold text-[#1E5B54]">${product.price}</div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-600 font-medium">{product.trend}</span>
                    </div>
                  </div>

                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}

          <Button variant="outline" className="w-full mt-4 bg-transparent">
            View All Trending
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
