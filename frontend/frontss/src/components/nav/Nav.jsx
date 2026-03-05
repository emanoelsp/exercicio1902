import { Link } from "react-router-dom"
import "./mainNav.css"

function Nav () {
    return(
        <nav className="mainNav">
            <ul>
                <li> <Link to="/"> Inicio </Link></li>
                <li> <Link to="/usuarios"> Listar todos usuários </Link> </li>
                <li> <Link to="/usuarios/buscar"> Procurar usuários pelo ID </Link> </li>
                <li> <Link to="/cadastrar"> Adicionar novo usuário </Link> </li>
                <li> <Link to="/atualizar/"> Alterar dados do usuário </Link></li>
                <li> <Link to="/deletar/"> Deletar usuário </Link></li> 
            </ul>
        </nav>
    )
}

export default Nav