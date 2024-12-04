'use client'

import { allAgents, salesTeams } from '@/data/mock/agents';
import type { SalesAgent, SalesTeam } from '@/data/types/sales';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreVertical, Phone, Mail, Users, Target, TrendingUp, Clock, Star, Award } from 'lucide-react'
import { useState } from 'react'
import { AgentProfileDialog } from '@/components/sales/agent-profile-dialog'

export default function SalesAgents() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [teamFilter, setTeamFilter] = useState<string>('all')
  const [selectedAgent, setSelectedAgent] = useState<SalesAgent | null>(null)
  const [dialogMode, setDialogMode] = useState<'view' | 'edit'>('view')
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const handleSaveAgent = (updatedAgent: SalesAgent) => {
    // In a real app, this would make an API call to update the agent
    console.log('Saving agent:', updatedAgent)
    
    // Update the agent in the allAgents array
    const updatedAgents = allAgents.map(agent => 
      agent.id === updatedAgent.id ? updatedAgent : agent
    )
    
    // Optional: You might want to update your state or trigger a re-render
    // setAllAgents(updatedAgents)
  }

  const filteredAgents = allAgents.filter(agent => {
    const matchesSearch = 
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.role.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || agent.status === statusFilter
    const matchesTeam = teamFilter === 'all' || agent.team === teamFilter

    return matchesSearch && matchesStatus && matchesTeam
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500'
      case 'Away': return 'bg-yellow-500'
      case 'Offline': return 'bg-gray-500'
      case 'On Leave': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  const calculatePerformanceLevel = (agent: SalesAgent) => {
    // Use the most recent daily performance or aggregate performance
    const latestPerformance = agent.dailyPerformance[agent.dailyPerformance.length - 1] || {
      deals: 0,
      revenue: 0,
      meetings: 0,
      callTime: 0
    }

    const metrics = [
      latestPerformance.deals / 20, // Assuming 20 deals is excellent
      latestPerformance.revenue / 1000000, // Assuming $1M is excellent
      latestPerformance.meetings / 50, // Assuming 50 meetings is excellent
      latestPerformance.callTime / (40 * 60) // Assuming 40 hours is excellent
    ]
    
    const average = metrics.reduce((a, b) => a + b, 0) / metrics.length
    if (average >= 0.8) return { level: 'Elite', color: 'text-purple-500' }
    if (average >= 0.6) return { level: 'Expert', color: 'text-blue-500' }
    if (average >= 0.4) return { level: 'Advanced', color: 'text-green-500' }
    return { level: 'Growing', color: 'text-yellow-500' }
  }

  const uniqueTeams = Array.from(new Set(allAgents.map(agent => agent.team)))

  return (
    <div className="container py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Sales Agents</h1>
          <p className="text-muted-foreground mt-1">Manage your sales team and track individual performance</p>
        </div>
        <Button>
          <Users className="mr-2 h-4 w-4" />
          Add Agent
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allAgents.length}</div>
            <p className="text-xs text-muted-foreground">Active sales force</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${allAgents.reduce((sum, agent) => {
                const latestPerformance = agent.dailyPerformance[agent.dailyPerformance.length - 1];
                return sum + (latestPerformance?.revenue || 0);
              }, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Combined agent revenue</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {allAgents.reduce((sum, agent) => {
                const latestPerformance = agent.dailyPerformance[agent.dailyPerformance.length - 1];
                return sum + (latestPerformance?.meetings || 0);
              }, 0)}
            </div>
            <p className="text-xs text-muted-foreground">Total meetings conducted</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Call Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatTime(allAgents.reduce((sum, agent) => {
                const latestPerformance = agent.dailyPerformance[agent.dailyPerformance.length - 1];
                return sum + (latestPerformance?.callTime || 0);
              }, 0))}
            </div>
            <p className="text-xs text-muted-foreground">Total time on calls</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search agents..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Away">Away</SelectItem>
            <SelectItem value="Offline">Offline</SelectItem>
            <SelectItem value="On Leave">On Leave</SelectItem>
          </SelectContent>
        </Select>
        <Select value={teamFilter} onValueChange={setTeamFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by team" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Teams</SelectItem>
            {uniqueTeams.map(team => (
              <SelectItem key={team} value={team}>{team}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Agents Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Agent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead>Deals</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead>Meetings</TableHead>
              <TableHead>Call Time</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAgents.map((agent) => {
              const performance = calculatePerformanceLevel(agent)
              return (
                <TableRow key={agent.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{agent.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{agent.name}</div>
                        <div className="text-sm text-muted-foreground">{agent.role}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`h-2.5 w-2.5 rounded-full ${getStatusColor(agent.status)}`} />
                      {agent.status}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{agent.team}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Award className={`h-4 w-4 ${performance.color}`} />
                      <span className={performance.color}>{performance.level}</span>
                    </div>
                  </TableCell>
                  <TableCell>{agent.dailyPerformance[agent.dailyPerformance.length - 1]?.deals || 0}</TableCell>
                  <TableCell>${(agent.dailyPerformance[agent.dailyPerformance.length - 1]?.revenue || 0).toLocaleString()}</TableCell>
                  <TableCell>{agent.dailyPerformance[agent.dailyPerformance.length - 1]?.meetings || 0}</TableCell>
                  <TableCell>{formatTime(agent.dailyPerformance[agent.dailyPerformance.length - 1]?.callTime || 0)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          Email
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="mr-2 h-4 w-4" />
                          Call
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                          setSelectedAgent(agent)
                          setDialogMode('view')
                          setIsProfileOpen(true)
                        }}>
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                          setSelectedAgent(agent)
                          setDialogMode('edit')
                          setIsProfileOpen(true)
                        }}>
                          Edit Details
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Card>

      {selectedAgent && (
        <AgentProfileDialog
          agent={selectedAgent}
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          onSave={handleSaveAgent}
          mode={dialogMode}
        />
      )}

      {/* Skills and Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Skills</CardTitle>
            <CardDescription>Most common skills across the sales team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from(new Set(allAgents.flatMap(agent => agent.skills)))
                .slice(0, 5)
                .map((skill, index) => {
                  const count = allAgents.filter(agent => agent.skills.includes(skill)).length
                  const percentage = (count / allAgents.length) * 100
                  return (
                    <div key={skill} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>{skill}</span>
                        <span>{count} agents</span>
                      </div>
                      <Progress value={percentage} />
                    </div>
                  )
                })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Languages</CardTitle>
            <CardDescription>Team language capabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from(new Set(allAgents.flatMap(agent => agent.languages)))
                .slice(0, 5)
                .map((language, index) => {
                  const count = allAgents.filter(agent => agent.languages.includes(language)).length
                  const percentage = (count / allAgents.length) * 100
                  return (
                    <div key={language} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>{language}</span>
                        <span>{count} agents</span>
                      </div>
                      <Progress value={percentage} />
                    </div>
                  )
                })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
