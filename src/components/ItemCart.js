// import React from 'react';
// import PropTypes from 'prop-types';

// class ItemCart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       quantity: 1,
//     };
//     this.decreaseQuant = this.decreaseQuant.bind(this);
//     this.increaseQuant = this.increaseQuant.bind(this);
//   }

//   decreaseQuant() {
//     this.setState({
//       quantity: quantity - 1,
//     });
//   }

//   increaseQuant() {
//     this.setState({
//       quantity: quantity + 1,
//     });
//   }

//   render() {
//     const { quantity } = this.state;
//     const { product } = this.props;
//     const { title, price, thumbnail_id: id } = product;
//     return (
//       <div data-testid="product">
//         <h4 data-testid="shopping-cart-product-name">{ title }</h4>
//         <p>{ price }</p>
//         <img src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` } alt={ title } />
//         <button
//           data-testid="product-decrease-quantity"
//           type="button"
//           onClick={ this.decreaseQuant }
//         >
//           -
//         </button>
//         <p>
//           { quantity }
//         </p>
//         <button
//           data-testid="product-increase-quantity"
//           type="button"
//           onClick={ this.increaseQuant }
//         >
//           +
//         </button>
//         <button
//           type="button"
//         >
//           X
//         </button>
//         <button
//           type="button"
//         >
//           Finalizar Compra
//         </button>
//       </div>
//     );
//   }
// }

// ItemCart.propTypes = {
//   item: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     thumbnail_id: PropTypes.string.isRequired,
//   }),
// }.isRequired;

// export default ItemCart;
