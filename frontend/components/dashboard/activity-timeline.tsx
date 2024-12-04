"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ClockIcon, EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons"

interface Activity {
  id: number
  type: "call" | "email" | "meeting"
  description: string
  time: string
}

const mockActivities: Activity[] = [
  {
    id: 1,
    type: "call",
    description: "Call scheduled with John Doe",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "email",
    description: "Sent proposal to Tech Corp",
    time: "4 hours ago",
  },
  {
    id: 3,
    type: "meeting",
    description: "Meeting completed with ABC Inc",
    time: "Yesterday",
  },
]

const getActivityIcon = (type: Activity["type"]) => {
  switch (type) {
    case "call":
      return PersonIcon
    case "email":
      return EnvelopeClosedIcon
    case "meeting":
      return ClockIcon
    default:
      return PersonIcon
  }
}

export function ActivityTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {mockActivities.map((activity) => {
              const Icon = getActivityIcon(activity.type)
              return (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
