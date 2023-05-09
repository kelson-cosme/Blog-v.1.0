import Facebook from "../../imagens/logo-facebook.png"
import Whatsapp from "../../imagens/logo-whatsapp.png"
import Twitter from "../../imagens/logo-twitter.png"
import Instagram from "../../imagens/logo-instagram.png"
import "./style.css"

export default function Voltar(){
    return(
        <footer>
            <ul className="rodape">
                <li><img src={Facebook} alt="" /></li>
                <li><img src={Twitter} alt="" /></li>
                <li><img src={Instagram} alt="" /></li>
                <li><img src={Whatsapp} alt="" /></li>
            </ul>

            <p>Copyright ©2023 All rights reserved</p>
        
            <p>Terms & Conditions/ Privacy Policy</p>
        </footer>
    );
}