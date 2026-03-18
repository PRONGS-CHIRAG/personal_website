import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Ventures from "@/sections/Ventures";
import TechStack from "@/sections/TechStack";
import Experience from "@/sections/Experience";
import Highlights from "@/sections/Highlights";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Projects />
      <Ventures />
      <TechStack />
      <Experience />
      <Highlights />
      <Contact />
      <Footer />
    </main>
  );
}
