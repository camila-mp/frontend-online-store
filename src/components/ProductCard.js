import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail_id: id, price } = product;

    return (
      <div data-testid="product" className="product-card">
        <p className="product-card-title">{ title }</p>
        <div className="product-card-image-div">
          <img className="product-card-image" src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` } alt="Imagem do Produto" />
        </div>
        <p className="product-card-price">{ `R$ ${price.toFixed(2)}` }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail_id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
