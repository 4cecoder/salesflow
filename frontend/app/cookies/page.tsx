"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTransition } from "@/components/shared/page-transition"
import { FadeUpScroll } from "@/components/shared/scroll-animation"
import { Cookie, Settings, Shield, Clock, BarChart, Power } from "lucide-react"

const cookieTypes = [
  {
    title: "Essential Cookies",
    icon: Shield,
    description: "Required for core functionality",
    examples: [
      {
        name: "session_id",
        purpose: "Maintains your login session",
        duration: "Session"
      },
      {
        name: "csrf_token",
        purpose: "Prevents cross-site request forgery",
        duration: "Session"
      },
      {
        name: "auth_token",
        purpose: "Keeps you authenticated",
        duration: "30 days"
      }
    ]
  },
  {
    title: "Functional Cookies",
    icon: Settings,
    description: "Enhance your experience",
    examples: [
      {
        name: "language_pref",
        purpose: "Remembers your language preference",
        duration: "1 year"
      },
      {
        name: "theme_setting",
        purpose: "Saves your UI preferences",
        duration: "1 year"
      },
      {
        name: "recent_calls",
        purpose: "Tracks recent video calls",
        duration: "30 days"
      }
    ]
  },
  {
    title: "Analytics Cookies",
    icon: BarChart,
    description: "Help us improve our service",
    examples: [
      {
        name: "_ga",
        purpose: "Google Analytics tracking",
        duration: "2 years"
      },
      {
        name: "usage_metrics",
        purpose: "Feature usage statistics",
        duration: "90 days"
      },
      {
        name: "performance_data",
        purpose: "Service performance monitoring",
        duration: "30 days"
      }
    ]
  },
  {
    title: "Marketing Cookies",
    icon: Power,
    description: "Support our marketing efforts",
    examples: [
      {
        name: "campaign_ref",
        purpose: "Tracks marketing campaigns",
        duration: "30 days"
      },
      {
        name: "ad_preferences",
        purpose: "Personalizes advertisements",
        duration: "90 days"
      },
      {
        name: "referral_source",
        purpose: "Records traffic sources",
        duration: "30 days"
      }
    ]
  }
]

export default function CookiesPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-muted-foreground">
            Understanding how we use cookies to improve your experience
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold">About Our Cookies</h2>
            </div>
            <p className="text-muted-foreground">
              SaleFlow uses cookies and similar technologies to provide, protect, and improve our services. 
              This policy explains how and why we use these technologies and the choices you have.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {cookieTypes.map((type) => (
            <FadeUpScroll key={type.title}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <type.icon className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle>{type.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4 font-medium">Cookie Name</th>
                          <th className="text-left py-2 px-4 font-medium">Purpose</th>
                          <th className="text-left py-2 px-4 font-medium">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {type.examples.map((cookie) => (
                          <tr key={cookie.name} className="border-b last:border-0">
                            <td className="py-2 px-4 text-sm">
                              <code className="bg-primary/10 px-2 py-1 rounded">
                                {cookie.name}
                              </code>
                            </td>
                            <td className="py-2 px-4 text-sm text-muted-foreground">
                              {cookie.purpose}
                            </td>
                            <td className="py-2 px-4 text-sm text-muted-foreground">
                              {cookie.duration}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </FadeUpScroll>
          ))}
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Managing Your Cookie Preferences</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are 
              already on your computer and you can set most browsers to prevent them from being placed. 
              However, if you do this, you may have to manually adjust some preferences every time you 
              visit a site and some services and functionalities may not work.
            </p>
            <p className="text-muted-foreground">
              For more information about cookies, visit{" "}
              <a 
                href="https://www.allaboutcookies.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.allaboutcookies.org
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  )
}
