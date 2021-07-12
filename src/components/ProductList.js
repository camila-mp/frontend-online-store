import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      empty: true,
    };
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
