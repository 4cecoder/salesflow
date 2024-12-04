'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Mic, MicOff, Video as VideoIcon, VideoOff, Phone, MessageSquare, Share, Settings, MonitorUp } from 'lucide-react'
import { VideoConference } from '@/data/mock-conferences'
import { SettingsModal } from './settings-modal'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface MockVideoRoomProps {
  conference: VideoConference
  onLeave: () => void
  onToggleChat: () => void
}

export function MockVideoRoom({ conference, onLeave, onToggleChat }: MockVideoRoomProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Main video area */}
      <div className="flex-1 relative bg-slate-900 rounded-lg">
        {isScreenSharing ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
            <div className="text-center text-white">
              <MonitorUp className="h-32 w-32 mx-auto mb-4 opacity-40" />
              <p className="text-xl">Screen Share Preview</p>
              <p className="text-sm text-muted-foreground">You are sharing your screen</p>
            </div>
          </div>
        ) : (
          <>
            {/* Main participant (current user) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarFallback className="text-4xl">You</AvatarFallback>
                </Avatar>
                <p className="text-white text-lg">You (Host)</p>
              </div>
            </div>

            {/* Other participants */}
            <div className="absolute bottom-4 right-4 flex flex-wrap gap-2 max-w-[30%]">
              {conference.participants.map((participant) => (
                <div key={participant.id} className="w-32 bg-slate-800 rounded-lg p-2">
                  <div className="text-white text-center">
                    <Avatar className="h-16 w-16 mx-auto mb-2">
                      <AvatarFallback>{participant.name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="text-sm truncate">{participant.name}</p>
                    <p className="text-xs text-muted-foreground">{participant.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Controls */}
      <div className="p-4 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex justify-center items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsVideoOff(!isVideoOff)}
          >
            {isVideoOff ? <VideoOff className="h-4 w-4" /> : <VideoIcon className="h-4 w-4" />}
          </Button>

          <Button
            variant="destructive"
            size="icon"
            onClick={onLeave}
          >
            <Phone className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={onToggleChat}
          >
            <MessageSquare className="h-4 w-4" />
          </Button>

          <Button
            variant={isScreenSharing ? "secondary" : "outline"}
            size="icon"
            onClick={() => setIsScreenSharing(!isScreenSharing)}
          >
            <Share className="h-4 w-4" />
          </Button>

          <SettingsModal />
        </div>
      </div>
    </div>
  )
}
