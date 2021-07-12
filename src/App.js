import React from 'react';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.getState = this.getState.bind(this);

    this.state = {
      search: '',
    };
  }

  getState(searchInput) {
    this.setState({
      search: searchInput,
    });
  }

  render() {
    const { search } = this.state;

    return (
      <div className="App">
        <SearchBar getState={ this.getState } />
        <ProductList search={ search } />
      </div>
    );
  }
}

export default App;
