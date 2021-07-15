import React from 'react';

class FormEvaluator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      textArea: '',
    };

    this.submitBtn = this.submitBtn.bind(this);
    this.btnClick = this.btnClick.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.loadLocalStorage = this.loadLocalStorage.bind(this);
  }

  componentDidMount() {
    this.loadLocalStorage();
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  submitBtn() {
    localStorage.setItem('user', JSON.stringify(this.state));
  }

  btnClick(event) {
    this.setState({ rating: event.target.value });
  }

  loadLocalStorage() {
    const localState = JSON.parse(localStorage.getItem('user'));
    if (localState === null) return null;
    this.setState(localState);
  }

  render() {
    const { email, textArea } = this.state;
    return (
      <form>
        <h2>Avaliações</h2>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            value={ email }
            placeholder="Email"
            onChange={ this.onChangeEmail }
          />
        </label>
        <div>
          <label htmlFor="rating">
            <input
              type="radio"
              id="rating"
              onClick={ this.btnClick }
            />
          </label>
          <label htmlFor="rating">
            <input
              type="radio"
              id="rating"
              onClick={ this.btnClick }
            />
          </label>
          <label htmlFor="rating">
            <input
              type="radio"
              id="rating"
              onClick={ this.btnClick }
            />
          </label>
          <label htmlFor="rating">
            <input
              type="radio"
              id="rating"
              onClick={ this.btnClick }
            />
          </label>
          <label htmlFor="rating">
            <input
              type="radio"
              id="rating"
              onClick={ this.btnClick }
            />
          </label>
        </div>
        <label htmlFor="textArea">
          <textarea
            data-testid="product-detail-evaluation"
            id="textArea"
            value={ textArea }
            placeholder="Mensagem (opcional)"
            onChange={ (event) => this.setState({ textArea: event.target.value }) }
          />
        </label>
        <button
          type="submit"
          id="btn-form"
          onClick={ () => this.submitBtn }
        >
          Avaliar
        </button>
      </form>
    );
  }
}

export default FormEvaluator;
