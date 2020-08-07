import React from "react";
import Hero from "./Hero";
import Button from "../button/button";

const Header = () => {
  return (
    <>
      <Hero
        title="This Week"
        subtitle="Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts."
      >
        <Button text="view collection" />
      </Hero>
    </>
  );
};

export default Header;
