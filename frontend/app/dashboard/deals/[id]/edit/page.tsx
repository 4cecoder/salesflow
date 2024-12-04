"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export default function EditDealPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // In a real app, you would fetch the deal data here
  const mockDeal = {
    id: parseInt(params.id),
    name: "Enterprise Software Solution",
    company: "TechCorp Inc.",
    value: "150000",
    stage: "Negotiation",
    probability: "75",
    closeDate: "2024-03-15",
  }

  const [formData, setFormData] = useState(mockDeal)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // In a real app, you would make an API call here to update the deal
      console.log("Updating deal:", formData)
      router.push("/dashboard/deals")
      router.refresh()
    } catch (error) {
      console.error("Error updating deal:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-2xl py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Deal</h1>
          <p className="text-muted-foreground">
            Update deal information and status
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <div className="grid w-full gap-2">
            <label htmlFor="name">Deal Name</label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="grid w-full gap-2">
            <label htmlFor="company">Company</label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
            />
          </div>

          <div className="grid w-full gap-2">
            <label htmlFor="value">Value ($)</label>
            <Input
              id="value"
              type="number"
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              required
            />
          </div>

          <div className="grid w-full gap-2">
            <label>Stage</label>
            <Select
              value={formData.stage}
              onValueChange={(value) => setFormData({ ...formData, stage: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Discovery">Discovery</SelectItem>
                <SelectItem value="Proposal">Proposal</SelectItem>
                <SelectItem value="Negotiation">Negotiation</SelectItem>
                <SelectItem value="Closed Won">Closed Won</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full gap-2">
            <label htmlFor="probability">Probability (%)</label>
            <Input
              id="probability"
              type="number"
              min="0"
              max="100"
              value={formData.probability}
              onChange={(e) => setFormData({ ...formData, probability: e.target.value })}
              required
            />
          </div>

          <div className="grid w-full gap-2">
            <label htmlFor="closeDate">Expected Close Date</label>
            <Input
              id="closeDate"
              type="date"
              value={formData.closeDate}
              onChange={(e) => setFormData({ ...formData, closeDate: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
