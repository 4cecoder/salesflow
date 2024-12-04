import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Mic, MicOff, Video as VideoIcon, VideoOff, Phone, MessageSquare, Share, Settings } from 'lucide-react'

interface VideoRoomProps {
  roomId: string
  username: string
  onLeave: () => void
  onToggleChat?: () => void
}

export function VideoRoom({ roomId, username, onLeave, onToggleChat }: VideoRoomProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Initialize WebRTC connection here
    const initializeMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        })
        
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream
        }
        
        // TODO: Implement WebRTC peer connection
        // This is where we would:
        // 1. Create RTCPeerConnection
        // 2. Add tracks from local stream
        // 3. Create and exchange offer/answer
        // 4. Handle ICE candidates
        
      } catch (error) {
        console.error('Error accessing media devices:', error)
      }
    }

    initializeMedia()

    return () => {
      // Cleanup media streams
      if (localVideoRef.current?.srcObject) {
        const tracks = (localVideoRef.current.srcObject as MediaStream).getTracks()
        tracks.forEach(track => track.stop())
      }
    }
  }, [roomId])

  const toggleMute = () => {
    if (localVideoRef.current?.srcObject) {
      const audioTracks = (localVideoRef.current.srcObject as MediaStream).getAudioTracks()
      audioTracks.forEach(track => {
        track.enabled = !track.enabled
      })
      setIsMuted(!isMuted)
    }
  }

  const toggleVideo = () => {
    if (localVideoRef.current?.srcObject) {
      const videoTracks = (localVideoRef.current.srcObject as MediaStream).getVideoTracks()
      videoTracks.forEach(track => {
        track.enabled = !track.enabled
      })
      setIsVideoOff(!isVideoOff)
    }
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Main Video Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 relative">
          {/* Remote Video (Main) */}
          <video
            ref={remoteVideoRef}
            className="w-full h-full object-cover"
            autoPlay
            playsInline
          />
          
          {/* Local Video (Picture-in-Picture) */}
          <div className="absolute bottom-4 right-4 w-48 aspect-video rounded-lg overflow-hidden border-2 border-background shadow-lg">
            <video
              ref={localVideoRef}
              className="w-full h-full object-cover"
              autoPlay
              playsInline
              muted
            />
          </div>
        </div>

        {/* Controls */}
        <div className="p-4 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMute}
            >
              {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={toggleVideo}
            >
              {isVideoOff ? <VideoOff className="h-4 w-4" /> : <VideoIcon className="h-4 w-4" />}
            </Button>

            <Button
              variant="destructive"
              size="icon"
              onClick={onLeave}
            >
              <Phone className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={onToggleChat}
            >
              <MessageSquare className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
            >
              <Share className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Sidebar */}
      {isChatOpen && (
        <div className="w-80 border-l bg-background">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Chat</h2>
          </div>
          <div className="flex flex-col h-[calc(100vh-8rem)]">
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Chat messages would go here */}
            </div>
            <div className="p-4 border-t">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full px-3 py-2 rounded-lg border bg-background"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
