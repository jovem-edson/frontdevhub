import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import Colecao from '../../components/colecao'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../api/constantes';

export default function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    const [showLogin, setShowLogin] = useState(false);
    const [listaColecoes, setListaColecoes] = useState([
        {
            "nome": "colecao 1",
            "descricao": "super descricao",
            "dataCriacao": "2024-11-12"
        },
        {
            "nome": "colecao 2",
            "descricao": "super descricao",
            "dataCriacao": "2024-11-12"
        },
        {
            "nome": "colecao 3",
            "descricao": "super descricao",
            "dataCriacao": "2024-11-12"
        }

    ])

    const [atualizaListaColecoes, setAtualizarListaColecoes] = useState(false)

    const token = localStorage.getItem('TOKEN');

    useEffect(() => {
        if (!localStorage.getItem('TOKEN')) {
            navigate('/login');
        }
        buscarColecoes();
    }, []);

    useEffect(() => {
        if (location.state && location.state.refresh) {
            setAtualizarListaColecoes(true); // Atualiza a lista
        }
    }, [location.state]);

    useEffect(() => {
        if (location.state && location.state.showLogin) {
            setShowLogin(true);
        }
    }, [location]);

    async function buscarColecoes() {
        let resp = await axios.get(`${API_URL}/colecao`, {
            headers: { 'x-access-token': token }
        });
        setListaColecoes(resp.data);
        setAtualizarListaColecoes(false);
    }



    return (
        <body className='pagina-home'>
            <Cabecalho showLogin={showLogin}
                onLoginClick={() => setShowLogin(!showLogin)} />

            <main className='home-conteudo'>
                <section className='conteudo-colecoes'>
                    <h1>
                        COLEÇÕES RECENTES
                    </h1>

                    <div className='colecoes'>
                        {listaColecoes.map((colecao) => (

                            <Colecao
                                idColecao={colecao.idColecao}
                                nome={colecao.nome}
                                descricao={colecao.descricao}
                                dataCriacao= {`Criada em ${new Date(colecao.dataCriacao).toLocaleDateString()}`}
                                buscarColecoes={buscarColecoes}
                                API_URL={API_URL}
                            />


                        )
                        )
                        }
                    </div>
                </section>

                <section className='conteudo-criar'>
                    <div className='criar-info'>
                        <h1>
                            DEVHUB FOR DEVS
                        </h1>

                        <h2>
                            FELL ON BLACK DAYS
                        </h2>

                        <div className='criar-botoes'>
                            <button className='botao-secundario'>
                                VISUALIZAR
                            </button>

                            <button onClick={() => navigate('/adicionar-colecao')} className='botao-primario'>
                                ADICIONAR
                            </button>
                        </div>

                    </div>
                </section>

            </main>

            <Rodape />



        </body>
    )
}