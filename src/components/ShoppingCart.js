import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProductCard from './CartProductCard';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.checkCart = this.checkCart.bind(this);
    this.productAmountFilter = this.productAmountFilter.bind(this);
    this.state = {
      empty: true,
      filteredProducts: [],
    };
  }

  componentDidMount() {
    this.checkCart();
    this.productAmountFilter();
  }

  productAmountFilter() {
    const { cartProducts } = this.props;
    let filteredProducts = [];
    cartProducts.forEach((product) => {
      if (!filteredProducts.some((element) => element.product.id === product.id)) {
        const productArray = cartProducts.filter((item) => product.id === item.id);
        filteredProducts = [
          ...filteredProducts,
          { amount: productArray.length, product },
        ];
      }
    });
    console.log(filteredProducts);
    this.setState({
      filteredProducts,
    });
  }

  componentDidUpdade(prevProps) {
    const { cartProducts } = this.props;
    if (prevProps.cartProducts.length !== cartProducts.length) {
      this.productAmountfilter();
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
    const { empty, filteredProducts } = this.state;
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
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
