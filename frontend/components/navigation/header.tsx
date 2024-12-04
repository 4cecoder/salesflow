"use client"

import { useRouter } from "next/navigation"
import { NotificationsDropdown } from "../notifications/notifications-dropdown"

export function Header() {
  const router = useRouter()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SaleFlow</h1>
        <div className="flex items-center space-x-4">
          <NotificationsDropdown />
          <button 
            className="text-sm"
            onClick={() => {
              localStorage.removeItem('demo-auth')
              router.push('/signin')
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  )
}
