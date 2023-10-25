// import Ferramentas from "../../components/view/LandingPage/Ferramentas/Ferramentas"
// import FiquePorDentro from "../../components/view/LandingPage/FiquePorDentro/FiquePorDentro"
import PaginaLogin from "../../components/view/Login/PaginaLogin"
// import PorqueBolha from "../../components/view/LandingPage/PorqueBolha/PorqueBolha"
import { LoginPageStyle } from "./login-page.style"


const LoginPage = () => {
  return (
      <LoginPageStyle>
        {/* header */}
        <PaginaLogin />
        {/* footer */}
      </LoginPageStyle>
  )
}

export default LoginPage
