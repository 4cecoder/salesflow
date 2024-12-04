"use client"

import { useState } from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

// Types
export interface Notification {
  id: number
  type: "deal" | "contact" | "task"
  title: string
  message: string
  time: string
  read: boolean
}

// Mock data - could be moved to a separate data file
const mockNotifications: Notification[] = [
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

export function NotificationsDropdown() {
  const router = useRouter()
  const [notifications, setNotifications] = useState(mockNotifications)
  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <span className="sr-only">Notifications</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
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
  )
}
