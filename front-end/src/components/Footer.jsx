import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__waves" aria-hidden="true">
        <svg
          className="footer__wave footer__wave--back"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M-80 72C103 22 290 105 475 63C655 22 828 101 1010 57C1195 13 1360 92 1520 48V120H-80Z" />
        </svg>

        <svg
          className="footer__wave footer__wave--middle"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M-80 65C95 111 252 21 435 55C620 89 785 112 960 65C1140 17 1320 33 1520 77V120H-80Z" />
        </svg>

        <svg
          className="footer__wave footer__wave--front"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M-80 81C86 40 258 98 432 77C609 55 770 39 948 78C1125 117 1307 55 1520 70V120H-80Z" />
        </svg>
      </div>

      <div className="footer__content">
        <section className="footer__section footer__section--social">
          <p className="footer__eyebrow">Onde me encontrar</p>

          <ul className="social-icons" aria-label="Redes sociais">
            <li>
              <a
                href="https://www.linkedin.com/in/renanodev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RNanWP"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_rnn.oliveira"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://rnanwp-meu-site.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfólio"
                title="Portfólio"
              >
                <FontAwesomeIcon icon={faAddressCard} />
              </a>
            </li>
          </ul>
        </section>

        <nav
          className="footer__section footer__navigation"
          aria-label="Navegação do rodapé"
        >
          <p className="footer__eyebrow">Navegação</p>

          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Time</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>

        <section className="footer__section footer__section--copyright">
          <p className="footer__eyebrow">Projeto pessoal</p>
          <p className="footer-p">
            Copyright &#169; {currentYear} Renan Oliveira
            <span>All Rights Reserved.</span>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
