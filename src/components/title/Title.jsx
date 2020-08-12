import React from "react";
import styled from "styled-components";

const Title = ({ title, subtitle, children }) => {
  return (
    <StyledTitle>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  width: 80%;
  height: 100%;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    padding-left: 1rem;
    h1 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export default Title;
