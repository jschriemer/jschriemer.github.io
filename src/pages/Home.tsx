/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import J from "../images/J.png";
import JHL from "../images/JHL.png";
import O from "../images/O.png";
import H from "../images/H.png";
import N from "../images/N.png";
import S from "../images/S.png";
import C from "../images/C.png";
import H2 from "../images/H2.png";
import R from "../images/R.png";
import I from "../images/I.png";
import E from "../images/E.png";
import M from "../images/M.png";
import E2 from "../images/E2.png";
import R2 from "../images/R2.png";
import OHL from "../images/OHL.png";
import HHL from "../images/HHL.png";
import NHL from "../images/NHL.png";
import SHL from "../images/SHL.png";
import CHL from "../images/CHL.png";
import H2HL from "../images/H2HL.png";
import RHL from "../images/RHL.png";
import IHL from "../images/IHL.png";
import EHL from "../images/EHL.png";
import MHL from "../images/MHL.png";
import E2HL from "../images/E2HL.png";
import R2HL from "../images/R2HL.png";
import About from "./About";
import { Footer } from "../components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link,
} from "react-router-dom";

const tablet = `@media (max-width: 800px)`;
const mobile = `@media (max-width: 500px)`;

const LetterContainer = styled.div`
  max-width: 800px;
  ${mobile} {
    max-width: 500px;
  }
`;

const LetterJ = styled.img`
  width: 170px;
`;
const Letter = styled.img`
  width: 220px;
`;

const LetterER = styled.img`
  width: 180px;
  height: 230px;
`;

const LetterM = styled.img`
  width: 300px;
  height: 320px;
`;

const VerticalBlackLine = styled.hr`
width: 100%;
color: black;
transform: rotate(180deg);
`;

function Home() {
  return (
    <div style={{ display: "flex" }}>
      {!mobile ? (
        <LetterContainer>
          <div style={{ display: "flex", paddingBottom: "20px" }}>
            <LetterJ
              src={J}
              onMouseOver={(e) => (e.currentTarget.src = JHL)}
              onMouseOut={(e) => (e.currentTarget.src = J)}
            />
            <LetterJ
              src={O}
              onMouseOver={(e) => (e.currentTarget.src = OHL)}
              onMouseOut={(e) => (e.currentTarget.src = O)}
            />
            <LetterJ
              src={H}
              onMouseOver={(e) => (e.currentTarget.src = HHL)}
              onMouseOut={(e) => (e.currentTarget.src = H)}
            />
            <LetterJ
              src={N}
              onMouseOver={(e) => (e.currentTarget.src = NHL)}
              onMouseOut={(e) => (e.currentTarget.src = N)}
            />
          </div>
          <div>
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <Letter
                src={S}
                onMouseOver={(e) => (e.currentTarget.src = SHL)}
                onMouseOut={(e) => (e.currentTarget.src = S)}
              />
              <Letter
                src={C}
                onMouseOver={(e) => (e.currentTarget.src = CHL)}
                onMouseOut={(e) => (e.currentTarget.src = C)}
              />
              <Letter
                src={H2}
                onMouseOver={(e) => (e.currentTarget.src = H2HL)}
                onMouseOut={(e) => (e.currentTarget.src = H2)}
              />
            </div>
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <Letter
                src={R}
                onMouseOver={(e) => (e.currentTarget.src = RHL)}
                onMouseOut={(e) => (e.currentTarget.src = R)}
              />
              <Letter
                src={I}
                onMouseOver={(e) => (e.currentTarget.src = IHL)}
                onMouseOut={(e) => (e.currentTarget.src = I)}
              />
              <Letter
                src={E}
                onMouseOver={(e) => (e.currentTarget.src = EHL)}
                onMouseOut={(e) => (e.currentTarget.src = E)}
              />
            </div>
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <LetterM
                src={M}
                onMouseOver={(e) => (e.currentTarget.src = MHL)}
                onMouseOut={(e) => (e.currentTarget.src = M)}
              />
              <LetterER
                src={E2}
                onMouseOver={(e) => (e.currentTarget.src = E2HL)}
                onMouseOut={(e) => (e.currentTarget.src = E2)}
              />
              <LetterER
                src={R2}
                onMouseOver={(e) => (e.currentTarget.src = R2HL)}
                onMouseOut={(e) => (e.currentTarget.src = R2)}
              />
            </div>
          </div>
        </LetterContainer>
      ) : (
        <div  style={{ display: "flex" }}>
        <LetterContainer>
          <div style={{ display: "flex", paddingBottom: "20px" }}>
            <LetterJ
              src={J}
              onMouseOver={(e) => (e.currentTarget.src = JHL)}
              onMouseOut={(e) => (e.currentTarget.src = J)}
            />
            <LetterJ
              src={O}
              onMouseOver={(e) => (e.currentTarget.src = OHL)}
              onMouseOut={(e) => (e.currentTarget.src = O)}
            />
            <LetterJ
              src={H}
              onMouseOver={(e) => (e.currentTarget.src = HHL)}
              onMouseOut={(e) => (e.currentTarget.src = H)}
            />
            <LetterJ
              src={N}
              onMouseOver={(e) => (e.currentTarget.src = NHL)}
              onMouseOut={(e) => (e.currentTarget.src = N)}
            />
          </div>
          <div>
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <Letter
                src={S}
                onMouseOver={(e) => (e.currentTarget.src = SHL)}
                onMouseOut={(e) => (e.currentTarget.src = S)}
              />
              <Letter
                src={C}
                onMouseOver={(e) => (e.currentTarget.src = CHL)}
                onMouseOut={(e) => (e.currentTarget.src = C)}
              />
              <Letter
                src={H2}
                onMouseOver={(e) => (e.currentTarget.src = H2HL)}
                onMouseOut={(e) => (e.currentTarget.src = H2)}
              />
            </div>
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <Letter
                src={R}
                onMouseOver={(e) => (e.currentTarget.src = RHL)}
                onMouseOut={(e) => (e.currentTarget.src = R)}
              />
              <Letter
                src={I}
                onMouseOver={(e) => (e.currentTarget.src = IHL)}
                onMouseOut={(e) => (e.currentTarget.src = I)}
              />
              <Letter
                src={E}
                onMouseOver={(e) => (e.currentTarget.src = EHL)}
                onMouseOut={(e) => (e.currentTarget.src = E)}
              />
            </div>
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <LetterM
                src={M}
                onMouseOver={(e) => (e.currentTarget.src = MHL)}
                onMouseOut={(e) => (e.currentTarget.src = M)}
              />
              <LetterER
                src={E2}
                onMouseOver={(e) => (e.currentTarget.src = E2HL)}
                onMouseOut={(e) => (e.currentTarget.src = E2)}
              />
              <LetterER
                src={R2}
                onMouseOver={(e) => (e.currentTarget.src = R2HL)}
                onMouseOut={(e) => (e.currentTarget.src = R2)}
              />
            </div>
          </div>
        </LetterContainer>
        <VerticalBlackLine/>
        <Link to="./about">About</Link>
        <Link to="./work">Work</Link>
        <Link to="./contact">Contact</Link>
      </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;
