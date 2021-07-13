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

  // Usando querys na URL para trazer o parâmetro da busca de algumas fontes:
  // https://reactgo.com/react-get-query-params/
  // https://stackoverflow.com/questions/61990792/concat-multiple-query-param-in-react-router
  componentDidUpdate(prevProps) {
    const { query } = this.props;
    const { prevQuery } = prevProps;
    console.log(query, prevQuery);
    if (prevQuery !== query) {
      this.fetchProducts();
    }
  }

  async fetchProducts() {
    const { query, category } = this.props;

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
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductList;
