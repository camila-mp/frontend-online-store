import React from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import BtnCart from './BtnCart';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      search: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { search } = this.state;

    return (
      <header>
        <img src="https://logospng.org/download/mercado-livre/logo-mercado-livre-256.png" alt="Logo Mercado Livre" />
        <input
          name="search"
          value={ search }
          data-testid="query-input"
          type="text"
          onChange={ this.handleChange }
        />
        <Link to={ `/search?query=${search}` }>
          <button data-testid="query-button" type="button">Procurar</button>
        </Link>
        <BtnCart />
      </header>
    );
  }
}

export default SearchBar;
