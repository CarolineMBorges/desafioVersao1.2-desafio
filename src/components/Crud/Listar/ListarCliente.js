import React, { Component } from 'react'
import '../Crud.css'
import InputMask from 'react-input-mask';
import { PostData } from '../../../services/PostData'


class ListarCliente extends Component{

    constructor(props){
        super(props);

        this.state = {
            cpf:'',    
            dados:[],
            redirect: false,
            };

        this.pesquisar = this.pesquisar.bind(this);
        this.onChange = this.onChange.bind(this);
        this.listarclientes = this.listarclientes.bind(this);

        }


    /**
     * Essa função tem como finalidade pesquisar um cliente através do seu cpf
     * 
     */

    pesquisar(e){
        if(this.state.cpf){
            PostData('pesquisar', this.state).then((result) =>{
                let responseJson = result;
                if(responseJson.userData){
                    alert('Dados do cliente ' +
                          '\nNome: '+ responseJson.userData.nome_cliente +
                          '\nCPF: '+ responseJson.userData.cpf +
                          '\nRG: '+ responseJson.userData.rg +
                          '\nTelefone: '+ responseJson.userData.telefone +
                          '\nData de nascimento' + responseJson.userData.data_nascimento );
                }
                else{
                    alert('Usuário não existe');
                }
            });

        }
    }

     /**
     * Essa função tem como finalidade listar do banco de dados o cadastro completo de pessoas.
     * 
     */

    listarclientes(e){
        let data = JSON.parse(sessionStorage.getItem("userData"));
        let postData = { id_cliente: data.userData.id_cliente};
        PostData('listarclientes', postData).then((result) => {
            let responseJson = result;
            if(responseJson.userData){
                this.setState({
                 dados  : responseJson.userData
                });
            }
        });
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    componentDidMount(){
        this.listarclientes();
      }

    render() {
        const lista = this.state.dados.map(e => 
            <ul key={e.id_cliente}><b>Nome:     </b>    {e.nome_cliente}    <ul />
                                   <b>Cpf:      </b>    {e.cpf}             <ul />
                                   <b>Rg:       </b>    {e.rg}              <ul />
                                   <b>Telefone: </b>    {e.telefone}        <ul />
                                   <b>Data de nascimento:</b>   {e.data_nascimento}<ul />
                                   <b>Pais:</b>         {e.pais}<ul />
                                   <b>Estado:</b>       {e.estado}<ul />
                                   <b>Cidade:</b>       {e.cidade}<ul />
                                   <b>Rua:</b>          {e.rua}<ul />
                                   <b>Complemento:</b>  {e.complemento}<ul />
                                   <b>Numero:</b>       {e.numero}<ul />
        </ul>)

        return (
        <div>
             <div className="pagina" >
                     <div className="estrutura">
                            <ul><InputMask mask="999.999.999-99" type="text" name="cpf" placeholder="Entre com o cpf" onChange={this.onChange}/>
                            <input className="botao" type="submit" value="Pesquisar por cpf" onClick={this.pesquisar}/></ul>
                            <ul><label>Todos os usuário</label></ul> 
                            {lista}
                    </div>
                 </div>    
        
        </div>
        );
}
}

export default ListarCliente;