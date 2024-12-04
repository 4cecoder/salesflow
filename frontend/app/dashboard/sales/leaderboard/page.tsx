'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { TrendingUp, DollarSign, Calculator, ChevronLeft, ChevronRight } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, addDays, addWeeks, addMonths, format, startOfYear, endOfYear, addYears, isWithinInterval, parseISO } from 'date-fns'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { topAgents } from '@/data/mock/leaderboard';
import type { SalesAgent, DailyPerformance } from '@/data/types/sales';
import { Button } from '@/components/ui/button'

interface AgentPerformance {
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
  [key: string]: number; // Add an index signature to allow dynamic access
}

const generateChartData = (agents: SalesAgent[], dateRange: any) => {
  return agents.map(agent => ({
    name: agent.name,
    revenue: agent.dailyPerformance[0].revenue,
    pipelineValue: agent.dailyPerformance[0].pipelineValue,
    deals: agent.dailyPerformance[0].deals,
    meetings: agent.dailyPerformance[0].meetings
  }));
};

const calculateLeaderboardData = (agents: SalesAgent[], dateRange: any) => {
  return agents
    .map(agent => ({
      id: agent.id,
      name: agent.name,
      avatar: agent.avatar,
      team: agent.team,
      role: agent.role,
      ...agent.dailyPerformance[0]
    }))
    .sort((a, b) => b.revenue - a.revenue);
};

const formatKpiValue = (value: number, format: string) => {
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value)
    case 'percentage':
      return `${value}%`
    case 'days':
      return `${value} days`
    case 'minutes':
      return `${value} min`
    case 'score':
      return value.toFixed(1)
    default:
      return value.toLocaleString()
  }
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-3">
      <div className="text-sm font-medium mb-2">{label}</div>
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-medium">
            {entry.name.toLowerCase().includes('revenue')
              ? new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                }).format(entry.value)
              : entry.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

const kpiCategories = [
  {
    title: "Revenue Metrics",
    kpis: [
      { key: "revenue", label: "Total Revenue", format: "currency" },
      { key: "avgDealSize", label: "Avg Deal Size", format: "currency" },
      { key: "pipelineValue", label: "Pipeline Value", format: "currency" }
    ]
  },
  {
    title: "Deal Metrics",
    kpis: [
      { key: "deals", label: "Total Deals", format: "number" },
      { key: "activeDeals", label: "Active Deals", format: "number" },
      { key: "wonDeals", label: "Won Deals", format: "number" },
      { key: "lostDeals", label: "Lost Deals", format: "number" }
    ]
  },
  {
    title: "Performance Metrics",
    kpis: [
      { key: "quotaAttainment", label: "Quota Attainment", format: "percentage" },
      { key: "conversionRate", label: "Conversion Rate", format: "percentage" },
      { key: "customerRetention", label: "Customer Retention", format: "percentage" },
      { key: "avgSalesCycle", label: "Avg Sales Cycle", format: "days" }
    ]
  },
  {
    title: "Activity Metrics",
    kpis: [
      { key: "meetings", label: "Total Meetings", format: "number" },
      { key: "meetingShowRate", label: "Meeting Show Rate", format: "percentage" },
      { key: "callTime", label: "Call Time", format: "minutes" },
      { key: "responseTime", label: "Response Time", format: "minutes" }
    ]
  },
  {
    title: "Customer Success",
    kpis: [
      { key: "customerSatisfaction", label: "CSAT Score", format: "score" },
      { key: "crossSellRate", label: "Cross-sell Rate", format: "percentage" },
      { key: "followUpRate", label: "Follow-up Rate", format: "percentage" }
    ]
  }
]

