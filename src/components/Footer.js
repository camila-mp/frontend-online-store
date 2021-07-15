import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          <span>Desenvolvido por </span>
          <a href="https://www.linkedin.com/in/camila-malvessi-6b3367110/" target="_blank" rel="noopener noreferrer"> Camila, </a>
          <a href="https://www.linkedin.com/in/felipelouzeiro/" target="_blank" rel="noopener noreferrer"> Felipe, </a>
          <a href="https://linkedin.com/in/gabrielmedeiro5" target="_blank" rel="noopener noreferrer"> Gabriel, </a>
          <a href="https://www.linkedin.com/in/gabriela-guerra-rabelo-0171991b0" target="_blank" rel="noopener noreferrer"> Gabriela, </a>
          <a href="https://www.linkedin.com/in/guilherme-hermenegildo-junior/" target="_blank" rel="noopener noreferrer"> Guilherme e </a>
          <a href="https://www.rslfilho.com.br/" target="_blank" rel="noopener noreferrer"> Roberval</a>
          <span> usando React.js - Bloco 14 - </span>
          <a href="http://www.betrybe.com.br/" target="_blank" rel="noopener noreferrer">Trybe</a>
        </p>
      </div>
    );
  }
}

export default Footer;
