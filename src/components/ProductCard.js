import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail_id: thumbnail, price } = product;

    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ `https://http2.mlstatic.com/D_NQ_NP_${thumbnail}-W.webp` } alt="Imagem do Produto" />
        <p>{ price }</p>
      </div>
    );
  }
}

export default ProductCard;
