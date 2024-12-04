import { SalesAgent, SalesTeam } from '../types/sales';
import { generateAgentDailyPerformance } from './leaderboard';

// All sales agents including team structure
export const allAgents: SalesAgent[] = [
  {
    id: "sa-004",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "+1 (555) 456-7890",
    avatar: "/avatars/emily-davis.jpg",
    role: "Agent",
    team: "SMB Sales",
    status: "Active",
    skills: ["SMB Sales", "Prospecting", "Social Selling"],
    languages: ["English"],
    dailyPerformance: generateAgentDailyPerformance("Agent", 0.9)
  },
  {
    id: "sa-005",
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "+1 (555) 567-8901",
    avatar: "/avatars/david-wilson.jpg",
    role: "Team Lead",
    team: "Mid-Market",
    status: "Active",
    skills: ["Team Leadership", "Sales Strategy", "Coaching"],
    languages: ["English", "German"],
    dailyPerformance: generateAgentDailyPerformance("Team Lead", 1.1)
  },
  {
    id: "sa-006",
    name: "Lisa Brown",
    email: "lisa.brown@example.com",
    phone: "+1 (555) 678-9012",
    avatar: "/avatars/lisa-brown.jpg",
    role: "Agent",
    team: "Enterprise Sales",
    status: "Away",
    skills: ["Enterprise Sales", "Account Planning", "Executive Presentations"],
    languages: ["English", "Portuguese"],
    dailyPerformance: generateAgentDailyPerformance("Agent", 0.95)
  }
];

export const salesTeams: SalesTeam[] = [
  {
    id: "st-001",
    name: "Enterprise Sales",
    lead: "sa-001",
    members: ["sa-001", "sa-002", "sa-006"],
    region: "North America",
    focus: ["Fortune 500", "Global Enterprises"],
    metrics: {
      totalDeals: 45,
      totalRevenue: 2500000,
      avgDealSize: 55556,
      conversionRate: 35,
      customerRetention: 95,
      teamEfficiency: 88,
      pipelineHealth: 92,
      teamSatisfaction: 90
    }
  },
  {
    id: "st-002",
    name: "Mid-Market",
    lead: "sa-005",
    members: ["sa-003", "sa-005"],
    region: "EMEA",
    focus: ["Mid-sized Companies", "Growth Companies"],
    metrics: {
      totalDeals: 85,
      totalRevenue: 1800000,
      avgDealSize: 21176,
      conversionRate: 42,
      customerRetention: 88,
      teamEfficiency: 85,
      pipelineHealth: 87,
      teamSatisfaction: 85
    }
  },
  {
    id: "st-003",
    name: "SMB Sales",
    lead: "sa-004",
    members: ["sa-004"],
    region: "APAC",
    focus: ["Small Business", "Startups"],
    metrics: {
      totalDeals: 120,
      totalRevenue: 900000,
      avgDealSize: 7500,
      conversionRate: 48,
      customerRetention: 82,
      teamEfficiency: 90,
      pipelineHealth: 85,
      teamSatisfaction: 88
    }
  }
];
