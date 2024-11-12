import './index.scss'
import MenuColecao from '../menuColecao';
import { useNavigate } from 'react-router-dom';
export default function Colecao({idColecao, nome, descricao, dataCriacao, buscarColecoes, API_URL}) {
    const navigate = useNavigate();

    return (
        <div className='colecao-container'>
            <div className='colecao-foto'>

            </div>

            <div className='colecao-info'>
                <div>
                    <div className='colecao-cabecalho'>
                        <a onClick={() => navigate('/exibir-colecao')}>
                            <h1 className='colecao-titulo'>
                                {nome}
                            </h1>
                        </a>

                        <a>
                            <MenuColecao
                             idColecao={idColecao}
                             buscarColecoes={buscarColecoes}
                             API_URL={API_URL}
                             />
                        </a>
                    </div>
                    <p className='colecao-desc'>
                        {descricao}
                    </p>
                </div>

                <div>
                    <p className='colecao-data'>
                        {dataCriacao}
                    </p>


                </div>
            </div>
        </div>
    )
}