const aggregatePerformanceData = (performance: any[], startDate: Date, endDate: Date) => {
  const filteredData = performance.filter(day => {
    const date = parseISO(day.date);
    return isWithinInterval(date, { start: startDate, end: endDate });
  });

  if (filteredData.length === 0) return null;

  return {
    revenue: filteredData.reduce((sum, day) => sum + day.revenue, 0),
    deals: filteredData.reduce((sum, day) => sum + day.deals, 0),
    meetings: filteredData.reduce((sum, day) => sum + day.meetings, 0),
    callTime: filteredData.reduce((sum, day) => sum + day.callTime, 0),
    pipelineValue: filteredData.reduce((sum, day) => sum + day.pipelineValue, 0),
    activeDeals: Math.round(filteredData.reduce((sum, day) => sum + day.activeDeals, 0) / filteredData.length),
    wonDeals: filteredData.reduce((sum, day) => sum + day.wonDeals, 0),
    lostDeals: filteredData.reduce((sum, day) => sum + day.lostDeals, 0),
    quotaAttainment: Math.round(filteredData.reduce((sum, day) => sum + day.quotaAttainment, 0) / filteredData.length),
    conversionRate: Math.round(filteredData.reduce((sum, day) => sum + day.conversionRate, 0) / filteredData.length),
    customerRetention: Math.round(filteredData.reduce((sum, day) => sum + day.customerRetention, 0) / filteredData.length),
    avgSalesCycle: Math.round(filteredData.reduce((sum, day) => sum + day.avgSalesCycle, 0) / filteredData.length),
    meetingShowRate: Math.round(filteredData.reduce((sum, day) => sum + day.meetingShowRate, 0) / filteredData.length),
    responseTime: Math.round(filteredData.reduce((sum, day) => sum + day.responseTime, 0) / filteredData.length),
    customerSatisfaction: Math.round(filteredData.reduce((sum, day) => sum + day.customerSatisfaction, 0) / filteredData.length),
    crossSellRate: Math.round(filteredData.reduce((sum, day) => sum + day.crossSellRate, 0) / filteredData.length),
    followUpRate: Math.round(filteredData.reduce((sum, day) => sum + day.followUpRate, 0) / filteredData.length),
  };
};

const getDateRange = (date: Date, viewType: string) => {
  switch (viewType) {
    case 'day':
      return { start: startOfDay(date), end: endOfDay(date) };
    case 'week':
      return { start: startOfWeek(date), end: endOfWeek(date) };
    case 'month':
      return { start: startOfMonth(date), end: endOfMonth(date) };
    case 'year':
      return { start: startOfYear(date), end: endOfYear(date) };
    default:
      return { start: startOfDay(date), end: endOfDay(date) }; // Default to day view
  }
};

