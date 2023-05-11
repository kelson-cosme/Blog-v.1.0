import "./style.css"
import { Link } from "react-router-dom";
import Arrow from "../../../imagens/arrow.png"

export default function VoltarAdm(){
    return(
        <nav className="VoltarAdm">
            <ul>
                <Link to={"/"}><li><img src={Arrow} alt="" /></li></Link>
                <li className="criar">
                    <Link to={"/new"}>
                        <h2>Criar novo Post</h2>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}