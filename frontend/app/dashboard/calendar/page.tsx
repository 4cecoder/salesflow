"use client"

import { CalendarView } from "@/components/calendar/calendar-view"

export default function CalendarPage() {
  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">
          Schedule and manage your events
        </p>
      </div>
      <CalendarView />
    </div>
  )
}
