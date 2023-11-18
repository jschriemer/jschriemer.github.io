import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const EXP = [
  {
    title: "Natureblocks",
    description:
      "",
    jobTitle: "frontend developer",
    term: "2022 - Present",
    backgroundColor: "",
  },
  {
    title: "Semios",
    description:
      "A Minecraft mod that adds a variety of new blocks and items to the game.",
    jobTitle: "fullstack developer",
    term: "2021",
    backgroundColor: "",
  },
  {
    title: "Redbrick",
    description:
      "A Minecraft mod that adds a variety of new blocks and items to the game.",
    jobTitle: "fullstack developer",
    term: "2021",
    backgroundColor: "",
  },
  {
    title: "University of Victoria",
    description:
      "A Minecraft mod that adds a variety of new blocks and items to the game.",
    jobTitle: "software engineering",
    term: "2016 - 2022",
    backgroundColor: "",
  },
];

export default function Work() {
  const [isHovered, setIsHovered] = useState<number | null>(null);
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
        <Grid
          item
          onMouseEnter={() => setIsHovered(idx)}
          onMouseLeave={() => setIsHovered(null)}
          sx={{
            backgroundColor: exp.backgroundColor,
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
              height: "100%",
              py: 8,
              px: 2,
              color: "#E5D6C4",
            }}
          >
            {/* Job title */}
            <Grid item sx={{}}>
              <Typography variant="h4">{exp.jobTitle}</Typography>
              <Typography variant="body1">{exp.term}</Typography>
            </Grid>

            {/* Description */}
            {isHovered === idx && (
              <Grid item sx={{width: '200px'}}>
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'justify',
                  hyphens: 'auto', // This can help with word breaking
                  
                }}
              >
                {exp.description}
              </Typography>
            </Grid>
            )}

            {/* Company Name   */}
            <Grid item>
              <Typography variant="h5">{exp.title}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
