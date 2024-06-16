
import Footer from "@/components/Footer";
import HomeEntrySection from "@/components/HomeEntrySection";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-black antialiased bg-grid-white/[0.05] justify-center items-center">
      <HomeEntrySection />
      <About />
      <Capabilities />
      <Footer />
    </main>
  );
}
