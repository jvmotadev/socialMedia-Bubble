import { Users, Devices, ShieldPlus, Prohibit } from "@phosphor-icons/react"

const BannerPorqueBolha = () => {
  return (
    <div>
      <h1>Porque bolha?</h1>
      <p>Bolha é a rede social que trás algo novo e diferente das redes oferecidas, estore sua bolha e se conecte com o que você mais gosta, escolha  apenas o que você deseja ver em seu feed.</p>
      <div className="lista-beneficios">
        <div className="usuarios">
          <Users size={32} color="#ffffff" weight="thin" />
          <h3>Usuários</h3>
          <p>Mais de 1000 usuários</p>
        </div>

        <div className="dispositivos">
          <Devices size={32} color="#ffffff" weight="thin" />
          <h3>Dispositivos</h3>
          <p>Desktop, Tablet, Mobile</p>
        </div>

        <div className="seguranca">
          <ShieldPlus size={32} color="#ffffff" weight="thin" />
          <h3>Segurança</h3>
          <p>Mais de 1000 usuários</p>
        </div>

        <div className="no-ads">
          <Prohibit size={32} color="#ffffff" weight="thin" />
          <h3>No Ads</h3>
          <p>Sem anúncio</p>
        </div>
      </div>
    </div>
  )
}

export default BannerPorqueBolha
