import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SearchBar.css';
import BtnCart from './BtnCart';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

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

  handleClick({ target: { name } }) {
    const { getState } = this.props;
    const { search } = this.state;

    getState(name, search);
  }

  // Essa sintaxe this.btn.click() assim como o ref={...} no button foram aprendidos aqui:
  // https://reactgo.com/react-trigger-button-click/
  handleKeyPress(e) {
    const ENTER_KEY_CODE = 13;
    if (e.keyCode === ENTER_KEY_CODE) {
      this.btn.click();
    }
  }

  render() {
    const { search } = this.state;
    const { totalProductsInCart, fastCheckout } = this.props;

    return (
      <header>
        <Link to="/">
          <img src="https://logospng.org/download/mercado-livre/logo-mercado-livre-256.png" alt="Logo Mercado Livre" />
        </Link>
        <input
          name="search"
          value={ search }
          data-testid="query-input"
          type="text"
          onChange={ this.handleChange }
          onKeyUp={ this.handleKeyPress }
        />
        <Link to="/search">
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
            name="searchQuery"
            ref={ (node) => { this.btn = node; } }
          >
            Procurar
          </button>
        </Link>
        <BtnCart
          totalProductsInCart={ totalProductsInCart }
          fastCheckout={ fastCheckout }
        />
      </header>
    );
  }
}

SearchBar.propTypes = {
  getState: PropTypes.func.isRequired,
  fastCheckout: PropTypes.func.isRequired,
  totalProductsInCart: PropTypes.number.isRequired,
};

export default SearchBar;
