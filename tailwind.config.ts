import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#f8fafc",

        border: "rgba(255,255,255,0.1)",
        input: "rgba(255,255,255,0.1)",

        accent: {
          DEFAULT: "#14b8a6",
          foreground: "#042f2e",
        },

        muted: {
          DEFAULT: "rgba(255,255,255,0.05)",
          foreground: "rgba(255,255,255,0.6)",
        },
      },

      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
      },

      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;