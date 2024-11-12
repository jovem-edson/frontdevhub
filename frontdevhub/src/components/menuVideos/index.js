import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CiMenuKebab } from 'react-icons/ci';
import './index.scss';

export default function MenuVideos() {
    const [menuAberto, setMenuAberto] = useState(false);
    const navigate = useNavigate();

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <div className="opcoes-video">
            <CiMenuKebab className="icone-menu" onClick={alternarMenu} />
            {menuAberto && (
                <div className="menu-opcoes">
                    <button onClick={() => alert('Alterar Vídeo')}>Alterar Vídeo</button>
                    <button onClick={() => alert('Excluir Vídeo')}>Excluir Vídeo</button>
                </div>
            )}
        </div>
    );
}