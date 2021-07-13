import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      empty: true,
    };
  }

  render() {
    const { empty } = this.state;
    if (empty) {
      return (
        <div>
          <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
        </div>
      );
    }

    return (
      <div>
        shoppingcart
      </div>
    );
  }
}

export default ShoppingCart;
