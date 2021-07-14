import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import StartMessage from './components/StartMessage';
import * as api from './services/api';
import CategoryFilter from './components/CategoryFilter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getState = this.getState.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      categoryList: [],
      category: '',
      searchQuery: '',
      cartProducts: [],
    };
  }

  componentDidMount() {
    this.getCategoryList();
  }

  async getCategoryList() {
    const list = await api.getCategories();
    this.setState({
      categoryList: list,
    });
  }

  getState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  addToCart(newProduct) {
    this.setState((prevState) => ({
      cartProducts: [...prevState.cartProducts, newProduct],
    }));
  }

  render() {
    const { categoryList, category, searchQuery, cartProducts } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <SearchBar getState={ this.getState } />
          <CategoryFilter categoryList={ categoryList } getState={ this.getState } />
          <Switch>
            <Route
              exact
              path="/shopping-cart"
              render={ (props) => (<ShoppingCart
                { ...props }
                cartProducts={ cartProducts }
              />) }
            />
            <Route
              path="/search"
              render={ (props) => (<ProductList
                { ...props }
                query={ searchQuery }
                category={ category }
                addToCart={ this.addToCart }
              />) }
            />
            <Route exact path="/" component={ StartMessage } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
