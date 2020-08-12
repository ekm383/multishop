import React from "react";
import styled from "styled-components";

const Hero = ({ children }) => {
  return <StyledHero>{children}</StyledHero>;
};

const StyledHero = styled.div`
  width: 95vw;
  height: 500px;
  margin: 0rem auto;
  background: var(--secondaryColor);
  border-radius: 10px;
`;

export default Hero;
