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
    return (
      <div className="App">
        <SearchBar getState={ this.getState } />
        <ProductList />
      </div>
    );
  }
}

export default App;
