import styled from "styled-components";

export const FiquePorDentroStyle = styled.div`
  max-width: 100%;
  height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: ${(props) => props.theme.colors.primary.p2};
  color: ${(props) => props.theme.colors.black.b100};
  overflow-y: hidden;

  .container {
    display: grid;
    place-items: center;
    gap: 1.25rem;
    max-width: 280px;
    margin: 0 auto;
  }

  @media (min-width: 400px) and (max-width: 768px) {
    .container {
      padding: 0 20px;
      max-width: 450px;
    }

    h2 {
        font-size: 3rem;
     }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .container {
      max-width: 70%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .container {
      max-width: 70%;
    }

    h2 {
      font-size: 3rem;
    }

  }

  @media (min-width: 1025px) {
    .container {
      max-width: 70%;
    }

    h2 {
      font-size: 4rem;
    }

  }
`