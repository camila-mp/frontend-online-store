import React from 'react';
import PropTypes from 'prop-types';
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

  handleClick(e) {
    e.preventDefault();
    const { getState } = this.props;
    const { search } = this.state;

    getState(search);
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
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Procurar
        </button>
        <BtnCart />
      </header>
    );
  }
}

SearchBar.propTypes = {
  getState: PropTypes.func.isRequired,
};

export default SearchBar;
