import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          <span>Desenvolvido por </span>
          Camila,
          Felipe,
          Gabriel,
          Gabriela,
          Guilherme e
          <a href="https://www.rslfilho.com.br/" target="_blank" rel="noopener noreferrer"> Roberval</a>
          <span> usando React.js - Bloco 14 - </span>
          <a href="http://www.betrybe.com.br/" target="_blank" rel="noopener noreferrer">Trybe</a>
        </p>
      </div>
    );
  }
}

export default Footer;
