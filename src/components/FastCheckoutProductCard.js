import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FastCheckoutProductCard.css';
import * as AiIcons from 'react-icons/ai';

class FastCheckoutProductCard extends Component {
  render() {
    const { amount, product } = this.props;
    const { title, thumbnail_id: id, price } = product;

    return (
      <div className="fast-checkout-product">
        <div className="fast-checkout-product-img-div">
          <img
            src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` }
            alt="Imagem do Produto"
            className="fast-checkout-product-img"
          />
        </div>
        <div className="fast-checkout-product-info">
          <p className="fast-checkout-product-name">{ title }</p>
          <div className="fast-checkout-product-setup">
            <p className="fast-checkout-product-price">{ `R$ ${price.toFixed(2)}` }</p>
            <AiIcons.AiOutlineUp />
            <p className="fast-checkout-product-amount">{ amount }</p>
            <AiIcons.AiOutlineDown />
            <AiIcons.AiOutlineDelete />
          </div>
        </div>
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
