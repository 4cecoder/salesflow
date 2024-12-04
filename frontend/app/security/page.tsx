"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTransition } from "@/components/shared/page-transition"
import { FadeUpScroll } from "@/components/shared/scroll-animation"
import { 
  Shield, 
  Lock, 
  Key, 
  Server, 
  AlertTriangle,
  FileCheck,
  Users,
  Eye
} from "lucide-react"

const sections = [
  {
    title: "Infrastructure Security",
    icon: Server,
    items: [
      "SOC 2 Type II certified infrastructure",
      "24/7 infrastructure monitoring",
      "Multi-region data redundancy",
      "Regular penetration testing",
      "DDoS protection",
      "Automated threat detection"
    ]
  },
  {
    title: "Data Encryption",
    icon: Lock,
    items: [
      "End-to-end encryption for all video calls",
      "AES-256 encryption at rest",
      "TLS 1.3 for data in transit",
      "Secure key management",
      "Regular encryption audit",
      "Hardware security modules (HSM)"
    ]
  },
  {
    title: "Access Control",
    icon: Key,
    items: [
      "Role-based access control (RBAC)",
      "Multi-factor authentication",
      "Single sign-on (SSO) support",
      "Session management",
      "IP whitelisting",
      "Audit logging"
    ]
  },
  {
    title: "Compliance",
    icon: FileCheck,
    items: [
      "GDPR compliance",
      "CCPA compliance",
      "HIPAA compliance available",
      "ISO 27001 certification",
      "Regular compliance audits",
      "Data processing agreements"
    ]
  },
  {
    title: "Security Operations",
    icon: Shield,
    items: [
      "24/7 security team",
      "Incident response plan",
      "Regular security training",
      "Vulnerability management",
      "Security patch management",
      "Third-party security reviews"
    ]
  },
  {
    title: "Privacy Controls",
    icon: Eye,
    items: [
      "Data minimization practices",
      "Privacy by design",
      "Configurable retention policies",
      "Data anonymization",
      "Consent management",
      "Privacy impact assessments"
    ]
  }
]

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Independently audited security controls"
  },
  {
    name: "ISO 27001",
    description: "Information security management"
  },
  {
    name: "GDPR",
    description: "European data protection compliance"
  },
  {
    name: "HIPAA",
    description: "Healthcare data protection"
  }
]

export default function SecurityPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Security at SaleFlow</h1>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade security for your sales communications
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold">Our Security Commitment</h2>
            </div>
            <p className="text-muted-foreground">
              At SaleFlow, security is not just a feature - it's fundamental to everything we do. 
              We employ industry-leading security measures to protect your data and communications, 
              ensuring your business operations remain secure and compliant.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert) => (
            <Card key={cert.name}>
              <CardContent className="p-6">
                <FileCheck className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <FadeUpScroll key={section.title}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <section.icon className="w-6 h-6 text-primary" />
                    <CardTitle>{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.items.map((item, i) => (
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
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Report a Security Issue</h3>
            </div>
            <p className="text-muted-foreground">
              If you believe you've found a security vulnerability in SaleFlow, please report it to{" "}
              <a href="mailto:security@saleflow.com" className="text-primary hover:underline">
                security@saleflow.com
              </a>
              . We appreciate your help in keeping SaleFlow secure.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  )
}
