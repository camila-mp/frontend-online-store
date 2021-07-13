import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
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
        <BrowserRouter>
          <SearchBar />
          <CategoryFilter categoryList={ categoryList } />
          <Switch>
            <Route exact path="/ShoppingCart" component={ ShoppingCart } />
            <Route exact path="/" component={ ProductList } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
