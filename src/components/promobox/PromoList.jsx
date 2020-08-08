import React from "react";
import PromoBox from "./PromoBox";
import styled from "styled-components";
import Title from "../title/Title";

const DiscountList = () => {
  return (
    <StyledPromoList>
      <PromoBox>
        <Title title="Promo One" subtitle="Latest Deals Here" />
      </PromoBox>
      <PromoBox>
        <Title title="Promo Two" subtitle="Another Set Here" />
      </PromoBox>
      <PromoBox style={{ width: "95vw" }}>
        <Title title="Promo Three" subtitle="Third Set Here" />
      </PromoBox>
    </StyledPromoList>
  );
};

const StyledPromoList = styled.div`
  width: 95vw;
  margin: 0rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default DiscountList;
