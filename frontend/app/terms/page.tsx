"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTransition } from "@/components/shared/page-transition"
import { FadeUpScroll } from "@/components/shared/scroll-animation"
import { 
  ScrollText, 
  ShieldCheck, 
  AlertCircle, 
  Ban, 
  Scale,
  CreditCard,
  FileText,
  MessageSquare
} from "lucide-react"

const sections = [
  {
    title: "Service Terms",
    icon: ScrollText,
    content: [
      {
        subtitle: "Account Terms",
        items: [
          "You must be 18 years or older to use this service",
          "You must provide accurate and complete registration information",
          "You are responsible for maintaining account security",
          "One person or legal entity per account"
        ]
      },
      {
        subtitle: "API Usage",
        items: [
          "API access is subject to rate limiting",
          "API keys must be kept secure",
          "No automated scraping without permission",
          "API documentation must be followed"
        ]
      }
    ]
  },
  {
    title: "User Responsibilities",
    icon: ShieldCheck,
    content: [
      {
        subtitle: "Content Guidelines",
        items: [
          "Users are responsible for all content shared",
          "Content must not violate any laws or regulations",
          "Respect intellectual property rights",
          "Maintain professional communication standards"
        ]
      },
      {
        subtitle: "Security",
        items: [
          "Keep login credentials confidential",
          "Report security vulnerabilities promptly",
          "Enable two-factor authentication when available",
          "Regular security audit participation"
        ]
      }
    ]
  },
  {
    title: "Prohibited Activities",
    icon: Ban,
    content: [
      {
        subtitle: "Restrictions",
        items: [
          "No unauthorized access attempts",
          "No distribution of malware or harmful code",
          "No interference with service operation",
          "No impersonation of others"
        ]
      },
      {
        subtitle: "Content Restrictions",
        items: [
          "No illegal or harmful content",
          "No spam or unsolicited messages",
          "No discriminatory content",
          "No misleading information"
        ]
      }
    ]
  },
  {
    title: "Payment Terms",
    icon: CreditCard,
    content: [
      {
        subtitle: "Billing",
        items: [
          "Payments are processed securely",
          "Subscription fees are billed in advance",
          "No refunds for partial month usage",
          "Price changes with 30 days notice"
        ]
      },
      {
        subtitle: "Cancellation",
        items: [
          "Cancel anytime through account settings",
          "Data retained for 30 days after cancellation",
          "No refunds for unused time",
          "Enterprise contracts may have different terms"
        ]
      }
    ]
  },
  {
    title: "Intellectual Property",
    icon: FileText,
    content: [
      {
        subtitle: "Ownership",
        items: [
          "SaleFlow retains all platform rights",
          "Users retain rights to their content",
          "Limited license granted for platform use",
          "No unauthorized use of our trademarks"
        ]
      },
      {
        subtitle: "Content License",
        items: [
          "License to use uploaded content",
          "Right to modify for platform purposes",
          "No transfer of ownership rights",
          "Respect for third-party rights"
        ]
      }
    ]
  },
  {
    title: "Dispute Resolution",
    icon: Scale,
    content: [
      {
        subtitle: "Process",
        items: [
          "Informal resolution attempt first",
          "Binding arbitration if necessary",
          "Class action waiver",
          "Jurisdiction in California, USA"
        ]
      },
      {
        subtitle: "Limitations",
        items: [
          "One-year limitation period",
          "Limited liability clauses",
          "No consequential damages",
          "Force majeure provisions"
        ]
      }
    ]
  }
]

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully before using SaleFlow
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Last Updated: December 3rd, 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              By using SaleFlow's services, you agree to be bound by these terms and conditions.
              These terms affect your legal rights and obligations, so if you do not agree to these terms,
              do not use our services.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
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
                  <div className="space-y-6">
                    {section.content.map((subsection, i) => (
                      <div key={i}>
                        <h3 className="font-semibold text-lg mb-3">{subsection.subtitle}</h3>
                        <ul className="space-y-3">
                          {subsection.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeUpScroll>
          ))}
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              For any questions about these terms, please contact us at{" "}
              <a href="mailto:legal@saleflow.com" className="text-primary hover:underline">
                legal@saleflow.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  )
}
