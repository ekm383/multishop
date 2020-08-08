import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Explore</li>
      <li>FAQ</li>
      <li>Login</li>
      <li>Open Shop</li>
      <li>
        <FaShoppingCart />
        <span className="cart-amount">0</span>
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
    font-size: 1rem;
    color: var(--darkGray);
    font-weight: bold;
    padding-right: 2.5rem;
    transition: 0.3s ease-in-out;
    &:nth-child(5) {
      border: 2px solid var(--darkGray);
      border-radius: 8px;
      padding: 0.5rem;
      margin-right: 3rem;
      &:hover {
        border: 2px solid var(--mainColor);
      }
    }
    &:nth-child(6) {
      padding-right: 0rem;
    }
    &:hover {
      cursor: pointer;
      color: var(--mainColor);
    }
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
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 90%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    margin-top: 0;
    li {
      width: 90%;
      font-size: 2rem;
      color: #fff;
      padding-top: 2rem;
      padding-left: 5rem;
      &:nth-child(5) {
        width: 85%;
        padding-left: 2rem;
        margin-right: 0rem;
        margin-top: 1.5rem;
      }
    }
  }
`;

export default RightNav;
