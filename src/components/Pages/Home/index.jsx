import Navbar from "../../header/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

import "./style.css"

export default function Home(){

    // let [posts, setPosts ] = useState([]);

    // useEffect(() => { 
    //     axios.get("http://localhost:5500/api")
    //     .then(response => { //reponse.data para pegar os arrays da api
    //         setPosts(response.data.users) //guardando o registro da api
    //         // console.log(response.data.users)
    //     })
    //     .catch(() => {
    //         console.log("deu errado")
    //     })
    // }, [])

    const [posts, setPosts] = useState([]) //valor após o post ser publicado
    const [loading, setLoading] = useState(false)
 
    useEffect (() => {//redenrizar após atualizar o post
        getPosts();
    },[]) //para que seja executada uma vez

    const getPosts = async () => {
        try{
            const res = await axios.get("http://localhost:5500/api")// pegar os dados da api
            setPosts(res.data.users) //qual os dados serão armazenados
            setLoading(true)
        } catch (err){
            alert(err.message);
        }
    }
    return(
        <div>

            <Navbar/>

            <div className="home-corpo">
                {loading && 
                    posts.map((post, key) =>(
                        <div id={post.id} key={key} className="home-card" >
                            <Link className="home-link" to={"/vermais"}>
                                <img src={post.avatar} alt="" />
                                <h2>{post.name}</h2>
        
                                <p> {post.avatar}</p>
                            </Link>
                                                                                                                
                            <ul className="home-funcoes">
                                <Link to={{pathname: `/editar/${post.id}`}}><li className="blue">Edite</li></Link>  
                                <Link to={"/vermais"}><li className="green">Ler mais</li></Link>
                                <li className="red">Delete</li>
                            </ul>
                        </div> 
                ))}
                        
            </div>
        </div>
    );
}