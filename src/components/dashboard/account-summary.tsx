"use client"

import { ArrowUpRight } from "lucide-react"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts"

const areaData = [
  { value: 30 },
  { value: 45 },
  { value: 35 },
  { value: 55 },
  { value: 40 },
  { value: 60 },
  { value: 50 },
]

const barData = [
  { value: 20 },
  { value: 45 },
  { value: 30 },
  { value: 65 },
  { value: 50 },
  { value: 35 },
  { value: 55 },
  { value: 40 },
]

const pieData = [
  { name: "Education", value: 53, color: "hsl(252 56% 42%)" },
  { name: "Shopping", value: 25, color: "hsl(175 60% 70%)" },
  { name: "Other", value: 22, color: "hsl(240 20% 88%)" },
]

const summaryCards = [
  {
    title: "Income",
    value: "1.34m",
    currency: "PKR",
    chart: "area",
    color: "hsl(252 56% 42%)",
  },
  {
    title: "Expenses",
    value: "35k",
    currency: "PKR",
    chart: "bar-mixed",
    color: "hsl(175 60% 70%)",
  },
  {
    title: "Subscriptions",
    value: "12k",
    currency: "PKR",
    chart: "bar",
    color: "hsl(252 56% 57%)",
  },
  {
    title: "Graph",
    value: "",
    currency: "",
    chart: "pie",
    color: "",
  },
]

function MiniAreaChart() {
  return (
    <ResponsiveContainer width="100%" height={50}>
      <AreaChart data={areaData}>
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(252 56% 42%)" stopOpacity={0.4} />
            <stop offset="100%" stopColor="hsl(252 56% 42%)" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke="hsl(252 56% 42%)"
          strokeWidth={2}
          fill="url(#areaFill)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

function MiniBarChart({ mixed = false }: { mixed?: boolean }) {
  return (
    <ResponsiveContainer width="100%" height={50}>
      <BarChart data={barData}>
        <Bar dataKey="value" radius={[2, 2, 0, 0]}>
          {barData.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                mixed
                  ? index % 2 === 0
                    ? "hsl(175 60% 70%)"
                    : "hsl(252 56% 50%)"
                  : "hsl(252 56% 50%)"
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

function MiniPieChart() {
  return (
    <ResponsiveContainer width="100%" height={80}>
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          innerRadius={22}
          outerRadius={35}
          paddingAngle={2}
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export function AccountSummary() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-base font-bold text-foreground md:text-lg">
          Quick Summary On Your Account
        </h2>
        <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          View All
        </button>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-border bg-card p-3 md:p-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground md:text-sm">{card.title}</p>
              <ArrowUpRight
                className="h-4 w-4"
                style={{ color: "hsl(252 56% 57%)" }}
              />
            </div>
            {card.value && (
              <>
                <p className="mt-1 text-xl font-bold text-foreground md:text-2xl">
                  {card.value}
                </p>
                <p className="text-xs text-muted-foreground">{card.currency}</p>
              </>
            )}
            <div className="mt-2">
              {card.chart === "area" && <MiniAreaChart />}
              {card.chart === "bar-mixed" && <MiniBarChart mixed />}
              {card.chart === "bar" && <MiniBarChart />}
              {card.chart === "pie" && <MiniPieChart />}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
