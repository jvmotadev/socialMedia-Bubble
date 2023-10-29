import { Users, Devices, ShieldPlus, Prohibit } from "@phosphor-icons/react"
import { PorqueBolhaStyle } from "./porque-bolha.style"

const PorqueBolha = () => {
  return (
      <PorqueBolhaStyle>
        <div className="container">
          <h1 className='font-1-xxl'>Porque bolha?</h1>
          <p className="paragrafo-porque font-2-l">Bolha é a rede social que trás algo novo e diferente das redes oferecidas, estore sua bolha e se conecte com o que você mais gosta, escolha  apenas o que você deseja ver em seu feed.</p>
          <div className="lista-beneficios">
            <div className="usuarios">
              <Users size={32} color="#ffffff" weight="thin" />
              <h3 className="font-1-s">Usuários</h3>
              <p className="font-1-xs">Mais de 1000 usuários</p>
            </div>

            <div className="dispositivos">
              <Devices size={32} color="#ffffff" weight="thin" />
              <h3 className="font-1-s">Dispositivos</h3>
              <p className="font-1-xs">Desktop, Tablet, Mobile</p>
            </div>

            <div className="seguranca">
              <ShieldPlus size={32} color="#ffffff" weight="thin" />
              <h3 className="font-1-s">Segurança</h3>
              <p className="font-1-xs">Mais de 1000 usuários</p>
            </div>

            <div className="no-ads">
              <Prohibit size={32} color="#ffffff" weight="thin" />
              <h3 className="font-1-s">No Ads</h3>
              <p className="font-1-xs">Sem anúncio</p>
            </div>
          </div>
        </div>
      </PorqueBolhaStyle>
  )
}

export default PorqueBolha
