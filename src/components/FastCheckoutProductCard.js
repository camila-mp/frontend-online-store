import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FastCheckoutProductCard extends Component {
  render() {
    const { amount, product } = this.props;
    const { title, thumbnail_id: id, price } = product;

    return (
      <div>
        <p className="fast-checkout-product-name">{ title }</p>
        <div className="fast-checkout-product-img-div">
          <img
            src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` }
            alt="Imagem do Produto"
            className="fast-checkout-product-img"
          />
        </div>
        <p className="fast-checkout-product-price">{ `R$ ${price.toFixed(2)}` }</p>
        <p className="fast-checkout-product-amount">{ amount }</p>
      </div>
    );
  }
}

FastCheckoutProductCard.propTypes = {
  amount: PropTypes.number.isRequired,
  product: PropTypes.shape({
    thumbnail_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default FastCheckoutProductCard;
