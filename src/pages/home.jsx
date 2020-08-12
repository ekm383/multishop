import React from "react";
import Hero from "../components/header/Hero";
import PromoList from "../components/promobox/PromoList";
import Title from "../components/title/Title";
import Button from "../components/button/button";

const home = () => {
  return (
    <>
      <Hero>
        <Title
          title="This Week"
          subtitle="Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts."
        >
          <Button text="view collection" />
        </Title>
      </Hero>
      <PromoList />
    </>
  );
};

export default home;
