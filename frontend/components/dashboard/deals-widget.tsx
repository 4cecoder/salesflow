"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical } from "lucide-react"

interface Deal {
  id: number
  name: string
  company: string
  value: string
  stage: "discovery" | "proposal" | "negotiation" | "closed-won"
  probability: string
  closeDate: string
  description?: string
  contact?: string
  notes?: string
}

const mockDeals: Deal[] = [
  {
    id: 1,
    name: "Enterprise Software Solution",
    company: "TechCorp Inc.",
    value: "$150,000",
    stage: "negotiation",
    probability: "75%",
    closeDate: "2024-03-15",
    description: "Complete enterprise software solution including CRM and ERP modules",
    contact: "John Smith",
    notes: "Client is particularly interested in the reporting features",
  },
  {
    id: 2,
    name: "Cloud Migration Project",
    company: "DataFlow Systems",
    value: "$85,000",
    stage: "closed-won",
    probability: "100%",
    closeDate: "2024-02-28",
    description: "Migration of on-premise infrastructure to cloud",
    contact: "Sarah Johnson",
    notes: "Successfully completed ahead of schedule",
  },
  {
    id: 3,
    name: "Security Implementation",
    company: "SecureNet Ltd",
    value: "$95,000",
    stage: "proposal",
    probability: "50%",
    closeDate: "2024-04-01",
    description: "Comprehensive security audit and implementation",
    contact: "Michael Chen",
    notes: "Pending security assessment results",
  },
  {
    id: 4,
    name: "Digital Transformation",
    company: "Innovation Corp",
    value: "$200,000",
    stage: "discovery",
    probability: "25%",
    closeDate: "2024-05-15",
    description: "Complete digital transformation of business processes",
    contact: "Emma Davis",
    notes: "Initial meetings have been positive",
  },
]

const stageColors: Record<Deal['stage'], string> = {
  discovery: 'text-purple-500 bg-purple-50',
  proposal: 'text-yellow-500 bg-yellow-50',
  negotiation: 'text-blue-500 bg-blue-50',
  'closed-won': 'text-green-500 bg-green-50'
}

const valueRanges = {
  high: 150000,
  medium: 50000,
  low: 0
}

interface DealsWidgetProps {
  searchQuery?: string
  stageFilter?: Deal['stage'] | 'all'
  valueFilter?: 'all' | 'high' | 'medium' | 'low'
}

export function DealsWidget({ 
  searchQuery = '', 
  stageFilter = 'all', 
  valueFilter = 'all' 
}: DealsWidgetProps) {
  const router = useRouter()
  const [deletingDeal, setDeletingDeal] = useState<Deal | null>(null)
  const [deals, setDeals] = useState<Deal[]>(mockDeals)

  const filteredDeals = deals.filter(deal => {
    const matchesSearch = 
      searchQuery === '' || 
      deal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.company.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStage = 
      stageFilter === 'all' || 
      deal.stage === stageFilter

    const dealValue = parseInt(deal.value.replace(/[^0-9]/g, ""))
    const matchesValue =
      valueFilter === 'all' ||
      (valueFilter === 'high' && dealValue >= valueRanges.high) ||
      (valueFilter === 'medium' && dealValue >= valueRanges.medium && dealValue < valueRanges.high) ||
      (valueFilter === 'low' && dealValue < valueRanges.medium)

    return matchesSearch && matchesStage && matchesValue
  })

  const handleDelete = (deal: Deal) => {
    setDeals(deals.filter(d => d.id !== deal.id))
    setDeletingDeal(null)
  }

  const handleDealClick = (e: React.MouseEvent, deal: Deal) => {
    // Prevent navigation when clicking the dropdown
    if ((e.target as HTMLElement).closest('.deal-actions')) {
      e.stopPropagation()
      return
    }
    router.push(`/dashboard/deals/${deal.id}`)
  }

  return (
    <>
      <Card className="border rounded-lg">
        <ScrollArea className="h-[600px]">
          <div className="divide-y">
            {filteredDeals.length === 0 ? (
              <div className="p-4 text-center text-muted-foreground">
                No deals found
              </div>
            ) : (
              filteredDeals.map((deal) => (
                <div
                  key={deal.id}
                  onClick={(e) => handleDealClick(e, deal)}
                  className="p-4 hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{deal.name}</h3>
                      <p className="text-sm text-muted-foreground">{deal.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{deal.value}</span>
                      <span className={cn(
                        "text-xs px-2 py-1 rounded-full",
                        stageColors[deal.stage]
                      )}>
                        {deal.stage.replace('-', ' ')}
                      </span>
                      <div className="deal-actions">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => router.push(`/dashboard/deals/${deal.id}/edit`)}>
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => setDeletingDeal(deal)}
                              className="text-destructive"
                            >
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Probability: {deal.probability}</span>
                    <span className="text-xs">Close: {deal.closeDate}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deletingDeal} onOpenChange={() => setDeletingDeal(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Deal</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this deal? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeletingDeal(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => deletingDeal && handleDelete(deletingDeal)}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
