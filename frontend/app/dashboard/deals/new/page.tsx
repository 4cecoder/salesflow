"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function NewDealPage() {
  const router = useRouter()
  const [dealData, setDealData] = useState({
    title: "",
    value: "",
    stage: "lead",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement deal creation logic here
    console.log("Creating new deal:", dealData)
    router.push("/dashboard/deals")
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Deal</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Deal Title</Label>
              <Input
                id="title"
                placeholder="Enter deal title"
                value={dealData.title}
                onChange={(e) => setDealData({ ...dealData, title: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="value">Deal Value</Label>
              <Input
                id="value"
                type="number"
                placeholder="Enter deal value"
                value={dealData.value}
                onChange={(e) => setDealData({ ...dealData, value: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stage">Deal Stage</Label>
              <Select
                value={dealData.stage}
                onValueChange={(value) => setDealData({ ...dealData, stage: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select deal stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lead">Lead</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="proposal">Proposal</SelectItem>
                  <SelectItem value="negotiation">Negotiation</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter deal description"
                value={dealData.description}
                onChange={(e) => setDealData({ ...dealData, description: e.target.value })}
                rows={4}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button type="submit">Create Deal</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
