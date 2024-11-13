import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Logon';
import Home from './pages/home';
import AdicionarColecao from './pages/adicionarColecao';
import ExibirColecao from './pages/exibirColecao';
import AdicionarVideo from './pages/adicionarMaterial';

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

        <Route path='/exibir-colecao:/id' element={<ExibirColecao/>}/>
        <Route path='/adicionar-material' element={<AdicionarVideo/>}/>
        <Route path='/adicionar-material:id' element={<AdicionarVideo/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

