import React, { useEffect } from "react";
import Image from "next/image";

const PaintingCategories = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check which animation class to add
            if (entry.target.classList.contains("animate-on-scroll-1")) {
              entry.target.classList.add("animate-fadeInUp");
            } else if (entry.target.classList.contains("animate-on-scroll-2")) {
              entry.target.classList.add("animate-fadeInUp-delay-2");
            } else if (entry.target.classList.contains("animate-on-scroll-3")) {
              entry.target.classList.add("animate-fadeInUp-delay-3");
            } else {
              entry.target.classList.add("animate-fadeInUp");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-1, .animate-on-scroll-2, .animate-on-scroll-3"
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-[120px] px-6 md:px-20 text-center">
      {/* Title */}
      <h5 className="text-light-purple uppercase font-normal text-[16px] md:text-[20px] tracking-wide mb-4 animate-on-scroll opacity-0">
        Painting Categories
      </h5>
      <h2 className="text-3xl md:text-5xl leading-tight md:leading-[80px] font-bold mt-2 mb-16 animate-on-scroll opacity-0">
        Browse by Category
      </h2>
      <div className="grid md:grid-cols-3 gap-12 container mx-auto">
        {/* Categories */}
        {[
          {
            title: "Abstract",
            image: "/images/abstract.svg",
            width: 156,
            height: 149,
            description:
              "Modern and expressive, these abstract paintings bring energy and depth to any space.",
            button: "DISCOVER ABSTRACTS",
            animationClass: "animate-on-scroll-1",
          },
          {
            title: "Landscape",
            image: "/images/landscape.svg",
            width: 244,
            height: 166,
            description:
              "Hand-painted scenery that captures the beauty of the great outdoors in every brushstroke.",
            button: "EXPLORE LANDSCAPES",
            animationClass: "animate-on-scroll-2",
          },
          {
            title: "Floral",
            image: "/images/floral.svg",
            width: 120,
            height: 189,
            description:
              "Bring the elegance of nature into your space with delicate, hand-painted florals full of color and life.",
            button: "SHOP FLORAL ART",
            animationClass: "animate-on-scroll-3",
          },
        ].map((category) => (
          <div
            key={category.title}
            className={`flex flex-col items-center space-y-8 ${category.animationClass} opacity-0`}
          >
            <div className="flex flex-col items-center space-y-4 w-full">
              <div className="h-[180px] flex items-center justify-center w-full">
                <Image
                  src={category.image}
                  alt={`${category.title} Art`}
                  width={category.width}
                  height={category.height}
                  className="object-contain"
                />
              </div>
              <h4 className="text-2xl font-semibold">{category.title}</h4>
              <p className="text-base md:text-lg font-light text-gray-600">
                {category.description}
              </p>
            </div>
            <button
              className="inline-block uppercase relative bg-custom-purple text-white px-[30px] lg:px-[40px] py-[15px] lg:py-[20px] rounded shadow-md text-[14px] lg:text-[16px] w-full max-w-[300px]
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-custom-purple before:to-light-purple before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md
              hover:before:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
            >
              <span className="relative z-10">{category.button}</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaintingCategories;
