import React from "react";
import styled from "styled-components";
import Category from "./Category";
import Title from "../title/Title";
import Hero from "../header/Hero";

const CategoryList = () => {
  return (
    <>
      <Hero>
        <Title
          title="Categories"
          subtitle="Find your favorite items by local artists."
        ></Title>
      </Hero>
      <StyledList>
        <Category>
          <a href="">
            <Title title="shop" subtitle="9 Products | Self-Care" />
          </a>
        </Category>
        <Category>
          <a href="">
            <Title title="shop" subtitle="9 Products | Self-Care" />
          </a>
        </Category>
        <Category>
          <a href="">
            <Title title="shop" subtitle="9 Products | Self-Care" />
          </a>
        </Category>
        <Category>
          <a href="">
            <Title title="shop" subtitle="9 Products | Self-Care" />
          </a>
        </Category>
        <Category>
          <a href="">
            <Title title="shop" subtitle="9 Products | Self-Care" />
          </a>
        </Category>
        <Category>
          <a href="">
            <Title title="shop" subtitle="9 Products | Self-Care" />
          </a>
        </Category>
        <Category>
          <a href="">
            <Title title="shop" subtitle="9 Products | Self-Care" />
          </a>
        </Category>
        <Category>
          <a href="">
            <Title title="shop" subtitle="9 Products | Self-Care" />
          </a>
        </Category>
      </StyledList>
    </>
  );
};

const StyledList = styled.div`
  display: flex;
  width: 95vw;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: var(--darkGray);
  }
`;

export default CategoryList;
