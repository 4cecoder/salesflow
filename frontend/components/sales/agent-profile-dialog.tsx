'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { SalesAgent } from '@/data/types/sales'
import {
  Avatar,
  AvatarFallback
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Award, Target, Clock, TrendingUp } from 'lucide-react'

interface DailyPerformance {
  date: string;
  revenue: number;
  deals: number;
  meetings: number;
  callTime: number;
  pipelineValue: number;
  activeDeals: number;
  wonDeals: number;
  lostDeals: number;
  quotaAttainment: number;
  conversionRate: number;
  customerRetention: number;
  avgSalesCycle: number;
  meetingShowRate: number;
  responseTime: number;
  customerSatisfaction: number;
  crossSellRate: number;
  followUpRate: number;
}

interface AgentProfileDialogProps {
  agent: SalesAgent;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedAgent: SalesAgent) => void;
  mode: 'view' | 'edit';
}

export function AgentProfileDialog({ agent, isOpen, onClose, onSave, mode }: AgentProfileDialogProps) {
  const [editedAgent, setEditedAgent] = useState<SalesAgent>(agent)
  const [activeTab, setActiveTab] = useState('overview')

  const handleSave = () => {
    onSave(editedAgent)
    onClose()
  }

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{mode === 'edit' ? 'Edit Agent Profile' : 'Agent Profile'}</DialogTitle>
          <DialogDescription>
            {mode === 'edit' ? 'Make changes to the agent profile here.' : 'View agent details and performance metrics.'}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="skills">Skills & Languages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-xl">{agent.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                {mode === 'edit' ? (
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input 
                      value={editedAgent.name}
                      onChange={(e) => setEditedAgent({...editedAgent, name: e.target.value})}
                    />
                  </div>
                ) : (
                  <h2 className="text-2xl font-bold">{agent.name}</h2>
                )}
                <div className="flex items-center gap-2 mt-1">
                  <Badge>{agent.role}</Badge>
                  <Badge variant="outline">{agent.team}</Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {mode === 'edit' ? (
                <>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input 
                      value={editedAgent.email}
                      onChange={(e) => setEditedAgent({...editedAgent, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input 
                      value={editedAgent.phone}
                      onChange={(e) => setEditedAgent({...editedAgent, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Select
                      value={editedAgent.role}
                      onValueChange={(value: "Agent" | "Team Lead" | "Manager") => 
                        setEditedAgent({...editedAgent, role: value})
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Agent">Agent</SelectItem>
                        <SelectItem value="Team Lead">Team Lead</SelectItem>
                        <SelectItem value="Manager">Manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Team</Label>
                    <Input 
                      value={editedAgent.team}
                      onChange={(e) => setEditedAgent({...editedAgent, team: e.target.value})}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{agent.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{agent.phone}</span>
                  </div>
                </>
              )}
            </div>
          </TabsContent>

          <TabsContent value="performance">
            {agent.dailyPerformance ? (
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="text-sm text-muted-foreground">Deals Closed</div>
                      <div className="text-2xl font-bold">
                        {agent.dailyPerformance.reduce((sum: number, day: DailyPerformance) => sum + day.deals, 0)}
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="text-sm text-muted-foreground">Revenue</div>
                      <div className="text-2xl font-bold">
                        ${agent.dailyPerformance.reduce((sum: number, day: DailyPerformance) => sum + day.revenue, 0).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <div>
                      <div className="text-sm text-muted-foreground">Call Time</div>
                      <div className="text-2xl font-bold">
                        {formatTime(agent.dailyPerformance.reduce((sum: number, day: DailyPerformance) => sum + day.callTime, 0))}
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-500" />
                    <div>
                      <div className="text-sm text-muted-foreground">Meetings</div>
                      <div className="text-2xl font-bold">
                        {agent.dailyPerformance.reduce((sum: number, day: DailyPerformance) => sum + day.meetings, 0)}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No performance data available for this agent.
              </div>
            )}
          </TabsContent>

          <TabsContent value="skills">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Skills</h3>
                <div className="space-y-2">
                  {mode === 'edit' ? (
                    <Input 
                      value={editedAgent.skills.join(', ')}
                      onChange={(e) => setEditedAgent({
                        ...editedAgent, 
                        skills: e.target.value.split(',').map(s => s.trim())
                      })}
                    />
                  ) : (
                    agent.skills.map((skill: string) => (
                      <Badge key={skill} variant="secondary" className="mr-2">
                        {skill}
                      </Badge>
                    ))
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Languages</h3>
                <div className="space-y-2">
                  {mode === 'edit' ? (
                    <Input 
                      value={editedAgent.languages.join(', ')}
                      onChange={(e) => setEditedAgent({
                        ...editedAgent, 
                        languages: e.target.value.split(',').map(s => s.trim())
                      })}
                    />
                  ) : (
                    agent.languages.map((language: string) => (
                      <Badge key={language} variant="secondary" className="mr-2">
                        {language}
                      </Badge>
                    ))
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          {mode === 'edit' && (
            <Button onClick={handleSave}>
              Save Changes
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
