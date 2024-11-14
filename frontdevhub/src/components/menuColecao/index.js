import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CiMenuKebab } from 'react-icons/ci';
import './index.scss';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

            toast.success(`Coleção N° ${idColecao} excluído com sucesso!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            buscarColecoes(); // Chama a função para atualizar a lista de coleções 
        }
        catch (error) {
            console.error("Erro ao excluir coleção:", error);
            toast.error('Erro ao excluir coleção', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }



return (
    <div className="opcoes-colecao">
        <ToastContainer />
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