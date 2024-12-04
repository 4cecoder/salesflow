import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BackButtonProps {
  href: string
}

export function BackButton({ href }: BackButtonProps) {
  return (
    <Link href={href}>
      <Button variant="ghost" size="sm" className="gap-2 mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
    </Link>
  )
}
