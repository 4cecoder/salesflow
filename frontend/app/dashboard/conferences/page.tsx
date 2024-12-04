"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockConferences } from '@/data/mock-conferences'
import { Calendar, Video, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ConferencesPage() {
  const router = useRouter()
  const [conferences] = useState(mockConferences)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800'
      case 'in-progress':
        return 'bg-green-100 text-green-800'
      case 'completed':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container space-y-6 py-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Video Conferences</h1>
          <p className="text-muted-foreground">
            Schedule and manage your video conferences
          </p>
        </div>
        <Button onClick={() => router.push('/dashboard/conferences/new')} className="md:w-auto">
          <Video className="mr-2 h-4 w-4" />
          New Conference
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past Conferences</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4">
            {conferences
              .filter(conf => conf.status !== 'completed')
              .map((conference) => (
                <Card key={conference.id} className="cursor-pointer hover:shadow-md transition-shadow"
                     onClick={() => router.push(`/dashboard/conferences/${conference.id}`)}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle>{conference.title}</CardTitle>
                        <CardDescription>{conference.description}</CardDescription>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(conference.status)}`}>
                        {conference.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {new Date(conference.startTime).toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        {conference.participants.length} participants
                      </div>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <div className="grid gap-4">
            {conferences
              .filter(conf => conf.status === 'completed')
              .map((conference) => (
                <Card key={conference.id} className="cursor-pointer hover:shadow-md transition-shadow"
                     onClick={() => router.push(`/dashboard/conferences/${conference.id}`)}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle>{conference.title}</CardTitle>
                        <CardDescription>{conference.description}</CardDescription>
                      </div>
                      {conference.recordingAvailable && (
                        <Button variant="outline" size="sm">
                          View Recording
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {new Date(conference.startTime).toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        {conference.participants.length} participants
                      </div>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
