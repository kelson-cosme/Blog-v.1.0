import {Route,Routes,BrowserRouter} from "react-router-dom"

import Home from "../components/Pages/Home";
import Criarpost from "../components/Pages/CriarPost";
import Vermais from "../components/Pages/VerMais";


export default function AplicationRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>}/>

                <Route path="/new" element= {<Criarpost/>}/>

                <Route path="/vermais" element= {<Vermais/>}/>


            </Routes>
        </BrowserRouter>
    );
}
