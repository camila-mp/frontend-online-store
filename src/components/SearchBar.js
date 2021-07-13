import React from 'react';
import BtnCart from './BtnCart';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="tem nada aqui ainda" />
        <BtnCart />
      </div>
    );
  }
}

export default SearchBar;
