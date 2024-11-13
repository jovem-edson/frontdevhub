import './index.scss'
import { useNavigate } from 'react-router-dom'

export default function Cabecalho({ onLoginClick, showLogin }) {

    const navigate = useNavigate();

    function logOff() {
        localStorage.removeItem('TOKEN');
        navigate('/');
    }

    return (
        <header className='cabecalho'>
            <div className='cabecalho-logo' >
                {showLogin ? (
                    <div>
                        <h1>DEV<p>HUB</p></h1>
                        <span className="logoff-link">
                            Retornar para &nbsp;
                            <a href="#" onClick={logOff} className="logoff-button">
                                portada
                            </a>
                        </span>
                    </div>
                ) : (
                    <div className="cabecalho">
                        <div className="cabecalho-logo" style={{
                    width: 1350 + 'px'}}>
                            <h1>DEV<p>HUB</p></h1>
                        </div>
                        <button onClick={onLoginClick} className="cabecalho-botao">
                            <b>Login</b>
                        </button>
                    </div>

                )}
            </div>
        </header>
    )
}