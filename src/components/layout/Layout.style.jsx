import styled from "styled-components";

export const GridLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 376px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 564px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 752px;
  }

  @media (min-width: 1025px) {
    width: 1180px;
  }
`;
