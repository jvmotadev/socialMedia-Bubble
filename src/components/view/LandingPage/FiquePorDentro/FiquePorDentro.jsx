import { useNavigate } from "react-router-dom"
import Button from "../../../common/Button/Button"
import { FiquePorDentroStyle } from "./fique-por-dentro.style"
import shape from '/lp-cadastre.png'

const FiquePorDentro = () => {
  const navigate = useNavigate()
  return (
    <FiquePorDentroStyle>
      <div className="container">
        <img src={shape} alt="shape bolha" />
        <h2 className="font-1-xl">Fique por dentro da sua bolha, entre já na Bubble!</h2>
        <Button
          texto={"cadastre-se"}
          variant={"secondary"}
          onClick={() => { navigate('/cadastro') }}/>
      </div>
    </FiquePorDentroStyle>
  )
}

export default FiquePorDentro
