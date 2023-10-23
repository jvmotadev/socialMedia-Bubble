import { FerramentaStyle } from "./ferramentas.style"

const Ferramentas = () => {
  return (
    <FerramentaStyle>
      <div className="container">
        <h1 className="font-1-xl">Bubble e suas ferramentas para uso<span>!</span></h1>
        <div className="ferramentas">
          <div className="topicos">
            <h3 className="font-1-s ">Explore Tópicos</h3>
            <p className="font-1-xs">• Fique por dentro dos tópicos importantes e das conversas mais populares.</p>
          </div>

          <div className="posts">
            <h3 className="font-1-s ">Curta Posts</h3>
            <p className="font-1-xs">• Curta os posts que você mais acha legal na rede.</p>
          </div>

          <div className="comente">
            <h3 className="font-1-s ">Comente</h3>
            <p className="font-1-xs">• Comente nos posts que interaja com aquilo que você mais gosta.</p>
          </div>

          <div className="siga">
            <h3 className="font-1-s ">Siga</h3>
            <p className="font-1-xs">• Com o Bubble você pode entrar nas bolhas de outras pessoas.</p>
          </div>
        </div>
      </div>
    </FerramentaStyle>
  )
}

export default Ferramentas
