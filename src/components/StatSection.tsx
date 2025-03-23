import React, { useEffect, useRef } from "react";
import Image from "next/image";

const StatsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const stats = document.querySelectorAll(".stat-item");
    stats.forEach((stat) => observer.observe(stat));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-gradient-to-r from-[#5513AC] to-[#3A0E7A] py-[120px]"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {/* Stat 1 */}
          <div className="stat-item opacity-0 flex flex-col items-center [animation-delay:0ms]">
            <h3 className="text-5xl italic font-semibold mb-4">50+</h3>
            <p className="text-xl font-medium mb-4">
              Original Paintings Created
            </p>
            <div className="mt-2">
              <Image
                src="/images/statstroke.svg"
                alt="Brushstroke"
                width={159}
                height={22}
              />
            </div>
          </div>

          {/* Stat 2 */}
          <div className="stat-item opacity-0 flex flex-col items-center [animation-delay:200ms]">
            <h3 className="text-5xl italic font-semibold mb-4">10+</h3>
            <p className="text-xl font-medium mb-4">
              Years of Artistic Experience
            </p>
            <div className="mt-2">
              <Image
                src="/images/statstroke.svg"
                alt="Brushstroke"
                width={159}
                height={22}
              />
            </div>
          </div>

          {/* Stat 3 */}
          <div className="stat-item opacity-0 flex flex-col items-center [animation-delay:400ms]">
            <h3 className="text-5xl italic font-semibold mb-4">95%</h3>
            <p className="text-xl font-medium mb-4">
              Happy Collectors & Clients
            </p>
            <div className="mt-2">
              <Image
                src="/images/statstroke.svg"
                alt="Brushstroke"
                width={159}
                height={22}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
