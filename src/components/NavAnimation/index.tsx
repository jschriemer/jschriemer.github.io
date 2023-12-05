import { Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "./navAnimation.css";

// Define the props type
interface NavAnimationProps {
  onAnimationEnd: () => void;
}

export const NavAnimation: React.FC<NavAnimationProps> = ({
  onAnimationEnd,
}) => {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationElement = animationRef.current;
    if (animationElement) {
      // Add event listener
      animationElement.addEventListener("animationend", onAnimationEnd);

      // Clean up
      return () => {
        animationElement.removeEventListener("animationend", onAnimationEnd);
      };
    }
  }, [onAnimationEnd]);

  return (
    <>
      <Grid
        item
        ref={animationRef}
        className="frame-animation"
        sx={{ position: "absolute", left: "0", top: "0" }}
      >
        {/* Animation */}
      </Grid>
    </>
  );
};
