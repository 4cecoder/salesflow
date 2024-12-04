"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { UserIcon, Settings2Icon, Users2Icon, CreditCard, Building2Icon } from "lucide-react"

const navigation = [
  {
    name: "Profile",
    href: "/dashboard/settings/profile",
    icon: <UserIcon className="w-4 h-4" />,
  },
  {
    name: "Account",
    href: "/dashboard/settings/account",
    icon: <Settings2Icon className="w-4 h-4" />,
  },
  {
    name: "Company",
    href: "/dashboard/settings/company",
    icon: <Building2Icon className="w-4 h-4" />,
  },
  {
    name: "Team",
    href: "/dashboard/settings/teams",
    icon: <Users2Icon className="w-4 h-4" />,
  },
  {
    name: "Billing",
    href: "/dashboard/settings/billing",
    icon: <CreditCard className="w-4 h-4" />,
  },
]

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm font-medium rounded-md",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </aside>
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  )
}
