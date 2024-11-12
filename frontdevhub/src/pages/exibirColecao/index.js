import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import CardVideo from '../../components/cardVideo';

export default function ExibirColecao() {
    const navigate = useNavigate();

    return (
        <body>
            <Cabecalho />
            <div className="pagina-colecao">
                <header className="cabecalho-colecao">
                    <button onClick={() => navigate('/home')} className="botao-voltar">
                        <FiArrowLeft />
                    </button>
                    <div className="informacoes-colecao">
                        <div>
                        <h2>React Native</h2>
                        <p>JOSE JOSE JOSE JOSE JOSE JOSE JOSE JOSE JOSE JOSE JOSE JOSE</p>
                        </div>
                        <div>
                        <span className="data-colecao">10/11/2024</span>
                        </div>

                        <div>
                        <button className="botao-adicionar-video" onClick={() => navigate('/adicionar-video')}>
                            <FiPlus /> Adicionar Vídeo
                        </button>
                        </div>
                    </div>


                </header>

                <div className="grade-videos">
                    <CardVideo thumbnail="https://via.placeholder.com/150" titulo="Devhub for devs" duracao="22:35" />
                    <CardVideo thumbnail="https://via.placeholder.com/150" titulo="Devhub for devs" duracao="12:45" />
                    <CardVideo thumbnail="https://via.placeholder.com/150" titulo="Devhub for devs" duracao="02:25" />
                    <CardVideo thumbnail="https://via.placeholder.com/150" titulo="Devhub for devs" duracao="12:05" />
                </div>
            </div>
            <Rodape />
        </body>
    );
}
