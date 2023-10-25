/* eslint-disable react/prop-types */
import styled from "styled-components"

const Posts = ({ nomeUsuario, date, conteudo }) => {
    return (
        <StylesPosts>
            <div className="conteiner">
                <div className="usuario">
                    <img
                        className="foto"
                        src="../../../../public/foto-ana-luiza.png"
                        alt="foto usuario"
                    />
                    <div className="dados-usuario">
                        <h1 className="nomeUsuario">{nomeUsuario}</h1>
                        <p className="date">{date}</p>
                    </div>
                </div>
                <div className="conteudo">
                    <p className="p">{conteudo}</p>
                </div>
                <div className="icones">
                    <img src="./curtidas.svg" alt="" />
                    <img width='22.px' src="./icons8-lixeira.svg" />
                </div>
            </div>
        </StylesPosts>
    )
}

export default Posts

const StylesPosts = styled.div`
    display: flex;
    justify-content: center;
    .conteiner{
        border-radius: 24px;
        background: ${(props) => props.theme.colors.primary.p1};
        width: 376px;
        height: 280px;
    }

    .usuario{
        display: flex;
        gap: 30px;
        padding: 2rem;
    }

    .dados-usuario{
        display: flex;
        flex-direction: column;
    }

    .nomeUsuario{
        color: ${(props) => props.theme.colors.black.b200};
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 133.333% */
    }

    .date{
        color: ${(props) => props.theme.colors.grey.g400};
        font-family: Poppins;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px; /* 120% */
    }

    .conteudo{
        display: flex;
        justify-content: center;
    }

    .p{
        display: flex;
        justify-content: center;
        width: 248px;
        height: 127px;
    }

    .icones{
        display: flex;
        padding: 0 30px;
        justify-content: space-between;
    }

    .foto{
        width: 50px;
        border-radius: 100px;
    }
`