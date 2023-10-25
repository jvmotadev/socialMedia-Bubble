import styled from "styled-components"
import CriarConta from "../../components/view/Cadastro/CriarConta"


const Cadastro = () => {
    return (
        <CadastroPageStyle>
            <CriarConta/>
        </CadastroPageStyle>
    )
}

export default Cadastro

const CadastroPageStyle = styled.main`
    display: flex;
    flex-direction: column;
    background-image: url("./bg-cadastro.png");
    background-size: cover;
    min-height: 100vh;
`