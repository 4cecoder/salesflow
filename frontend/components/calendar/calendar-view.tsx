"use client"

import { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Card } from '@/components/ui/card'

interface CalendarEvent {
  id: string
  title: string
  start: Date | string
  end?: Date | string
  allDay?: boolean
  className?: string
}

export function CalendarView() {
  const [events, setEvents] = useState<CalendarEvent[]>([])

  // Example events - replace with your actual data fetching logic
  useEffect(() => {
    // Simulated events - replace with your API call
    const sampleEvents: CalendarEvent[] = [
      {
        id: '1',
        title: 'Client Meeting',
        start: new Date().toISOString(),
        className: 'bg-blue-500 text-white'
      },
      {
        id: '2',
        title: 'Team Sync',
        start: new Date(Date.now() + 86400000).toISOString(),
        className: 'bg-green-500 text-white'
      }
    ]
    setEvents(sampleEvents)
  }, [])

  const handleEventClick = (info: any) => {
    // Handle event click
    console.log('Event clicked:', info.event)
  }

  const handleDateSelect = (selectInfo: any) => {
    // Handle date selection
    const title = prompt('Please enter a title for the new event')
    if (title) {
      const newEvent: CalendarEvent = {
        id: String(Date.now()),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        className: 'bg-blue-500 text-white'
      }
      setEvents([...events, newEvent])
    }
    selectInfo.view.calendar.unselect()
  }

  return (
    <Card className="p-4">
      <div className="w-full">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={events}
          select={handleDateSelect}
          eventClick={handleEventClick}
          height="auto"
        />
      </div>
    </Card>
  )
}
