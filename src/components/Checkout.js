import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import './Checkout.css';

const siglas = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MS',
  'MT',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

class Checkout extends React.Component {
  renderBuyerInfo() {
    const {
      onChangeHandle,
      nomeCompleto,
      email,
      cpf,
      telefone,
      cep,
      endereco,
      cidade,
    } = this.props;
    return (
      <div className="checkout-info">
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
        <Input
          label="Cidade:"
          type="text"
          value={ cidade }
          name="cidade"
          onChangeHandle={ onChangeHandle }
          isRequired
        />
        <label htmlFor="estado">
          Estado:
          <select name="estado" onChange={ onChangeHandle }>
            { siglas.map((estado) => (
              <option
                key={ estado }
                value={ estado }
              >
                { estado }
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }

  renderPaymentMethod() {
    const { onChangeHandle } = this.props;
    return (
      <div className="checkout-payment">
        <Input
          label="Boleto"
          type="radio"
          value="boleto"
          name="payment"
          onChangeHandle={ onChangeHandle }
        />
        <Input
          label="Cartão de Crédito"
          type="radio"
          value="cc"
          name="payment"
          onChangeHandle={ onChangeHandle }
        />
        <Input
          label="Pix"
          type="radio"
          value="pix"
          name="payment"
          onChangeHandle={ onChangeHandle }
        />
      </div>
    );
  }

  render() {
    const { filteredProducts, btnClick } = this.props;
    let total = 0;
    return (
      <div className="checkout-container">
        <p>Detalhes da compra:</p>
        <div className="checkout-products-list">
          { filteredProducts.map(({ amount, product }) => {
            total += Number(product.price) * amount;
            const { thumbnail_id: id } = product;
            return (
              <div className="checkout-product" key={ product.id }>
                <div className="checkout-image">
                  <img className="product-card-image" src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` } alt="Imagem do Produto" />
                </div>
                <div className="checkout-product-info">
                  <p>{ product.title }</p>
                  <p>{`Quantidade: ${amount}`}</p>
                  <p>{`Preço: R$${product.price}`}</p>
                </div>
              </div>
            );
          })}
          <h3>{`Total: R$${total}`}</h3>
        </div>
        <form className="checkout-form">
          <p>Informações para entrega:</p>
          { this.renderBuyerInfo() }
          <p>Método de Pagamento:</p>
          { this.renderPaymentMethod() }
          <button type="button" onClick={ btnClick }>
            Confirmar Pagamento
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
  cidade: PropTypes.string.isRequired,
  btnClick: PropTypes.func.isRequired,
  filteredProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Checkout;
