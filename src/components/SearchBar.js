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

  render() {
    const { search } = this.state;
    const { totalProductsInCart } = this.props;

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
        />
        <Link to="/search">
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
            name="searchQuery"
          >
            Procurar
          </button>
        </Link>
        <BtnCart
          totalProductsInCart={ totalProductsInCart }
        />
      </header>
    );
  }
}

SearchBar.propTypes = {
  getState: PropTypes.func.isRequired,
  totalProductsInCart: PropTypes.number.isRequired,
};

export default SearchBar;
