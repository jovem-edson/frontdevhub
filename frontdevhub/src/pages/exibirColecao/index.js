import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './index.scss';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { API_URL } from '../../api/constantes';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import CardVideo from '../../components/cardVideo';
import axios from 'axios';

export default function ExibirColecao() {
    const navigate = useNavigate();

    const location = useLocation();

    const { id } = useParams();


    const [colecao, setColecao] = useState(
        {
            "nome": "colecao 1",
            "descricao": "super descricao",
            "dataCriacao": "2024-11-12"
        }
    )

    async function buscarColecao() {
        let resp = await axios.get(`${API_URL}/colecao/${id}`, {
            headers: { 'x-access-token': token }
        });
        setColecao(resp.data);
    }


    const [listaMateriais, setListaMateriais] = useState([
        {
            "nome": "colecao 1",
            "descricao": "super descricao",
            "url":"www.url.com",
            "dataCriacao": "2024-11-12"
        },
        {
            "nome": "material 2",
            "descricao": "super descricao",
            "url":"www.url.com",
            "dataCriacao": "2024-11-12"
        }, {
            "nome": "material 3",
            "descricao": "super descricao",
            "url":"www.url.com",
            "dataCriacao": "2024-11-12"
        }

    ])

    const [atualizarListaMateriais, setAtualizarListaMateriais] = useState(false)
const [atualizarColecao, setAtualizarColecao] = useState(false)
    const token = localStorage.getItem('TOKEN');

    useEffect(() => {
        if (!localStorage.getItem('TOKEN')) {
            navigate('/login');
        }
        buscarColecao();
        buscarMateriais();
    }, []);

    useEffect(() => {
        if (location.state && location.state.refresh) {
            setAtualizarListaMateriais(true); // Atualiza a lista
            setAtualizarColecao(true);
        }
    }, [location.state]);

    useEffect(() => {
        if (!localStorage.getItem('TOKEN')) {
            navigate('/login');
        }
        buscarColecao();
        buscarMateriais();
    }, [atualizarColecao, atualizarListaMateriais]);



    async function buscarMateriais() {
        let resp = await axios.get(`${API_URL}/materiais/${id}`, {
            headers: { 'x-access-token': token }
        });
        setListaMateriais(resp.data);
        setAtualizarListaMateriais(false);
        setAtualizarColecao(false);
    }


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
                        <h2> {colecao.nome} </h2>
                        <p>{colecao.descricao}</p>
                        </div>
                        <div>
                        <span className="data-colecao">{`Criada em ${new Date(colecao.dataCriacao).toLocaleDateString()}`}</span>

                        </div>

                        <div>
                        <button className="botao-adicionar-video" onClick={() => navigate(`/adicionar-material/${id}`)}>
                            <FiPlus /> Adicionar Material
                        </button>
                        </div>
                    </div>


                </header>

                <div className="grade-videos">
                {listaMateriais.map((material) => (

                    <CardVideo thumbnail="https://via.placeholder.com/150" idColecao={id} idMaterial={material.idMaterial} buscarMateriais={buscarMateriais} titulo={material.nome} descricao={material.descricao} url={material.url} dataCriacao={material.dataCriacao} />
                )
            )
        }
                </div>
            </div>
            <Rodape />
        </body>
    );
}
