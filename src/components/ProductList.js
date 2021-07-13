import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import './ProductList.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.fetchProducts = this.fetchProducts.bind(this);

    this.state = {
      loading: true,
      list: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    const { query, category } = this.props;
    const { query: prevQuery, category: prevCategory } = prevProps;

    if (prevQuery !== query || prevCategory !== category) {
      this.fetchProducts();
    }
  }

  async fetchProducts() {
    const { query, category } = this.props;

    this.setState({
      loading: true,
    }, async () => {
      const response = await api.getProductsFromCategoryAndQuery(category, query);
      this.setState({
        list: response.results,
        loading: false,
      });
    });
  }

  render() {
    const { list, loading } = this.state;

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
          list.map((product) => <ProductCard key={ product.id } product={ product } />)
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductList;
