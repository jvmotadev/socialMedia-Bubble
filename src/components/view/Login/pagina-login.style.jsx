import styled from "styled-components";

export const LoginStyle = styled.div`
width: 100%;
height: 100vh;
background: url('/login-bg.png') no-repeat center center;
background-size: cover;
position: relative;
display: flex;
justify-content: center;
align-items: center;

.container {
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.92);
  width: 376px;
  height: 507px;
  padding: 20px 64px 140px 64px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  form{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    gap: 12px;
  }

  input{
    border-style: none;
    padding: 0.5rem;
  }
  input, select, textarea {
  color: #EDEDED;
  }

  .login-texto {
    align-self: flex-start;
    width: 200px;
    height: 60px;
    text-align: left;
    font-family: 'Poppins';
    margin-top: 40px;
  }

  .logo {
    width: 100px;
    margin: 0 auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
  }

  h1 {
    color: var(--c02, #EDEDED);
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    text-align: left;
    margin-bottom: 5px;
  }

  p {
    color: var(--c05, #B2B2B2);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  }

  label {
    align-self: flex-start;
    text-align: left;
    margin-top: 3%;
    font-family: 'Poppins';
    font-size: 18px;
    line-height: 24px;
    color: var(--c05, #B2B2B2);
    font-style: normal;
    font-weight: 400;
  }

  .margem-botao{
    margin-top: 17px;
    width: 100%;
    cursor: pointer;
  }

  .esqueceu-senha {
    align-self: flex-end;
    text-align: right;
    color: var(--c05, #B2B2B2);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    a {
      color: #4A7BDC;
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
}

  .error-message,
  .success-message {
    border-radius: 4px;
    font-size: 1.2rem !important; 
    place-self: center;
    padding: 0.5rem;
    text-shadow: 1px 1px 6px red;
    margin: 16px 0;
  }

  .error-message {
    background: red;
    color: white !important;
  }

  .success-message {
    background: green;
    color: white !important;
  }

@media (min-width: 768px) and (max-width: 1023px) {

  .container {
    width: 528px;
    height: 570px;
    padding: 20px 78px 180px 78px;
  }

  .logo {
    width: 133px;
    height: 50px;
  }

  label {
    margin-top: 40px;
    font-size: 18px;
  }
}

@media (min-width: 1024px) and (max-width: 1599px) {
  justify-content: flex-end;

  .container {
    width: 528px;
    height: 100vh;
    padding: 80px 105px 160px 105px;
  }

  .logo {
    width: 186.2px;
    height: 70px;
  }

  h1 {
    font-size: 44px;
    line-height: 62px;
  }

  label {
    margin-top: 40px;
    font-size: 18px;
  }

  .esqueceu-senha {
    margin-bottom: 300px;
  }
}

@media (min-width: 1600px) {
  justify-content: flex-end;

  .container {
    width: 583px;
    height: 100vh;
    padding: 80px 106px 160px 106px;
  }

  .logo {
    width: 186.2px;
    height: 70px;
  }

  h1 {
    font-size: 44px;
    line-height: 62px;
  }

  label {
    margin-top: 40px;
    font-size: 18px;
  }

  .esqueceu-senha {
    margin-bottom: 300px;
  }
}
`