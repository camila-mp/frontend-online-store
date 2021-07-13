import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import './App.css';
import StartMessage from './components/StartMessage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <SearchBar />
          <Switch>
            <Route path="/search" component={ ProductList } />
            <Route exact path="/" component={ StartMessage } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
