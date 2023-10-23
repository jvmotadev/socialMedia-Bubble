import { FerramentaStyle } from "./ferramentas.style"

const Ferramentas = () => {
  return (
    <FerramentaStyle>
      <h1>Bubble e suas ferramentas para uso!</h1>
      <div className="ferramentas">
        <div className="topicos">
          <h3>Explore Tópicos</h3>
          <p>• Fique por dentro dos tópicos importantes e das conversas mais populares.</p>
        </div>

        <div className="posts">
          <h3>Curta Posts</h3>
          <p>• Curta os posts que você mais acha legal na rede.</p>
        </div>

        <div className="comente">
          <h3>Comente</h3>
          <p>• Comente nos posts que interaja com aquilo que você mais gosta.</p>
        </div>

        <div className="siga">
          <h3>Siga</h3>
          <p>• Com o Bubble você pode entrar nas bolhas de outras pessoas.</p>
        </div>

      </div>
    </FerramentaStyle>
  )
}

export default Ferramentas
