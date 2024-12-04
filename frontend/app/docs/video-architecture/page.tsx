import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FadeIn, SlideIn } from "@/components/shared/animations"

export default function VideoArchitecture() {
  return (
    <div className="max-w-none">
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Video Call Architecture
        </h1>

        <Alert>
          <AlertDescription>
            SaleFlow's video calling system is built on WebRTC technology, enabling peer-to-peer video 
            communication with fallback to TURN servers when necessary.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Frontend WebRTC Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Media capture (getUserMedia)</li>
                <li>PeerConnection management</li>
                <li>DataChannel for metadata</li>
                <li>Screen sharing (getDisplayMedia)</li>
                <li>Local recording capabilities</li>
                <li>Bandwidth and quality management</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Signaling Server</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>WebSocket-based communication</li>
                <li>SDP exchange facilitation</li>
                <li>ICE candidate distribution</li>
                <li>Room management</li>
                <li>Participant tracking</li>
                <li>Connection state management</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>STUN/TURN Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>STUN servers for NAT traversal</li>
                <li>TURN servers for fallback relay</li>
                <li>Geographic distribution for low latency</li>
                <li>Automatic server selection</li>
                <li>Connection quality monitoring</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recording Service</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Server-side recording</li>
                <li>Real-time transcoding</li>
                <li>Cloud storage integration</li>
                <li>Automatic backup</li>
                <li>Access control</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="connection" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="connection">Connection Flow</TabsTrigger>
            <TabsTrigger value="quality">Quality Management</TabsTrigger>
          </TabsList>
          <FadeIn>
            <TabsContent value="connection">
              <SlideIn>
                <Card>
                  <CardHeader>
                    <CardTitle>Connection Flow Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Client requests to join room</li>
                      <li>Server authenticates and returns room token</li>
                      <li>Client connects to signaling WebSocket</li>
                      <li>Client creates RTCPeerConnection</li>
                      <li>Signaling server coordinates SDP exchange</li>
                      <li>ICE candidates are exchanged</li>
                      <li>Media streams are established</li>
                    </ol>
                  </CardContent>
                </Card>
              </SlideIn>
            </TabsContent>
            <TabsContent value="quality">
              <SlideIn>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Adaptive bitrate control</li>
                      <li>Network quality monitoring</li>
                      <li>Automatic quality adjustment</li>
                      <li>Bandwidth optimization</li>
                      <li>Packet loss recovery</li>
                    </ul>
                  </CardContent>
                </Card>
              </SlideIn>
            </TabsContent>
          </FadeIn>
        </Tabs>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/docs/endpoints">
            <Button className="w-full sm:w-auto group">
              View API Reference
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/docs/enterprise-features">
            <Button variant="outline" className="w-full sm:w-auto">
              Enterprise Features
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
