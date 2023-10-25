/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { getPosts, postPost, deletePost } from '../../services/postApi';
import styled from "styled-components"
import UsuarioHeader from "../../components/view/Feed/UsuarioHeader/UsuarioHeader"
import Posts from "../../components/view/Feed/Posts/Posts"



const Feed = () => {
    // const [posts, setPosts] = useState([]);
    // const [conteudo, setConteudo] = useState('');
    // const [curtidas, setCurtidas] = useState('0');

    // async function handleBuscaPost() {
    //     const resposta = await getPosts();
    //     setPosts(resposta);
    // }

    // async function handlePostarPost(idUsuario) {
    //     const body = {
    //         conteudo,
    //         curtidas,
    //         idUsuario,
    //     };

    //     const resposta = await postPost(body);

    //     if (resposta.success) {
    //         handleBuscaPost();
    //     } else {
    //         console.log('erro ao postar transação');
    //     }
    // }

    // async function handleExcluirPost(idPost) {
    //     const resposta = await deletePost(idPost)

    //     if (resposta.success) {
    //         handleBuscaPost();
    //     } else {
    //         console.log('erro ao postar transação');
    //     }
    // }

    return (
        <>
            <StyleFeed>
                <UsuarioHeader
                    nomeUsuario='João Motta' />
                <Posts
                    nomeUsuario="João Motta"
                    date='20-12-2022'
                    conteudo='Consegui um projetor pra passar filmes de terror trash durante a festinha de halloween aqui em casa'
                />
            </StyleFeed>
            {/* <button
        onClick={() => {
          handleBuscaPost();
          console.log(posts);
        }}
      >
        Carregue Feed
      </button>
      <form style={{ margin: '50px' }}>
        <input type="text" placeholder="conteudo" onChange={(e) => setConteudo(e.target.value)}/>
        <button onClick={(e) => {
          e.preventDefault()
          handlePostarPost('65385573934953c4b8bb049c')}
          }>enviar</button>
      </form>

      {posts.map((post) => {
        return (
          <li key={post.id}>
            <p>{post.conteudo}</p>
            <p>{post.curtidas}</p>
            <button onClick={() => {
              console.log(post.id)
              handleExcluirPost(post.id)}}>excluir</button>
          </li>
        );
      })} */}
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
`