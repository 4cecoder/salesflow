import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-muted-foreground hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-muted-foreground hover:text-primary">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-primary">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-primary">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-muted-foreground hover:text-primary">
                  Status
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-muted-foreground hover:text-primary">
                  Videos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-muted-foreground hover:text-primary">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-xl font-bold">
                SaleFlow
              </Link>
              <p className="text-sm text-muted-foreground">
                {new Date().getFullYear()} SaleFlow. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
