import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CiMenuKebab } from 'react-icons/ci';
import './index.scss';
import axios from 'axios';

export default function MenuColecao({ idColecao, buscarColecoes, API_URL }) {
    const [menuAberto, setMenuAberto] = useState(false);
    const navigate = useNavigate();

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    async function excluirColecao(idColecao) {
        const token = localStorage.getItem('TOKEN'); 
        
        try {
            await axios.delete(`${API_URL}/colecao/${idColecao}`, { 
                headers: { 'x-access-token': token } 
            }); 
            
            alert(`Coleção N° ${idColecao} excluída com sucesso!`); 
            buscarColecoes(); // Chama a função para atualizar a lista de coleções 
            } 
            catch (error) { 
                console.error("Erro ao excluir coleção:", error); 
                alert('Erro ao excluir coleção'); 
            } 
        }


            return (
                <div className="opcoes-colecao">
                    <CiMenuKebab className="icone-menu" onClick={alternarMenu} />
                    {menuAberto && (
                        <div className="menu-opcoes">
                            <button onClick={() => navigate(`/adicionar-colecao/${idColecao}`)}>Alterar Coleção</button>
                            <button onClick={() => excluirColecao(idColecao)}>Excluir Coleção</button>
                            <button onClick={() => navigate(`/adicionar-material/${idColecao}`)}>Adicionar Materiais</button>
                        </div>
                    )}
                </div>
            );
        }