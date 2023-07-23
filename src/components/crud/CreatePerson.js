import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function CreatePerson () {
    
    let navigate = useNavigate();

        const [pessoa, setPessoas] = useState({
            nome: "",
            cpf: "",
            telefone: "",
            email: "",

        });

        const {nome, cpf, telefone, email } = pessoa;

        const onInputChange = (e) => {
            setPessoas({ ...pessoa, [e.target.nome]: e.target.value });
        };

        const onSubmit = (e) => {
            e.preventDefault();
            axios.post("http://localhost:8080/pessoa", pessoa);
            navigate("/");

        };
        

        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                       
                        <div className="card-body">

                            <form onSubmit={(e)=> onSubmit(e)}>
                            <div className="form-group">
                                <label>Nome: </label>
                                <input type='text' placeholder="nome" name="nome" className="form-control"
                                    value={nome} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div className="form-group">
                                <label>CPF: </label>
                                <input placeholder="cpf" name="cpf" className="form-control"
                                    value={this.state.cpf} onChange={this.changeCpfPessoaHandler} />
                            </div>

                            <div className="form-group">
                                <label>Telefone: </label>
                                <input placeholder="telefone" name="telefone" className="form-control"
                                    value={this.state.telefone} onChange={this.changeTelefonePessoaHander} />
                            </div>


                            <div className="form-group">
                                <label>Email: </label>
                                <input placeholder="email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.changeEmailPessoaHandler} />
                            </div>
                        

                        <button className="btn btn-success" onClick={this.saveOrUpdatePessoaFisica.bind(this)}>Save</button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>    
                        </form>

                        </div>
  
                    </div>

                </div>

            </div>

        );  

}










