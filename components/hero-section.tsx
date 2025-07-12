"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Latest Smartphones",
    subtitle: "Up to 50% Off",
    description: "Discover the newest mobile technology with incredible deals",
    image: "/placeholder.svg?height=400&width=600",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "Gaming Paradise",
    subtitle: "PlayStation & Xbox",
    description: "Level up your gaming experience with the latest consoles",
    image: "/placeholder.svg?height=400&width=600",
    cta: "Explore Games",
  },
  {
    id: 3,
    title: "Smart Home Revolution",
    subtitle: "Connected Living",
    description: "Transform your home with intelligent devices and automation",
    image: "/placeholder.svg?height=400&width=600",
    cta: "Get Smart",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden bg-gradient-to-r from-[#1E5B54] to-[#2D7A6B]">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center h-full px-6 lg:px-8">
              <div className="flex-1 text-white max-w-lg">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-4 text-yellow-300">
                  {slide.subtitle}
                </p>
                <p className="text-sm md:text-base mb-4 md:mb-6 opacity-90 max-w-md">{slide.description}</p>
                <Button size="lg" className="bg-white text-[#1E5B54] hover:bg-gray-100 font-semibold">
                  {slide.cta}
                </Button>
              </div>
              <div className="hidden lg:block flex-1 max-w-md">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
