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
    const { match: { params: { query } } } = this.props;

    if (prevProps.match.params.query !== query) {
      this.fetchProducts();
    }
  }

  async fetchProducts() {
    const { match: { params: { query } } } = this.props;

    this.setState({
      loading: true,
    }, async () => {
      const response = await api.getProductsFromCategoryAndQuery('$CATEGORY_ID', query);
      this.setState({
        list: response.results,
        loading: false,
      });
    });
  }

  render() {
    const { list, loading } = this.state;

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
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductList;
