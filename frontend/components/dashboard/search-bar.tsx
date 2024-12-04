"use client"

import { Input } from "@/components/ui/input"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

export function SearchBar() {
  return (
    <div className="relative">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
g      <Input
        type="text"
        placeholder="Search deals, contacts, or tasks..."
        className="pl-9"
      />
    </div>
  )
}
