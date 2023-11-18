import React from "react";
import { Grid, Typography } from "@mui/material";
import forefrontImage from "../../assets/images/header-forefront.png";
import headerBackground from "../../assets/images/header-background.png";
import { motion } from "framer-motion";

const HomePage = () => {
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
        justifyContent: "space-between",
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
      <Grid item>
        <Grid
          container
          sx={{ justifyContent: "space-between", color: "#EDE5D8", p: 2 }}
        >
          <Typography>About</Typography>
          <Typography>Portfolio</Typography>
          <Typography>Contact</Typography>
        </Grid>
      </Grid>

      {/* Center logo or mantra */}
      <Grid
        item
        sx={{ alignSelf: "center", border: 1, color: "#EDE5D8", p: 1 }}
      >
        <Grid
          container
          sx={{
            flexDirection: "column",
            flexWrap: "nowrap",
            textAlign: "justify",
          }}
        >
          <Typography variant="h1" sx={{textAlign: 'justify',  textJustify: 'inter-word', textAlignLast: 'center', width: '100%'}}>j s c</Typography>
          <Typography variant="h1" sx={{textAlign: 'justify',   textRendering: 'optimizeLegibility',
    wordSpacing: '-1px', textAlignLast: 'center', width: '100%'}}>r i e</Typography>
          <Typography variant="h1" sx={{textAlign: 'justify',  textJustify: 'inter-word', textAlignLast: 'center', width: '100%'}}>m e r</Typography>
        </Grid>
      </Grid>

      {/* Off center body text */}
      <Grid
        item
        sx={{ position: "absolute", bottom: 200, right: 150, color: "#EDE5D8" }}
      >
        <Grid container sx={{ justifyContent: "center", maxWidth: "100px" }}>
          <Typography variant="h5">how can we truly know ourselves</Typography>
        </Grid>
      </Grid>

      {/* Scroll down arrow */}
      <Grid item sx={{ alignSelf: "center", color: "#EA3E81", p: 1 }}>
        <Grid item>
          <Typography variant="h3">V</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
