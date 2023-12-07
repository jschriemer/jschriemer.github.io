import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ExpCard } from "../../components/ExpCard";
import { keyframes } from "@mui/system";
import Nav from "../../components/Nav";
import natureblocks from "../../assets/images/work/natureblocks.svg";
import redbrick from "../../assets/images/work/redbrick.svg";
import semios from "../../assets/images/work/semios.svg";
import uvic from "../../assets/images/work/uvic.svg";

// Define the keyframes
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0);
  }
`;

export interface EXPType {
  title: string;
  description: string;
  jobTitle: string;
  term: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
  link?: string;
  linkText?: string;
  svg: string;
}

const EXP: EXPType[] = [
  {
    title: "Natureblocks",
    description: `
    I'm currently working at a startup using software solutions 
    to combat the climate crisis. As one of the lead frontend 
    developers, I've become an integral part of our quick 
    development cycle. The cutting edge start-up environment has given me the 
    opportunity to continue my proficiency with modern tech stacks.
    You can see 
    an example of my work here.
    `,
    jobTitle: "frontend developer",
    term: "2022 - Present",
    backgroundColor: "black",
    hoverBackgroundColor: "#D1E5C4",
    hoverTextColor: "black",
    link: `https://natureblocks.com/resources/blog`,
    linkText: "Natureblocks Blog",
    svg: natureblocks,
  },
  {
    title: "Semios",
    description: `My position at Semios further fueled my desire to combine software 
    solutions with a vision of a better future. It propelled my identity as a 
    software engineer, allowing me to deliver code used by thousands worldwide. 
    Working alongside a team of talented engineers, I gained valuable experience 
    in a successful software development process at a large-scale company addressing global 
    food security issues. ?? 

    My focus at Redbrick included learning QA
      integration testing, delivering mobile-first dynamic web application code, and participating in agile
      iteration processes. Working with an established local tech company allowed me to
      learn reliable software development practices which I now apply to
      future projects
    `,
    jobTitle: "fullstack developer",
    term: "2021",
    backgroundColor: "black",
    hoverBackgroundColor: "#E5C4C4",
    hoverTextColor: "black",
    svg: semios,
    //svgTwo: redbrick
  },
  {
    title: "University of Victoria",
    description: `I studied software engineering at the University of Victoria, 
      where I learnt the fundamentals of the field and had the chance 
      to explore various ideas through classes, clubs, and co-ops. Notable 
      experiences include leading the UI Design team at VikeLabs in the 
      development of a high-fidelity prototype for UVSS and working as a 
      data visualization developer for UVic Alumni Relations.`,
    jobTitle: "software engineering",
    term: "2016 - 2022",
    backgroundColor: "black",
    hoverBackgroundColor: "#C4CFE5",
    hoverTextColor: "black",
    svg: uvic,
  },
];

export default function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <Grid
      container
      sx={{
        flexDirection: "column",
        flexwrap: "nowrap",
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Grid
        item
        sx={{ width: "100%", backgroundColor: "black", height: "100px" }}
      >
        <Grid
          item
          sx={{
            height: "40px",
            width: "100%",
            border: 1,
            backgroundColor: "black",
            overflow: "hidden", // Hide the text when it moves off the edge of the Grid item
          }}
        >
          <Typography
            variant="overline"
            sx={{
              whiteSpace: "nowrap",
              alignSelf: "center",
              color: "white",
              width: "200%", // Double the width to fit two copies of the text
              display: "flex",
              animation: `${scroll} 20s linear infinite`, // Apply the scrolling animation
              fontWeight: "1000",
              mt: 0.1,
            }}
          >
            <Box component="span" sx={{ width: "50%" }}>
              these are a collection of more formal positions I've held in the
              digital design space. I'm always looking for new ways to
              contribute and solve the pressing challenges of tomorrow.
            </Box>
            <Box component="span" sx={{ width: "50%" }}>
              these are a collection of more formal positions I've held in the
              digital design space. I'm always looking for new ways to
              contribute and solve the pressing challenges of tomorrow.
            </Box>
          </Typography>
        </Grid>
        <Nav currentPage={"portfolio"} />
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item sx={{ flex: 1 }}>
            <Grid
              container
              sx={{
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                width: "60%",
              }}
            >
              {EXP.map((exp, idx) => (
                <Grid item sx={{ width: "100%" }}>
                  <ExpCard
                    exp={exp}
                    isHovering={hoveredItem === idx}
                    onMouseEnter={() => setHoveredItem(idx)}
                    onMouseLeave={() => setHoveredItem(null)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item sx={{ flex: 1, border: "1px solid red" }}>
            <Grid
              container
              sx={{
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                border: "1",
                borderColor: "white",
                color: "white",
              }}
            >
              <Typography variant="h2">B.Eng Software Engineering</Typography>
              B.Eng Software Engineering frontend development machine learning
              ui design -
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
