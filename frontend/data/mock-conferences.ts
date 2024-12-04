export interface VideoConference {
  id: string
  title: string
  description?: string
  startTime: string
  duration: number // in minutes
  participants: Participant[]
  status: 'scheduled' | 'in-progress' | 'completed'
  recordingAvailable?: boolean
}

export interface Participant {
  id: string
  name: string
  email: string
  role: 'host' | 'participant'
  joinedAt?: string
}

export const mockConferences: VideoConference[] = [
  {
    id: "conf-001",
    title: "Product Demo - Enterprise Plan",
    description: "Walkthrough of new enterprise features for Acme Corp",
    startTime: "2024-02-20T14:00:00Z",
    duration: 60,
    status: 'scheduled',
    participants: [
      {
        id: "user-001",
        name: "John Smith",
        email: "john@saleflow.com",
        role: "host"
      },
      {
        id: "user-002",
        name: "Alice Johnson",
        email: "alice@acme.com",
        role: "participant"
      }
    ]
  },
  {
    id: "conf-002",
    title: "Sales Pipeline Review",
    description: "Q1 pipeline review with leadership team",
    startTime: "2024-02-19T15:30:00Z",
    duration: 45,
    status: 'completed',
    recordingAvailable: true,
    participants: [
      {
        id: "user-003",
        name: "Sarah Wilson",
        email: "sarah@saleflow.com",
        role: "host"
      },
      {
        id: "user-004",
        name: "Mike Brown",
        email: "mike@saleflow.com",
        role: "participant"
      }
    ]
  },
  {
    id: "conf-003",
    title: "Technical Integration Discussion",
    description: "API integration planning with TechCorp",
    startTime: "2024-02-20T10:00:00Z",
    duration: 90,
    status: 'in-progress',
    participants: [
      {
        id: "user-005",
        name: "David Lee",
        email: "david@saleflow.com",
        role: "host"
      },
      {
        id: "user-006",
        name: "Emma Davis",
        email: "emma@techcorp.com",
        role: "participant"
      }
    ]
  }
]
