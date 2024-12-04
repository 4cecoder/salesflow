import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackButton } from "@/components/ui/back-button"
import { 
  ArrowRight, 
  Calendar, 
  Mail, 
  MessageSquare, 
  Phone, 
  Video,
  Database,
  Users,
  BarChart,
  Clock
} from "lucide-react"

const integrations = {
  crm: [
    {
      title: "Salesforce",
      description: "Enterprise-grade CRM integration with full feature support",
      features: [
        { title: "Bi-directional Contact Sync", icon: Users },
        { title: "Opportunity Tracking", icon: BarChart },
        { title: "Activity Logging", icon: Database },
        { title: "Custom Object Mapping", icon: ArrowRight },
        { title: "Automated Task Creation", icon: Clock },
        { title: "Meeting Scheduling", icon: Calendar }
      ],
      status: "Available",
      docsUrl: "/docs/integrations/salesforce"
    },
    {
      title: "HubSpot",
      description: "Complete integration with HubSpot's marketing and sales suite",
      features: [
        { title: "Contact Management", icon: Users },
        { title: "Deal Pipeline Sync", icon: BarChart },
        { title: "Meeting Integration", icon: Calendar },
        { title: "Email Tracking", icon: Mail },
        { title: "Analytics Integration", icon: BarChart },
        { title: "Timeline Events", icon: Clock }
      ],
      status: "Available",
      docsUrl: "/docs/integrations/hubspot"
    }
  ],
  calendar: [
    {
      title: "Google Calendar",
      description: "Seamless integration with Google Workspace calendar",
      features: [
        { title: "Two-way Calendar Sync", icon: Calendar },
        { title: "Availability Checking", icon: Clock },
        { title: "Meeting Scheduling", icon: Users },
        { title: "Automatic Updates", icon: ArrowRight },
        { title: "Resource Management", icon: Database },
        { title: "Time Zone Handling", icon: Clock }
      ],
      status: "Available",
      docsUrl: "/docs/integrations/google-calendar"
    },
    {
      title: "Microsoft Outlook",
      description: "Full integration with Microsoft 365 calendar",
      features: [
        { title: "Calendar Integration", icon: Calendar },
        { title: "Meeting Scheduling", icon: Users },
        { title: "Resource Booking", icon: Database },
        { title: "Teams Integration", icon: Video },
        { title: "Contact Sync", icon: Users },
        { title: "Email Integration", icon: Mail }
      ],
      status: "Available",
      docsUrl: "/docs/integrations/outlook"
    }
  ],
  communication: [
    {
      title: "Zoom",
      description: "Video conferencing integration for remote sales meetings",
      features: [
        { title: "One-click Meetings", icon: Video },
        { title: "Calendar Integration", icon: Calendar },
        { title: "Recording Management", icon: Database },
        { title: "Chat Features", icon: MessageSquare },
        { title: "Screen Sharing", icon: ArrowRight },
        { title: "Meeting Analytics", icon: BarChart }
      ],
      status: "Available",
      docsUrl: "/docs/integrations/zoom"
    },
    {
      title: "Teams",
      description: "Microsoft Teams integration for enterprise communication",
      features: [
        { title: "Video Meetings", icon: Video },
        { title: "Chat Integration", icon: MessageSquare },
        { title: "File Sharing", icon: Database },
        { title: "Screen Sharing", icon: ArrowRight },
        { title: "Channel Integration", icon: Users },
        { title: "Presence Sync", icon: Clock }
      ],
      status: "Beta",
      docsUrl: "/docs/integrations/teams"
    }
  ]
}

export default function Integrations() {
  return (
    <div className="container max-w-7xl mx-auto py-10 px-4">
      <BackButton href="/" />
      
      <div className="space-y-2 text-center mb-12">
        <h1 className="text-3xl font-bold">Integrations</h1>
        <p className="text-muted-foreground text-lg">
          Connect SaleFlow with your favorite tools and platforms
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">CRM Integrations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {integrations.crm.map((integration) => (
              <Card key={integration.title}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{integration.title}</CardTitle>
                    <Badge variant={integration.status === "Beta" ? "secondary" : "default"}>
                      {integration.status}
                    </Badge>
                  </div>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {integration.features.map((feature) => {
                      const Icon = feature.icon
                      return (
                        <div key={feature.title} className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{feature.title}</span>
                        </div>
                      )
                    })}
                  </div>
                  <Link href={integration.docsUrl}>
                    <Button variant="ghost" className="w-full mt-6">
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Calendar Integrations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {integrations.calendar.map((integration) => (
              <Card key={integration.title}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{integration.title}</CardTitle>
                    <Badge variant={integration.status === "Beta" ? "secondary" : "default"}>
                      {integration.status}
                    </Badge>
                  </div>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {integration.features.map((feature) => {
                      const Icon = feature.icon
                      return (
                        <div key={feature.title} className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{feature.title}</span>
                        </div>
                      )
                    })}
                  </div>
                  <Link href={integration.docsUrl}>
                    <Button variant="ghost" className="w-full mt-6">
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Communication Integrations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {integrations.communication.map((integration) => (
              <Card key={integration.title}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{integration.title}</CardTitle>
                    <Badge variant={integration.status === "Beta" ? "secondary" : "default"}>
                      {integration.status}
                    </Badge>
                  </div>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {integration.features.map((feature) => {
                      const Icon = feature.icon
                      return (
                        <div key={feature.title} className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{feature.title}</span>
                        </div>
                      )
                    })}
                  </div>
                  <Link href={integration.docsUrl}>
                    <Button variant="ghost" className="w-full mt-6">
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
