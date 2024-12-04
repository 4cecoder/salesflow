"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Users, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NewConference() {
  const router = useRouter()
  const [participants, setParticipants] = useState<string[]>([])
  const [email, setEmail] = useState('')

  const handleAddParticipant = () => {
    if (email && !participants.includes(email)) {
      setParticipants([...participants, email])
      setEmail('')
    }
  }

  const handleRemoveParticipant = (emailToRemove: string) => {
    setParticipants(participants.filter(p => p !== emailToRemove))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would create a new conference
    router.push('/dashboard/conferences')
  }

  return (
    <div className="container py-6">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-4"
        >
          <X className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>Schedule New Conference</CardTitle>
            <CardDescription>Set up a new video conference with your team or clients</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Conference Title</Label>
                <Input id="title" placeholder="Enter conference title" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter conference description"
                  className="resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="date"
                      type="date"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="time"
                      type="time"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Participants</Label>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter participant email"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button type="button" onClick={handleAddParticipant}>
                    Add
                  </Button>
                </div>

                <div className="mt-2">
                  {participants.map((p) => (
                    <div
                      key={p}
                      className="flex items-center justify-between bg-secondary p-2 rounded-md mt-2"
                    >
                      <span className="text-sm">{p}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveParticipant(p)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={() => router.push('/dashboard/conferences')}>
                  Cancel
                </Button>
                <Button type="submit">
                  Schedule Conference
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
