import { PaginaInicialStyle } from "./pagina-inicial.style"
import bg from '/lp-bg-shape-x.png'

const PaginaInicial = () => {
  return (
      <PaginaInicialStyle>
        <div className="container">
          <h1 className="font-1-xxl">Bem vindo à Bubble: a rede social diferente de tudo.</h1>
          <img src={bg} alt="" />
        </div>
      </PaginaInicialStyle>
  )
}

export default PaginaInicial
