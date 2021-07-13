import React from 'react';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import './App.css';
import * as api from './services/api';
import CategoryFilter from './components/CategoryFilter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: [],
    };
  }

  // o componentDidMount() faz o 'bind' pra gente :)
  // funçoes chamadas dentro do componentDidMount() sao reconhecidas, pois estao dentro de uma funçao nativa

  componentDidMount() {
    this.getCategoryList();
  }

  async getCategoryList() {
    const list = await api.getCategories();
    this.setState({
      categoryList: list,
    });
  }

  render() {
    const { categoryList } = this.state;
    return (
      <div className="App">
        <SearchBar />
        <CategoryFilter categoryList={ categoryList } />
        <ProductList />
      </div>
    );
  }
}

export default App;
