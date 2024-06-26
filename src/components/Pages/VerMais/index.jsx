import Voltar from "../../header/voltar";
import axios from "axios";
import React, {useEffect} from "react";
import { useForm } from "react-hook-form";

import { useParams} from "react-router-dom";

import "./style.css"

let postagem; //os posts
let conteudoPost;

export default function Vermais(){


  conteudoPost = document.getElementById("conteudo-post")

  const { id } = useParams(); //pegar os ids dos posts

  const {reset } = useForm();//register ira registrar o imput


  useEffect(() => {
      axios.get(`https://api-phmz.vercel.app/api/${id}`) 
      .then((response) => { //pegando os valores dos imputs
          reset(response.data)
          postagem = response.data 
          console.log(postagem)
        })
  }, []);

  let quebraLinha = postagem && postagem.content.replace(/\r?\n/g , '<br/>') //verificacao para adicionar a quebra de linha no texto
    if(quebraLinha != undefined && conteudoPost != undefined){
      conteudoPost.innerHTML = quebraLinha
    }

  return(
    
    <>
        <Voltar/>

       <div className="verMais">
          <h1>
            {postagem && postagem.title}
          </h1>
          
          <p>
            {postagem && postagem.description}
          </p>

          <img src={postagem && postagem.img} alt="" />

          <p id="conteudo-post"></p>
        </div>
    </>
);
}