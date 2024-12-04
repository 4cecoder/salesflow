import { Metadata } from "next"
import { Mail, MessageCircle, Phone, FileText } from "lucide-react"
import { supportData } from "@/lib/mock-data"
import { BackButton } from "@/components/ui/back-button"

export const metadata: Metadata = {
  title: "Support - SaleFlow",
  description: "Get help and support for your SaleFlow platform.",
}

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <BackButton href="/" />
      <h1 className="text-4xl font-bold mb-8">Support Center</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">How can we help?</h2>
          <p className="text-muted-foreground">
            Our support team is here to help you get the most out of SaleFlow.
            Choose from our various support channels below.
          </p>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Priority Support Hours</h3>
          <p className="text-muted-foreground">
            Weekdays: {supportData.supportHours.weekday.start} - {supportData.supportHours.weekday.end} {supportData.supportHours.weekday.timezone}<br />
            Weekends: {supportData.supportHours.weekend.start} - {supportData.supportHours.weekend.end} {supportData.supportHours.weekend.timezone}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {supportData.contactChannels.map((channel) => {
          const Icon = channel.type === 'chat' ? MessageCircle : 
                      channel.type === 'email' ? Mail : Phone;
          
          return (
            <div key={channel.type} className="p-6 border rounded-lg">
              <Icon className="h-8 w-8 mb-4" />
              <h3 className="font-semibold mb-2 capitalize">{channel.type} Support</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Availability: {channel.availability}</p>
                <p>Response time: {channel.responseTime}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {supportData.faqItems.map((faq, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <div className="flex items-center gap-4">
          <FileText className="h-6 w-6" />
          <div>
            <h2 className="font-semibold">Need more help?</h2>
            <p className="text-muted-foreground">Check our comprehensive documentation for detailed guides and tutorials.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
