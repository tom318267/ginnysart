import React from "react";

const AboutHero = () => {
  return (
    <section className="relative w-full flex flex-col items-center text-center px-4 lg:px-8 py-[60px] lg:py-[120px]">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 w-full h-full animate-fadeIn"
        style={{
          backgroundImage: 'url("/images/aboutus.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.5",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl px-4 lg:px-8 mx-auto animate-slideUp">
        <h5 className="text-light-purple uppercase font-normal text-[16px] lg:text-[20px] tracking-wide mb-4">
          Virginia Hampton
        </h5>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight md:leading-[60px] lg:leading-[80px]">
          Meet the Artist Behind the Brush
        </h1>
        <p className="text-base md:text-lg font-light text-black mt-4 max-w-[680px] mx-auto">
          Painting is more than just colors on a canvas—it's a reflection of
          emotion, experience, and imagination. Through every artwork, I aim to
          create something meaningful, something that resonates.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
