import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/home';
import AdicionarColecao from './pages/adicionarColecao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/criar-colecao' element={<AdicionarColecao/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

