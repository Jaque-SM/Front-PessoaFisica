import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewPerson() {

    const [pessoa, setPessoas] = useState({
        nome: "",
        cpf: "",
        telefone: "",
        email: "",

    });

    const { nome } = useParams();

    useEffect(() => {
        loadingPessoa();
    }, []);

    const loadingPessoa = async () => {
        const result = await axios.get(`http://localhost:8080/api/pessoas/${nome}`);
        setPessoas(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Person Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of Person: {pessoa.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Nome: </b>
                                    {pessoa.nome}
                                </li>
                                <li className="list-group-item">
                                    <b>Cpf: </b>
                                    {pessoa.cpf}
                                </li>
                                <li className="list-group-item">
                                    <b>Telefone: </b>
                                    {pessoa.telefone}
                                </li>
                                <li className="list-group-item">
                                    <b>E-mail: </b>
                                    {pessoa.email}
                                </li>

                            </ul>

                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to PersonList
                    </Link>
                </div>
            </div>
        </div>


    );
}
