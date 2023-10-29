import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import { searchEmail } from '../../../services/usuarioApi';
import { useNavigate } from 'react-router-dom';

const Recuperacao = () => {
    const[email, setEmail] = useState('')
    const[success, setSuccess] = useState('')   
    const[error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const resposta = await searchEmail(email);
            if(resposta.id){
                setSuccess('Email para recuperação de senha enviado.')
                setTimeout(() => {
                    navigate('/login')
                }, 2000)
            }else{
                setError('Email não encontrado.');
                setTimeout(() => {
                    setError('')
                }, 2000)
            }
        } catch (error){
            setError('Erro inesperado.')
            setTimeout(() => {
                setError('')
            }, 2000)
        }
    }

    return (
        <StyleBannerRecuperacao>
            <div className='container'>
                <img src="/logo-bubble-w.svg" alt="" />
                <div className='box-title'>
                    <h1 className='font-1-xl'>Recuperar Senha</h1>
                    <p className='font-1-xxs'>Faça login e entre na sua Bubble!</p>
                </div>
                <form onSubmit={handleSubmit} className='form'>
                    <div className='box-email'>
                        <span className='font-1-xxs'>email</span>
                        <Input className='box-input'
                            value={email}
                            type="email"
                            required={"required"}
                            placeholder="joao@email.com"
                            change={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {success && <p className="success font-2-s">{success}</p>}
                    {error && <p className="error font-2-s">{error}</p>}
                        <Button
                            type={"submit"}
                            texto={"ENVIAR"}
                            variant={'buttonForms'}
                            />
                    </form>
                </div>
        </StyleBannerRecuperacao>
    )
}

export default Recuperacao

const StyleBannerRecuperacao = styled.div`
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

        .box-email{
            display: flex;
            flex-direction: column;
            
            input{
                width: 248px;
                height: 32px;
            }
        }

        button{
            width: 248px;
            height: 32px;
            display: flex;
            font-family: Poppins;
            font-size: 12px;
            font-weight: 600;
            line-height: 16px; 
            margin-bottom: 4rem;
        }
    }

    .error,
    .success{
        border-radius: 4px;
        font-size: 1.2rem !important; 
        place-self: center;
        padding: 0.5rem;
        text-shadow: 1px 1px 6px red;
    }

    .error{
        background: red;
        color: white !important;
    }

    .success {
        background: green;
        color: white !important;
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

                .box-email input{
                    width: 372px;
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

                .box-email input{
                    width: 372px;
                    height: 32px;
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

                .box-email input{
                    width: 300px;
                    height: 32px;
                }
                
                button{
                    width: 300px;
                }
            }
        }
    }
`