import React from 'react';

class FormEvaluator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      textArea: '',
      rating: 0,
    };

    this.submitBtn = this.submitBtn.bind(this);
    this.btnClick = this.btnClick.bind(this);
    this.onChangeClick = this.onChangeClick.bind(this);
    this.loadLocalStorage = this.loadLocalStorage.bind(this);
  }

  componentDidMount() {
    this.loadLocalStorage();
  }

  onChangeClick({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submitBtn() {
    localStorage.setItem('user', JSON.stringify(this.state));
  }

  btnClick(event) {
    this.setState({ rating: event.target.value });
  }

  loadLocalStorage() {
    const localState = JSON.parse(localStorage.getItem('user'));
    if (localState) this.setState(localStorage);
  }

  render() {
    const { email, textArea } = this.state;
    return (
      <form>
        <h2>Avaliações</h2>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            value={ email }
            placeholder="Email"
            onChange={ this.onChangeClick }
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
            name="textArea"
            id="textArea"
            value={ textArea }
            placeholder="Mensagem (opcional)"
            onChange={ this.onChangeClick }
          />
        </label>
        <button
          type="submit"
          id="btn-form"
          onClick={ this.submitBtn }
        >
          Avaliar
        </button>
      </form>
    );
  }
}

export default FormEvaluator;
