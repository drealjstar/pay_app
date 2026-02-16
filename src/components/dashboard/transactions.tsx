"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Camera,
  GraduationCap,
  ArrowUp,
  ArrowDown,
} from "lucide-react"

const transactions = [
  {
    icon: ShoppingBag,
    iconBg: "hsl(252 56% 50%)",
    title: "Online Shopping",
    subtitle: "Departmental Store",
    amount: "-3,100",
    isExpense: true,
  },
  {
    icon: Camera,
    iconBg: "hsl(340 60% 55%)",
    title: "Instagram Affiliates",
    subtitle: "Content Creator Earning",
    amount: "+210,000",
    isExpense: false,
  },
  {
    icon: GraduationCap,
    iconBg: "hsl(252 56% 42%)",
    title: "College Fee",
    subtitle: "Personal Expenses",
    amount: "-11,390",
    isExpense: true,
  },
]

export function Transactions() {
  const [toggledStates, setToggledStates] = useState<Record<string, boolean>>({})
  return (
    <section className="min-w-0 flex-1">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-bold text-foreground md:text-xl">
          All Transactions
        </h2>
        <div className="flex gap-2">
          <button
            className="flex items-center justify-center "
            aria-label="Previous transactions"
          >
            <ArrowLeft className="h-4 w-4"/>
          </button>
          <button
            className="flex h-8 w-8 items-center "
            aria-label="Next transactions"
          >
            <ArrowRight className="h-4 w-4"/>
          </button>
        </div>
      </div>

      <p
        className="mt-3 text-sm font-medium"
        style={{ color: "hsl(252 56% 57%)" }}
      >
        This Week Summary
      </p>

      <div className="mt-2 flex justify-between flex-wrap items-center gap-3 md:gap-4">
        <div className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full"
            style={{ background: "hsl(252 56% 50%)" }}
          >
            <span className="text-xs font-bold text-white">P</span>
          </div>
          <span className="text-xl font-bold text-foreground md:text-2xl">
            113,650{" "}
            <span className="text-sm font-normal text-muted-foreground">
              PKR
            </span>
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <ArrowUp className="h-4 w-4" style={{ color: "hsl(145 60% 45%)" }} />
          <span style={{ color: "hsl(145 60% 45%)" }}>24,000</span>
          <span className="text-muted-foreground">PKR</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <ArrowDown className="h-4 w-4" style={{ color: "hsl(0 70% 55%)" }} />
          <span style={{ color: "hsl(0 70% 55%)" }}>5,334</span>
          <span className="text-muted-foreground">PKR</span>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {transactions.map((tx) => {
          const Icon = tx.icon
          const isToggled = toggledStates[tx.title] || false
          const toggleTransaction = () => {
            setToggledStates((prev) => ({
              ...prev,
              [tx.title]: !prev[tx.title],
            }))
          }
          return (
            <div
              key={tx.title}
              className="flex items-center gap-3 rounded-2xl border-[#d4d1e0] hover:border bg-[#ffffffb3] hover:bg-white border-dashed p-3 md:gap-4 md:p-4 hover:shadow-lg hover:shadow-gray-400">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm md:h-14 md:w-14"
                style={{ background: tx.iconBg }}
              >
                <Icon className="h-5 w-5 text-white md:h-6 md:w-6" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground md:text-base">
                  {tx.title}
                </p>
                <p className="truncate text-xs text-muted-foreground">{tx.subtitle}</p>
              </div>

              <span className="shrink-0 text-sm font-bold text-foreground md:text-base">
                {tx.amount}{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  PKR
                </span>
              </span>

              <button
                onClick={toggleTransaction}
                className="relative h-7 w-12 shrink-0 rounded-full transition-colors md:h-8 md:w-14"
                style={{
                  background: isToggled
                    ? "hsl(252 56% 50%)"
                    : "hsl(252 30% 72%)",
                }}
                aria-label={`Toggle ${tx.title}`}
              >
                <span
                  className="absolute top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transition-all md:h-7 md:w-7"
                  style={{
                    right: isToggled ? "2px" : undefined,
                    left: isToggled ? undefined : "2px",
                  }}
                >
                  <ArrowRight
                    className="h-3 w-3 md:h-3.5 md:w-3.5"
                    style={{ color: "hsl(252 56% 50%)", transform: isToggled ? "rotate(0deg)" : "rotate(180deg)" }}
                  />
                </span>
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
