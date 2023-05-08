import Navbar from "../../header/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

import "./style.css"
import { number, object } from "yup";


export default function Home(){

    let [posts, setPosts ] = useState([]);

    useEffect(() => { //redenrizar após atualizar o post
        axios.get("http://localhost:5500/api")
        .then(response => { //reponse.data para pegar os arrays da api
            setPosts(response.data.users) //guardando o registro da api
            // console.log(response.data.users)
        })
        .catch(() => {
            console.log("deu errado")
        })

    }, [])

   
    return(

        <div>

            <Navbar/>

            <div className="home-corpo">

                
                        return(
                            <div className="home-card" >
    
                            <Link className="home-link" to={"/vermais"}>
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" alt="" />
                                
                                <h2>daddad</h2>
    
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eaque sapiente, sint repellat earum laudantium unde esse tempore, quas amet qui maiores ipsum delectus, aliquam a aperiam consectetur! Ullam, officiis.</p>
                            </Link>
    
                            </div> 
                        )
            </div>
        </div>
    );
}