import Header from "../../components/common/Header/Header"
import Footer from "../../components/common/Footer/Footer"
import Ferramentas from "../../components/view/LandingPage/Ferramentas/Ferramentas"
import FiquePorDentro from "../../components/view/LandingPage/FiquePorDentro/FiquePorDentro"
import PaginaInicial from "../../components/view/LandingPage/PaginaInicial/PaginaInicial"
import PorqueBolha from "../../components/view/LandingPage/PorqueBolha/PorqueBolha"
import { LandingPageStyle } from "./landing-page.style"

const LandingPage = () => {
  return (
      <LandingPageStyle>
        <Header/>
        <PaginaInicial />
        <PorqueBolha />
        <Ferramentas />
        <FiquePorDentro />
        <Footer />
      </LandingPageStyle>
  )
}

export default LandingPage
