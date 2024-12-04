"use client"

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockConferences, VideoConference } from '@/data/mock-conferences'
import { Calendar, Video, Users, Share2, MessageSquare, Settings, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { MockVideoRoom } from "@/components/video/mock-video-room"
import { RecordingViewer } from "@/components/video/recording-viewer"
import { ChatPanel } from "@/components/video/chat-panel"

export default function ConferenceRoom({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [conference, setConference] = useState<VideoConference | null>(null)
  const [isInCall, setIsInCall] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {
    const conf = mockConferences.find(c => c.id === params.id)
    if (conf) {
      setConference(conf)
    }
  }, [params.id])

  if (!conference) {
    return <div>Conference not found</div>
  }

  return (
    <div className="container py-6">
      {!isInCall ? (
        <div className="max-w-2xl mx-auto space-y-6">
          <Button
            variant="ghost"
            onClick={() => router.push('/dashboard/conferences')}
            className="mb-4"
          >
            <X className="mr-2 h-4 w-4" />
            Back
          </Button>

          <Card>
            <CardHeader>
              <CardTitle>{conference.title}</CardTitle>
              <CardDescription>{conference.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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

              <div className="flex justify-end">
                {conference.status === 'completed' ? (
                  <Button onClick={() => setIsInCall(true)}>
                    View Recording
                  </Button>
                ) : (
                  <Button onClick={() => setIsInCall(true)}>
                    Join Conference
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="h-[calc(100vh-2rem)] flex">
          <div className="flex-1">
            {conference.status === 'completed' ? (
              <RecordingViewer conference={conference} />
            ) : (
              <MockVideoRoom
                conference={conference}
                onLeave={() => setIsInCall(false)}
                onToggleChat={() => setIsChatOpen(!isChatOpen)}
              />
            )}
          </div>
          
          {conference.status !== 'completed' && (
            <ChatPanel 
              isOpen={isChatOpen}
              onClose={() => setIsChatOpen(false)}
            />
          )}
        </div>
      )}
    </div>
  )
}
