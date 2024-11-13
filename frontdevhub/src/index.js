import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home';
import AdicionarColecao from './pages/adicionarColecao';
import ExibirColecao from './pages/exibirColecao';
import AdicionarVideo from './pages/adicionarVideo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/criar-colecao' element={<AdicionarColecao/>}/>
        <Route path='/exibir-colecao' element={<ExibirColecao/>}/>
        <Route path='/adicionar-video' element={<AdicionarVideo/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

