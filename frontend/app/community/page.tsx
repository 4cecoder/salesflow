import { Metadata } from "next"
import { communityData } from "@/lib/mock-data"
import { CalendarDays, MessageSquare, Users } from "lucide-react"
import { BackButton } from "@/components/ui/back-button"

export const metadata: Metadata = {
  title: "Community - SaleFlow",
  description: "Join the SaleFlow community to connect with other sales professionals and share best practices.",
}

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <BackButton href="/" />
      <h1 className="text-4xl font-bold mb-8">SaleFlow Community</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Latest Discussions</h2>
            <div className="space-y-4">
              {communityData.forumTopics.map((topic) => (
                <div key={topic.id} className="p-4 border rounded-lg hover:border-primary transition-colors">
                  <h3 className="font-semibold mb-2">{topic.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>By {topic.author}</span>
                    <span>{topic.replies} replies</span>
                    <span>{topic.views} views</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Community Stats</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <Users className="h-6 w-6 mx-auto mb-2" />
                <div className="font-semibold">5,000+</div>
                <div className="text-sm text-muted-foreground">Members</div>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <MessageSquare className="h-6 w-6 mx-auto mb-2" />
                <div className="font-semibold">10k+</div>
                <div className="text-sm text-muted-foreground">Posts</div>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <CalendarDays className="h-6 w-6 mx-auto mb-2" />
                <div className="font-semibold">50+</div>
                <div className="text-sm text-muted-foreground">Events</div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {communityData.upcomingEvents.map((event) => (
                <div key={event.id} className="p-4 border rounded-lg hover:border-primary transition-colors">
                  <h3 className="font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>Speaker: {event.speaker}</div>
                    <div>Date: {new Date(event.date).toLocaleDateString()}</div>
                    <div>{event.attendees} attending</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <div className="space-y-4">
              <a href="#" className="block p-4 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold">Community Guidelines</h3>
                <p className="text-sm text-muted-foreground">Learn about our community standards</p>
              </a>
              <a href="#" className="block p-4 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold">Knowledge Base</h3>
                <p className="text-sm text-muted-foreground">Access community-contributed resources</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
