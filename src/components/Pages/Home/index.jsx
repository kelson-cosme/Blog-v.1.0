import Navbar from "../../header/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

import "./style.css"

export default function Home(){

    const [posts, setPosts] = useState([]) //valor após o post ser publicado
    const [loading, setLoading] = useState(false)
 
    useEffect ((post) => {//redenrizar após atualizar o post
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


    function deletePost(id) {
        axios.delete(`http://localhost:5500/api/${id}`)

        setPosts(posts.filter(post => post.id !== id));
        console.log(id)
 
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
                                <Link to={{pathname: `/vermais/${post.id}`}}><li className="green">Ler mais</li></Link>
                                <li onClick={() => deletePost(post.id)} className="red">Delete</li>
                            </ul>
                        </div> 
                ))}
                        
            </div>
        </div>
    );
}