import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdatePerson() {

    let navigate = useNavigate();

    const { id } = useParams();

    const [pessoa, setPessoas] = useState({
        nome: "",
        cpf: "",
        telefone: "",
        email: "",

    });

    const { nome, cpf, telefone, email } = pessoa;

    const onInputChange = (e) => {
        setPessoas({ ...pessoa, [e.target.nome]: e.target.value });
    };

    useEffect(() => {
        loadingPessoas();
    }, []);


    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/pessoa/${id}`, pessoa);
        navigate("/");

    };

    const loadingPessoas = () => {
        const result = axios.get(`http://localhost:8080/pessoa/${id}`);
        setPessoas(result.data);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Pessoa Física</h2>

                
                    <form onSubmit={(e)=> onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Nome: </label>
                                <input type='text' placeholder="nome" name="nome" className="form-control"
                                    value={nome} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div className="mb-3">
                                <label>CPF: </label>
                                <input placeholder="cpf" name="cpf" className="form-control"
                                    value={cpf} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div className="mb-3">
                                <label>Telefone: </label>
                                <input placeholder="telefone" name="telefone" className="form-control"
                                    value={telefone} onChange={(e) => onInputChange(e)} />
                            </div>


                            <div className="mb-3">
                                <label>Email: </label>
                                <input placeholder="email" name="email" className="form-control"
                                    value={email} onChange={(e) => onInputChange(e)} />
                            </div>
                        

                        <button type='submit' className="btn btn-outline-primary" >Save</button>

                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>

                        </form>

                </div>

            </div>


        </div>


    )

}