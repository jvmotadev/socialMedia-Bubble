import styled from "styled-components";

export const PaginaInicialStyle = styled.div`
  max-width: 100vw;
  height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary.p1};
  color: ${(props) => props.theme.colors.black.b100};
  overflow-y: hidden;

  .container {
    max-width: 280px;
    margin: 0 auto;
  }

  h1 {
    position: relative;
    z-index: 2;
  }

  img {
    max-width: 500px;
    position: absolute;
    z-index: 1;
    top: 100px;
    right: 20px;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    .container {
      max-width: 70%;
    }

    h1 {
      position: relative;
      font-size: 3rem;
    }

    img {
      max-width: 700px;
      position: absolute;
      z-index: 1;
      top: -40px;
      right: 0px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .container {
      max-width: 70%;
    }

    h1 {
      font-size: 3rem;
    }

    img {
      max-width: 700px;
      position: absolute;
      top: -40px;
      /* right: -200px; */
    }
  }

  @media (min-width: 1025px) {
    .container {
      max-width: 70%;
    }

    h1 {
      font-size: 3.5rem;
    }

    img {
      max-width: 900px;
      top: -40px;
      right: 200px;
    }
  }
`