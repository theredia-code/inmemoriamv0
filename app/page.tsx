import { Navigation } from "@/components/memorial/navigation"
import { Hero } from "@/components/memorial/hero"
import { Biography } from "@/components/memorial/biography"
import { Timeline } from "@/components/memorial/timeline"
import { Gallery } from "@/components/memorial/gallery"
import { Tributes } from "@/components/memorial/tributes"
import { VideoTribute } from "@/components/memorial/video-tribute"
import { Condolences } from "@/components/memorial/condolences"
import { Footer } from "@/components/memorial/footer"

export default function MemorialPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Biography />
      <Timeline />
      <Gallery />
      <Tributes />
      <VideoTribute />
      <Condolences />
      <Footer />
    </main>
  )
}
