"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, Target, TrendingUp } from "lucide-react"

// Mock data
const monthlyRevenue = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 48000 },
  { month: "Apr", revenue: 61000 },
  { month: "May", revenue: 55000 },
  { month: "Jun", revenue: 67000 },
  { month: "Jul", revenue: 72000 },
  { month: "Aug", revenue: 69000 },
  { month: "Sep", revenue: 78000 },
  { month: "Oct", revenue: 85000 },
  { month: "Nov", revenue: 81000 },
  { month: "Dec", revenue: 91000 },
]

const dealsByStage = [
  { name: "Qualified", value: 30 },
  { name: "Meeting", value: 25 },
  { name: "Proposal", value: 20 },
  { name: "Negotiation", value: 15 },
  { name: "Closed", value: 10 },
]

const teamPerformance = [
  { name: "Team A", deals: 45, revenue: 320000 },
  { name: "Team B", deals: 38, revenue: 280000 },
  { name: "Team C", deals: 52, revenue: 420000 },
  { name: "Team D", deals: 31, revenue: 250000 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
              <h3 className="text-2xl font-bold">$804,000</h3>
            </div>
            <div className="flex items-center text-green-500">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm">12%</span>
            </div>
          </div>
          <div className="mt-4">
            <DollarSign className="h-8 w-8 text-muted-foreground/50" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Deals</p>
              <h3 className="text-2xl font-bold">142</h3>
            </div>
            <div className="flex items-center text-green-500">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm">8%</span>
            </div>
          </div>
          <div className="mt-4">
            <Target className="h-8 w-8 text-muted-foreground/50" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Win Rate</p>
              <h3 className="text-2xl font-bold">68%</h3>
            </div>
            <div className="flex items-center text-red-500">
              <ArrowDownRight className="h-4 w-4" />
              <span className="text-sm">3%</span>
            </div>
          </div>
          <div className="mt-4">
            <TrendingUp className="h-8 w-8 text-muted-foreground/50" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Agents</p>
              <h3 className="text-2xl font-bold">28</h3>
            </div>
            <div className="flex items-center text-green-500">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm">5%</span>
            </div>
          </div>
          <div className="mt-4">
            <Users className="h-8 w-8 text-muted-foreground/50" />
          </div>
        </Card>
      </div>

      <Tabs defaultValue="revenue" className="space-y-4">
        <TabsList>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="deals">Deals</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="revenue" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="deals" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Deals by Stage</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dealsByStage}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dealsByStage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="teams" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Team Performance</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={teamPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="deals" fill="#8884d8" name="Deals" />
                  <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
