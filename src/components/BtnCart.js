import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BtnCart extends Component {
  render() {
    return (
      <Link to="/shopping-cart">
        <i className="bi bi-cart2" data-testid="shopping-cart-button" />
      </Link>
    );
  }
}

export default BtnCart;
