import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CiMenuKebab } from 'react-icons/ci';
import './index.scss';

export default function MenuColecao() {
    const [menuAberto, setMenuAberto] = useState(false);
    const navigate = useNavigate();

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <div className="opcoes-colecao">
            <CiMenuKebab className="icone-menu" onClick={alternarMenu} />
            {menuAberto && (
                <div className="menu-opcoes">
                    <button onClick={() => alert('Alterar Coleção')}>Alterar Coleção</button>
                    <button onClick={() => alert('Excluir Coleção')}>Excluir Coleção</button>
                    <button onClick={() => navigate('/adicionar-video')}>Adicionar Vídeos</button>
                </div>
            )}
        </div>
    );
}