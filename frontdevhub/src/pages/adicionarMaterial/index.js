import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './index.scss';
import { FiArrowLeft } from 'react-icons/fi';
import Rodape from '../../components/rodape';
import Cabecalho from '../../components/cabecalho';
import axios from 'axios';
import { API_URL } from '../../api/constantes';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdicionarMaterial() {
    const navigate = useNavigate();

    const { id, idmaterial } = useParams();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [url, setURL] = useState('');
    const [dataCriacao, setDataCriacao] = useState('');




    useEffect(() => {
        if (idmaterial != undefined) {
            buscarPorId();
        }
    }, [])

    async function buscarPorId() {
        let token = localStorage.getItem('TOKEN');

        let resp = await axios.get(`${API_URL}/material/${idmaterial}`, {
            headers: { 'x-access-token': token }
        });

        setNome(resp.data.nome)
        setDescricao(resp.data.descricao)
        setURL(resp.data.url)
        setDataCriacao(resp.data.dataCriacao)
    }


    async function salvar(event) {
        event.preventDefault();

        if (nome == "" || url == "" || descricao == "") {
     
            if (nome == "") {
                toast.warn('o campo de título deve ser preenchido')
            }

            if (descricao == "") {
                toast.warn('o campo de descrição deve ser preenchido')
            }

            if (url == "") {
                toast.warn('o campo de URL deve ser preenchido')
            }

         
        
            return
        }

        let body = {
            'nome': nome,
            'descricao': descricao,
            'url': url
        }

        let token = localStorage.getItem('TOKEN');

        if (idmaterial == undefined) {
            let resp = await axios.post(`${API_URL}/material/${id}`, body, { headers: { 'x-access-token': token } });
            // alert(`Registro de ID ${resp.data.novoId} adicionado`);

        }
        else {
            let resp = await axios.put(`${API_URL}/material/${idmaterial}`, body, { headers: { 'x-access-token': token } });
            // alert(`Registro de ID ${id} alterado`);


        }

        voltarParaColecao()


    }




    const voltarParaColecao = () => {
        navigate(-1);
    };

    return (
        <body>
            <Cabecalho />
            <ToastContainer />
            <div className="pagina-adicionar-video">
                <header className="cabecalho-adicionar-video">
                    <button className="botao-voltar" onClick={voltarParaColecao}>
                        <FiArrowLeft />
                    </button>
                    <h2>
                        {idmaterial == undefined ?
                            'Adicionar Material' :
                            'Editar Material'    
                    }

                    </h2>
                </header>

                <form 
                className="formulario-adicionar-video"
                onSubmit={salvar}
                >
                    {/* <div className="campo-formulario">
                        <label>Thumbnail</label>
                        <input type="text" placeholder="Thumbnail" />
                    </div> */}

                    <div className="campo-formulario">
                        <label>Título*</label>
                        <input 
                        value={nome} 
                        onChange={e => setNome(e.target.value)} 

                        type="text" 
                        placeholder="Título do material" />
                    </div>

                    <div className="campo-formulario">
                        <label>Descrição</label>
                        <textarea 
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)} 

                         placeholder="Descrição do material"
                          />
                    </div>

                    <div className="campo-formulario">
                        <label>URL*</label>
                        <input value={url}                            
                         onChange={e => setURL(e.target.value)} 
 type="url" placeholder="URL do material" />
                    </div>

                    {/* <div className="campo-formulario">
                        <label>Duração</label>
                        <input type="text" placeholder="Duração do vídeo" />
                    </div> */}

                    <button type="submit" className="botao-salvar">Salvar Material</button>
                </form>
            </div>
            <Rodape />
        </body>
    );
}
