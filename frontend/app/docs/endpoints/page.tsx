import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function EndpointSection({ title, endpoints }: { title: string; endpoints: { path: string; method: string; description: string }[] }) {
  return (
    <div className="mb-8">
      <h2>{title}</h2>
      <div className="not-prose">
        <div className="rounded-lg border divide-y">
          {endpoints.map((endpoint, i) => (
            <div key={i} className="p-4 flex items-start gap-4">
              <div className="font-mono text-sm px-2 py-1 rounded bg-primary/10 text-primary whitespace-nowrap">
                {endpoint.method}
              </div>
              <div>
                <div className="font-mono text-sm mb-1">{endpoint.path}</div>
                <div className="text-sm text-muted-foreground">{endpoint.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function APIEndpoints() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>API Reference</h1>

      <p className="lead">
        Complete documentation of SaleFlow's REST API endpoints. All API calls require authentication 
        via JWT token or API key.
      </p>

      <EndpointSection
        title="Authentication & Authorization"
        endpoints={[
          { method: "POST", path: "/api/v1/auth/register", description: "Company registration" },
          { method: "POST", path: "/api/v1/auth/login", description: "User login" },
          { method: "POST", path: "/api/v1/auth/refresh", description: "Refresh access token" },
          { method: "POST", path: "/api/v1/auth/logout", description: "User logout" },
          { method: "POST", path: "/api/v1/auth/reset-password", description: "Password reset" },
          { method: "GET", path: "/api/v1/auth/verify/{token}", description: "Email verification" },
        ]}
      />

      <EndpointSection
        title="Company Management"
        endpoints={[
          { method: "GET", path: "/api/v1/company", description: "Get company profile" },
          { method: "PUT", path: "/api/v1/company", description: "Update company settings" },
          { method: "POST", path: "/api/v1/company/branding", description: "Update company branding" },
          { method: "GET", path: "/api/v1/company/usage", description: "Get platform usage metrics" },
          { method: "POST", path: "/api/v1/company/invite", description: "Invite team members" },
        ]}
      />

      <EndpointSection
        title="User Management"
        endpoints={[
          { method: "GET", path: "/api/v1/users", description: "List company users" },
          { method: "POST", path: "/api/v1/users", description: "Create new user" },
          { method: "GET", path: "/api/v1/users/{id}", description: "Get user details" },
          { method: "PUT", path: "/api/v1/users/{id}", description: "Update user" },
          { method: "DELETE", path: "/api/v1/users/{id}", description: "Delete user" },
          { method: "PUT", path: "/api/v1/users/{id}/role", description: "Update user role" },
        ]}
      />

      <EndpointSection
        title="Video Conferencing"
        endpoints={[
          { method: "POST", path: "/api/v1/meetings", description: "Create meeting" },
          { method: "GET", path: "/api/v1/meetings/{id}", description: "Get meeting details" },
          { method: "PUT", path: "/api/v1/meetings/{id}", description: "Update meeting" },
          { method: "DELETE", path: "/api/v1/meetings/{id}", description: "Cancel meeting" },
          { method: "POST", path: "/api/v1/meetings/{id}/join", description: "Join meeting" },
          { method: "POST", path: "/api/v1/meetings/{id}/leave", description: "Leave meeting" },
          { method: "GET", path: "/api/v1/meetings/{id}/recording", description: "Get meeting recording" },
          { method: "POST", path: "/api/v1/meetings/schedule", description: "Schedule future meeting" },
        ]}
      />

      <EndpointSection
        title="Real-time Communication"
        endpoints={[
          { method: "WS", path: "/ws/meeting/{id}", description: "Meeting WebSocket connection" },
          { method: "WS", path: "/ws/notifications", description: "Real-time notifications" },
          { method: "WS", path: "/ws/chat/{roomId}", description: "Chat room connection" },
        ]}
      />

      <div className="not-prose mt-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/docs/video-architecture">
            <Button className="group">
              Video Architecture
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/docs/enterprise-features">
            <Button variant="outline">
              Enterprise Features
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
