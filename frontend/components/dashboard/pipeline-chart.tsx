"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
}

const mockData = {
  labels: ["Lead", "Meeting", "Proposal", "Negotiation", "Closed"],
  datasets: [
    {
      label: "Number of Deals",
      data: [12, 8, 6, 4, 2],
      backgroundColor: "hsl(var(--primary) / 0.5)",
      borderColor: "hsl(var(--primary))",
      borderWidth: 1,
    },
  ],
}

export function PipelineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deal Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar options={options} data={mockData} height={100} />
      </CardContent>
    </Card>
  )
}
