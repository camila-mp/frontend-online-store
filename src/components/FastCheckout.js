import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FastCheckout.css';

class FastCheckout extends Component {
  render() {
    const { showFastCheckout } = this.props;

    return (
      <div className={ showFastCheckout ? 'fast-checkout active' : 'fast-checkout' }>
        FastCheckout
      </div>
    );
  }
}

FastCheckout.propTypes = {
  showFastCheckout: PropTypes.bool.isRequired,
};

export default FastCheckout;
