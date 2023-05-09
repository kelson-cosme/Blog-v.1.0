import Voltar from "../../header/voltar";
import axios from "axios";
import React, {useEffect} from "react";
import { useForm } from "react-hook-form";

import { useParams} from "react-router-dom";

import "./style.css"

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

       <div className="verMais">
          <h1>
            {postagem && postagem.name}
          </h1>
          
          <p>
            {postagem && postagem.city}
          </p>

          <img src={postagem && postagem.avatar} alt="" />

          <p className="conteudo">{postagem && postagem.avatar}</p>
        </div>
    </>
);
}