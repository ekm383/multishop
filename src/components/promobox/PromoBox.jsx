import React from "react";
import styled from "styled-components";

const PromoBox = ({ children, imageUrl, size }) => {
  return (
    <StyledPromoBox
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size}`}
    >
      {children}
    </StyledPromoBox>
  );
};

const StyledPromoBox = styled.div`
  width: 47vw;
  height: 250px;
  margin-top: 1rem;
  background: palevioletred;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    width: 46vw;
  }
`;

export default PromoBox;
