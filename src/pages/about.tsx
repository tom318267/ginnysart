import React from "react";
import AboutHero from "../components/AboutHero";
import EveryPaintingSection from "../components/EveryPaintingSection";
import StatsSection from "../components/StatSection";
import TestimonialsSection from "../components/TestimonialsSection";

const About = () => {
  return (
    <div>
      <AboutHero />
      <EveryPaintingSection />
      <StatsSection />
      <TestimonialsSection />
    </div>
  );
};

export default About;
