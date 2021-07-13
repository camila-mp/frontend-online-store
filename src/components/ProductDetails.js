import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail_id: id } = product;
    return (
      <div>
        <h3 data-testid="product-detail-name">
          { `${title} - R$${price}` }
        </h3>
        <div>
          <div>
            <img src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` } alt="Imagem do Produto" />
          </div>
          <div>
            infos
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail_id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductDetails;
