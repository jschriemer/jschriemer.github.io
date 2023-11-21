import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./assets/styles/global.css";
import Work from "./pages/Work";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import barba from "@barba/core";

const theme = createTheme({
  typography: {
    fontFamily: "montreal nueu",
  },
});

function BarbaWrapper() {
  const location = useLocation();

  useEffect(() => {
    barba.init({
      prevent: ({ el }) => !el.dataset.barba,
      transitions: [
        {
          name: "home-to-about",
          from: { namespace: "home" },
          to: { namespace: "about" },
          leave({ current }) {
            return new Promise((resolve) => {
              // Animation when leaving Home
              gsap.to(current.container, {
                opacity: 0,
                x: -100,
                duration: 1.75,
                ease: "power1.in",
                onComplete: resolve,
              });
            });
          },
          enter({ next }) {
            // Animation when entering About
            gsap.from(next.container, {
              opacity: 0,
              x: 100,
              duration: 0.75,
              ease: "power1.out",
              clearProps: "opacity, x",
            });
          },
        },
        {
          name: "about-to-home",
          from: { namespace: "about" },
          to: { namespace: "home" },
          leave({ current }) {
            return new Promise((resolve) => {
              // Animation when leaving About
              gsap.to(current.container, {
                opacity: 0,
                x: 100,
                duration: 0.75,
                ease: "power1.in",
                onComplete: resolve,
              });
            });
          },
          enter({ next }) {
            // Animation when entering Home
            gsap.from(next.container, {
              opacity: 0,
              x: -100,
              duration: 0.75,
              ease: "power1.out",
              clearProps: "opacity, x",
            });
          },
        },
        // ... other transitions
      ],
    });
  }, []);

  useEffect(() => {
    // This effect runs when the location changes
    // Add any additional logic you need to handle route changes
  }, [location]);

  return null; // This component doesn't render anything itself
}

export default function App() {
  useEffect(() => {
    barba.init({
      // Barba.js configuration and transitions
    });
  }, []);

  // Your normal routing and rendering logic
  return (
    <ThemeProvider theme={theme}>
      <div className="barba-container" style={{ border: 0 }}>
        <Router>
          {/* The Barba wrapper element */}
          <div data-barba="wrapper" style={{ border: 0 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <div
                    data-barba="container"
                    data-barba-namespace="home"
                    style={{ border: 0 }}
                  >
                    <Home />
                  </div>
                }
              />
              <Route
                path="/about"
                element={
                  <div data-barba="container" data-barba-namespace="about">
                    <About />
                  </div>
                }
              />
              <Route
                path="/work"
                element={
                  <div data-barba="container" data-barba-namespace="work">
                    <Work />
                  </div>
                }
              />
              <Route
                path="/contact"
                element={
                  <div data-barba="container" data-barba-namespace="contact">
                    <Contact />
                  </div>
                }
              />
            </Routes>
          </div>
          <BarbaWrapper />
        </Router>
      </div>
    </ThemeProvider>
  );
}
