"use client"

import { Button } from "@/components/ui/button"

const mockReports = [
  {
    id: 1,
    name: "Sales Pipeline Overview",
    description: "Current status and projections of all deals in pipeline",
    lastUpdated: "2024-02-22",
    type: "Pipeline",
  },
  {
    id: 2,
    name: "Monthly Revenue Report",
    description: "Revenue analysis and trends for the current month",
    lastUpdated: "2024-02-22",
    type: "Revenue",
  },
  {
    id: 3,
    name: "Team Performance",
    description: "Individual and team sales performance metrics",
    lastUpdated: "2024-02-21",
    type: "Performance",
  },
  {
    id: 4,
    name: "Deal Conversion Rates",
    description: "Analysis of deal progression through sales stages",
    lastUpdated: "2024-02-20",
    type: "Analytics",
  },
]

export default function Reports() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Reports</h1>
        <Button>Create Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockReports.map((report) => (
          <div key={report.id} className="bg-card rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <span className={`inline-block px-2 py-1 rounded-full text-xs mb-2 ${
                  report.type === "Pipeline"
                    ? "bg-blue-100 text-blue-800"
                    : report.type === "Revenue"
                    ? "bg-green-100 text-green-800"
                    : report.type === "Performance"
                    ? "bg-purple-100 text-purple-800"
                    : "bg-orange-100 text-orange-800"
                }`}>
                  {report.type}
                </span>
                <h3 className="font-medium">{report.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
              </div>
              <Button variant="ghost" size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
            
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Last updated: {report.lastUpdated}
            </div>

            <div className="mt-4 flex space-x-3">
              <Button variant="outline" size="sm">View Report</Button>
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
