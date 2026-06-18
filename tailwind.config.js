/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#08090b",
          900: "#0a0b0d",
          800: "#111317",
          700: "#181b21",
          600: "#22262e",
        },
        bone: "#f4f1ea",
        muted: "#8b9099",
        lime: {
          DEFAULT: "#cdfd50",
          400: "#d6ff66",
        },
        electric: "#7c5cff",
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
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-rev": "marquee-rev 40s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        pulseglow: "pulseglow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
