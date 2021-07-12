import React from 'react';

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
          placeholder="tem nada aqui ainda"
          onChange={ this.handleChange }
        />
        <button data-testid="query-button" type="submit">Procurar</button>
      </form>
    );
  }
}

export default SearchBar;
