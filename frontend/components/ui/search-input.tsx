"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export function SearchInput({ 
  className,
  onChange,
  ...props 
}: SearchInputProps) {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        className="pl-8"
        placeholder="Search..."
        onChange={(e) => onChange?.(e)}
        type="search"
        {...props}
      />
    </div>
  )
}
