import "./style.css"
import { Link } from "react-router-dom";
import Arrow from "../../../imagens/arrow.png"

export default function Voltar(){
    return(
        <nav className="voltar">
            <ul><Link to={"/"}><li><img src={Arrow} alt="" /></li></Link></ul>
        </nav>
    );
}