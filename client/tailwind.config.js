/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0a0e27",
          card: "#1a1f3a",
          text: "#e0e0ff",
        },
        accent: {
          purple: "#667eea",
          pink: "#f093fb",
          lavender: "#c084fc",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glow-purple": "0 0 20px rgba(102, 126, 234, 0.4)",
        "glow-pink": "0 0 20px rgba(240, 147, 251, 0.4)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(102, 126, 234, 0.5)" },
          "50%": { textShadow: "0 0 20px rgba(102, 126, 234, 0.8)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(102, 126, 234, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(102, 126, 234, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
