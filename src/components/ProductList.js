import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.fetchProducts = this.fetchProducts.bind(this);

    this.state = {
      empty: true,
      list: [],
    };
  }

  componentDidUpdate() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { search } = this.props;

    if (search !== '') {
      const response = await api.getProductsFromCategoryAndQuery('$CATEGORY_ID', search);
      this.setState({
        empty: false,
        list: response.results,
      });
    }
  }

  render() {
    const { empty, list } = this.state;

    if (empty) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }

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
  search: PropTypes.string.isRequired,
};

export default ProductList;
