/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-purple": "#5513AC",
        "light-purple": "#A663CC",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        frameRotate: {
          "0%": {
            opacity: "0",
            transform: "rotate(-10deg) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "rotate(0deg) scale(1)",
          },
        },
        paintingFloat: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) translateX(0)",
          },
        },
        buttonSlide: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        scrollFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
            "will-change": "transform, opacity",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            "will-change": "transform, opacity",
          },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        contentFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        reveal: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "about-hero-bg": {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.5" },
        },
        "about-hero-content": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        brushStroke: {
          "0%": { "stroke-dashoffset": "1000" },
          "100%": { "stroke-dashoffset": "0" },
        },
        shopFadeIn: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shopSlideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shopPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        paint: {
          "0%": {
            transform: "rotate(-30deg) translateX(-30%) translateY(10%)",
            opacity: "0.6",
          },
          "50%": {
            transform: "rotate(20deg) translateX(30%) translateY(-10%)",
            opacity: "1",
          },
          "100%": {
            transform: "rotate(-30deg) translateX(-30%) translateY(10%)",
            opacity: "0.6",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        slideUp: "slideUp 1s ease-out forwards",
        scaleIn: "scaleIn 0.8s ease-out forwards",
        frameRotate: "frameRotate 1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        paintingFloat:
          "paintingFloat 1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        buttonSlide: "buttonSlide 0.3s ease-out forwards",
        scrollFadeIn: "scrollFadeIn 0.8s ease-out forwards",
        slideFromLeft: "slideFromLeft 0.8s ease-out forwards",
        slideFromRight: "slideFromRight 0.8s ease-out forwards",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        "fadeInUp-delay-2": "fadeInUp 0.8s ease-out 0.4s forwards",
        "fadeInUp-delay-3": "fadeInUp 0.8s ease-out 0.8s forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-up-1": "fadeUp 1s ease-out forwards",
        "fade-up-2": "fadeUp 1s ease-out 0.2s forwards",
        "fade-up-3": "fadeUp 1s ease-out 0.4s forwards",
        "fade-up-4": "fadeUp 1s ease-out 0.6s forwards",
        "fade-up-5": "fadeUp 1s ease-out 0.8s forwards",
        "slide-in": "slideIn 1.2s ease-out forwards",
        "slide-in-right": "slideInRight 1s ease-out forwards",
        "slide-in-left": "slideInLeft 1s ease-out 0.8s forwards",
        in: "fadeUp 0.6s ease-out forwards",
        reveal: "reveal 0.8s cubic-bezier(0.4, 0, 0, 1) forwards",
        "about-hero-bg": "about-hero-bg 1s ease-out forwards",
        "about-hero-content": "about-hero-content 1s ease-out 0.3s forwards",
        brushStroke: "brushStroke 1.2s ease-out forwards",
        shopFadeIn: "shopFadeIn 1s ease-out",
        shopSlideUp: "shopSlideUp 0.5s ease-out",
        shopPulse: "shopPulse 0.5s ease-in-out",
        paint: "paint 3s ease-in-out infinite",
      },
      transitionProperty: {
        transform: "transform",
      },
      animationDelay: {
        300: "300ms",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /animation-delay-.+/,
    },
  ],
};
