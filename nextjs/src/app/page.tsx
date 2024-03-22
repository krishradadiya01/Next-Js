import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import UpComingWebinar from "@/components/UpComingWebinar";
import WhyMusicCourse from "@/components/WhyMusicCourse";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <WhyMusicCourse />
      <TestimonialCard />
      <UpComingWebinar />
      <Instructors />
    </>
  );
}
