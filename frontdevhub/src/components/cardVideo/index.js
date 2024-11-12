import './index.scss';

export default function CardVideo({ thumbnail, titulo, duracao }) {
    return (
        <div className="card-video">
            <img src={thumbnail} alt={`Thumbnail de ${titulo}`} className="thumbnail-video" />
            <div className="informacoes-video">
                <h3 className="titulo-video">{titulo}</h3>
                <span className="duracao-video">{duracao}</span>
            </div>
        </div>
    );
}
