import styled from 'styled-components'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postUsuario } from '../../../services/usuarioApi';

const CriarConta = () => {
	const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [erro, setErro] = useState('')
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem');
      return;
    }

    try {
      // Chama a função para criar a conta e envia os dados para a API
      const resposta = await criarConta(username, email, senha);
      
      if (resposta.success) {
        setSuccessMessage('Conta criada com sucesso. Redirecionando para a página de login...');
				setTimeout(() => {
					navigate('/login')
				}, 2000)
      } else {
        setErro(resposta.message);
      }
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      setErro('Erro inesperado ao criar a conta.');
    }
  }

  // Função para criar a conta na API
  const criarConta = async (username, email, senha) => {
    try {
      const body = {
        username,
        email,
        senha,
      };

      // Realiza a chamada da API para criar a conta
      const resposta = await postUsuario(body, senha);

      return resposta;
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      throw new Error('Erro inesperado ao criar a conta.');
    }
  }

  return (
    <StyleBannerCadastro>
      <div className='container'>
        <img src="./logo-bubble-w.svg" alt="" />
        <div className='box-title'>
          <h1 className='font-1-xl'>Criar Conta</h1>
          <p className='font-1-xxs'>Crie agora a sua bolha!</p>
        </div>
        <form action="" className='form' onSubmit={handleSubmit}>
          <div className='box-username'>
            <span className='font-1-xxs'>username</span>
            <Input
              name={"username"}
              type={"text"}
              required={"required"}
              placeholder={"joa1zin"}
              value={username}
              change={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='box-email'>
            <span className='font-1-xxs'>email</span>
            <Input
              name={"email"}
              type={"email"}
              required={"required"}
              placeholder={"joao@email.com"}
              value={email}
              change={(e) => setEmail(e.target.value)}
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
                value={senha}
                change={(e) => setSenha(e.target.value)}
              />
            </div>
            <div>
              <span className='font-1-xxs'>confirmar-senha</span>
              <Input
                name={"confirmar-senha"}
                type={"password"}
                required={"required"}
                placeholder={"•••••••••••••••••••"}
                value={confirmarSenha}
                change={(e) => setConfirmarSenha(e.target.value)}
              />
            </div>
          </div>
          <div className='box-check'>
            <input type="checkbox" />
            <span className='font-1-xxs'>Aceito os  <a href="">termos e condições</a></span>
          </div>
          {erro && <p className="error-message">{erro}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <Button
            type={"submit"}
            texto={"CADASTRE-SE"}
            variant={'buttonForms'}
          />
        </form>
      </div>
    </StyleBannerCadastro>
  );
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