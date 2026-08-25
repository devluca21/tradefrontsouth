import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F6F7F9",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#1C2128",
          soft: "#3D4654",
        },
        muted: "#5C6570",
        accent: {
          DEFAULT: "#3A4F63",
          hover: "#2E4052",
          soft: "#E8EEF3",
        },
        line: "rgba(28, 33, 40, 0.1)",
        // keep aliases so older classnames don't break during transition
        navy: {
          DEFAULT: "#1C2128",
          dark: "#14181E",
          light: "#3D4654",
        },
        orange: {
          DEFAULT: "#3A4F63",
          hover: "#2E4052",
          light: "#5A7084",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.02em",
        tighter: "-0.03em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
