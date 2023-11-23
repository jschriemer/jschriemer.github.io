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
  const springProps = useSpring({
    backgroundColor: isHovering
      ? exp.hoverBackgroundColor
      : exp.backgroundColor,
  });

  return (
    <animated.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        ...springProps,
        color: isHovering ? exp.hoverTextColor : "white",
        transition: "background-color 0.3s ease",
        border: 1,
        borderColor: "#E5D6C4",
        height: "100%",
        flex: 1,
      }}
    >
      <Grid
        container
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          py: 8,
          px: 2,
        }}
      >
        {/* Job title */}
        <Grid item sx={{mt :10}}>
          <Typography variant="h4">{exp.jobTitle}</Typography>
          <Typography variant="body1">{exp.term}</Typography>
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
             
             <a href={exp.link} target="_blank" rel="noreferrer" style={{textDecoration: 'underlined', color: 'black'}}>
               {exp.linkText}
             </a>
          
         )}
            </Typography>
            
          </Grid>
        )}

        {/* Company Name   */}
        <Grid item>
          {/* {isHovering && (
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMcqgylaM20snutUdhqTmtkS5FN0BKqsBsp4PwEjgT00roYCc8qHcLXFa8alpgPAXmPI&usqp=CAU"
              }
              alt="natureblocks"
            />
          )} */}
          <Typography variant="h5">{exp.title}</Typography>
        </Grid>
      </Grid>
    </animated.div>
  );
};
