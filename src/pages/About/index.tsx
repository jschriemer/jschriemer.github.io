import React, { useRef, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import anime from "animejs";
import Nav from "../../components/Nav";
// import aboutBackground from "../../assets/images/about-background.png";

export default function About() {
  const sweepRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sweepRef.current) {
      anime({
        targets: sweepRef.current,
        translateX: ["-100vw", "100vw"],
        backgroundColor: ["#00468B", "#00468B"],
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
    <div data-barba="container" data-barba-namespace="about" style={{ position: "relative", overflow: "hidden", height: "100vh", backgroundColor: 'black' }}>
      <div
        ref={sweepRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          backgroundColor: "#00468B",
        }}
      ></div>
      <Grid
        container
        sx={{
          height: "100vh",
          flexDirection: "column",
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
         <Nav currentPage={'about'} />
        <Grid
          item
          sx={{
            border: 1,
            width: '100%',
            height: '200px',
          }}
        />
        <Grid
          item
          sx={{
            border: 1,
            width: '200px',
            //height: 'auto',
            borderColor: 'white',
            alignSelf: 'center'
          }}
        >
          <Typography variant="h1" sx={{color: 'white'}}>B</Typography>
        </Grid>
        <Grid
          item
          sx={{
            border: 1,
            width: '200px',
            //height: 'auto',
            borderColor: 'white',
            alignSelf: 'flex-end'
          }}
        >
          <Typography variant="h1" sx={{color: 'white'}}>A</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
