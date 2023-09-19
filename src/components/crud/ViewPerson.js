import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewPerson() {

    const { id } = useParams();

    const [pessoa, setPessoas] = useState({
        nome: "",
        cpf: "",
        telefone: "",
        email: "",
        endereco: { endereco: " ", numero: " ", complemento:" ", 
        bairro: " ", cep: " ", cidade:" ", uf:" " }
    });

    useEffect(() => {
        loadingPessoa();
    }, []);

    const loadingPessoa = async () => {
        const result = await axios.get(`http://localhost:8080/api/pessoas/${id}`);
        setPessoas(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <br></br>
                <div className="col-sm-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Person Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of Person: {pessoa.id} 
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Nome Completo: </b>
                                    <br></br>
                                    {pessoa.nome}
                                </li>
                                <li className="list-group-item">
                                    <b>Cpf: </b>
                                    <br></br>
                                    {pessoa.cpf}
                                </li>
                                <li className="list-group-item">
                                    <b>Telefone: </b>
                                    <br></br>
                                    {pessoa.telefone}
                                </li>
                                <li className="list-group-item">
                                    <b>E-mail: </b>
                                    <br></br>
                                    {pessoa.email}
                                </li>
                            </ul>

                        </div>
                        
                    </div>
                </div>
                <div className="col-sm-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Adress Details</h2>

                    <div className="card">
                        <div className="card-header">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Endereço:</b>
                                    <br></br>
                                    {pessoa.endereco.endereco}
                                </li>
                                <li className="list-group-item">
                                    <b>Número:</b>
                                    <br></br>
                                    {pessoa.endereco.numero}
                                </li>
                                <li className="list-group-item">
                                    <b>Complemento:</b>
                                    <br></br>
                                    {pessoa.endereco.complemento}
                                </li>
                                <li className="list-group-item">
                                    <b>Bairro:</b>
                                    <br></br>
                                    {pessoa.endereco.bairro}
                                </li>
                                <li className="list-group-item">
                                    <b>CEP:</b>
                                    <br></br>
                                    {pessoa.endereco.cep}
                                </li>
                                <li className="list-group-item">
                                    <b>Cidade:</b>
                                    <br></br>
                                    {pessoa.endereco.cidade}
                                </li>
                                <li className="list-group-item">
                                    <b>UF:</b>
                                    <br></br>
                                    {pessoa.endereco.uf}
                                </li>
                
                            
                            </ul>


                        </div>
                    </div>
                    <Link className="btn btn-primary my-2 " to={"/"}>
                        Voltar para Lista
                    </Link>
                </div>
              
            </div>
        </div>


    );
}
