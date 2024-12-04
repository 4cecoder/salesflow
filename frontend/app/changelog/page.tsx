"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/shared/page-transition"
import { FadeUpScroll } from "@/components/shared/scroll-animation"
import { Sparkles, Zap, Shield, Globe, MessageSquare, Video, Calendar } from "lucide-react"
import { BackButton } from "@/components/ui/back-button"

const releases = [
  {
    version: "2.0.0",
    date: "December 2023",
    type: "Major Release",
    highlights: [
      {
        title: "Instant Video Connections",
        description: "Connect with your website visitors in real-time through our new one-click video call system.",
        icon: Video,
        badge: "New"
      },
      {
        title: "AI-Powered Smart Routing",
        description: "Automatically connect visitors to the right sales expert based on their browsing behavior.",
        icon: Sparkles,
        badge: "New"
      },
      {
        title: "Global Reach Enhancement",
        description: "Real-time translation in 40+ languages and 24/7 availability for worldwide sales coverage.",
        icon: Globe,
        badge: "Enhanced"
      }
    ]
  },
  {
    version: "1.5.0",
    date: "November 2023",
    type: "Feature Update",
    highlights: [
      {
        title: "Enterprise Security Features",
        description: "Bank-level encryption and SOC 2 compliance for enterprise-grade security.",
        icon: Shield,
        badge: "Security"
      },
      {
        title: "Advanced Analytics Dashboard",
        description: "Track conversions, response times, and sales opportunities with detailed insights.",
        icon: Zap,
        badge: "Enhanced"
      },
      {
        title: "Communication Templates",
        description: "New customizable templates for consistent and effective sales communication.",
        icon: MessageSquare,
        badge: "New"
      }
    ]
  },
  {
    version: "1.0.0",
    date: "October 2023",
    type: "Initial Release",
    highlights: [
      {
        title: "Core Platform Launch",
        description: "Introduction of SaleFlow's B2B sales acceleration platform.",
        icon: Calendar,
        badge: "Launch"
      }
    ]
  }
]

function ChangelogPage() {
  return (
    <PageTransition>
      <div className="container mx-auto py-10 px-4">
        <BackButton href="/" />
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Product Updates</h1>
          <p className="text-xl text-muted-foreground">
            Track our journey in revolutionizing B2B sales
          </p>
        </div>

        <div className="space-y-12">
          {releases.map((release) => (
            <FadeUpScroll key={release.version}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">Version {release.version}</CardTitle>
                    <Badge variant="outline">{release.type}</Badge>
                  </div>
                  <CardDescription className="text-lg">
                    Released on {release.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    {release.highlights.map((highlight) => {
                      const Icon = highlight.icon
                      return (
                        <div key={highlight.title} className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Icon className="h-5 w-5" />
                            <h3 className="font-semibold">{highlight.title}</h3>
                          </div>
                          <Badge variant="secondary">{highlight.badge}</Badge>
                          <p className="text-muted-foreground">{highlight.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </FadeUpScroll>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default ChangelogPage
