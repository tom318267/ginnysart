import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center py-12 lg:py-0 lg:mt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 w-full animate-fadeIn"
        style={{
          backgroundImage: 'url("/images/backhero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.4",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-[40px] md:pt-[60px] lg:pt-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
          {/* Left side content */}
          <div className="max-w-[680px] text-center lg:text-left relative z-20">
            <h5 className="text-light-purple uppercase font-normal text-[16px] lg:text-[20px] tracking-wide mb-4 animate-fadeIn [animation-delay:200ms] opacity-0">
              Virginia's Art Studio
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight md:leading-[60px] lg:leading-[80px] animate-slideUp [animation-delay:400ms] opacity-0">
              Bringing Beauty to Life One Brushstroke at a Time
            </h1>
            <p className="text-base lg:text-lg font-light text-black mb-8 max-w-[559px] mx-auto lg:mx-0 animate-slideUp [animation-delay:600ms] opacity-0">
              Capturing the essence of beauty, one brushstroke at a time.
              Explore handcrafted paintings inspired by nature, emotion, and
              imagination.
            </p>
            <Link
              href="/shop"
              className="inline-block uppercase relative bg-custom-purple text-white px-[30px] lg:px-[40px] py-[15px] lg:py-[20px] rounded-md text-[14px] lg:text-[16px] font-normal animate-slideUp [animation-delay:800ms] opacity-0
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-custom-purple before:to-light-purple before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md
              hover:before:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
            >
              <span className="relative z-10">Shop Our Collection</span>
            </Link>
          </div>

          {/* Right Side - Frame & Painting */}
          <div className="relative w-[80%] lg:w-[426px] h-auto aspect-[0.87] mt-8 lg:mt-0 flex flex-col items-center">
            {/* Picture Frame (background) */}
            <div className="animate-frameRotate [animation-delay:800ms] opacity-0">
              <Image
                src="/images/picframe.png"
                alt="Picture Frame"
                width={426}
                height={485}
                className="w-full h-auto"
                fetchPriority="high"
              />
            </div>

            {/* Painting (on top of the frame, moved slightly right) */}
            <div className="absolute top-14 left-16 md:left-24 animate-paintingFloat [animation-delay:1200ms] opacity-0">
              <Image
                src="/images/heropic.png"
                alt="Featured Painting"
                width={347}
                height={489}
                className="rounded-lg object-cover w-[240px] sm:w-[280px] md:w-[347px]"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
