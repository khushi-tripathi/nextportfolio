
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HomeEntrySection from "@/components/HomeEntrySection";
import Instructors from "@/components/Instructors";
import About from "@/components/About";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-default-theme antialiased bg-grid-white/[0.02] justify-center items-center">
      <HomeEntrySection />
      {/* <FeaturedCourses /> */}
      {/* <WhyChooseUs /> */}
      <About />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
