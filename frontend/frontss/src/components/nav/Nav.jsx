import { Link } from "react-router-dom"
import "./mainNav.css"

function Nav () {
    return(
        <nav className="mainNav">
            <ul>
                <li> <Link to="/"> Inicio </Link></li>
                <li> <Link to="/usuarios"> Listar todos usuários </Link> </li>
                <li> <Link to="/usuarios/:id"> Procurar usuários pelo ID </Link> </li>
                <li> <Link to="/cadastrar"> Adicionar novo usuário </Link> </li>
                <li> <Link to="/atualizar/:id"> Alterar dados do usuário </Link></li>
                <li> <Link to="/deletar/:id"> Deletar usuário </Link></li> 
            </ul>
        </nav>
    )
}

export default Nav