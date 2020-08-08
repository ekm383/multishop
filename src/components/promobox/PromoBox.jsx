import React from "react";
import styled from "styled-components";

const PromoBox = ({ children, style }) => {
  return <StyledPromoBox style={style}>{children}</StyledPromoBox>;
};

const StyledPromoBox = styled.div`
  width: 47vw;
  height: 250px;
  margin-top: 1rem;
  background: palevioletred;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 46vw;
  }
`;

export default PromoBox;
