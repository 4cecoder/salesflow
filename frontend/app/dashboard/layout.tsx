"use client"

import React from 'react'
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { MessageSquare, HomeIcon, DollarSignIcon, UsersIcon, CalendarIcon, BarChart2Icon, Users2Icon, CheckSquareIcon, Settings2Icon, TrophyIcon, UserIcon, Video, CreditCard, LogOut, Building2Icon } from "lucide-react"

// Mock authentication check
const useAuth = () => {
  // In a real app, this would check a token or session
  const isAuthenticated = typeof window !== 'undefined' && localStorage.getItem('demo-auth') === 'true'
  return { isAuthenticated }
}

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    name: "Teams",
    href: "/dashboard/sales/teams",
    icon: <Users2Icon />,
  },
  {
    name: "Agents",
    href: "/dashboard/sales/agents",
    icon: <UserIcon />,
  },
  {
    name: "Leaderboard",
    href: "/dashboard/sales/leaderboard",
    icon: <TrophyIcon />,
  },
  {
    name: "Conferences",
    href: "/dashboard/conferences",
    icon: <Video />,
  },
  {
    name: "Deals",
    href: "/dashboard/deals",
    icon: <DollarSignIcon />,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: <MessageSquare />,
  },
  {
    name: "Calendar",
    href: "/dashboard/calendar",
    icon: <CalendarIcon />,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: <BarChart2Icon />,
  },
  {
    name: "Tasks",
    href: "/dashboard/tasks",
    icon: <CheckSquareIcon />,
  },
]

// Mock notifications data
const mockNotifications = [
  {
    id: 1,
    type: "deal",
    title: "New Deal Won",
    message: "Enterprise Software Solution deal was closed successfully",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "contact",
    title: "New Contact Added",
    message: "Sarah Johnson was added to your contacts",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "task",
    title: "Task Due Soon",
    message: "Follow up with TechCorp Inc. about the proposal",
    time: "1 day ago",
    read: true,
  },
  {
    id: 4,
    type: "deal",
    title: "Deal Stage Updated",
    message: "Cloud Migration Project moved to negotiation",
    time: "2 days ago",
    read: true,
  },
]

