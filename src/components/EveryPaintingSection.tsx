import React, { useEffect } from "react";
import Image from "next/image";

const EveryPaintingSection = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    // Observe all elements with the 'animate-on-scroll' class
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white px-4 lg:px-8 py-[120px] relative">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 relative">
        {/* Left Side - Image (with overlapping effect) */}
        <div className="lg:w-1/2 px-4 lg:px-0 relative">
          <div className="relative lg:absolute lg:-top-[560px] lg:left-0">
            <Image
              src="/images/paintgirl.jpg"
              alt="Artist Painting"
              width={500}
              height={500}
              className="rounded-lg shadow-lg opacity-0 translate-y-10 animate-on-scroll"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left md:max-w-2xl max-w-lg mx-auto lg:mx-0 relative">
          {/* Decorative Line to the Right of Heading */}
          <div className="hidden px-4 lg:block absolute top-[-40px] right-[-40px] opacity-0 translate-y-10 animate-on-scroll">
            <Image
              src="/images/lines2.svg"
              alt="Decorative element"
              width={66}
              height={72}
              className="object-contain"
            />
          </div>

          <h5 className="text-light-purple uppercase font-normal text-[16px] lg:text-[20px] tracking-wide mb-4 opacity-0 translate-y-10 animate-on-scroll">
            My Passion
          </h5>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight md:leading-[60px] text-gray-900 mb-8 relative opacity-0 translate-y-10 animate-on-scroll">
            Every Painting Tells a Story
          </h2>

          <p className="text-base md:text-lg font-light text-black leading-relaxed mb-6 opacity-0 translate-y-10 animate-on-scroll">
            Painting is more than just colors on a canvas—it is a reflection of
            emotion, experience, and imagination. Through every artwork, I aim
            to create something meaningful, something that resonates with the
            viewer on a personal level.
          </p>

          <p className="text-base md:text-lg font-light text-black leading-relaxed mb-6 opacity-0 translate-y-10 animate-on-scroll">
            Whether it's the soft petals of a blooming flower, the vast openness
            of a scenic landscape, or the expressive strokes of an abstract
            composition, my work is deeply inspired by the beauty that surrounds
            us. I believe that art has the power to evoke feelings, tell
            stories, and transform spaces. My goal is to create paintings that
            are not only visually striking but also emotionally engaging.
          </p>

          <p className="text-base md:text-lg font-light text-black leading-relaxed relative opacity-0 translate-y-10 animate-on-scroll">
            I create with the hope that my paintings will bring joy,
            inspiration, and a sense of connection to those who view them. Art
            has the ability to speak to the soul, and I strive to make each
            piece a reflection of both the world around us and the emotions
            within us. As an artist, I am constantly evolving, seeking new ways
            to express the essence of life through color, movement, and
            imagination.
          </p>

          {/* Decorative Line to the Left of Last Paragraph */}
          <div className="absolute left-[-120px] bottom-[-40px] hidden lg:block opacity-0 translate-y-10 animate-on-scroll">
            <Image
              src="/images/lines3.svg"
              alt="Decorative element"
              width={71}
              height={123}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveryPaintingSection;
