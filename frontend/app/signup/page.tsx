import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Github, Mail } from "lucide-react"

// Import SSO provider icons
const MicrosoftIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 0H0V11H11V0Z" fill="#F25022"/>
    <path d="M23 0H12V11H23V0Z" fill="#7FBA00"/>
    <path d="M11 12H0V23H11V12Z" fill="#00A4EF"/>
    <path d="M23 12H12V23H23V12Z" fill="#FFB900"/>
  </svg>
)

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.55 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const OktaIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 18.75c-3.721 0-6.75-3.029-6.75-6.75S8.279 5.25 12 5.25s6.75 3.029 6.75 6.75-3.029 6.75-6.75 6.75z" fill="#007DC1"/>
  </svg>
)

export default function SignUp() {
  return (
    <div className="flex min-h-screen bg-muted">
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/" className="flex justify-center text-xl font-bold mb-8">
            SaleFlow
          </Link>
          <h2 className="text-2xl font-bold text-center">
            Get started with SaleFlow
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/signin" className="text-primary hover:text-primary/90">
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-background px-4 py-8 shadow sm:rounded-lg sm:px-10">
            {/* SSO Options */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start" size="lg">
                <MicrosoftIcon />
                <span className="ml-3">Continue with Microsoft</span>
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <GoogleIcon />
                <span className="ml-3">Continue with Google Workspace</span>
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <OktaIcon />
                <span className="ml-3">Continue with Okta</span>
              </Button>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or sign up with email
                  </span>
                </div>
              </div>
            </div>

            <form className="mt-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium">
                    First name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium">
                    Last name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Work email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium">
                  Company name
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="mt-1"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:text-primary/90">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:text-primary/90">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full">
                Create account
              </Button>
            </form>

            <div className="mt-6">
              <p className="text-center text-sm text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="/enterprise-terms" className="text-primary hover:text-primary/90">
                  Enterprise Terms
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side banner */}
      <div className="hidden lg:block relative flex-1 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground opacity-90" />
        <div className="absolute inset-0 flex flex-col justify-center px-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Enterprise-Ready Video Sales Platform
          </h2>
          <ul className="space-y-4 text-lg text-white/90">
            <li className="flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Single Sign-On (SSO) Support
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              SAML 2.0 Integration
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Advanced Team Management
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Enterprise-grade Security
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
