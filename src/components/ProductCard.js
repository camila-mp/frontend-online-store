import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product, getProductDetail } = this.props;
    const { title, thumbnail_id: id, price } = product;

    return (
      <Link to="/details">
        <div data-testid="product" onClick={() => getProductDetail(product) }>
          <p>{ title }</p>
          <img src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` } alt="Imagem do Produto" />
          <p>{ price }</p>
        </div>
      </Link>
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
