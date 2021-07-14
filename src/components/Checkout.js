import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Checkout extends React.Component {
  componentDidMount() {
    
  }
  renderBuyerInfo() {
    const {
      onChangeHandle,
      nomeCompleto,
      email,
      cpf,
      telefone,
      cep,
      endereco,
    } = this.props;
    return (
      <div>
        <Input
          label="Nome Completo:"
          type="text"
          value={ nomeCompleto }
          name="nomeCompleto"
          testid="checkout-fullname"
          onChangeHandle={ onChangeHandle }
          isRequired
        />
        <Input
          label="Email:"
          type="email"
          value={ email }
          name="email"
          testid="checkout-email"
          onChangeHandle={ onChangeHandle }
          isRequired
        />
        <Input
          label="CPF:"
          type="text"
          value={ cpf }
          name="cpf"
          testid="checkout-cpf"
          onChangeHandle={ onChangeHandle }
          isRequired
        />
        <Input
          label="Telefone:"
          type="text"
          value={ telefone }
          name="telefone"
          testid="checkout-phone"
          onChangeHandle={ onChangeHandle }
          isRequired
        />
        <Input
          label="CEP:"
          type="text"
          value={ cep }
          name="cep"
          testid="checkout-cep"
          onChangeHandle={ onChangeHandle }
          isRequired
        />
        <Input
          label="Endereço:"
          type="text"
          value={ endereco }
          name="endereco"
          testid="checkout-address"
          onChangeHandle={ onChangeHandle }
          isRequired
        />
      </div>
    );
  }

  render() {
    const { cartProducts } = this.props;
    return (
      <div>
        <div>
          { cartProducts.map((product) => (
          <div key={ product.id }>
            <p>{ product.title }</p>
          </div>
          ))}
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

Checkout.propTypes = {
  onChangeHandle: PropTypes.func.isRequired,
  nomeCompleto: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  telefone: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired,
};

export default Checkout;
