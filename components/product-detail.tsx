"use client"

import { useState } from "react"
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

const productImages = [
  "/placeholder.svg?height=500&width=500",
  "/placeholder.svg?height=500&width=500",
  "/placeholder.svg?height=500&width=500",
  "/placeholder.svg?height=500&width=500",
]

const relatedProducts = [
  {
    id: 1,
    name: "iPhone 15",
    price: 899,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 799,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Google Pixel 8",
    price: 699,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
  },
  {
    id: 4,
    name: "OnePlus 12",
    price: 649,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.4,
  },
]

export function ProductDetail() {
  const [currentImage, setCurrentImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <span>Home</span> / <span>Mobile Phones</span> / <span>Smartphones</span> /{" "}
        <span className="text-gray-900">iPhone 15 Pro</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative">
            <Image
              src={productImages[currentImage] || "/placeholder.svg"}
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
              onClick={() => setCurrentImage(Math.min(productImages.length - 1, currentImage + 1))}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {productImages.map((image, index) => (
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
            <Badge className="mb-2 bg-[#1E5B54]">Best Seller</Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">iPhone 15 Pro</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                ))}
                <span className="text-sm text-gray-600 ml-2">(4.8) 1,250 reviews</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-[#1E5B54]">$999</span>
              <span className="text-xl text-gray-500 line-through">$1,299</span>
              <Badge variant="destructive">23% OFF</Badge>
            </div>
            <p className="text-sm text-gray-600">Inclusive of all taxes</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex gap-2">
                {["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"].map((color) => (
                  <Button key={color} variant="outline" size="sm">
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Storage</h3>
              <div className="flex gap-2">
                {["128GB", "256GB", "512GB", "1TB"].map((storage) => (
                  <Button key={storage} variant="outline" size="sm">
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
            <Button size="lg" className="flex-1 bg-[#1E5B54] hover:bg-[#1E5B54]/90">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              <Share2 className="w-5 h-5" />
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
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Product Description</h3>
              <div className="prose max-w-none">
                <p className="mb-4">
                  The iPhone 15 Pro represents the pinnacle of smartphone technology, featuring the revolutionary A17
                  Pro chip built on 3-nanometer technology. This powerhouse delivers unprecedented performance and
                  efficiency, making everything from gaming to professional video editing incredibly smooth.
                </p>
                <p className="mb-4">
                  The titanium design is not only beautiful but also incredibly durable, while being lighter than
                  previous stainless steel models. The Action Button replaces the traditional mute switch, offering
                  customizable functionality for your most-used features.
                </p>
                <p>
                  With the advanced camera system featuring a 48MP Main camera, 12MP Ultra Wide, and 12MP Telephoto with
                  3x zoom, you can capture stunning photos and videos in any lighting condition. The Pro camera system
                  also supports ProRAW and ProRes recording for professional-grade content creation.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Display</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>6.1-inch Super Retina XDR display</li>
                    <li>2556×1179 resolution at 460 ppi</li>
                    <li>ProMotion technology with 120Hz refresh rate</li>
                    <li>Always-On display</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Camera</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>48MP Main camera with f/1.78 aperture</li>
                    <li>12MP Ultra Wide camera with f/2.2 aperture</li>
                    <li>12MP Telephoto camera with 3x optical zoom</li>
                    <li>4K video recording at 24, 25, 30, or 60 fps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Performance</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>A17 Pro chip with 6-core CPU</li>
                    <li>6-core GPU with hardware-accelerated ray tracing</li>
                    <li>16-core Neural Engine</li>
                    <li>8GB RAM</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Battery & Charging</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Up to 23 hours video playback</li>
                    <li>MagSafe wireless charging up to 15W</li>
                    <li>Qi wireless charging up to 7.5W</li>
                    <li>USB-C with USB 3 support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Customer Reviews</h3>
              <div className="space-y-6">
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
                    "Absolutely love this phone! The camera quality is incredible and the titanium build feels premium.
                    Battery life easily gets me through a full day of heavy usage."
                  </p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="font-medium">Sarah M.</span>
                    <span className="text-sm text-gray-600">Verified Purchase</span>
                  </div>
                  <p className="text-gray-700">
                    "Great phone overall, but I wish the battery lasted a bit longer. The Action Button is a nice touch
                    and the display is gorgeous."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Shipping Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Delivery Options</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Standard Delivery (3-5 business days) - Free on orders over $50</li>
                    <li>• Express Delivery (1-2 business days) - $15.99</li>
                    <li>• Same Day Delivery (Available in select cities) - $25.99</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Return Policy</h4>
                  <p className="text-sm text-gray-600">
                    30-day return policy. Items must be in original condition with all accessories and packaging.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-32 object-contain mb-3"
                />
                <h3 className="font-medium text-sm mb-2">{product.name}</h3>
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
                  <span className="text-xs text-gray-600">({product.rating})</span>
                </div>
                <div className="font-bold text-[#1E5B54]">${product.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
