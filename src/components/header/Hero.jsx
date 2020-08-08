import React from "react";
import styled from "styled-components";
import Title from "../title/Title";
import Button from "../button/button";

const Hero = () => {
  return (
    <StyledHero>
      <Title
        title="This Week"
        subtitle="Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts."
      >
        <Button text="view collection" />
      </Title>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  width: 95vw;
  height: 500px;
  margin: 0rem auto;
  background: var(--secondaryColor);
  border-radius: 10px;
`;

export default Hero;
