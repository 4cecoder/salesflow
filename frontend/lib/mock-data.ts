export const communityData = {
  forumTopics: [
    {
      id: 1,
      title: "Best practices for AI-assisted sales calls",
      author: "Sarah Johnson",
      replies: 24,
      views: 1205,
      lastActivity: "2024-01-15T10:30:00Z"
    },
    {
      id: 2,
      title: "How to integrate SaleFlow with Salesforce",
      author: "Mike Chen",
      replies: 18,
      views: 892,
      lastActivity: "2024-01-14T15:45:00Z"
    },
    {
      id: 3,
      title: "Tips for improving video call quality",
      author: "Emma Davis",
      replies: 31,
      views: 1567,
      lastActivity: "2024-01-13T09:15:00Z"
    }
  ],
  upcomingEvents: [
    {
      id: 1,
      title: "SaleFlow Masterclass: Advanced AI Features",
      date: "2024-02-01T18:00:00Z",
      speaker: "Dr. Alex Turner",
      attendees: 156
    },
    {
      id: 2,
      title: "Sales Optimization Workshop",
      date: "2024-02-15T17:00:00Z",
      speaker: "Lisa Wong",
      attendees: 89
    }
  ]
}

export const supportData = {
  faqItems: [
    {
      question: "How do I get started with SaleFlow?",
      answer: "Getting started is easy! First, create your account and set up your team. Then, follow our quick start guide to configure your workspace and start your first AI-assisted sales call."
    },
    {
      question: "What are the system requirements?",
      answer: "SaleFlow works on any modern web browser (Chrome, Firefox, Safari, Edge) with a stable internet connection of at least 5 Mbps. For video calls, we recommend a minimum of 10 Mbps."
    },
    {
      question: "How do I integrate with my existing CRM?",
      answer: "We provide native integrations with major CRM platforms including Salesforce, HubSpot, and Pipedrive. Go to Settings > Integrations to connect your CRM in just a few clicks."
    },
    {
      question: "Can I customize the AI assistant's behavior?",
      answer: "Yes! You can customize the AI assistant's personality, response style, and sales approach in the AI Settings panel. You can also train it on your specific product knowledge."
    }
  ],
  supportHours: {
    weekday: {
      start: "9:00 AM",
      end: "8:00 PM",
      timezone: "EST"
    },
    weekend: {
      start: "10:00 AM",
      end: "6:00 PM",
      timezone: "EST"
    }
  },
  contactChannels: [
    {
      type: "chat",
      availability: "24/7",
      responseTime: "< 5 minutes"
    },
    {
      type: "email",
      availability: "24/7",
      responseTime: "< 4 hours"
    },
    {
      type: "phone",
      availability: "Business hours",
      responseTime: "Immediate"
    }
  ]
}

export interface Incident {
  title: string;
  description: string;
  date?: string;
  severity?: 'low' | 'medium' | 'high';
}

export const statusData = {
  systemStatus: {
    overall: "operational",
    lastUpdated: "2024-01-15T12:00:00Z",
    services: [
      {
        name: "Video Conferencing",
        status: "operational",
        uptime: "99.99%"
      },
      {
        name: "AI Sales Assistant",
        status: "operational",
        uptime: "99.95%"
      },
      {
        name: "CRM Integration",
        status: "operational",
        uptime: "99.98%"
      },
      {
        name: "Authentication Services",
        status: "operational",
        uptime: "100%"
      },
      {
        name: "Analytics Platform",
        status: "operational",
        uptime: "99.97%"
      }
    ]
  },
  metrics: {
    responseTime: "120ms",
    uptime30Days: "99.99%",
    activeUsers: "2.5k",
    totalRequests24h: "1.2M"
  },
  recentIncidents: [
    {
      title: "Temporary Service Interruption",
      description: "Brief downtime during system maintenance",
      date: "2024-01-10T03:00:00Z",
      severity: "low"
    }
  ] as Incident[]
}

export const videosData = {
  featured: {
    id: "featured-1",
    title: "Getting Started with SaleFlow",
    duration: "10:15",
    views: "5.2k",
    thumbnail: "/thumbnails/getting-started.jpg",
    description: "A comprehensive guide to setting up and using SaleFlow for your sales team."
  },
  categories: [
    {
      id: 1,
      title: "Quick Start Guides",
      description: "Get up and running in minutes",
      videoCount: 12
    },
    {
      id: 2,
      title: "Tutorial Series",
      description: "In-depth guides for advanced features",
      videoCount: 24
    },
    {
      id: 3,
      title: "Best Practices",
      description: "Learn from top performers",
      videoCount: 18
    }
  ],
  latestVideos: [
    {
      id: "v1",
      title: "AI Sales Assistant Overview",
      duration: "5:30",
      views: "1.2k",
      date: "2024-01-10T00:00:00Z"
    },
    {
      id: "v2",
      title: "Advanced CRM Integration",
      duration: "8:45",
      views: "856",
      date: "2024-01-08T00:00:00Z"
    },
    {
      id: "v3",
      title: "Optimizing Video Calls",
      duration: "6:15",
      views: "943",
      date: "2024-01-05T00:00:00Z"
    },
    {
      id: "v4",
      title: "Sales Analytics Deep Dive",
      duration: "12:20",
      views: "721",
      date: "2024-01-03T00:00:00Z"
    },
    {
      id: "v5",
      title: "Team Management Tips",
      duration: "7:50",
      views: "632",
      date: "2024-01-01T00:00:00Z"
    },
    {
      id: "v6",
      title: "Customer Success Stories",
      duration: "15:00",
      views: "1.5k",
      date: "2023-12-28T00:00:00Z"
    }
  ]
}
