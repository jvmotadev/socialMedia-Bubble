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
  const [modalOpen, setModalOpen] = useState(false)

  async function handleBuscaPost() {
    const resposta = await getPosts();
    setPosts(resposta);
  }


  async function handleExcluirPost(idPost) {
    const resposta = await deletePost(idPost);

    if (resposta.success) {
      handleBuscaPost();
    } else {
      console.log('erro ao excluir transação');
    }
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
        <UsuarioHeader nomeUsuario="João Motta" />
        {posts.map((post) => (
          <div key={post.id}>
            <Posts
              date={post.date}
              conteudo={post.conteudo}
              addPost={() => console.log('adicionar post')}
              deletePost={() => handleExcluirPost(post.id)}
              // curtirPost
            />
          </div>
        ))}
        <button onClick={() => setModalOpen(!modalOpen)}>
          <img
            className="add"
            src="../../../../../public/adicionar.svg"
            alt=""
          />
        </button>
        {
          modalOpen && <Modal />
        }
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
`;
