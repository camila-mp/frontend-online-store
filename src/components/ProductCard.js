import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product, getProductDetail } = this.props;
    const { title, thumbnail_id: id, price } = product;

    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` } alt="Imagem do Produto" />
        <p>{ price }</p>
        <Link
          onClick={ () => getProductDetail(product) }
          data-testid="product-detail-link"
          to="/details"
        >
          Ver Detalhes
        </Link>
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
  getProductDetail: PropTypes.func.isRequired,
};

export default ProductCard;
