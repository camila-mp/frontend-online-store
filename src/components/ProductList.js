import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      empty: true,
    }
  }
  render() {
    const { empty } = this.state;
    return (
      <div>
        { empty ? <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p> : 'Lista futura' }
      </div>
    );
  }
}

export default ProductList;
