import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import aboutBackground from "../../assets/images/about-background.png";

export default function About() {
  return (
    <Grid
      container
      sx={{
        overflow: "hidden",
        //backgroundImage: `url(${aboutBackground})`,
        backgroundColor: "#E5D6C4",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Grid
        item
        sx={{
          width: "80%",
          height: "600px",
          backgroundColor: "black",
          opacity: 0.05,
          alignSelf: "center",
        }}
      >
        <Typography variant="h1">About</Typography>
      </Grid>
      <Link
        to="/"
        data-barba="link"
        style={{ color: "#EDE5D8", textDecoration: "none" }}
      >
        <Typography variant="h5">Home</Typography>
      </Link>
    </Grid>
  );
}
