import React from "react";
import Hero from "../components/Hero";
import ArtStudioSection from "../components/ArtStudioSection";
import PaintingCategories from "../components/PaintingCategories";
import CustomPaintingSection from "../components/CustomPaintingSection";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ArtStudioSection />
      <PaintingCategories />
      <CustomPaintingSection />
    </div>
  );
}
