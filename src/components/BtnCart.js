import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BtnCart.css';

class BtnCart extends Component {
  render() {
    return (
      <Link to="/ShoppingCart" className="shopping-cart-button">
        <i className="bi bi-cart2" data-testid="shopping-cart-button" />
      </Link>
    );
  }
}

export default BtnCart;
