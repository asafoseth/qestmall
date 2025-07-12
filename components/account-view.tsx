"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut, ArrowLeft, Edit, Eye, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const recentOrders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "Delivered",
    total: 1299,
    items: 2,
  },
  {
    id: "ORD-002",
    date: "2024-01-10",
    status: "Shipped",
    total: 599,
    items: 1,
  },
  {
    id: "ORD-003",
    date: "2024-01-05",
    status: "Processing",
    total: 899,
    items: 3,
  },
]

export function AccountView() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shopping
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-[#1E5B54] rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">john.doe@email.com</p>
            </CardHeader>
            <CardContent className="p-0">
              <nav className="space-y-1">
                <Button
                  variant={activeTab === "profile" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="w-4 h-4 mr-3" />
                  Profile
                </Button>
                <Button
                  variant={activeTab === "orders" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("orders")}
                >
                  <Package className="w-4 h-4 mr-3" />
                  Orders
                </Button>
                <Button
                  variant={activeTab === "wishlist" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => router.push("/wishlist")}
                >
                  <Heart className="w-4 h-4 mr-3" />
                  Wishlist
                </Button>
                <Button
                  variant={activeTab === "addresses" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("addresses")}
                >
                  <MapPin className="w-4 h-4 mr-3" />
                  Addresses
                </Button>
                <Button
                  variant={activeTab === "payment" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("payment")}
                >
                  <CreditCard className="w-4 h-4 mr-3" />
                  Payment Methods
                </Button>
                <Button
                  variant={activeTab === "settings" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </Button>
                <Separator className="my-2" />
                <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700">
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign Out
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {activeTab === "profile" && (
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+233 55 822 1761" />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input id="dateOfBirth" type="date" defaultValue="1990-01-01" />
                </div>
                <Button className="bg-[#1E5B54] hover:bg-[#1E5B54]/90">Save Changes</Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "orders" && (
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Package className="w-8 h-8 text-[#1E5B54]" />
                        <div>
                          <h4 className="font-semibold">{order.id}</h4>
                          <p className="text-sm text-gray-600">
                            {order.date} • {order.items} items
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            order.status === "Delivered"
                              ? "default"
                              : order.status === "Shipped"
                                ? "secondary"
                                : "outline"
                          }
                          className={
                            order.status === "Delivered"
                              ? "bg-green-500"
                              : order.status === "Shipped"
                                ? "bg-blue-500"
                                : ""
                          }
                        >
                          {order.status}
                        </Badge>
                        <p className="font-semibold mt-1">GH₵{order.total}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        {order.status === "Shipped" && (
                          <Button size="sm" variant="outline">
                            <Truck className="w-4 h-4 mr-1" />
                            Track
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "addresses" && (
            <Card>
              <CardHeader>
                <CardTitle>Saved Addresses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">Home</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          123 Main Street
                          <br />
                          East Legon, Accra
                          <br />
                          Ghana
                        </p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Add New Address
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "payment" && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-8 h-8 text-[#1E5B54]" />
                        <div>
                          <h4 className="font-semibold">•••• •••• •••• 1234</h4>
                          <p className="text-sm text-gray-600">Expires 12/26</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Add New Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "settings" && (
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Notifications</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      <span className="text-sm">Email notifications for orders</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      <span className="text-sm">SMS notifications for delivery</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span className="text-sm">Marketing emails</span>
                    </label>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Privacy</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      <span className="text-sm">Allow personalized recommendations</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span className="text-sm">Share data for analytics</span>
                    </label>
                  </div>
                </div>
                <Button className="bg-[#1E5B54] hover:bg-[#1E5B54]/90">Save Settings</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
