"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MetricCard } from "@/components/dashboard/metric-card"
import { RecentDeals } from "@/components/dashboard/recent-deals"
import { PipelineChart } from "@/components/dashboard/pipeline-chart"
import { ActivityTimeline } from "@/components/dashboard/activity-timeline"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { TasksWidget } from "@/components/dashboard/tasks-widget"
import { SearchBar } from "@/components/dashboard/search-bar"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()

  return (
    <div className="container space-y-6 py-6">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back to your sales command center
          </p>
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <MetricCard title="Total Deals" value="$335K" />
            <MetricCard title="Won Deals" value="$120K" />
            <MetricCard title="Revenue" value="$95K" />
            <MetricCard title="Pipeline" value="$220K" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Sales Pipeline</CardTitle>
                <CardDescription>Your deal flow visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <PipelineChart />
              </CardContent>
            </Card>
            <RecentDeals />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your team</CardDescription>
            </CardHeader>
            <CardContent>
              <ActivityTimeline />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analytics</CardTitle>
              <CardDescription>In-depth performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Analytics content will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
