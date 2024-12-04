"use client"

import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface Task {
  id: number
  title: string
  dueDate: string
  priority: "high" | "medium" | "low"
  status: "pending" | "in-progress" | "completed"
  description: string
}

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Follow up with Enterprise client",
    description: "Schedule a follow-up call to discuss the new proposal",
    dueDate: "Today",
    priority: "high",
    status: "pending",
  },
  {
    id: 2,
    title: "Prepare quarterly review",
    description: "Create presentation slides for Q4 review meeting",
    dueDate: "Tomorrow",
    priority: "medium",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Update pipeline report",
    description: "Add new leads and update status of existing opportunities",
    dueDate: "Next Week",
    priority: "low",
    status: "completed",
  },
  {
    id: 4,
    title: "Client onboarding documentation",
    description: "Prepare welcome package for new client",
    dueDate: "Next Week",
    priority: "medium",
    status: "pending",
  },
  {
    id: 5,
    title: "Sales team training",
    description: "Organize product training session for new sales representatives",
    dueDate: "Next Month",
    priority: "high",
    status: "in-progress",
  },
]

const priorityColors: Record<Task['priority'], string> = {
  high: 'text-red-500 bg-red-50',
  medium: 'text-yellow-500 bg-yellow-50',
  low: 'text-green-500 bg-green-50'
}

const statusColors: Record<Task['status'], string> = {
  pending: 'text-orange-500 bg-orange-50',
  'in-progress': 'text-blue-500 bg-blue-50',
  completed: 'text-green-500 bg-green-50'
}

interface TasksWidgetProps {
  searchQuery?: string
  statusFilter?: Task['status'] | 'all'
  priorityFilter?: Task['priority'] | 'all'
}

export function TasksWidget({ 
  searchQuery = '', 
  statusFilter = 'all', 
  priorityFilter = 'all' 
}: TasksWidgetProps) {
  const router = useRouter()

  const filteredTasks = mockTasks.filter(task => {
    const matchesSearch = 
      searchQuery === '' || 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = 
      statusFilter === 'all' || 
      task.status === statusFilter

    const matchesPriority = 
      priorityFilter === 'all' || 
      task.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesPriority
  })

  return (
    <Card className="border rounded-lg">
      <ScrollArea className="h-[600px]">
        <div className="divide-y">
          {filteredTasks.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              No tasks found
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                onClick={() => router.push(`/dashboard/tasks/${task.id}`)}
                className="p-4 hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{task.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      priorityColors[task.priority]
                    )}>
                      {task.priority}
                    </span>
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      statusColors[task.status]
                    )}>
                      {task.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <p className="line-clamp-1 max-w-[70%]">{task.description}</p>
                  <span className="text-xs">Due: {task.dueDate}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </Card>
  )
}
