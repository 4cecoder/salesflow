"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  VideoIcon, 
  CalendarIcon, 
  PlusIcon,
  MessageSquareIcon,
  Video,
  PlusCircle,
  ListTodo
} from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

type AppRouterInstance = ReturnType<typeof useRouter>

interface Action {
  label: string
  icon: React.ElementType
  onClick: (router: AppRouterInstance) => void
  description: string
}

const actions: Action[] = [
  {
    label: "New Deal",
    icon: PlusIcon,
    onClick: (router) => router.push("/dashboard/deals/new"),
    description: "Create new opportunity"
  },
  {
    label: "New Task",
    icon: ListTodo,
    onClick: (router) => router.push("/dashboard/tasks/new"),
    description: "Create and assign a task"
  },
  {
    label: "Calendar",
    icon: CalendarIcon,
    onClick: (router) => router.push("/dashboard/calendar"),
    description: "View schedule"
  },
  {
    label: "Messages",
    icon: MessageSquareIcon,
    onClick: (router) => router.push("/dashboard/messages"),
    description: "Check communications"
  }
]

export function QuickActions() {
  const router = useRouter()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Button
            variant="outline"
            className="h-24 w-full flex flex-col items-center justify-center space-y-2 p-4 hover:bg-accent hover:text-accent-foreground transition-colors"
            onClick={() => router.push('/dashboard/conferences/new')}
          >
            <Video className="h-6 w-6" />
            <div className="flex flex-col items-center text-center">
              <span className="font-medium">New Conference</span>
              <span className="text-xs text-muted-foreground">Create a new conference</span>
            </div>
          </Button>
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              className="h-24 w-full flex flex-col items-center justify-center space-y-2 p-4 hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => action.onClick(router)}
            >
              <action.icon className="h-6 w-6" />
              <div className="flex flex-col items-center text-center">
                <span className="font-medium">{action.label}</span>
                <span className="text-xs text-muted-foreground">{action.description}</span>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
