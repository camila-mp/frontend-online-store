import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ProductCard from './ProductCard';

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
    const { getState } = this.props;

    if (loading) return <p>Carregando...</p>;

    if (list.length === 0) {
      return (
        <p>Nenhum produto foi encontrado</p>
      );
    }

    return (
      <div>
        {
          list.map((product) => <ProductCard key={ product.id } product={ product } getState={ getState } />)
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  getState: PropTypes.func.isRequired,
};

export default ProductList;
