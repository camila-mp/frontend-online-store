import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import StartMessage from './components/StartMessage';
import * as api from './services/api';
import CategoryFilter from './components/CategoryFilter';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getState = this.getState.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.getProductDetail = this.getProductDetail.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.productAmountFilter = this.productAmountFilter.bind(this);

    this.state = {
      categoryList: [],
      category: '',
      searchQuery: '',
      cartProducts: [],
      productDetails: {},
      list: [],
      loading: true,
      nomeCompleto: '',
      email: '',
      cpf: '',
      telefone: '',
      cep: '',
      endereco: '',
      filteredProducts: [],
    };
  }

  componentDidMount() {
    this.getCategoryList();
  }

  onChangeHandle({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  getState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  async getCategoryList() {
    const list = await api.getCategories();
    this.setState({
      categoryList: list,
    });
  }

  getProductDetail(product) {
    this.setState({
      productDetails: product,
    });
  }

  addToCart(newProduct) {
    this.setState((prevState) => ({
      cartProducts: [...prevState.cartProducts, newProduct],
    }));
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

  productAmountFilter() {
    const { cartProducts } = this.state;
    let filteredProducts = [];
    cartProducts.forEach((product) => {
      if (!filteredProducts.some((element) => element.product.id === product.id)) {
        const productArray = cartProducts.filter((item) => product.id === item.id);
        filteredProducts = [
          ...filteredProducts,
          { amount: productArray.length, product },
        ];
      }
    });
    this.setState({
      filteredProducts,
    });
  }

  render() {
    const {
      categoryList,
      loading,
      list,
      productDetails,
      searchQuery,
      category,
      cartProducts,
      nomeCompleto,
      email,
      cpf,
      telefone,
      cep,
      endereco,
      filteredProducts,
    } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <SearchBar getState={ this.getState } />
          <section className="body-container">
            <CategoryFilter categoryList={ categoryList } getState={ this.getState } />
            <Switch>
              <Route
                exact
                path="/shopping-cart"
                render={ (props) => (<ShoppingCart
                  { ...props }
                  cartProducts={ cartProducts }
                  productAmountFilter={ this.productAmountFilter }
                  filteredProducts={ filteredProducts }
                />) }
              />
              <Route
                path="/search"
                render={ (props) => (<ProductList
                  { ...props }
                  query={ searchQuery }
                  category={ category }
                  addToCart={ this.addToCart }
                  list={ list }
                  loading={ loading }
                  fetchProducts={ this.fetchProducts }
                  getProductDetail={ this.getProductDetail }
                  cartProducts={ cartProducts }
                />) }
              />
              <Route
                exact
                path="/details"
                render={ (props) => (<ProductDetails
                  { ...props }
                  product={ productDetails }
                  addToCart={ this.addToCart }
                />) }
              />
              <Route
                exact
                path="/checkout"
                render={ (props) => (<Checkout
                  { ...props }
                  filteredProducts={ filteredProducts }
                  onChangeHandle={ this.onChangeHandle }
                  nomeCompleto={ nomeCompleto }
                  email={ email }
                  cpf={ cpf }
                  telefone={ telefone }
                  cep={ cep }
                  endereco={ endereco }
                />) }
              />
              <Route exact path="/" component={ StartMessage } />
            </Switch>
          </section>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
