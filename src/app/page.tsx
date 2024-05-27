
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HomeEntrySection from "@/components/HomeEntrySection";
import Instructors from "@/components/Instructors";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-black antialiased bg-grid-white/[0.05] justify-center items-center">
      <HomeEntrySection />
      {/* <FeaturedCourses /> */}
      {/* <WhyChooseUs /> */}
      <About />
      <Capabilities />
      {/* <Instructors /> */}
      <Footer />
    </main>
  );
}
