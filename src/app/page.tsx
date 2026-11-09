import FinalArt from "@/components/home/FinalArt";
import Footer from "@/components/home/Footer";
import Help from "@/components/home/Help";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Projects from "@/components/home/Projects";
import { homeFontVariables } from "@/fonts/home";

export default function Home() {
  return (
    <div className={`${homeFontVariables} font-sans`}>
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Help />
        <FinalArt />
      </main>
      <Footer />
    </div>
  );
}
