export interface CompanyProfile {
  id: string
  name: string
  logo?: string
  industry: string
  size: string
  website: string
  description: string
  founded: string
  headquarters: string
  subscription: {
    plan: string
    status: string
    billingCycle: string
    nextBilling: string
    seats: number
    features: string[]
  }
  contacts: {
    primary: {
      name: string
      role: string
      email: string
      phone: string
    }
    billing: {
      name: string
      role: string
      email: string
      phone: string
    }
  }
  usage: {
    totalMeetings: number
    totalParticipants: number
    storageUsed: string
    recordingHours: number
    lastActive: string
  }
}

export const mockCompany: CompanyProfile = {
  id: "comp-001",
  name: "Acme Corporation",
  industry: "Technology",
  size: "100-500 employees",
  website: "https://acme.example.com",
  description: "Leading provider of innovative cloud solutions for enterprise businesses. Specializing in AI-driven analytics and business intelligence platforms.",
  founded: "2015",
  headquarters: "San Francisco, CA",
  subscription: {
    plan: "Enterprise",
    status: "Active",
    billingCycle: "Annual",
    nextBilling: "2024-12-31",
    seats: 100,
    features: [
      "Unlimited video meetings",
      "Meeting recording & storage",
      "Advanced analytics",
      "Custom branding",
      "Priority support",
      "SSO integration",
      "API access"
    ]
  },
  contacts: {
    primary: {
      name: "John Smith",
      role: "CTO",
      email: "john.smith@acme.example.com",
      phone: "+1 (555) 123-4567"
    },
    billing: {
      name: "Sarah Wilson",
      role: "Finance Director",
      email: "sarah.wilson@acme.example.com",
      phone: "+1 (555) 123-4568"
    }
  },
  usage: {
    totalMeetings: 1250,
    totalParticipants: 7500,
    storageUsed: "500 GB",
    recordingHours: 750,
    lastActive: "2024-02-20T15:30:00Z"
  }
}
