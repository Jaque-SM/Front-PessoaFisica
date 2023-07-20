import React, { useEffect, useState } from 'react'
import PersonService from '../services/PersonService';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ListPersons() {
    
    const [pessoas, setPessoas] =useState([])

    const {id} =useParams();

    useEffect(() =>{
        loadingPessoas();
    }, []);

    const loadingPessoas =()=> {
        const result= axios.get("http://localhost:8080/pessoas");
    }

        return (
            <div>
                <h2 className="text-center">Person List</h2>

                <div className="row">
                    <button className="btn btn-primary" style={{marginRight: "10px"}} onClick={this.addPessoaFisica.bind(this)}>Add Pessoa</button>
                </div>
                <br></br>
                <div className="row" history='profiles'>
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Nome</th>
                                <th> CPF</th>
                                <th> Telefone</th>
                                <th> E-mail</th>
                                <th> Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pessoas.map((pessoa, index)
                                     => (
                                        <tr key={pessoa.id}>
                                            <td> {pessoa.nome} </td>
                                            <td> {pessoa.cpf}</td>
                                            <td> {pessoa.telefone}</td>
                                            <td> {pessoa.email}</td>
                                            <td>
                                                <Link className='btn btn-primary mx-2' to={`/viewpessoa/${pessoa.}`}>
                                                
                                                </Link>                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deletePessoaFisica(pessoa.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewPessoaFisica(pessoa.pessoaNome)} className="btn btn-info">View </button>
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
