import { Grid, Typography } from "@mui/material";
import forefrontImage from "../../assets/images/header-forefront.png";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import IMG_6775 from "../../assets/images/IMG_6775.png";

export default function Contact() {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundColor: "#E5D6C4",
        color: "#FFC41A",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        position: "relative",
        px: 20,
        backgroundImage: `url(${IMG_6775})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Footer text block*/}
      {/* to do add glass effect on box */}
      <Grid item sx={{ border: 1 }}>
        <Grid container sx={{ flexDirection: "column" }}>
          <Typography variant="h1">Contact</Typography>
          <Typography variant="h6" sx={{ maxWidth: "600px" }}>
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

      <Grid
        item
        sx={{
          alignSelf: "flex-end",
          mr: 0,
          border: 1,
          height: "600px",
          width: "400px",
          backgroundImage: `url(${IMG_6775})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Grid
          container
          sx={{
            flexWrap: "nowrap",
            color: "#FFC41A",
            flexDirection: "column",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          {/*  Contact */}
          <Grid
            item
            sx={{
              alignSelf: "flex-end",
              position: "absolute",
              bottom: 10,
              right: 0,
            }}
          >
            <Grid container sx={{ alignItems: "center" }}>
              <Typography variant="h4">contact&nbsp;</Typography>
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
        </Grid>
      </Grid>

      {/* Footer image */}
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          //height: "100vh",
          bottom: -2000,
          left: 0,
        }}
      >
        <img
          src={IMG_6775}
          alt="Forefront"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>
    </Grid>
  );
}
