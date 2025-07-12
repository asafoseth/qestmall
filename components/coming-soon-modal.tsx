"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email subscription
    console.log("Email submitted:", email)
    setEmail("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-[100] flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto relative">
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10" onClick={onClose}>
          <X className="w-6 h-6" />
        </Button>

        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-[#1E5B54] mb-2">Qest Mall</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">We're Launching Soon!</h2>
            <p className="text-lg text-gray-600 mb-8">Get Ready for the Ultimate Electronics Shopping Experience!</p>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-[#1E5B54] text-white p-4 rounded-lg">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-[#1E5B54] text-white p-4 rounded-lg">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-[#1E5B54] text-white p-4 rounded-lg">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-[#1E5B54] text-white p-4 rounded-lg">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <p className="text-gray-600 mb-4">Be the first to know when we launch! Get exclusive deals and updates.</p>
            <form onSubmit={handleEmailSubmit} className="flex gap-2">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
              <Button type="submit" className="bg-[#1E5B54] hover:bg-[#1E5B54]/90">
                Notify Me
              </Button>
            </form>
          </div>

          <div className="mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={onClose}
              className="text-[#1E5B54] border-[#1E5B54] hover:bg-[#1E5B54] hover:text-white bg-transparent"
            >
              Continue Browsing
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
