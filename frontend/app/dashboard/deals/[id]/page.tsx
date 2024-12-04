"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PencilIcon } from "lucide-react"

const mockDeals = [
  {
    id: 1,
    name: "Enterprise Software Solution",
    company: "TechCorp Inc.",
    value: "$150,000",
    stage: "Negotiation",
    probability: "75%",
    closeDate: "2024-03-15",
    description: "Large-scale enterprise software implementation for TechCorp's operations management.",
    contacts: [
      { name: "John Smith", role: "Decision Maker", email: "john@techcorp.com" },
      { name: "Sarah Johnson", role: "Technical Lead", email: "sarah@techcorp.com" }
    ],
    notes: [
      { date: "2024-01-15", content: "Initial meeting with technical team" },
      { date: "2024-02-01", content: "Proposal presentation to stakeholders" }
    ]
  },
  {
    id: 2,
    name: "Cloud Migration Project",
    company: "DataFlow Systems",
    value: "$85,000",
    stage: "Closed Won",
    probability: "100%",
    closeDate: "2024-02-28",
    description: "Complete cloud infrastructure migration project for DataFlow Systems.",
    contacts: [
      { name: "Mike Wilson", role: "CTO", email: "mike@dataflow.com" },
      { name: "Lisa Chen", role: "Project Manager", email: "lisa@dataflow.com" }
    ],
    notes: [
      { date: "2024-01-10", content: "Project scope finalization" },
      { date: "2024-02-15", content: "Contract signed" }
    ]
  },
  {
    id: 3,
    name: "Security Implementation",
    company: "SecureNet Ltd",
    value: "$95,000",
    stage: "Proposal",
    probability: "50%",
    closeDate: "2024-04-01",
    description: "Comprehensive security infrastructure implementation for SecureNet's main facility.",
    contacts: [
      { name: "David Brown", role: "Security Director", email: "david@securenet.com" },
      { name: "Emma Davis", role: "IT Manager", email: "emma@securenet.com" }
    ],
    notes: [
      { date: "2024-02-01", content: "Security assessment completed" },
      { date: "2024-02-20", content: "Proposal submitted" }
    ]
  },
  {
    id: 4,
    name: "Digital Transformation",
    company: "Innovation Corp",
    value: "$200,000",
    stage: "Discovery",
    probability: "25%",
    closeDate: "2024-05-15",
    description: "End-to-end digital transformation initiative for Innovation Corp.",
    contacts: [
      { name: "Robert Lee", role: "CEO", email: "robert@innovation.com" },
      { name: "Anna White", role: "Digital Director", email: "anna@innovation.com" }
    ],
    notes: [
      { date: "2024-02-10", content: "Initial discovery meeting" },
      { date: "2024-02-25", content: "Requirements gathering session" }
    ]
  }
]

export default function DealPage() {
  const params = useParams()
  const router = useRouter()
  const dealId = Number(params.id)
  
  const deal = mockDeals.find(d => d.id === dealId)
  
  if (!deal) {
    return <div>Deal not found</div>
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{deal.name}</h1>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => router.push(`/dashboard/deals/${deal.id}/edit`)}
          >
            <PencilIcon className="h-4 w-4 mr-2" />
            Edit Deal
          </Button>
          <Button variant="outline" onClick={() => router.back()}>
            Back to Deals
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Deal Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground">Company</div>
              <div>{deal.company}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Value</div>
              <div>{deal.value}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Stage</div>
              <div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  deal.stage === "Closed Won"
                    ? "bg-green-100 text-green-800"
                    : deal.stage === "Negotiation"
                    ? "bg-blue-100 text-blue-800"
                    : deal.stage === "Proposal"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {deal.stage}
                </span>
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Close Date</div>
              <div>{deal.closeDate}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Description</div>
              <div className="text-sm">{deal.description}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deal.contacts.map((contact, index) => (
                <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                  <div className="font-medium">{contact.name}</div>
                  <div className="text-sm text-muted-foreground">{contact.role}</div>
                  <div className="text-sm text-blue-600">{contact.email}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deal.notes.map((note, index) => (
                <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                  <div className="text-sm text-muted-foreground">{note.date}</div>
                  <div className="text-sm">{note.content}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
