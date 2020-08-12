import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/explore">Explore</NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="cart">
        <NavLink to="/cart">
          <FaShoppingCart />
          <span className="cart-amount">0</span>
        </NavLink>
      </li>
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  li {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    padding-right: 2.5rem;
    &:nth-child(6) {
      padding-right: 0rem;
    }
    a {
      padding-bottom: 0.4rem;
      text-decoration: none;
      color: var(--darkGray);
      transition: 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
        color: var(--mainColor);
      }
    }
  }
  .active {
    border-bottom: 2px solid var(--mainColor);
  }
  .cart-amount {
    font-size: 13px;
    position: relative;
    top: -9px;
    left: 2px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--secondaryColor);
    position: fixed;
    text-align: right;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 90%;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
    margin-top: 0;
    li {
      width: 90%;
      font-size: 2.5rem;
      padding-top: 1rem;
      padding-right: 1rem;
      a {
        color: #fff;
      }
    }
    .cart {
      margin-right: 2rem;
    }
  }
`;

export default RightNav;
