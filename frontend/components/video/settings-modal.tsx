'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Mic, Video, Monitor, Keyboard, Wand2, Volume2, Waves, Webcam, Layout, Subtitles, Sparkles } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

interface SettingsModalProps {
  trigger?: React.ReactNode
}

export function SettingsModal({ trigger }: SettingsModalProps) {
  const [activeTab, setActiveTab] = useState('audio')

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Meeting Settings
          </DialogTitle>
          <DialogDescription>
            Configure your audio, video, and other meeting preferences.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="audio" className="mt-4" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="audio" className="flex items-center gap-2">
              <Volume2 className="h-4 w-4" />
              <span className="hidden sm:inline">Audio</span>
            </TabsTrigger>
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Webcam className="h-4 w-4" />
              <span className="hidden sm:inline">Video</span>
            </TabsTrigger>
            <TabsTrigger value="general" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              <span className="hidden sm:inline">General</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">AI</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="audio" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Waves className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="noise-cancellation">Noise Cancellation</Label>
                </div>
                <Switch id="noise-cancellation" />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Microphone</Label>
                <Select defaultValue="default">
                  <SelectTrigger>
                    <SelectValue placeholder="Select microphone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default Microphone</SelectItem>
                    <SelectItem value="external">External Microphone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="video" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="hd-video">HD Video</Label>
                </div>
                <Switch id="hd-video" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wand2 className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="virtual-bg">Virtual Background</Label>
                </div>
                <Switch id="virtual-bg" />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Camera</Label>
                <Select defaultValue="default">
                  <SelectTrigger>
                    <SelectValue placeholder="Select camera" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default Camera</SelectItem>
                    <SelectItem value="external">External Camera</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="general" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Keyboard className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="keyboard-shortcuts">Keyboard Shortcuts</Label>
                </div>
                <Switch id="keyboard-shortcuts" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="mirror-video">Mirror My Video</Label>
                </div>
                <Switch id="mirror-video" />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Meeting Layout</Label>
                <Select defaultValue="gallery">
                  <SelectTrigger>
                    <SelectValue placeholder="Select layout" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gallery">Gallery View</SelectItem>
                    <SelectItem value="speaker">Speaker View</SelectItem>
                    <SelectItem value="sidebar">Sidebar View</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Subtitles className="h-4 w-4 text-muted-foreground" />
                  <div className="space-y-1">
                    <Label htmlFor="auto-captions">Auto-Captions</Label>
                    <p className="text-sm text-muted-foreground">Generate real-time captions using AI</p>
                  </div>
                </div>
                <Switch id="auto-captions" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-muted-foreground" />
                  <div className="space-y-1">
                    <Label htmlFor="ai-enhancement">AI Enhancement</Label>
                    <p className="text-sm text-muted-foreground">Enhance video and audio quality</p>
                  </div>
                </div>
                <Switch id="ai-enhancement" />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>AI Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
