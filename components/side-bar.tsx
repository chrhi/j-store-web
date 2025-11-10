"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Store,
  Package,
  Tag,
  ShoppingCart,
  BarChart3,
  HelpCircle,
  Settings,
} from "lucide-react"

type LucideIcon = typeof Store

interface MenuItem {
  id: string
  label: string
  icon: LucideIcon
  href: string
}

interface MenuItemProps {
  item: MenuItem
  isActive: boolean
}

export const MainSideBar: React.FC = () => {
  const pathname = usePathname()

  const generalMenuItems: MenuItem[] = [
    {
      id: "point-of-sale",
      label: "Point of sale",
      icon: Store,
      href: "/id",
    },
    { id: "stock", label: "Stock", icon: Package, href: "/id/stock" },
    { id: "sales", label: "Sales", icon: Tag, href: "/id/sales" },
    { id: "buy", label: "Buy", icon: ShoppingCart, href: "/id/buy" },
    { id: "reports", label: "Reports", icon: BarChart3, href: "/id/reports" },
  ]

  const supportMenuItems: MenuItem[] = [
    { id: "help", label: "Help", icon: HelpCircle, href: "/id/help" },
    { id: "settings", label: "Settings", icon: Settings, href: "/id/settings" },
  ]

  // Check if current path matches or is a nested route of the menu item
  const isItemActive = (href: string): boolean => {
    if (pathname === href) return true
    // Check if current path starts with the href (for nested routes)
    return pathname.startsWith(href + "/")
  }

  const MenuItem: React.FC<MenuItemProps> = ({ item, isActive }) => {
    const Icon = item.icon

    return (
      <Link
        href={item.href}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
          isActive
            ? "bg-teal-50 text-teal-600"
            : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        <Icon
          size={20}
          className={isActive ? "text-teal-600" : "text-gray-500"}
        />
        <span
          className={`font-medium ${
            isActive ? "text-teal-600" : "text-gray-700"
          }`}
        >
          {item.label}
        </span>
      </Link>
    )
  }

  return (
    <div className="w-72 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* General Section */}
      <div className="flex-1 px-3 py-6">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">
          General
        </h2>
        <nav className="space-y-1">
          {generalMenuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isActive={isItemActive(item.href)}
            />
          ))}
        </nav>
      </div>

      {/* Support Section */}
      <div className="px-3 py-6 border-t border-gray-200">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">
          Support
        </h2>
        <nav className="space-y-1">
          {supportMenuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isActive={isItemActive(item.href)}
            />
          ))}
        </nav>
      </div>
    </div>
  )
}
