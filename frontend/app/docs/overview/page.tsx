import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RocketIcon, CodeIcon, GroupIcon, BarChartIcon } from "@radix-ui/react-icons"

export default function Overview() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div className="flex items-center gap-2 mb-4">
        <h1 className="mb-0">SaleFlow Platform Overview</h1>
        <Badge variant="secondary" className="h-6">Beta</Badge>
      </div>
      
      <p className="lead text-xl text-muted-foreground mb-8">
        SaleFlow is a revolutionary B2B SaaS platform that transforms traditional sales processes 
        through AI-powered video conferencing. Instead of conventional click funnels and forms, 
        SaleFlow enables direct, meaningful video interactions between sales teams and potential 
        customers, enhanced by AI capabilities.
      </p>

      <Tabs defaultValue="features" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="features">Core Features</TabsTrigger>
          <TabsTrigger value="tech">Technical Stack</TabsTrigger>
        </TabsList>
        
        <TabsContent value="features">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <RocketIcon className="h-5 w-5" />
                  <CardTitle>Video Conferencing</CardTitle>
                </div>
                <CardDescription>Integrated video communication tools</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Real-time video calls with AI-assisted features</li>
                  <li>Screen sharing and presentation tools</li>
                  <li>Recording and transcription capabilities</li>
                  <li>Automated scheduling and calendar integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CodeIcon className="h-5 w-5" />
                  <CardTitle>AI Sales Assistant</CardTitle>
                </div>
                <CardDescription>Intelligent sales support features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Virtual sales agent support</li>
                  <li>Real-time conversation analytics</li>
                  <li>Sentiment analysis</li>
                  <li>Smart lead qualification</li>
                  <li>Automated follow-ups</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <GroupIcon className="h-5 w-5" />
                  <CardTitle>Multi-tenant Architecture</CardTitle>
                </div>
                <CardDescription>Enterprise-grade workspace management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Secure company workspace isolation</li>
                  <li>Customizable branding per tenant</li>
                  <li>Role-based access control</li>
                  <li>Custom workflow configuration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChartIcon className="h-5 w-5" />
                  <CardTitle>Advanced CRM Integration</CardTitle>
                </div>
                <CardDescription>Comprehensive customer management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Customer interaction history</li>
                  <li>Pipeline management</li>
                  <li>Deal tracking</li>
                  <li>Integration with existing CRM systems</li>
                  <li>Automated reporting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tech">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Architecture</CardTitle>
                <CardDescription>Modern web technologies for optimal performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Next.js for server-side rendering",
                    "shadcn/ui component library",
                    "TypeScript for type safety",
                    "Real-time WebRTC integration",
                    "Responsive design for all devices"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Badge variant="outline">Web</Badge>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backend Architecture</CardTitle>
                <CardDescription>High-performance server infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Go (Golang) for API services",
                    "Fiber framework for HTTP operations",
                    "GORM for database operations",
                    "SQLite for data storage",
                    "JWT authentication",
                    "WebSocket support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Badge>Server</Badge>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Mobile Support</CardTitle>
          <CardDescription>Cross-platform mobile capabilities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li>Mobile-optimized video calls</li>
              <li>Responsive UI for all screen sizes</li>
              <li>Progressive Web App (PWA) capabilities</li>
            </ul>
            <ul className="space-y-2">
              <li>Touch-optimized controls</li>
              <li>Low-bandwidth mode for mobile networks</li>
              <li>Native-like experience</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/docs/video-architecture" className="no-underline">
            <Button variant="default">
              Explore Video Architecture <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/enterprise-features" className="no-underline">
            <Button variant="outline">
              View Enterprise Features <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
