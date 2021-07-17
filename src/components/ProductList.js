import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';

class ProductList extends React.Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  componentDidUpdate(prevProps) {
    const { query, category, fetchProducts } = this.props;
    const { query: prevQuery, category: prevCategory } = prevProps;

    if (prevQuery !== query || prevCategory !== category) {
      fetchProducts();
    }
  }

  render() {
    const {
      list,
      loading,
      getProductDetail,
      addToCart,
      cartProducts,
      onChange,
      listOrder,
    } = this.props;

    if (loading) return <p className="main-container">Carregando...</p>;

    if (list.length === 0) {
      return (
        <div className="main-container">
          <p>Nenhum produto foi encontrado</p>
          <i className="bi bi-x-circle main-container-icon" />
        </div>
      );
    }
    if (listOrder === 'maior') list.sort((a, b) => b.price - a.price);
    if (listOrder === 'menor') list.sort((a, b) => a.price - b.price);

    return (
      <div>
        <label htmlFor="listOrder">
          Ordenado por:
          <select className="product-list-order" name="listOrder" onChange={ onChange }>
            <option value="">-</option>
            <option value="maior">Maior Preço</option>
            <option value="menor">Menor Preço</option>
          </select>
        </label>
        <div className="product-container">
          {
            list.map((product) => (<ProductCard
              key={ product.id }
              product={ product }
              addToCart={ addToCart }
              getProductDetail={ getProductDetail }
              cartProducts={ cartProducts }
            />))
          }
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  getProductDetail: PropTypes.func.isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  listOrder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProductList;
