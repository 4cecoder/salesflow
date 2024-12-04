"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function AccountSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Password</h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="current">Current Password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new">New Password</Label>
              <Input id="new" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm New Password</Label>
              <Input id="confirm" type="password" />
            </div>
          </div>
          <Button>Update Password</Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email notifications about your account activity
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive push notifications about important updates
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Language and Region</h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <select
                id="language"
                className="w-full p-2 border rounded-md bg-background"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select
                id="timezone"
                className="w-full p-2 border rounded-md bg-background"
                defaultValue="PST"
              >
                <option value="PST">Pacific Time (PST)</option>
                <option value="EST">Eastern Time (EST)</option>
                <option value="GMT">GMT</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-red-600">Danger Zone</h3>
          <div className="p-4 border border-red-200 rounded-md space-y-4">
            <div>
              <h4 className="font-medium">Delete Account</h4>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all of your data
              </p>
            </div>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
