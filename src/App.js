import React from 'react';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <ProductList />
      </div>
    );
  }
}

export default App;
