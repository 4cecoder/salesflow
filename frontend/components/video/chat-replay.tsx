'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, Clock } from 'lucide-react'
import { formatDuration } from '@/lib/utils'

interface ChatMessage {
  id: string
  sender: string
  content: string
  timestamp: number // seconds from start
}

// Mock chat messages for the recording
const mockChatHistory: ChatMessage[] = [
  {
    id: '1',
    sender: 'John Smith',
    content: 'Hello everyone, thanks for joining!',
    timestamp: 5
  },
  {
    id: '2',
    sender: 'Sarah Wilson',
    content: 'Hi John, looking forward to the presentation.',
    timestamp: 12
  },
  {
    id: '3',
    sender: 'Mike Johnson',
    content: 'Could you share the slides?',
    timestamp: 45
  },
  {
    id: '4',
    sender: 'John Smith',
    content: 'Sure, sharing my screen now.',
    timestamp: 60
  },
  {
    id: '5',
    sender: 'Emma Davis',
    content: 'Great overview of the features!',
    timestamp: 180
  },
  {
    id: '6',
    sender: 'Sarah Wilson',
    content: 'Quick question about the timeline...',
    timestamp: 240
  }
]

interface ChatReplayProps {
  currentTime: number
  duration: number
  isOpen: boolean
  onClose: () => void
}

export function ChatReplay({ currentTime, duration, isOpen, onClose }: ChatReplayProps) {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([])

  useEffect(() => {
    // Show messages up to current time
    setVisibleMessages(
      mockChatHistory.filter(msg => msg.timestamp <= currentTime)
    )
  }, [currentTime])

  if (!isOpen) return null

  return (
    <div className="w-80 h-full border-l bg-background flex flex-col">
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          <h3 className="font-semibold">Chat Replay</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>×</Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {visibleMessages.map((message) => (
            <div key={message.id} className="flex gap-3 group">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{message.sender[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-medium text-sm">{message.sender}</span>
                  <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <Clock className="h-3 w-3 inline-block mr-1" />
                    {formatDuration(message.timestamp)}
                  </span>
                </div>
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
          {visibleMessages.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>Chat messages will appear here</p>
              <p className="text-sm">as the recording plays</p>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="text-sm text-muted-foreground">
          {mockChatHistory.length} messages • {formatDuration(duration)}
        </div>
      </div>
    </div>
  )
}
