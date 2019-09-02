import React, { Component } from 'react'
import '../Crud.css'
import InputMask from 'react-input-mask';
import { Redirect, Link  } from 'react-router-dom'
import { PostData } from '../../../services/PostData'

class CriarCliente extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome_cliente: '',
            data_nascimento: '',
            cpf: '',
            rg: '',
            telefone:'',
            pais: '',
            estado: '',
            cidade: '',
            rua: '',
            complemento:'',
            numero:'',
            redirect: false
        };

        this.criarcliente = this.criarcliente.bind(this);
        this.onChange = this.onChange.bind(this);

    }

     /**
     * Essa função tem como finalidade criar no banco de dados o cadastro de pessoas.
     * 
     */

    criarcliente() {
        if(this.state.nome_cliente && this.state.cpf && this.state.rg){
            PostData('criarcliente',this.state).then((result) => {
                let responseJson = result;
                if(responseJson.userData){
                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                    alert("Cliente cadastrado com sucesso"); 
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
                <form className="infoCliente">
                    Informações do cliente <ul />
                    <label>Nome </label>
                    <input type="text" name="nome_cliente" placeholder="Nome do cliente" onChange={this.onChange} /><br/> 
                    <label>Data de Nascimento </label>
                    <input type="date" name="data_nascimento" onChange={this.onChange}/><br/> 
                    <label>CPF </label>
                    <InputMask mask="999.999.999-99" type="text" name="cpf" placeholder="Cpf" onChange={this.onChange}/> <br/> 
                    <label>RG </label>
                    <InputMask mask="99.999.999-9" type="text" name="rg" placeholder="Rg" onChange={this.onChange}/> <br/>
                    <label>Telefone</label>
                    <InputMask mask="(99)99999-9999" type="text" name="telefone" placeholder="Telefone" onChange={this.onChange} />                            

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

                    <ul><input className="botao" type="submit" value="Salvar Dados" onClick={this.criarcliente}/></ul>
                </form>
            </div>
        );
    }
}

export default CriarCliente;