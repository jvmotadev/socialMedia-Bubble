import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: ${(props) => props.theme.colors.black.b200};
  color: ${(props) => props.theme.colors.white.w50};
  max-width: 100vw;
  height: 24rem;

  .container {
    max-width: 280px;
    margin: 2em auto;
    display: grid;
    gap: 2rem;
  }

  img {
    width: 5rem;
  }

  h3 {
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  .menu {
    display: grid;
    gap: 0.5rem;
  }

  @media (min-width: 400px) and (max-width: 768px) {
    .container {
      padding: 0 20px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 18rem;
    .container {
      max-width: 70%;
      grid-template-columns: repeat(3, 1fr);
    }

    img {
      width: 7rem;
    }
  }

  @media (min-width: 1025px) {
    height: 18rem;
    .container {
      max-width: 70%;
      grid-template-columns: repeat(3, 1fr);
    }

    img {
      width: 10rem;
    }
  }
`