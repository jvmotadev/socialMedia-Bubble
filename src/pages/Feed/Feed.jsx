import styled from "styled-components"
import UsuarioHeader from "../../components/view/Feed/UsuarioHeader/UsuarioHeader"
import OrdenarPosts from "../../components/view/Feed/OrdenarPosts/OrdenarPosts"
import Posts from "../../components/view/Feed/Posts/Posts"

const Feed = () => {
    return (
        <StyleFeed>
            <UsuarioHeader
                nomeUsuario='João Motta' />
            <OrdenarPosts />
            <Posts
                nomeUsuario="João Motta"
                date='20-12-2022'
                conteudo='Consegui um projetor pra passar filmes de terror trash durante a festinha de halloween aqui em casa'
            />
        </StyleFeed>
    )
}

export default Feed

const StyleFeed = styled.main`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.white.w50};
    min-height: 100vh;
`