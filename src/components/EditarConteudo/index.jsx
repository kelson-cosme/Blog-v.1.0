import Left from "../../imagens/left-alignment.png"
import Center from "../../imagens/center.png"
import Right from "../../imagens/right-alignment.png"
import justificar from "../../imagens/justified.png"

import "./style.css"


export default function EditarPost(){
    return(
        <div className="criarPost-editor">
            <ul>
                
                <button  type="submit"><img src={Left} alt="" /></button>
                <li><img src={Center} alt="" /></li>
                <li><img src={Right} alt="" /></li>
                <li><img src={justificar} alt="" /></li>
            </ul>
        </div>
    );
}