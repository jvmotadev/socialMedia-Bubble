/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { deletePost, getPosts, postPost } from '../../services/postApi';
import styled from 'styled-components';
import Posts from '../../components/view/Feed/Posts/Posts';
import UsuarioHeader from '../../components/view/Feed/UsuarioHeader/UsuarioHeader';
import Modal from '../../components/common/Modal/Modal';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  async function handleBuscaPost() {
    const resposta = await getPosts();
    setPosts(resposta);
  }

  async function handleExcluirPost(idPost) {
    const resposta = await deletePost(idPost);
    handleBuscaPost();
  }

  useEffect(() => {
    async function atualizarPost() {
      const resposta = await getPosts();
      setPosts(resposta);
    }
    atualizarPost();
  }, []);

  return (
    <>
      <StyleFeed>
        <UsuarioHeader nomeUsuario="Ana Luiza" />

        {posts.length ? (
          posts.map((post) => (
            <div key={post.id}>
              <Posts
                date={post.date}
                conteudo={post.conteudo}
                addPost={() => console.log('adicionar post')}
                deletePost={() => handleExcluirPost(post.id)}
                // curtirPost
              />
            </div>
          ))
        ) : (
          <h1 className="font-1-xl">
            Seu feed está vazio, poste algo, crie uma bolha!
          </h1>
        )}

        <button onClick={() => setModalOpen(!modalOpen)}>
          <img
            className="add"
            src="../../../../../public/adicionar.svg"
            alt=""
          />
        </button>
        {modalOpen && (
          <Overlay>
            <Modal handleBuscaPost={handleBuscaPost} openModal={setModalOpen} />
          </Overlay>
        )}
      </StyleFeed>
    </>
  );
};

export default Feed;

const StyleFeed = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white.w50};
  min-height: 100vh;
  gap: 3em;

  h1 {
    text-align: center;
  }

  .add {
    position: fixed;
    top: 90%;
    right: 20%;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    .add {
      position: fixed;
      top: 90%;
      right: 8%;
    }
  }

  @media (min-width: 601px) and (max-width: 1023px) {
    .add {
      position: fixed;
      top: 90%;
      right: 12%;
    }
  }

  @media (min-width: 1024px) and (max-width: 1300px) {
    .add {
      position: fixed;
      top: 90%;
      right: 15%;
    }
  }

  @media (min-width: 1301px) {
    .add {
      position: fixed;
      top: 90%;
      right: 18%;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    0,
    0,
    0,
    0.5
  ); /* Cor de fundo preta com 50% de transparência */
  z-index: 999; /* Certifique-se de que o overlay está acima de tudo */
`;
