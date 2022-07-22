/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { useRef, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import flowerBackground from "../images/flowers.png";
import { ThemeProvider, useTheme } from "@emotion/react";
import { darkTheme, lightTheme } from "../theme";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tablet = `@media (max-width: 800px)`;
const mobile = `@media (max-width: 500px)`;

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

const HomeContainer = styled.div``;

function LandingPage() {
  const parallax = useRef<IParallax>(null!);
  const currentTheme = useTheme()
  console.log(currentTheme)

  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <div style={{ display: "flex", width: "100%", marginLeft: "-8px" }}>
      {!mobile ? (
        <HomeContainer>
          <div style={{ display: "flex", paddingBottom: "20px" }}>
            <p>hello</p>
          </div>
        </HomeContainer>
      ) : (
        <div style={{ display: "flex" }}>
          <Parallax ref={parallax} pages={3}>
            <ParallaxLayer
              offset={2}
              speed={1}
              style={{ backgroundColor: "#5E8062", width: "100%" }}
            >
              <Footer />
              <p>yessir</p>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={1}
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <div style={{ display: "flex", paddingBottom: "20px" }}>
                <p>hello</p>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={0}
              speed={0}
              factor={3}
              style={{
                backgroundImage: flowerBackground,
                backgroundSize: "cover",
              }}
            >
              <HomeContainer>
                <div style={{ display: "flex", paddingBottom: "20px" }}>
                  <p>goodbye</p>
                </div>
              </HomeContainer>
            </ParallaxLayer>
          </Parallax>
        </div>
      )}
    </div>
    </ThemeProvider>
  );
}

export default LandingPage;
