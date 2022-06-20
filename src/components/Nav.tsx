/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import React from "react";
import "../pages/home.scss";

const AboutButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: halyard-display, sans-serif;
  letter-spacing: 1px;
  text-indent: 1px;
  text-transform: uppercase;
  color: #aeff00;
  border: none;
	padding: 0;
	background: none;
	transform: rotate(-90deg);
	font-size: 2em;
	position: absolute;
	right: 50px;
  top: 170px;
  z-index: 4000;
  }
`;

const HomeButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: halyard-display, sans-serif;
  letter-spacing: 1px;
  text-indent: 1px;
  text-transform: uppercase;
  color: #aeff00;
`;

function Nav() {
  // tslint:disable-next-line: no-console
  console.log(window.location);
  return (
    <nav className="navigation">
      <Link to="/">{<HomeButton>Home</HomeButton>}</Link>
      <Link to="/about/">
        <AboutButton>
          <div className="link link--helike">
            <span>About</span>
          </div>
        </AboutButton>
      </Link>
    </nav>
  );
}

export default Nav;
