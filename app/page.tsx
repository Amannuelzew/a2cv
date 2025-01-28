import { FeaturedRestaurants } from "@/components/FeaturedRestaurants"
import { Hero } from "@/components/Hero"
import { Footer } from "@/components/Footor"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedRestaurants />
      <Footer/>
    </main>
  )
}

