import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">MULTISHOP</div>
      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  width: 95vw;
  margin: 0 auto 3rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    padding: 2.5rem 0rem;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export default Navbar;
