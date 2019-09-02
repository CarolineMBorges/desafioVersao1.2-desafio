import React, { Component } from 'react'
import '../Crud.css'
import { confirmAlert } from 'react-confirm-alert';
import InputMask from 'react-input-mask';
import { PostData } from '../../../services/PostData'

class CriarEndereco extends Component{

    constructor(props){
        super(props);
        this.state = {
            cpf:'',
            pais: '',
            estado: '',
            cidade: '',
            rua: '',
            complemento:'',
            numero:'',
            redirect: false
        };
        
        this.criarendereco = this.criarendereco.bind(this);
        this.onChange = this.onChange.bind(this);
    }


     /**
     * Essa função tem como finalidade criar no banco de dados o cadastro de um novo endereco para 
     * um cliente já cadastrado no banco de dados. A pessoa é verificada através do cpf.
     * 
     */


    criarendereco(){
        if(this.state.cpf && this.state.pais && this.state.estado){
            PostData('criarendereco',this.state).then((result) => {
                let responseJson = result;
                if(responseJson.userData){
                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                    alert("Endereco cadastrado com sucesso"); 
                }
                else
                    alert(result.error);
            });
        
        }
    }
    
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render() {

        return(
            <div>
                <form className="infoCliente" >
                    <ul><label>CPF do usuário que terá um novo endereco </label></ul>
                    <ul><InputMask mask="999.999.999-99" type="text" name="cpf" placeholder="Entre com o cpf" onChange={this.onChange}/></ul>

                    <ul>Informações do enredeço</ul>
                    <label>Pais: </label>
                    <input type="text" name="pais" placeholder="Pais" onChange={this.onChange} /><br/> 
                    <label>Estado: </label>
                    <input type="text" name="estado" placeholder="Estado" onChange={this.onChange}/><br/> 
                    <label>Cidade: </label>
                    <input type="text" name="cidade" placeholder="Cidade" onChange={this.onChange} /><br/> 
                    <label>Rua: </label>
                    <input type="text" name="rua" placeholder="rua" onChange={this.onChange}/><br/> 
                    <label>Complemento </label>
                    <input type="text" name="complemento" placeholder="Complemento" onChange={this.onChange} /><br/> 
                    <label>Numero </label>
                    <input type="text" name="numero" placeholder="Número" onChange={this.onChange}/><br/>   
                    <ul><input className="botao" type="submit" value="Inserir" onClick={this.criarendereco}/></ul>
            </form>

            
        </div>
        );
    }
}

export default CriarEndereco;