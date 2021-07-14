import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Checkout extends React.Component {
  renderBuyerInfo() {
    return (
      <div>

      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          itens comprados
        </div>
        <form>
          { this.renderBuyerInfo() }
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
