"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus, MoreVertical, Mail } from "lucide-react"

export default function TeamSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-6">Team Settings</h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Team Members</h3>
            <Button>
              <UserPlus className="w-4 h-4 mr-2" />
              Add Member
            </Button>
          </div>

          <div className="border rounded-lg divide-y">
            {[
              {
                name: "John Doe",
                email: "john@example.com",
                role: "Admin",
                avatar: "JD",
              },
              {
                name: "Jane Smith",
                email: "jane@example.com",
                role: "Member",
                avatar: "JS",
              },
              {
                name: "Mike Johnson",
                email: "mike@example.com",
                role: "Member",
                avatar: "MJ",
              },
            ].map((member) => (
              <div
                key={member.email}
                className="flex justify-between items-center p-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {member.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">
                    {member.role}
                  </span>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Pending Invitations</h3>
          <div className="border rounded-lg divide-y">
            {[
              {
                email: "sarah@example.com",
                role: "Member",
                sent: "2 days ago",
              },
              {
                email: "david@example.com",
                role: "Member",
                sent: "5 days ago",
              },
            ].map((invitation) => (
              <div
                key={invitation.email}
                className="flex justify-between items-center p-4"
              >
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{invitation.email}</p>
                    <p className="text-sm text-muted-foreground">
                      Sent {invitation.sent}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">
                    {invitation.role}
                  </span>
                  <Button variant="outline" size="sm">
                    Resend
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Team Settings</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="teamName">Team Name</Label>
              <Input id="teamName" defaultValue="SaleFlow Team" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="teamDomain">Team Domain</Label>
              <div className="flex items-center space-x-2">
                <Input id="teamDomain" defaultValue="saleflow" />
                <span className="text-muted-foreground">.example.com</span>
              </div>
            </div>
          </div>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  )
}
