'use client'

import { mockCompany } from '@/data/mock-company'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Building2, Users, Globe, Calendar, CreditCard, BarChart3, Mail, Phone, Download, Pencil } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { EditProfileForm } from '@/components/company/edit-profile-form'
import { useState } from 'react'
import { useToast } from "@/hooks/use-toast"

export default function CompanyProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [company, setCompany] = useState(mockCompany)
  const { toast } = useToast()

  const handleSave = (updatedCompany: typeof mockCompany) => {
    setCompany(updatedCompany)
    setIsEditing(false)
    toast({
      title: "Profile updated",
      description: "Your company profile has been updated successfully.",
    })
  }

  if (isEditing) {
    return (
      <div className="container py-6">
        <EditProfileForm
          company={company}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      </div>
    )
  }

  return (
    <div className="container py-6 space-y-6">
      {/* Company Overview */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">{company.name}</h1>
          <p className="text-muted-foreground mt-1">{company.description}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setIsEditing(true)}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Quick Stats */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{company.usage.totalMeetings}</div>
            <p className="text-xs text-muted-foreground">Across all users</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Participants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{company.usage.totalParticipants}</div>
            <p className="text-xs text-muted-foreground">External and internal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Storage Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{company.usage.storageUsed}</div>
            <p className="text-xs text-muted-foreground">Recordings and files</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Recording Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{company.usage.recordingHours}</div>
            <p className="text-xs text-muted-foreground">Total recorded time</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Company Details</CardTitle>
            <CardDescription>General information about the company</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">Industry</label>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span>{company.industry}</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">Company Size</label>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{company.size}</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">Website</label>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a href={company.website} className="text-primary hover:underline">{company.website}</a>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">Founded</label>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{company.founded}</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-4">Key Contacts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Primary Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{company.contacts.primary.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <p className="font-medium">{company.contacts.primary.name}</p>
                        <p className="text-sm text-muted-foreground">{company.contacts.primary.role}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-3 w-3" />
                          <span>{company.contacts.primary.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-3 w-3" />
                          <span>{company.contacts.primary.phone}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Billing Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{company.contacts.billing.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <p className="font-medium">{company.contacts.billing.name}</p>
                        <p className="text-sm text-muted-foreground">{company.contacts.billing.role}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-3 w-3" />
                          <span>{company.contacts.billing.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-3 w-3" />
                          <span>{company.contacts.billing.phone}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subscription Details */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Subscription</CardTitle>
              <Badge variant={company.subscription.status === 'Active' ? 'default' : 'destructive'}>
                {company.subscription.status}
              </Badge>
            </div>
            <CardDescription>Current plan and usage details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Plan</span>
                <span className="font-medium">{company.subscription.plan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Billing Cycle</span>
                <span>{company.subscription.billingCycle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Next Billing</span>
                <span>{new Date(company.subscription.nextBilling).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Licensed Seats</span>
                <span>{company.subscription.seats}</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Included Features</h4>
              <ul className="space-y-2">
                {company.subscription.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full" variant="outline">
              <CreditCard className="mr-2 h-4 w-4" />
              Manage Subscription
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
