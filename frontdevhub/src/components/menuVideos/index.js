import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CiMenuKebab } from 'react-icons/ci';
import './index.scss';
import axios from 'axios';
import { API_URL } from '../../api/constantes';

 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

export default function MenuVideos({idColecao, idMaterial, buscarMateriais}) {
    const [menuAberto, setMenuAberto] = useState(false);
    const navigate = useNavigate();

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    async function excluirMaterial(idMaterial) {
        const token = localStorage.getItem('TOKEN'); 
        
        try {
            await axios.delete(`${API_URL}/material/${idMaterial}`, { 
                headers: { 'x-access-token': token } 
            }); 
            
            toast.success(`Material N° ${idMaterial} excluído com sucesso!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            buscarMateriais(); // Chama a função para atualizar a lista de coleções 
            } 
            catch (error) { 
                console.error("Erro ao excluir material:", error); 
                toast.error('Erro ao excluir material', {
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
        <div className="opcoes-video">
            <ToastContainer />
            <CiMenuKebab className="icone-menu" onClick={alternarMenu} />
            {menuAberto && (
                <div className="menu-opcoes">
                    <button onClick={() => navigate(`/adicionar-material/${idColecao}/${idMaterial}`)}>Editar Material</button>
                    <button onClick={() => excluirMaterial(idMaterial)}>Excluir Material</button>
                </div>
            )}
        </div>
    );
}