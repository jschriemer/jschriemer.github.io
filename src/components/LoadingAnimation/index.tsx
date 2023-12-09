/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { Box, Grid } from "@mui/material";
import strive from "../../assets/images/strive.svg";
import anime from "animejs";

const LoadingScreen = ({
  setLoadingProgress,
}: {
  setLoadingProgress: React.Dispatch<React.SetStateAction<number>>;
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 300); // Adjust the interval for faster or slower animation

    return () => {
      clearInterval(interval);
    };
  }, []);

  const radius = 100; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const gapStart = (0 / 360) * circumference;
  const gapEnd = (0 / 360) * circumference;
  const strokeLength = circumference - (gapEnd - gapStart);

  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      anime({
        targets: progressRef.current,
        strokeDashoffset: [circumference, gapStart],
        easing: "easeInOutSine",
        duration: 3500, // Duration of the animation
        loop: false,
      });
    }
  }, []);

  const trianglePoints = "-110,400 200,400 200,200";

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        width: "100vw",
        //position: "absolute",
        //top: 0,
        //left: 0,
        //zIndex: 1000,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "400px",
          height: "400px",

          //display: loadingProgress < 100 ? "block" : "none",
        }}
      >
        <img
          src={strive}
          alt="Forefront"
          style={{
            width: "300px",
            height: "300px",
            objectFit: "contain",
            position: "absolute",
            top: "14.2%",
            left: "13%",
            zIndex: 1000,
            minWidth: "fit-content",
          }}
        />

        <svg width="400" height="400" viewBox="0 0 400 400">
          <circle
            cx="50%"
            cy="50%"
            ref={progressRef}
            r={radius}
            fill="none"
            stroke="hotpink"
            strokeWidth={8}
            strokeDasharray={strokeLength}
            strokeDashoffset={circumference}
            //transform="rotate(-90 100 100)"
          />
          <polygon points={trianglePoints} fill="black" style={{ zIndex: 3 }} />
        </svg>
      </Box>
    </Grid>
  );
};

export default LoadingScreen;
