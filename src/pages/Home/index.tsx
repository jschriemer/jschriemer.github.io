import React, { useEffect, useRef, useState } from "react";
import { Grid, Typography } from "@mui/material";
import forefrontImage from "../../assets/images/header-forefront.png";
import headerBackground from "../../assets/images/header-background.png";
import { motion } from "framer-motion";
import logoFilled from "../../assets/images/logo-filled.svg";
import Nav from "../../components/Nav";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const words = [
  "based",
  "in",
  "victoria",
  "BC",
  "a",
  "hopeful",
  "tech",
  "optimist",
  "will",
  "a",
  "radical",
  "redesign",
  "save",
  "us",
  "all?",
];

const HomePage = () => {
  const [rows, setRows] = useState([words]);

  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wordRef.current) {
      const newRows = [];
      let currentRow: string[] = [];
      let currentRowWidth = 0;

      words.forEach((word) => {
        const wordWidth = wordRef?.current?.offsetWidth ?? 0;
        if (currentRowWidth + wordWidth > 300 && currentRow.length >= 2) {
          newRows.push(currentRow);
          currentRow = [word];
          currentRowWidth = wordWidth;
        } else {
          currentRow.push(word);
          currentRowWidth += wordWidth;
        }
      });

      newRows.push(currentRow);

      setRows(newRows);
    }
  }, []);

  return (
    <Grid
      container
      sx={{
        overflow: "hidden",
        backgroundImage: `url(${headerBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Forefront Image */}
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          top: 0,
          left: 0,
        }}
      >
        <img
          src={forefrontImage}
          alt="Forefront"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      {/* Header */}
      <Nav />

      {/* Center logo  */}
      <Grid item sx={{ alignSelf: "center", color: "#EDE5D8" }}>
        <Grid container sx={{ flexDirection: "column", position: "relative" }}>
          <img
            src={logoFilled}
            alt="Forefront"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />

          <Typography
            variant="h5"
            style={{
              fontWeight: "1000",
              position: "absolute",
              bottom: 50,
              left: "29%",
              color: 'white'
            }}
          >
            design & development
          </Typography>
        </Grid>
      </Grid>

      {/* Off center body text(do not render if mobile) */}
      <Grid
        item
        sx={{
          position: "absolute",
          bottom: 280,
          right: 100,
          color: "#EDE5D8",
          width: "300px",
        }}
      >
        {/*
          design impacts our environment and  
          our environment shapes the life we lead. 
          I am dedicated to creating designs that 
          not only serve a purpose but also contribute 
          positively to the world we all inhabit
        */}
        <Grid container sx={{ flexDirection: "column" }}>
          {/* 1st line*/}
          {/* <Grid item>
            {rows.map((row, rowIndex) => (
              <Grid
                container
                key={rowIndex}
                sx={{ justifyContent: "space-between" }}
              >
                {row.map((word, wordIndex) => (
                  <Typography
                    variant="h4"
                    key={wordIndex}
                    ref={wordIndex === 0 && rowIndex === 0 ? wordRef : null}
                  >
                    {word}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
