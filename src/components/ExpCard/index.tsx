import React from "react";
import { useSpring, animated } from "react-spring";
import { Grid, Typography } from "@mui/material";
import { EXPType } from "../../pages/Portfolio";

export const ExpCard = ({
  exp,
  isHovering,
  onMouseEnter,
  onMouseLeave,
}: {
  exp: EXPType;
  isHovering: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const backgroundSpringProps = useSpring({
    backgroundColor: isHovering
      ? exp.hoverBackgroundColor
      : exp.backgroundColor,
  });

  const iconSpringProps = useSpring({
    to: {
      height: isHovering ? "60px" : "50px",
      width: isHovering ? "60px" : "50px",
    },
  });

  const Triangle = ({ direction }: { direction: string }) => (
    <svg width="100" height="100" viewBox="0 0 50 50">
      <polygon
        points={direction === "left" ? "50,0 50,50 0,0" : "0,0 0,50 50,0"}
        fill="black"
      />
    </svg>
  );

  console.log(exp.title);
  return (
    <animated.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        ...backgroundSpringProps,
        //color: isHovering ? exp.hoverTextColor : "black",
        transition:
          "background-color 0.1s ease-in-out, color 0.3s ease-out 0.1s",
        border: 1,
        borderColor: "#E5D6C4",
        height: "100%",
        flex: 1,
        position: "relative", // Add this line
      }}
    >
      <Grid
        container
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          pt: 8,
        }}
      >
        {exp.title === "Semios" && (
          <Grid
            item
            sx={{ position: "absolute", top: 0, right: 0, zIndex: 50 }}
          >
            <Triangle direction={"left"} />
          </Grid>
        )}
        {exp.title === "Redbrick" && (
          <Grid item sx={{ position: "absolute", top: 0, left: 0, zIndex: 50 }}>
            <Triangle direction={"right"} />
          </Grid>
        )}
        {/* Job title */}
        <Grid
          item
          sx={{
            mt: 10,
            color: isHovering ? exp.hoverTextColor : "white",
            transform: isHovering ? "translateY(-10px)" : null,
            transition: "transform 0.2s ease-in-out",
          }}
        >
          <Typography variant="h4">{exp.jobTitle}</Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: '"Your Font Name", Arial, sans-serif' }}
          >
            {exp.term}
          </Typography>
        </Grid>

        {/* Description */}
        {isHovering && (
          <Grid item sx={{ width: "200px" }}>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                //hyphens: "auto", // This can help with word breaking
              }}
            >
              {exp.description}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "underlined", color: "black" }}
                >
                  {exp.linkText}
                </a>
              )}
            </Typography>
          </Grid>
        )}

        {/* {isHovering && (
          <Grid
            item
            sx={{
              position: "absolute",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <img
              src={staircase}
              alt="Staircase"
              style={{ width: "100%", height: "200px" }}
            />
          </Grid>
        )} */}

        {/* Company Name   */}
        <Grid item sx={{ width: "100%", backgroundColor: "black", py: 6 }}>
          <Grid
            container
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
              width: "100%",
              height: "fit-content",
            }}
          >
            <animated.img
              src={exp.svg}
              alt="company logo"
              style={iconSpringProps}
            />
            <Typography
              variant="h5"
              sx={{ color: isHovering ? exp.hoverBackgroundColor : "white" }}
            >
              {exp.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </animated.div>
  );
};
