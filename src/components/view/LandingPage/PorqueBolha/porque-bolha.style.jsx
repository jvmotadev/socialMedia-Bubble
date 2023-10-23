import styled from "styled-components";

export const PorqueBolhaStyle = styled.div`
  max-width: 100%;
  height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.black.b100};
  color: ${(props) => props.theme.colors.white.w50};
  overflow-y: hidden;

  .container {
    max-width: 280px;
    margin: 0 auto;

    .paragrafo-porque {
      margin-top: 1rem;
      color: ${(props) => props.theme.colors.white.w200};
    }
  }

  .lista-beneficios {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-top: 1rem;

    div {
      display: grid;
      grid-template-columns: 40px 1fr;
      align-items: center;
    }

    div p {
      grid-column: 1 / -1
    }
  }

  @media (min-width: 400px) and (max-width: 768px) {
    .container {
      padding: 0 20px;
      max-width: 450px;
    }

    .lista-beneficios {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 2rem;
      gap: 2rem;
    }

    h1 {
      font-size: 3rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .container {
      max-width: 70%;
    }

    .lista-beneficios {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 2rem;
      gap: 3rem;
    }

    h1 {
      font-size: 4rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .container {
      max-width: 70%;
    }

    .lista-beneficios {
      grid-template-columns: repeat(2, 1fr);

      div h3 {
        font-size: 1.5rem;
      }

      div p {
        font-size: 1.125rem;
      }
    }
  }

  @media (min-width: 1025px) {
    .container {
      max-width: 70%;
    }

    h1 {
      width: 600px;
      font-size: 4rem;
    }

    .lista-beneficios {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.25rem;
      margin-top: 4rem;

      div h3 {
        font-size: 1.5rem;
      }

      div p {
        font-size: 1.125rem;
      }
    }
  }
`