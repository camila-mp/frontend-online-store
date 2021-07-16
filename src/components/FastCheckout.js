import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as AiIcons from 'react-icons/ai';
import './FastCheckout.css';
import { Link } from 'react-router-dom';
import FastCheckoutProductCard from './FastCheckoutProductCard';

class FastCheckout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPrice: 0,
    };
  }

  render() {
    const { showFastCheckout, fastCheckout, filteredProducts } = this.props;
    const { totalPrice } = this.state;

    return (
      <div
        className={ showFastCheckout ? 'fast-checkout active' : 'fast-checkout' }
        // onMouseLeave={ fastCheckout }
      >
        <div className="fast-checkout-top-buttons">
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
            className="fast-btn-cart"
          >
            <i className="bi bi-cart2" />
          </Link>
          <AiIcons.AiOutlineClose onClick={ fastCheckout } />
        </div>
        <div className="fast-checkout-products">
          {
            filteredProducts
              .map(({ amount, product }) => (
                <FastCheckoutProductCard
                  key={ `FC-${product.id}` }
                  amount={ amount }
                  product={ product }
                />
              ))
          }
        </div>
        <p>
          Total - R$
          {` ${totalPrice.toFixed(2)}`}
        </p>
        <Link to="/checkout">
          Finalizar Compra!
        </Link>
      </div>
    );
  }
}

FastCheckout.propTypes = {
  showFastCheckout: PropTypes.bool.isRequired,
  fastCheckout: PropTypes.func.isRequired,
  filteredProducts: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number.isRequired,
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
};

export default FastCheckout;
