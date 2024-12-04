import { Metadata } from "next"
import { Play, Clock, BookOpen, Award } from "lucide-react"
import { videosData } from "@/lib/mock-data"
import { BackButton } from "@/components/ui/back-button"

export const metadata: Metadata = {
  title: "Videos - SaleFlow",
  description: "Watch tutorials, demos, and best practices for using SaleFlow.",
}

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <BackButton href="/" />
      <h1 className="text-4xl font-bold mb-8">Video Resources</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Featured Video</h2>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center group hover:bg-muted/80 transition-colors cursor-pointer">
            <Play className="h-12 w-12 group-hover:scale-110 transition-transform" />
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">{videosData.featured.title}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{videosData.featured.duration}</span>
              <span>{videosData.featured.views} views</span>
            </div>
            <p className="mt-2 text-muted-foreground">
              {videosData.featured.description}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Popular Categories</h2>
          <div className="grid gap-4">
            {videosData.categories.map((category) => {
              const Icon = category.title.includes("Quick") ? Clock :
                         category.title.includes("Tutorial") ? BookOpen : Award;
              
              return (
                <a
                  key={category.id}
                  href="#"
                  className="flex items-center gap-4 p-4 border rounded-lg hover:border-primary transition-colors"
                >
                  <Icon className="h-8 w-8 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                    <span className="text-xs text-muted-foreground">{category.videoCount} videos</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Latest Videos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videosData.latestVideos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                <Play className="h-8 w-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{video.duration}</span>
                <span>•</span>
                <span>{video.views} views</span>
                <span>•</span>
                <span>{new Date(video.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
