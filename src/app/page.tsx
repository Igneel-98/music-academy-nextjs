import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { TestimonialCards } from "@/components/TestimonialCards";
import { UpcomingWebinars } from "@/components/UpcomingWebinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <HeroSection />
      <FeaturedCourses />
      <TestimonialCards />
      <UpcomingWebinars />
    </main>
  );
}
