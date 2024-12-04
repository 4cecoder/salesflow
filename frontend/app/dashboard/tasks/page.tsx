"use client"

import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { TasksWidget } from "@/components/dashboard/tasks-widget"
import { SearchInput } from "@/components/ui/search-input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export default function TasksPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"pending" | "in-progress" | "completed" | "all">("all")
  const [priorityFilter, setPriorityFilter] = useState<"all" | "high" | "medium" | "low">("all")

  return (
    <div className="container space-y-6 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">
            Manage and track your tasks
          </p>
        </div>
        <Button onClick={() => router.push("/dashboard/tasks/new")}>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr,auto,auto]">
        <SearchInput 
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select 
          value={statusFilter}
          onValueChange={(value: "pending" | "in-progress" | "completed" | "all") => setStatusFilter(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>

        <Select 
          value={priorityFilter}
          onValueChange={(value: "all" | "high" | "medium" | "low") => setPriorityFilter(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <TasksWidget 
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
      />
    </div>
  )
}
