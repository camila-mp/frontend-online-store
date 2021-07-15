import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './BtnCart.css';

class BtnCart extends Component {
  render() {
    const { totalProductsInCart } = this.props;
    return (
      <div>
        <Link
          to="/shopping-cart"
          className="cart-button"
        >
          <i className="bi bi-cart2" data-testid="shopping-cart-button" />
        </Link>
        <div data-testid="shopping-cart-size">
          { totalProductsInCart }
        </div>
      </div>
    );
  }
}

BtnCart.propTypes = {
  totalProductsInCart: PropTypes.number.isRequired,
};

export default BtnCart;
