import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { useNavigate } from 'react-router-dom';

export default function AdicionarColecao() {
    const navigate = useNavigate();

    return (
        <div>
            <Cabecalho />
            <div className='criar-colecao'>
                <h2>
                    <button onClick={() => navigate('/home')} className="botao-voltar">
                        &#8592;
                    </button>
                    Criar Nova Coleção
                </h2>

                <form className='formulario-colecao'>
                    <div className='formulario-campo'>
                        <label for='capa'>Capa da Coleção</label>
                        <input
                            type='text'
                            id='capa'
                            name='capa'
                            placeholder='URL da imagem de capa'
                        />
                    </div>

                    <div className='formulario-campo'>
                        <label for='nome'>Nome da Coleção</label>
                        <input
                            type='text'
                            id='nome'
                            name='nome'
                            placeholder='Nome da coleção'
                        />
                    </div>

                    <div className='formulario-campo'>
                        <label for='descricao'>Descrição</label>
                        <textarea
                            id='descricao'
                            name='descricao'
                            placeholder='Breve descrição da coleção'
                        />
                    </div>

                    <div className='formulario-campo'>
                        <label for='data'>Data de Criação</label>
                        <input
                            type='date'
                            id='data'
                            name='data'
                        />
                    </div>

                    <button type='submit' className='botao-colecao'>Criar Coleção</button>
                </form>
            </div>
            <Rodape />
        </div>
    );
}
