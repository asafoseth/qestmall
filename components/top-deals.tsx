import { Star, ShoppingCart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const topDeals = [
  {
    id: 1,
    name: "AirPods Pro 2nd Gen",
    price: 199,
    originalPrice: 249,
    discount: 20,
    rating: 4.8,
    image: "/placeholder.svg?height=120&width=120",
    timeLeft: "2h 15m",
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch 6",
    price: 279,
    originalPrice: 329,
    discount: 15,
    rating: 4.6,
    image: "/placeholder.svg?height=120&width=120",
    timeLeft: "5h 42m",
  },
  {
    id: 3,
    name: "iPad Air 5th Gen",
    price: 499,
    originalPrice: 599,
    discount: 17,
    rating: 4.7,
    image: "/placeholder.svg?height=120&width=120",
    timeLeft: "1h 33m",
  },
  {
    id: 4,
    name: "Sony WH-1000XM4",
    price: 249,
    originalPrice: 349,
    discount: 29,
    rating: 4.9,
    image: "/placeholder.svg?height=120&width=120",
    timeLeft: "3h 18m",
  },
]

export function TopDeals() {
  return (
    <div className="bg-white border-l h-[500px] overflow-y-auto">
      <Card className="h-full border-0 rounded-none">
        <CardHeader className="bg-red-50 border-b">
          <CardTitle className="text-lg font-bold text-red-600 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Today's Top Deals
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          {topDeals.map((deal) => (
            <div key={deal.id} className="flex gap-3 p-3 border rounded-lg hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src={deal.image || "/placeholder.svg"}
                  alt={deal.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain bg-gray-50 rounded"
                />
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-xs">-{deal.discount}%</Badge>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm mb-1 line-clamp-2">{deal.name}</h3>

                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(deal.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({deal.rating})</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-red-600">${deal.price}</span>
                    <span className="text-xs text-gray-500 line-through">${deal.originalPrice}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-red-600 font-medium">Ends in {deal.timeLeft}</span>
                    <Button size="sm" className="h-7 text-xs bg-[#1E5B54] hover:bg-[#1E5B54]/90">
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full mt-4 bg-transparent">
            View All Deals
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
