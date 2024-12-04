'use client'

import { CompanyProfile } from "@/data/mock-company"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface EditProfileFormProps {
  company: CompanyProfile
  onSave: (updatedCompany: CompanyProfile) => void
  onCancel: () => void
}

export function EditProfileForm({ company, onSave, onCancel }: EditProfileFormProps) {
  const [formData, setFormData] = useState(company)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleContactChange = (type: 'primary' | 'billing', field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      contacts: {
        ...prev.contacts,
        [type]: {
          ...prev.contacts[type],
          [field]: value,
        },
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>Update your company's basic details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Company Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => handleChange('industry', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="Retail">Retail</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="size">Company Size</Label>
              <Select
                value={formData.size}
                onValueChange={(value) => handleChange('size', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10 employees">1-10 employees</SelectItem>
                  <SelectItem value="11-50 employees">11-50 employees</SelectItem>
                  <SelectItem value="51-200 employees">51-200 employees</SelectItem>
                  <SelectItem value="201-500 employees">201-500 employees</SelectItem>
                  <SelectItem value="501-1000 employees">501-1000 employees</SelectItem>
                  <SelectItem value="1000+ employees">1000+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => handleChange('website', e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="founded">Founded Year</Label>
              <Input
                id="founded"
                value={formData.founded}
                onChange={(e) => handleChange('founded', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="headquarters">Headquarters</Label>
              <Input
                id="headquarters"
                value={formData.headquarters}
                onChange={(e) => handleChange('headquarters', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Update primary and billing contacts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            {/* Primary Contact */}
            <div className="space-y-4">
              <h4 className="font-medium">Primary Contact</h4>
              <div className="space-y-2">
                <Label htmlFor="primary-name">Name</Label>
                <Input
                  id="primary-name"
                  value={formData.contacts.primary.name}
                  onChange={(e) => handleContactChange('primary', 'name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="primary-role">Role</Label>
                <Input
                  id="primary-role"
                  value={formData.contacts.primary.role}
                  onChange={(e) => handleContactChange('primary', 'role', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="primary-email">Email</Label>
                <Input
                  id="primary-email"
                  type="email"
                  value={formData.contacts.primary.email}
                  onChange={(e) => handleContactChange('primary', 'email', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="primary-phone">Phone</Label>
                <Input
                  id="primary-phone"
                  type="tel"
                  value={formData.contacts.primary.phone}
                  onChange={(e) => handleContactChange('primary', 'phone', e.target.value)}
                />
              </div>
            </div>

            {/* Billing Contact */}
            <div className="space-y-4">
              <h4 className="font-medium">Billing Contact</h4>
              <div className="space-y-2">
                <Label htmlFor="billing-name">Name</Label>
                <Input
                  id="billing-name"
                  value={formData.contacts.billing.name}
                  onChange={(e) => handleContactChange('billing', 'name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-role">Role</Label>
                <Input
                  id="billing-role"
                  value={formData.contacts.billing.role}
                  onChange={(e) => handleContactChange('billing', 'role', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-email">Email</Label>
                <Input
                  id="billing-email"
                  type="email"
                  value={formData.contacts.billing.email}
                  onChange={(e) => handleContactChange('billing', 'email', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-phone">Phone</Label>
                <Input
                  id="billing-phone"
                  type="tel"
                  value={formData.contacts.billing.phone}
                  onChange={(e) => handleContactChange('billing', 'phone', e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Save Changes
        </Button>
      </div>
    </form>
  )
}
