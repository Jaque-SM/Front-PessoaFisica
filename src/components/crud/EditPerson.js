import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdatePerson () {

    let navigate = useNavigate();

    const { id } = useParams();

    const [pessoa, setPessoa] =useState({
        nome: "",
        cpf: "",
        telefone: "",
        email: "",

    });

    const {nome, cpf, telefone, email} =pessoa;
    
    const onInputChange = (e) => {
        setPessoa(
            { ...pessoa, nome: e.target.value  })
    };

    const onInputChangeCpf =(e) => {
        setPessoa (
            {...pessoa, cpf: e.target.value }
        )
    }

    const onInputChangeTelefone =(e) => {
        setPessoa (
            {...pessoa, telefone: e.target.value}
        )
    }

    const onInputChangeEmail =(e) => {
        setPessoa (
            {...pessoa, email: e.target.value}
        )
    }

    useEffect(() => {
        loadingPessoas();
      }, []);
    
    const loadingPessoas = async () => {
        const result = await axios.get(`http://localhost:8080/api/pessoas/${id}`);
        setPessoa(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/pessoas/${id}`, pessoa);
        navigate("/");
    };

    return (
        <div className="container">
        <div className="row">
           
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Editar Pessoa Física</h2>
            <h5>
            Pessoa Física
            </h5>

                <form onSubmit={(e)=> onSubmit(e)}>
                
                    <label htmlFor="nome" className="form-label">Nome: </label>

                    <input type="text" placeholder="digite o nome..." name="nome" className="form-control"
                      value={nome} onChange={(e) => onInputChange(e)}/>
              

                <div className="mb-3">
                    <label htmlFor="CPF" className="form-label">CPF: </label>
                    <input placeholder="digite o cpf..." name="cpf" className="form-control"
                        value={cpf} onChange={(e) => onInputChangeCpf(e)} />
                </div>

                <div className="mb-3">
                    <label>Telefone: </label>
                    <input type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'  maxlength="12"
                    placeholder="digite o telefone..." name="telefone" className="form-control"
                        value={telefone} onChange={(e) => onInputChangeTelefone(e)} />
                </div>


                <div className="mb-3">
                    <label>Email: </label>
                    <input type='email'   placeholder="digite o email..." name="email" className="form-control"
                        value={email} onChange={(e) => onInputChangeEmail(e)} />
                </div>
           

            <button type="submit" className="btn btn-outline-primary" >Save</button>

            <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
            </Link>

            </form>

            

            </div>

        </div>

    </div>
    );




}