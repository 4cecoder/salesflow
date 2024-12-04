"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTransition } from "@/components/shared/page-transition"
import { FadeUpScroll } from "@/components/shared/scroll-animation"
import { Shield, Lock, Eye, UserCheck, Server, Database, Globe, Clock } from "lucide-react"

const sections = [
  {
    title: "Information We Collect",
    icon: Eye,
    content: [
      "Contact information (name, email, phone number)",
      "Company details and business information",
      "Usage data and interaction metrics",
      "Video call recordings (with explicit consent)",
      "Communication preferences",
      "Technical data (IP address, browser type, device information)"
    ]
  },
  {
    title: "How We Use Your Data",
    icon: Database,
    content: [
      "Providing and improving our video sales platform",
      "Personalizing your experience",
      "Analyzing usage patterns to enhance features",
      "Sending relevant updates and communications",
      "Ensuring platform security and preventing fraud",
      "Complying with legal obligations"
    ]
  },
  {
    title: "Data Protection",
    icon: Shield,
    content: [
      "Enterprise-grade encryption for all data",
      "Regular security audits and penetration testing",
      "Strict access controls and authentication",
      "Secure data centers with redundancy",
      "Regular backup procedures",
      "Incident response protocols"
    ]
  },
  {
    title: "Your Rights",
    icon: UserCheck,
    content: [
      "Access your personal data",
      "Request data correction or deletion",
      "Opt-out of marketing communications",
      "Data portability options",
      "Withdraw consent for data processing",
      "Lodge complaints with supervisory authorities"
    ]
  },
  {
    title: "International Transfers",
    icon: Globe,
    content: [
      "Data transfer safeguards",
      "EU-US Privacy Shield compliance",
      "Standard contractual clauses",
      "Regional data storage options",
      "Cross-border data protection measures",
      "International regulatory compliance"
    ]
  },
  {
    title: "Data Retention",
    icon: Clock,
    content: [
      "Clear retention schedules",
      "Automatic data deletion procedures",
      "Archive policies for business records",
      "Compliance with legal requirements",
      "Regular data review and cleanup",
      "User-controlled data removal options"
    ]
  }
]

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Your privacy is our priority. Learn how we protect and manage your data.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Last Updated: December 3rd, 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This Privacy Policy explains how SaleFlow ("we," "us," or "our") collects, uses, 
                and protects your personal information. By using our services, you agree to the 
                collection and use of information in accordance with this policy.
              </p>
            </CardContent>
          </Card>

          {sections.map((section, index) => (
            <FadeUpScroll key={section.title}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <section.icon className="w-6 h-6 text-primary" />
                    <CardTitle>{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeUpScroll>
          ))}

          <Card className="mt-8">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                For any privacy-related questions or concerns, please contact our Data Protection Officer at{" "}
                <a href="mailto:privacy@saleflow.com" className="text-primary hover:underline">
                  privacy@saleflow.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  )
}
