import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormEvaluator from './FormEvaluator';

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
      <div>
        <h3 data-testid="product-detail-name">
          { `${title} - R$${price}` }
        </h3>
        <div>
          <div>
            <img src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` } alt="Imagem do Produto" />
          </div>
          <div>
            <ul>
              <li>{`Preço: ${price}`}</li>
              <li>{`Produtos Vendidos: ${soldQuantity}`}</li>
              <li>{`Quantidade Disponível: ${availableQuantity}`}</li>
              <li>{`Cidade: ${cityName}`}</li>
              <li>{`Estado: ${stateName}`}</li>
              { freeShipping ? <li>Frete Grátis!</li> : null }
              <a href={ permalink }>Vendedor</a>
            </ul>
            <button
              type="button"
              name="selectedProduct"
              data-testid="product-detail-add-to-cart"
              onClick={ this.addToCart }
            >
              Adicione ao carrinho
            </button>
            <Link to="/search">Voltar</Link>
            <FormEvaluator />
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
