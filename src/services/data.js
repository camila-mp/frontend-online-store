const storedProducts = JSON.parse(localStorage.getItem('cartProducts'));

export const state = {
  categoryList: [],
  category: '',
  searchQuery: '',
  cartProducts: storedProducts || [],
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
};

export const INITIAL_STATE = {
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
