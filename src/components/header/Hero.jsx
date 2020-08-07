import React from "react";
import styled from "styled-components";

const Hero = ({ title, subtitle, children }) => {
  return (
    <StyledHero>
      <div className="titles">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {children}
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  width: 95vw;
  height: 500px;
  margin: 0rem auto;
  background: var(--secondaryColor);
  border-radius: 10px;
  display: flex;
  .titles {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5%;
    h1 {
      font-size: 4rem;
    }
    p {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      line-height: 1.9rem;
    }
  }
  @media (max-width: 768px) {
    .titles {
      width: 95vw;
    }
  }
`;

export default Hero;
