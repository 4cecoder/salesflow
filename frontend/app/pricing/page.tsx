import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, Shield, Users, Globe } from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import { PageTransition } from "@/components/shared/page-transition"

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "AI Starter",
    price: "$149",
    description: "Experience the power of AI-enhanced video sales with core features to get you started.",
    features: [
      "Up to 5 sales agents",
      "AI-powered video meetings",
      "Basic sales assistant AI",
      "Real-time conversation insights",
      "Automated meeting transcription",
      "Smart lead qualification",
      "Basic CRM integration",
      "Email support",
      "99.9% uptime SLA",
    ],
  },
  {
    name: "AI Scale",
    price: "$299",
    description: "Advanced AI capabilities and analytics for growing sales teams.",
    features: [
      "Up to 20 sales agents",
      "Everything in AI Starter",
      "Advanced AI sales assistant",
      "Sentiment analysis",
      "Smart pipeline management",
      "Multi-language support",
      "Advanced CRM integration",
      "Priority support",
      "Custom AI training",
      "Team performance analytics",
    ],
    highlighted: true,
  },
  {
    name: "AI Enterprise",
    price: "Custom",
    description: "Full AI suite with custom models and enterprise-grade features.",
    features: [
      "Unlimited sales agents",
      "Everything in AI Scale",
      "Custom AI model training",
      "Enterprise AI dashboard",
      "Advanced security controls",
      "24/7 premium support",
      "Dedicated AI specialist",
      "Custom integrations",
      "HIPAA & SOC2 compliance",
      "White-label solution",
    ],
  },
]

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div className={`rounded-xl border p-8 ${tier.highlighted ? 'border-primary shadow-lg' : ''}`}>
      <h3 className="text-2xl font-bold">{tier.name}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-bold">{tier.price}</span>
        {tier.price !== "Custom" && <span className="ml-1 text-muted-foreground">/month</span>}
      </div>
      <p className="mt-4 text-muted-foreground">{tier.description}</p>
      <ul className="mt-8 space-y-4">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`mt-8 w-full ${tier.highlighted ? 'bg-primary hover:bg-primary/90' : ''}`}>
        {tier.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

export default function Pricing() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -z-10" />
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Zap className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI-Powered Sales Revolution</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight lg:text-6xl">
              Transform Your Sales
              <span className="text-primary block mt-2">With AI-Enhanced Video</span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Supercharge your sales team with AI-powered video conferencing, real-time insights,
              and automated follow-ups. Choose the plan that fits your growth journey.
            </p>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 border-t">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">How does the AI sales assistant work?</h3>
              <p className="text-muted-foreground">
                Our AI assistant analyzes conversations in real-time, provides smart suggestions,
                and helps qualify leads automatically. It learns from your team's best practices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">
                Yes, you can change plans anytime. We'll prorate the charges and your AI models
                will adapt to your new tier's capabilities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What security certifications do you have?</h3>
              <p className="text-muted-foreground">
                We're SOC 2 Type II certified and GDPR compliant. Enterprise plans include additional security features and HIPAA compliance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer volume discounts?</h3>
              <p className="text-muted-foreground">
                Yes, we offer custom pricing for larger teams. Contact our sales team to discuss your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-gradient-to-r from-primary/10 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <Zap className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Limited Time Offer</span>
              </div>
              <h2 className="text-3xl font-bold">Start Your AI Sales Journey Today</h2>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Join innovative companies using SaleFlow's AI-powered platform to close more deals
                and transform their sales process. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  Talk to Sales
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
