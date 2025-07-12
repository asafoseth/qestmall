import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const productAds = [
  {
    id: 1,
    title: "Gaming Laptops",
    subtitle: "Up to 30% Off",
    description: "High-performance gaming laptops for every budget",
    image: "/placeholder.svg?height=200&width=300",
    bgGradient: "from-purple-600 to-blue-600",
    textColor: "text-white",
    badge: "Limited Time",
    cta: "Shop Gaming",
  },
  {
    id: 2,
    title: "Smart Watches",
    subtitle: "Starting at $199",
    description: "Track your fitness and stay connected",
    image: "/placeholder.svg?height=200&width=300",
    bgGradient: "from-green-500 to-teal-600",
    textColor: "text-white",
    badge: "New Arrivals",
    cta: "Explore Watches",
  },
  {
    id: 3,
    title: "Wireless Earbuds",
    subtitle: "Premium Sound",
    description: "Crystal clear audio with noise cancellation",
    image: "/placeholder.svg?height=200&width=300",
    bgGradient: "from-orange-500 to-red-600",
    textColor: "text-white",
    badge: "Best Sellers",
    cta: "Shop Audio",
  },
  {
    id: 4,
    title: "4K Monitors",
    subtitle: "Professional Grade",
    description: "Ultra-sharp displays for work and gaming",
    image: "/placeholder.svg?height=200&width=300",
    bgGradient: "from-indigo-600 to-purple-700",
    textColor: "text-white",
    badge: "Pro Series",
    cta: "View Monitors",
  },
]

export function ProductAds() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productAds.map((ad) => (
            <Card
              key={ad.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${ad.bgGradient} relative h-48`}>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/20 text-white border-white/30">{ad.badge}</Badge>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className={`text-xl font-bold ${ad.textColor} mb-1`}>{ad.title}</h3>
                    <p className={`text-lg font-semibold ${ad.textColor} opacity-90 mb-1`}>{ad.subtitle}</p>
                    <p className={`text-sm ${ad.textColor} opacity-80 mb-3`}>{ad.description}</p>
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                    >
                      {ad.cta}
                    </Button>
                  </div>

                  <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                    <Image
                      src={ad.image || "/placeholder.svg"}
                      alt={ad.title}
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
