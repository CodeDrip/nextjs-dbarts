import { DiagonalShapesMarquee } from "@/components/DiagonalShapesMarquee";
import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/sections/AboutSection";
import { CommunitySection } from "@/sections/CommunitySection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { ProgramsSection } from "@/sections/ProgramsSection";
import React from "react";

const Home = () => {
  console.log('what am i?')
  return (
    <div className="bg-charcoal min-h-screen">
      <Navigation />

        <main>
          <HeroSection />
          <DiagonalShapesMarquee />
          <AboutSection />
          <ProgramsSection />
          <CommunitySection />
          <DiagonalShapesMarquee />
          <ContactSection />
          <DiagonalShapesMarquee />
        </main>

      <Footer />
    </div>
  )
}
export default Home