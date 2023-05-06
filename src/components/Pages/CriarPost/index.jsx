import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import Voltar from "../../header/voltar";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'; //importando biblioteca de validação de imput
import * as yup from "yup";


import "./style.css"

const validacaoPost = yup.object().shape({ //validação de caracteres
    name: yup.string().required("O Título é obrigatório").max(50, "Máximo de 50 caracteres"),  //messagens de erro
    avatar:yup.string().required("A Descrição é obrigatório").max(150, "Maximo de 150 caracteres"),
    city:yup.string().required("O Conteúdo é obrigatório").max(500, "Maximo de 500 caracteres")
})

export default function Newpost(){

    let navigate = useNavigate() //voltou para tela inicial ao incluir um post

    const { register, handleSubmit, formState: { errors } } = useForm({//register ira registrar o imput
        resolver: yupResolver(validacaoPost)
    }); 
   
    
    const addPost = data => axios.post("http://localhost:5500/api", data)
    .then((response) => {
        alert("Seu post foi publicado")
        navigate('/')  //voltou para tela inicial ao incluir um post

    })
    .catch(() => {
        console.log("Deu errado")
    })


    //  const addPost = "http://localhost:5500/api";
    
    // axios.get(addPost)
    // .then(response => {
    //     const data = JSON.stringify(response.data);
    //     console.log(response.data)
    // })
    // .catch(error => console.log(error));



    return(
        <>
            <Voltar/>

            <div className="card-post">
                <h1>Criar Post</h1>

                <div className="line-post"></div>

                <div className="card-body-posst">


                    <form onSubmit={handleSubmit(addPost)}> 
                        <div className="fields">
                            <label>Titulo</label>
                            <input type="text" name="name" {...register("name")}/>
                            <p className="error-message"> {errors.name?.message} </p>
                        </div>

                        <div className="fields">
                            <label>Descricao</label>
                            <input type="text" name="avatar" {...register("avatar")} />
                            <p className="error-message"> {errors.avatar?.message} </p>

                        </div>

                        <div className="fields">
                            <label>Conteudo</label>
                            <textarea type="text" name="city" {...register("city")} > </textarea>
                            <p className="error-message"> {errors.city?.message} </p>

                        </div>

                        <div className="btn-post">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}