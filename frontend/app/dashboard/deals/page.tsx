"use client"

import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { DealsWidget } from "@/components/dashboard/deals-widget"
import { SearchInput } from "@/components/ui/search-input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export default function DealsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [stageFilter, setStageFilter] = useState<"discovery" | "proposal" | "negotiation" | "closed-won" | "all">("all")
  const [valueFilter, setValueFilter] = useState<"all" | "high" | "medium" | "low">("all")

  return (
    <div className="container space-y-6 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Deals</h1>
          <p className="text-muted-foreground">
            Manage and track your deals pipeline
          </p>
        </div>
        <Button onClick={() => router.push("/dashboard/deals/new")}>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Deal
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr,auto,auto]">
        <SearchInput 
          placeholder="Search deals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select 
          value={stageFilter}
          onValueChange={(value: "discovery" | "proposal" | "negotiation" | "closed-won" | "all") => setStageFilter(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Stages</SelectItem>
            <SelectItem value="discovery">Discovery</SelectItem>
            <SelectItem value="proposal">Proposal</SelectItem>
            <SelectItem value="negotiation">Negotiation</SelectItem>
            <SelectItem value="closed-won">Closed Won</SelectItem>
          </SelectContent>
        </Select>

        <Select 
          value={valueFilter}
          onValueChange={(value: "all" | "high" | "medium" | "low") => setValueFilter(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Values</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DealsWidget 
        searchQuery={searchQuery}
        stageFilter={stageFilter}
        valueFilter={valueFilter}
      />
    </div>
  )
}
