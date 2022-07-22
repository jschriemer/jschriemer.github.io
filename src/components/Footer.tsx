/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { useState } from "react";


export interface Themes {
  colors: {
    primary: string;
    background: string;
    secondaryBackground: string;
  };
}

const mobile = `@media (max-width: 500px)`;

const AboutFooter = styled.footer<Themes>(
  {
  display: "flex",
  justifyContent: "space-around",
  position: "absolute",
  bottom: 0,
  width: "100%"
  },
  (props) => ({
    color: props.colors.primary,
    backgroundColor: props.colors.background,
  }),
)

const FooterEmail = styled.div`
  color: grey;
  font-family: Good-Times-Regular;
  width:100%;
  text-align: center;
  postion: relative;
  z-index: 1000;

  ${mobile} {
    top: 130px;
    right: 300px;
    position: absolute;
  }
}
`;

const GithubContainer = styled.svg`
  margin-top: 25px;
  position: fixed;
  bottom: 0;
  right: 0;

  ${mobile} {
    top: 130px;
    right: 800px;
  }
}
`;

export function Footer(props: Themes) {


  return (
    <AboutFooter colors={props.colors}>
      <GithubContainer></GithubContainer>
      <FooterEmail>
        <p>jschriem@gmail.com</p>
      </FooterEmail>
    </AboutFooter>
  );
}
