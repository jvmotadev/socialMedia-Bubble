import styled from "styled-components";

// para escolher quantas colunas do grid usar, faça: grid-column: span n; Sendo "n" o numero de colunas do grid que quer

// para escolher uma coluna específica, use grid-column-start e grid-column-end
// exemplo: para usar as colunas 4 a 6, faça: grid-column-start: 4; grid-column-end: 6;

export const GridLayout = styled.div`
  display: grid;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: red;

  @media (max-width: 480px) {
    width: 376px;
    grid-template-columns: repeat(12, 24px);
    gap: 8px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 564px;
    grid-template-columns: repeat(12, 36px);
    gap: 12px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 752px;
    grid-template-columns: repeat(12, 48px);
    gap: 16px;
  }

  @media (min-width: 1025px) {
    width: 1180px;
    grid-template-columns: repeat(12, 80px);
    gap: 20px;
  }
`;
