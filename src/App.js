import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <ProductList />
      </div>
    );
  }
}

export default App;
