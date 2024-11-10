import './index.scss'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Rodape() {
  return (
    <footer className='rodape'>
      <div className='rodape-conteudo'>
        <h2 className='rodape-logo'>DEVHUB</h2>
        <nav className='rodape-nav'>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#videos">Vídeos</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className='rodape-icones'>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter aria-hidden="true" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin aria-hidden="true" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub aria-hidden="true" />
      </a>
    </div>
        <p className='rodape-copyright'>© 2024 DEVHUB. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
