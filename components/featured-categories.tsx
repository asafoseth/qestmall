import { Smartphone, Monitor, Gamepad2, Headphones, Camera, Home, Watch, Car } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { name: "Mobile Phones", icon: Smartphone, color: "bg-blue-100 text-blue-600" },
  { name: "Computers", icon: Monitor, color: "bg-green-100 text-green-600" },
  { name: "Gaming", icon: Gamepad2, color: "bg-purple-100 text-purple-600" },
  { name: "Audio", icon: Headphones, color: "bg-red-100 text-red-600" },
  { name: "Cameras", icon: Camera, color: "bg-yellow-100 text-yellow-600" },
  { name: "Smart Home", icon: Home, color: "bg-indigo-100 text-indigo-600" },
  { name: "Wearables", icon: Watch, color: "bg-pink-100 text-pink-600" },
  { name: "Car Electronics", icon: Car, color: "bg-orange-100 text-orange-600" },
]

export function FeaturedCategories() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-none mx-auto lg:max-w-7xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <div
                  className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${category.color}`}
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-medium text-gray-800">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
