import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
// import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import RedefinirSenha from "./pages/RedefinirSenha/RedefinirSenha";
import Feed from "./pages/Feed/Feed";
// import TermoseCondicoes from "./pages/TermoseCondicoes"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/feed" element={<Feed />} />
        {/* <Route path="/termos-e-condicoes" element={<TermoseCondicoes />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
