import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price } = product;
    return (
      <div>
        <h3>{ `${title} - R$${price}` } </h3>
      </div>
    );
  }
}

export default ProductDetails;