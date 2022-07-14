/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { useRef } from "react";
import { Footer } from "../components/Footer";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import flowerBackground from "../images/flowers.png";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tablet = `@media (max-width: 800px)`;
const mobile = `@media (max-width: 500px)`;

const HomeContainer = styled.div`
  max-width: 800px;
  ${mobile} {
    max-width: 500px;
  }
`;

function LandingPage() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div style={{ display: "flex" }}>
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
              style={{ backgroundColor: "#5E8062" }}
            >
              <Footer />
              <p>yessir</p>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={1}
              style={{ backgroundColor: "#805E73" }}
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
  );
}

export default LandingPage;
