/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#08070d",
          900: "#0b0a12",
          800: "#121120",
          700: "#1a1830",
          600: "#252243",
        },
        bone: "#f1eefb",
        muted: "#8b86a3",
        // accent kept under the "lime" key so utilities flip globally; value is purple
        lime: {
          DEFAULT: "#8b5cff",
          400: "#a07dff",
        },
        mint: "#c4b5fd",
        // purple-family accents (kept names so existing usages stay on-theme)
        cyan: "#a07dff",
        pink: "#a78bfa",
        blue: "#7c5cff",
        amber: "#c4b5fd",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseglow: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        aurora1: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(8%,-6%) scale(1.15)" },
          "66%": { transform: "translate(-6%,8%) scale(0.92)" },
        },
        aurora2: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(-10%,6%) scale(1.1)" },
          "66%": { transform: "translate(7%,-8%) scale(1.08)" },
        },
        "marquee-fast": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinslow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-rev": "marquee-rev 40s linear infinite",
        "marquee-fast": "marquee-fast 18s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        pulseglow: "pulseglow 4s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        aurora1: "aurora1 18s ease-in-out infinite",
        aurora2: "aurora2 22s ease-in-out infinite",
        spinslow: "spinslow 30s linear infinite",
      },
    },
  },
  plugins: [],
};
