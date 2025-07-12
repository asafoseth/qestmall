"use client"

import { useState, useEffect } from "react"
import { Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const flashDeals = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    originalPrice: 1299,
    salePrice: 999,
    discount: 23,
    image: "/placeholder.svg?height=200&width=200",
    stock: 15,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    originalPrice: 899,
    salePrice: 699,
    discount: 22,
    image: "/placeholder.svg?height=200&width=200",
    stock: 8,
  },
  {
    id: 3,
    name: "MacBook Air M3",
    originalPrice: 1199,
    salePrice: 999,
    discount: 17,
    image: "/placeholder.svg?height=200&width=200",
    stock: 5,
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    originalPrice: 399,
    salePrice: 299,
    discount: 25,
    image: "/placeholder.svg?height=200&width=200",
    stock: 12,
  },
  {
    id: 5,
    name: "iPad Pro 12.9",
    originalPrice: 1099,
    salePrice: 899,
    discount: 18,
    image: "/placeholder.svg?height=200&width=200",
    stock: 7,
  },
]

export function FlashDeals() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-8 px-4 bg-red-50">
      <div className="max-w-none mx-auto lg:max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-800">Flash Deals</h2>
            <div className="flex items-center gap-2 text-red-600">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">
                {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {flashDeals.map((deal) => (
            <Link key={deal.id} href={`/product/${deal.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <Image
                      src={deal.image || "/placeholder.svg"}
                      alt={deal.name}
                      width={200}
                      height={200}
                      className="w-full h-32 object-contain"
                    />
                    <Badge className="absolute top-2 left-2 bg-red-500">-{deal.discount}%</Badge>
                  </div>
                  <h3 className="font-medium text-sm mb-2 line-clamp-2">{deal.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-red-600">${deal.salePrice}</span>
                      <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
                    </div>
                    <div className="text-xs text-gray-600">Only {deal.stock} left in stock</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${Math.max(20, (20 - deal.stock) * 4)}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
