import { Button } from "@/components/ui/button"
import { Video, MessageSquare, Zap, Calendar, Shield, Globe, ArrowRight, Users, BarChart, Headphones } from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import { PageTransition } from "@/components/shared/page-transition"

function FeatureSection({ title, description, icon: Icon, features }: {
  title: string;
  description: string;
  icon: any;
  features: string[];
}) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 py-12">
      <div className="lg:w-1/3">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-2">
            <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -z-10" />
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Enterprise-Grade Security</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight lg:text-6xl">
              Enterprise Video Sales
              <span className="text-primary block mt-2">Built for Scale</span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              A comprehensive video sales platform that combines enterprise security, 
              scalability, and advanced features to transform your sales process.
            </p>
          </div>
        </section>

        {/* Features Sections */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20">
          <FeatureSection
            icon={Video}
            title="Enterprise Video Infrastructure"
            description="Built on WebRTC with global infrastructure for secure, high-quality video connections at scale."
            features={[
              "End-to-end encrypted video calls",
              "Global CDN for low-latency streaming",
              "Automatic quality optimization",
              "Screen sharing and presentation tools",
              "Automatic call recording with retention",
              "Custom branded video rooms",
              "WebRTC with TURN fallback",
              "99.99% uptime guarantee"
            ]}
          />

          <FeatureSection
            icon={Shield}
            title="Enterprise Security & Compliance"
            description="Bank-grade security and compliance features to meet the most stringent enterprise requirements."
            features={[
              "SOC 2 Type II compliance",
              "GDPR & HIPAA compliance",
              "Single Sign-On (SSO) support",
              "Role-based access control (RBAC)",
              "IP allowlisting",
              "Data retention controls",
              "Audit logs and monitoring",
              "DLP integration support"
            ]}
          />

          <FeatureSection
            icon={Users}
            title="Advanced Team Management"
            description="Comprehensive tools for managing large sales teams and departments efficiently."
            features={[
              "Hierarchical team structure",
              "Custom role definitions",
              "Department-level analytics",
              "Team-based permissions",
              "Bulk user provisioning",
              "Active Directory sync",
              "Cross-team collaboration",
              "Performance monitoring"
            ]}
          />

          <FeatureSection
            icon={BarChart}
            title="Enterprise Analytics"
            description="Deep insights and reporting capabilities for data-driven decision making."
            features={[
              "Custom dashboard creation",
              "Team performance metrics",
              "Video call quality analytics",
              "Conversion tracking",
              "Custom report generation",
              "API usage monitoring",
              "Scheduled report delivery",
              "Data export capabilities"
            ]}
          />

          <FeatureSection
            icon={Globe}
            title="Integration & API"
            description="Flexible integration options to fit into your existing enterprise workflow."
            features={[
              "RESTful API access",
              "WebSocket real-time support",
              "CRM integration (Salesforce, HubSpot)",
              "Calendar integration",
              "Custom webhook support",
              "Rate limiting controls",
              "API key management",
              "Custom endpoint creation"
            ]}
          />

          <FeatureSection
            icon={Headphones}
            title="Enterprise Support"
            description="Dedicated support and resources to ensure your success."
            features={[
              "24/7 priority support",
              "Dedicated success manager",
              "Technical account manager",
              "Emergency response team",
              "Training and onboarding",
              "Regular business reviews",
              "Custom SLA options",
              "Implementation consulting"
            ]}
          />
        </section>

        {/* CTA Section */}
        <section className="border-t bg-gradient-to-r from-primary/10 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <Zap className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Limited Time Offer</span>
              </div>
              <h2 className="text-3xl font-bold">Ready for Enterprise-Grade Video Sales?</h2>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Join industry leaders who trust SaleFlow for their video sales needs.
                Start with a free enterprise trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                  Start Enterprise Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  Schedule Demo
                  <Video className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>SOC 2 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>10,000+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>Global Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
