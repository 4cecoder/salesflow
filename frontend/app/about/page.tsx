"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  RocketIcon,
  BarChartIcon,
  LightningBoltIcon,
  LayersIcon,
  GlobeIcon,
  LockClosedIcon,
  PersonIcon,
  DashboardIcon,
  TimerIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons"
import { BackButton } from "@/components/ui/back-button"

const features = [
  {
    title: "Smart Routing",
    description: "Automatically connect visitors to the right sales expert based on their browsing behavior and product interest.",
    icon: DashboardIcon,
    metrics: ["AI-powered matching", "Instant connections"]
  },
  {
    title: "Instant Availability",
    description: "Our AI-powered system ensures someone is always ready to take that crucial call.",
    icon: TimerIcon,
    metrics: ["24/7 availability", "No waiting time"]
  },
  {
    title: "Global Reach",
    description: "Connect with customers worldwide through real-time translation and always-on availability.",
    icon: GlobeIcon,
    metrics: ["40+ languages", "Worldwide access"]
  },
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance built into every call for complete peace of mind.",
    icon: LockClosedIcon,
    metrics: ["Bank-level security", "Full compliance"]
  }
]

const metrics = [
  { label: "Conversion Rate", value: "300%", subtext: "increase" },
  { label: "Lead Response", value: "5x", subtext: "faster" },
  { label: "Sales Cycle", value: "70%", subtext: "reduction" },
  { label: "Deal Size", value: "45%", subtext: "higher" }
]

const achievements = [
  { label: "Enterprise Customers", value: "200+", subtext: "and growing" },
  { label: "Monthly Calls", value: "10k+", subtext: "processed" },
  { label: "Customer Satisfaction", value: "95%", subtext: "rating" },
  { label: "MoM Growth", value: "150%", subtext: "consistent" }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <BackButton href="/" />
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About SaleFlow</h1>
        <p className="text-xl text-muted-foreground">
          Transforming B2B sales through instant video connections and AI-powered matching
        </p>
      </div>

      {/* Mission Section */}
      <Card className="mb-16">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <RocketIcon className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-semibold text-primary">Our Mission</h2>
          </div>
          <p className="text-xl leading-relaxed text-muted-foreground">
            At SaleFlow, we're revolutionizing B2B sales by enabling instant video connections 
            between your sales team and website visitors. In a world where immediate answers 
            are expected, we eliminate the friction of forms, emails, and scheduled calls, 
            leading to a proven 300% increase in conversion rates.
          </p>
        </CardContent>
      </Card>

      {/* Impact Metrics Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
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
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
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

      {/* Achievements Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">
                  {achievement.value}
                </CardTitle>
                <CardDescription className="text-lg">
                  {achievement.label}
                  <br />
                  <span className="text-sm text-muted-foreground">
                    {achievement.subtext}
                  </span>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Get Started with SaleFlow
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
