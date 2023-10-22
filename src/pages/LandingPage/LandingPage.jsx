import Ferramentas from "../../components/view/LandingPage/Ferramentas/Ferramentas"
import FiquePorDentro from "../../components/view/LandingPage/FiquePorDentro/FiquePorDentro"
import PorqueBolha from "../../components/view/LandingPage/PorqueBolha/PorqueBolha"

const LandingPage = () => {
  return (
    <div>
      {/* header */}
      <PorqueBolha />
      <Ferramentas />
      <FiquePorDentro />
      {/* footer */}
    </div>
  )
}

export default LandingPage
