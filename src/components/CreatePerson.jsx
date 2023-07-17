import React, { Component } from 'react'
import PersonService from '../services/PersonService';

class CreatePerson extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nome: '',
            cpf: '',
            telefone: '',
            email: ''
        }
        this.changeNomePessoaHandler = this.changeNomePessoaHandler.bind(this);
        this.changeCpfPessoaHandler = this.changeCpfPessoaHandler.bind(this);
        this.changeTelefonePessoaHander = this.changeTelefonePessoaHander.bind(this);
        this.changeEmailPessoaHandler = this.changeEmailPessoaHandler.bind(this);
    }

    componentDidMount() {

        if (this.state.id === '_add') {
            return
        }
        else {
            PersonService.getPessoaFisicaByNome(this.state.nome).then(
                (res) => {
                    let pessoa = res.data;
                    this.setState({
                        nome: pessoa.nome,
                        cpf: pessoa.cpf,
                        telefone: pessoa.telefone,
                        email: pessoa.email

                    });

                });

        }

    }
    saveOrUpdatePessoaFisica = (e) => {
        e.preventDefault();
        let pessoa = { nome: this.state.nome, cpf: this.state.cpf, telefone: this.state.telefone, email: this.state.email };
        console.log('pessoa => ' + JSON.stringify(pessoa))

        if (this.state.id === '_add') {
            PersonService.createPessoaFisica(pessoa).then(res => {
                this.props.history.push('/pessoas');

            });

        } else {
            PersonService.updatePessoaFisica(this.state.id, pessoa).then(
                res => {
                    this.props.history.push('/pessoas');
                });

        }
    }

    changeNomePessoaHandler = (event) => {
        this.setState({ nome: event.target.value });
    }

    changeCpfPessoaHandler = (event) => {
        this.setState({ cpf: event.target.value });
    }

    changeTelefonePessoaHander = (event) => {
        this.setState({ telefone: event.target.telefone });
    }

    changeEmailPessoaHandler = (event) => {
        this.setState({ email: event.target.email });
    }

    cancel() {
        this.props.history.push('/pessoas');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Pessoa</h3>
        } else {
            return <h3 className="text-center">Update Pessoa</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            this.getTitle()
                        }
                        <div className="card-body">

                            <form>
                            <div className="form-group">
                                <label>Nome: </label>
                                <input placeholder="nome" name="nome" className="form-control"
                                    value={this.state.nome} onChange={this.changeNomePessoaHandler} />
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
                        

                        <button className="btn btn-success" onClick={this.saveOrUpdatePessoaFisica}>Save</button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>    
                        </form>

                        </div>
  
                    </div>

                </div>

            </div>

        )



    }

}
export default CreatePerson









