import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ExpCard } from "../../components/ExpCard";
import { keyframes } from "@mui/system";
import Nav from "../../components/Nav";

// Define the keyframes
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
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
}

const EXP: EXPType[] = [
  {
    title: "Natureblocks",
    description: `
    As one of the lead frontend developers in a fast paced startup environment, I am responsible for the design and implementation of key frontend architecture. You can see an example of my work here:
    `,
    jobTitle: "frontend developer",
    term: "2022 - Present",
    backgroundColor: "black",
    hoverBackgroundColor: "#D1E5C4",
    hoverTextColor: "black",
    link: `https://natureblocks.com/resources/blog`,
    linkText: "Natureblocks Blog",
  },
  {
    title: "Semios",
    description: `My position at Semios kick started my desire to combine software solutions with a vision of a better future. 
    Working along side a team of talented engineers, I was able to learn the ins and outs of the software development process as a large scale company.
    `,
    jobTitle: "fullstack developer",
    term: "2021",
    backgroundColor: "black",
    hoverBackgroundColor: "#C4E4E5",
    hoverTextColor: "black",
  },
  {
    title: "Redbrick",
    description:
      "The fast pace at Redbrick taught me how to learn quickly and adapt to new technologies within a dynamic team. The focus at Redbrick was QA testing, delivering software that could scale, and the constant agile iteration process.",
    jobTitle: "fullstack developer",
    term: "2021",
    backgroundColor: "black",
    hoverBackgroundColor: "#E5C4C4",
    hoverTextColor: "black",
  },
  {
    title: "University of Victoria",
    description:
      "Home base of sorts, UVic is where I learned the fundamentals of software engineering, and where I was given the oppurtunity to explore different fields via classes, clubs, and co-ops. Notable mentions might be leading the UI Design team at VikeLabs to build a high fidelety prototype for UVSS, or working as a data visualization developer for the UVic Alumni Relations branch. ",
    jobTitle: "software engineering",
    term: "2016 - 2022",
    backgroundColor: "black",
    hoverBackgroundColor: "#C4CFE5",
    hoverTextColor: "black",
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
        backgroundColor: "white",
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
              text here that should be translating x off screen and repeat on
              other side continuously like but keep it short or else it will
              look kinda crazy I'm sure if i get lorem ipsum going up in herrrr
              it will get extra crazy sir
            </Box>
            <Box component="span" sx={{ width: "50%" }}>
              text here that should be translating x off screen and repeat on
              other side continuously like but keep it short or else it will
              look kinda crazy I'm sure if i get lorem ipsum going up in herrrr
              it will get extra crazy sir
            </Box>
          </Typography>
        </Grid>
        {/* TODO: add a currentpage prop, and in its place render the JohnSchriemer logo which redirects back to '/' */}
        <Nav currentPage={"portfolio"} />
      </Grid>
      <Grid item sx={{ flex: 1 }}>
        <Grid
          container
          sx={{
            height: "100%",
            gridTemplateColumns: "1fr",
            flexDirection: "row",
            flexWrap: "noWrap",
            width: "100%",
          }}
        >
          {EXP.map((exp, idx) => (
            <ExpCard
              exp={exp}
              isHovering={hoveredItem === idx}
              onMouseEnter={() => setHoveredItem(idx)}
              onMouseLeave={() => setHoveredItem(null)}
            />
          ))}
        </Grid>
      </Grid>
      {/* <Grid
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
          variant="h6"
          sx={{
            whiteSpace: "nowrap",
            alignSelf: "center",
            color: 'white',
            width: "200%", // Double the width to fit two copies of the text
            display: "flex",
            animation: `${scroll} 10s linear infinite`, // Apply the scrolling animation
            fontWeight: "1000",
            mt: 1
          }}
        >
          <Box component="span" sx={{ width: "50%" }}>
            text here that should be translating x off screen and repeat on
            other side continuously like but keep it short or else it will look kinda crazy I'm sure if i get lorem ipsum going up in herrrr it will get extra crazy sir
          </Box>
          <Box component="span" sx={{ width: "50%" }}>
          text here that should be translating x off screen and repeat on
            other side continuously like but keep it short or else it will look kinda crazy I'm sure if i get lorem ipsum going up in herrrr it will get extra crazy sir
          
          </Box>
        </Typography>
      </Grid> */}
    </Grid>
  );
}
