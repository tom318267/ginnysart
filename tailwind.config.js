/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
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
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
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
        "fade-up-1": "fadeUp 0.6s ease-out 0.2s forwards",
        "fade-up-2": "fadeUp 0.6s ease-out 0.4s forwards",
        "fade-up-3": "fadeUp 0.6s ease-out 0.6s forwards",
        "fade-up-4": "fadeUp 0.6s ease-out 0.8s forwards",
      },
      transitionProperty: {
        transform: "transform",
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
