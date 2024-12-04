"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

type ContactTag = "client" | "vendor" | "partner" | "lead" | "other"
type ContactStatus = "active" | "inactive" | "potential" | "archived"

interface ContactSocialMedia {
  linkedin?: string
  twitter?: string
  facebook?: string
  website?: string
}

interface ContactAddress {
  street?: string
  city?: string
  state?: string
  country?: string
  postalCode?: string
}

interface Contact {
  id: number
  name: string
  title: string
  company: string
  email: string
  phone: string
  alternativePhone?: string
  lastContact: string
  tags: ContactTag[]
  status: ContactStatus
  notes: string
  socialMedia: ContactSocialMedia
  address: ContactAddress
  budget?: number
  revenue?: number
  industry?: string
  employees?: number
  source?: string
  assignedTo?: string
  customFields: Record<string, string>
}

const mockContacts: Contact[] = [
  {
    id: 1,
    name: "John Smith",
    title: "CTO",
    company: "TechCorp Inc.",
    email: "john.smith@techcorp.com",
    phone: "+1 (555) 123-4567",
    lastContact: "2024-02-15",
    tags: ["client", "partner"],
    status: "active",
    notes: "Key decision maker for the cloud migration project",
    socialMedia: {
      linkedin: "linkedin.com/in/johnsmith",
      twitter: "@johnsmith",
      website: "techcorp.com"
    },
    address: {
      street: "123 Tech Street",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      postalCode: "94105"
    },
    budget: 500000,
    revenue: 10000000,
    industry: "Technology",
    employees: 500,
    source: "Referral",
    assignedTo: "Sarah Johnson",
    customFields: {
      "Project Timeline": "6 months",
      "Technology Stack": "Cloud, AI/ML"
    }
  }
]

export default function EditContactPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // In a real app, you would fetch the contact data here
  const mockContact = mockContacts.find(contact => contact.id === parseInt(params.id)) || mockContacts[0]

  const [formData, setFormData] = useState<Contact>(mockContact)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // In a real app, you would make an API call here to update the contact
      console.log("Updating contact:", formData)
      router.push("/dashboard/contacts")
      router.refresh()
    } catch (error) {
      console.error("Error updating contact:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-4xl py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Contact</h1>
          <p className="text-muted-foreground">
            Update contact information and details
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Basic Information</h2>
            
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="title">Title</label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company">Company</label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone">Phone</label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="status">Status</label>
              <Select
                value={formData.status}
                onValueChange={(value: ContactStatus) => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="potential">Potential</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Additional Information</h2>
            
            <div className="space-y-2">
              <label htmlFor="industry">Industry</label>
              <Input
                id="industry"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="employees">Number of Employees</label>
              <Input
                id="employees"
                type="number"
                value={formData.employees}
                onChange={(e) => setFormData({ ...formData, employees: parseInt(e.target.value) })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="budget">Budget</label>
              <Input
                id="budget"
                type="number"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="revenue">Annual Revenue</label>
              <Input
                id="revenue"
                type="number"
                value={formData.revenue}
                onChange={(e) => setFormData({ ...formData, revenue: parseInt(e.target.value) })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="source">Source</label>
              <Input
                id="source"
                value={formData.source}
                onChange={(e) => setFormData({ ...formData, source: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="assignedTo">Assigned To</label>
              <Input
                id="assignedTo"
                value={formData.assignedTo}
                onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-4 md:col-span-2">
            <h2 className="text-lg font-semibold">Social Media</h2>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="linkedin">LinkedIn</label>
                <Input
                  id="linkedin"
                  value={formData.socialMedia.linkedin}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialMedia: { ...formData.socialMedia, linkedin: e.target.value }
                  })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="twitter">Twitter</label>
                <Input
                  id="twitter"
                  value={formData.socialMedia.twitter}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialMedia: { ...formData.socialMedia, twitter: e.target.value }
                  })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="facebook">Facebook</label>
                <Input
                  id="facebook"
                  value={formData.socialMedia.facebook}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialMedia: { ...formData.socialMedia, facebook: e.target.value }
                  })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="website">Website</label>
                <Input
                  id="website"
                  value={formData.socialMedia.website}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialMedia: { ...formData.socialMedia, website: e.target.value }
                  })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 md:col-span-2">
            <h2 className="text-lg font-semibold">Address</h2>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="street">Street</label>
                <Input
                  id="street"
                  value={formData.address.street}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, street: e.target.value }
                  })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="city">City</label>
                <Input
                  id="city"
                  value={formData.address.city}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, city: e.target.value }
                  })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="state">State</label>
                <Input
                  id="state"
                  value={formData.address.state}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, state: e.target.value }
                  })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="country">Country</label>
                <Input
                  id="country"
                  value={formData.address.country}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, country: e.target.value }
                  })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="postalCode">Postal Code</label>
                <Input
                  id="postalCode"
                  value={formData.address.postalCode}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, postalCode: e.target.value }
                  })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 md:col-span-2">
            <h2 className="text-lg font-semibold">Notes</h2>
            <Textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="min-h-[100px]"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/dashboard/contacts")}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  )
}
