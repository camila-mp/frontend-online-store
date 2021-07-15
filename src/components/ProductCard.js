import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';

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
    const {
      title,
      thumbnail_id: id,
      price,
      shipping: { free_shipping: freeShipping },
    } = product;

    return (
      <div data-testid="product" className="product-card">
        <p className="product-card-title">{ title }</p>
        <div className="product-card-image-div">
          <img className="product-card-image" src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` } alt="Imagem do Produto" />
        </div>
        <p className="product-card-price">{ `R$ ${price.toFixed(2)}` }</p>
        { freeShipping && <p data-testid="free-shipping">Frete Grátis!</p> }
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }),
  }).isRequired,
  getProductDetail: PropTypes.func.isRequired,
};

export default ProductCard;
