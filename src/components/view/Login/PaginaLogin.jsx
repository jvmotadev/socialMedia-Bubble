import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginStyle } from './pagina-login.style';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { loginUsuario } from '../../../services/usuarioApi';

const PaginaLogin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resposta = await loginUsuario(email, senha);

    if (resposta.success) {
      setSuccessMessage('Login Realizado com sucesso. Redirecionando para feed...');
      setTimeout(() => {
        navigate('/feed')
      }, 2000)
    } else {
      setErro(resposta.message)
      setTimeout(() => {
        setErro('')
      }, 2000)
    }
    console.log(resposta)
  }

  return (
    <LoginStyle>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/logo-bubble-w.svg" alt="Logo Bubble" className="logo" />
          </Link>
        </div>
        <div className="login-texto">
          <h1>Login</h1>
          <p>Faça login e entre na sua Bubble.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <Input
            type="email"
            placeholder="joao@email.com"
            width="100%"
            height="32px"
            value={email}
            change={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">senha</label>
          <Input
            type="password"
            placeholder="••••••••••••••••••••"
            width="100%"
            height="32px"
            value={senha}
            change={(e) => setSenha(e.target.value)}
          />
          <div className="margem-botao">
            <Button
              variant="buttonForms"
              texto="ENTRE"
              width="100%"
              height="32px"
              fontSize="12px"
              fontWeight="600"
              type="submit"
            />
          </div>
        </form>
        {successMessage && <p className="success-message font-2-s">{successMessage}</p>}
        {erro && <p className="error-message font-2-s">{erro}</p>}
        <p className="esqueceu-senha">
          Esqueceu sua senha? Clique <Link to="/redefinir-senha">aqui</Link>
        </p>
      </div>
    </LoginStyle>
  );
}
export default PaginaLogin;
