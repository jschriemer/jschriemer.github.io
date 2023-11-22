import React, { useEffect } from "react";
import barba from "@barba/core";
import slideDown from "./utils/transitions/slideDown";
import once from "./utils/transitions/once";
import svg from "./utils/transitions/svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./assets/styles/global.css";

const App: React.FC = () => {
  useEffect(() => {
    console.info("🚀App:init");
    const duration = 1200;

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
          to: { route: "home" },
          leave: ({ current }) =>
            slideDown(current.container, duration * 0.5, -100, 0),
          enter: ({ next }) => slideDown(next.container, duration * 0.5, -100, 0),
        },
        {
          to: { namespace: "home" },
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

  return (
    <ThemeProvider theme={theme}>
      <div className="barba-container" style={{ border: 0 }}>
        <Router>
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
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
