import React from 'react';
import { Link } from 'react-router-dom';

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
      <form>
        <input
          name="search"
          value={ search }
          data-testid="query-input"
          type="text"
          onChange={ this.handleChange }
        />
        <Link to={ `/search/${search}` }>
          <button data-testid="query-button" type="button">Procurar</button>
        </Link>
      </form>
    );
  }
}

export default SearchBar;
