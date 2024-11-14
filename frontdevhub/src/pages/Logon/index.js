import './index.scss';
import axios from 'axios'

import Cabecalho from '../../components/cabecalho';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../api/constantes';

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [showLogin, setShowLogin] = useState(false)

    const navigate = useNavigate();

    async function logar() {
        try {
            let body = {
                "email": email,
                "senha": senha
            }

            let resp = await axios.post(`http://${API_URL}/login`, body);

            localStorage.setItem('TOKEN', resp.data.token);

            navigate('/home', { state: { showLogin: true } });
        }
        catch (err) {
            toast.error(err.response.data.erro || "Ocorreu um erro ao tentar fazer login.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    function toggleLogin() {
        setShowLogin(!showLogin)
    }

    return (
        <body className='pagina-login'>
            <Cabecalho onLoginClick={toggleLogin} showLogin={showLogin} />
            <main className='pagina-ln-login'>
                <ToastContainer />


                <div className='background-image'>
                    <img src='./img/Fundo.png' alt="Background" />
                </div>

                <h1 className='main-title'>
                    <span className="conteudo">Conteúdo </span>
                    <span className="dev">dev</span>
                    <span className="em">, em </span>
                    <span className="um">um </span>
                    <span className="so">só </span>
                    <span className="lugar">lugar! 👌</span>
                </h1>

                <section className='icons-wrapper'>
                    <div className='icons'>
                        <img src='./img/azure.png' alt="Azure" />
                        <img src='./img/mysql.png' alt="MySQL" />
                        <img src='./img/netifly.png' alt="Netlify" />
                        <img src='./img/node.png' alt="Node.js" />
                        <img src='./img/prompt.png' alt="Prompt" />
                        <img src='./img/react.png' alt="React" />
                        <img src='./img/sass.png' alt="Sass" />
                        <img src='./img/visual.png' alt="Visual Studio Code" />

                        <img src='./img/azure.png' alt="Azure" />
                        <img src='./img/mysql.png' alt="MySQL" />
                        <img src='./img/netifly.png' alt="Netlify" />
                        <img src='./img/node.png' alt="Node.js" />
                        <img src='./img/prompt.png' alt="Prompt" />
                        <img src='./img/react.png' alt="React" />
                        <img src='./img/sass.png' alt="Sass" />
                        <img src='./img/visual.png' alt="Visual Studio Code" />
                    </div>

                </section>


                <section>
                    {showLogin && (
                        <div className='modal-container' onClick={toggleLogin}>
                            <div className='form' onClick={(e) => e.stopPropagation()}>
                                <img className='close' src='./img/fechar.png' alt="Close" onClick={toggleLogin} />

                                <div className='form-header'>
                                    <div className='form-logo'>
                                        <h1>DEV<p>HUB</p></h1>
                                    </div>
                                </div>

                                <div className='form-fields'>
                                    <p>E-mail</p>
                                    <div>

                                        <input placeholder='admin@gmail.com' type='text' value={email} onChange={e => setEmail(e.target.value)} />
                                        <img src='./img/usuario.png' alt="Email" />
                                    </div>
                                    <p>Senha</p>
                                    <div>

                                        <input placeholder='admin' type='password' value={senha} onChange={e => setSenha(e.target.value)} />
                                        <img src='./img/senha.png' alt="Password" />
                                    </div>
                                </div>
                                <button onClick={logar} className='login-button'>
                                    Entrar
                                </button>
                            </div>
                        </div>
                    )}
                </section>



            </main>


        </body>

    )
}

