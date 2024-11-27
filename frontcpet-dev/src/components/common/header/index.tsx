import Container from "../container"
import LogoImage from '../../../assets/logo.png'
import { NavLink, useNavigate } from "react-router"
import { Button } from "../../ui/button"
import useAuth from "../../../hooks/auth"
import { useEffect } from "react"
function Header() {

  const { user, logout, islogged } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(user)
    if (!islogged()) {
      navigate('/auth/login')
    }
  }, [user])

  return (
    <nav >
      <Container >
        <div className="w-full flex gap-4 py-6 content-center justify-between items-center">
          <div className="flex gap-4 py-6 content-center items-center">
            <img src={LogoImage} className="h-5 mr-4" />
            <NavLink to="/" className={({ isActive }) => `border-b-2 transition-all ${isActive ? "border-slate-950" : "border-transparent"} hover:border-slate-950`}>Painel</NavLink>
            <NavLink to="/schedule" className={({ isActive }) => `border-b-2 transition-all ${isActive ? "border-slate-950" : "border-transparent"} hover:border-slate-950`}>Agenda</NavLink>
            <NavLink to="/consultation" className={({ isActive }) => `border-b-2 transition-all ${isActive ? "border-slate-950" : "border-transparent"} hover:border-slate-950`}>Consultas</NavLink>
            <NavLink to="/report" className={({ isActive }) => `border-b-2 transition-all ${isActive ? "border-slate-950" : "border-transparent"} hover:border-slate-950`}>Relatórios</NavLink>
            <NavLink to="/register" className={({ isActive }) => `border-b-2 transition-all ${isActive ? "border-slate-950" : "border-transparent"} hover:border-slate-950`}>Cadastro</NavLink>
          </div>
          <Button onClick={() => logout()} variant="outline" className={"border-b-2 transition-all "}>Logout</Button>
        </div>
      </Container>
    </nav>

  )
}

export default Header
