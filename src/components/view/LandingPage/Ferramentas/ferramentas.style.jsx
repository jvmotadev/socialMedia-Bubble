import styled from "styled-components";

export const FerramentaStyle = styled.div`
  max-width: 100%;
  height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary.p3};
  color: ${(props) => props.theme.colors.black.b100};
  overflow-y: hidden;

  .container {
    max-width: 280px;
    margin: 0 auto;
  }

  span {
    color: ${(props) => props.theme.colors.primary.p1};
  }

  .ferramentas:nth-child(2) {
    display: grid;
    gap: 20px;
    margin-top: 20px;

    p {
      margin-top: 8px;
      margin-left: 1rem;
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

    h1 {
      font-size: 3rem;
    }

    .ferramentas:nth-child(2) {
      display: grid;
      gap: 20px;
      margin-top: 1.25rem;

      h3 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
        margin-top: 0.5rem;
        margin-left: rem;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .container {
      max-width: 70%;
    }
  }

  @media (min-width: 1025px) {
    .container {
      max-width: 70%;
    }

    h1 {
      font-size: 3rem;
    }

    .ferramentas:nth-child(2) {
      display: grid;
      gap: 2rem;
      margin-top: 3rem;

      h3 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
        margin-top: 0.5rem;
        margin-left: rem;
      }
    }
  }
`