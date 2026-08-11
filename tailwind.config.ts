import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        base: {
          DEFAULT: "#0B0D10", // primary background
          alt: "#101317", // alternate section
        },
        surface: {
          card: "#171B20",
          hover: "#1D2229",
        },
        border: {
          DEFAULT: "#2A2F36",
        },
        ink: {
          DEFAULT: "#F5F5F2", // primary text
          secondary: "#B4B8BF",
          muted: "#80858F",
          inverse: "#0B0D10", // dark text used on light (ink-colored) surfaces, e.g. primary buttons
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.25rem, 1.75rem + 2.2vw, 3.75rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(1.85rem, 1.5rem + 1.5vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.35rem, 1.15rem + 0.9vw, 1.85rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.15rem, 1.05rem + 0.4vw, 1.35rem)", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
      },
      spacing: {
        "section-y": "clamp(2rem, 1.6rem + 1.6vw, 3.5rem)",
        "18": "4.5rem",
        "22": "5.5rem",
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        xs: "6px",
        sm: "10px",
        md: "14px",
        lg: "20px",
        xl: "28px",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(245,245,242,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,245,242,0.035) 1px, transparent 1px)",
        "noise": "url('/images/noise.svg')",
        "radial-spot":
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,245,242,0.06), rgba(245,245,242,0) 70%)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
