import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./navAnimation.css";

interface NavAnimationProps {
  onAnimationEnd: () => void;
}

export const NavAnimation: React.FC<NavAnimationProps> = ({ onAnimationEnd }) => {
  const animationRef = useRef<HTMLDivElement>(null);
  const [animationClass, setAnimationClass] = useState("frame-animation");

  const restartAnimation = () => {
    // Remove the class
    setAnimationClass("");
    // Force a reflow
    if (animationRef.current) void animationRef.current.offsetWidth;
    // Add the class back
    setAnimationClass("frame-animation");
  };

  useEffect(() => {
    restartAnimation(); // Restart animation when component mounts or onAnimationEnd changes

    const animationElement = animationRef.current;
    if (animationElement) {
      animationElement.addEventListener("animationend", onAnimationEnd);

      // Clean up
      return () => {
        animationElement.removeEventListener("animationend", onAnimationEnd);
      };
    }
  }, [onAnimationEnd]);

  return (
    <Grid
      item
      ref={animationRef}
      className={animationClass}
      sx={{ position: "absolute", left: "0", top: "0" }}
    >
      {/* Animation */}
    </Grid>
  );
};
