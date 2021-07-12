import React from 'react';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.fetchProducts = this.fetchProducts.bind(this);

    this.state = {
      empty: true,
    };
  }

  componentDidUpdate() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { search } = this.props;
    if (search !== '') {
      const response = await api.getProductsFromCategoryAndQuery('$CATEGORY_ID', search);
      console.log(response.results);
    }
  }

  render() {
    const { empty } = this.state;
    if (empty) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }

    return (
      <div>
        Lista
      </div>
    );
  }
}

export default ProductList;
