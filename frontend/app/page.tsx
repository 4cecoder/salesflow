"use client"

import { Button } from "@/components/ui/button"
import { Video, MessageSquare, Zap, Calendar, Shield, Globe, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import { PageTransition } from "@/components/shared/page-transition"
import { FadeUpScroll, FadeInScroll, SlideInFromLeft, SlideInFromRight, ParallaxScroll } from "@/components/shared/scroll-animation"
import { Footer } from "@/components/shared/footer"
import Link from "next/link"

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -z-10" />
          <ParallaxScroll offset={-50}>
            <div className="flex flex-col items-center text-center space-y-8">
              <FadeUpScroll>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                  <Zap className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Transform Your Sales Process Today</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight lg:text-7xl">
                  Close Deals Faster with
                  <span className="text-primary block mt-2">Face-to-Face Video Sales</span>
                </h1>
              </FadeUpScroll>
              <FadeUpScroll>
                <p className="max-w-[700px] text-lg text-muted-foreground">
                  Experience 3x higher conversion rates with instant video connections. 
                  Turn cold leads into warm conversations, and website visitors into customers - 
                  all through seamless, one-click video calls.
                </p>
              </FadeUpScroll>
              <FadeInScroll>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                      Start Free Trial
                      <Video className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button size="lg" variant="outline" className="group">
                      Watch Demo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No credit card required • 14-day free trial • Full access
                </p>
              </FadeInScroll>
            </div>
          </ParallaxScroll>
        </section>

        {/* Stats Section */}
        <section className="bg-primary/5 py-12 border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <FadeUpScroll>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">300%</h3>
                  <p className="text-sm text-muted-foreground">Conversion Increase</p>
                </div>
              </FadeUpScroll>
              <FadeUpScroll>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">2 mins</h3>
                  <p className="text-sm text-muted-foreground">Average Setup Time</p>
                </div>
              </FadeUpScroll>
              <FadeUpScroll>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">10k+</h3>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
              </FadeUpScroll>
              <FadeUpScroll>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">4.9/5</h3>
                  <p className="text-sm text-muted-foreground">Customer Rating</p>
                </div>
              </FadeUpScroll>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20">
          <FadeUpScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Everything You Need for Modern Video Sales
              </h2>
              <p className="text-lg text-muted-foreground">
                Built for sales teams who understand that personal connection drives conversion. 
                Every feature is designed to make selling more human and effective.
              </p>
            </div>
          </FadeUpScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="h-8 w-8" />,
                title: "Instant Video Drop-ins",
                description: "Let customers instantly connect with available sales agents through one-click video calls. No scheduling needed.",
                href: "/features#video-calls"
              },
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Personal Sales Team",
                description: "Assign dedicated agents to handle customer inquiries, building lasting relationships through face-to-face interactions.",
                href: "/features#personal-sales-team"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Zero Friction",
                description: "No downloads, registrations, or complex setup. Customers join video calls directly from their browser.",
                href: "/features#zero-friction"
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Smart Availability",
                description: "Show real-time agent availability and automatically route customers to available team members.",
                href: "/features#smart-availability"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure & Private",
                description: "Enterprise-grade security for all video calls, ensuring customer privacy and data protection.",
                href: "/features#secure-private"
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Team Management",
                description: "Easily manage your sales team, track performance, and scale your video support as needed.",
                href: "/features#team-management"
              },
            ].map((feature, index) => {
              const AnimationWrapper = index % 3 === 0 ? SlideInFromLeft :
                                     index % 3 === 1 ? FadeUpScroll :
                                     SlideInFromRight;
              return (
                <AnimationWrapper key={index}>
                  <Link href={feature.href}>
                    <div className="rounded-xl border p-6 transition-colors hover:border-primary">
                      <div className="p-2 w-fit rounded-lg bg-primary/10 mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </Link>
                </AnimationWrapper>
              );
            })}
          </div>
        </section>

        {/* Integration Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 border-t">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <SlideInFromLeft className="flex-1 space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <Shield className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Enterprise-Ready Solution</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">Turn Website Visitors into Revenue</h2>
              <p className="text-lg text-muted-foreground">
                Stop losing leads to complicated sales processes. Our instant video solution lets you 
                connect with prospects the moment they show interest. It's like having your best 
                salespeople ready to greet visitors at every digital doorstep.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Connect with prospects in under 30 seconds</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Zero technical setup required for customers</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>AI-powered lead routing to the right agent</span>
                </li>
              </ul>
              <Link href="/documentation">
                <Button className="mt-6 group">
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </SlideInFromLeft>
            <SlideInFromRight className="flex-1">
              <div className="w-full aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg shadow-2xl border overflow-hidden">
                <div className="w-full h-full bg-white/40 backdrop-blur-sm p-6">
                  {/* Placeholder for product screenshot or demo video */}
                </div>
              </div>
            </SlideInFromRight>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-gradient-to-r from-primary/10 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <FadeUpScroll>
              <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Limited Time Offer
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Get 3 Months Free with Annual Plans
                </h2>
                <p className="text-lg text-muted-foreground max-w-[600px]">
                  Join thousands of successful businesses using SaleFlow to transform 
                  their sales process. Start your free trial today and see the difference 
                  face-to-face selling can make.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/pricing">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="group">
                      Talk to Sales
                      <MessageSquare className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-8 mt-12 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>SOC 2 Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </FadeUpScroll>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
