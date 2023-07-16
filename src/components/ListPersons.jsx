import React, { Component } from 'react'
import PersonService from '../services/PersonService';

class ListPersons extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pessoas: []
        }
        this.addPessoaFisica = this.addPessoaFisica.bind(this);
        this.editPessoaFisica = this.editPessoaFisica.bind(this);
        this.deletePessoaFisica = this.deletePessoaFisica.bind(this);

    }

    deletePessoaFisica(id) {
        PersonService.deletePessoaFisica(id).then(
            res => {
                this.setState({ pessoas: this.state.pessoas.filter(pessoa => pessoa.id !== id) });
            });
    }

    viewPessoaFisica(pessoaNome) {
        this.props.history.push(`/view-pessoa/${pessoaNome}`);
    }

    editPessoaFisica(id) {
        this.props.history.push(`/add-pessoa/${id}`);
    }

    componentDidMount() {
        PersonService.getPessoas().then((res) => {
            this.setState({ pessoas: res.data });
        });

    }

    addPessoaFisica() {
        this.props.history.push('/add-pessoa/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Person  List</h2>

                <div className="row">
                    <button className="btn btn-primary" onClick={this.addPessoaFisica}> Add Pessoa</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Pessoa Nome</th>
                                <th> Pessoa CPF</th>
                                <th> Pessoa Telefone</th>
                                <th> Pessoa E-mail</th>

                                <th> Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pessoas.map(
                                    pessoa =>
                                        <tr key={pessoa.id}>
                                            <td> {pessoa.firstName} </td>
                                            <td> {pessoa.lastName}</td>
                                            <td> {pessoa.emailId}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(pessoa.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(pessoa.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(pessoa.pessoaNome)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>


        )



    }


}