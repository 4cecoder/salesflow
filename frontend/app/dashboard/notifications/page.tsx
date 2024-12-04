"use client"

import { Bell, CheckCircle2, AlertCircle, Clock, DollarSign, Calendar, MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const mockNotifications = [
  {
    id: 1,
    title: "🎮 GTA VI Pre-order Deal",
    message: "Vice City Motors wants to pre-order 1000 copies of GTA VI. Deal value: $70,000",
    type: "deal",
    time: "2 hours ago",
    unread: true,
    icon: DollarSign,
    priority: "high"
  },
  {
    id: 2,
    title: "🌴 Meeting with Tommy Vercetti",
    message: "Scheduled for tomorrow at Malibu Club to discuss merchandise distribution",
    type: "meeting",
    time: "5 hours ago",
    unread: true,
    icon: Calendar,
    priority: "medium"
  },
  {
    id: 3,
    title: "💼 Deal Update: Los Santos Customs",
    message: "Contract signed for exclusive in-game vehicle customization rights",
    type: "update",
    time: "1 day ago",
    unread: false,
    icon: CheckCircle2,
    priority: "normal"
  },
  {
    id: 4,
    title: "⚠️ Urgent: Rival Company Alert",
    message: "Saints Row attempting to undercut our Liberty City distribution deal",
    type: "alert",
    time: "2 days ago",
    unread: true,
    icon: AlertCircle,
    priority: "high"
  },
  {
    id: 5,
    title: "📱 New Message from Franklin",
    message: "Wants to discuss potential partnership for Los Santos merchandise",
    type: "message",
    time: "3 days ago",
    unread: false,
    icon: MessageSquare,
    priority: "medium"
  },
  {
    id: 6,
    title: "⏰ Reminder: Launch Event",
    message: "Vice City launch party planning meeting in 2 hours",
    type: "reminder",
    time: "3 days ago",
    unread: false,
    icon: Clock,
    priority: "normal"
  }
]

export default function NotificationsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Bell className="h-6 w-6" />
          <h1 className="text-2xl font-semibold">Notifications</h1>
        </div>
        <Button variant="outline">Mark all as read</Button>
      </div>

      <div className="space-y-4">
        {mockNotifications.map((notification) => {
          const IconComponent = notification.icon
          
          return (
            <Card
              key={notification.id}
              className={`p-4 transition-all hover:shadow-md ${
                notification.unread ? 'border-l-4 border-l-blue-500' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`rounded-full p-2 ${
                  notification.priority === 'high'
                    ? 'bg-red-100 text-red-600'
                    : notification.priority === 'medium'
                    ? 'bg-yellow-100 text-yellow-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{notification.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {notification.message}
                  </p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
