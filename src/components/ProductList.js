import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

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
    const { list, loading } = this.props;

    if (loading) return <p>Carregando...</p>;

    if (list.length === 0) {
      return (
        <p>Nenhum produto foi encontrado</p>
      );
    }

    return (
      <div>
        {
          list.map((product) => <ProductCard key={ product.id } product={ product } />)
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default ProductList;
