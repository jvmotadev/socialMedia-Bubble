import styled from "styled-components"
import Button from "../../../common/Button/Button"

const OrdenarPosts = () => {
    return (
        <StyleOrdenarPosts>
            <div className="conteiner">
                <Button
                    className='button1'
                    variant='buttonAscendente'
                    texto='Asc'

                />
                <Button
                    variant='buttonPostarOrdenar'
                    texto='Desc'

                />
            </div>
        </StyleOrdenarPosts>
    )
}

export default OrdenarPosts

const StyleOrdenarPosts = styled.div`
    .conteiner{
        display: flex;
        gap:8px;
        justify-content: flex-end;
        padding: 32px  ;
        align-items: center;
        margin-right: 150px;
    }
    
    @media (min-width: 400px) and (max-width: 600px){
        .conteiner{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            flex-wrap: wrap;
            align-content: flex-end;
            padding: 2rem ;
        }
    }

    @media (min-width: 601px) and (max-width: 1023px) {
        .conteiner{
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            align-content: flex-end;
            padding: 2rem;
        }
        }

    @media (min-width: 1024px){
        .conteiner{
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            align-content: flex-end;
            padding: 2rem 
        }
    }

`
