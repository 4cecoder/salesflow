"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  RocketIcon,
  BarChartIcon,
  LightningBoltIcon,
  LayersIcon,
  GlobeIcon,
  LockClosedIcon,
  PersonIcon,
  DashboardIcon,
  PieChartIcon,
  TimerIcon,
} from "@radix-ui/react-icons"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [
  {
    title: "Revolutionizing B2B Sales",
    content: "Transform anonymous browsers into face-to-face conversations instantly. SaleFlow enables immediate video connections between your sales team and website visitors, leading to a proven 300% increase in conversion rates.",
    metrics: ["300% conversion increase", "5x faster response", "70% shorter sales cycle"],
    icon: RocketIcon
  },
  {
    title: "Market Opportunity",
    content: "The B2B sales technology market is projected to reach $30 billion by 2025. SaleFlow is positioned to capture a significant share with our revolutionary approach.",
    metrics: ["$30B market by 2025", "95% satisfaction rate", "150% MoM growth"],
    icon: PieChartIcon 
  },
  {
    title: "Current Traction",
    content: "We're not just growing – we're scaling rapidly and sustainably with a strong customer base and robust pipeline.",
    metrics: ["200+ enterprise customers", "10,000+ monthly calls", "1,000+ qualified leads"],
    icon: LayersIcon
  },
  {
    title: "Competitive Edge",
    content: "While others offer basic video chat, SaleFlow provides an entire sales acceleration platform with AI-driven routing, real-time translation, and instant meeting capabilities.",
    metrics: ["AI-powered routing", "Real-time analytics", "Enterprise security"],
    icon: LightningBoltIcon
  },
  {
    title: "Investment Opportunity",
    content: "Join us in revolutionizing B2B sales. Whether as an investor or early adopter, you have the opportunity to be part of something transformative.",
    metrics: ["Rapid scaling", "Global expansion", "AI-powered future"],
    icon: LayersIcon
  }
]

const features = [
  {
    title: "Smart Routing",
    description: "AI-powered system that automatically connects visitors to the right sales expert based on browsing behavior.",
    icon: DashboardIcon,
    metrics: ["98% routing accuracy", "< 30s connection time"]
  },
  {
    title: "Global Reach",
    description: "Real-time translation and 24/7 availability ensures your sales team can connect with prospects worldwide.",
    icon: GlobeIcon,
    metrics: ["40+ languages", "24/7 availability"]
  },
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance built into every call, meeting enterprise security requirements.",
    icon: LockClosedIcon,
    metrics: ["SOC 2 compliant", "End-to-end encryption"]
  },
  {
    title: "Instant Availability",
    description: "Our AI ensures someone is always ready to take that crucial call, maximizing every opportunity.",
    icon: TimerIcon,
    metrics: ["< 5s response time", "99.9% uptime"]
  }
]

const metrics = {
  growth: [
    { label: "MRR Growth", value: "150%", subtext: "month over month" },
    { label: "Enterprise Customers", value: "200+", subtext: "and growing" },
    { label: "Monthly Video Calls", value: "10,000+", subtext: "processed" },
    { label: "Customer Satisfaction", value: "95%", subtext: "rating" }
  ],
  impact: [
    { label: "Conversion Rate", value: "300%", subtext: "increase" },
    { label: "Sales Cycle", value: "70%", subtext: "reduction" },
    { label: "Lead Response", value: "5x", subtext: "faster" },
    { label: "Deal Size", value: "45%", subtext: "larger" }
  ]
}

export default function InvestorPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Investor Relations</h1>
        <p className="text-xl text-muted-foreground">
          Join us in revolutionizing the future of B2B sales through instant video connections
        </p>
      </div>
      
      {/* Slideshow Section */}
      <Carousel className="w-full max-w-5xl mx-auto mb-16">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <slide.icon className="w-8 h-8 text-primary" />
                      <h2 className="text-3xl font-semibold text-primary">
                        {slide.title}
                      </h2>
                    </div>
                    <p className="text-xl leading-relaxed text-muted-foreground">
                      {slide.content}
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {slide.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="bg-primary/5 p-4 rounded-lg text-center"
                        >
                          <p className="font-semibold text-primary">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      {/* Key Metrics Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Key Metrics</h2>
        <Tabs defaultValue="growth" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
            <TabsTrigger value="growth">Growth Metrics</TabsTrigger>
            <TabsTrigger value="impact">Impact Metrics</TabsTrigger>
          </TabsList>
          <TabsContent value="growth">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              {metrics.growth.map((metric, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">
                      {metric.value}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {metric.label}
                      <br />
                      <span className="text-sm text-muted-foreground">
                        {metric.subtext}
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="impact">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              {metrics.impact.map((metric, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">
                      {metric.value}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {metric.label}
                      <br />
                      <span className="text-sm text-muted-foreground">
                        {metric.subtext}
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Core Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {feature.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-primary/5 px-4 py-2 rounded-lg text-sm font-medium text-primary"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Contact Investor Relations
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
