/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "IBM Plex Sans Arabic", "system-ui", "sans-serif"],
        display: ["Inter", "IBM Plex Sans Arabic", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f9fafb",
          subtle: "#f3f4f6",
        },
        ink: {
          DEFAULT: "#1f2937",
          muted: "#4b5563",
          faint: "#6b7280",
        },
        accent: {
          DEFAULT: "#22c55e",
          hover: "#16a34a",
          soft: "#dcfce7",
        },
      },
      boxShadow: {
        nav: "0 10px 40px -10px rgba(15, 23, 42, 0.08), 0 4px 16px -4px rgba(15, 23, 42, 0.06)",
        card: "0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px -8px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};
