import './index.scss'
import { useNavigate } from 'react-router-dom'

export default function Cabecalho({ onLoginClick, showLogin }) {
    const navigate = useNavigate();

    function logOff() {
        localStorage.removeItem('TOKEN');
        navigate('/', { state: { showLogin: false } });
    }

    return (
        <header className='cabecalho'>
            <div className='cabecalho-logo'>
                <h1>DEV<p>HUB</p></h1>
                {localStorage.getItem('TOKEN') ? (

                    <span className="logoff-link">
                        Retornar para &nbsp;
                        <a href="#" onClick={logOff} className="logoff-button">
                            portada
                        </a>
                    </span>
                ) : (
                    <>
                        <div className='nav' >
                            <a href='#home' className='link'>Home</a>
                            <a href='#portfolio' className='link'>Portfólio</a>
                            <a href='#agenda' className='link'>Agenda</a>
                            <a href='#mensagens' className='link'>Mensagens</a>
                            <a href='#faturamento' className='link'>Faturamento</a>
                        </div>
                        <button onClick={onLoginClick} className="cabecalho-botao">
                            <b>Login</b>
                        </button>
                    </>
                )}
            </div>
        </header>
    )
}