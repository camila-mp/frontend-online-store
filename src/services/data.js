export const state = (param) => ({
  categoryList: [],
  category: '',
  searchQuery: '',
  cartProducts: param || [],
  productDetails: {},
  list: [],
  loading: true,
  nomeCompleto: '',
  email: '',
  cpf: '',
  telefone: '',
  cep: '',
  endereco: '',
  cidade: '',
  estado: '',
  payment: 'boleto',
  filteredProducts: [],
  fastCheckout: false,
});

const INITIAL_STATE = {
  nomeCompleto: '',
  email: '',
  cpf: '',
  telefone: '',
  cep: '',
  endereco: '',
  cidade: '',
  estado: '',
  payment: 'boleto',
};

export default INITIAL_STATE;
