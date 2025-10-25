import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./hooks";

// Import components directly (not lazy loaded to avoid issues)
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import {
  Education,
  Projects,
  Certifications,
  Contact,
} from "./components/AllSections";
import Footer from "./components/Footer";

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-bg-dark">
    <div className="spinner"></div>
  </div>
);

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="App">
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: theme === "dark" ? "#1a1a1a" : "#ffffff",
            color: theme === "dark" ? "#ffffff" : "#1a1a1a",
            border: `1px solid ${theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
          },
          success: {
            iconTheme: {
              primary: "#667eea",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
          },
        }}
      />

      {/* Navigation - Sticky at top */}
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - Full viewport height */}
        <section id="hero" className="relative">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="relative">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative">
          <Skills />
        </section>

        {/* Education Section */}
        <section id="education" className="relative">
          <Education />
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative">
          <Projects />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="relative">
          <Certifications />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
