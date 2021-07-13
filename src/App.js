import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <SearchBar />
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
