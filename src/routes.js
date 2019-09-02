import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/Login/Login';
import Home from './components/Home/Home'
import CriarCliente from './components/Crud/Criar/CriarCliente';
import CriarEndereco from './components/Crud/Criar/CriarEndereco';
import ListarCliente from './components/Crud/Listar/ListarCliente';
import EditarCliente from './components/Crud/Editar/EditarCliente';
import ExcluirCliente from './components/Crud/Excluir/ExcluirCliente';
import NotFound from './components/NotFound/NotFound';


const Routes = () => (
    <BrowserRouter>
        <Route path='' component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/criarcliente' component={CriarCliente} />
        <Route path='/criarendereco' component={CriarEndereco} />
        <Route path='/editarcliente' component={EditarCliente} />
        <Route path='/listarcliente' component={ListarCliente} />
        <Route path='/excluircliente' component={ExcluirCliente} />
        <Route path='/notfound' component={NotFound} />

    </BrowserRouter>
);

export default Routes;