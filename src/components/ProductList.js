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
    const { list, loading, getProductDetail, addToCart, cartProducts } = this.props;

    if (loading) return <p className="main-container">Carregando...</p>;

    if (list.length === 0) {
      return (
        <div className="main-container">
          <p>Nenhum produto foi encontrado</p>
          <i className="bi bi-x-circle main-container-icon" />
        </div>
      );
    }

    return (
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
};

export default ProductList;
