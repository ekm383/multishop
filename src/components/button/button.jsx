import React from "react";
import styled from "styled-components";

const button = ({ text }) => {
  return <Button>{text}</Button>;
};

const Button = styled.div`
  width: 150px;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  background: none;
  border: 1px solid var(--darkGray);
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: var(--darkGray);
    color: white;
  }
`;

export default button;
