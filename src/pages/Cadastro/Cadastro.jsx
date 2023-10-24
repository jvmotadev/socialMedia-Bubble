import styled from "styled-components"
import CriarConta from "../../components/view/Cadastro/CriarConta"


const Cadastro = () => {
    return (
        <CadastroPageStyle>
            <div className="container">
                <CriarConta/>
            </div>
        </CadastroPageStyle>
    )
}

export default Cadastro

const CadastroPageStyle = styled.main`
    display: flex;
    flex-direction: column;

    .container{
        max-width: 100vw;
        min-height: 100vh;
        background-image: url("./bg-cadastro.png");
        background-size: cover;
    }
    
`