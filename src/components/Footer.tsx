/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { useState } from "react";

const mobile = `@media (max-width: 500px)`;

const AboutFooter = styled.footer`
  display: flex;
  justify-content: space-around;

  ${mobile} {
    transform: rotate(-90deg);
  }
}
`;

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

export function Footer() {

  return (
    <AboutFooter>
      <GithubContainer></GithubContainer>
      <FooterEmail>
        <p>jschriem@gmail.com</p>
      </FooterEmail>
    </AboutFooter>
  );
}
