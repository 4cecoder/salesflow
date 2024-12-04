import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Video, Users, BarChart, Settings, Zap, Phone } from "lucide-react"
import { FadeIn, SlideIn, StaggerChildren } from "@/components/shared/animations"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function GettingStarted() {
  return (
    <div className="max-w-none">
      <div className="space-y-8">
        <FadeIn>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Getting Started with SaleFlow
          </h1>
          <p className="text-xl text-muted-foreground">
            Welcome to the future of video sales! Follow this guide to start converting more leads with face-to-face video connections.
          </p>

          <Alert className="mt-6">
            <Zap className="h-4 w-4" />
            <AlertDescription>
              On average, our customers see a 300% increase in conversion rates within the first month.
            </AlertDescription>
          </Alert>
        </FadeIn>

        <StaggerChildren>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SlideIn>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Quick Setup Guide
                  </CardTitle>
                  <CardDescription>
                    Get your team ready in under 5 minutes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Users className="h-4 w-4" />
                      </div>
                      1. Add Your Team
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Invite your sales team members and set their roles. Each member gets their own personalized dashboard.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Video className="h-4 w-4" />
                      </div>
                      2. Set Up Video Channels
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Create dedicated video channels for different products or services. Customize waiting rooms and branding.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Phone className="h-4 w-4" />
                      </div>
                      3. Add to Your Website
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Embed our video widget on your website with a simple code snippet. Start receiving calls instantly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>

            <SlideIn delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    First Week Goals
                  </CardTitle>
                  <CardDescription>
                    Maximize your success with these initial steps
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <Video className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Complete Test Calls</h3>
                        <p className="text-sm text-muted-foreground">
                          Have each team member complete 2-3 test calls to get comfortable with the platform
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Set Team Schedule</h3>
                        <p className="text-sm text-muted-foreground">
                          Configure availability hours and automatic routing for your sales team
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <BarChart className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Track First Metrics</h3>
                        <p className="text-sm text-muted-foreground">
                          Monitor your first week's engagement rates and conversion metrics
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </SlideIn>
          </div>
        </StaggerChildren>

        <FadeIn delay={0.2}>
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Link href="/docs/video-architecture">
              <Button variant="outline" className="w-full group">
                Video Best Practices
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/docs/communication-templates">
              <Button variant="outline" className="w-full group">
                Sales Templates
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/docs/enterprise-features">
              <Button variant="outline" className="w-full group">
                Enterprise Features
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
