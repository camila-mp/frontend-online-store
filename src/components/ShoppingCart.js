import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      empyt: true,
    };
  }

  render() {
    const { empyt } = this.state;
    if (empyt) {
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
