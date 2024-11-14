import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Logon';
import Home from './pages/home';
import AdicionarColecao from './pages/adicionarColecao';
import ExibirColecao from './pages/exibirColecao';
import AdicionarMaterial from './pages/adicionarMaterial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />

        <Route path='/home' element={<Home />} />
        <Route path='/adicionar-colecao' element={<AdicionarColecao/>}/>
        <Route path='/adicionar-colecao/:id' element={<AdicionarColecao/>}/>

        <Route path='/exibir-colecao/:id' element={<ExibirColecao/>}/>
        <Route path='/adicionar-material' element={<AdicionarMaterial/>}/>
        <Route path='/adicionar-material/:id' element={<AdicionarMaterial/>}/>
        <Route path='/adicionar-material/:id/:idmaterial' element={<AdicionarMaterial/>}/>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

