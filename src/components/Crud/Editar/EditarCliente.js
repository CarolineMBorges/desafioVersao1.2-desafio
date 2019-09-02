import React, { Component } from 'react'
import '../Crud.css'

import InputMask from 'react-input-mask';
import { PostData } from '../../../services/PostData'

class EditarCliente extends Component{

    constructor(props){
        super(props);

        this.state = {
            cpf:'',
            data:[],
            nome_cliente:'',
            telefone:'',
            redirect: false,
            };

        this.pesquisar = this.pesquisar.bind(this);
        this.onChange = this.onChange.bind(this);
        this.alterarcliente = this.alterarcliente.bind(this);

    }

     /**
     * Essa função tem como finalidade fazer uma pesquisa na tabela clientes do banco de dados,
     * utilizando para isso, o cpf. Se a pessoa confirmar que o cliente encontrado será alterado,
     * será chamada a função alterarcliente()
     * 
     */

    pesquisar(e){
        if(this.state.cpf){
            PostData('pesquisar', this.state).then((result) =>{
                let responseJson = result;
                if(responseJson.userData){
                    let data = responseJson.userData
                    console.log(data)
                    const nome = responseJson.userData.nome_cliente
                    console.log(nome)
                    return data
                   
                }else{
                    alert('Usuário não existe');
                }
            });

        }
    }


    /**
     * Essa função tem como finalidade alterar no banco de dados o cadastro de pessoas.
     * 
     */

    alterarcliente(e){
        e.preventDefault();
            let data = JSON.parse(sessionStorage.getItem("userData"));
            let postData = { id_cliente: data.userData.id_cliente };
            if (this.state.userData) {
                PostData('alterarcliente', postData).then((result) => {
                let responseJson = result;
                
                this.setState({data: responseJson.userData});
               
            });
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleTextChanged(e) {
      }

    render() {

        console.log(this.pesquisar())

        return(
        <div>
            <div className="infoCliente">
                <ul><label>Pesquise o usuário que deseja editar pelo cpf </label></ul>
                <ul><InputMask mask="999.999.999-99" type="text" name="cpf" placeholder="Entre com o cpf" onChange={this.onChange}/></ul>
                <ul><input className="botao" type="submit" value="Pesquisar" onClick={this.pesquisar}/></ul>
                <ul><input className="botao"  type="submit" value="Alterar" onClick={this.alterarcliente} /></ul>
            </div>
            <ul>Informações do cliente </ul>
            <div className="infoCliente">
                <label>Nome </label>
                <input type="text" name={this.state.nome} placeholder={this.state.nome} onChange={(e) => this.handleTextChanged(e)} /><br/> 
                <label>Data de Nascimento </label>
                <input type="date" name={"data_nascimento"} onChangeBusca={this.onChangeBusca}/><br/> 
                <label>RG </label>
                <InputMask mask="99.999.999-9" type="text" value={this.state.data.rg} placeholder="Rg" onChange={this.onChange}/> <br/>
                <label>Telefone</label>
                <InputMask mask="(99)99999-9999" type="text" name="telefone" placeholder="Telefone" onChange={this.onChange} />                            
            </div>
                    
            <ul><input className="botao" type="submit" value="Salvar Dados" onClick={this.criarcliente}/></ul>
            </div>
            );
         }    
     }

export default EditarCliente;