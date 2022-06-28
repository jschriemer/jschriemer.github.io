/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import { Footer } from "../components/Footer";

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
  return (
    <div style={{ display: "flex" }}>
      {!mobile ? (
        <HomeContainer>
          <div style={{ display: "flex", paddingBottom: "20px" }}>
            <p>hello</p>
          </div>
        </HomeContainer>
      ) : (
        <div  style={{ display: "flex" }}>
        <HomeContainer>
          <div style={{ display: "flex", paddingBottom: "20px" }}>
            <p>goodbye</p>
          </div>
        </HomeContainer>
      </div>
      )}
      <Footer />
    </div>
  );
}

export default LandingPage;
