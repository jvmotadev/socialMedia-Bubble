import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import RedefinirSenha from "./components/RedefinirSenha";
import Feed from "./components/Feed";
import TermoseCondicoes from "./components/TermoseCondicoes"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/termos-e-condicoes" element={<TermoseCondicoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
