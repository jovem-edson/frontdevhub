import MenuVideos from '../menuVideos';
import './index.scss';

export default function CardVideo({ idColecao, idMaterial, buscarMateriais, thumbnail, titulo, descricao, url, dataCriacao }) {
    const fullUrl = /^https?:\/\//.test(url) ? url : `https://${url}`;

    return (
        <div className="card-video">
            <img src={thumbnail} alt={`Thumbnail de ${titulo}`} className="thumbnail-video" />
            <div className="informacoes-video">
                <div className='cabecalho-video'>
                    <a href={fullUrl} target='_blank' className="titulo-video">{titulo}</a>
                    <a>
                        <MenuVideos idColecao={idColecao} idMaterial={idMaterial} buscarMateriais={buscarMateriais}/>
                    </a>
                </div>
                <p> { descricao }</p>
                <span className="data-colecao">{`${new Date(dataCriacao).toLocaleDateString()}`}</span>

            </div>
        </div>
    );
}
