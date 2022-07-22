/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { useRef, useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import flowerBackground from "../images/flowers.png";
import { ThemeProvider } from "@emotion/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tablet = `@media (max-width: 800px)`;
const mobile = `@media (max-width: 500px)`;

export interface Themes {
  colors: {
    primary: string;
    background: string;
    secondaryBackground: string;
  };
}

const lightTheme = {
  colors: {
    primary: "black",
    background: "#FCF6E4",
    secondaryBackground: "#FFCB28",
  },
};

const darkTheme = {
  colors: {
    primary: "#C4D8DF",
    background: "#111944",
    secondaryBackground: "#5E6380",
  },
};

const PrimaryText = styled.div<Themes>(
  {
    padding: 20,
  },
  (props) => ({
    color: props.colors.primary,
    /*backgroundColor: props.colors.background,*/
  })
);

function LandingPage() {
  const parallax = useRef<IParallax>(null!);
  const [theme, setTheme] = useState(lightTheme);
  const [themeName, setThemeName] = useState(Object.keys(theme)[0]);

  const [isMounted, setIsMounted] = useState(false);

  const handleClick = () => {
    // toggle theme
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
    setThemeName(theme === lightTheme ? "darkTheme" : "lightTheme");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <ThemeProvider theme={theme}>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginLeft: "-8px",
              marginTop: "-8px",
            }}
          >
            {!mobile ? (
              <div>
                <div style={{ display: "flex", paddingBottom: "20px" }}>
                  <p>hello</p>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <Parallax ref={parallax} pages={3}>
                  <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                      backgroundColor: theme.colors.background,
                      backgroundImage: `url(${flowerBackground})`,
                      backgroundSize: "cover",
                      width: "100%",
                    }}
                  >
                    <div>
                      <p>goodbye</p>
                      <PrimaryText colors={theme.colors}>
                        This text should be {theme.colors.primary} color!
                      </PrimaryText>
                      <button onClick={handleClick}>
                        Change to {themeName} mode
                      </button>
                    </div>
                  </ParallaxLayer>
                  <ParallaxLayer
                    offset={1}
                    speed={1}
                    style={{
                      backgroundColor: theme.colors.secondaryBackground,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <p>hello</p>
                    </div>
                  </ParallaxLayer>
                  <ParallaxLayer
                    offset={2}
                    speed={1}
                    style={{
                      backgroundColor: theme.colors.secondaryBackground,
                      width: "100%",
                    }}
                  >
                    <Footer colors={theme.colors} />
                    <p>yessir</p>
                  </ParallaxLayer>
                </Parallax>
              </div>
            )}
          </div>
        </ThemeProvider>
      )}
    </>
  );
}

export default LandingPage;
