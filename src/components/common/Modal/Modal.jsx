/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";
import { postPost } from "../../../services/postApi";

const Modal = ({ nomeUsuario, fechaModal, handleBuscaPost, openModal }) => {
  const [conteudo, setConteudo] = useState("");
  const [curtidas, setCurtidas] = useState('0');

  const handleClose = (e) => {
    e.target.id === 'modal' && fechaModal()
  }

  async function handlePostarPost(idUsuario) {
    const body = {
      conteudo,
      curtidas,
      idUsuario,
    };

    const resposta = await postPost(body);

    handleBuscaPost()
    
    if (resposta.success) {
        console.log('Sucesso ao postar');
    } else {
      console.log('Erro ao postar');
    }
    openModal(false)
  }

  return (
    <StylesModal>
      <div className="conteiner">
        <div className="usuario">
          <img
            className="foto"
            src="../../../../public/foto-ana-luiza.png"
            alt="foto usuario"
          />
          <div className="dados-usuario">
            <h1 className="nomeUsuario">{nomeUsuario}</h1>
          </div>
          <div className="close">
            <button onClick={ () => openModal(false)}><img src="../../../../public/icons8-close.svg" alt="icone close modal" /></button>
          </div>
        </div>
        <div className="conteudo">
          <textarea
            className="textarea"
            placeholder="compartilhe sua bolha de pensamento..."
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          ></textarea>
        </div>
        <button className="btn" onClick={() => {
            handlePostarPost('653982b626db01d6e1711f79')
        }}>Postar</button>
      </div>
    </StylesModal>
  )
}

const StylesModal = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 300px;
    .conteiner{
        border-radius: 24px;
        background: ${(props) => props.theme.colors.primary.p1};
        width: 376px;
        height: 380px;
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

    .close{
      margin-left: 60%;
      cursor: pointer;
    }

    .conteudo{
        display: flex;
        justify-content: center;
        width: 100%;
        gap:3px;
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

    .textarea{
        width: 80%;
        height: 13vh;
        color: ${(props) => props.theme.colors.black.b100};
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
    }

    .btn{
        width: 120px;
        padding: 16px 32px;
        border-radius: 24px;
        background: ${(props) => props.theme.colors.primary.p2};
        margin-left: 60%;
        margin-top: 5px;
    }

    .foto{
        width: 50px;
        border-radius: 100px;
    }

    @media (min-width: 400px) and (max-width: 600px){
        .close{
            margin-left: 50%;
        }
    }

    @media (min-width: 601px) and (max-width: 1023px){
        .conteiner{
            width: 468px;
            height: 380px;
        }
        .btn {
          margin-left: 65%;
        }
    }

    @media (min-width: 1024px) and (max-width:1300px){
        .conteiner{
            width: 560px;
            height: 380px;
        }
        .close{
            margin-left: 70%;
        } 
    }

    @media (min-width: 1301px){
        .conteiner{
            width: 780px;
            height: 380px;
        }
        .close{
            margin-left: 80%;
        }
        .btn {
          margin-left: 75%;
        }
    }
`


export default Modal