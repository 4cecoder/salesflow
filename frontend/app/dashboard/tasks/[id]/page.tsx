"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, UsersIcon } from "lucide-react"
import { useRouter } from "next/navigation"

// Example task data - in a real app, this would come from your backend
const getTaskData = (id: string) => ({
  id,
  title: "Complete Q4 Sales Report",
  description: "Analyze and compile Q4 sales data into a comprehensive report for stakeholders",
  status: "in-progress",
  priority: "high",
  dueDate: "2024-02-15",
  assignedTo: ["John Doe", "Jane Smith"],
  createdAt: "2024-01-01",
  estimatedTime: "4 hours"
})

export default function TaskPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const task = getTaskData(params.id)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl font-bold">{task.title}</CardTitle>
              <CardDescription className="mt-2">{task.description}</CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge className={getPriorityColor(task.priority)}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
              </Badge>
              <Badge className={getStatusColor(task.status)}>
                {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-gray-500" />
              <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-gray-500" />
              <span>Estimated time: {task.estimatedTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <UsersIcon className="h-4 w-4 text-gray-500" />
              <span>Assigned to: {task.assignedTo.join(", ")}</span>
            </div>
          </div>
          
          <div className="mt-6 flex gap-3">
            <Button>Mark as Complete</Button>
            <Button variant="outline" onClick={() => router.push(`/dashboard/tasks/${params.id}/edit`)}>Edit Task</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
