import { useNavigate } from 'react-router-dom';
import './index.scss';
import { FiArrowLeft } from 'react-icons/fi';
import Rodape from '../../components/rodape';
import Cabecalho from '../../components/cabecalho';

export default function AdicionarVideo() {
    const navigate = useNavigate();

    const voltarParaColecao = () => {
        navigate(-1);
    };

    return (
        <body>
            <Cabecalho />
            <div className="pagina-adicionar-video">
                <header className="cabecalho-adicionar-video">
                    <button className="botao-voltar" onClick={voltarParaColecao}>
                        <FiArrowLeft />
                    </button>
                    <h2>Adicionar Novo Vídeo</h2>
                </header>

                <form className="formulario-adicionar-video">
                    <div className="campo-formulario">
                        <label>Thumbnail</label>
                        <input type="text" placeholder="Thumbnail" />
                    </div>

                    <div className="campo-formulario">
                        <label>Título</label>
                        <input type="text" placeholder="Título do vídeo" />
                    </div>

                    <div className="campo-formulario">
                        <label>Descrição</label>
                        <textarea placeholder="Descrição do vídeo" />
                    </div>

                    <div className="campo-formulario">
                        <label>URL</label>
                        <input type="text" placeholder="URL do vídeo" />
                    </div>

                    <div className="campo-formulario">
                        <label>Duração</label>
                        <input type="text" placeholder="Duração do vídeo" />
                    </div>

                    <button type="submit" className="botao-salvar">Salvar Vídeo</button>
                </form>
            </div>
            <Rodape />
        </body>
    );
}
