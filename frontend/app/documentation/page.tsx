import { Button } from "@/components/ui/button"
import { Video, Code, Book, Zap, Lightbulb, MessageSquare, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import { PageTransition } from "@/components/shared/page-transition"

function DocCard({ icon: Icon, title, description, href }: {
  icon: any;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a href={href} className="block group">
      <div className="rounded-xl border p-6 h-full hover:border-primary transition-colors">
        <div className="p-2 w-fit rounded-lg bg-primary/10 mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </a>
  )
}

export default function Documentation() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-32 pb-20">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight lg:text-6xl">
              Documentation &
              <span className="text-primary"> Resources</span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Everything you need to get started with SaleFlow. From quick start guides to
              detailed API documentation.
            </p>
            <div className="w-full max-w-md">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full px-4 py-2 rounded-lg border bg-background"
                />
                <kbd className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:block text-muted-foreground">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20">
          <h2 className="text-2xl font-bold mb-8">Quick Start</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocCard
              icon={Video}
              title="Video Architecture"
              description="Learn about our enterprise-grade video infrastructure"
              href="/docs/video-architecture"
            />
            <DocCard
              icon={Code}
              title="API Reference"
              description="Complete API documentation for developers"
              href="/docs/endpoints"
            />
            <DocCard
              icon={Book}
              title="Enterprise Features"
              description="Explore our enterprise security and features"
              href="/docs/enterprise-features"
            />
          </div>
        </section>

        {/* Main Documentation */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 border-t">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Getting Started */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Platform Overview</h2>
              <div className="space-y-6">
                <a href="/docs/overview" className="block group">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary">Platform Overview</h3>
                      <p className="text-muted-foreground text-sm">
                        Introduction to SaleFlow's core features and capabilities
                      </p>
                    </div>
                  </div>
                </a>
                <a href="/docs/video-architecture" className="block group">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary">Video Architecture</h3>
                      <p className="text-muted-foreground text-sm">
                        Deep dive into our WebRTC-based video infrastructure
                      </p>
                    </div>
                  </div>
                </a>
                <a href="/docs/enterprise-features" className="block group">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary">Enterprise Features</h3>
                      <p className="text-muted-foreground text-sm">
                        Security, compliance, and enterprise capabilities
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Popular Topics */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Developer Resources</h2>
              <div className="space-y-6">
                <a href="/docs/endpoints" className="block group">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary">API Reference</h3>
                      <p className="text-muted-foreground text-sm">
                        Complete API documentation and endpoints
                      </p>
                    </div>
                  </div>
                </a>
                <a href="/docs/communication-templates" className="block group">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary">Communication Templates</h3>
                      <p className="text-muted-foreground text-sm">
                        Customizable templates for customer communication
                      </p>
                    </div>
                  </div>
                </a>
                <a href="/docs/integrations" className="block group">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary">Integrations</h3>
                      <p className="text-muted-foreground text-sm">
                        CRM and third-party integration guides
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl font-bold">Need More Help?</h2>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
