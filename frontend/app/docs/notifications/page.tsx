import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Bell, BellRing, Users, Video, MessageSquare, BarChart, ArrowRight } from "lucide-react"
import { FadeIn, SlideIn, StaggerChildren } from "@/components/shared/animations"

export default function Notifications() {
  return (
    <div className="max-w-none">
      <div className="space-y-8">
        <FadeIn>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Real-time Sales Notifications
          </h1>
          <p className="text-xl text-muted-foreground">
            Keep your sales team instantly responsive with our comprehensive notification system.
          </p>

          <Alert className="mt-6">
            <BellRing className="h-4 w-4" />
            <AlertDescription>
              Sales teams using our notification system respond to leads 5x faster on average.
            </AlertDescription>
          </Alert>
        </FadeIn>

        <StaggerChildren>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SlideIn>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notification Types
                  </CardTitle>
                  <CardDescription>
                    Multi-channel notifications for maximum engagement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Channels</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            New Lead
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-red-500">Urgent</Badge>
                        </TableCell>
                        <TableCell>Push, SMS, Email, Desktop</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4" />
                            Call Request
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-red-500">Urgent</Badge>
                        </TableCell>
                        <TableCell>Push, Sound, Desktop</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" />
                            Chat Message
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-500">High</Badge>
                        </TableCell>
                        <TableCell>Push, Desktop</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <BarChart className="h-4 w-4" />
                            Performance Alert
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge>Normal</Badge>
                        </TableCell>
                        <TableCell>Push, Email</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </SlideIn>

            <SlideIn delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Team Engagement Features
                  </CardTitle>
                  <CardDescription>
                    Keep your team alert and responsive
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <Bell className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Smart Routing</h3>
                        <p className="text-sm text-muted-foreground">
                          Automatically route notifications to available agents based on status and workload
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Escalation System</h3>
                        <p className="text-sm text-muted-foreground">
                          Automatically escalate unresponded notifications to team leads after set timeframes
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <BarChart className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Response Analytics</h3>
                        <p className="text-sm text-muted-foreground">
                          Track team response times and engagement rates with detailed analytics
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
          <Card>
            <CardHeader>
              <CardTitle>Implementation Example</CardTitle>
              <CardDescription>Quick setup for real-time notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                <code>{`// Subscribe to real-time notifications
const ws = new WebSocket('wss://api.saleflow.com/ws/notifications')

ws.onmessage = (event) => {
  const notification = JSON.parse(event.data)
  
  switch(notification.type) {
    case 'new_lead':
      // Show urgent notification with sound
      showUrgentNotification({
        title: 'New Lead Waiting!',
        body: \`\${notification.data.name} is requesting a call\`,
        sound: 'urgent.mp3'
      })
      break
      
    case 'call_request':
      // Show call notification with accept/decline buttons
      showCallNotification({
        title: 'Incoming Call Request',
        body: 'Customer waiting in lobby',
        actions: ['Accept', 'Decline']
      })
      break
  }
}`}</code>
              </pre>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/docs/video-architecture">
              <Button variant="outline" className="w-full sm:w-auto group">
                Video Integration
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/docs/endpoints">
              <Button variant="outline" className="w-full sm:w-auto group">
                API Reference
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
