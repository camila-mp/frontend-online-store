import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { name, thumbnail_id: thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <p>{ name }</p>
        <img src={ `https://http2.mlstatic.com/D_NQ_NP_${thumbnail}-W.webp` } alt="Imagem do Produto" />
        <p>{ price }</p>
      </div>
    );
  }
}

export default ProductCard;
