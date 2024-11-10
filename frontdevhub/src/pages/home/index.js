import './index.scss'
import Cabecalho from '../../components/cabecalho'

export default function Home() {
    return (
        <body className='pagina-home'>
            <Cabecalho/>

            <main className='home-conteudo'>
                <section className='conteudo-colecoes'>
                    <h1>
                        COLEÇÕES RECENTES
                    </h1>

                    <div className='colecoes'>
                        <p>oiii</p>
                    </div>
                </section>

                <section className='conteudo-criar'>
                    <div className='criar-info'>
                        <h1>
                            DEVHUB FOR DEVS
                        </h1>

                        <h2>
                            FELL ON BLACK DAYS
                        </h2>

                        <div className='criar-botoes'>
                            <button className='botao-secundario'>
                                VISUALIZAR
                            </button>

                            <button className='botao-primario'>
                                ADICIONAR
                            </button>
                        </div>

                    </div>
                </section>

            </main>
        
        

        </body>
    )
}