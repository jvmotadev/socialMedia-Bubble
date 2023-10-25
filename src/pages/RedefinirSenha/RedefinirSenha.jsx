import styled from "styled-components"
import Recuperacao from "../../components/view/RecuperarSenha/Recuperacao"


const RedefinirSenha = () => {
    return (
        <RecuperacaoPageStyle>
            <Recuperacao/>
        </RecuperacaoPageStyle>
    )
}

export default RedefinirSenha

const RecuperacaoPageStyle = styled.main`
    display: flex;
    flex-direction: column;
    background-image: url("./bubble-rec-senha.png");
    background-size: cover;
    min-height: 100vh;
`