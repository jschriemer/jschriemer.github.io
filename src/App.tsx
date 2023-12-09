import React, { useEffect, useState, useRef } from "react";
import barba from "@barba/core";
import slideDown from "./utils/transitions/slideDown";
import once from "./utils/transitions/once";
import svg from "./utils/transitions/svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./assets/styles/global.css";
import LoadingScreen from "./components/LoadingAnimation";
import anime from "animejs";

const App: React.FC = () => {
  const loadingScreenRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    console.info("🚀App:init");
    const duration = 2000;

    barba.hooks.before(() => {
      if (barba.wrapper) {
        barba.wrapper.classList.add("is-animating");
      }
    });

    barba.hooks.after(() => {
      if (barba.wrapper) {
        barba.wrapper.classList.remove("is-animating");
      }
    });

    barba.init({
      debug: true,
      transitions: [
        {
          sync: true,
          from: { route: "home" },
          leave: ({ current }) =>
            Promise.all([
              slideDown(current.container, duration, -100, 0),
              svg(current.container, duration),
            ]),
          beforeEnter({ next }) {
            next.container.style.zIndex = "-1";
          },
        },
        {
          sync: true,
          from: { route: "about" },
          leave: ({ current }) =>
            Promise.all([
              slideDown(current.container, duration, -100, 0),
              svg(current.container, duration),
            ]),
          beforeEnter({ next }) {
            next.container.style.zIndex = "-1";
          },
        },
        {
          sync: true,
          to: { route: "about" },
          leave: ({ current }) =>
            slideDown(current.container, duration * 1.5, -100, 0),
          enter: ({ next }) =>
            slideDown(next.container, duration * 0.5, -100, 0),
        },
        {
          sync: true,
          to: { route: "home" },
          leave: ({ current }) =>
            slideDown(current.container, duration * 0.5, -100, 0),
          enter: ({ next }) =>
            slideDown(next.container, duration * 0.5, -100, 0),
        },
        {
          to: { namespace: "home" },
          once: ({ next }) => once(next.container),
        },
        {
          to: { namespace: "about" },
          once: ({ next }) => once(next.container),
        },
      ],
    });
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: "montreal nueu",
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      window.location.pathname === "/" &&
      !localStorage.getItem("loadingShown")
    ) {
      setLoading(true);
      localStorage.setItem("loadingShown", "true");
      const interval = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress >= 100) {
            clearInterval(interval);
            setLoading(false);
          }
          return newProgress;
        });
      }, 10);
    }
  }, []);


  useEffect(() => {
    if (!loading && loadingProgress === 100 && loadingScreenRef.current) {
      anime({
        targets: loadingScreenRef.current,
        translateY: "-100%", // Slide up
        duration: 1000, // Duration of the slide-up animation
        easing: "easeInQuart",
        complete: () => {
          // Remove the loading screen after the animation
          if (loadingScreenRef.current)
            loadingScreenRef.current.style.display = "none";
        },
      });
    }
  }, [loading, loadingProgress]);

  return (
    <ThemeProvider theme={theme}>
      <div className="barba-container">
        <Router>
          <div data-barba="wrapper">
            {/* White blob element */}
            {loading && (
              <div
                ref={loadingScreenRef}
                data-barba="container"
                data-barba-namespace="loading"
              >
                <LoadingScreen setLoadingProgress={setLoadingProgress} />
              </div>
            )}
            {!loading && (
              <Routes>
                <Route
                  path="/"
                  element={
                    <div data-barba="container" data-barba-namespace="home">
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
                  path="/portfolio"
                  element={
                    <div data-barba="container" data-barba-namespace="work">
                      <Portfolio />
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
            )}
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
