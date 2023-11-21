import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { ExpCard } from "../../components/ExpCard";

export interface EXPType {
  title: string;
  description: string;
  jobTitle: string;
  term: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
}

const EXP = [
  {
    title: "Natureblocks",
    description: "",
    jobTitle: "frontend developer",
    term: "2022 - Present",
    backgroundColor: "#E42966",
    hoverBackgroundColor: "limegreen",
    hoverTextColor: "white",
  },
  {
    title: "Semios",
    description:
      "A Minecraft mod that adds a variety of new blocks and items to the game.",
    jobTitle: "fullstack developer",
    term: "2021",
    backgroundColor: "#E42966",
    hoverBackgroundColor: "aquamarine",
    hoverTextColor: "white",
  },
  {
    title: "Redbrick",
    description:
      "A Minecraft mod that adds a variety of new blocks and items to the game.",
    jobTitle: "fullstack developer",
    term: "2021",
    backgroundColor: "#E42966",
    hoverBackgroundColor: "black",
    hoverTextColor: "white",
  },
  {
    title: "University of Victoria",
    description:
      "A Minecraft mod that adds a variety of new blocks and items to the game.",
    jobTitle: "software engineering",
    term: "2016 - 2022",
    backgroundColor: "#E42966",
    hoverBackgroundColor: "goldenrod",
    hoverTextColor: "white",
  },
];

export default function Work() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundColor: "#E42966",
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
  );
}
