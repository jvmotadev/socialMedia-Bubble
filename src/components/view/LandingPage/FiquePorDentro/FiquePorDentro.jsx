import { FiquePorDentroStyle } from "./fique-por-dentro.style"
import shape from '/lp-cadastre.png'

const FiquePorDentro = () => {
  return (
    <FiquePorDentroStyle>
      <img src={shape} alt="" />
      <h2>Fique por dentro da sua bolha, entre já na Bubble!</h2>
      <button>cadastre-se</button>
    </FiquePorDentroStyle>
  )
}

export default FiquePorDentro
