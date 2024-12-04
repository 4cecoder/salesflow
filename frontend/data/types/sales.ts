export interface DailyPerformance {
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

export interface SalesAgent {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: 'Agent' | 'Team Lead' | 'Manager';
  team: string;
  status: 'Active' | 'Away' | 'Offline' | 'On Leave';
  skills: string[];
  languages: string[];
  dailyPerformance: DailyPerformance[];
  performance?: {
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
  };
}

export interface SalesTeam {
  id: string;
  name: string;
  lead: string;
  members: string[];
  region: string;
  focus: string[];
  metrics: {
    totalDeals: number;
    totalRevenue: number;
    avgDealSize: number;
    conversionRate: number;
    customerRetention: number;
    teamEfficiency: number;
    pipelineHealth: number;
    teamSatisfaction: number;
  };
}
