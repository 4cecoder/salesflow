'use client'

import { mockTeams, mockAgents } from '@/data/mock-sales'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Search, Users, Target, TrendingUp, Pencil } from 'lucide-react'
import { EditTeamDialog } from '@/components/sales/edit-team-dialog'
import { useToast } from "@/hooks/use-toast"
import { useState } from 'react'

export default function SalesTeams() {
  const [searchQuery, setSearchQuery] = useState('')
  const [teams, setTeams] = useState(mockTeams)
  const [editingTeam, setEditingTeam] = useState<typeof mockTeams[0] | undefined>()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.region.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getTeamLead = (leadId: string) => {
    return mockAgents.find(agent => agent.id === leadId)
  }

  const handleSaveTeam = (updatedTeam: typeof mockTeams[0]) => {
    if (editingTeam) {
      // Update existing team
      setTeams(teams.map(team => 
        team.id === updatedTeam.id ? updatedTeam : team
      ))
      toast({
        title: "Team updated",
        description: "The team has been updated successfully.",
      })
    } else {
      // Create new team
      setTeams([...teams, updatedTeam])
      toast({
        title: "Team created",
        description: "The new team has been created successfully.",
      })
    }
    setIsDialogOpen(false)
    setEditingTeam(undefined)
  }

  return (
    <div className="container py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Sales Teams</h1>
          <p className="text-muted-foreground mt-1">Manage your sales teams and track their performance</p>
        </div>
        <Button onClick={() => {
          setEditingTeam(undefined)
          setIsDialogOpen(true)
        }}>
          <Users className="mr-2 h-4 w-4" />
          Create Team
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teams.length}</div>
            <p className="text-xs text-muted-foreground">Active sales teams</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${teams.reduce((sum, team) => sum + team.metrics.totalRevenue, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Combined team revenue</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {teams.reduce((sum, team) => sum + team.metrics.activeMeetings, 0)}
            </div>
            <p className="text-xs text-muted-foreground">Ongoing meetings</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search teams..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTeams.map((team) => {
          const teamLead = getTeamLead(team.lead)
          const dealsProgress = (team.metrics.totalDeals / team.targets.deals) * 100
          const revenueProgress = (team.metrics.totalRevenue / team.targets.revenue) * 100

          return (
            <Card key={team.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{team.name}</CardTitle>
                    <CardDescription>{team.region}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        setEditingTeam(team)
                        setIsDialogOpen(true)
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Team Lead */}
                {teamLead && (
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{teamLead.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{teamLead.name}</div>
                      <div className="text-sm text-muted-foreground">Team Lead</div>
                    </div>
                  </div>
                )}

                {/* Focus Areas */}
                <div className="flex flex-wrap gap-2">
                  {team.focus.map((area, index) => (
                    <Badge key={index} variant="secondary">{area}</Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Deals Progress</span>
                      <span>{team.metrics.totalDeals} / {team.targets.deals}</span>
                    </div>
                    <Progress value={dealsProgress} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Revenue Progress</span>
                      <span>${team.metrics.totalRevenue.toLocaleString()} / ${team.targets.revenue.toLocaleString()}</span>
                    </div>
                    <Progress value={revenueProgress} />
                  </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Avg Deal Size</p>
                    <p className="font-medium">${team.metrics.avgDealSize.toLocaleString()}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Conversion Rate</p>
                    <p className="font-medium">{(team.metrics.conversionRate * 100).toFixed(1)}%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Active Meetings</p>
                    <p className="font-medium">{team.metrics.activeMeetings}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <EditTeamDialog
        team={editingTeam}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSave={handleSaveTeam}
      />
    </div>
  )
}
