import React from 'react';
import PropTypes from 'prop-types';

class CartProductCard extends React.Component {
  render() {
    const { product, amount, addToCart, rmvFromCart } = this.props;
    const { title, thumbnail_id: id, price } = product;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` } alt="Imagem do Produto" />
        <p>{ price }</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => rmvFromCart(product) }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ amount }</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => addToCart(product) }
        >
          +
        </button>
        <button
          type="button"
        >
          X
        </button>
      </div>
    );
  }
}

CartProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail_id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  amount: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  rmvFromCart: PropTypes.func.isRequired,
};

export default CartProductCard;
