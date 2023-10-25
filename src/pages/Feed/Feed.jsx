import { getPosts, postPost, deletePost } from '../../services/postApi';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [conteudo, setConteudo] = useState('');
  const [curtidas, setCurtidas] = useState('0');

  async function handleBuscaPost() {
    const resposta = await getPosts();
    setPosts(resposta);
  }

  async function handlePostarPost(idUsuario) {
    const body = {
      conteudo,
      curtidas,
      idUsuario,
    };

    const resposta = await postPost(body);

    if (resposta.success) {
      handleBuscaPost();
    } else {
      console.log('erro ao postar transação');
    }
  }

  async function handleExcluirPost(idPost) {
    const resposta = await deletePost(idPost)

    if(resposta.success) {
      handleBuscaPost();
    } else {
      console.log('erro ao postar transação');
    } 
  }

  return (
    <>
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
