"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            SaleFlow
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/features">
              <Button variant="ghost">Features</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>
            <Link href="/documentation">
              <Button variant="ghost">Documentation</Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
            <Link href="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col gap-2">
              <Link href="/features">
                <Button variant="ghost" className="w-full justify-start">
                  Features
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="ghost" className="w-full justify-start">
                  Pricing
                </Button>
              </Link>
              <Link href="/documentation">
                <Button variant="ghost" className="w-full justify-start">
                  Documentation
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" className="w-full justify-start">
                  Contact
                </Button>
              </Link>
              <Link href="/signin">
                <Button variant="outline" className="w-full justify-start">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="w-full justify-start">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
