import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Emily R.",
    role: "Customer",
    image: "/images/emily.jpg", // Replace with actual image path
    review:
      "Absolutely breathtaking! Virginia's artwork has completely transformed my space. The colors, the details, and the emotion in every brushstroke make it truly one of a kind.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia M.",
    role: "Customer",
    image: "/images/sophia.jpg", // Replace with actual image path
    review:
      "Seeing Virginia's art in person is even more stunning than in photos. The texture, the brushstrokes, the warmth—it's something truly special. I'm in love with my new painting!",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael P.",
    role: "Gallery Owner",
    image: "/images/michael.jpg",
    review:
      "Virginia's work consistently captivates our gallery visitors. Her unique perspective and masterful technique create pieces that not only beautify spaces but also tell compelling stories.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fadeIn");
              const content = entry.target.querySelector(".content-wrapper");
              const cards = entry.target.querySelectorAll(".testimonial-card");

              if (content) content.classList.add("animate-slideUp");

              // Animate each card with a staggered delay
              cards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add("animate-slideUp", "opacity-100");
                }, 200 * (index + 1)); // 200ms delay between each card
              });
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F8F6FF] py-[120px] px-4 md:px-8 opacity-0"
    >
      <div className="content-wrapper opacity-0 px-4 lg:px-8 text-left max-w-4xl ml-4 md:ml-8">
        <h5 className="text-light-purple uppercase font-normal text-[16px] md:text-[20px] mb-4">
          Client Testimonials
        </h5>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight md:leading-[60px] text-gray-900 mb-8">
          What Customers Are Saying
        </h2>
        <p className="text-base lg:text-lg font-light text-black mb-14">
          Art has the power to inspire, transform, and connect. These heartfelt
          words from collectors and clients reflect the joy and emotion
          Virginia's paintings bring to their spaces.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="carousel-wrapper px-4 lg:px-0 container mx-auto">
        <div className="relative">
          <div className="absolute right-4 top-[-60px] flex gap-2 z-10">
            <button className="prev-btn bg-[#D6B4FC] hover:bg-[#C49AFF] text-black p-2 rounded-full w-12 h-12 flex items-center justify-center transition-colors">
              ❮
            </button>
            <button className="next-btn bg-[#D6B4FC] hover:bg-[#C49AFF] text-black p-2 rounded-full w-12 h-12 flex items-center justify-center transition-colors">
              ❯
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            className="static"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id} className="py-4 px-2">
                <div className="testimonial-card opacity-0 transition-all duration-500 ease-out transform translate-y-8 bg-white rounded-lg p-6 h-full shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
                  {/* Profile */}
                  <div className="flex items-center gap-3 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-600">{testimonial.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
