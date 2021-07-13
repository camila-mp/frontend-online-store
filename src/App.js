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

    this.state = {
      categoryList: [],
      category: '',
      searchQuery: '',
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

  render() {
    const { categoryList, category, searchQuery } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <SearchBar getState={ this.getState } />
          <section className="body-container">
            <CategoryFilter categoryList={ categoryList } getState={ this.getState } />
            <Switch>
              <Route exact path="/ShoppingCart" component={ ShoppingCart } />
              <Route
                path="/search"
                render={ (props) => (<ProductList
                  { ...props }
                  query={ searchQuery }
                  category={ category }
                />) }
              />
              <Route exact path="/" component={ StartMessage } />
            </Switch>
          </section>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
