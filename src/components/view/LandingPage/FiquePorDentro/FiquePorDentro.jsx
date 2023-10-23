import { FiquePorDentroStyle } from "./fique-por-dentro.style"
import shape from '/lp-cadastre.png'

const FiquePorDentro = () => {
  return (
    <FiquePorDentroStyle>
      <div className="container">
        <img src={shape} alt="shape bolha" />
        <h2 className="font-1-xl">Fique por dentro da sua bolha, entre já na Bubble!</h2>
        <button>cadastre-se</button>
      </div>
    </FiquePorDentroStyle>
  )
}

export default FiquePorDentro
