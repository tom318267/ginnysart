import React from "react";
import Link from "next/link";

const ShopHero = () => {
  return (
    <section
      className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center px-4 lg:py-[120px]"
      style={{
        backgroundImage: 'url("/images/shophero.jpg")', // Replace with actual background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-light-purple uppercase font-normal text-[16px] lg:text-[20px] tracking-wide mb-4">
          Original Artwork
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight md:leading-[60px] lg:leading-[80px]">
          Discover Handcrafted <br /> Art for Your Space
        </h1>
        <p className="text-base lg:text-lg font-light text-black mb-8 max-w-[700px] mx-auto">
          Explore a collection of original paintings inspired by nature,
          emotion, and creativity. Find the perfect piece to bring warmth and
          beauty into your home.
        </p>
      </div>
    </section>
  );
};

export default ShopHero;
