import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { addToCart, product } = this.props;
    addToCart(product);
  }

  render() {
    const { product } = this.props;
    const {
      title,
      price,
      thumbnail_id: id,
      sold_quantity: soldQuantity,
      available_quantity: availableQuantity,
      address,
      seller,
      shipping,
    } = product;

    const { permalink } = seller;
    const { city_name: cityName, state_name: stateName } = address;
    const { free_shipping: freeShipping } = shipping;

    return (
      <div className="product-details-container">
        <div className="product-details-img-div">
          <img
            src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` }
            alt="Imagem do Produto"
            className="product-details-img"
          />
        </div>
        <div className="product-details-side">
          <p data-testid="product-detail-name" className="product-details-title">
            { title }
          </p>
          <div className="product-details-price-shipping">
            <p className="product-details-price">{`R$ ${price.toFixed(2)}`}</p>
            {
              freeShipping
                ? <p className="product-details-shipping">Frete Grátis!</p> : null
            }
          </div>
          <div className="product-details-info">
            <p>{`Vendidos: ${soldQuantity}`}</p>
            <p>{`Disponível: ${availableQuantity}`}</p>
            <p>{`${cityName} - ${stateName}`}</p>
          </div>
          <div className="product-details-buttons">
            <a
              className="product-details-button-seller"
              href={ permalink }
              target="_blank"
              rel="noopener noreferrer"
            >
              Página do Vendedor
              <i className="bi bi-box-arrow-in-up-right" />
            </a>
            <button
              type="button"
              name="selectedProduct"
              data-testid="product-detail-add-to-cart"
              onClick={ this.addToCart }
              className="add-cart-button"
            >
              Adicione ao carrinho
              <i className="bi bi-cart2" />
            </button>
            <Link className="product-details-button-back" to="/search">
              Voltar
              <i className="bi bi-box-arrow-in-left" />
            </Link>
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
    sold_quantity: PropTypes.number.isRequired,
    available_quantity: PropTypes.number.isRequired,
    address: PropTypes.shape({
      city_name: PropTypes.string,
      state_name: PropTypes.string,
    }),
    seller: PropTypes.shape({
      permalink: PropTypes.string,
    }),
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
