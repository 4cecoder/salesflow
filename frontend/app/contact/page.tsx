import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageSquare, Video, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import { PageTransition } from "@/components/shared/page-transition"

function ContactCard({ icon: Icon, title, description, action }: {
  icon: any;
  title: string;
  description: string;
  action: {
    text: string;
    href: string;
  };
}) {
  return (
    <div className="rounded-xl border p-6 flex flex-col items-center text-center">
      <div className="p-3 rounded-full bg-primary/10 mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="outline" asChild>
        <a href={action.href}>{action.text}</a>
      </Button>
    </div>
  )
}

export default function Contact() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-32 pb-20">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight lg:text-6xl">
              Let's Talk About Your
              <span className="text-primary"> Sales Goals</span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Have questions about SaleFlow? Our team is here to help you choose the right solution
              for your business.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <ContactCard
              icon={Video}
              title="Video Chat"
              description="Talk to a sales representative instantly through video call"
              action={{ text: "Start Video Call", href: "#" }}
            />
            <ContactCard
              icon={Phone}
              title="Phone"
              description="Schedule a call with our sales team"
              action={{ text: "Schedule Call", href: "#" }}
            />
            <ContactCard
              icon={Mail}
              title="Email"
              description="Send us an email and we'll respond within 24 hours"
              action={{ text: "Send Email", href: "mailto:sales@saleflow.com" }}
            />
            <ContactCard
              icon={MessageSquare}
              title="Chat"
              description="Chat with our support team"
              action={{ text: "Start Chat", href: "#" }}
            />
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Work Email
                </label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input id="company" placeholder="Company Inc." />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your sales needs..."
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </section>

        {/* Office Locations */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 border-t">
          <h2 className="text-3xl font-bold text-center mb-12">Our Offices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold mb-2">San Francisco</h3>
              <p className="text-muted-foreground">
                100 Market Street<br />
                Suite 300<br />
                San Francisco, CA 94105
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">New York</h3>
              <p className="text-muted-foreground">
                335 Madison Avenue<br />
                4th Floor<br />
                New York, NY 10017
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">London</h3>
              <p className="text-muted-foreground">
                1 Canada Square<br />
                Canary Wharf<br />
                London E14 5AB, UK
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
