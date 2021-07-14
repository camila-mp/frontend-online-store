import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, value, name, testid, onChangeHandle } = this.props;
    return (
      <label htmlFor={ name }>
        <input name={ name } type={ type } value={ value } />
      </label>
    );
  }
}