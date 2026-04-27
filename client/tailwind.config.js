/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "var(--bg-primary)",
          card: "var(--bg-card)",
          text: "var(--text-primary)",
        },
        accent: {
          purple: "var(--accent-purple)",
          pink: "var(--accent-pink)",
          lavender: "var(--accent-lavender)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
        border: {
          DEFAULT: "var(--border-color)",
          light: "var(--border-light)",
        },
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        card: "var(--bg-card)",
        input: "var(--bg-input)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glow-purple": "var(--shadow-glow)",
        "glow-pink": "0 0 20px rgba(240, 147, 251, 0.4)",
        "shadow-sm": "var(--shadow-sm)",
        "shadow-md": "var(--shadow-md)",
        "shadow-lg": "var(--shadow-lg)",
        "shadow-xl": "var(--shadow-xl)",
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
