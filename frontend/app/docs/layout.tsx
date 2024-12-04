import { Navbar } from "@/components/shared/navbar"
import { PageTransition } from "@/components/shared/page-transition"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-32">
          {children}
        </div>
      </div>
    </PageTransition>
  )
}
