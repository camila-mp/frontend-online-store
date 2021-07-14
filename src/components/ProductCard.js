import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { product, addToCart } = this.props;
    addToCart(product);
  }

  render() {
    const { product, getProductDetail } = this.props;
    const { title, thumbnail_id: id, price } = product;

    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` } alt="Imagem do Produto" />
        <p>{ price }</p>
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="product-add-to-cart"
          name="selectedProduct"
        >
          Adicionar ao carrinho
        </button>
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
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail_id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  getProductDetail: PropTypes.func.isRequired,
};

export default ProductCard;
