import { SalesAgent, DailyPerformance } from '../types/sales';

// Helper function to generate realistic daily performance data
const generateDailyPerformance = (
  basePerformance: number,
  date: Date,
  role: string
): DailyPerformance => {
  const dailyVariation = () => (Math.random() - 0.5) * 0.2;
  const isWeekend = [0, 6].includes(date.getDay());
  const monthMultiplier = date.getMonth() === 11 ? 1.3 : 1;
  const weekendMultiplier = isWeekend ? 0.3 : 1;
  const performanceMultiplier = basePerformance * monthMultiplier * weekendMultiplier;

  const revenue = Math.round(50000 * performanceMultiplier * (1 + dailyVariation()));
  const deals = Math.round(3 * performanceMultiplier * (1 + dailyVariation()));
  
  return {
    date: date.toISOString(),
    revenue,
    deals,
    meetings: Math.round(8 * performanceMultiplier * (1 + dailyVariation())),
    callTime: Math.round(240 * performanceMultiplier * (1 + dailyVariation())),
    pipelineValue: Math.round(75000 * performanceMultiplier * (1 + dailyVariation())),
    activeDeals: Math.round(5 * performanceMultiplier * (1 + dailyVariation())),
    wonDeals: deals,
    lostDeals: Math.round(deals * 0.3),
    quotaAttainment: Math.round(100 * performanceMultiplier * (1 + dailyVariation())),
    conversionRate: Math.round(65 * performanceMultiplier * (1 + dailyVariation())),
    customerRetention: Math.round(90 * (1 + dailyVariation() * 0.5)),
    avgSalesCycle: Math.round(30 * (1 + dailyVariation())),
    meetingShowRate: Math.round(85 * (1 + dailyVariation() * 0.5)),
    responseTime: Math.round(45 * (1 + dailyVariation())),
    customerSatisfaction: Math.round(90 * (1 + dailyVariation() * 0.5)),
    crossSellRate: Math.round(35 * performanceMultiplier * (1 + dailyVariation())),
    followUpRate: Math.round(90 * (1 + dailyVariation() * 0.5))
  };
};

// Generate 90 days of performance data for each agent
export const generateAgentDailyPerformance = (role: string, performanceLevel: number = 1) => {
  const days = 90;
  const endDate = new Date();
  const dailyData: DailyPerformance[] = [];

  for (let i = 0; i < days; i++) {
    const date = new Date(endDate);
    date.setDate(date.getDate() - i);
    dailyData.unshift(generateDailyPerformance(performanceLevel, date, role));
  }

  return dailyData;
};

// Top performing agents for the leaderboard
export const topAgents: SalesAgent[] = [
  {
    id: "sa-001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "/avatars/john-smith.jpg",
    role: "Team Lead",
    team: "Enterprise Sales",
    status: "Active",
    skills: ["Enterprise Sales", "Solution Selling", "Contract Negotiation"],
    languages: ["English", "Spanish"],
    dailyPerformance: generateAgentDailyPerformance("Team Lead", 1.2)
  },
  {
    id: "sa-002",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 234-5678",
    avatar: "/avatars/sarah-johnson.jpg",
    role: "Agent",
    team: "Enterprise Sales",
    status: "Active",
    skills: ["B2B Sales", "Account Management", "Sales Analytics"],
    languages: ["English", "French"],
    dailyPerformance: generateAgentDailyPerformance("Agent", 1.1)
  },
  {
    id: "sa-003",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 (555) 345-6789",
    avatar: "/avatars/michael-chen.jpg",
    role: "Agent",
    team: "Mid-Market",
    status: "Active",
    skills: ["Technical Sales", "Product Demo", "Customer Success"],
    languages: ["English", "Mandarin"],
    dailyPerformance: generateAgentDailyPerformance("Agent", 1.0)
  }
];
