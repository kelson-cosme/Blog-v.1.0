import React, { useEffect } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import Voltar from "../../header/voltar";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'; //importando biblioteca de validação de imput
import * as yup from "yup";


import "./style.css"

const validacaoPost = yup.object().shape({ //validação de caracteres
    title: yup.string().required("O Título é obrigatório").max(100, "Máximo de 50 caracteres"),  //messagens de erro
    description:yup.string().required("A Descrição é obrigatório").max(300, "Maximo de 150 caracteres"),
    content:yup.string().required("O Conteúdo é obrigatório"),
    img:yup.string().required("O Conteúdo é obrigatório").max(200, "Maximo de 500 caracteres")
})

export default function Edit(){

    const { id } = useParams(); //pegar os ids dos posts

    let navigate = useNavigate(); //voltou para tela inicial ao incluir um post

    const { register, handleSubmit, formState: { errors }, reset } = useForm({//register ira registrar o imput
        resolver: yupResolver(validacaoPost)
    });

    useEffect(() => {
        axios.get(`https://api-phmz.vercel.app/api/${id}`) 
        .then((response) => { //pegando os valores dos imputs
            reset(response.data)
            // console.log(response.data)
        })
    }, []);
    
    const addPost = data => axios.put(`https://api-phmz.vercel.app/api/${id}`, data) //put serve para editar o post 
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

            <div className="btn-post">
                <button onClick={handleSubmit(addPost)} type="submit">Editar</button>
            </div>

            <div className="criarPost-area">

                <div className="titulo">
                    <h1>Criar Post</h1>
                    <p className="error-message"> {errors.title?.message} </p>
                    <input  placeholder="Titulo" type="text" name="title" {...register("title")}/>
                </div>
               
                <div className="titulo">
                    <p className="error-message"> {errors.description?.message} </p>
                    <input placeholder="Descrição" type="text" name="description" {...register("description")} />
                </div>

                <div className="titulo">
                    <p className="error-message"> {errors.img?.message} </p>
                    <input placeholder="Endereço da img" type="text" name="img" {...register("img")} />
                </div>

                <div className="card-post">
                        <div className="card-body-posst">

                            <form onSubmit={handleSubmit(addPost)}> 

                                <div className="fields">
                                    <label>Conteudo</label>
                                    <p className="error-message"> {errors.content?.message} </p>
                                    <textarea type="text" name="content" {...register("content")} > </textarea>
                                </div>
                                {/* {console.log(register)} */}
                            </form>
                        </div>
                    </div>
            </div>
        </>
    );
}