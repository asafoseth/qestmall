import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Gift, Truck, Headphones, Star, TrendingUp, Shield, Smartphone, Download } from "lucide-react"
import Image from "next/image"

const quickPromotions = [
  {
    id: 1,
    icon: Zap,
    title: "Flash Sale",
    description: "Up to 70% off",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    textColor: "text-yellow-800",
    borderColor: "border-yellow-200",
  },
  {
    id: 2,
    icon: Gift,
    title: "Free Gift",
    description: "Orders over $200",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    textColor: "text-purple-800",
    borderColor: "border-purple-200",
  },
  {
    id: 3,
    icon: Truck,
    title: "Free Shipping",
    description: "Orders over $50",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    textColor: "text-green-800",
    borderColor: "border-green-200",
  },
]

const featuredBrands = [
  { name: "Apple", logo: "/placeholder.svg?height=40&width=80" },
  { name: "Samsung", logo: "/placeholder.svg?height=40&width=80" },
  { name: "Sony", logo: "/placeholder.svg?height=40&width=80" },
  { name: "LG", logo: "/placeholder.svg?height=40&width=80" },
]

const quickLinks = [
  { name: "Track Your Order", icon: TrendingUp },
  { name: "Customer Support", icon: Headphones },
  { name: "Return Policy", icon: Shield },
  { name: "Mobile App", icon: Smartphone },
]

export function SidebarContent() {
  return (
    <div className="w-64 space-y-4 p-4 bg-gray-50">
      {/* Quick Promotions */}
      <div className="space-y-2">
        {quickPromotions.map((promo) => (
          <Card key={promo.id} className={`${promo.bgColor} ${promo.borderColor} border`}>
            <CardContent className="p-3">
              <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-full bg-white ${promo.iconColor}`}>
                  <promo.icon className="w-3 h-3" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold text-xs ${promo.textColor}`}>{promo.title}</h4>
                  <p className={`text-xs ${promo.textColor} opacity-80`}>{promo.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-br from-[#1E5B54] to-[#2D7A6B] text-white">
        <CardContent className="p-4 text-center">
          <h3 className="font-bold text-sm mb-2">Stay Updated!</h3>
          <p className="text-xs mb-3 opacity-90">Get exclusive deals and new arrivals</p>
          <Button size="sm" className="bg-white text-[#1E5B54] hover:bg-gray-100 w-full text-xs">
            Subscribe Now
          </Button>
        </CardContent>
      </Card>

      {/* Featured Brands */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Featured Brands</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <div className="grid grid-cols-2 gap-2">
            {featuredBrands.map((brand) => (
              <div key={brand.name} className="p-2 border rounded hover:shadow-sm cursor-pointer">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={80}
                  height={40}
                  className="w-full h-6 object-contain"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="p-3 space-y-2">
          {quickLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="sm" className="w-full justify-start text-xs h-8 px-2">
              <link.icon className="w-3 h-3 mr-2" />
              {link.name}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* App Download */}
      <Card>
        <CardContent className="p-4 text-center">
          <Download className="w-8 h-8 mx-auto mb-2 text-[#1E5B54]" />
          <h3 className="font-bold text-sm mb-1">Download Our App</h3>
          <p className="text-xs text-gray-600 mb-3">Shop on the go with exclusive deals</p>
          <div className="space-y-2">
            <Button size="sm" variant="outline" className="w-full text-xs h-7 bg-transparent">
              iOS App Store
            </Button>
            <Button size="sm" variant="outline" className="w-full text-xs h-7 bg-transparent">
              Google Play
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Customer Reviews Highlight */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-3 text-center">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-xs text-blue-800 font-medium mb-1">4.8/5 Customer Rating</p>
          <p className="text-xs text-blue-600">Over 50,000+ Happy Customers</p>
        </CardContent>
      </Card>
    </div>
  )
}
