import React, { useState, useEffect } from "react";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
  ParticlesBackground,
} from "./components";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Update theme on mount and whenever theme changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (isDarkMode) {
      htmlElement.classList.remove("light-theme");
      bodyElement.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.add("light-theme");
      bodyElement.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="bg-primary text-text-primary min-h-screen">
      <ParticlesBackground isDarkMode={isDarkMode} />

      <div className="relative z-10">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={toggleTheme} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
