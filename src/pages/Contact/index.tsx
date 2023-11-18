import { Grid, Typography } from "@mui/material";
import forefrontImage from "../../assets/images/header-forefront.png";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Contact() {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundColor: "#E5D6C4",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        position: "relative",
        px: 20,
      }}
    >
      {/* Footer text block*/}
      <Grid item>
        <Grid container sx={{ flexDirection: "column" }}>
          <Typography variant="h1">Contact</Typography>
          <Typography variant="h6" sx={{maxWidth: '600px'}}>
            Always looking for opportunities to co-create something great.
            Reachable via email, other socials provided if needed.
          </Typography>
          <Grid item sx={{ width: "100px", mt: 1 }}>
            <Grid
              container
              sx={{ flexWrap: "nowrap", justifyContent: "space-between" }}
            >
              <GitHubIcon />
              <LinkedInIcon />
              <AlternateEmailIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={{ alignSelf: "flex-end", mr: 8 }}>
        <Grid container sx={{ flexWrap: "nowrap", alignItems: "center" }}>
          <Typography variant="h4">contactz&nbsp;</Typography>
          <Grid item>
            <ArrowOutwardIcon
              sx={{
                transform: "scale(1.8)",

                strokeColor: "#E5D6C4",
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Footer image */}
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          //height: "100vh",
          bottom: 0,
          left: 0,
        }}
      >
        <img
          src={forefrontImage}
          alt="Forefront"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>
    </Grid>
  );
}
