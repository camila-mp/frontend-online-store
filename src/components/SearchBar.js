import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <header>
        <img src="https://logospng.org/download/mercado-livre/logo-mercado-livre-256.png" alt="Logo Mercado Livre" />
        <input type="text" placeholder="tem nada aqui ainda" />
      </header>
    );
  }
}

export default SearchBar;
