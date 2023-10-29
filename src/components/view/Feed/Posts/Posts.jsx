/* eslint-disable react/prop-types */
import styled from "styled-components"

const Posts = ({ nomeUsuario, date, conteudo, deletePost, curtirPost }) => {
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
                    <button onClick={curtirPost}><img src="./curtidas.svg" alt="" /></button>
                    <button onClick={deletePost}><img width='22.px' src="./icons8-lixeira.svg" /></button>
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
        width: 100%;
    }

    .p{
        display: flex;
        justify-content: center;
        width: 248px;
        height: 127px;
        color: ${(props) => props.theme.colors.black.b100};
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 133.333% */
    }

    .icones{
        display: flex;
        padding: 0 30px;
        justify-content: space-between;
        cursor: pointer;
    }

    .add{
        margin-left: 90%;
        cursor: pointer;
    }

    .foto{
        width: 50px;
        border-radius: 100px;
    }


    @media (min-width: 400px) and (max-width: 600px){
        .conteiner{
            
        }
    }

    @media (min-width: 601px) and (max-width: 1023px){
        .conteiner{
            width: 468px;
            height: 280px;
        }

        
    }

    @media (min-width: 1024px) and (max-width:1300px){
        .conteiner{
            width: 560px;
            height: 280px;
        }    
    }

    @media (min-width: 1301px){
        .conteiner{
            width: 780px;
            height: 280px;
        }
    }
`