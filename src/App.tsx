import React, { useEffect } from "react";
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

// add a state for if about clicked. If clicked, start animating white blob growing from 'about' until it covers the whole screen at which point /about page is rendered

const App: React.FC = () => {
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
      <div className="barba-container">
        <Router>
          <div data-barba="wrapper"> 
            {/* White blob element */}
            <Routes>
              <Route
                path="/"
                element={
                  <div
                    data-barba="container"
                    data-barba-namespace="home"
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
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
