import { Metadata } from "next"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { statusData, Incident } from "@/lib/mock-data"
import { BackButton } from "@/components/ui/back-button"

export const metadata: Metadata = {
  title: "System Status - SaleFlow",
  description: "View the current system status and any ongoing incidents"
}

export default function StatusPage() {
  return (
    <div className="container py-8">
      <BackButton href="/" />
      <div className="mx-auto px-4 py-12 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">System Status</h1>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-500" />
            <span className="font-semibold">All Systems Operational</span>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Service Status</h2>
            <div className="space-y-4">
              {statusData.systemStatus.services.map((service) => (
                <div key={service.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <span className="font-medium">{service.name}</span>
                    <div className="text-sm text-muted-foreground">Uptime: {service.uptime}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {service.status === "operational" ? (
                      <>
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span className="text-green-500">Operational</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                        <span className="text-yellow-500">Degraded</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">System Metrics</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {Object.entries(statusData.metrics).map(([key, value]) => (
                <div key={key} className="p-4 border rounded-lg">
                  <h3 className="font-medium text-muted-foreground mb-2">
                    {key.split(/(?=[A-Z])/).join(" ").replace(/([0-9]+)/, " $1 ")}
                  </h3>
                  <p className="text-2xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Recent Incidents</h2>
            {statusData.recentIncidents.length > 0 ? (
              <div className="space-y-4">
                {statusData.recentIncidents.map((incident, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h3 className="font-semibold">{incident.title}</h3>
                    <p className="text-muted-foreground">{incident.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-muted p-6 rounded-lg text-center">
                <p className="text-muted-foreground">No incidents reported in the last 90 days.</p>
              </div>
            )}
          </section>

          <div className="text-sm text-muted-foreground text-right">
            Last updated: {new Date(statusData.systemStatus.lastUpdated).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}
