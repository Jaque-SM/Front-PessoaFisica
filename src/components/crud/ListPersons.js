import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ListPersons() {

    const [pessoas, setPessoas] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadingPessoas();
    }, []);

    const loadingPessoas = async () => {
        const result = await axios.get("http://localhost:8080/api/pessoas");
        setPessoas(result.data);
    }

    const deletePerson = async () => {
        await axios.delete(`http://localhost:8080/api/pessoa/${id}`);
        loadingPessoas();
    }

    return (
        <div>
            <h2 className="text-center">Person List</h2>

            <Link className='btn btn-outline-dark background-grey' to="/addpessoa">Add Pessoa-Fisica</Link>
                
            <br></br>

            <br></br>
            <div className="row" history='profiles'>
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>*</th>
                            <th> Nome</th>
                            <th> CPF</th>
                            <th> Telefone</th>
                            <th> E-mail</th>
                            <th> Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pessoas?.map((pessoa, index) => (
                                <tr>
                                    <td scope='row' key={index}>{index + 1}</td>
                                    <td> {pessoa.nome} </td>
                                    <td> {pessoa.cpf}</td>
                                    <td> {pessoa.telefone}</td>
                                    <td> {pessoa.email}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2' to={`/viewpessoa/${pessoa.id}`}>
                                            View Person
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => deletePerson(pessoa.id)}
                                        >
                                            Delete Person
                                        </button>

                                    </td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>


    )

}
