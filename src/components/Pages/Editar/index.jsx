import React, { useEffect } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import Voltar from "../../header/voltar";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'; //importando biblioteca de validação de imput
import * as yup from "yup";


import "./style.css"

const validacaoPost = yup.object().shape({ //validação de caracteres
    title: yup.string().required("O Título é obrigatório").max(50, "Máximo de 50 caracteres"),  //messagens de erro
    description:yup.string().required("A Descrição é obrigatório").max(300, "Maximo de 150 caracteres"),
    content:yup.string().required("O Conteúdo é obrigatório").max(500, "Maximo de 500 caracteres")
})

export default function Edit(){

    const { id } = useParams(); //pegar os ids dos posts

    let navigate = useNavigate(); //voltou para tela inicial ao incluir um post

    const { register, handleSubmit, formState: { errors }, reset } = useForm({//register ira registrar o imput
        resolver: yupResolver(validacaoPost)
    });

    useEffect(() => {
        axios.get(`http://localhost:5500/api/${id}`) 
        .then((response) => { //pegando os valores dos imputs
            reset(response.data)
            // console.log(response.data)
        })
    }, []);
    
    const addPost = data => axios.put(`http://localhost:5500/api/${id}`, data) //put serve para editar o post 
    .then((response) => {
        alert("Seu post foi editado")
        navigate('/')  //voltou para tela inicial ao incluir um post

    })
    .catch(() => {
        console.log("Deu errado")
    })

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
                            <input type="text" name="title" {...register("title")}/>
                            <p className="error-message"> {errors.name?.message} </p>
                        </div>

                        <div className="fields">
                            <label>Descricao</label>
                            <input type="text" name="description" {...register("description")} />
                            <p className="error-message"> {errors.description?.message} </p>

                        </div>

                        <div className="fields">
                            <label>Conteudo</label>
                            <textarea type="text" name="content" {...register("content")} > </textarea>
                            <p className="error-message"> {errors.content?.message} </p>

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