"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"

interface NavigationItem {
  name: string
  href: string
  icon: JSX.Element
  badge?: string
  children?: NavigationItem[]
}

const navigation: NavigationItem[] = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
      </svg>
    ),
  },
  {
    name: "Agents",
    href: "/dashboard/sales/agents",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
  },
  {
    name: "Leaderboard",
    href: "/dashboard/sales/leaderboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "Deals",
    href: "/dashboard/deals",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
      </svg>
    ),
    children: [
      { name: "Active Deals", href: "/dashboard/deals/active", icon: <ChevronRight className="h-4 w-4" />, badge: "12" },
      { name: "Opportunities", href: "/dashboard/deals/opportunities", icon: <ChevronRight className="h-4 w-4" /> },
      { name: "Closed Deals", href: "/dashboard/deals/closed", icon: <ChevronRight className="h-4 w-4" /> },
    ]
  },
  {
    name: "Customer Management",
    href: "/dashboard/contacts",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
    children: [
      { name: "Contacts", href: "/dashboard/contacts/all", icon: <ChevronRight className="h-4 w-4" /> },
      { name: "Companies", href: "/dashboard/contacts/companies", icon: <ChevronRight className="h-4 w-4" /> },
      { name: "Segments", href: "/dashboard/contacts/segments", icon: <ChevronRight className="h-4 w-4" /> },
    ]
  },
  {
    name: "Analytics & Reports",
    href: "/dashboard/reports",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    children: [
      { name: "Performance", href: "/dashboard/reports/performance", icon: <ChevronRight className="h-4 w-4" /> },
      { name: "Revenue", href: "/dashboard/reports/revenue", icon: <ChevronRight className="h-4 w-4" /> },
      { name: "Forecasting", href: "/dashboard/reports/forecasting", icon: <ChevronRight className="h-4 w-4" /> },
    ]
  },
  {
    name: "Calendar & Events",
    href: "/dashboard/calendar",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
      </svg>
    ),
  },
]

const NavItem = ({ item, isChild = false }: { item: NavigationItem; isChild?: boolean }) => {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(false)
  const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
  
  if (item.children) {
    return (
      <div>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-between",
            isActive && "bg-primary/10 text-primary",
            !isActive && "text-muted-foreground hover:bg-muted"
          )}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="flex items-center">
            <span className="w-5 h-5">{item.icon}</span>
            <span className="ml-3">{item.name}</span>
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              expanded && "rotate-180"
            )}
          />
        </Button>
        {expanded && (
          <div className="ml-4 mt-1 space-y-1">
            {item.children.map((child) => (
              <NavItem key={child.href} item={child} isChild />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center px-2 py-2 text-sm rounded-md transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-muted",
        isChild && "pl-8"
      )}
    >
      <span className="w-5 h-5 flex items-center justify-center">{item.icon}</span>
      <span className="ml-3 flex-1">{item.name}</span>
      {item.badge && (
        <span className="ml-auto bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
          {item.badge}
        </span>
      )}
    </Link>
  )
}

export function SidebarNav() {
  return (
    <aside className="w-[72px] min-h-[calc(100vh-65px)] border-r bg-card">
      <nav className="px-3 py-4 space-y-2">
        {navigation.map((item) => (
          <NavItem key={item.href} item={item} />
        ))}
      </nav>
    </aside>
  )
}
