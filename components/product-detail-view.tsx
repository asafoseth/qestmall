"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

const productData = {
  1: {
    name: "iPhone 15 Pro",
    price: 999,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 1250,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    badge: "Best Seller",
    inStock: true,
    description:
      "The iPhone 15 Pro represents the pinnacle of smartphone technology, featuring the revolutionary A17 Pro chip built on 3-nanometer technology.",
    specifications: {
      Display: "6.1-inch Super Retina XDR display",
      Chip: "A17 Pro chip with 6-core CPU",
      Camera: "48MP Main camera with f/1.78 aperture",
      Battery: "Up to 23 hours video playback",
      Storage: "128GB, 256GB, 512GB, 1TB",
      Colors: "Natural Titanium, Blue Titanium, White Titanium, Black Titanium",
    },
  },
  // Add more products as needed
}

interface ProductDetailViewProps {
  productId: string
}

export function ProductDetailView({ productId }: ProductDetailViewProps) {
  const router = useRouter()
  const [currentImage, setCurrentImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Natural Titanium")
  const [selectedStorage, setSelectedStorage] = useState("128GB")

  // Get product data or use default
  const product = productData[productId as keyof typeof productData] || productData[1]

  const handleAddToCart = () => {
    // Add to cart logic
    console.log("Added to cart:", { product: product.name, quantity, color: selectedColor, storage: selectedStorage })
    router.push("/cart")
  }

  const handleBuyNow = () => {
    // Add to cart and redirect to checkout
    console.log("Buy now:", { product: product.name, quantity, color: selectedColor, storage: selectedStorage })
    router.push("/checkout")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Button>

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <span>Home</span> / <span>Mobile Phones</span> / <span>Smartphones</span> /{" "}
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative">
            <Image
              src={product.images[currentImage] || "/placeholder.svg"}
              alt="Product"
              width={500}
              height={500}
              className="w-full h-96 object-contain bg-white rounded-lg border"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={() => setCurrentImage(Math.max(0, currentImage - 1))}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={() => setCurrentImage(Math.min(product.images.length - 1, currentImage + 1))}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden ${
                  currentImage === index ? "border-[#1E5B54]" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Product ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain bg-white"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2 bg-[#1E5B54]">{product.badge}</Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  ({product.rating}) {product.reviews} reviews
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-[#1E5B54]">${product.price}</span>
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              <Badge variant="destructive">23% OFF</Badge>
            </div>
            <p className="text-sm text-gray-600">Inclusive of all taxes</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex gap-2">
                {["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"].map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Storage</h3>
              <div className="flex gap-2">
                {["128GB", "256GB", "512GB", "1TB"].map((storage) => (
                  <Button
                    key={storage}
                    variant={selectedStorage === storage ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedStorage(storage)}
                  >
                    {storage}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Quantity</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1 bg-[#1E5B54] hover:bg-[#1E5B54]/90" onClick={handleAddToCart}>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1 bg-transparent" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </div>

          <div className="flex gap-4">
            <Button size="lg" variant="outline">
              <Heart className="w-5 h-5 mr-2" />
              Wishlist
            </Button>
            <Button size="lg" variant="outline">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <Truck className="w-6 h-6 mx-auto mb-2 text-[#1E5B54]" />
              <p className="text-sm font-medium">Free Delivery</p>
              <p className="text-xs text-gray-600">On orders over $50</p>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 mx-auto mb-2 text-[#1E5B54]" />
              <p className="text-sm font-medium">2 Year Warranty</p>
              <p className="text-xs text-gray-600">Official warranty</p>
            </div>
            <div className="text-center">
              <RotateCcw className="w-6 h-6 mx-auto mb-2 text-[#1E5B54]" />
              <p className="text-sm font-medium">Easy Returns</p>
              <p className="text-xs text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Product Description</h3>
              <p className="text-gray-700">{product.description}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Technical Specifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="font-medium">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-medium">John D.</span>
                    <span className="text-sm text-gray-600">Verified Purchase</span>
                  </div>
                  <p className="text-gray-700">
                    "Absolutely love this phone! The camera quality is incredible and the titanium build feels premium."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
