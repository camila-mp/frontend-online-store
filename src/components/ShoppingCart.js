import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProductCard from './CartProductCard';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.checkCart = this.checkCart.bind(this);

    this.state = {
      empty: true,
    };
  }

  componentDidMount() {
    const { productAmountFilter } = this.props;
    this.checkCart();
    productAmountFilter();
  }

  componentDidUpdade(prevProps) {
    const { cartProducts, productAmountFilter } = this.props;
    if (prevProps.cartProducts.length !== cartProducts.length) {
      productAmountFilter();
    }
  }

  checkCart() {
    const { cartProducts } = this.props;
    if (cartProducts.length > 0) {
      this.setState({
        empty: false,
      });
    }
  }

  render() {
    const { empty } = this.state;
    const { filteredProducts } = this.props;
    if (empty) {
      return (
        <div>
          <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
        </div>
      );
    }

    return (
      <div>
        { filteredProducts.map((item) => (<CartProductCard
          key={ item.product.id }
          product={ item.product }
          amount={ item.amount }
        />)) }
        <Link data-testid="checkout-products" to="/checkout">
          Finalizar Compra!
        </Link>
      </div>
      
    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
