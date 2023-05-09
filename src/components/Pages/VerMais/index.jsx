import Voltar from "../../header/voltar";
import axios from "axios";
import React, {useEffect} from "react";
import { useForm } from "react-hook-form";

import { useParams} from "react-router-dom";

// import "./style.css"

let postagem; //os posts

export default function Vermais(){

  const { id } = useParams(); //pegar os ids dos posts

  const {reset } = useForm();//register ira registrar o imput


  useEffect(() => {
      axios.get(`http://localhost:5500/api/${id}`) 
      .then((response) => { //pegando os valores dos imputs
          reset(response.data)
          postagem = response.data 
      })
  }, []);

   

  return(
    <>
        <Voltar/>

       <div>
          <h1>
            {postagem && 
              postagem.name
            }
          </h1>
          
          <p>
            {postagem && 
            postagem.city}
          </p>

          <img src={postagem && postagem.avatar} alt="" />

        </div>
    </>
);







    // return(
    //     <div>
    //         <Voltar/>

    //         <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" alt="" />
            
    //         <h1>Titulo</h1>

    //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam tempora, ducimus in quo quidem consequuntur placeat dolorem voluptatem, magnam doloribus delectus totam iste porro, dolore eligendi temporibus ipsa? Veniam, omnis!</p>
    //     </div>
    // );
}