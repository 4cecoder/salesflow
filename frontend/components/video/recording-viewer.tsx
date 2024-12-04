'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { VideoConference } from '@/data/mock-conferences'
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Maximize, Download, MessageSquare } from 'lucide-react'
import { formatDuration } from '@/lib/utils'
import { ChatReplay } from './chat-replay'

interface RecordingViewerProps {
  conference: VideoConference
}

export function RecordingViewer({ conference }: RecordingViewerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(80)
  const [isChatOpen, setIsChatOpen] = useState(false)

  // Mock duration in seconds
  const duration = conference.duration * 60
  const currentTime = Math.floor((progress / 100) * duration)

  return (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col h-full bg-background">
        {/* Video area */}
        <div className="flex-1 relative bg-slate-900 rounded-lg overflow-hidden">
          {/* Main recording view */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="relative w-full max-w-3xl aspect-video bg-slate-800 rounded-lg overflow-hidden">
                {/* Participant grid - mocked for recording */}
                <div className="absolute inset-0 grid grid-cols-2 gap-1 p-1">
                  {conference.participants.slice(0, 4).map((participant, i) => (
                    <div key={participant.id} className="relative bg-slate-700 rounded">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback>{participant.name[0]}</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Play button overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-16 w-16 rounded-full"
                      onClick={() => setIsPlaying(true)}
                    >
                      <Play className="h-8 w-8 text-white" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Video controls */}
        <div className="p-4 space-y-2 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          {/* Progress bar */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground w-16 text-right">
              {formatDuration(currentTime)}
            </span>
            <Slider
              value={[progress]}
              onValueChange={(value) => setProgress(value[0])}
              max={100}
              step={0.1}
              className="flex-1"
            />
            <span className="text-sm text-muted-foreground w-16">
              {formatDuration(duration)}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <SkipForward className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 ml-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
                <Slider
                  value={[volume]}
                  onValueChange={(value) => setVolume(value[0])}
                  max={100}
                  className="w-24"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button
                variant={isChatOpen ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setIsChatOpen(!isChatOpen)}
              >
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Meeting info */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div>
              <h3 className="font-medium">{conference.title}</h3>
              <p className="text-sm text-muted-foreground">
                {new Date(conference.startTime).toLocaleDateString()} • {conference.duration} minutes
              </p>
            </div>
            <div className="flex -space-x-2">
              {conference.participants.slice(0, 3).map((participant) => (
                <Avatar key={participant.id} className="border-2 border-background">
                  <AvatarFallback>{participant.name[0]}</AvatarFallback>
                </Avatar>
              ))}
              {conference.participants.length > 3 && (
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted border-2 border-background">
                  <span className="text-xs">+{conference.participants.length - 3}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ChatReplay
        currentTime={currentTime}
        duration={duration}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  )
}
