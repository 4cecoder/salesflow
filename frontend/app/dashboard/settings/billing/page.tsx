"use client"

import { Button } from "@/components/ui/button"
import { CreditCard, Check } from "lucide-react"

export default function BillingSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-6">Billing Settings</h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Current Plan</h3>
          <div className="p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Enterprise Plan</h4>
                <p className="text-sm text-muted-foreground">
                  $99/month, billed annually
                </p>
              </div>
              <Button variant="outline">Change Plan</Button>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                <span>Unlimited team members</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                <span>Advanced analytics</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                <span>Priority support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Payment Method</h3>
          <div className="p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6" />
                <div>
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">
                    Expires 12/2024
                  </p>
                </div>
              </div>
              <Button variant="outline">Update</Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Billing History</h3>
          <div className="border rounded-lg divide-y">
            {[
              {
                date: "Mar 1, 2024",
                amount: "$99.00",
                status: "Paid",
                invoice: "#INV-2024-003",
              },
              {
                date: "Feb 1, 2024",
                amount: "$99.00",
                status: "Paid",
                invoice: "#INV-2024-002",
              },
              {
                date: "Jan 1, 2024",
                amount: "$99.00",
                status: "Paid",
                invoice: "#INV-2024-001",
              },
            ].map((item) => (
              <div
                key={item.invoice}
                className="flex justify-between items-center p-4"
              >
                <div>
                  <p className="font-medium">{item.date}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.invoice}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{item.amount}</p>
                  <p className="text-sm text-green-600">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
