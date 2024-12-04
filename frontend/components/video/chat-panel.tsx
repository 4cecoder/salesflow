import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  sender: string
  content: string
  timestamp: Date
}

interface ChatPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'John Smith',
      content: 'Hi everyone, thanks for joining!',
      timestamp: new Date()
    },
    {
      id: '2',
      sender: 'Sarah Wilson',
      content: 'Glad to be here!',
      timestamp: new Date()
    }
  ])
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = () => {
    if (!newMessage.trim()) return

    setMessages([...messages, {
      id: Date.now().toString(),
      sender: 'You',
      content: newMessage,
      timestamp: new Date()
    }])
    setNewMessage('')
  }

  if (!isOpen) return null

  return (
    <div className="w-80 h-full border-l bg-background flex flex-col">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-semibold">Chat</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>×</Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{message.sender[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-medium text-sm">{message.sender}</span>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  )
}
