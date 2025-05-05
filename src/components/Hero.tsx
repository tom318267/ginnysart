import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen px-4 lg:px-8 flex items-center py-[60px] lg:py-[120px]">
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

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col px-4 lg:px-8 lg:flex-row justify-between items-center gap-8 lg:gap-4">
          {/* Left side content */}
          <div className="max-w-[680px] text-center lg:text-left relative z-20">
            <h5 className="text-light-purple uppercase font-normal text-[16px] lg:text-[20px] tracking-wide mb-4 animate-fadeIn [animation-delay:200ms] opacity-0">
              Virginia's Art Studio
            </h5>
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight md:leading-[60px] lg:leading-[80px] animate-slideUp [animation-delay:400ms] opacity-0">
              Bringing Beauty to Life One Brushstroke at a Time
            </h1>
            <p className="text-base lg:text-lg font-light text-black mb-8 max-w-[559px] mx-auto lg:mx-0 animate-slideUp [animation-delay:600ms] opacity-0">
              Explore handcrafted paintings inspired by nature, emotion, and
              imagination.
            </p>
            <div className="animate-slideUp [animation-delay:800ms] opacity-0">
              <Link
                href="/shop"
                className="inline-block uppercase relative bg-custom-purple text-white px-[30px] lg:px-[40px] py-[15px] lg:py-[20px] rounded-md text-[14px] lg:text-[16px] shadow-md
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-custom-purple before:to-light-purple before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md
                  hover:before:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
              >
                <span className="relative z-10">Shop Our Collection</span>
              </Link>
            </div>
          </div>

          {/* Right Side - Frame & Painting */}
          <div className="relative w-full max-w-[300px] min-w-[200px] lg:max-w-[400px] lg:min-w-[300px] h-auto aspect-[0.87] mt-8 lg:mt-0 flex flex-col items-center">
            {/* Picture Frame (background) */}
            <div className="w-full h-full animate-frameRotate [animation-delay:800ms] opacity-0">
              <Image
                src="/images/picframe.webp"
                alt="Picture Frame"
                width={426}
                height={485}
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>

            {/* Painting (on top of the frame, moved slightly right) */}
            <div className="absolute top-[10%] left-[12%] w-[80%] lg:w-[85%] aspect-[0.71] animate-paintingFloat [animation-delay:1200ms] opacity-0">
              <Image
                src="/images/gpainting4.webp"
                alt="Featured Painting"
                width={347}
                height={489}
                className="rounded-lg w-full h-full object-contain"
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
