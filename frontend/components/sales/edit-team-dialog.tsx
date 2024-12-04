'use client'

import { SalesTeam, mockAgents } from "@/data/mock-sales"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../ui/command"

interface EditTeamDialogProps {
  team?: SalesTeam
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (team: SalesTeam) => void
}

const regions = [
  "North America",
  "South America",
  "Europe",
  "Asia Pacific",
  "Middle East",
  "Africa"
]

const focusAreas = [
  "Enterprise Clients",
  "Mid-Market",
  "Small Business",
  "Financial Services",
  "Technology",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Education"
]

export function EditTeamDialog({ team, open, onOpenChange, onSave }: EditTeamDialogProps) {
  const [formData, setFormData] = useState<SalesTeam>(
    team || {
      id: `st-${Date.now()}`,
      name: "",
      lead: "",
      members: [],
      region: "",
      focus: [],
      metrics: {
        totalDeals: 0,
        totalRevenue: 0,
        avgDealSize: 0,
        conversionRate: 0,
        activeMeetings: 0
      },
      targets: {
        deals: 0,
        revenue: 0,
        meetings: 0
      }
    }
  )

  const [openRegion, setOpenRegion] = useState(false)
  const [selectedFocus, setSelectedFocus] = useState<string[]>(team?.focus || [])

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleTargetChange = (field: string, value: string) => {
    const numValue = parseInt(value) || 0
    setFormData(prev => ({
      ...prev,
      targets: {
        ...prev.targets,
        [field]: numValue
      }
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      ...formData,
      focus: selectedFocus
    })
  }

  const toggleFocusArea = (area: string) => {
    setSelectedFocus(prev =>
      prev.includes(area)
        ? prev.filter(a => a !== area)
        : [...prev, area]
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{team ? 'Edit Team' : 'Create New Team'}</DialogTitle>
            <DialogDescription>
              {team ? 'Make changes to your sales team here.' : 'Set up a new sales team with the details below.'}
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="details" className="mt-4">
            <TabsList>
              <TabsTrigger value="details">Team Details</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="targets">Targets</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Team Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Enter team name"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Region</Label>
                  <Popover open={openRegion} onOpenChange={setOpenRegion}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openRegion}
                        className="w-full justify-between"
                      >
                        {formData.region || "Select region..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search regions..." />
                        <CommandEmpty>No region found.</CommandEmpty>
                        <CommandGroup>
                          {regions.map((region) => (
                            <CommandItem
                              key={region}
                              onSelect={() => {
                                handleChange('region', region)
                                setOpenRegion(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  formData.region === region ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {region}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Team Lead</Label>
                <Select
                  value={formData.lead}
                  onValueChange={(value) => handleChange('lead', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select team lead" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Team Leads</SelectLabel>
                      {mockAgents
                        .filter(agent => agent.role === "Team Lead" || agent.role === "Manager")
                        .map((agent) => (
                          <SelectItem key={agent.id} value={agent.id}>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback>{agent.name[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex flex-col">
                                <span>{agent.name}</span>
                                <span className="text-xs text-muted-foreground">{agent.role}</span>
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Focus Areas</Label>
                <div className="border rounded-md p-4">
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <Badge
                        key={area}
                        variant={selectedFocus.includes(area) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleFocusArea(area)}
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="members" className="space-y-4 mt-4">
              <div className="space-y-4">
                <Label>Team Members</Label>
                <div className="border rounded-md divide-y">
                  {mockAgents.map((agent) => (
                    <div
                      key={agent.id}
                      className="flex items-center justify-between p-3 hover:bg-accent cursor-pointer"
                      onClick={() => {
                        const newMembers = formData.members.includes(agent.id)
                          ? formData.members.filter(id => id !== agent.id)
                          : [...formData.members, agent.id]
                        handleChange('members', newMembers)
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{agent.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{agent.name}</div>
                          <div className="text-sm text-muted-foreground">{agent.role}</div>
                        </div>
                      </div>
                      <Check className={cn(
                        "h-4 w-4",
                        formData.members.includes(agent.id) ? "opacity-100" : "opacity-0"
                      )} />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="targets" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="targetDeals">Target Deals</Label>
                  <Input
                    id="targetDeals"
                    type="number"
                    value={formData.targets.deals}
                    onChange={(e) => handleTargetChange('deals', e.target.value)}
                    placeholder="Enter target number of deals"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetRevenue">Target Revenue ($)</Label>
                  <Input
                    id="targetRevenue"
                    type="number"
                    value={formData.targets.revenue}
                    onChange={(e) => handleTargetChange('revenue', e.target.value)}
                    placeholder="Enter target revenue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetMeetings">Target Meetings</Label>
                  <Input
                    id="targetMeetings"
                    type="number"
                    value={formData.targets.meetings}
                    onChange={(e) => handleTargetChange('meetings', e.target.value)}
                    placeholder="Enter target number of meetings"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              {team ? 'Save Changes' : 'Create Team'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
