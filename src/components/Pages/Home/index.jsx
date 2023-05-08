import Navbar from "../../header/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

import "./style.css"
// import { number, object } from "yup";
// import { get, set } from "react-hook-form";


export default function Home(){

    // let [posts, setPosts ] = useState([]);

    // useEffect(() => { //redenrizar após atualizar o post
    //     axios.get("http://localhost:5500/api")
    //     .then(response => { //reponse.data para pegar os arrays da api
    //         setPosts(response.data.users) //guardando o registro da api
    //         // console.log(response.data.users)
    //     })
    //     .catch(() => {
    //         console.log("deu errado")
    //     })
    // }, [])

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect (() => {
        getPosts();
    })

    const getPosts = async () => {
        try{
            const res = await axios.get("http://localhost:5500/api")
            setPosts(res.data.users)
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
                        posts.map((post) =>(
                                <div className="home-card" >
        
                                <Link className="home-link" to={"/vermais"}>
                                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" alt="" />
                                    
                                    <h2>{post.name}</h2>
        
                                    <p> {post.avatar}</p>
                                </Link>
        
                                </div> 
                        ))
                    }
                        
            </div>
        </div>
    );
}