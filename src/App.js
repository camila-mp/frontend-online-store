import React from 'react';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import './App.css';
import CategoryFilter from './components/CategoryFilter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <CategoryFilter />
        <ProductList />
      </div>
    );
  }
}

export default App;
