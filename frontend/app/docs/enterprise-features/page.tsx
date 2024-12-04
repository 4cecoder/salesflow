import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Building2, BarChart3, Lock, Key } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EnterpriseFeatures() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Enterprise Features</h1>

      <Alert className="mb-8">
        <Building2 className="h-4 w-4" />
        <AlertTitle>Enterprise-Grade Platform</AlertTitle>
        <AlertDescription>
          SaleFlow is built from the ground up with enterprise needs in mind. Our platform provides 
          the security, scalability, and administrative features that modern enterprises require.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
        <Card>
          <CardHeader>
            <Shield className="h-5 w-5 mb-2 text-blue-500" />
            <CardTitle>Authentication & Security</CardTitle>
            <CardDescription>Enterprise-grade security features and authentication options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <Key className="h-4 w-4" />
                  Single Sign-On (SSO)
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Standard</Badge>
                    Microsoft Azure AD integration
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Standard</Badge>
                    Google Workspace support
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Standard</Badge>
                    Okta SSO compatibility
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Enterprise</Badge>
                    Custom IdP integration
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <Lock className="h-4 w-4" />
                  Security Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Standard</Badge>
                    End-to-end encryption
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Standard</Badge>
                    TLS 1.3 encryption
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Enterprise</Badge>
                    HIPAA compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Enterprise</Badge>
                    IP allowlisting
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-5 w-5 mb-2 text-blue-500" />
            <CardTitle>Administrative Controls</CardTitle>
            <CardDescription>Comprehensive tools for user and system management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <Users className="h-4 w-4" />
                  User Management
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Standard</Badge>
                    Role-based access control
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Enterprise</Badge>
                    Custom role definitions
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Enterprise</Badge>
                    Bulk user provisioning
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Enterprise</Badge>
                    Active Directory sync
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <BarChart3 className="h-4 w-4" />
                  Monitoring & Analytics
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Standard</Badge>
                    User activity monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Standard</Badge>
                    Login attempt tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Enterprise</Badge>
                    Advanced analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Enterprise</Badge>
                    Custom reporting
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose">
        <Button variant="default" asChild>
          <Link href="/docs/getting-started" className="inline-flex items-center gap-2">
            Get Started with Enterprise
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
