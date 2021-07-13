import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import StartMessage from './components/StartMessage';
import * as api from './services/api';
import CategoryFilter from './components/CategoryFilter';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getState = this.getState.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);

    this.state = {
      categoryList: [],
      category: '',
      searchQuery: '',
      productDetails: {},
      list: [],
      loading: true,
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

  fetchProducts() {
    const { searchQuery, category } = this.state;

    this.setState({
      loading: true,
    }, async () => {
      const response = await api.getProductsFromCategoryAndQuery(category, searchQuery);
      this.setState({
        list: response.results,
        loading: false,
      });
    });
  }

  render() {
    const { categoryList, loading, list, productDetails, searchQuery, category } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <SearchBar getState={ this.getState } />
          <CategoryFilter categoryList={ categoryList } getState={ this.getState } />
          <Switch>
            <Route exact path="/ShoppingCart" component={ ShoppingCart } />
            <Route
              path="/search"
              render={ (props) => (<ProductList
                { ...props }
                query= { searchQuery }
                category= { category }
                list={ list }
                loading={ loading }
                fetchProducts={ this.fetchProducts }
              />) }
            />
            <Route
              exact path="/details"
              render={ (props) => (<ProductDetails
                {...props}
                product={ productDetails }
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
