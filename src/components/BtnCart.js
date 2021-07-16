import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BtnCart.css';

class BtnCart extends Component {
  render() {
    const { totalProductsInCart, fastCheckout } = this.props;
    return (
      <button type="button" onClick={ fastCheckout } className="cart-button">
        <i className="bi bi-cart2" />
        <div data-testid="shopping-cart-size" className="btn-cart-amount">
          { totalProductsInCart }
        </div>
      </button>
    );
  }
}

BtnCart.propTypes = {
  totalProductsInCart: PropTypes.number.isRequired,
  fastCheckout: PropTypes.func.isRequired,
};

export default BtnCart;
