"use client"

import {
  MessageSquare,
  Bell,
  ChevronDown,
  Copy,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3">
      <h1 className="font-display text-xl font-bold text-foreground md:text-2xl">
        Good Evening Mikey!
      </h1>
      <div className="flex items-center gap-2 md:gap-3">
        <div className="hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground sm:flex md:px-4">
          <span>Personal Account</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
        <button
          className="hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:bg-muted sm:flex"
          aria-label="Copy"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
