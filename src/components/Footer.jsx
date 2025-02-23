import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Logo e Nome */}
        <div className="footer-logo">
          <h2>Minha Empresa</h2>
        </div>

        {/* Links de navegação */}
        <nav className="footer-nav">
          <ul>
            <li><a href='#home'>Início</a></li>
            <li><a href='#about'>Sobre</a></li>
            <li><a href='#services'>Serviços</a></li>
            <li><a href='#contact'>Contato</a></li>
          </ul>
        </nav>

        {/* Icones de redes sociais */}
        <div className="footer-social">
          <a href="https://www.instagram.com/_rnn.oliveira/" target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i>Instagram</a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="https://www.linkedin.com/in/renanodev/"target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin-in'></i>LinkdIn</a>
          <a href="https://github.com/RNanWP" target='_blank' rel='noopener noreferrer'><i className='fab fa-intagram'></i>GitHub</a>
          <a href="mailto:renan92011@hotmail.com" target='_blank' rel='noopener noreferrer'><i className='fab fa-intagram'></i>E-mail</a>
        </div>
      </div>
        
        {/* Direitos Autorais */}
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} RNanWP. Todos os direitos reservados
        </div>
    </footer>
  )
}

export default Footer
