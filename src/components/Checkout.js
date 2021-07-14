import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <div>
          itens comprados
        </div>
        <form>
          <div>
            info comprador
          </div>
          <div>
            metodo pagamento
          </div>
          <button type="submit">
            Pagamento
          </button>
        </form>
      </div>
    );
  }
}

export default Checkout;