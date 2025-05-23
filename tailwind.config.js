/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          softBlue: "#9b87f5",
          softGreen: "#87f5a1",
          softGray: "#f5f5f5",
        },
        border: {
          DEFAULT: "#e5e7eb",
        },
        background: {
          DEFAULT: "#ffffff",
        },
        foreground: {
          DEFAULT: "#000000",
        },
        primary: {
          DEFAULT: "#000000",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f3f4f6",
          foreground: "#1f2937",
        },
        muted: {
          DEFAULT: "#f3f4f6",
          foreground: "#6b7280",
        },
        accent: {
          DEFAULT: "#f3f4f6",
          foreground: "#1f2937",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        ring: {
          DEFAULT: "#e5e7eb",
        },
      },
      backgroundColor: {
        dark: {
          primary: "#1a1a1a",
          secondary: "#2d2d2d",
          card: "#333333",
        },
      },
      textColor: {
        dark: {
          primary: "#ffffff",
          secondary: "#a0a0a0",
        },
      },
      borderColor: {
        dark: {
          primary: "#404040",
        },
      },
    },
  },
  plugins: [],
};
