import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import forefrontImage from "../../assets/images/header-forefront.png";
import headerBackground from "../../assets/images/header-background.png";
import { motion } from "framer-motion";
import logoFilled from "../../assets/images/logo-filled.svg";
import Nav from "../../components/Nav";
import "../pages.css";

const ABOUT_TEXT = `Maybe who we are could be defined by what we love, the things 
that truly move us. I am drawn to the intersection of art, 
philosophy, and technology and their profound influence on our lives. My current focus surrounds 
exploring how advancements in AI can be leveraged to create a post-growth lifestyle; one where we can 
rediscover the essence of being human. I work as a software engineer, 
and beyond my technical skill set I am continually 
learning and growing alongside those around me, hoping that together we can
find fulfillment.`;

function HomePage() {
  const [focusedElement, setFocusedElement] = useState<
    "logo" | "about" | "contact" | null
  >("logo");

  useEffect(() => {
    const currentElementSelector = `.${focusedElement}`;
    const elements = {
      logo: document.querySelector(".logo-selector"),
      about: document.querySelector(".about-selector"),
      contact: document.querySelector(".contact-selector"),
    };

    anime.timeline({ easing: "easeOutExpo" }).add({
      targets: elements[focusedElement],
      translateY: [0, 1000], // Adjust these values based on your layout
      opacity: [1, 0],
      complete: () => {
        // Once the current element is animated out, animate the next one in
        anime({
          targets: elements[focusedElement],
          translateY: [-1000, 0], // Start off-screen and move into view
          opacity: [0, 1],
        });
      },
    });
  }, [focusedElement]);

  return (
    <Grid
      container
      sx={{
        overflow: "hidden",
        backgroundImage: `url(${headerBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
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
        focusedElement={focusedElement}
        setFocusedElement={setFocusedElement}
      />

      {/* Center logo  */}
      {focusedElement === "logo" && (
        <Grid item sx={{ alignSelf: "center", color: "#EDE5D8" }}>
          <Grid
            container
            sx={{ flexDirection: "column", position: "relative" }}
          >
            <img
              src={logoFilled}
              alt="Forefront"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />

            <Typography
              variant="h5"
              style={{
                fontWeight: "1000",
                position: "absolute",
                bottom: 50,
                left: "29%",
                color: "white",
              }}
            >
              design & development
            </Typography>
          </Grid>
        </Grid>
      )}
      {focusedElement === "about" && (
        <Grid item sx={{ alignSelf: "center", color: "#EDE5D8" }}>
          <Grid
            container
            sx={{ flexDirection: "column", position: "relative" }}
          >
            <Grid
              item
              sx={{
                width: "340px",
                p: 4,
                height: "900px",
                //alignSelf: "center",
                mb: 6,
                zIndex: 100,
                //backgroundImage: `radial-gradient(circle at center, black 0%, black 40%, transparent 40%, transparent 60%, black 60%)`,
                borderRadius: "50%",
                //position: "absolute",
                //right: "10%",
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
                    fontSize: "17px",
                    color: "white",
                  }}
                >
                  {ABOUT_TEXT}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}

      {/* Off center body text(do not render if mobile) */}
      <Grid
        item
        style={{
          position: "absolute",
          bottom: 100,
          right: 140,
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
    </Grid>
  );
}

export default HomePage;
