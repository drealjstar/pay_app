"use client"

import { Search, ArrowRight, Bell, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const contacts = [
  { name: "Mike Taylor", location: "Chicago, TX", initials: "MT" },
  { name: "Jack Green", location: "Oakland, CO", initials: "JG" },
  { name: "Carmen Lewis", location: "Milwaukee, CA", initials: "CL" },
  { name: "Micheal Richardson", location: "Tampa, CA", initials: "MR" },
  { name: "Willie Cole", location: "Seattle, MO", initials: "WC" },
  { name: "Phyllis Weber", location: "Tampa, NY", initials: "PW" },
]

const avatarColors = [
  "hsl(252 56% 42%)",
  "hsl(175 60% 45%)",
  "hsl(340 50% 55%)",
  "hsl(30 70% 50%)",
  "hsl(200 60% 50%)",
  "hsl(280 40% 55%)",
]

export function ContactsPanel() {
  return (
    <aside className="flex w-full shrink-0 flex-col gap-6 xl:w-72" >
      <div className=" border-b-[1px] pb-2">
        <div className="flex justify-end items-center gap-2 md:gap-3">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted"
            aria-label="Messages"
          >
            <MessageSquare className="h-5 w-5" />
          </button>
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span
              className="absolute right-2 top-2 h-2 w-2 rounded-full"
              style={{ background: "hsl(0 70% 55%)" }}
            />
          </button>
          <Avatar className="h-10 w-10 cursor-pointer">
            <AvatarFallback
              className="text-xs font-bold"
              style={{ background: "hsl(30 70% 60%)", color: "white" }}
            >
              MK
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-center justify-between">

          <h2 className="font-display text-lg font-bold text-foreground">
            Contacts
          </h2>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted"
            aria-label="Search contacts"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Last Payment Sent 2 days ago
        </p>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-1">
          {contacts.map((contact, i) => (
            <div key={contact.name} className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${contact.name.replace(/ /g, "")}`}
                  alt={contact.name}
                />
                <AvatarFallback
                  style={{ background: avatarColors[i % avatarColors.length], color: "white" }}
                >
                  {contact.initials}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">
                  {contact.name}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {contact.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="rounded-2xl p-5"
        
      >
        <Bell
          className="h-6 w-6"
          style={{ color: "hsl(252 56% 57%)" }}
        />
        <p className="mt-2 text-sm font-bold text-foreground">
          {"It's Your Wife's Birthday"}
        </p>
        <p className="text-sm text-foreground">after 2 days</p>
        <p className="text-sm text-muted-foreground">
          {"Let's Plan for a big gift!"}
        </p>
        <button
          className="mt-3 flex h-8 w-8 items-center justify-center rounded-full"
          style={{ background: "hsl(252 56% 57%)" }}
          aria-label="Plan gift"
        >
          <ArrowRight className="h-4 w-4 text-white" />
        </button>
      </div>
    </aside>
  )
}
