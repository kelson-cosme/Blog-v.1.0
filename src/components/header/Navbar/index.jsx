import { Link } from "react-router-dom";

import "./style.css"

export default function Cabecario(){
    return(
        <nav className="navBar">
            <ul>
                <li><h2>LOGO</h2></li>

                <Link className="links" to={"/new"}>
                    <li><h2>Criar novo post</h2></li>
                </Link>

            </ul>
        </nav>
    );
}