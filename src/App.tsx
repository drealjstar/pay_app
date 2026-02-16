import './App.css'

import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { CreditCards } from "@/components/dashboard/credit-cards"
import { Transactions } from "@/components/dashboard/transactions"
import { AccountSummary } from "@/components/dashboard/account-summary"
import { ContactsPanel } from "@/components/dashboard/contacts-panel"


export default function App() {
  return (
    <div
      className="flex min-h-screen items-start justify-center p-3 md:items-center md:p-6"
      style={{
        background:
          "linear-gradient(135deg, hsl(175 50% 70%) 0%, hsl(280 40% 75%) 40%, hsl(340 50% 75%) 70%, hsl(30 60% 75%) 100%)",
      }}
    >
      <div className="relative w-full max-w-[1400px]">
        <div className="flex justify-center pb-4 lg:hidden">
          <Sidebar />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden items-center lg:flex" style={{ transform: "translateX(-9px)" }}>
          <div className="pointer-events-auto">
            <Sidebar />
          </div>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-white/30 bg-white shadow-2xl backdrop-blur-xl lg:ml-6 xl:flex-row">
          <div className="flex flex-1 flex-col gap-6 p-4 md:p-8 lg:pl-12">
            <Header />

            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="w-full shrink-0 lg:w-64">
                <CreditCards />
              </div>

              <Transactions />
            </div>

            <AccountSummary />
          </div>

          <div className="border-t border-border/50 bg-card/50 p-4 md:p-6 xl:border-l xl:border-t-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(340 60% 95%) 0%, hsl(280 40% 95%) 100%)",
            }}
            >
            <ContactsPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
