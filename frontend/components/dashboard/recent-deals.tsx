"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Deal {
  id: number
  name: string
  company: string
  value: number
  status: 'Qualified' | 'Negotiation' | 'Won' | 'Lost'
  lastContact: string
  avatar?: string
}

const statusColors = {
  Qualified: "bg-blue-100 text-blue-800",
  Negotiation: "bg-yellow-100 text-yellow-800",
  Won: "bg-green-100 text-green-800",
  Lost: "bg-red-100 text-red-800"
}

interface RecentDealsProps {
  deals?: Deal[]
}

const defaultDeals: Deal[] = [
  {
    id: 1,
    name: "Enterprise SaaS Solution",
    company: "TechCorp Inc.",
    value: 75000,
    status: "Negotiation",
    lastContact: "2 hours ago",
    avatar: "T"
  },
  {
    id: 2,
    name: "Cloud Migration Project",
    company: "Global Systems Ltd",
    value: 120000,
    status: "Won",
    lastContact: "1 day ago",
    avatar: "G"
  },
  {
    id: 3,
    name: "Security Suite Upgrade",
    company: "SecureNet Solutions",
    value: 45000,
    status: "Qualified",
    lastContact: "3 days ago",
    avatar: "S"
  },
  {
    id: 4,
    name: "Data Analytics Platform",
    company: "DataFlow Analytics",
    value: 95000,
    status: "Negotiation",
    lastContact: "5 days ago",
    avatar: "D"
  }
]

export function RecentDeals({ deals = defaultDeals }: RecentDealsProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Deals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {deals.map((deal) => (
            <div key={deal.id} className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={deal.avatar} alt={deal.company} />
                  <AvatarFallback>{deal.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{deal.name}</p>
                  <p className="text-sm text-muted-foreground">{deal.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{deal.lastContact}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium">{formatCurrency(deal.value)}</p>
                </div>
                <Badge variant="secondary" className={statusColors[deal.status]}>
                  {deal.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
