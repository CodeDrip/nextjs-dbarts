import { DiagonalShapesMarquee } from "@/components/DiagonalShapesMarquee";
import { AboutSection } from "@/sections/AboutSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProgramsSection } from "@/sections/ProgramsSection";
import React from "react";

const Home = () => {
  console.log('what am i?')
  return (
    <main>
      <HeroSection />
      <DiagonalShapesMarquee />
      <AboutSection />
      <ProgramsSection />
    </main>

  )
}
export default Home