const SalesLeaderboard = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewType, setViewType] = useState<string>('day');

  // Get the date range based on view type
  const dateRange = getDateRange(selectedDate, viewType);

  // Filter and aggregate agent data based on the selected date range
  const agentData = topAgents.map(agent => {
    const performance = aggregatePerformanceData(agent.dailyPerformance, dateRange.start, dateRange.end);
    if (!performance) return null;

    return {
      ...agent,  // Spread all original agent properties
      performance: performance as AgentPerformance  // Explicitly assign performance
    };
  }).filter((agent): agent is SalesAgent & { performance: AgentPerformance } => agent !== null);

  // Sort agents by revenue (or other metric if needed)
  const sortedAgents: (SalesAgent & { performance: AgentPerformance })[] = [...agentData];

  // Generate chart data
  const chartData = generateChartData(sortedAgents, dateRange);

  // Calculate month-over-month change
  const monthlyChange = 12.0; // This would normally be calculated from actual data

  const changeDate = (direction: 'next' | 'prev') => {
    setSelectedDate(prevDate => {
      let newDate: Date;
      switch (viewType) {
        case 'day':
          newDate = direction === 'next' ? addDays(prevDate, 1) : addDays(prevDate, -1);
          break;
        case 'week':
          newDate = direction === 'next' ? addWeeks(prevDate, 1) : addWeeks(prevDate, -1);
          break;
        case 'month':
          newDate = direction === 'next' ? addMonths(prevDate, 1) : addMonths(prevDate, -1);
          break;
        case 'year':
          newDate = direction === 'next' ? addYears(prevDate, 1) : addYears(prevDate, -1);
          break;
        default:
          newDate = prevDate;
      }
      return newDate;
    });
  };

  const formatDateRange = () => {
    switch (viewType) {
      case 'day':
        return format(dateRange.start, 'MMMM d, yyyy');
      case 'week':
        return `${format(dateRange.start, 'MMM d')} - ${format(dateRange.end, 'MMM d, yyyy')}`;
      case 'month':
        return format(dateRange.start, 'MMMM yyyy');
      case 'year':
        return format(dateRange.start, 'yyyy');
      default:
        return '';
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Sales Performance</CardTitle>
          <CardDescription>
            Sales {monthlyChange >= 0 ? 'rising' : 'declining'} by {Math.abs(monthlyChange)}% this month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Time range selector */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Overview
                </h2>
                <p className="text-sm text-muted-foreground">
                  {sortedAgents.length} active sales agents
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => changeDate('prev')}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="font-medium min-w-[140px] text-center">
                    {formatDateRange()}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => changeDate('next')}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewType === 'day' ? 'default' : 'outline'}
                    onClick={() => {
                      setViewType('day');
                      setSelectedDate(new Date());
                    }}
                  >
                    Day
                  </Button>
                  <Button
                    variant={viewType === 'week' ? 'default' : 'outline'}
                    onClick={() => {
                      setViewType('week');
                      setSelectedDate(new Date());
                    }}
                  >
                    Week
                  </Button>
                  <Button
                    variant={viewType === 'month' ? 'default' : 'outline'}
                    onClick={() => {
                      setViewType('month');
                      setSelectedDate(new Date());
                    }}
                  >
                    Month
                  </Button>
                  <Button
                    variant={viewType === 'year' ? 'default' : 'outline'}
                    onClick={() => {
                      setViewType('year');
                      setSelectedDate(new Date());
                    }}
                  >
                    Year
                  </Button>
                </div>
              </div>
            </div>

            {/* Leaderboard table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Agent</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead className="text-right">Revenue</TableHead>
                    <TableHead className="text-right">Deals</TableHead>
                    <TableHead className="text-right">Meetings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedAgents.map((agent: SalesAgent & { performance: AgentPerformance }) => (
                    <TableRow
                      key={agent.id}
                      className="cursor-pointer"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img className="h-8 w-8 rounded-full" src={agent.avatar} />
                          <div>
                            <div className="font-medium">{agent.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {agent.role}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{agent.team}</TableCell>
                      <TableCell className="text-right">
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                        }).format(agent.performance.revenue)}
                      </TableCell>
                      <TableCell className="text-right">{agent.performance.deals}</TableCell>
                      <TableCell className="text-right">{agent.performance.meetings}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Chart */}
            <div className="mt-8 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: 'hsl(var(--foreground))' }}
                    tickLine={{ stroke: 'hsl(var(--foreground))' }}
                  />
                  <YAxis
                    tick={{ fill: 'hsl(var(--foreground))' }}
                    tickLine={{ stroke: 'hsl(var(--foreground))' }}
                    tickFormatter={(value) =>
                      new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        notation: 'compact',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      }).format(value)
                    }
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: 'hsl(var(--muted))' }}
                  />
                  <Bar
                    dataKey="revenue"
                    name="Revenue"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="pipelineValue"
                    name="Pipeline Value"
                    fill="hsl(var(--secondary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {kpiCategories.map((category) => (
                <Card key={category.title} className="col-span-1">
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {category.kpis.map((kpi) => (
                        <div key={kpi.key} className="space-y-1">
                          <p className="text-sm text-muted-foreground">{kpi.label}</p>
                          <p className="text-2xl font-bold">
                            {formatKpiValue(sortedAgents[0]?.performance?.[kpi.key] || 0, kpi.format)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesLeaderboard;
