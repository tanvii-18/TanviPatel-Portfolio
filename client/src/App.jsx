import React, { useState } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div
      className={
        isDarkMode ? "bg-dark-bg text-dark-text" : "bg-white text-gray-900"
      }
    >
      <ParticlesBackground />

      <div className="relative z-10">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

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
