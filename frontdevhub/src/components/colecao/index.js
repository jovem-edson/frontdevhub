import './index.scss'
import ColecaoOpcoes from '../menuColecao';
export default function Colecao() {
    return (
        <div className='colecao-container'>
            <div className='colecao-foto'>

            </div>

            <div className='colecao-info'>
                <div>
                    <div className='colecao-cabecalho'>
                        <a>
                            <h1 className='colecao-titulo'>
                                DEVHUB FOR DEVS
                            </h1>
                        </a>

                        <a>
                            <ColecaoOpcoes/>
                        </a>
                    </div>
                    <p className='colecao-desc'>
                        LUANGAMEPLAY
                    </p>
                </div>

                <div>
                    <p className='colecao-data'>
                        2022-10-09
                    </p>


                </div>
            </div>
        </div>
    )
}