module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#eca22d",
          foreground: "#0c2d46",
          light: "#ffdd57",
          dark: "#d78d62",
        },
        secondary: {
          background: "#ffffff",
          foreground: "#000000",
          light: "#f6f6f6",
          dark: "#0c2d46",
        },
        accent: {
          DEFAULT: "#eca22d",
          foreground: "#ffffff",
          light: "#ffdd57",
          dark: "#d78d62",
        },
        border: {
          primary: "#e6e6e6",
          secondary: "#cccccc",
          light: "#f0f0f0",
          dark: "#666666",
        },
        gray: {
          50: "#fafbfb",
          100: "#f5fafc",
          200: "#e7ebed",
          300: "#879da5",
          400: "#6d6d6d",
          500: "#333333",
          600: "#222222",
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};