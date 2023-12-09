import React, { useState, useEffect, useLayoutEffect } from "react";
import { Grid, Typography } from "@mui/material";
import forefrontImage from "../../assets/images/header-forefront.png";
import headerBackground from "../../assets/images/header-background.png";
//import headerBackground2 from "../../assets/images/header-background2.png";
import { motion } from "framer-motion";
import logoFilled from "../../assets/images/logo-filled.svg";
import Nav from "../../components/Nav";
import "../pages.css";
import anime from "animejs";
import isMobile, { useIsTablet } from "../../utils/transitions/isMobile";

const ABOUT_TEXT = `Maybe who we are could be defined by what we love, the things 
that truly move us. I am drawn to the intersection of art, 
philosophy, and technology and their profound influence on our lives. My current focus surrounds 
exploring how advancements in AI can be leveraged to create a post-growth lifestyle; one where we can 
rediscover the essence of being human. My background is in software engineering and I am constantly
learning and expanding as new connections and ideas are explored. I'm looking forward to collaborating with others 
to create hopeful horizons :)`;

function HomePage() {
  const [portfolioClicked, setPortfolioClicked] = useState(false);
  const [lightMode, setLightMode] = useState(true);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [focusedElement, setFocusedElement] = useState<"logo" | "about">(
    "logo"
  );
  const [isAnimating, setIsAnimating] = useState(false);

  //get utils/isMobile hook
  const isMobileDevice = isMobile();
  const isTabletDevice = useIsTablet();

  useEffect(() => {
    if (portfolioClicked) {
      setIsAnimating(true); // Start the animation

      const timer = setTimeout(() => {
        setLightMode(!lightMode); // Switch the light mode
        setPortfolioClicked(false); // Reset the portfolio clicked state
        setIsAnimating(false); // Reset the animation state
      }, 1300);

      return () => clearTimeout(timer);
    }
  }, [portfolioClicked, lightMode]);

  useLayoutEffect(() => {
    const elements = {
      logo: document.querySelector(".logo-selector"),
      about: document.querySelector(".about-selector") as HTMLElement,
    };

    //set initial y position of about to be out of screen
    if (elements.about) {
      elements.about.style.transform = "translateY(1000px)";
    }
  }, []);

  useEffect(() => {
    if (!aboutClicked) return;

    const elements = {
      logo: document.querySelector(".logo-selector"),
      about: document.querySelector(".about-selector") as HTMLElement,
    };

    //set initial y position of about to be out of screen
    if (elements.about) {
      elements.about.style.transform = "translateY(700px)";
    }
    if (focusedElement === "about") {
      // Animate when 'logo' is the focused element
      anime
        .timeline({ easing: "easeInOutQuad", duration: 1400 })
        .add({
          targets: elements.logo,
          translateY: [0, 1000], // Animates logo out of view
        })
        .add({
          targets: elements.about,
          translateY: [1000, 0], // Animates about into view
        });
    } else {
      // Animate when 'about' is the focused element
      anime
        .timeline({ easing: "easeInOutQuad", duration: 1400 })
        .add({
          targets: elements.about,
          translateY: [0, 1000], // Animates logo into view
          //offset: '-=1600' // Start this animation before the previous one ends
        })
        .add({
          targets: elements.logo,
          translateY: [1000, 0], // Animates logo into view
        });
      /*  anime.timeline({ easing: "easeInOutQuad", duration: 800 }).add({
        targets: elements.logo,
        translateY: [700, 0], // Animates logo into view
      }); */
    }
    setTimeout(() => {
      setAboutClicked(false);
    }, 1200);
  }, [focusedElement, aboutClicked]);

  return (
    <Grid
      container
      sx={{
        overflow: "hidden",
        backgroundImage: lightMode
          ? `url(${headerBackground})`
          : `url(${headerBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        border: 1,
      }}
    >
      {/* Forefront Image */}
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: 10,
          perspective: "1000px",
        }}
      >
        <img
          src={forefrontImage}
          alt="Forefront"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            perspective: "1000px",
          }}
        />
      </motion.div>

      {/* Header */}
      <Nav
        currentPage={"home"}
        setIsAnimating={setIsAnimating}
        isAnimating={isAnimating}
        focusedElement={focusedElement}
        setFocusedElement={setFocusedElement}
        setAboutClicked={setAboutClicked}
        portfolioClicked={portfolioClicked}
        setPortfolioClicked={setPortfolioClicked}
        lightMode={lightMode}
      />

      {/* Center logo  */}
      {/*       {focusedElement === "logo" && ( */}
      <Grid
        item
        className="logo-selector"
        sx={{
          position: "absolute",
          alignSelf: "center",
          top: "20%",
          color: "#EDE5D8",
        }}
      >
        <Grid container sx={{ flexDirection: "column", position: "relative" }}>
          <img
            src={logoFilled}
            alt="Forefront"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transform: "translateX(-6px)",
            }}
          />

          <Typography
            variant={isMobileDevice ? "h6" : "h5"}
            style={{
              fontWeight: "1000",
              position: "absolute",
              bottom: isMobileDevice ? 40 : 50,
              left: isMobileDevice ? "25%" : "27%",
              color: "white",
            }}
          >
            design & development
          </Typography>
        </Grid>
      </Grid>
      {/*      )} */}
      {/*    {focusedElement === "about" && ( */}
      <Grid
        item
        className="about-selector"
        sx={{
          alignSelf: 'center',
          color: "#EDE5D8",
          width: "340px",
        }}
      >
        <Grid container sx={{ flexDirection: "column", position: "relative" }}>
          <Grid
            item
            sx={{
              width: "340px",
              p: 4,
              height: "800px",
              //alignSelf: "center",
              mb: 6,
              zIndex: 100,
              borderRadius: "50%",
            }}
          >
            <Grid
              container
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "justify",
                  alignSelf: "center",
                  //hyphens: "auto", // This can help with word breaking
                  fontSize: /* isMobileDevice ? "16px" : isTabletDevice ? "22px" :  */"17px",
                  color: "white",
                }}
              >
                {ABOUT_TEXT}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Off center body text(do not render if mobile) */}
      {!lightMode && !isMobileDevice && (
        <Grid
          item
          style={{
            position: "absolute",
            bottom: isTabletDevice ? 180 : 100,
            right: isTabletDevice ? 170 : 140,
            zIndex: 0,
          }}
        >
          <Grid
            item
            sx={{
              fontWeight: "1000",
              position: "absolute",
              bottom: 70,
              right: -150,
              color: "white",
              width: "350px",
            }}
          >
            <Typography variant="overline">we create our reality</Typography>
          </Grid>
          <Grid
            item
            sx={{
              fontWeight: "1000",
              position: "absolute",
              bottom: 20,
              right: -205,
              color: "white",
              width: "350px",
            }}
          >
            <Typography variant="overline">by assigning priorities</Typography>
          </Grid>
          <Grid
            item
            sx={{
              fontWeight: "1000",
              position: "absolute",
              bottom: -30,
              right: -260,
              color: "white",
              width: "350px",
            }}
          >
            <Typography variant="overline">
              to our external experiences
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default HomePage;
