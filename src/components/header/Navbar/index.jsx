import { Link } from "react-router-dom";

import "./style.css"

export default function Cabecario(){
    return(
        <nav className="navBar">
            <ul>
                <li><h2>LOGO</h2></li>

                <Link className="links" to={"/admin"}>
                    <li><h2>Login Admin</h2></li>
                </Link>

            </ul>
        </nav>
    );
}