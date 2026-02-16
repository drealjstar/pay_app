"use client"

import {
  Home,
  LayoutGrid,
  CreditCard,
  CalendarDays,
  Building2,
  Settings,
  HelpCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: LayoutGrid, label: "Dashboard", active: false },
  { icon: CreditCard, label: "Cards", active: false },
  { icon: CalendarDays, label: "Calendar", active: false },
  { icon: Building2, label: "Banking", active: false },
  { icon: Settings, label: "Settings", active: false },
  { icon: HelpCircle, label: "Help", active: false },
]

export function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <nav
      className="flex flex-row items-center gap-1 rounded-full px-4 py-2 lg:flex-col lg:gap-2 lg:px-2 lg:py-6"
      style={{ background: "hsl(252 56% 42%)" }}
      aria-label="Main navigation"
    >
      {navItems.map((item, i) => {
        const Icon = item.icon
        const isActive = activeIndex === i
        return (
          <button
            key={item.label}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl transition-all lg:h-12 lg:w-12",
              isActive
                ? "bg-white/20 text-white shadow-lg"
                : "text-white/60 hover:bg-white/10 hover:text-white"
            )}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon className="h-5 w-5" />
          </button>
        )
      })}
    </nav>
  )
}
