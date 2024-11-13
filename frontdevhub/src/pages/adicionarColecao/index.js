import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../api/constantes';

export default function AdicionarColecao() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [url, setURL] = useState('');
    const [dataCriacao, setDataCriacao] = useState('');





    const { id } = useParams();

    useEffect(() => {
        if (id != undefined) {
            buscarPorId();
        }
    }, [])


    async function buscarPorId() {
        let token = localStorage.getItem('TOKEN');

        let resp = await axios.get(`${API_URL}/colecao/${id}`, {
            headers: { 'x-access-token': token }
        });

        setNome(resp.data.nome)
        setDescricao(resp.data.descricao)
    }


    async function salvar(event) {
        event.preventDefault();

        if (nome == "") {
            // if (descricao == "") {
            //     alert('o campo de descrição deve ser preenchido')
            // }

            if (nome == "") {
                alert('o campo de nome deve ser preenchido')
            }

            return
        }

        let body = {
            'nome': nome,
            'descricao': descricao,
        }

        let token = localStorage.getItem('TOKEN');

        if (id == undefined) {
            let resp = await axios.post(`${API_URL}/colecao`, body, { headers: { 'x-access-token': token } });
            // alert(`Registro de ID ${resp.data.novoId} adicionado`);

        }
        else {
            let resp = await axios.put(`${API_URL}/colecao/` + id, body, { headers: { 'x-access-token': token } });
            // alert(`Registro de ID ${id} alterado`);


        }

        navigate('/home')


    }




    return (
        <div>
            <Cabecalho />
            <div className='criar-colecao'>
                <h2>
                    <button onClick={() => navigate('/home')} className="botao-voltar">
                        &#8592;
                    </button>
                    
                    {id == undefined ?
                    'Criar Nova Coleção'
                    :
                    'Editar Coleção'    
                }
                </h2>

                <form className='formulario-colecao' onSubmit={salvar}>
                    {/* <div className='formulario-campo'>
                        <label for='capa'>Capa da Coleção</label>
                        <input
                            type='text'
                            id='capa'
                            name='capa'
                            placeholder='URL da imagem de capa'
                        />
                    </div> */}

                    <div className='formulario-campo'>
                        <label for='nome'>Nome da Coleção*</label>
                        <input
                            type='text'
                            id='nome'
                            name='nome'
                            placeholder='Nome da coleção'
                            value={nome} 
                            onChange={e => setNome(e.target.value)} 
                        />
                    </div>

                    <div className='formulario-campo'>
                        <label for='descricao'>Descrição</label>
                        <textarea
                            id='descricao'
                            name='descricao'
                            placeholder='Breve descrição da coleção'
                            value={descricao} 
                            onChange={e => setDescricao(e.target.value)}
                        />
                    </div>
{/* 
                    <div className='formulario-campo'>
                        <label for='data'>Data de Criação</label>
                        <input
                            type='date'
                            id='data'
                            name='data'
                        />
                    </div> */}

                    <button type='submit' className='botao-colecao'>Criar Coleção</button>
                </form>
            </div>
            <Rodape />
        </div>
    );
}
