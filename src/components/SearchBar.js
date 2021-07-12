import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  handleSubmit(e) {
    e.preventDefault();

    const { getState } = this.props;
    const { search } = this.state;

    getState(search);
  }

  render() {
    const { search } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          name="search"
          value={ search }
          data-testid="query-input"
          type="text"
          placeholder="tem nada aqui ainda"
          onChange={ this.handleChange }
        />
        <button data-testid="query-button" type="submit">Procurar</button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  getState: PropTypes.func.isRequired,
};

export default SearchBar;
