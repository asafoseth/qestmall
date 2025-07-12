import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const promotionalBanners = [
  {
    id: 1,
    title: "Gaming Week",
    subtitle: "Up to 40% Off Gaming Gear",
    image: "/placeholder.svg?height=200&width=400",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
  },
  {
    id: 2,
    title: "Smart Home Sale",
    subtitle: "Transform Your Home",
    image: "/placeholder.svg?height=200&width=400",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
]

export function PromotionalBanners() {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="max-w-none mx-auto lg:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {promotionalBanners.map((banner) => (
            <Card
              key={banner.id}
              className={`${banner.bgColor} border-0 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer`}
            >
              <CardContent className="p-0">
                <div className="flex items-center h-32">
                  <div className="flex-1 p-6">
                    <h3 className={`text-xl font-bold ${banner.textColor} mb-2`}>{banner.title}</h3>
                    <p className={`text-sm ${banner.textColor} opacity-80 mb-4`}>{banner.subtitle}</p>
                    <Button size="sm" className="bg-white text-gray-800 hover:bg-gray-100">
                      Shop Now
                    </Button>
                  </div>
                  <div className="flex-1 h-full">
                    <Image
                      src={banner.image || "/placeholder.svg"}
                      alt={banner.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
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
