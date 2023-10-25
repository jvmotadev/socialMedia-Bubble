import React from 'react'
import styled from 'styled-components'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'

const CriarConta = () => {
    return (
        <StyleBannerCadastro>
            <div className='container'>
                <img src="./logo-bubble-w.svg" alt="" />
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
                        />
                    </div>
                    <div className='box-email'>
                        <span className='font-1-xxs'>email</span>
                        <Input className='box-input'
                            name={"email"}
                            type={"email"}
                            required={"required"}
                            placeholder={"joao@email.com"}
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
                                />
                        </div>
                        <div>
                            <span className='font-1-xxs'>confirmar-senha</span>
                                <Input 
                                    name={"confirmar-senha"}
                                    type={"password"}
                                    required={"required"}
                                    placeholder={"•••••••••••••••••••"}
                                />
                        </div>
                        </div>
                        <div className='box-check'>
                            <input type="checkbox" />
                            <span className='font-1-xxs'>Aceito os  <a href="">termos e condições</a></span>
                        </div>
                        <Button
                            type={"submit"}
                            texto={"CADASTRE-SE"}
                            variant={'buttonForms'}
                            />
                    </form>
                </div>
        </StyleBannerCadastro>
    )
}

export default CriarConta

const StyleBannerCadastro = styled.div`
//------------------------dimensionamento para mobile-first------------------------//
max-width: 100%;
display: flex;
justify-content: center;

input{
    border-style: none;
    padding: 0.5rem;
    color: ${(props) => props.theme.colors.white.w200};
}


.container{
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.85);
    max-width: 376px;
    margin: 5rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    img{
        margin-top: 1rem;
        width: 96px;
        height: 36px;
        align-self: center;
    }

    .box-title{
        margin: 2rem 0;

    }

    h1{
        color: ${(props) => props.theme.colors.white.w200};
    }

    p, span{
        color: ${(props) => props.theme.colors.grey.g100};

    }

    form{
        display: flex;
        flex-direction: column;
        gap: 16px;

        .box-username{
            display: flex;
            flex-direction: column;

            input{
                width: 248px;
                height: 32px;
            }
        }

        .box-email{
            display: flex;
            flex-direction: column;
            
            input{
                width: 248px;
                height: 32px;
            }
        }

        .box-senha{
            display: flex;
            gap: 0.5rem;

            input{
                width: 120px;
                height: 32px;
                
            }
        }

        .box-check{
            display: flex;
            gap: 0.5rem;
        }

        button{
            width: 248px;
            height: 32px;
            display: flex;
            font-family: Poppins;
            font-size: 12px;
            font-weight: 600;
            line-height: 16px; 
        }
    }

}

    //---------------------------------------------------------------------------//

    @media (min-width: 470px) and (max-width: 600px){
        .container{
            max-width: 600px;

            img{
                width: 114px;
                height: 43px;
            }

            .box-title{
                margin: 3rem 0;
            }

            form{
                gap: 32px;

                .box-username input{
                    width: 372px;
                    height: 32px;
                }
                .box-email input{
                    width: 372px;
                    height: 32px;
                }
                .box-senha input{
                    width: 182px;
                    height: 32px;
                }
                button{
                    width: 377px;
                }
            }
        }
    }

    @media (min-width: 601px) and (max-width: 1023px) {
        .container{
            max-width: 1023px;

            img{
                width: 114px;
                height: 43px;
            }

            .box-title{
                margin: 3rem 0;
            }

            form{
                gap: 32px;

                .box-username input{
                    width: 372px;
                    height: 32px;
                }
                .box-email input{
                    width: 372px;
                    height: 32px;
                }
                .box-senha input{
                    width: 182px;
                    height: 32px;
                }
                .box-senha div{
                    display: flex;
                    flex-direction: column;
                }
                button{
                    width: 377px;
                }
            }
        }
    }

    @media (min-width: 1024px){
        .container{
            margin: 0;
            width: 100%;
            height: 100%;
            float: right;
            position: absolute;
            right: 0;
            

            img{
                width: 186px;
                height: 70px;
            }

            .box-title{
                margin: 5rem 0;
            }

            form{
                gap: 32px;

                .box-username input{
                    width: 300px;
                    height: 32px;
                }
                .box-email input{
                    width: 300px;
                    height: 32px;
                }
                .box-senha input{
                    width: 148px;
                    height: 32px;
                }
                .box-senha div{
                    display: flex;
                    flex-direction: column;
                }
                button{
                    width: 300px;
                }
            }
        }
    }
`