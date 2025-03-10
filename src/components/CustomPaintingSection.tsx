import React, { useEffect, useRef } from "react";
import Link from "next/link";

const CustomPaintingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px", // Triggers animation 100px before element enters viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-[120px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/tanback.jpg")' }}
    >
      {/* Add light overlay - only visible on mobile */}
      <div className="absolute inset-0 bg-white/70 md:hidden"></div>

      {/* Center content on mobile, grid on desktop */}
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative text-center md:text-left">
        <div className="max-w-lg mx-auto md:mx-0 opacity-0 [.animate-in_&]:animate-fade-up">
          <h5 className="text-light-purple uppercase text-[16px] md:text-[20px] tracking-wide mb-4 opacity-0 [.animate-in_&]:animate-fade-up-1">
            Custom Paintings
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight md:leading-[60px] opacity-0 [.animate-in_&]:animate-fade-up-2">
            Personalized Art, Created Just for You
          </h2>
          <p className="text-lg text-gray-700 mb-8 opacity-0 [.animate-in_&]:animate-fade-up-3">
            Work with Virginia to create a custom painting made just for you.
            Whether it's a floral piece, a scenic landscape, or something
            completely unique, every artwork is handcrafted with care and
            creativity.
          </p>
          <div className="opacity-0 [.animate-in_&]:animate-fade-up-4">
            <Link
              href="/contact"
              className="inline-block uppercase relative bg-custom-purple text-white px-[30px] lg:px-[40px] py-[15px] lg:py-[20px] rounded-md text-[14px] lg:text-[16px] shadow-md
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-custom-purple before:to-light-purple before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md
                hover:before:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
            >
              <span className="relative z-10">Request Custom Painting</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPaintingSection;
