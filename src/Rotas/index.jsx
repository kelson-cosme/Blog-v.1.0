import {Route,Routes,BrowserRouter} from "react-router-dom"

import Home from "../components/Pages/Home";
import Criarpost from "../components/Pages/CriarPost";
import Vermais from "../components/Pages/VerMais";
import Editar from "../components/Pages/Editar"


export default function AplicationRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>}/>

                <Route path="/new" element= {<Criarpost/>}/>

                <Route path="/vermais/:id" element= {<Vermais/>}/>

                <Route path="/editar/:id" element= {<Editar/>}/>  

            </Routes>
        </BrowserRouter>
    );
}
