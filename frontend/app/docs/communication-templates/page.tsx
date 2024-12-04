import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InfoCircledIcon } from "@radix-ui/react-icons"

export default function CommunicationTemplates() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Communication Templates</h1>

      <Alert className="mb-8">
        <InfoCircledIcon className="h-4 w-4" />
        <AlertTitle>Compliance Ready</AlertTitle>
        <AlertDescription>
          All templates are designed to comply with US regulations including CAN-SPAM Act, TCPA, and other relevant legislation.
        </AlertDescription>
      </Alert>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Regulatory Compliance</CardTitle>
          <CardDescription>Key requirements for compliant communication</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Required Elements</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Required</Badge>
                  Clear identification of advertisements
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Required</Badge>
                  Valid physical postal address
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Required</Badge>
                  Clear opt-out instructions
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Required</Badge>
                  Honest subject lines/preview text
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Timing Restrictions (TCPA)</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge>Time</Badge>
                  No calls/texts before 8 AM or after 9 PM local time
                </li>
                <li className="flex items-center gap-2">
                  <Badge>List</Badge>
                  Respect Do-Not-Call lists
                </li>
                <li className="flex items-center gap-2">
                  <Badge>Internal</Badge>
                  Maintain internal Do-Not-Contact lists
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="email" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="email">Email Templates</TabsTrigger>
          <TabsTrigger value="video">Video Call Templates</TabsTrigger>
        </TabsList>
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>Email Templates</CardTitle>
              <CardDescription>Customizable templates for various email communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Meeting Communications</h3>
                  <ul className="space-y-2">
                    <li>Initial outreach</li>
                    <li>Meeting confirmation</li>
                    <li>Meeting reminders</li>
                    <li>Rescheduling requests</li>
                    <li>Cancellation notices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Follow-up Communications</h3>
                  <ul className="space-y-2">
                    <li>Post-meeting summary</li>
                    <li>Action items tracking</li>
                    <li>Resource sharing</li>
                    <li>Proposal follow-up</li>
                    <li>Decision request</li>
                    <li>Thank you messages</li>
                  </ul>
                </div>
              </div>

              <Card className="mt-6 bg-muted">
                <CardHeader>
                  <CardTitle className="text-base">Example: Meeting Confirmation Template</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm whitespace-pre-wrap">
                    {`Subject: Confirmed: Your Meeting with {company_name} on {date}

Dear {first_name},

This email confirms your scheduled meeting with {agent_name} from {company_name}.

Meeting Details:
- Date: {date}
- Time: {time} {timezone}
- Format: {meeting_type}
- Link: {meeting_link}

What to Expect:
{meeting_agenda}

Need to reschedule? Click here: {reschedule_link}

Best regards,
{agent_name}
{company_name}`}
                  </pre>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="video">
          <Card>
            <CardHeader>
              <CardTitle>Video Call Templates</CardTitle>
              <CardDescription>Pre-configured templates for video meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Meeting Agendas</h3>
                  <ul className="space-y-2">
                    <li>Initial discovery call</li>
                    <li>Product demonstration</li>
                    <li>Technical deep dive</li>
                    <li>Pricing discussion</li>
                    <li>Implementation planning</li>
                    <li>Contract review</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Presentation Templates</h3>
                  <ul className="space-y-2">
                    <li>Company overview</li>
                    <li>Product features</li>
                    <li>Technical architecture</li>
                    <li>Implementation roadmap</li>
                    <li>ROI analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Template Variables</CardTitle>
          <CardDescription>Dynamic variables that are automatically populated in templates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { code: "{first_name}", desc: "Recipient's first name" },
              { code: "{company_name}", desc: "Your company name" },
              { code: "{agent_name}", desc: "Sales agent's name" },
              { code: "{date}", desc: "Meeting/appointment date" },
              { code: "{time}", desc: "Meeting/appointment time" },
              { code: "{meeting_link}", desc: "Virtual meeting URL" },
              { code: "{unsubscribe_link}", desc: "Opt-out URL" },
            ].map((variable) => (
              <div key={variable.code} className="flex items-center gap-2">
                <code className="bg-muted px-2 py-1 rounded">{variable.code}</code>
                <span>- {variable.desc}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/docs/integrations" className="no-underline">
            <Button variant="outline">
              View Integrations <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/endpoints" className="no-underline">
            <Button variant="outline">
              API Documentation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
