import React from "react";
import { Link } from 'react-router-dom';
import { LoginStyle } from "./pagina-login.style";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

const PaginaLogin = () => {
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
        <label htmlFor="email">email</label>
        <Input type="email" placeholder="joao@email.com" width="100%" height="32px" />
        <label htmlFor="password">senha</label>
        <Input type="password" placeholder="••••••••••••••••••••" width="100%" height="32px" />
        <div className="margem-botao">
        <Button
          variant="buttonForms"
          texto="ENTRE"
          width="100%"
          height="32px"
          fontSize="12px"
          fontWeight="600"
        />
        </div>
        <p className="esqueceu-senha">
          Esqueceu sua senha? Clique <Link to="/redefinir-senha"><a>aqui</a></Link>
        </p>
      </div>
    </LoginStyle>
  );
};

export default PaginaLogin;
