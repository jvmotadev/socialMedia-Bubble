import styled from "styled-components"
import UsuarioHeader from "../../components/view/Feed/UsuarioHeader"
import OrdenarPosts from "../../components/view/Feed/OrdenarPosts/OrdenarPosts"

const Feed = () => {
    return (
        <StyleFeed>
            <UsuarioHeader
                nomeUsuario='João Motta' />
            <OrdenarPosts />
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