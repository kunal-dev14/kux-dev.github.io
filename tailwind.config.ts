import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08090D",
        surface: {
          DEFAULT: "#0E1118",
          subtle: "#131722",
          elevated: "#1A1F2E",
          border: "#23293D",
          "border-hover": "#3B4360",
        },
        lavender: {
          50: "#FAF7FE",
          100: "#F3EEFD",
          200: "#E6DCFA",
          300: "#D3C2F7",
          400: "#B89EF1",
          500: "#9C76EB",
          600: "#8353DF",
          700: "#6B37C7",
          800: "#502896",
          900: "#361B66",
          glow: "rgba(156, 118, 235, 0.25)",
        },
        muted: {
          DEFAULT: "#8B95A8",
          dark: "#525A6A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-clash)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "glow-lavender": "0 0 40px -10px rgba(156, 118, 235, 0.35)",
        "glow-lavender-lg": "0 0 80px -20px rgba(156, 118, 235, 0.45)",
        "surface-card": "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

