'use client'

import { Message } from "@/types/message"
import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "date-fns"

interface MessageCardProps {
  message: Message
  isSelected: boolean
  onClick: () => void
}

export function MessageCard({ message, isSelected, onClick }: MessageCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "p-4 border-b cursor-pointer transition-colors",
        "hover:bg-accent",
        isSelected ? "bg-accent" : "bg-background"
      )}
    >
      <div className="flex justify-between items-start mb-1">
        <h3 className={cn(
          "font-medium",
          isSelected ? "text-accent-foreground" : "text-foreground"
        )}>
          {message.contactName || message.contactPhone}
        </h3>
        <span className="text-xs text-muted-foreground">
          {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
        </span>
      </div>
      <p className="text-sm text-muted-foreground truncate">
        {message.text}
      </p>
    </div>
  )
}
