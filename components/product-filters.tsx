"use client"

import { useState } from "react"
import { ChevronDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const brands = [
  { name: "Apple", count: 245 },
  { name: "Samsung", count: 189 },
  { name: "Sony", count: 156 },
  { name: "LG", count: 134 },
  { name: "Canon", count: 98 },
  { name: "Bose", count: 87 },
]

const categories = [
  { name: "Smartphones", count: 456 },
  { name: "Laptops", count: 234 },
  { name: "Headphones", count: 189 },
  { name: "Cameras", count: 145 },
  { name: "Gaming", count: 123 },
  { name: "Smart Home", count: 98 },
]

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  return (
    <div className="hidden lg:block w-64 p-4 bg-white border-r">
      <div className="space-y-6">
        {/* Price Range */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Price Range</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Slider value={priceRange} onValueChange={setPriceRange} max={5000} step={50} className="w-full" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <h3 className="font-semibold">Categories</h3>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center space-x-2">
                <Checkbox
                  id={category.name}
                  checked={selectedCategories.includes(category.name)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedCategories([...selectedCategories, category.name])
                    } else {
                      setSelectedCategories(selectedCategories.filter((c) => c !== category.name))
                    }
                  }}
                />
                <label
                  htmlFor={category.name}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer"
                >
                  {category.name} ({category.count})
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Brands */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <h3 className="font-semibold">Brands</h3>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center space-x-2">
                <Checkbox
                  id={brand.name}
                  checked={selectedBrands.includes(brand.name)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedBrands([...selectedBrands, brand.name])
                    } else {
                      setSelectedBrands(selectedBrands.filter((b) => b !== brand.name))
                    }
                  }}
                />
                <label
                  htmlFor={brand.name}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer"
                >
                  {brand.name} ({brand.count})
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Rating */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <h3 className="font-semibold">Customer Rating</h3>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox id={`rating-${rating}`} />
                <label
                  htmlFor={`rating-${rating}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer flex items-center gap-1"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  & Up
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Clear Filters */}
        <Button variant="outline" className="w-full bg-transparent">
          Clear All Filters
        </Button>
      </div>
    </div>
  )
}
