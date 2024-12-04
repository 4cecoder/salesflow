'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Message } from '@/types/message'
import { MessageCard } from '@/components/messages/message-card'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast"
import { Phone, Search, Send } from "lucide-react"
import { groupBy, maxBy } from 'lodash'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from "@/lib/utils"

// Mock data - replace with actual API calls
const mockMessages: Message[] = [
  {
    id: '1',
    text: 'Hey there! Just saw your ad for the premium package. Does it include the analytics dashboard?',
    timestamp: new Date().toISOString(),
    contactPhone: '+1234567890',
    directionType: 'MO',
    contactName: 'Alex Martinez',
    status: 'delivered'
  },
  {
    id: '2',
    text: 'Yes, the premium package includes our full analytics suite! Would you like to schedule a demo?',
    timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
    contactPhone: '+1234567890',
    directionType: 'MT',
    contactName: 'Alex Martinez',
    status: 'delivered'
  },
  {
    id: '3',
    text: 'Need urgent help - our system is showing an error code E1234. Any quick fixes?',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    contactPhone: '+1987654321',
    directionType: 'MO',
    contactName: 'Sarah Wilson',
    status: 'delivered'
  },
  {
    id: '4',
    text: 'Hi, I received the onboarding docs but having trouble with Step 3. Can someone help?',
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    contactPhone: '+1654987320',
    directionType: 'MO',
    contactName: 'David Chang',
    status: 'delivered'
  },
  {
    id: '5',
    text: 'Of course! Let me walk you through Step 3. First, make sure you\'ve enabled API access in your dashboard.',
    timestamp: new Date(Date.now() - 1000 * 60 * 43).toISOString(),
    contactPhone: '+1654987320',
    directionType: 'MT',
    contactName: 'David Chang',
    status: 'delivered'
  },
  {
    id: '6',
    text: 'Our team reviewed the proposal. We\'d like to move forward with the enterprise plan. When can we start?',
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    contactPhone: '+1789456123',
    directionType: 'MO',
    contactName: 'Emma Thompson',
    status: 'delivered'
  },
  {
    id: '7',
    text: 'Is there a way to add more team members to our current plan? We\'re expanding next month.',
    timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    contactPhone: '+1432167890',
    directionType: 'MO',
    contactName: 'James Wilson',
    status: 'delivered'
  },
  {
    id: '8',
    text: 'Quick update: We\'ve deployed the hotfix for the reporting bug. Please refresh your dashboard.',
    timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
    contactPhone: '+1765432109',
    directionType: 'MT',
    contactName: 'Robert Chen',
    status: 'delivered'
  },
  {
    id: '9',
    text: 'Thanks for choosing our service! Your trial starts today. Check your email for login details.',
    timestamp: new Date(Date.now() - 1000 * 60 * 300).toISOString(),
    contactPhone: '+1876543210',
    directionType: 'MT',
    contactName: 'Lisa Garcia',
    status: 'delivered'
  },
  {
    id: '10',
    text: 'The latest feature update is amazing! Just one question - where can I find the new export options?',
    timestamp: new Date(Date.now() - 1000 * 60 * 360).toISOString(),
    contactPhone: '+1123456789',
    directionType: 'MO',
    contactName: 'Michael Scott',
    status: 'delivered'
  },
  {
    id: '11',
    text: 'Your support team has been incredible. Thanks for resolving our integration issues so quickly!',
    timestamp: new Date(Date.now() - 1000 * 60 * 420).toISOString(),
    contactPhone: '+1345678912',
    directionType: 'MO',
    contactName: 'Rachel Green',
    status: 'delivered'
  },
  {
    id: '12',
    text: 'Scheduled maintenance tonight from 2-4 AM EST. Expect brief service interruption.',
    timestamp: new Date(Date.now() - 1000 * 60 * 480).toISOString(),
    contactPhone: '+1567891234',
    directionType: 'MT',
    contactName: 'System Alerts',
    status: 'delivered'
  }
]

export default function MessagesPage() {
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [conversation, setConversation] = useState<Message[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const sortedMessages = useMemo(() => {
    const groupedMessages = groupBy(messages, 'contactPhone')
    return Object.values(groupedMessages)
      .map(group => maxBy(group, msg => new Date(msg.timestamp).getTime()))
      .sort((a, b) => new Date(b!.timestamp).getTime() - new Date(a!.timestamp).getTime())
  }, [messages])

  const filteredMessages = sortedMessages.filter((msg): msg is NonNullable<typeof msg> => 
    msg!.contactPhone.includes(searchTerm) || 
    (msg!.contactName?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    msg!.text.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleMessageSelect = (message: Message) => {
    setSelectedMessage(message)
    setPhone(message.contactPhone)
    setMessage('')
    // In a real app, fetch the conversation for this contact
    setConversation(messages.filter(msg => msg.contactPhone === message.contactPhone))
  }

  const handleSend = async () => {
    if (!message.trim()) return

    setIsLoading(true)
    try {
      // Mock sending message - replace with actual API call
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        timestamp: new Date().toISOString(),
        contactPhone: phone,
        directionType: 'MT',
        contactName: selectedMessage?.contactName
      }
      
      setMessages(prev => [...prev, newMessage])
      setConversation(prev => [...prev, newMessage])
      setMessage('')
      
      toast({
        title: "Message sent",
        description: "Your message has been sent successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="h-[calc(100vh-10rem)]">
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Messages</CardTitle>
            <CardDescription>Manage your conversations</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-[200px]"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex h-[calc(100vh-16rem)]">
          <div className="w-1/3 border-r">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <ScrollArea className="h-[calc(100%-5rem)]">
              <AnimatePresence>
                {filteredMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCard
                      message={msg}
                      isSelected={selectedMessage?.id === msg.id}
                      onClick={() => handleMessageSelect(msg)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </ScrollArea>
          </div>
          <div className="flex-1 flex flex-col">
            <ScrollArea className="flex-1 p-4">
              <AnimatePresence>
                {conversation.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className={`mb-4 flex ${msg.directionType === 'MT' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg p-3",
                        msg.directionType === 'MT' 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted"
                      )}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </ScrollArea>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Textarea
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[80px]"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                />
                <Button 
                  onClick={handleSend}
                  disabled={isLoading || !message.trim()}
                  size="icon"
                  className="h-auto"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
