"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PlusIcon, MoreVertical } from "lucide-react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { SearchInput } from "@/components/ui/search-input"

type ContactTag = "client" | "vendor" | "partner" | "lead" | "other"
type InteractionType = "email" | "call" | "meeting" | "note" | "task" | "follow_up"
type ContactStatus = "active" | "inactive" | "potential" | "archived"
type Priority = "low" | "medium" | "high"

interface ContactInteraction {
  id: string
  date: string
  type: InteractionType
  notes: string
  followUpDate?: string
  priority?: Priority
  completed?: boolean
}

interface ContactSocialMedia {
  linkedin?: string
  twitter?: string
  facebook?: string
  website?: string
}

interface ContactAddress {
  street?: string
  city?: string
  state?: string
  country?: string
  postalCode?: string
}

interface Contact {
  id: number
  name: string
  title: string
  company: string
  email: string
  phone: string
  alternativePhone?: string
  lastContact: string
  tags: ContactTag[]
  status: ContactStatus
  notes: string
  interactions: ContactInteraction[]
  socialMedia: ContactSocialMedia
  address: ContactAddress
  // Business-specific fields
  budget?: number
  revenue?: number
  industry?: string
  employees?: number
  source?: string
  assignedTo?: string
  customFields: Record<string, string>
}

const mockContacts: Contact[] = [
  {
    id: 1,
    name: "John Smith",
    title: "CTO",
    company: "TechCorp Inc.",
    email: "john.smith@techcorp.com",
    phone: "+1 (555) 123-4567",
    lastContact: "2024-02-15",
    tags: ["client", "partner"],
    status: "active",
    notes: "Key decision maker for the cloud migration project",
    interactions: [
      {
        id: "1",
        date: "2024-02-15",
        type: "meeting",
        notes: "Discussed Q2 roadmap",
      },
      {
        id: "2",
        date: "2024-02-10",
        type: "email",
        notes: "Sent project timeline",
      },
    ],
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/johnsmith/",
    },
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      country: "USA",
      postalCode: "10001",
    },
    industry: "Technology",
    employees: 100,
    revenue: 1000000,
    budget: 500000,
    source: "Referral",
    assignedTo: "Jane Doe",
    customFields: {
      "Field 1": "Value 1",
      "Field 2": "Value 2",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "VP of Operations",
    company: "DataFlow Systems",
    email: "sarah.j@dataflow.com",
    phone: "+1 (555) 234-5678",
    lastContact: "2024-02-20",
    tags: ["vendor"],
    status: "active",
    notes: "Responsible for data integration",
    interactions: [
      {
        id: "3",
        date: "2024-02-20",
        type: "call",
        notes: "Discussed data migration",
      },
    ],
    socialMedia: {
      twitter: "https://twitter.com/sarahjohnson",
    },
    address: {
      street: "456 Elm St",
      city: "Chicago",
      state: "IL",
      country: "USA",
      postalCode: "60611",
    },
    industry: "Finance",
    employees: 50,
    revenue: 500000,
    budget: 200000,
    source: "Social Media",
    assignedTo: "Bob Smith",
    customFields: {
      "Field 3": "Value 3",
      "Field 4": "Value 4",
    },
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Security Director",
    company: "SecureNet Ltd",
    email: "m.chen@securenet.com",
    phone: "+1 (555) 345-6789",
    lastContact: "2024-02-18",
    tags: ["partner"],
    status: "active",
    notes: "Key contact for security audits",
    interactions: [
      {
        id: "4",
        date: "2024-02-18",
        type: "meeting",
        notes: "Discussed security protocols",
      },
    ],
    socialMedia: {
      facebook: "https://www.facebook.com/michaelchen",
    },
    address: {
      street: "789 Oak St",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      postalCode: "94111",
    },
    industry: "Cybersecurity",
    employees: 20,
    revenue: 200000,
    budget: 100000,
    source: "Referral",
    assignedTo: "Jane Doe",
    customFields: {
      "Field 5": "Value 5",
      "Field 6": "Value 6",
    },
  },
  {
    id: 4,
    name: "Emma Davis",
    title: "CEO",
    company: "Innovation Corp",
    email: "emma.d@innovation.com",
    phone: "+1 (555) 456-7890",
    lastContact: "2024-02-22",
    tags: ["lead"],
    status: "potential",
    notes: "Key decision maker for innovation projects",
    interactions: [
      {
        id: "5",
        date: "2024-02-22",
        type: "email",
        notes: "Sent project proposal",
      },
    ],
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/emmadavis/",
    },
    address: {
      street: "901 Maple St",
      city: "Boston",
      state: "MA",
      country: "USA",
      postalCode: "02111",
    },
    industry: "Technology",
    employees: 10,
    revenue: 100000,
    budget: 50000,
    source: "Social Media",
    assignedTo: "Bob Smith",
    customFields: {
      "Field 7": "Value 7",
      "Field 8": "Value 8",
    },
  },
]

export default function Contacts() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<ContactTag | "all">("all")
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [isAddingNote, setIsAddingNote] = useState(false)
  const [newNote, setNewNote] = useState("")
  const router = useRouter()

  const filteredContacts = mockContacts.filter((contact) => {
    const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesTag = selectedTag === "all" || contact.tags.includes(selectedTag as ContactTag)
    
    return matchesSearch && matchesTag
  })

  const handleAddNote = () => {
    if (!selectedContact || !newNote.trim()) return

    const newInteraction: ContactInteraction = {
      id: Math.random().toString(),
      date: new Date().toISOString(),
      type: "note",
      notes: newNote.trim(),
    }

    // In a real app, this would be an API call
    selectedContact.interactions.unshift(newInteraction)
    setNewNote("")
    setIsAddingNote(false)
  }

  return (
    <div className="container space-y-6 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
          <p className="text-muted-foreground">
            Manage your contacts and relationships
          </p>
        </div>
        <Button onClick={() => router.push("/dashboard/contacts/new")}>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Contact
        </Button>
      </div>

      <div className="flex gap-4">
        <SearchInput 
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
        <Select value={selectedTag} onValueChange={(value: string) => setSelectedTag(value as ContactTag | "all")}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            <SelectItem value="client">Clients</SelectItem>
            <SelectItem value="vendor">Vendors</SelectItem>
            <SelectItem value="partner">Partners</SelectItem>
            <SelectItem value="lead">Leads</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6">
        {filteredContacts.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No contacts found</p>
          </div>
        ) : (
          filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex flex-col space-y-4 p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow min-w-[400px]"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{contact.name}</h3>
                    <div className="flex gap-2">
                      {contact.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="capitalize">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {contact.title} at {contact.company}
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => router.push(`/dashboard/contacts/${contact.id}/edit`)}>
                      Edit
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Email:</span>
                    <span>{contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Phone:</span>
                    <span>{contact.phone}</span>
                  </div>
                  {contact.industry && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Industry:</span>
                      <span>{contact.industry}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  {contact.revenue && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Revenue:</span>
                      <span>${contact.revenue.toLocaleString()}</span>
                    </div>
                  )}
                  {contact.employees && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Employees:</span>
                      <span>{contact.employees}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Last Contact:</span>
                    <span>{new Date(contact.lastContact).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {contact.interactions.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Recent Interaction</h4>
                  <div className="bg-muted p-3 rounded-md">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="capitalize">
                        {contact.interactions[0].type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(contact.interactions[0].date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm">{contact.interactions[0].notes}</p>
                  </div>
                </div>
              )}

              {contact.notes && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Notes</h4>
                  <p className="text-sm text-muted-foreground">{contact.notes}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
