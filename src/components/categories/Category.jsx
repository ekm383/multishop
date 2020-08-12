import React from "react";
import styled from "styled-components";

const Category = ({ children, style }) => {
  return <StyledCateogry style={{ style }}>{children}</StyledCateogry>;
};

const StyledCateogry = styled.div`
  width: 23vw;
  height: 250px;
  background: lightgray;
  border-radius: 10px;
  margin-top: 1rem;
  @media (max-width: 768px) {
    width: 46vw;
  }
`;

export default Category;
