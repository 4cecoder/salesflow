import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils"
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaleFlow - Personal Customer Interactions Platform',
  description: 'Transform your customer relationships with personalized video meetings, automated communications, and seamless integrations.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        inter.className,
        "min-h-screen bg-background font-sans antialiased"
      )}>
        {children}
      </body>
    </html>
  )
}
