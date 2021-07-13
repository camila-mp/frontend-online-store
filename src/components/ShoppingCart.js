import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}

export default ShoppingCart;
