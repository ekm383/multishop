import React from "react";
import Copyright from "./copyright";
import styled from "styled-components";

const footer = () => {
  return (
    <StyledFooter>
      <Copyright />
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 100vw;
  background: var(--darkGray);
  margin-top: 2rem;
  padding: 2rem 0rem;
`;

export default footer;
