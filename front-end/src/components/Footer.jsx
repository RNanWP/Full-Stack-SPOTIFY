import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <ul className="social-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/renanodev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/RNanWP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/_rnn.oliveira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            href="https://rnanwp-meu-site.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faAddressCard} />
          </a>
        </li>
      </ul>

      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Time</a></li>
        <li><a href="#">Contato</a></li>
      </ul>

<p className="footer-p">Copyright &#169; 2025 Renan Oliveira | All Rights Reserved.</p>

{/* -------------------------------------- */}

      {/* <div className="footer-container">
        {/* Logo e Nome */}
      {/* <div className="footer-logo">
          <h2>Minha Empresa</h2>
        </div> */}

      {/* Links de navegação */}
      {/* <nav className="footer-nav">
          <ul>
            <li><a href='#home'>Início</a></li>
            <li><a href='#about'>Sobre</a></li>
            <li><a href='#services'>Serviços</a></li>
            <li><a href='#contact'>Contato</a></li>
          </ul>
        </nav> */}

      {/* Icones de redes sociais */}
      {/* <div className="footer-social">
          <a href="https://www.instagram.com/_rnn.oliveira/" target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i>Instagram</a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="https://www.linkedin.com/in/renanodev/"target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin-in'></i>LinkdIn</a>
          <a href="https://github.com/RNanWP" target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i>GitHub</a>
          <a href="mailto:renan92011@hotmail.com" target='_blank' rel='noopener noreferrer'><i className='fa-envelope'></i>E-mail</a>
        </div> */}
      {/* </div>
        
        {/* Direitos Autorais */}
      {/* <div className="footer-copyright">
          &copy; {new Date().getFullYear()} RNanWP. Todos os direitos reservados
        </div> */}

{/* -------------------------------------- */}
    </footer>
  );
};

export default Footer;
