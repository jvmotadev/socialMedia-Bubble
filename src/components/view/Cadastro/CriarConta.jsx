import React from 'react'
import styled from 'styled-components'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'

const CriarConta = () => {
    return (
        <StyleBannerCadastro>
            <div className='logo'>
                <img src="./logo-bubble-w.svg" alt="" />
            </div>
            <section className='section'>
                <div className='box-title'>
                    <h1 className='font-1-xl'>Criar Conta</h1>
                    <p className='font-1-xxs'>Crie agora a sua bolha!</p>
                </div>
                <form action="" className='form'>
                    <div className='box-username'>
                        <span className='font-1-xxs'>username</span>
                        <Input className='box-input'
                            name={"username"}
                            type={"text"}
                            required={"required"}
                            placeholder={"joa1zin"}
                            width={"15.5rem"}
                            height={"2rem"}
                        />
                    </div>
                    <div className='box-email'>
                        <span className='font-1-xxs'>email</span>
                        <Input className='box-input'
                            name={"email"}
                            type={"email"}
                            required={"required"}
                            placeholder={"joao@email.com"}
                            width={"15.5rem"}
                            height={"2rem"}
                        />
                    </div>
                    <div className='box-senha'>
                        <div>
                            <span className='font-1-xxs'>senha</span>
                            <Input 
                                name={"senha"}
                                type={"password"}
                                required={"required"}
                                placeholder={"•••••••••••••••••••"}
                                width={"7.5rem"}
                                height={"2rem"}
                            />
                        </div>
                        <div>
                            <span className='font-1-xxs'>confirmar-senha</span>
                            <Input 
                                name={"senha"}
                                type={"password"}
                                required={"required"}
                                placeholder={"•••••••••••••••••••"}
                                width={"7.5rem"}
                                height={"2rem"}
                            />
                        </div>
                    </div>
                    <div className='box-check'>
                        <input type="checkbox" />
                        <span className='font-1-xxs'>Aceito os  <a href="">termos e condições</a></span>
                    </div>
                    <Button
                        type = "submit"
                        width={"15.5rem"} 
                        font-size={"12px"} 
                        height={"1rem"} 
                        texto={"CADASTRE-SE"}
                        variant={'buttonForms'}
                        />
                </form>
            </section>
        </StyleBannerCadastro>
    )
}

export default CriarConta

const StyleBannerCadastro = styled.div`
//------------------------dimensionamento para mobile-first------------------------//
height: 507px;
display: flex;
align-items: center;
flex-direction: column;
margin: 80px 52px;
border-radius: 4px;
background: rgba(0, 0, 0, 0.85);

    .logo{
        margin-top: 20px;
        width: 95px;
        height: 36px;
    }

    .box-title{
        margin-bottom: 30px;
    }

    .box-title h1{
        color: ${(props) => props.theme.colors.white.w200};
    }

    .box-title p{
        color: ${(props) => props.theme.colors.grey.g100};
    }

    .box-username{
        margin-bottom: 16px;
    }

    .box-email{
        margin-bottom: 16px;
    }

    .box-senha{
        gap: 8px;
        display: flex;
        margin-bottom: 8px;
    }

    .box-check{
        display: flex;
        gap: 8px;
        margin-bottom: 24px;
    }

    .form span{
        color: ${(props) => props.theme.colors.grey.g100};
    }

    .form input{
        color: ${(props) => props.theme.colors.white.w200};
        padding: 8px 12px;
        border: none;
    }

    .section{
        margin: 24px 64px 65px 64px;
    }

    button{
        font-weight: bold;
    }

    //---------------------------------------------------------------------------//


        @media (min-width: 580px) and (max-width: 1000px){
        margin: 72px 100px 107px 104px;
        height: 756px;

        .logo{
            margin-top: 20px;
            width: 114px;
            height: 43px;
        }

        .box-title{
            margin-bottom: 60px;
        }

        .box-username{
            margin-bottom: 32px;
            display: flex;
            flex-direction: column;
    }

        .box-email{
            display: flex;
            flex-direction: column;
            margin-bottom: 32px;
        }

        .box-senha{
            gap: 8px;
            display: flex;
            margin-bottom: 8px;
        }

        .box-senha div{
            display: flex;
            flex-direction: column;
        }

        .box-check{
            display: flex;
            gap: 8px;
            margin-bottom: 24px;
        }

        .box-username input{
            width: 372px;
        }

        .box-email input{
            width: 372px;
        }
        .box-senha input{
            width: 182px;
        }

        button{
            width: 377px;
        }
        
        .section{
            margin: 80px 92px 189px;
        }
    } 

    @media (min-width: 768px) and (max-width: 1024) {
        min-height: 100vh;
        margin: 0 0 0 523px;
}

    @media (min-width: 1025px){
        min-height: 100vh;
        margin: 0 0 0 1037px;
    
}


    
`