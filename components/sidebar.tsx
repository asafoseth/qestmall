"use client"

import { X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const categories = [
  {
    name: "Mobile Phones & Accessories",
    subcategories: ["Smartphones", "Phone Cases", "Chargers", "Screen Protectors"],
  },
  {
    name: "Computers & Accessories",
    subcategories: ["Laptops", "Desktops", "Keyboards", "Mice", "Monitors"],
  },
  {
    name: "Tablets & eReaders",
    subcategories: ["Android Tablets", "iPads", "E-readers", "Tablet Accessories"],
  },
  {
    name: "Televisions & Home Entertainment",
    subcategories: ["Smart TVs", "LED TVs", "Projectors", "Streaming Devices"],
  },
  {
    name: "Gaming",
    subcategories: ["PlayStation", "Xbox", "Nintendo", "Gaming Accessories"],
  },
  {
    name: "Audio & Sound Systems",
    subcategories: ["Headphones", "Speakers", "Soundbars", "Microphones"],
  },
  {
    name: "Cameras & Photography",
    subcategories: ["Digital Cameras", "Action Cameras", "Camera Lenses", "Tripods"],
  },
  {
    name: "Smart Home Devices",
    subcategories: ["Smart Speakers", "Security Cameras", "Smart Lights", "Thermostats"],
  },
  {
    name: "Wearable Technology",
    subcategories: ["Smartwatches", "Fitness Trackers", "VR Headsets"],
  },
  {
    name: "Networking & Internet",
    subcategories: ["Routers", "Modems", "WiFi Extenders", "Network Cables"],
  },
  {
    name: "Office Electronics",
    subcategories: ["Printers", "Scanners", "Calculators", "Shredders"],
  },
  {
    name: "Power & Energy",
    subcategories: ["Power Banks", "UPS Systems", "Solar Panels", "Batteries"],
  },
  {
    name: "Car Electronics",
    subcategories: ["Car Audio", "GPS Navigation", "Dash Cams", "Car Chargers"],
  },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-[120px] left-0 h-[calc(100vh-120px)] w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto
          lg:relative lg:top-0 lg:h-auto lg:transform-none lg:shadow-none lg:border-r lg:w-64 lg:flex-shrink-0 lg:self-start
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b lg:hidden">
          <h2 className="font-semibold text-lg">Categories</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="hidden lg:block p-4 border-b bg-[#1E5B54] text-white">
          <h2 className="font-semibold text-lg">Shop by Category</h2>
        </div>

        <div className="p-2 pb-4">
          {categories.map((category, index) => (
            <div key={index} className="mb-1">
              <Button
                variant="ghost"
                className="w-full justify-between text-left p-3 hover:bg-gray-100 rounded-lg text-xs"
              >
                <span className="font-medium">{category.name}</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </aside>
    </>
  )
}
