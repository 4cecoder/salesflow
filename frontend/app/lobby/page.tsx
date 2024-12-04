import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Video, MessageSquare, Clock } from "lucide-react"

interface AgentCard {
  id: string
  name: string
  role: string
  status: "available" | "busy" | "away"
  image: string
}

const agents: AgentCard[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Senior Sales Consultant",
    status: "available",
    image: "/avatars/sarah.jpg"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Specialist",
    status: "available",
    image: "/avatars/michael.jpg"
  },
  {
    id: "3",
    name: "Emma Davis",
    role: "Account Executive",
    status: "busy",
    image: "/avatars/emma.jpg"
  },
  {
    id: "4",
    name: "James Wilson",
    role: "Solutions Consultant",
    status: "away",
    image: "/avatars/james.jpg"
  }
]

function AgentCard({ agent }: { agent: AgentCard }) {
  const statusColors = {
    available: "bg-green-500",
    busy: "bg-red-500",
    away: "bg-yellow-500"
  }

  return (
    <div className="flex flex-col items-center p-6 rounded-lg border bg-background hover:border-primary transition-colors">
      <div className="relative">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <div className={`absolute bottom-4 right-0 w-4 h-4 rounded-full border-2 border-background ${statusColors[agent.status]}`} />
      </div>
      <h3 className="font-semibold">{agent.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{agent.role}</p>
      <div className="flex gap-2">
        <Button
          variant={agent.status === "available" ? "default" : "secondary"}
          disabled={agent.status !== "available"}
          className="flex-1"
        >
          <Video className="mr-2 h-4 w-4" />
          Call
        </Button>
        <Button variant="outline" className="flex-1">
          <MessageSquare className="mr-2 h-4 w-4" />
          Chat
        </Button>
      </div>
    </div>
  )
}

export default function Lobby() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-32 pb-20">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Connect with Our Sales Team
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Our sales representatives are ready to help you. Choose an available agent
              to start a video call or chat instantly.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <Input
              type="search"
              placeholder="Search agents..."
              className="max-w-md"
            />
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                All Agents
              </Button>
              <Button variant="outline" size="sm" className="text-green-500">
                Available
              </Button>
              <Button variant="outline" size="sm">
                Product Experts
              </Button>
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>

        {/* Queue Information */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <Clock className="h-5 w-5" />
              <span>Average wait time: &lt; 1 minute</span>
            </div>
            <p className="text-muted-foreground">
              Can't find an available agent? Leave us a message and we'll get back to you
              as soon as possible.
            </p>
            <Button variant="outline" className="mt-4">
              Leave a Message
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
