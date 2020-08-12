import React from "react";
import styled from "styled-components";

const Faq = ({ question, answer }) => {
  return (
    <StyledFaq>
      <h2>{question}</h2>
      <p>{answer}</p>
    </StyledFaq>
  );
};

const StyledFaq = styled.div`
  width: 800px;
  margin: 0 auto;
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
    margin: 1rem 0rem;
  }
  @media (max-width: 768px) {
    width: 400px;
  }
`;

export default Faq;
