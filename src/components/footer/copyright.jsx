import React from "react";
import styled from "styled-components";

const copyright = () => {
  return (
    <StyledCopyright>
      <p> &#169; Copyright 2020 | MULTISHOP</p>
    </StyledCopyright>
  );
};

const StyledCopyright = styled.div`
  color: white;
  text-align: center;
`;

export default copyright;
