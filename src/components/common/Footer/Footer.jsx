import { Link } from "react-router-dom"
import { FooterStyle } from "./footer.style"
import logo from '/logo-bubble-w.svg'

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <img src={logo} alt="logo branca bubble" />

        <div className="nav-menu">
          <h3 className="font-1-m-b">menu</h3>
          <nav>
            <ul className="menu font-1-xs">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/cadastro'>Cadastre-se</Link></li>

            </ul>
          </nav>
        </div>

        <div className="nav-menu">
          <h3 className="font-1-m-b">condições e suporte</h3>
          <nav>
            <ul className="menu font-1-xs">
              <li><Link to='/'>F.A.Q</Link></li>
              <li><Link to='/'>S.A.C</Link></li>
              <li><Link to='/'>Contate-nos</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </FooterStyle>
  )
}

export default Footer
