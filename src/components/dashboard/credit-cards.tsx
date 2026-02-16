"use client"

import { Plus } from "lucide-react"

function CreditCardItem({
  variant,
  name,
  number,
  expiry,
}: {
  variant: "dark" | "light"
  name: string
  number: string
  expiry: string
}) {
  const isDark = variant === "dark"

  return (
    <div
      className="relative w-full rounded-2xl p-5"
      style={{
        background: isDark
          ? "linear-gradient(135deg, hsl(252 56% 32%) 0%, hsl(252 56% 50%) 100%)"
          : "linear-gradient(135deg, hsl(252 30% 72%) 0%, hsl(280 40% 78%) 100%)",
        color: isDark ? "white" : "hsl(252 30% 20%)",
      }}
    >
      <div className="flex items-center justify-between">
        <div
          className="h-8 w-10 rounded-md"
          style={{
            background: isDark
              ? "linear-gradient(135deg, hsl(45 80% 60%), hsl(35 80% 50%))"
              : "linear-gradient(135deg, hsl(45 60% 70%), hsl(35 60% 60%))",
          }}
        />
        <div
          className="h-5 w-5 rounded-full border-2"
          style={{
            borderColor: isDark ? "rgba(255,255,255,0.5)" : "rgba(100,80,140,0.5)",
          }}
        />
      </div>
      <p className="mt-4 font-mono text-xs tracking-widest opacity-60">
        CARD NUMBER
      </p>
      <p className="mt-1 font-mono text-sm tracking-[0.2em]">{number}</p>
      <div className="mt-3 flex items-end justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-widest opacity-60">
            CARD HOLDER NAME
          </p>
          <p className="mt-0.5 text-xs font-medium">{name}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-widest opacity-60">
            EXP DATE
          </p>
          <p className="mt-0.5 text-xs font-medium">{expiry}</p>
        </div>
      </div>
    </div>
  )
}

export function CreditCards() {
  return (
    <div className="flex flex-col gap-4">
      <CreditCardItem
        variant="dark"
        name="Anita Rose"
        number="3829 4820 4629 5025"
        expiry="09/17"
      />
      <CreditCardItem
        variant="light"
        name="Anita Rose"
        number="3829 4820 4629 5025"
        expiry="09/17"
      />
      <button
        className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed py-10 text-sm transition-colors hover:bg-muted/30"
        style={{
          borderColor: "hsl(252 20% 82%)",
          color: "hsl(252 15% 65%)",
          background: "hsl(252 20% 96% / 0.5)",
        }}
      >
        <Plus className="h-5 w-5" strokeWidth={1.5} />
        <span className="text-xs font-medium">Add Another Card</span>
      </button>
    </div>
  )
}
