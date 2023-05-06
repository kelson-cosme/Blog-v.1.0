import "./style.css"
import { Link } from "react-router-dom";

export default function Voltar(){
    return(
        <nav className="voltar">
            <ul><Link to={"/"}><li>Voltar</li></Link></ul>
        </nav>
    );
}