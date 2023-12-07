import React, { useRef, useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
//import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
//import aboutBackground from "../../assets/images/aboutBackground3.png";
import anime from "animejs";
//import IMG_5084 from "../../assets/images/IMG_5084.jpg";
//import DSC_0644 from "../../assets/images/DSC_0644.jpg";
import basedinvic from "../../assets/images/basedinvic.svg";

export default function About() {
  const sweepRef = useRef<HTMLDivElement | null>(null);
  const [text, setText] = useState("Who am I?");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(`Maybe who we are could be defined by what we love, the things 
      that truly move us. I am drawn to the intersection of art, 
      philosophy, and technology and their profound influence on our lives. My current focus surrounds 
      exploring how advancements in AI can be leveraged to create a post-growth lifestyle; one where we can 
      rediscover the essence of being human. I work as a software engineer, 
      and beyond my technical skill set I am continually 
      learning and growing alongside those around me, hoping that together we can
      find fulfillment.

      
       
      `);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (sweepRef.current) {
      anime({
        targets: sweepRef.current,
        translateX: ["0vw", "60vw"],
        backgroundColor: ["#FFFFFE", "#FFFFFD"], //"#682646"],
        duration: 3000,
        easing: "easeInOutQuad",
        complete: () => {
          if (sweepRef.current) {
            sweepRef.current.style.display = "none";
          }
        },
      });
    }
  }, []);

  return (
    <div
      data-barba="container"
      data-barba-namespace="about"
      style={{
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        backgroundColor: "#CECFD7",
      }}
    >
      <Grid
        container
        sx={{
          height: "100vh",
          flexDirection: "column",
          justifyContent: "flex-start",
          position: "relative",
          zIndex: "50",
          backgroundColor: "white", //"#682646",
        }}
      >
        {/* * ocean sweep animation * */}
        <div
          ref={sweepRef}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundColor: "black",
            zIndex: 1,
          }}
        ></div>
        {/* * nav * */}
        <Nav currentPage={"about"} />

        <Grid
          item
          sx={{ position: "absolute", bottom: -100, left: 50, zIndex: 150 }}
        >
          <img
            src={basedinvic}
            alt="basedinvic"
            style={{ width: "500px", height: "500px" }}
          />
        </Grid>

        {/* * secret invisible nav spacing * */}
        <Grid
          item
          sx={{
            width: "100%",
            height: "200px",
          }}
        />

        {/* * body text 1 * */}
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
            position: "absolute",
            right: "10%",
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
                color: "black",
              }}
            >
              {text}
            </Typography>
          </Grid>
        </Grid>

        {/* * image 2 * */}
        <Grid
          item
          sx={{
            width: "650px",
            //p: 4,
            alignSelf: "flex-start",
            position: "absolute",
            zIndex: 0,
            //backgroundColor: "black",
            left: "0%",
            top: "0",
          }}
        >
          {/* <img
            src={DSC_0644}
            alt="John Schriemer"
            style={{
              width: "1000px",
              height: "100vh",
              objectFit: "cover",
              //borderRadius: 10,
            }}
          /> */}
        </Grid>
      </Grid>
    </div>
  );
}
