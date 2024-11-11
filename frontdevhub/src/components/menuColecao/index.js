import React, { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import './index.scss';

export default function ColecaoOpcoes() {
    const [menuAberto, setMenuAberto] = useState(false);

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
                    <button onClick={() => alert('Adicionar Vídeos')}>Adicionar Vídeos</button>
                </div>
            )}
        </div>
    );
}