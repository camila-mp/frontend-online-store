import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, value, name, testid, onChangeHandle, isRequired } = this.props;
    if (type === 'checkbox') {
      return (
        <input
          name={ name }
          type={ type }
          value={ value }
          data-testeid={ testid }
          onChange={ onChangeHandle }
          checked={ isRequired }
        >
         <label>{ label }</label>
        </input>
      );
    }
    return (
      <label htmlFor={ name }>
        { label }
        <input
          name={ name }
          type={ type }
          value={ value }
          data-testeid={ testid }
          onChange={ onChangeHandle }
          required={ isRequired }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  label: '',
  isRequired: false,
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
};

export default Input;
