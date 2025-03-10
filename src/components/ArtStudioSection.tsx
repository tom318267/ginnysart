import React from "react";
import Image from "next/image";
import { useInView } from "../hooks/useInView";

const ArtStudioSection = () => {
  const { ref: contentRef, isInView: contentIsInView } = useInView();

  return (
    <section className="bg-[#3F217F] text-white py-16 px-6 md:px-20 relative">
      {/* Background texture (optional) */}
      <div className="absolute inset-0 bg-[url('/images/herosecond.jpg')] bg-cover"></div>

      <div
        ref={contentRef}
        className={`container px-4 py-12 md:px-8 mx-auto grid md:grid-cols-2 gap-8 relative z-10 transition-opacity duration-[2000ms] delay-[800ms] ${
          contentIsInView ? "animate-scrollFadeIn" : "opacity-0"
        }`}
      >
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <Image
              src="/images/brush1.svg"
              alt="Brush stroke"
              width={145}
              height={40}
              className="w-[145px]"
            />
          </div>
          <p className="text-lg leading-relaxed">
            Virginia's Art Studio is dedicated to creating unique, hand-painted
            artwork inspired by nature, beauty, and emotion. Each piece is
            carefully crafted to bring warmth and creativity to your space.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-4 italic font-light text-gray-200">
          <p className="text-lg pt-14 leading-relaxed">
            From concept to canvas, every painting is thoughtfully designed to
            capture the essence of nature and artistic expression. Whether
            you're looking for a floral masterpiece, a scenic landscape, or an
            abstract statement piece, each artwork is created with passion and
            precision.
          </p>
          <div>
            <Image
              src="/images/brush2.svg"
              alt="Brush stroke"
              width={348}
              height={40}
              className="w-[348px] ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtStudioSection;
