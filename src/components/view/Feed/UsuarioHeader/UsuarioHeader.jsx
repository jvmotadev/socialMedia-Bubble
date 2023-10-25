/* eslint-disable react/prop-types */
import styled from "styled-components";

const UsuarioHeader = ({ nomeUsuario }) => {
    return (
        <StyleHeaderFeed>
            <div className="conteiner">
                <div className="box-1">
                    <img
                        className="foto"
                        src="../../../../public/foto-ana-luiza.png"
                        alt="foto usuario"
                    />
                    <p className="nomeUsuario">{nomeUsuario}</p>
                </div>
                <div className="box-2">
                    <img
                        className="icone"
                        src="./menu-hamburguer-grande.svg"
                        alt="icone hamburguer"
                    />
                </div>
            </div>
        </StyleHeaderFeed>
    );
};

export default UsuarioHeader;

const StyleHeaderFeed = styled.div`
  max-width: 100%;

  .conteiner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
  }

  .box-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.5px;
  }

  .foto {
    border-radius: 100px;
  }
  .nomeUsuario {
    color: ${(props) => props.theme.colors.black.b200};
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 133.333% */
  }

  @media (min-width: 400px) and (max-width: 600px) {
    .conteiner {
      max-width: 600px;
    }
    .foto {
      width: 105px;
      height: 108.15px;
      flex-shrink: 0;
    }
    .nomeUsuario {
      color: ${(props) => props.theme.colors.black.b200};
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px; /* 133.333% */
    }

    .icone {
      width: 32px;
      height: 24px;
      flex-shrink: 0;
    }

    @media (min-width: 601px) and (max-width: 1023px) {
      .conteiner {
        max-width: 1023px;
      }

      .foto {
        width: 105px;
        height: 108.15px;
        flex-shrink: 0;
      }
      .nomeUsuario {
        color: ${(props) => props.theme.colors.black.b200};
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 133.333% */
      }
    }

    @media (min-width: 1024px) {
      .nomeUsuario {
        color: ${(props) => props.theme.colors.black.b200};
        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 133.333% */
      }
      .icone {
        width: 44.8px;
        height: 24px;
        flex-shrink: 0;
      }
    }
  }
`;
