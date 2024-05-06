import Navbar from "../../header/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

import "./style.css"

export default function Home(){

    const [posts, setPosts] = useState([]) //valor após o post ser publicado
    const [loading, setLoading] = useState(false)

    let postsReverse = posts.slice(0).reverse();

    useEffect ((post) => {//redenrizar após atualizar o post
        getPosts();
    },[]) //para que seja executada uma vez

    const getPosts = async () => {
        try{
            const res = await axios.get("https://api-phmz.vercel.app/api")// pegar os dados da api
            setPosts(res.data.users) //qual os dados serão armazenados
            setLoading(true)
        } catch (err){
            alert(err.message);
        }
    }

    return(
        <div className="home-corpo-pai">
            <Navbar/>
            <div className="home-corpo">
                {loading && 
                    postsReverse.map((post, key) =>(
                        <div id={post.id} key={key} className="home-card" >
                            <Link className="home-link" to={{pathname: `/vermais/${post.id}`}}>
                                <img src={post.img} alt="" />
                                <h2>{post.title}</h2>
        
                                <p> {post.description}</p>
                            </Link>

                            {/* <ul className="home-funcoes">
                                <Link to={{pathname: `/editar/${post.id}`}}><li className="blue">Edite</li></Link>  
                                <Link to={{pathname: `/vermais/${post.id}`}}><li className="green">Ler mais</li></Link>
                                <li onClick={() => deletePost(post.id)} className="red">Delete</li>
                            </ul> */}
                        </div> 
                ))}
                        
            </div>
        </div>
    );
}