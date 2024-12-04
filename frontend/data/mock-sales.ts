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
}

// Helper function to generate realistic daily performance data
const generateDailyPerformance = (
  basePerformance: number,
  date: Date,
  role: string
): DailyPerformance => {
  // Add some randomness but keep it consistent with the agent's base performance
  const dailyVariation = () => (Math.random() - 0.5) * 0.2; // ±10% variation
  const isWeekend = [0, 6].includes(date.getDay());
  const monthMultiplier = date.getMonth() === 11 ? 1.3 : 1; // Higher in December
  const weekendMultiplier = isWeekend ? 0.3 : 1; // Lower on weekends
  const performanceMultiplier = basePerformance * monthMultiplier * weekendMultiplier;

  // Base metrics adjusted by performance multiplier
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
const generateAgentDailyPerformance = (role: string, performanceLevel: number = 1) => {
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

export interface SalesTeam {
  id: string
  name: string
  lead: string
  members: string[]
  region: string
  focus: string[]
  metrics: {
    totalDeals: number
    totalRevenue: number
    avgDealSize: number
    conversionRate: number
    activeMeetings: number
  }
  targets: {
    deals: number
    revenue: number
    meetings: number
  }
}

export const mockAgents: SalesAgent[] = [
  {
    id: "sa-001",
    name: "John Smith",
    email: "john.smith@saleflow.example.com",
    phone: "+1 (555) 123-4567",
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
    email: "sarah.johnson@saleflow.example.com",
    phone: "+1 (555) 123-4568",
    role: "Agent",
    team: "Enterprise Sales",
    status: "Active",
    skills: ["B2B Sales", "Product Demo", "Lead Qualification"],
    languages: ["English", "French"],
    dailyPerformance: generateAgentDailyPerformance("Agent", 1.0)
  },
  {
    id: "sa-003",
    name: "Michael Chen",
    email: "michael.chen@saleflow.example.com",
    phone: "+1 (555) 123-4569",
    role: "Manager",
    team: "APAC Sales",
    status: "Away",
    skills: ["Strategic Sales", "Team Leadership", "Market Analysis"],
    languages: ["English", "Mandarin", "Cantonese"],
    dailyPerformance: generateAgentDailyPerformance("Manager", 1.5)
  },
  {
    id: "sa-004",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@saleflow.example.com",
    phone: "+1 (555) 123-4570",
    role: "Team Lead",
    team: "SMB Sales",
    status: "Active",
    skills: ["SMB Sales", "Sales Training", "CRM Management"],
    languages: ["English", "Spanish", "Portuguese"],
    dailyPerformance: generateAgentDailyPerformance("Team Lead", 1.1)
  },
  {
    id: "sa-005",
    name: "David Kim",
    email: "david.kim@saleflow.example.com",
    phone: "+1 (555) 123-4571",
    role: "Agent",
    team: "APAC Sales",
    status: "Active",
    skills: ["Technical Sales", "Product Specialist", "Solution Architecture"],
    languages: ["English", "Korean", "Japanese"],
    dailyPerformance: generateAgentDailyPerformance("Agent", 0.9)
  },
  {
    id: "sa-006",
    name: "Lisa Patel",
    email: "lisa.patel@saleflow.example.com",
    phone: "+1 (555) 123-4572",
    role: "Agent",
    team: "Enterprise Sales",
    status: "Active",
    skills: ["Enterprise Sales", "Account Management", "Executive Presentations"],
    languages: ["English", "Hindi", "Gujarati"],
    dailyPerformance: generateAgentDailyPerformance("Agent", 1.0)
  },
  {
    id: "sa-007",
    name: "Marcus Weber",
    email: "marcus.weber@saleflow.example.com",
    phone: "+1 (555) 123-4573",
    role: "Agent",
    team: "SMB Sales",
    status: "Away",
    skills: ["SMB Sales", "Cold Calling", "Social Selling"],
    languages: ["English", "German"],
    dailyPerformance: generateAgentDailyPerformance("Agent", 0.8)
  },
  {
    id: "sa-008",
    name: "Sophie Martin",
    email: "sophie.martin@saleflow.example.com",
    phone: "+1 (555) 123-4574",
    role: "Team Lead",
    team: "European Sales",
    status: "Active",
    skills: ["International Sales", "Team Management", "Strategic Planning"],
    languages: ["English", "French", "German"],
    dailyPerformance: generateAgentDailyPerformance("Team Lead", 1.3)
  },
  {
    id: "sa-009",
    name: "Alex Thompson",
    email: "alex.thompson@saleflow.example.com",
    phone: "+1 (555) 123-4575",
    role: "Agent",
    team: "SMB Sales",
    status: "Active",
    skills: ["Inside Sales", "Pipeline Management", "Sales Analytics"],
    languages: ["English"],
    dailyPerformance: generateAgentDailyPerformance("Agent", 0.7)
  },
  {
    id: "sa-010",
    name: "Maria Santos",
    email: "maria.santos@saleflow.example.com",
    phone: "+1 (555) 123-4576",
    role: "Agent",
    team: "European Sales",
    status: "Active",
    skills: ["Account Development", "Relationship Building", "Cross-Cultural Sales"],
    languages: ["English", "Portuguese", "Spanish"],
    dailyPerformance: generateAgentDailyPerformance("Agent", 0.6)
  },
  {
    id: "sa-011",
    name: "James Wilson",
    email: "james.wilson@saleflow.example.com",
    phone: "+1 (555) 123-4577",
    role: "Agent",
    team: "Enterprise Sales",
    status: "On Leave",
    skills: ["Enterprise Sales", "Solution Design", "Technical Consulting"],
    languages: ["English"],
    dailyPerformance: generateAgentDailyPerformance("Agent", 0.5)
  },
  {
    id: "sa-012",
    name: "Nina Kowalski",
    email: "nina.kowalski@saleflow.example.com",
    phone: "+1 (555) 123-4578",
    role: "Agent",
    team: "European Sales",
    status: "Active",
    skills: ["Territory Management", "Channel Sales", "Partner Relations"],
    languages: ["English", "Polish", "Russian"],
    dailyPerformance: generateAgentDailyPerformance("Agent", 0.4)
  }
]

export const mockTeams: SalesTeam[] = [
  {
    id: "st-001",
    name: "Enterprise Sales",
    lead: "sa-001",
    members: ["sa-001", "sa-002"],
    region: "North America",
    focus: ["Enterprise Clients", "Financial Services", "Technology"],
    metrics: {
      totalDeals: 77,
      totalRevenue: 1470000,
      avgDealSize: 19090,
      conversionRate: 0.35,
      activeMeetings: 25
    },
    targets: {
      deals: 100,
      revenue: 2000000,
      meetings: 200
    }
  },
  {
    id: "st-002",
    name: "APAC Sales",
    lead: "sa-003",
    members: ["sa-003"],
    region: "Asia Pacific",
    focus: ["Mid-Market", "Manufacturing", "Retail"],
    metrics: {
      totalDeals: 38,
      totalRevenue: 720000,
      avgDealSize: 18947,
      conversionRate: 0.32,
      activeMeetings: 15
    },
    targets: {
      deals: 80,
      revenue: 1500000,
      meetings: 150
    }
  }
]