const SidebarNav = () => {
  const pathname = usePathname()

  return (
    <div>
      {navigation.map((item) => {
        const isActive = pathname === item.href
        return (
          <React.Fragment key={item.name}>
            <Link
              href={item.href}
              className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const [notifications, setNotifications] = useState(mockNotifications)
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isSearchOpen, setSearchOpen] = useState(false)
  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Enterprise Header with Search and Quick Actions */}
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
              className="p-2 hover:bg-muted rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-bold">SaleFlow</h1>
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search deals, contacts, or documents..."
                className="w-full h-10 px-4 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setSearchOpen(false)}
              />
              {isSearchOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 p-2 bg-popover rounded-md shadow-lg border">
                  <div className="text-sm text-muted-foreground p-2">
                    Press <kbd className="px-2 py-1 bg-muted rounded">⌘</kbd> + <kbd className="px-2 py-1 bg-muted rounded">K</kbd> to search
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Quick Actions */}
            <Button variant="ghost" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Quick Actions</span>
            </Button>

            {/* Notifications Dropdown */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <span className="sr-only">Notifications</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </Button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="w-80 bg-popover rounded-md shadow-md p-2 z-50"
                  align="end"
                  sideOffset={5}
                >
                  <div className="flex justify-between items-center px-2 py-1.5 mb-2">
                    <h2 className="text-sm font-medium">Notifications</h2>
                    {unreadCount > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs"
                        onClick={markAllAsRead}
                      >
                        Mark all as read
                      </Button>
                    )}
                  </div>

                  <div className="max-h-[300px] overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="text-center py-4 text-muted-foreground">
                        No notifications
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {notifications.map((notification) => (
                          <DropdownMenu.Item
                            key={notification.id}
                            className={`flex items-start p-2 rounded-md cursor-pointer ${
                              notification.read ? 'opacity-70' : ''
                            } hover:bg-muted focus:bg-muted outline-none`}
                            onClick={() => markAsRead(notification.id)}
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium">{notification.title}</p>
                              <p className="text-xs text-muted-foreground mt-0.5 truncate">
                                {notification.message}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {notification.time}
                              </p>
                            </div>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 ml-2 flex-shrink-0" />
                            )}
                          </DropdownMenu.Item>
                        ))}
                      </div>
                    )}
                  </div>

                  <DropdownMenu.Separator className="h-px bg-border my-2" />
                  
                  <DropdownMenu.Item
                    className="w-full px-2 py-1.5 text-sm rounded-md cursor-pointer hover:bg-muted focus:bg-muted outline-none text-center"
                    onClick={() => router.push('/dashboard/notifications')}
                  >
                    View all notifications
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            {/* User Menu */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <span className="sr-only">User menu</span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">JD</span>
                  </div>
                </Button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="w-56 bg-popover rounded-md shadow-md p-2"
                  align="end"
                  sideOffset={5}
                >
                  <div className="px-2 py-1.5 mb-2">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">john@example.com</p>
                  </div>

                  <DropdownMenu.Separator className="h-px bg-border my-2" />

                  <DropdownMenu.Item 
                    className="px-2 py-1.5 text-sm cursor-pointer hover:bg-muted focus:bg-muted outline-none"
                    onClick={() => router.push('/dashboard/settings/profile')}
                  >
                    <div className="flex items-center">
                      <UserIcon className="mr-2 h-4 w-4" />
                      Profile Settings
                    </div>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item 
                    className="px-2 py-1.5 text-sm cursor-pointer hover:bg-muted focus:bg-muted outline-none"
                    onClick={() => router.push('/dashboard/settings/account')}
                  >
                    <div className="flex items-center">
                      <Settings2Icon className="mr-2 h-4 w-4" />
                      Account Settings
                    </div>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item 
                    className="px-2 py-1.5 text-sm cursor-pointer hover:bg-muted focus:bg-muted outline-none"
                    onClick={() => router.push('/dashboard/settings/company')}
                  >
                    <div className="flex items-center">
                      <Building2Icon className="mr-2 h-4 w-4" />
                      Company Settings
                    </div>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item 
                    className="px-2 py-1.5 text-sm cursor-pointer hover:bg-muted focus:bg-muted outline-none"
                    onClick={() => router.push('/dashboard/settings/teams')}
                  >
                    <div className="flex items-center">
                      <Users2Icon className="mr-2 h-4 w-4" />
                      Team Settings
                    </div>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item 
                    className="px-2 py-1.5 text-sm cursor-pointer hover:bg-muted focus:bg-muted outline-none"
                    onClick={() => router.push('/dashboard/settings/billing')}
                  >
                    <div className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Billing
                    </div>
                  </DropdownMenu.Item>

                  <DropdownMenu.Separator className="h-px bg-border my-2" />

                  <DropdownMenu.Item
                    className="px-2 py-1.5 text-sm cursor-pointer hover:bg-muted focus:bg-muted outline-none text-red-500"
                    onClick={() => {
                      localStorage.removeItem('demo-auth')
                      router.push('/signin')
                    }}
                  >
                    <div className="flex items-center">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </div>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Collapsible Sidebar */}
        <aside
          className={`${
            isSidebarCollapsed ? 'w-16' : 'w-64'
          } transition-all duration-200 ease-in-out border-r bg-card overflow-y-auto`}
        >
          <nav className="p-4 space-y-1">
            <SidebarNav />
          </nav>
        </aside>

        {/* Main Content with Breadcrumb */}
        <main className="flex-1 overflow-y-auto">
          <div className="h-10 border-b bg-muted/50 px-8 flex items-center">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                    Dashboard
                  </Link>
                </li>
                {pathname !== '/dashboard' && (
                  <>
                    <li className="text-muted-foreground">/</li>
                    <li className="font-medium">
                      {pathname.split('/').pop() ? 
                        pathname.split('/').pop()!.charAt(0).toUpperCase() + 
                        pathname.split('/').pop()!.slice(1) : 
                        'Page'
                      }
                    </li>
                  </>
                )}
              </ol>
            </nav>
          </div>
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  )
}
