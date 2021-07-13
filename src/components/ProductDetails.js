import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail_id: id } = product;
    return (
      <div>
        <h3>{ `${title} - R$${price}` } </h3>
        <div>
          <div>
            <img src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` } alt="Imagem do Produto" />
          </div>
          <div>
            infos
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;