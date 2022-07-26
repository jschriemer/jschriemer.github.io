/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, keyframes, ThemeProvider } from "@emotion/react";
import React, { useRef, useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import flowerBackground from "../images/flowers.png";
import Scroll_down from "../images/scroll_down.png";
import Scroll_down_blue from "../images/scroll_down_blue.png";
import JH from "../images/JH_.png";
import JH_blue from "../images/JH_BLUE.png";
import ON from "../images/ON.png";
import ON_blue from "../images/ON_BLUE.png";
//import { ReactComponent as ScrollDownFlower } from "../images/scroll_down_flower.svg";

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

const ScollDownContainer = styled.div<Themes>(
  {
    marginTop: "-100%",
    width: "50%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  },
  (props) => ({
    color: props.colors.primary,
    /*backgroundColor: props.colors.background,*/
  })
);


const TitleContainer = styled.div`
    margin-top: -3%;
    width: 100%;
    display: flex;
    justify-content: center;
 `

const bounce = keyframes`
from, 20%, 53%, 80%, to {
  transform: translate3d(0,0,0);
}

40%, 43% {
  transform: translate3d(0, -10px, 0);
}

70% {
  transform: translate3d(0, -5px, 0);
}

90% {
  transform: translate3d(0,-2px,0);
}
`;

const ScollDownFlower = styled.img<Themes>(
  {
    width: "20%",
    marginLeft: '-190px',
    animation: `${bounce} 5s ease infinite`,
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
                  <img src={Scroll_down} alt="scroll down" />
                  {/*<ScrollDownFlower />*/}
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
                      {/*<PrimaryText colors={theme.colors}>
                        This text should be {theme.colors.primary} color!
                  </PrimaryText>*/}
                      <TitleContainer>
                      <img
                          src={theme === lightTheme ? JH : JH_blue}
                          style={{ width: "90%"}}
                          alt="John"
                        />
                        <img
                          src={theme === lightTheme ? ON : ON_blue}
                          style={{ width: "90%", marginLeft: "-90%"}}
                          alt="Schriemer"
                        />
                        <button onClick={handleClick}>
                        Change to {themeName} mode
                      </button>
                        </TitleContainer>
                      <ScollDownContainer colors={theme.colors}>
                        <img
                          src={theme === lightTheme ? Scroll_down : Scroll_down_blue}
                          style={{ width: "20%" }}
                          alt="scroll down"
                        />
                        <ScollDownFlower
                          colors={theme.colors}
                          src={theme === lightTheme ?
                            require("../images/scroll_down_flower.svg").default : require("../images/scroll_down_flower_blue.png").default
                          }
                          alt="mySvgImage"
                        />
                      </ScollDownContainer>
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
