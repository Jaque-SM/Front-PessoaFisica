import axios from 'axios';


const PERSON_API_BASE_URL = "http://localhost:8080/api/pessoas";

class PersonService {

    getPessoas(){
        return axios.get(PERSON_API_BASE_URL);

    }

    createPessoaFisica(pessoa){
        return axios.post(PERSON_API_BASE_URL, pessoa );
    }

    getPessoaFisicaByNome(PessoaNome){
        return axios.get(PERSON_API_BASE_URL + '/'+ PessoaNome);
    }

    updatePessoaFisica(pessoaId, PessoaFisica){
        return axios.put(PERSON_API_BASE_URL + '/' + pessoaId, PessoaFisica);
    }

    deletePessoaFIsica(pessoaId){
        return axios.delete(PERSON_API_BASE_URL +'/'+pessoaId);
    }
    

}
export default new PersonService()