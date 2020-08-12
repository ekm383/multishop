import React, { Component } from "react";
import PromoBox from "./PromoBox";
import styled from "styled-components";
import Title from "../title/Title";

class PromoList extends Component {
  state = {
    sections: [
      {
        title: "Promo One",
        subtitle: "Latest Deals Here",
        imageUrl: "",
        id: 1,
      },
      {
        title: "Promo Two",
        subtitle: "Another Set Here",
        imageUrl: "",
        id: 2,
      },
      {
        title: "Promo Three",
        subtitle: "Third Set Here",
        imageUrl: "",
        size: "large",
        id: 3,
      },
    ],
  };
  render() {
    return (
      <StyledPromoList>
        {this.state.sections.map(({ imageUrl, id, title, subtitle, size }) => (
          <PromoBox imageUrl={imageUrl} key={id} size={size}>
            <Title title={title} subtitle={subtitle} />
          </PromoBox>
        ))}
      </StyledPromoList>
    );
  }
}

const StyledPromoList = styled.div`
  width: 95vw;
  margin: 0rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .large {
    width: 95vw;
  }
`;

export default PromoList;
