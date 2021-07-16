import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as AiIcons from 'react-icons/ai';
import './FastCheckout.css';
import { Link } from 'react-router-dom';
import FastCheckoutProductCard from './FastCheckoutProductCard';

class FastCheckout extends Component {
  constructor(props) {
    super(props);

    this.setTotalPrice = this.setTotalPrice.bind(this);

    this.state = {
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.setTotalPrice();
  }

  componentDidUpdate(prevProps) {
    const { cartProducts } = this.props;
    if (cartProducts.length !== prevProps.cartProducts.length) {
      this.setTotalPrice();
    }
  }

  setTotalPrice() {
    const { filteredProducts } = this.props;
    const totalPrice = filteredProducts
      .reduce((acc, { amount, product: { price } }) => (amount * price) + acc, 0);

    this.setState({ totalPrice });
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
        <p className="fast-checkout-heading">Carrinho de Compras</p>
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
        <p className="fast-checkout-total">
          Preço Total: R$
          {` ${totalPrice.toFixed(2)}`}
        </p>
        <Link className="fast-checkout-button" to="/checkout">
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
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FastCheckout;
